"""Test automatique de Diét'Académie : joue toutes les leçons et toutes les questions dans un vrai navigateur.
Usage : python3 tester.py [dossier_captures]"""
import json, sys, html, os, threading, http.server, socketserver, functools, pathlib, re, time
from playwright.sync_api import sync_playwright

RACINE = pathlib.Path(__file__).resolve().parent
CAPT = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else None
if CAPT: CAPT.mkdir(parents=True, exist_ok=True)

class Silencieux(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
Handler = functools.partial(Silencieux, directory=str(RACINE))
srv = socketserver.TCPServer(('127.0.0.1', 0), Handler)
port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = f'http://127.0.0.1:{port}/index.html'

cat = json.loads((RACINE / 'catalogue.json').read_text())
cours = {}
for u in cat['univers']:
    for m in u['matieres']:
        for s in m['sections']:
            for c in s['cours']:
                if c.get('fichier'):
                    cours[c['id']] = json.loads((RACINE / c['fichier']).read_text())

erreurs = []
def capt(page, nom):
    if CAPT:
        page.wait_for_timeout(350); page.screenshot(path=str(CAPT / f'{nom}.png'), full_page=False)

def repondre(page, q, juste=True):
    t = q['type']
    if t == 'qcm':
        page.click(f'[data-action=qcm][data-i="{0 if juste else 1}"]')
    elif t == 'vf':
        v = q['bonne'] if juste else (not q['bonne'])
        page.click(f'[data-action=vf][data-v="{"true" if v else "false"}"]')
    elif t == 'ordre':
        if juste:
            cible = [re.sub('<[^>]+>', '', x).strip() for x in q['items']]
            for _ in range(60):
                actuel = page.eval_on_selector_all('.ordre-item span:nth-child(2)', 'els => els.map(e => e.textContent.trim())')
                if actuel == cible: break
                # premier élément mal placé : on le fait monter
                for pos, txt in enumerate(actuel):
                    if txt != cible[pos]:
                        j = actuel.index(cible[pos])
                        page.click(f'[data-action=monter][data-p="{j}"]')
                        break
        page.click('[data-action=valider-ordre]')
    elif t == 'paires':
        n = len(q['paires'])
        if not juste:
            page.click('[data-action=pg][data-i="0"]'); page.click('[data-action=pd][data-i="1"]')
            page.click('[data-action=pg][data-i="1"]'); page.click('[data-action=pd][data-i="0"]')
        for i in range(n):
            if page.is_disabled(f'[data-action=pg][data-i="{i}"]'): continue
            page.click(f'[data-action=pg][data-i="{i}"]'); page.click(f'[data-action=pd][data-i="{i}"]')
    page.wait_for_selector('.retour-q')
    ok = 'ok' in page.get_attribute('.retour-q', 'class')
    if ok != juste and not (t == 'paires' and not juste and n <= 1):
        erreurs.append(f'Résultat inattendu pour {q["id"]} ({t}) : juste={juste}, affiché ok={ok}')

with sync_playwright() as p:
    nav = p.chromium.launch(executable_path='/usr/bin/google-chrome')
    ctx = nav.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, locale='fr-FR')
    page = ctx.new_page()
    page.on('pageerror', lambda e: erreurs.append(f'Erreur JS : {e}'))
    page.on('console', lambda m: m.type == 'error' and erreurs.append(f'Console : {m.text}'))
    page.goto(URL); page.wait_for_selector('.univers')
    capt(page, '01-accueil-vide')

    # Navigation
    page.click('.univers.pratique'); page.wait_for_selector('.ligne'); capt(page, '02-univers')
    page.click('[data-vers="#/m/sante-publique"]'); page.wait_for_selector('.ligne'); capt(page, '03-matiere')
    page.click('[data-vers="#/c/sp-enjeux"]'); page.wait_for_selector('.lecon-ligne'); capt(page, '04-cours')

    nb_lecons = nb_q = 0
    joues = []
    for cid, c in cours.items():
        for li, lec in enumerate(c['lecons']):
            if os.environ.get('LECONS') and lec['id'] not in os.environ['LECONS'].split(): continue
            page.goto(f'{URL}#/l/{lec["id"]}'); page.wait_for_selector('.ecran h1')
            for e in range(len(lec['ecrans'])):
                for b in page.query_selector_all('[data-action=retourner]'): b.click()
                if lec['id'] in ('sp-enjeux-01', 'sp-enjeux-10', 'sp-enjeux-12', 'sp-enjeux-26', 'sp-enjeux-29') or li == 0:
                    capt(page, f'L-{lec["id"]}-e{e}')
                page.click('[data-action=ecran-suiv]')
            for qi, q in enumerate(lec['questions']):
                page.wait_for_selector('.question')
                if lec['id'] in ('sp-enjeux-01', 'sp-enjeux-02', 'sp-enjeux-12') : capt(page, f'Q-{lec["id"]}-{qi}-avant')
                repondre(page, q, juste=True); nb_q += 1
                if lec['id'] in ('sp-enjeux-01', 'sp-enjeux-02', 'sp-enjeux-12'): capt(page, f'Q-{lec["id"]}-{qi}-apres')
                page.click('[data-action=q-suiv]')
            page.wait_for_selector('.fete')
            if li == 0: capt(page, 'fin-lecon')
            nb_lecons += 1; joues.append(lec)

    etat = page.evaluate('window.__bouchees.etat()')
    faites = sum(1 for v in etat['lecons'].values() if v.get('fait'))
    if faites != nb_lecons: erreurs.append(f'{faites} leçons marquées faites sur {nb_lecons}')
    total_q = sum(len(l['questions']) + len(l.get('revision', [])) for l in joues)
    if len(etat['cartes']) != total_q: erreurs.append(f'{len(etat["cartes"])} cartes de révision au lieu de {total_q}')

    # Révisions : on rend toutes les cartes « dues », puis on joue plusieurs sessions (justes et fausses)
    page.evaluate("() => { const e = window.__bouchees.etat(); for (const k in e.cartes) e.cartes[k].due = Date.now() - 1000; localStorage.setItem('dietacademie-progression-v1', JSON.stringify(e)); }")
    page.goto(URL); page.wait_for_selector('.univers'); capt(page, '05-accueil-revisions')
    index_q = {}
    for c in cours.values():
        for l in c['lecons']:
            for q in l['questions'] + l.get('revision', []): index_q[(l['id'], q['id'])] = q
    vus = 0; sessions = 0
    page.goto(f'{URL}#/revisions')
    while True:
        page.wait_for_selector('.question, .fete')
        if page.query_selector('.fete'): break
        sessions += 1
        while page.query_selector('.question') and not page.query_selector('.fete'):
            # retrouver la question affichée via l'état interne
            cid = page.evaluate("() => { const t = document.querySelector('.question h1').innerHTML; return t; }")
            q = next((qq for qq in index_q.values() if html.unescape(qq['q']) == html.unescape(cid)), None)
            if q is None: erreurs.append('Question de révision introuvable : ' + cid[:60]); break
            juste = (vus % 3 != 0)
            if vus == 2: capt(page, 'R-question')
            repondre(page, q, juste=juste); vus += 1
            if vus == 3: capt(page, 'R-retour')
            page.click('[data-action=noter]')
            page.wait_for_selector('.question, .fete')
        if page.query_selector('[data-action=revisions-encore]'):
            capt(page, 'R-fin'); page.click('[data-action=revisions-encore]')
        else: break
        if sessions > 60: erreurs.append('Trop de sessions de révision'); break
        if os.environ.get('SESSIONS_MAX') and sessions >= int(os.environ['SESSIONS_MAX']): break
    if not os.environ.get('SESSIONS_MAX') and vus < total_q: erreurs.append(f'Révisions : {vus} questions jouées sur {total_q}')
    etat = page.evaluate('window.__bouchees.etat()')
    dues = [k for k, v in etat['cartes'].items() if v['due'] <= time.time() * 1000]
    # une carte ratée revient au bout de 10 min : normal si le test dure longtemps
    anormales = [k for k in dues if not etat['cartes'][k].get('oublis')]
    if anormales and not os.environ.get('SESSIONS_MAX'): erreurs.append(f'{len(anormales)} cartes encore dues après les révisions')
    page.evaluate("() => { const e = window.__bouchees.etat(); for (const k in e.cartes) if (e.cartes[k].due <= Date.now()) e.cartes[k].due = Date.now() + 3600000; localStorage.setItem('dietacademie-progression-v1', JSON.stringify(e)); }")
    ratees = [v for v in etat['cartes'].values() if v.get('oublis') and 'der' in v]
    reussies = [v for v in etat['cartes'].values() if not v.get('oublis') and 'der' in v and v['due'] > time.time() * 1000]
    jours_ratees = max((v['due'] - v['der']) / 86400000 for v in ratees)
    jours_reussies = min((v['due'] - v['der']) / 86400000 for v in reussies)
    if jours_ratees > 0.1 or jours_reussies < 1: erreurs.append(f'Intervalles FSRS suspects : ratées {jours_ratees:.2f} j, réussies {jours_reussies:.2f} j')

    # Révision libre
    page.goto(URL); page.wait_for_selector('.univers'); page.goto(f'{URL}#/revisions'); page.wait_for_selector('.fete h1:has-text("jour")'); capt(page, 'R-a-jour')
    page.click('[data-vers="#/revisions/libre"]'); page.wait_for_selector('.question')

    # Code de transfert : aller-retour
    res = page.evaluate("""async () => { const B = window.__bouchees; const code = await B.exporterCode(); const e2 = await B.importerCode(code);
        return { code: code.slice(0, 12), long: code.length, egal: JSON.stringify(e2) === JSON.stringify(B.etat()) }; }""")
    if not res['egal'] or not res['code'].startswith('DIETACAD1-'): erreurs.append(f'Code de transfert : {res}')
    page.goto(f'{URL}#/reglages'); page.wait_for_selector('[data-action=code-creer]')
    page.click('[data-action=code-creer]'); page.wait_for_selector('#code-sortie:not([hidden])'); capt(page, '06-reglages')
    code = page.input_value('#code-sortie')
    # Import sur un « autre appareil »
    ctx2 = nav.new_context(viewport={'width': 390, 'height': 844}); p2 = ctx2.new_page()
    p2.on('pageerror', lambda e: erreurs.append(f'Erreur JS (appareil 2) : {e}'))
    p2.goto(f'{URL}#/reglages'); p2.wait_for_selector('#code-entree')
    p2.fill('#code-entree', code); p2.click('[data-action=code-importer]'); p2.wait_for_selector('#modale:not([hidden])')
    p2.click('#modale-oui'); p2.wait_for_selector('.univers')
    n2 = p2.evaluate('Object.keys(window.__bouchees.etat().lecons).length')
    if n2 != nb_lecons: erreurs.append(f'Import : {n2} leçons au lieu de {nb_lecons}')
    # mauvais code
    p2.goto(f'{URL}#/reglages'); p2.wait_for_selector('#code-entree'); p2.fill('#code-entree', 'SANTE-xyz'); p2.click('[data-action=code-importer]'); p2.wait_for_selector('#toast:not([hidden])')
    ctx2.close()

    # Écoute (lecture vocale) : vérifier que rien ne plante
    page.goto(f'{URL}#/l/sp-enjeux-03'); page.wait_for_selector('.ecran h1')
    if page.query_selector('[data-action=ecoute-lecon]'):
        page.click('[data-action=ecoute-lecon]'); page.wait_for_timeout(800); capt(page, '07-ecoute-lecon'); page.click('[data-action=ecoute-lecon]')
    page.goto(f'{URL}#/ecoute/sp-enjeux'); page.wait_for_selector('.lecteur')
    page.click('[data-action=ecoute-play]'); page.wait_for_timeout(600); page.click('[data-action=ecoute-suiv]'); page.wait_for_timeout(300); capt(page, '08-ecoute-cours')
    page.click('[data-action=ecoute-play]')

    # Reprise exacte : on s'arrête au 2e écran d'une leçon, on recharge
    page.goto(f'{URL}#/l/sp-enjeux-10'); page.wait_for_selector('.ecran h1'); page.click('[data-action=ecran-suiv]')
    page.goto(URL); page.wait_for_selector('.reprendre')
    lien = page.get_attribute('.reprendre', 'data-vers')
    if lien != '#/l/sp-enjeux-10/1': erreurs.append(f'Reprise : {lien} au lieu de #/l/sp-enjeux-10/1')
    capt(page, '09-accueil-fin')
    page.goto(f'{URL}#/c/sp-enjeux'); page.wait_for_selector('.lecon-ligne'); capt(page, '10-cours-fini')
    page.goto(f'{URL}#/u/sciences'); page.wait_for_selector('.ligne'); capt(page, '11-sciences')

    # Débordements horizontaux sur mobile
    for lec in list(cours.values())[0]['lecons']:
        page.goto(f'{URL}#/l/{lec["id"]}'); page.wait_for_selector('.ecran h1')
        for e in range(len(lec['ecrans'])):
            large = page.evaluate('document.documentElement.scrollWidth')
            if large > 392: erreurs.append(f'{lec["id"]} écran {e} : déborde ({large}px)')
            page.click('[data-action=ecran-suiv]')
    nav.close()

print(f'Leçons jouées : {nb_lecons} · questions d\'ancrage : {nb_q} · questions en révision : {vus}')
if erreurs:
    print('❌ ' + str(len(erreurs)) + ' problème(s) :'); [print(' -', e) for e in erreurs[:40]]; sys.exit(1)
print('✅ Tout est jouable, sans erreur.')
