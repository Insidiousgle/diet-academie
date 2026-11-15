// Construit les .json des cours à partir des .mjs, vérifie tout, et protège les identifiants déjà publiés.
// Usage : node construire.mjs [--publier]   (--publier enregistre les ids comme publiés)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const RACINE = path.dirname(fileURLToPath(import.meta.url));
const SRC = RACINE, OUT = RACINE; // tout est à plat, sans sous-dossier
const REGISTRE = path.join(RACINE, 'ids-publies.json');
const erreurs = [], avert = [];
const TYPES_BLOCS = new Set(['p', 'liste', 'essentiel', 'astuce', 'cle', 'piege', 'donc', 'imagine', 'citation', 'perso', 'chiffre', 'tableau', 'duo', 'etapes', 'frise', 'niveaux', 'cercles', 'retourne', 'lien']);

const plan = (await import(pathToFileURL(path.join(SRC, 'plan.mjs')))).default;
const tousIdsLecons = new Set(), tousIdsCartes = new Set(), idsCours = new Set();
const cours = {};

for (const u of plan.univers) for (const m of u.matieres) for (const s of m.sections) for (const c of s.cours) {
  if (idsCours.has(c.id)) erreurs.push(`Id de cours en double : ${c.id}`);
  idsCours.add(c.id);
  if (!c.src) continue;
  const mod = (await import(pathToFileURL(path.join(SRC, c.src + '.mjs')))).default;
  if (mod.id !== c.id) erreurs.push(`Le fichier ${c.src} a l'id ${mod.id} au lieu de ${c.id}`);
  cours[c.id] = mod;
  for (const l of mod.lecons) {
    if (tousIdsLecons.has(l.id)) erreurs.push(`Id de leçon en double : ${l.id}`);
    tousIdsLecons.add(l.id);
    if (!l.titre || !l.fiche) erreurs.push(`${l.id} : titre ou fiche manquant`);
    if (!l.ecrans?.length) erreurs.push(`${l.id} : aucun écran`);
    l.ecrans.forEach((e, i) => {
      if (!e.length) erreurs.push(`${l.id} écran ${i} vide`);
      e.forEach((b) => {
        if (!TYPES_BLOCS.has(b.t)) erreurs.push(`${l.id} : type de bloc inconnu « ${b.t} »`);
        if (b.t === 'perso' && !mod.persos?.[b.qui]) erreurs.push(`${l.id} : personnage inconnu ${b.qui}`);
        if (b.t === 'lien' && b.vers && !mod.lecons.some((x) => x.id === b.vers)) avert.push(`${l.id} : lien vers ${b.vers} (hors de ce cours, vérifié plus bas)`);
        if (b.t === 'tableau') b.lignes.forEach((r) => { if (r.length !== b.entetes.length) erreurs.push(`${l.id} : ligne de tableau de ${r.length} cases au lieu de ${b.entetes.length}`); });
      });
    });
    if (!l.classe) avert.push(`${l.id} : pas de mode cours`);
    if (l.classe) {
      const ACT = new Set(['titre', 'ligne', 'efface', 'souligne', 'postit', 'cercles', 'rangees', 'montre']);
      l.classe.forEach((e, i) => {
        if (!e.dit) erreurs.push(`${l.id} : étape de cours ${i} sans texte du prof`);
        (e.tab || []).forEach((a) => { if (!ACT.has(a.t)) erreurs.push(`${l.id} : action de tableau inconnue « ${a.t} »`); });
      });
    }
    const qs = [...(l.questions || []), ...(l.revision || [])];
    if (!(l.questions?.length >= 1 && l.questions.length <= 2)) erreurs.push(`${l.id} : il faut 1 ou 2 questions d'ancrage`);
    const ids = new Set();
    for (const q of qs) {
      if (ids.has(q.id)) erreurs.push(`${l.id} : question en double ${q.id}`);
      ids.add(q.id); tousIdsCartes.add(l.id + ':' + q.id);
      if (!q.q || !q.expl) erreurs.push(`${l.id}:${q.id} : énoncé ou explication manquant`);
      if (q.type === 'qcm') { if (!(q.choix?.length >= 2) || q.bonne !== 0) erreurs.push(`${l.id}:${q.id} : QCM mal formé`); if (new Set(q.choix).size !== q.choix.length) erreurs.push(`${l.id}:${q.id} : choix en double`); }
      else if (q.type === 'vf') { if (typeof q.bonne !== 'boolean') erreurs.push(`${l.id}:${q.id} : vrai/faux sans réponse booléenne`); }
      else if (q.type === 'ordre') { if (!(q.items?.length >= 3)) erreurs.push(`${l.id}:${q.id} : ordre avec moins de 3 éléments`); }
      else if (q.type === 'paires') {
        if (!(q.paires?.length >= 2) || q.paires.some((p) => p.length !== 2)) erreurs.push(`${l.id}:${q.id} : paires mal formées`);
        const g = q.paires.map((p) => p[0]), d = q.paires.map((p) => p[1]);
        if (new Set(g).size !== g.length || new Set(d).size !== d.length) erreurs.push(`${l.id}:${q.id} : paires en double`);
      } else erreurs.push(`${l.id}:${q.id} : type de question inconnu ${q.type}`);
    }
  }
}
// liens inter-cours
for (const c of Object.values(cours)) for (const l of c.lecons) for (const e of l.ecrans) for (const b of e) if (b.t === 'lien' && b.vers && !tousIdsLecons.has(b.vers)) erreurs.push(`${l.id} : lien vers une leçon inexistante ${b.vers}`);

