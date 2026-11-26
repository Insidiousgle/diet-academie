"""Test du mode cours : joue chaque leçon « classe » jusqu'au bout, avec captures."""
import json, sys, threading, http.server, socketserver, functools, pathlib
from playwright.sync_api import sync_playwright
RACINE = pathlib.Path(__file__).resolve().parent
CAPT = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else None
if CAPT: CAPT.mkdir(parents=True, exist_ok=True)
class S(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = socketserver.TCPServer(('127.0.0.1', 0), functools.partial(S, directory=str(RACINE)))
threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = f'http://127.0.0.1:{srv.server_address[1]}/index.html'
cat = json.loads((RACINE / 'catalogue.json').read_text())
tous = []
for u in cat['univers']:
    for m in u['matieres']:
        for se in m['sections']:
            for co in se['cours']:
                if co.get('fichier'): tous += json.loads((RACINE / co['fichier']).read_text())['lecons']
import os
lecons = [l for l in tous if l.get('classe') and (not os.environ.get('SEUL') or l['id'] in os.environ['SEUL'])]
erreurs = []
with sync_playwright() as p:
    nav = p.chromium.launch(executable_path='/usr/bin/google-chrome')
    for vp, nomvp in (({'width': 390, 'height': 844}, 'tel'), ({'width': 1180, 'height': 760}, 'paysage')):
        ctx = nav.new_context(viewport=vp, device_scale_factor=2)
        page = ctx.new_page()
        page.on('pageerror', lambda e: erreurs.append(f'Erreur JS : {e}'))
        page.goto(URL); page.wait_for_selector('.univers')
        if nomvp == 'tel' and CAPT: page.screenshot(path=str(CAPT / 'accueil.png'))
        for lec in lecons:
            page.goto(f'{URL}#/classe/{lec["id"]}'); page.wait_for_selector('.bulle-prof'); page.wait_for_timeout(300)
            n = len(lec['classe'])
            for i in range(n):
                page.wait_for_timeout(200)
                if not page.url.endswith('/' + str(i)): erreurs.append(f'{lec["id"]} : étape attendue {i}, url {page.url[-25:]}'); print(erreurs[-1])
                if CAPT and lec['id'] in os.environ.get('CAPT_IDS', '') and (nomvp == 'tel' or i in (3, n - 1)):
                    page.wait_for_timeout(3200 if i in (1, 3, n - 1) else 2600)
                    page.screenshot(path=str(CAPT / f'{nomvp}-{lec["id"]}-{i:02d}.png'))
                if not page.is_visible('#bulle-suite'):
                    page.click('#btn-suiv'); page.wait_for_timeout(80)  # finir la frappe
                page.click('#btn-suiv')  # étape suivante
            for qi, q in enumerate(lec['questions']):
                page.wait_for_selector('.tb-quiz .question')
                t = q['type']
                if t == 'qcm': page.click('[data-action=qcm][data-i="0"]')
                elif t == 'vf': page.click(f'[data-action=vf][data-v="{"true" if q["bonne"] else "false"}"]')
                elif t == 'paires':
                    for i in range(len(q['paires'])): page.click(f'[data-action=pg][data-i="{i}"]'); page.click(f'[data-action=pd][data-i="{i}"]')
                elif t == 'ordre':
                    import re
                    cible = [re.sub('<[^>]+>', '', x).strip() for x in q['items']]
                    for _ in range(40):
                        act = page.eval_on_selector_all('.ordre-item span:nth-child(2)', 'e => e.map(x => x.textContent.trim())')
                        if act == cible: break
                        for pos, txt in enumerate(act):
                            if txt != cible[pos]: page.click(f'[data-action=monter][data-p="{act.index(cible[pos])}"]'); break
                    page.click('[data-action=valider-ordre]')
                page.wait_for_selector('.retour-q.ok')
                if CAPT and lec['id'] in os.environ.get('CAPT_IDS', '') and nomvp == 'tel' and qi == 0: page.wait_for_timeout(1500); page.screenshot(path=str(CAPT / f'tel-{lec["id"]}-quiz.png'))
                page.wait_for_selector('#btn-suiv:visible'); page.click('#btn-suiv'); page.wait_for_timeout(80)
                if page.query_selector('.tb-quiz .retour-q') and page.is_visible('#btn-suiv'): page.click('#btn-suiv')
            page.wait_for_selector('.tb-actions')
            if CAPT and lec['id'] in os.environ.get('CAPT_IDS', '') and nomvp == 'tel': page.wait_for_timeout(1200); page.screenshot(path=str(CAPT / f'tel-{lec["id"]}-fin.png'))
            fait = page.evaluate(f'!!(window.__bouchees.etat().lecons["{lec["id"]}"] || {{}}).fait')
            if not fait: erreurs.append(f'{lec["id"]} non marquée faite ({nomvp})')
            large = page.evaluate('document.documentElement.scrollWidth')
            if large > vp['width'] + 2: erreurs.append(f'{lec["id"]} déborde ({nomvp})')
        # retour arrière + reprise
        page.goto(f'{URL}#/classe/sp-enjeux-10/4'); page.wait_for_selector('.bulle-prof'); page.wait_for_timeout(300); page.click('[data-action=classe-prec]'); page.wait_for_timeout(300)
        if not page.url.endswith('/3'): erreurs.append('Retour arrière : ' + page.url)
        page.goto(URL); page.wait_for_selector('.reprendre')
        if page.get_attribute('.reprendre', 'data-vers') != '#/classe/sp-enjeux-10/3': erreurs.append('Reprise classe : ' + str(page.get_attribute('.reprendre', 'data-vers')))
        ctx.close()
    nav.close()
print('❌ ' + '\n'.join(erreurs) if erreurs else f'✅ Mode cours : {len(lecons)} leçons jouées jusqu\'au bout, sans erreur.')
