// Vérifie que chaque élément « À savoir par cœur » des fiches est (1) dans un encadré À savoir et (2) interrogé par au moins une question.
import fs from 'node:fs';
const nom = process.argv[2];
const ref = JSON.parse(fs.readFileSync(`a-savoir-${nom}.json`, 'utf8'));
const c = JSON.parse(fs.readFileSync(`${nom}.json`, 'utf8'));
const net = (s) => String(s).replace(/<[^>]+>/g, '').toLowerCase();
let cles = '', questions = '', tout = '';
for (const l of c.lecons) {
  for (const e of l.ecrans) for (const b of e) { if (b.t === 'cle') cles += net(b.x) + ' '; }
  tout += net(JSON.stringify(l.ecrans));
  for (const q of [...l.questions, ...(l.revision || [])]) questions += net([q.q, q.expl, q.type === 'qcm' ? q.choix[0] : '', JSON.stringify(q.items || ''), JSON.stringify(q.paires || ''), q.type === 'vf' ? '' : ''].join(' ')) + ' ';
}
let ko = 0;
for (const it of ref.items) {
  const absLecon = it.mots.filter((m) => !tout.includes(m.toLowerCase()));
  const absQ = it.mots.filter((m) => !questions.includes(m.toLowerCase()));
  const st = absLecon.length ? '❌' : absQ.length ? '⚠️' : '✅';
  if (st !== '✅') ko++;
  console.log(`${st} F${it.fiche} ${it.texte}${absLecon.length ? '  | absent des leçons : ' + absLecon.join(', ') : ''}${absQ.length ? '  | pas interrogé : ' + absQ.join(', ') : ''}`);
}
const nbCle = c.lecons.filter((l) => l.ecrans.flat().some((b) => b.t === 'cle')).length;
console.log(`\n${ref.items.length - ko}/${ref.items.length} éléments couverts ET interrogés · ${nbCle} encadrés « À savoir par cœur »`);