// Registre des ids publiés : on ne doit jamais en perdre un
let registre = { lecons: [], cartes: [] };
if (fs.existsSync(REGISTRE)) registre = JSON.parse(fs.readFileSync(REGISTRE, 'utf8'));
for (const id of registre.lecons) if (!tousIdsLecons.has(id)) erreurs.push(`INTERDIT : la leçon publiée ${id} a disparu`);
for (const id of registre.cartes) if (!tousIdsCartes.has(id)) erreurs.push(`INTERDIT : la question publiée ${id} a disparu`);

if (erreurs.length) { console.error('❌ ERREURS :\n' + erreurs.join('\n')); process.exit(1); }

// Écriture
fs.mkdirSync(OUT, { recursive: true });
const catalogue = { genere: new Date().toISOString(), univers: plan.univers.map((u) => ({
  id: u.id, titre: u.titre, emoji: u.emoji, sous: u.sous,
  matieres: u.matieres.map((m) => ({ id: m.id, titre: m.titre, emoji: m.emoji, sections: m.sections.map((s) => ({ titre: s.titre, cours: s.cours.map((c) => {
    const o = { id: c.id, titre: c.titre, emoji: c.emoji };
    if (cours[c.id]) { o.fichier = c.id + '.json'; o.lecons = cours[c.id].lecons.map((l) => ({ id: l.id, titre: l.titre, fiche: l.fiche, ...(l.classe ? { classe: true } : {}) })); }
    return o;
  }) })) }))
})) };
fs.writeFileSync(path.join(OUT, 'catalogue.json'), JSON.stringify(catalogue));
for (const [id, c] of Object.entries(cours)) fs.writeFileSync(path.join(OUT, id + '.json'), JSON.stringify(c));

if (process.argv.includes('--publier')) {
  const lec = new Set([...registre.lecons, ...tousIdsLecons]), car = new Set([...registre.cartes, ...tousIdsCartes]);
  fs.writeFileSync(REGISTRE, JSON.stringify({ lecons: [...lec], cartes: [...car] }, null, 1));
  console.log('📌 Ids enregistrés comme publiés.');
}
const nbL = tousIdsLecons.size, nbQ = tousIdsCartes.size;
console.log(`✅ ${Object.keys(cours).length} cours, ${nbL} leçons, ${nbQ} questions. ${avert.length ? avert.length + ' remarque(s).' : ''}`);
