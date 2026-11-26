/* Diét'Académie — moteur de l'appli
   Ne jamais changer CLE ni PREFIXE : la progression en dépend. */
(function () {
'use strict';

var CLE = 'dietacademie-progression-v1';
var PREFIXE = 'DIETACAD1-';
var ANCIENNE_CLE = 'bouchees-progression-v1'; // prototype : récupérée une seule fois
var MAX_REVISIONS = 20;

/* ---------- Outils ---------- */
var $ = function (s) { return document.querySelector(s); };
var vue = $('#vue');
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function sansBalises(s) { var d = document.createElement('div'); d.innerHTML = String(s == null ? '' : s); return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
function melanger(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function jourCle(d) { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
var JOUR = 86400000;
function liste(x) { return Array.isArray(x) ? x : (x == null ? [] : [x]); }

/* ---------- Sauvegarde ---------- */
function etatVide() { return { v: 1, lecons: {}, cartes: {}, pos: null, jours: {}, reglages: { vitesse: 1, voix: '' } }; }
function normaliser(o) {
  var e = etatVide();
  if (!o || typeof o !== 'object') return e;
  ['lecons', 'cartes', 'jours'].forEach(function (k) { if (o[k] && typeof o[k] === 'object') e[k] = o[k]; });
  if (o.pos && typeof o.pos === 'object') e.pos = o.pos;
  if (o.reglages && typeof o.reglages === 'object') e.reglages = Object.assign(e.reglages, o.reglages);
  return e;
}
function charger() { try { var s = localStorage.getItem(CLE) || localStorage.getItem(ANCIENNE_CLE); if (s) return normaliser(JSON.parse(s)); } catch (err) {} return etatVide(); }
var etat = charger();
function sauver() { try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch (err) {} }
function noterActivite(n) { var k = jourCle(); etat.jours[k] = (etat.jours[k] || 0) + (n || 1); }
function serie() {
  var n = 0, d = new Date();
  if (!etat.jours[jourCle(d)]) d = new Date(d.getTime() - JOUR);
  while (etat.jours[jourCle(d)]) { n++; d = new Date(d.getTime() - JOUR); }
  return n;
}

/* ---------- Code de transfert ---------- */
function b64(bytes) { var s = ''; for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
function deb64(t) { t = t.replace(/-/g, '+').replace(/_/g, '/'); while (t.length % 4) t += '='; var s = atob(t); var b = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) b[i] = s.charCodeAt(i); return b; }
function exporterCode() {
  var json = JSON.stringify(etat);
  var octets = new TextEncoder().encode(json);
  if (window.CompressionStream) {
    var flux = new Blob([octets]).stream().pipeThrough(new CompressionStream('deflate-raw'));
    return new Response(flux).arrayBuffer().then(function (buf) { return PREFIXE + 'Z' + b64(new Uint8Array(buf)); });
  }
  return Promise.resolve(PREFIXE + 'J' + b64(octets));
}
function importerCode(code) {
  code = String(code || '').replace(/\s+/g, '');
  if (code.indexOf(PREFIXE) !== 0) return Promise.reject(new Error('Ce code ne vient pas de Diét\'Académie.'));
  var corps = code.slice(PREFIXE.length), mode = corps[0], donnees = deb64(corps.slice(1));
  var p;
  if (mode === 'Z') {
    if (!window.DecompressionStream) return Promise.reject(new Error('Ce navigateur ne sait pas lire ce code.'));
    var flux = new Blob([donnees]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
    p = new Response(flux).text();
  } else if (mode === 'J') p = Promise.resolve(new TextDecoder().decode(donnees));
  else return Promise.reject(new Error('Code illisible.'));
  return p.then(function (txt) { var o = JSON.parse(txt); if (!o || o.v !== 1) throw new Error('Code illisible.'); return normaliser(o); });
}

/* ---------- FSRS (révisions espacées) ---------- */
var FSRS = (function () {
  var w = [0.4072, 1.1829, 3.1262, 15.4722, 7.2102, 0.5316, 1.0651, 0.0234, 1.616, 0.1544, 1.0824, 1.9813, 0.0953, 0.2975, 2.2042, 0.2407, 2.9466];
  var DECAY = -0.5, FACTOR = 19 / 81, RETENTION = 0.9, MAX_JOURS = 365;
  function borne(x, a, b) { return Math.min(b, Math.max(a, x)); }
  function d0(g) { return borne(w[4] - Math.exp(w[5] * (g - 1)) + 1, 1, 10); }
  function r(t, s) { return Math.pow(1 + FACTOR * t / s, DECAY); }
  function intervalle(s) { return borne(Math.round(s / FACTOR * (Math.pow(RETENTION, 1 / DECAY) - 1)), 1, MAX_JOURS); }
  function nouvelleD(d, g) { var dp = d - w[6] * (g - 3); return borne(w[7] * d0(4) + (1 - w[7]) * dp, 1, 10); }
  function sRappel(d, s, R, g) {
    var dur = g === 2 ? w[15] : 1, facile = g === 4 ? w[16] : 1;
    return s * (1 + Math.exp(w[8]) * (11 - d) * Math.pow(s, -w[9]) * (Math.exp(w[10] * (1 - R)) - 1) * dur * facile);
  }
  function sOubli(d, s, R) { return Math.min(s, w[11] * Math.pow(d, -w[12]) * (Math.pow(s + 1, w[13]) - 1) * Math.exp(w[14] * (1 - R))); }
  /* g : 1 = raté, 3 = réussi, 4 = facile */
  function noter(carte, g, maintenant) {
    maintenant = maintenant || Date.now();
    var c = Object.assign({}, carte || {});
    if (!c.s) { c.s = w[g - 1]; c.d = d0(g); c.reps = 0; c.oublis = 0; }
    else {
      var t = Math.max(0, (maintenant - (c.der || maintenant)) / JOUR);
      var R = r(t, c.s);
      c.s = g === 1 ? sOubli(c.d, c.s, R) : sRappel(c.d, c.s, R, g);
      c.d = nouvelleD(c.d, g);
    }
    c.reps = (c.reps || 0) + 1;
    if (g === 1) c.oublis = (c.oublis || 0) + 1;
    c.der = maintenant;
    c.due = g === 1 ? maintenant + 10 * 60000 : maintenant + intervalle(c.s) * JOUR;
    delete c.nouv;
    c.s = Math.round(c.s * 1000) / 1000; c.d = Math.round(c.d * 1000) / 1000;
    return c;
  }
  return { noter: noter, intervalle: intervalle };
})();

/* ---------- Catalogue et contenus ---------- */
var catalogue = null, coursCache = {}, index = { univers: {}, matieres: {}, cours: {}, lecons: {} };
function chargerCatalogue() {
  return fetch('catalogue.json', { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error(); return r.json(); }).then(function (c) {
    catalogue = c;
    c.univers.forEach(function (u) {
      index.univers[u.id] = u;
      u.matieres.forEach(function (m) {
        m.univers = u.id; index.matieres[m.id] = m;
        m.sections.forEach(function (sec) {
          sec.cours.forEach(function (co) {
            co.matiere = m.id; co.univers = u.id; index.cours[co.id] = co;
            (co.lecons || []).forEach(function (l, i) { index.lecons[l.id] = { id: l.id, titre: l.titre, fiche: l.fiche, cours: co.id, rang: i, classe: !!l.classe }; });
          });
        });
      });
    });
  });
}
function chargerCours(id) {
  if (coursCache[id]) return Promise.resolve(coursCache[id]);
  var co = index.cours[id];
  if (!co || !co.fichier) return Promise.reject(new Error('Cours introuvable'));
  return fetch(co.fichier).then(function (r) { if (!r.ok) throw new Error(); return r.json(); }).then(function (c) {
    c.lecons.forEach(function (l, i) { l.rang = i; l.cours = c.id; });
    coursCache[id] = c; return c;
  });
}
function lienLecon(id) { var x = index.lecons[id]; return (x && x.classe ? '#/classe/' : '#/l/') + id; }
function leconsDe(coursId) { var co = index.cours[coursId]; return co && co.lecons ? co.lecons : []; }
function nbFaites(ids) { return ids.filter(function (id) { return etat.lecons[id] && etat.lecons[id].fait; }).length; }
function idsMatiere(m) { var a = []; m.sections.forEach(function (s) { s.cours.forEach(function (c) { (c.lecons || []).forEach(function (l) { a.push(l.id); }); }); }); return a; }
function idsUnivers(u) { var a = []; u.matieres.forEach(function (m) { a = a.concat(idsMatiere(m)); }); return a; }
function idsCours(c) { return (c.lecons || []).map(function (l) { return l.id; }); }
function pct(ids) { return ids.length ? Math.round(100 * nbFaites(ids) / ids.length) : 0; }
function jauge(p) { return '<div class="jauge"><i style="width:' + p + '%"></i></div>'; }
function cartesDues() { var t = Date.now(); return Object.keys(etat.cartes).filter(function (k) { return etat.cartes[k].due <= t; }); }

/* ---------- Interface générale ---------- */
var retourVers = null;
function cadre(titre, parent, univers) {
  $('#barre-titre').textContent = titre;
  retourVers = parent;
  $('#btn-retour').hidden = !parent;
  document.body.className = univers === 'sciences' ? 'univers-sciences' : '';
  window.scrollTo(0, 0);
}
$('#btn-retour').addEventListener('click', function () { if (retourVers) location.hash = retourVers; });
$('#btn-reglages').addEventListener('click', function () { location.hash = '#/reglages'; });
var toastMinuteur;
function toast(msg) { var t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastMinuteur); toastMinuteur = setTimeout(function () { t.hidden = true; }, 2600); }
function confirmer(msg) {
  return new Promise(function (ok) {
    $('#modale-texte').textContent = msg; $('#modale').hidden = false;
    function fin(v) { $('#modale').hidden = true; $('#modale-oui').onclick = $('#modale-non').onclick = null; ok(v); }
    $('#modale-oui').onclick = function () { fin(true); };
    $('#modale-non').onclick = function () { fin(false); };
  });
}

/* ---------- Synthèse vocale ---------- */
var Voix = (function () {
  var synth = window.speechSynthesis || null, jeton = 0;
  function voixFr() { if (!synth) return []; return synth.getVoices().filter(function (v) { return /^fr/i.test(v.lang); }); }
  function choisirVoix() { var l = voixFr(); var n = etat.reglages.voix; return l.filter(function (v) { return v.name === n; })[0] || l.filter(function (v) { return /fr-FR/i.test(v.lang); })[0] || l[0] || null; }
  function decouper(txt) {
    var morceaux = String(txt).replace(/\s+/g, ' ').match(/[^.!?;:]+[.!?;:]*/g) || [txt];
    var out = [], cur = '';
    morceaux.forEach(function (m) { if ((cur + m).length > 180 && cur) { out.push(cur.trim()); cur = m; } else cur += m; });
    if (cur.trim()) out.push(cur.trim());
    return out;
  }
  /* file : [{t: texte, ref: n'importe quoi}] ; surPhrase(ref) ; surFin() */
  function lire(file, surPhrase, surFin) {
    arreter();
    if (!synth) { toast('La lecture à voix haute n\'est pas disponible sur ce navigateur.'); if (surFin) surFin(false); return; }
    var j = ++jeton, phrases = [];
    file.forEach(function (it) { decouper(it.t).forEach(function (p) { phrases.push({ t: p, ref: it.ref }); }); });
    var i = 0;
    function suivante() {
      if (j !== jeton) return;
      if (i >= phrases.length) { if (surFin) surFin(true); return; }
      var ph = phrases[i];
      if (surPhrase) surPhrase(ph.ref, ph.t);
      var u = new SpeechSynthesisUtterance(ph.t);
      u.lang = 'fr-FR'; u.rate = etat.reglages.vitesse || 1;
      var v = choisirVoix(); if (v) u.voice = v;
      u.onend = function () { if (j === jeton) { i++; suivante(); } };
      u.onerror = function (e) { if (j === jeton && e.error !== 'interrupted' && e.error !== 'canceled') { i++; suivante(); } };
      synth.speak(u);
    }
    setTimeout(suivante, 60);
  }
  function arreter() { jeton++; if (synth) synth.cancel(); }
  if (synth && 'onvoiceschanged' in synth) synth.onvoiceschanged = function () {};
  return { lire: lire, arreter: arreter, voixFr: voixFr, dispo: !!synth };
})();

/* ---------- Blocs de leçon ---------- */
var ETIQ = { essentiel: "L'essentiel", astuce: '💡 Astuce pour retenir', cle: '📌 À savoir par cœur', piege: "⚠️ Piège d'examen", donc: '→ Donc', imagine: '🎬 Pour imaginer' };
var COULEURS_NIV = ['#3A9D5D', '#F2B33D', '#E2553F', '#6B5BB5', '#1E8C86'];
var COULEURS_CERCLES = ['#FCE3DD', '#FDF0D3', '#DDF1E3', '#D6EFEC', '#E8E4F7'];
var persos = {};
function paras(x) { return liste(x).map(function (p) { return '<p>' + p + '</p>'; }).join(''); }
function rendreBloc(b, i) {
  var a = ' data-bloc="' + i + '"', h;
  switch (b.t) {
    case 'p': return '<div class="bloc"' + a + '>' + paras(b.x) + '</div>';
    case 'liste': return '<div class="bloc"' + a + '>' + (b.x ? '<p>' + b.x + '</p>' : '') + '<ul>' + b.items.map(function (it) { return '<li>' + it + '</li>'; }).join('') + '</ul></div>';
    case 'essentiel': case 'astuce': case 'cle': case 'piege': case 'donc': case 'imagine':
      return '<div class="bloc encadre b-' + b.t + '"' + a + '><span class="etiquette">' + ETIQ[b.t] + '</span>' + paras(b.x) + (b.items ? '<ul>' + b.items.map(function (it) { return '<li>' + it + '</li>'; }).join('') + '</ul>' : '') + '</div>';
    case 'citation': return '<blockquote class="bloc b-citation"' + a + '>« ' + b.x + ' »<cite>— ' + b.auteur + '</cite></blockquote>';
    case 'perso':
      var pe = persos[b.qui] || { nom: b.qui, emoji: '🙂' };
      return '<div class="bloc b-perso"' + a + '><div class="avatar" aria-hidden="true">' + pe.emoji + '</div><div class="bulle"><span class="qui">' + esc(pe.nom) + (pe.role ? ' · ' + esc(pe.role) : '') + '</span>' + paras(b.x) + '</div></div>';
    case 'chiffre': return '<div class="bloc b-chiffre"' + a + '><div class="n">' + b.n + '</div><div>' + b.x + '</div></div>';
    case 'tableau':
      h = '<div class="bloc"' + a + '>' + (b.x ? '<p>' + b.x + '</p>' : '') + '<div class="tab-cartes">';
      b.lignes.forEach(function (l) {
        h += '<div class="tab-carte"><div class="tete">' + l[0] + '</div><dl>';
        for (var k = 1; k < l.length; k++) if (l[k]) h += '<dt>' + b.entetes[k] + '</dt><dd>' + l[k] + '</dd>';
        h += '</dl></div>';
      });
      return h + '</div></div>';
    case 'duo':
      return '<div class="bloc"' + a + '>' + (b.x ? '<p>' + b.x + '</p>' : '') + '<div class="b-duo">' + [['a', b.a], ['b', b.b]].map(function (c) {
        return '<div class="duo-col duo-' + c[0] + '"><h3>' + c[1].titre + '</h3><ul>' + c[1].items.map(function (it) { return '<li>' + it + '</li>'; }).join('') + '</ul></div>';
      }).join('') + '</div></div>';
    case 'etapes': case 'frise':
      return '<div class="bloc"' + a + '>' + (b.x ? '<p>' + b.x + '</p>' : '') + '<div class="etapes ' + b.t + '">' + b.items.map(function (it, k) {
        return '<div class="etape-item"><div class="rail"><div class="rond">' + (it.date || it.n || (k + 1)) + '</div><div class="fil"></div></div><div class="txt"><b>' + it.titre + '</b>' + (it.x ? '<span>' + it.x + '</span>' : '') + '</div></div>';
      }).join('') + '</div></div>';
    case 'niveaux':
      var n = b.items.length;
      return '<div class="bloc"' + a + '>' + (b.x ? '<p>' + b.x + '</p>' : '') + '<div class="niveaux">' + b.items.map(function (it, k) {
        var larg = b.largeur === 'egale' ? 100 : Math.round(76 + 24 * (n === 1 ? 1 : k / (n - 1)));
        return '<div class="niveau" style="width:' + larg + '%;background:' + (it.couleur || COULEURS_NIV[k % COULEURS_NIV.length]) + '"><b>' + it.titre + '</b>' + (it.x ? '<small>' + it.x + '</small>' : '') + '</div>';
      }).join('') + '</div></div>';
    case 'cercles':
      var nb = b.couches.length, R = 150, svg = '<svg viewBox="0 0 320 320" role="img" aria-label="' + esc(b.titre || 'Schéma en cercles') + '">';
      for (var k = nb - 1; k >= 0; k--) {
        var rr = R * (k + 1) / nb;
        svg += '<circle cx="160" cy="160" r="' + rr + '" fill="' + COULEURS_CERCLES[k % 5] + '" stroke="#fff" stroke-width="3"/>';
        svg += '<text x="160" y="' + (k === 0 ? 168 : 160 - rr + R / nb / 2 + 7) + '" text-anchor="middle" font-size="20" font-weight="800" fill="#2B2420">' + (k + 1) + '</text>';
      }
      svg += '</svg>';
      return '<div class="bloc cercles"' + a + '>' + svg + '<div class="cercles-legende">' + b.couches.map(function (c, k) {
        return '<div><i style="background:' + COULEURS_CERCLES[k % 5] + '">' + (k + 1) + '</i><span><b>' + c.titre + '</b>' + (c.x ? ' — ' + c.x : '') + '</span></div>';
      }).join('') + '</div></div>';
    case 'retourne':
      return '<div class="bloc"' + a + '>' + (b.x ? '<p>' + b.x + '</p>' : '') + '<div class="retournes">' + b.cartes.map(function (c, k) {
        return '<button type="button" class="retourne" data-action="retourner"><span class="indice">touche pour voir</span><div class="recto">' + c.recto + '</div><div class="verso" hidden>' + c.verso + '</div></button>';
      }).join('') + '</div></div>';
    case 'lien':
      var cible = b.vers && index.lecons[b.vers];
      var univ = cible ? index.cours[cible.cours].univers : (b.univers || 'sciences');
      var cls = 'b-lien' + (univ === 'pratique' ? ' vers-pratique' : '') + (cible ? '' : ' indispo');
      var ico = univ === 'pratique' ? '🍅' : '🧪';
      return '<div class="bloc"' + a + '><button type="button" class="' + cls + '"' + (cible ? ' data-action="aller" data-vers="' + lienLecon(b.vers) + '"' : ' disabled') + '><span style="font-size:1.5rem">' + ico + '</span><span><b>' + (b.titre || (cible ? cible.titre : '')) + '</b><br><small>' + (b.x || '') + (cible ? '' : ' (bientôt)') + '</small></span></button></div>';
  }
  return '';
}
function texteBloc(b) {
  switch (b.t) {
    case 'p': return liste(b.x).join(' ');
    case 'liste': return (b.x ? b.x + ' ' : '') + b.items.join('. ');
    case 'essentiel': case 'astuce': case 'cle': case 'piege': case 'donc': case 'imagine':
      return sansBalises(ETIQ[b.t].replace(/^\W+/, '')) + '. ' + liste(b.x).join(' ') + (b.items ? ' ' + b.items.join('. ') : '');
    case 'citation': return b.x + ', ' + b.auteur + '.';
    case 'perso': var pe = persos[b.qui] || { nom: b.qui }; return pe.nom + ' : ' + liste(b.x).join(' ');
    case 'chiffre': return b.n + ' : ' + b.x;
    case 'tableau': return (b.x ? b.x + ' ' : '') + b.lignes.map(function (l) { var s = l[0] + '. '; for (var k = 1; k < l.length; k++) if (l[k]) s += b.entetes[k] + ' : ' + l[k] + '. '; return s; }).join(' ');
    case 'duo': return (b.x ? b.x + ' ' : '') + b.a.titre + ' : ' + b.a.items.join(', ') + '. ' + b.b.titre + ' : ' + b.b.items.join(', ') + '.';
    case 'etapes': case 'frise': case 'niveaux': return (b.x ? b.x + ' ' : '') + b.items.map(function (it, k) { return (it.date || it.n || (k + 1)) + ' : ' + it.titre + (it.x ? ', ' + it.x : '') + '.'; }).join(' ');
    case 'cercles': return (b.x ? b.x + ' ' : '') + b.couches.map(function (c, k) { return 'Cercle ' + (k + 1) + ' : ' + c.titre + (c.x ? ', ' + c.x : '') + '.'; }).join(' ');
    case 'retourne': return (b.x ? b.x + ' ' : '') + b.cartes.map(function (c) { return c.recto + ' : ' + c.verso + '.'; }).join(' ');
    case 'lien': return '';
  }
  return '';
}
function lisible(t) { return sansBalises(t).replace(/\s→\s/g, ', donc ').replace(/≈/g, 'environ ').replace(/≤/g, 'au plus ').replace(/≥/g, 'au moins ').replace(/ vs /g, ' contre ').replace(/·/g, ', ').replace(/\//g, ' sur '); }

/* ---------- Questions ---------- */
function preparerQuestion(q) {
  var Q = { q: q, fini: false, juste: false, erreurs: 0 };
  if (q.type === 'qcm') Q.ordre = melanger(q.choix.map(function (_, i) { return i; }));
  if (q.type === 'ordre') { do { Q.ordre = melanger(q.items.map(function (_, i) { return i; })); } while (q.items.length > 1 && Q.ordre.every(function (v, i) { return v === i; })); }
  if (q.type === 'paires') { Q.gauche = melanger(q.paires.map(function (_, i) { return i; })); Q.droite = melanger(q.paires.map(function (_, i) { return i; })); Q.trouves = {}; Q.sel = null; }
  return Q;
}
var LIB_TYPE = { qcm: 'Choisis la bonne réponse', vf: 'Vrai ou faux ?', ordre: 'Remets dans l\'ordre', paires: 'Relie les paires' };
function rendreQuestion(Q) {
  var q = Q.q, h = '<div class="question ecran"><div class="q-type">' + LIB_TYPE[q.type] + '</div><h1>' + q.q + '</h1>';
  if (q.type === 'qcm') {
    h += '<div class="choix">' + Q.ordre.map(function (i) {
      var c = '';
      if (Q.fini) { if (i === q.bonne) c = 'juste'; else if (i === Q.choisi) c = 'faux'; }
      return '<button type="button" class="' + c + '" data-action="qcm" data-i="' + i + '"' + (Q.fini ? ' disabled' : '') + '>' + q.choix[i] + '</button>';
    }).join('') + '</div>';
  } else if (q.type === 'vf') {
    h += '<div class="choix actions-2">' + [true, false].map(function (v) {
      var c = '';
      if (Q.fini) { if (v === q.bonne) c = 'juste'; else if (v === Q.choisi) c = 'faux'; }
      return '<button type="button" class="' + c + '" data-action="vf" data-v="' + v + '"' + (Q.fini ? ' disabled' : '') + ' style="text-align:center">' + (v ? 'Vrai' : 'Faux') + '</button>';
    }).join('') + '</div>';
  } else if (q.type === 'ordre') {
    h += '<div class="ordre-liste">' + Q.ordre.map(function (i, pos) {
      var c = Q.fini ? (i === pos ? ' juste' : ' faux') : '';
      return '<div class="ordre-item' + c + '"><span class="rang">' + (pos + 1) + '</span><span>' + q.items[i] + '</span>' + (Q.fini ? '' : '<button type="button" data-action="monter" data-p="' + pos + '" aria-label="Monter"' + (pos === 0 ? ' disabled' : '') + '>▲</button><button type="button" data-action="descendre" data-p="' + pos + '" aria-label="Descendre"' + (pos === Q.ordre.length - 1 ? ' disabled' : '') + '>▼</button>') + '</div>';
    }).join('') + '</div>';
    if (!Q.fini) h += '<button type="button" class="btn btn-large" data-action="valider-ordre">Valider</button>';
    else if (!Q.juste) h += '<div class="carte petit"><b>Le bon ordre :</b><ol>' + q.items.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ol></div>';
  } else if (q.type === 'paires') {
    h += '<div class="paires"><div class="col">' + Q.gauche.map(function (i) {
      var c = Q.trouves[i] ? 'ok' : (Q.sel === i ? 'choisi' : '');
      return '<button type="button" class="' + c + '" data-action="pg" data-i="' + i + '"' + (Q.trouves[i] || Q.fini ? ' disabled' : '') + '>' + q.paires[i][0] + '</button>';
    }).join('') + '</div><div class="col">' + Q.droite.map(function (i) {
      var c = Q.trouves[i] ? 'ok' : '';
      return '<button type="button" class="' + c + '" data-action="pd" data-i="' + i + '"' + (Q.trouves[i] || Q.fini ? ' disabled' : '') + '>' + q.paires[i][1] + '</button>';
    }).join('') + '</div></div>';
  }
  if (Q.fini) {
    h += '<div class="retour-q ' + (Q.juste ? 'ok' : 'ko') + '"><b>' + (Q.juste ? (q.type === 'paires' && Q.erreurs ? 'Réussi, avec ' + Q.erreurs + ' erreur' + (Q.erreurs > 1 ? 's' : '') + '.' : 'Bien joué !') : 'Pas tout à fait.') + '</b>' + (q.expl || '') + '</div>';
  }
  return h + '</div>';
}
/* renvoie true si la question vient de se terminer */
function agirQuestion(Q, act, el) {
  var q = Q.q;
  if (Q.fini) return false;
  if (act === 'qcm') { Q.choisi = +el.dataset.i; Q.juste = Q.choisi === q.bonne; Q.fini = true; return true; }
  if (act === 'vf') { Q.choisi = el.dataset.v === 'true'; Q.juste = Q.choisi === q.bonne; Q.fini = true; return true; }
  if (act === 'monter' || act === 'descendre') {
    var p = +el.dataset.p, d = act === 'monter' ? p - 1 : p + 1;
    if (d < 0 || d >= Q.ordre.length) return false;
    var t = Q.ordre[p]; Q.ordre[p] = Q.ordre[d]; Q.ordre[d] = t; return false;
  }
  if (act === 'valider-ordre') { Q.juste = Q.ordre.every(function (v, i) { return v === i; }); Q.fini = true; return true; }
  if (act === 'pg') { Q.sel = +el.dataset.i; return false; }
  if (act === 'pd') {
    if (Q.sel == null) { toast('Choisis d\'abord un élément à gauche.'); return false; }
    var i = +el.dataset.i;
    if (i === Q.sel) { Q.trouves[i] = true; Q.sel = null; }
    else { Q.erreurs++; Q.sel = null; el.classList.add('non'); }
    if (Object.keys(Q.trouves).length === q.paires.length) { Q.fini = true; Q.juste = Q.erreurs <= 1; return true; }
    return false;
  }
  return false;
}
function texteQuestion(q) {
  var t = q.q + '. ';
  if (q.type === 'qcm') t += q.choix.map(function (c, i) { return 'Réponse ' + (i + 1) + ' : ' + c + '.'; }).join(' ');
  return lisible(t);
}
function carteId(leconId, q) { return leconId + ':' + q.id; }

/* ---------- Vues ---------- */
function vueAccueil() {
  cadre('Diét\'Académie', null);
  var dues = cartesDues().length, h = '';
  var heure = new Date().getHours();
  h += '<div class="salut"><h1>' + (heure < 18 ? 'Bonjour' : 'Bonsoir') + ' Inès 👋</h1><div class="petit">On apprend un petit bout de cours ?</div></div>';
  var toutes = Object.keys(index.lecons), faites = nbFaites(toutes);
  h += '<div class="stats"><div class="stat"><b>🔥 ' + serie() + '</b><span>jour' + (serie() > 1 ? 's' : '') + ' d\'affilée</span></div><div class="stat"><b>' + faites + '</b><span>leçon' + (faites > 1 ? 's' : '') + ' apprise' + (faites > 1 ? 's' : '') + '</span></div><div class="stat"><b>' + Object.keys(etat.cartes).length + '</b><span>notions en révision</span></div></div>';
  var rep = pointDeReprise();
  if (rep) h += '<button type="button" class="reprendre" data-action="aller" data-vers="' + rep.lien + '"><small>' + rep.etiquette + '</small><strong>' + esc(rep.titre) + '</strong><span>' + esc(rep.sous) + '</span></button>';
  h += '<button type="button" class="revisions-btn" data-action="aller" data-vers="#/revisions"><span class="gros">🔁</span><span><b>' + (dues ? dues + ' révision' + (dues > 1 ? 's' : '') + ' t\'attend' + (dues > 1 ? 'ent' : '') : 'Révisions à jour') + '</b><br><span class="petit">' + (dues ? 'Environ ' + Math.max(1, Math.round(dues * 0.4)) + ' min, toutes matières mélangées' : (Object.keys(etat.cartes).length ? 'Reviens plus tard, ou entraîne-toi librement' : 'Les notions arrivent ici après chaque leçon')) + '</span></span></button>';
  h += '<div class="sous-titre">Mes univers</div>';
  catalogue.univers.forEach(function (u) {
    var ids = idsUnivers(u);
    h += '<button type="button" class="univers ' + u.id + '" data-action="aller" data-vers="#/u/' + u.id + '"><span class="emoji">' + u.emoji + '</span><strong>' + esc(u.titre) + '</strong><span>' + esc(u.sous) + '</span>' + (ids.length ? jauge(pct(ids)) + '<span style="margin-top:6px;font-size:.8rem">' + nbFaites(ids) + ' / ' + ids.length + ' leçons</span>' : '<span style="margin-top:8px;font-size:.85rem">Bientôt : tes fiches arrivent</span>') + '</button>';
  });
  vue.innerHTML = h;
}
function pointDeReprise() {
  var p = etat.pos;
  if (p && index.lecons[p.lecon]) {
    var L = index.lecons[p.lecon];
    if (!(etat.lecons[p.lecon] && etat.lecons[p.lecon].fait && p.fini)) {
      return { lien: p.classe != null ? '#/classe/' + p.lecon + '/' + p.classe : '#/l/' + p.lecon + '/' + (p.ecran || 0), etiquette: '▶︎ Reprendre', titre: L.titre, sous: index.cours[L.cours].titre + ' · leçon ' + (L.rang + 1) + '/' + leconsDe(L.cours).length };
    }
    var suiv = prochaineLecon(L.cours);
    if (suiv) return { lien: lienLecon(suiv.id), etiquette: '▶︎ Leçon suivante', titre: suiv.titre, sous: index.cours[L.cours].titre + ' · leçon ' + (suiv.rang + 1) + '/' + leconsDe(L.cours).length };
  }
  for (var id in index.cours) {
    var s = prochaineLecon(id);
    if (s) return { lien: lienLecon(s.id), etiquette: etat.pos ? '▶︎ Continuer' : '✨ Commencer', titre: s.titre, sous: index.cours[id].titre + ' · leçon ' + (s.rang + 1) + '/' + leconsDe(id).length };
  }
  return null;
}
function prochaineLecon(coursId) {
  var ls = leconsDe(coursId);
  for (var i = 0; i < ls.length; i++) if (!(etat.lecons[ls[i].id] && etat.lecons[ls[i].id].fait)) return Object.assign({ rang: i }, ls[i]);
  return null;
}
function vueUnivers(id) {
  var u = index.univers[id]; if (!u) return introuvable();
  cadre(u.titre, '#/', u.id);
  var h = '<div class="salut"><h1>' + u.emoji + ' ' + esc(u.titre) + '</h1><div class="petit">' + esc(u.sous) + '</div></div>';
  u.matieres.forEach(function (m) {
    var ids = idsMatiere(m), dispo = ids.length > 0;
    h += '<button type="button" class="ligne' + (dispo ? '' : ' bientot') + '"' + (dispo ? ' data-action="aller" data-vers="#/m/' + m.id + '"' : ' disabled') + '><span class="pastille">' + m.emoji + '</span><span class="corps"><b>' + esc(m.titre) + '</b><span class="petit">' + (dispo ? nbFaites(ids) + ' / ' + ids.length + ' leçons' : 'Bientôt') + '</span>' + (dispo ? jauge(pct(ids)) : '') + '</span>' + (dispo ? '<span class="chevron">›</span>' : '') + '</button>';
  });
  vue.innerHTML = h;
}
function vueMatiere(id) {
  var m = index.matieres[id]; if (!m) return introuvable();
  cadre(m.titre, '#/u/' + m.univers, m.univers);
  var h = '<div class="salut"><h1>' + m.emoji + ' ' + esc(m.titre) + '</h1></div>';
  m.sections.forEach(function (s) {
    h += '<div class="sous-titre">' + esc(s.titre) + '</div>';
    s.cours.forEach(function (c) {
      var ids = idsCours(c), dispo = !!c.fichier;
      h += '<button type="button" class="ligne' + (dispo ? '' : ' bientot') + '"' + (dispo ? ' data-action="aller" data-vers="#/c/' + c.id + '"' : ' disabled') + '><span class="pastille">' + (c.emoji || '📘') + '</span><span class="corps"><b>' + esc(c.titre) + '</b><span class="petit">' + (dispo ? nbFaites(ids) + ' / ' + ids.length + ' leçons' : 'Bientôt') + '</span>' + (dispo ? jauge(pct(ids)) : '') + '</span>' + (dispo ? '<span class="chevron">›</span>' : '') + '</button>';
    });
  });
  vue.innerHTML = h;
}
function vueCours(id) {
  var co = index.cours[id]; if (!co) return introuvable();
  cadre(co.titre, '#/m/' + co.matiere, co.univers);
  vue.innerHTML = '<p class="petit">Chargement…</p>';
  chargerCours(id).then(function (c) {
    persos = c.persos || {};
    var ids = idsCours(co), h = '<div class="salut"><h1>' + esc(c.titre) + '</h1><div class="petit">' + nbFaites(ids) + ' / ' + ids.length + ' leçons · ' + esc(index.matieres[co.matiere].titre) + '</div>' + jauge(pct(ids)) + '</div>';
    var suiv = prochaineLecon(id);
    h += '<div class="actions-2" style="margin-bottom:14px">' + (suiv ? '<button type="button" class="btn" data-action="aller" data-vers="' + lienLecon(suiv.id) + '">▶︎ ' + (nbFaites(ids) ? 'Continuer' : 'Commencer') + '</button>' : '<button type="button" class="btn btn-vert" data-action="aller" data-vers="#/revisions">✓ Cours terminé</button>') + '<button type="button" class="btn btn-doux" data-action="aller" data-vers="#/ecoute/' + id + '">🎧 Écouter</button></div>';
    if (c.carte) {
      var k = c.carte;
      h += '<details class="carte-cours"' + (nbFaites(ids) ? '' : ' open') + '><summary><b>🗺️ La carte du cours</b></summary><div style="margin-top:12px"><div class="depart">🚩 <b>Départ</b> — ' + k.depart + '</div>';
      k.etapes.forEach(function (e, i) { h += '<div class="fleche-bas">↓</div><div class="etape"><span class="rond">' + (i + 1) + '</span><div><b>' + e.titre + '</b> · <i>' + e.verbe + '</i><br>' + e.question + '<br><small>' + e.mots + '</small></div></div>'; });
      h += '<div class="fleche-bas">↓</div><div class="arrivee">🏁 <b>Arrivée</b> — ' + k.arrivee + '</div></div></details>';
    }
    var ficheCour = null, pos = etat.pos && etat.pos.lecon;
    c.lecons.forEach(function (l, i) {
      if (l.fiche !== ficheCour) { ficheCour = l.fiche; h += '<div class="sous-titre">' + esc(l.fiche) + (l.ficheTitre ? ' · ' + esc(l.ficheTitre) : '') + '</div>'; }
      var e = etat.lecons[l.id] || {};
      h += '<button type="button" class="ligne lecon-ligne' + (e.fait ? ' faite' : '') + (pos === l.id ? ' ici' : '') + '" data-action="aller" data-vers="#/' + (l.classe ? 'classe' : 'l') + '/' + l.id + '"><span class="num">' + (e.fait ? '✓' : i + 1) + '</span><span class="corps"><b>' + (l.classe ? '🎓 ' : '') + esc(l.titre) + (e.ecoute ? '<span class="badge-ecoute" title="Écoutée">🎧</span>' : '') + '</b><span class="petit">' + (l.questions.length) + ' question' + (l.questions.length > 1 ? 's' : '') + (l.revision && l.revision.length ? ' + ' + l.revision.length + ' en révision' : '') + '</span></span><span class="chevron">›</span></button>';
    });
    vue.innerHTML = h;
  }).catch(erreurChargement);
}

/* Leçon */
var L = null;
function vueLecon(id, ecran) {
  var inf = index.lecons[id]; if (!inf) return introuvable();
  var co = index.cours[inf.cours];
  cadre(co.titre, '#/c/' + co.id, co.univers);
  vue.innerHTML = '<p class="petit">Chargement…</p>';
  chargerCours(co.id).then(function (c) {
    persos = c.persos || {};
    var lec = c.lecons[inf.rang];
    var e = Math.min(Math.max(+ecran || 0, 0), lec.ecrans.length - 1);
    L = { cours: c, lecon: lec, ecran: e, phase: 'ecrans', qi: 0, Q: null, resultats: [], ecoute: !!(L && L.ecoute) };
    memoriserPos();
    dessinerLecon();
  }).catch(erreurChargement);
}
function memoriserPos() {
  if (!L) return;
  etat.pos = { lecon: L.lecon.id, ecran: L.phase === 'ecrans' ? L.ecran : L.lecon.ecrans.length - 1, fini: L.phase === 'fin' };
  sauver();
}
function totalEtapes() { return L.lecon.ecrans.length + L.lecon.questions.length; }
function dessinerLecon() {
  var lec = L.lecon, h, fait = 0;
  if (L.phase === 'ecrans') fait = L.ecran;
  else if (L.phase === 'questions') fait = lec.ecrans.length + L.qi;
  else fait = totalEtapes();
  h = '<div class="lecon-haut">' + jauge(Math.round(100 * fait / totalEtapes())) + (Voix.dispo ? '<button type="button" class="ecoute-btn' + (L.ecoute ? ' actif' : '') + '" data-action="ecoute-lecon" aria-pressed="' + (!!L.ecoute) + '">🎧 ' + (L.ecoute ? 'Stop' : 'Écouter') + '</button>' : '') + '</div>';
  if (L.phase === 'ecrans') {
    var blocs = lec.ecrans[L.ecran];
    h += '<div class="ecran">';
    if (L.ecran === 0) h += '<div class="fiche-tag">' + esc(lec.fiche) + ' · leçon ' + (lec.rang + 1) + '/' + L.cours.lecons.length + '</div><h1>' + esc(lec.titre) + '</h1>' + (lec.classe ? '<button type="button" class="bandeau-classe" data-action="aller" data-vers="#/classe/' + lec.id + '">🎓 <span><b>Suivre cette leçon avec Céline</b><br><small>Elle t\'explique au tableau</small></span></button>' : '');
    h += blocs.map(rendreBloc).join('') + '</div>';
    var dernier = L.ecran === lec.ecrans.length - 1;
    h += '<div class="lecon-bas"><div class="actions-2" style="grid-template-columns:' + (L.ecran > 0 ? 'auto 1fr' : '1fr') + '">' + (L.ecran > 0 ? '<button type="button" class="btn btn-doux" data-action="ecran-prec" aria-label="Écran précédent">‹</button>' : '') + '<button type="button" class="btn btn-large" data-action="ecran-suiv">' + (dernier ? 'Je me teste →' : 'Continuer') + '</button></div></div>';
  } else if (L.phase === 'questions') {
    h += rendreQuestion(L.Q);
    if (L.Q.fini) h += '<div class="lecon-bas"><button type="button" class="btn btn-large" data-action="q-suiv">Continuer</button></div>';
  } else {
    var nbJustes = L.resultats.filter(Boolean).length;
    var suiv = L.cours.lecons[lec.rang + 1];
    h += '<div class="fete ecran"><div class="gros">' + (nbJustes === L.resultats.length ? '🎉' : '👍') + '</div><h1>Leçon apprise !</h1><p>' + nbJustes + ' / ' + L.resultats.length + ' bonne' + (nbJustes > 1 ? 's' : '') + ' réponse' + (nbJustes > 1 ? 's' : '') + '. Ces notions reviendront dans tes révisions, au bon moment.</p></div>';
    h += '<div class="lecon-bas" style="display:grid;gap:10px">' + (suiv ? '<button type="button" class="btn btn-large" data-action="aller" data-vers="' + lienLecon(suiv.id) + '">Leçon suivante : ' + esc(suiv.titre) + '</button>' : '<button type="button" class="btn btn-large btn-vert" data-action="aller" data-vers="#/c/' + L.cours.id + '">🏁 Fin du cours !</button>') + '<button type="button" class="btn btn-doux btn-large" data-action="aller" data-vers="#/">Pause, retour à l\'accueil</button></div>';
  }
  vue.innerHTML = h;
  if (L.ecoute) lireEcranCourant();
}
function lireEcranCourant() {
  var lec = L.lecon, file = [];
  if (L.phase === 'ecrans') {
    if (L.ecran === 0) file.push({ t: lec.titre + '.', ref: -1 });
    lec.ecrans[L.ecran].forEach(function (b, i) { var t = texteBloc(b); if (t) file.push({ t: lisible(t), ref: i }); });
    Voix.lire(file, surligner, function (ok) {
      if (!ok || !L || L.phase !== 'ecrans' || !L.ecoute) return;
      setTimeout(function () { if (L && L.ecoute && L.phase === 'ecrans') avancerEcran(); }, 600);
    });
  } else if (L.phase === 'questions' && !L.Q.fini) {
    Voix.lire([{ t: texteQuestion(L.Q.q), ref: -1 }], null, null);
  } else if (L.phase === 'questions' && L.Q.fini) {
    Voix.lire([{ t: lisible((L.Q.juste ? 'Bien joué. ' : 'Pas tout à fait. ') + (L.Q.q.expl || '')), ref: -1 }], null, null);
  } else if (L.phase === 'fin') {
    Voix.lire([{ t: 'Leçon apprise ! Bravo.', ref: -1 }], null, null);
  }
}
function surligner(ref) {
  document.querySelectorAll('.parle').forEach(function (e) { e.classList.remove('parle'); });
  if (ref == null || ref < 0) return;
  var el = vue.querySelector('[data-bloc="' + ref + '"]');
  if (el) { el.classList.add('parle'); el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
}
function avancerEcran() {
  if (L.ecran < L.lecon.ecrans.length - 1) { L.ecran++; history.replaceState(null, '', '#/l/' + L.lecon.id + '/' + L.ecran); }
  else { L.phase = 'questions'; L.qi = 0; L.Q = preparerQuestion(L.lecon.questions[0]); }
  memoriserPos(); window.scrollTo(0, 0); dessinerLecon();
}
function terminerLecon() {
  var lec = L.lecon, t = Date.now();
  var deja = etat.lecons[lec.id] && etat.lecons[lec.id].fait;
  etat.lecons[lec.id] = Object.assign(etat.lecons[lec.id] || {}, { fait: (deja || t), score: L.resultats.filter(Boolean).length + '/' + L.resultats.length, der: t });
  lec.questions.forEach(function (q, i) {
    var cid = carteId(lec.id, q), c = etat.cartes[cid];
    if (!c || c.nouv) etat.cartes[cid] = FSRS.noter(null, L.resultats[i] ? 3 : 1, t);
    else if (c.due <= t) etat.cartes[cid] = FSRS.noter(c, L.resultats[i] ? 3 : 1, t);
  });
  (lec.revision || []).forEach(function (q) {
    var cid = carteId(lec.id, q);
    if (!etat.cartes[cid]) etat.cartes[cid] = { nouv: 1, due: t + JOUR - 3600000 };
  });
  noterActivite(1);
  L.phase = 'fin'; memoriserPos();
}

/* Révisions */
var R = null;
function vueRevisions(libre) {
  cadre('Révisions', '#/');
  var ids = libre ? melanger(Object.keys(etat.cartes)).slice(0, 10) : cartesDues().sort(function (a, b) { return etat.cartes[a].due - etat.cartes[b].due; }).slice(0, MAX_REVISIONS);
  if (!ids.length) {
    var total = Object.keys(etat.cartes).length;
    vue.innerHTML = '<div class="fete"><div class="gros">' + (total ? '😌' : '🌱') + '</div><h1>' + (total ? 'Tout est à jour !' : 'Rien à réviser… pour l\'instant') + '</h1><p>' + (total ? 'Tes ' + total + ' notions sont bien rangées. La prochaine révision arrive ' + prochaineDue() + '.' : 'Fais une première leçon : ses notions arriveront ici.') + '</p></div>' + (total ? '<button type="button" class="btn btn-doux btn-large" data-action="aller" data-vers="#/revisions/libre">🎲 M\'entraîner quand même (sans compter)</button>' : '<button type="button" class="btn btn-large" data-action="aller" data-vers="#/">Choisir une leçon</button>');
    return;
  }
  vue.innerHTML = '<p class="petit">Préparation des questions…</p>';
  var coursNecessaires = {};
  ids.forEach(function (cid) { var li = index.lecons[cid.split(':')[0]]; if (li) coursNecessaires[li.cours] = 1; });
  Promise.all(Object.keys(coursNecessaires).map(chargerCours)).then(function () {
    var items = [];
    ids.forEach(function (cid) {
      var p = cid.split(':'), li = index.lecons[p[0]]; if (!li) return;
      var lec = coursCache[li.cours].lecons[li.rang];
      var q = lec.questions.concat(lec.revision || []).filter(function (x) { return x.id === p[1]; })[0];
      if (q) items.push({ cid: cid, q: q, lecon: lec, cours: coursCache[li.cours] });
    });
    // mélange en évitant deux questions de la même leçon à la suite
    items = melanger(items);
    for (var i = 1; i < items.length; i++) if (items[i].lecon.id === items[i - 1].lecon.id) { for (var j = i + 1; j < items.length; j++) if (items[j].lecon.id !== items[i - 1].lecon.id) { var t = items[i]; items[i] = items[j]; items[j] = t; break; } }
    R = { items: items, i: 0, Q: preparerQuestion(items[0].q), justes: 0, libre: !!libre };
    dessinerRevision();
  }).catch(erreurChargement);
}
function prochaineDue() {
  var m = Infinity; for (var k in etat.cartes) m = Math.min(m, etat.cartes[k].due);
  var j = Math.round((m - Date.now()) / JOUR);
  if (m === Infinity) return 'bientôt';
  if (j <= 0) return 'dans quelques heures'; if (j === 1) return 'demain'; return 'dans ' + j + ' jours';
}
function dessinerRevision() {
  if (R.i >= R.items.length) {
    noterActivite(0);
    vue.innerHTML = '<div class="fete ecran"><div class="gros">💪</div><h1>Session terminée !</h1><p>' + R.justes + ' / ' + R.items.length + ' bonnes réponses.' + (R.libre ? '' : ' Les notions ratées reviendront très vite, les autres plus tard.') + '</p></div><div style="display:grid;gap:10px"><button type="button" class="btn btn-large" data-action="aller" data-vers="#/">Retour à l\'accueil</button>' + (cartesDues().length && !R.libre ? '<button type="button" class="btn btn-doux btn-large" data-action="revisions-encore">Encore une série</button>' : '') + '</div>';
    sauver(); return;
  }
  var it = R.items[R.i], co = index.cours[it.cours.id];
  persos = it.cours.persos || {};
  document.body.className = co.univers === 'sciences' ? 'univers-sciences' : '';
  var h = '<div class="lecon-haut">' + jauge(Math.round(100 * R.i / R.items.length)) + '<span class="petit">' + (R.i + 1) + '/' + R.items.length + '</span></div>';
  h += '<div class="fiche-tag">' + esc(index.matieres[co.matiere].titre) + ' · ' + esc(co.titre) + '</div>';
  h += rendreQuestion(R.Q);
  if (R.Q.fini) {
    h += '<div class="lecon-bas">';
    if (R.Q.juste && !R.libre) h += '<div class="actions-2"><button type="button" class="btn btn-doux" data-action="noter" data-g="4">😎 Facile</button><button type="button" class="btn" data-action="noter" data-g="3">Continuer</button></div>';
    else h += '<button type="button" class="btn btn-large" data-action="noter" data-g="' + (R.Q.juste ? 3 : 1) + '">Continuer</button>';
    h += '<button type="button" class="lien-btn" data-action="aller" data-vers="#/' + (it.lecon.classe ? 'classe' : 'l') + '/' + it.lecon.id + '">Revoir la leçon « ' + esc(it.lecon.titre) + ' »</button></div>';
  }
  vue.innerHTML = h;
}

/* Écoute d'un cours entier */
var E = null;
function vueEcoute(id, depart) {
  var co = index.cours[id]; if (!co) return introuvable();
  cadre('🎧 ' + co.titre, '#/c/' + id, co.univers);
  if (!Voix.dispo) { vue.innerHTML = '<div class="carte">La lecture à voix haute n\'est pas disponible sur ce navigateur.</div>'; return; }
  chargerCours(id).then(function (c) {
    persos = c.persos || {};
    var d = depart != null ? +depart : (function () { var s = prochaineLecon(id); return s ? s.rang : 0; })();
    E = { cours: c, i: Math.min(Math.max(d, 0), c.lecons.length - 1), joue: false, texte: '' };
    dessinerEcoute();
  }).catch(erreurChargement);
}
function dessinerEcoute() {
  var lec = E.cours.lecons[E.i];
  vue.innerHTML = '<div class="lecteur"><div class="petit">Leçon ' + (E.i + 1) + ' / ' + E.cours.lecons.length + ' · ' + esc(lec.fiche) + '</div><h1>' + esc(lec.titre) + '</h1><div class="texte-lu" id="texte-lu">' + (E.texte ? esc(E.texte) : '<span class="petit">Appuie sur ▶︎ pour écouter le cours, leçon après leçon. Pratique dans les transports : les questions t\'attendront dans l\'appli.</span>') + '</div><div class="lecteur-ctrl"><button type="button" data-action="ecoute-prec" aria-label="Leçon précédente">⏮</button><button type="button" class="play" data-action="ecoute-play" aria-label="' + (E.joue ? 'Pause' : 'Lecture') + '">' + (E.joue ? '⏸' : '▶︎') + '</button><button type="button" data-action="ecoute-suiv" aria-label="Leçon suivante">⏭</button></div><p class="petit" style="margin-top:18px">Vitesse et voix : dans les réglages ⚙︎</p><button type="button" class="lien-btn" data-action="aller" data-vers="' + lienLecon(lec.id) + '">Ouvrir cette leçon et faire ses questions</button></div>';
}
function jouerEcoute() {
  var lec = E.cours.lecons[E.i], file = [{ t: 'Leçon ' + (E.i + 1) + '. ' + lec.titre + '.', ref: 0 }];
  lec.ecrans.forEach(function (bs) { bs.forEach(function (b) { var t = texteBloc(b); if (t) file.push({ t: lisible(t), ref: 0 }); }); });
  E.joue = true; dessinerEcoute();
  Voix.lire(file, function (ref, t) { E.texte = t; var el = document.getElementById('texte-lu'); if (el) el.textContent = t; }, function (ok) {
    if (!ok || !E) return;
    etat.lecons[lec.id] = Object.assign(etat.lecons[lec.id] || {}, { ecoute: Date.now() }); sauver();
    if (E.i < E.cours.lecons.length - 1) { E.i++; E.texte = ''; jouerEcoute(); }
    else { E.joue = false; E.texte = 'Fin du cours. Bravo !'; dessinerEcoute(); }
  });
}

/* Réglages */
function vueReglages() {
  cadre('Réglages', '#/');
  var voix = Voix.voixFr();
  var h = '<div class="carte"><h2>📲 Changer d\'appareil</h2><p class="petit">Copie ton code ici, puis colle-le dans Diét\'Académie sur ton autre appareil. Ta progression (leçons, révisions, série) passe avec.</p><button type="button" class="btn btn-large" data-action="code-creer">Créer mon code de transfert</button><textarea id="code-sortie" readonly hidden aria-label="Ton code"></textarea><button type="button" class="btn btn-doux btn-large" data-action="code-copier" id="code-copier" hidden style="margin-top:8px">Copier le code</button></div>';
  h += '<div class="carte"><h2>📥 Récupérer ma progression</h2><p class="petit">Colle un code commençant par ' + PREFIXE + '. Attention : il remplace la progression de cet appareil.</p><textarea id="code-entree" aria-label="Code à coller" placeholder="' + PREFIXE + '…"></textarea><button type="button" class="btn btn-large" data-action="code-importer" style="margin-top:8px">Récupérer</button></div>';
  h += '<div class="carte"><h2>🎧 Lecture à voix haute</h2>' + (Voix.dispo ? '<label class="petit" for="vitesse">Vitesse : <b id="vitesse-val">' + etat.reglages.vitesse + '×</b></label><input type="range" id="vitesse" min="0.7" max="1.6" step="0.1" value="' + etat.reglages.vitesse + '"><label class="petit" for="voix" style="display:block;margin-top:10px">Voix</label><select id="voix"><option value="">Automatique</option>' + voix.map(function (v) { return '<option' + (v.name === etat.reglages.voix ? ' selected' : '') + '>' + esc(v.name) + '</option>'; }).join('') + '</select><button type="button" class="btn btn-doux btn-large" data-action="voix-test" style="margin-top:10px">Tester la voix</button>' : '<p class="petit">Pas disponible sur ce navigateur.</p>') + '</div>';
  h += '<div class="carte"><h2>📲 Installer l\'appli</h2><p class="petit">Sur iPhone : bouton Partager → « Sur l\'écran d\'accueil ». Sur Android : menu ⋮ → « Installer l\'application ». Ensuite, elle marche même sans réseau.</p></div>';
  h += '<p class="petit" style="text-align:center">Diét\'Académie · sauvegarde « ' + CLE + ' »</p>';
  vue.innerHTML = h;
  var vit = $('#vitesse');
  if (vit) vit.addEventListener('input', function () { etat.reglages.vitesse = +vit.value; $('#vitesse-val').textContent = vit.value + '×'; sauver(); });
  var sel = $('#voix');
  if (sel) sel.addEventListener('change', function () { etat.reglages.voix = sel.value; sauver(); });
}

function introuvable() { cadre('Diét\'Académie', '#/'); vue.innerHTML = '<div class="carte">Cette page n\'existe pas (ou plus). <button type="button" class="lien-btn" data-action="aller" data-vers="#/">Retour à l\'accueil</button></div>'; }
function erreurChargement() { vue.innerHTML = '<div class="carte">Impossible de charger ce contenu. Vérifie ta connexion, puis réessaie. <button type="button" class="lien-btn" data-action="recharger">Réessayer</button></div>'; }

/* ---------- Mode cours (prof + tableau) ---------- */
var C = null;
var PROF_SVG = '<div class="medaillon"><svg class="prof" viewBox="0 0 140 150" aria-hidden="true">' +
  '<path d="M18 150 C18 126 38 112 70 112 C102 112 122 126 122 150 Z" fill="#E2553F"/>' +
  '<path d="M57 112 L70 134 L83 112 Z" fill="#fff"/>' +
  '<path d="M57 112 L70 134 L60 146 L50 118 Z M83 112 L70 134 L80 146 L90 118 Z" fill="#C8402E"/>' +
  '<rect x="62" y="92" width="16" height="24" rx="8" fill="#E5AE8A"/>' +
  '<g class="tete">' +
  '<circle cx="70" cy="24" r="12" fill="#3A2A22"/>' +
  '<path d="M36 82 C32 46 50 32 70 32 C90 32 108 46 104 82 C104 92 100 96 98 94 C98 70 90 58 70 58 C50 58 42 70 42 94 C40 96 36 92 36 82 Z" fill="#3A2A22"/>' +
  '<ellipse cx="41" cy="80" rx="4" ry="6" fill="#EBB896"/><ellipse cx="99" cy="80" rx="4" ry="6" fill="#EBB896"/>' +
  '<ellipse cx="70" cy="76" rx="28" ry="30" fill="#F2C9A6"/>' +
  '<path d="M42 70 C46 50 64 44 82 48 C92 50 98 58 99 68 C90 58 74 54 60 60 C52 63 46 67 42 70 Z" fill="#3A2A22"/>' +
  '<circle cx="54" cy="88" r="5" fill="#F29C93" opacity=".35"/><circle cx="86" cy="88" r="5" fill="#F29C93" opacity=".35"/>' +
  '<path class="sourcils" d="M53 69 Q59 66 65 69 M75 69 Q81 66 87 69" stroke="#3A2A22" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
  '<g class="yeux"><ellipse cx="60" cy="78" rx="2.8" ry="3.3" fill="#2B2420"/><ellipse cx="80" cy="78" rx="2.8" ry="3.3" fill="#2B2420"/><circle cx="61" cy="77" r=".9" fill="#fff"/><circle cx="81" cy="77" r=".9" fill="#fff"/></g>' +
  '<circle cx="60" cy="78" r="8.5" fill="none" stroke="#2B2420" stroke-width="1.7"/><circle cx="80" cy="78" r="8.5" fill="none" stroke="#2B2420" stroke-width="1.7"/><path d="M68.5 78 H71.5" stroke="#2B2420" stroke-width="1.7"/>' +
  '<path class="b-fermee" d="M62 96 Q70 102 78 96" stroke="#9C3B2E" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
  '<g class="b-ouverte"><path d="M61 96 Q70 106 79 96 Z" fill="#9C3B2E"/><path d="M64 97.5 Q70 100 76 97.5" fill="#fff" opacity=".9"/></g>' +
  '</g></svg></div>';
var COUL_MARQUEUR = { bleu: '#1F4E9C', rouge: '#D33B2C', vert: '#2E8B57', noir: '#222' };

function vueClasse(id, depart) {
  var inf = index.lecons[id]; if (!inf) return introuvable();
  var co = index.cours[inf.cours];
  cadre('🎓 ' + co.titre, '#/c/' + co.id, co.univers);
  document.body.classList.add('mode-classe');
  vue.innerHTML = '<p class="petit">Chargement…</p>';
  chargerCours(co.id).then(function (c) {
    persos = c.persos || {};
    var lec = c.lecons[inf.rang];
    if (!lec.classe) { location.replace('#/l/' + id); return; }
    var etapes = lec.classe.slice();
    lec.questions.forEach(function (q, i) { etapes.push({ quiz: i }); });
    etapes.push({ fin: true });
    C = { cours: c, lecon: lec, etapes: etapes, i: 0, auto: !!etat.reglages.classeAuto, voix: !!etat.reglages.classeVoix, resultats: [], Q: null, minuteur: null, frappe: null };
    vue.innerHTML = '<div class="classe">' +
      '<div class="tableau-cadre"><div class="tableau" id="tableau"></div><div class="rebord"><i></i><i class="r"></i><i class="v"></i></div></div>' +
      '<div class="estrade"><div class="prof-zone" id="prof-zone">' + PROF_SVG + '<div class="prof-nom">Céline</div></div><button type="button" class="bulle-prof" id="bulle" data-action="classe-suiv"><span id="bulle-txt"></span><span class="bulle-suite" id="bulle-suite">▾</span></button></div>' +
      '<div class="classe-ctrl"><button type="button" class="icone-btn" data-action="classe-prec" aria-label="Revenir">↺</button><button type="button" class="icone-btn texte-btn" data-action="aller" data-vers="#/l/' + lec.id + '" aria-label="Version texte de la leçon" title="Version texte">📄</button><div class="points" id="points"></div><button type="button" class="ctrl-mini' + (C.auto ? ' actif' : '') + '" data-action="classe-auto" aria-pressed="' + C.auto + '">Auto</button><button type="button" class="btn" data-action="classe-suiv" id="btn-suiv">Suivant ›</button></div>' +
      '</div>';
    var d = Math.min(Math.max(+depart || 0, 0), etapes.length - 1);
    allerEtape(d, true);
  }).catch(erreurChargement);
}
function tableauVide() { var t = $('#tableau'); t.innerHTML = ''; C.widget = null; C.derniere = null; }
function ecrireTexte(el, txt, anime) {
  if (!anime) { el.innerHTML = txt; return 0; }
  // écriture progressive, en gardant les balises (<b>, <br>…)
  var morceaux = txt.split(/(<[^>]+>)/), html = '', i = 0, total = sansBalises(txt).length, vitesse = 28;
  var etapes = [];
  morceaux.forEach(function (m) { if (m[0] === '<') etapes.push({ b: m }); else for (var k = 0; k < m.length; k++) etapes.push({ c: m[k] }); });
  el.innerHTML = '<span class="encre-curseur"></span>';
  var id = setInterval(function () {
    if (!C || !document.body.contains(el)) { clearInterval(id); return; }
    for (var n = 0; n < 2 && i < etapes.length; n++, i++) html += etapes[i].b || esc(etapes[i].c);
    el.innerHTML = html + (i < etapes.length ? '<span class="encre-curseur"></span>' : '');
    if (i >= etapes.length) clearInterval(id);
  }, vitesse);
  C.ecritures.push(function () { clearInterval(id); el.innerHTML = txt; });
  return Math.ceil(etapes.length / 2) * vitesse;
}
function actionTableau(a, anime) {
  var t = $('#tableau'), el;
  switch (a.t) {
    case 'efface':
      if (anime && t.children.length) { t.classList.add('gomme'); var etape = C.i; setTimeout(function () { t.classList.remove('gomme'); if (C && C.i === etape) { t.innerHTML = ''; } }, 380); C.widget = null; C.derniere = null; return 420; }
      tableauVide(); return 0;
    case 'titre':
      el = document.createElement('div'); el.className = 'tb-titre'; t.appendChild(el); C.derniere = el;
      return ecrireTexte(el, a.x, anime);
    case 'ligne':
      el = document.createElement('div'); el.className = 'tb-ligne' + (a.taille ? ' ' + a.taille : '') + (a.decale ? ' decale' : '');
      if (a.taille === 'eq') { el.innerHTML = '<span>' + a.x + '</span>'; t.appendChild(el); C.derniere = el; if (anime) el.classList.add('apparait'); return anime ? 500 : 0; }
      el.style.color = COUL_MARQUEUR[a.c || 'noir'];
      if (a.puce) { var p = document.createElement('span'); p.className = 'tb-puce'; p.textContent = a.puce; el.appendChild(p); }
      var s = document.createElement('span'); el.appendChild(s); t.appendChild(el); C.derniere = el;
      return ecrireTexte(s, a.x, anime);
    case 'souligne':
      var cible = a.n != null ? t.querySelectorAll('.tb-ligne, .tb-titre')[a.n] : C.derniere;
      if (cible) cible.classList.add(a.entoure ? 'entoure' : 'souligne', anime ? 'trace' : 'fixe');
      return anime ? 600 : 0;
    case 'postit':
      el = document.createElement('div'); el.className = 'postit postit-' + (a.genre || 'cle') + (anime ? ' colle' : '');
      el.innerHTML = '<b>' + ({ cle: '📌 À savoir par cœur', astuce: '💡 Astuce', piege: '⚠️ Piège d\'examen' })[a.genre || 'cle'] + '</b><div>' + a.x + '</div>';
      t.appendChild(el); C.derniere = el; return anime ? 500 : 0;
    case 'cercles':
      el = document.createElement('div'); el.className = 'tb-cercles';
      var n = a.items.length, svg = '<svg viewBox="0 0 200 200">';
      for (var k = n - 1; k >= 0; k--) { var r = 96 * (k + 1) / n; svg += '<circle class="anneau" data-n="' + (k + 1) + '" cx="100" cy="100" r="' + r + '" fill="' + COULEURS_CERCLES[k % 5] + '" stroke="#1F4E9C" stroke-width="2.5" style="--l:' + Math.round(2 * Math.PI * r) + '"/>'; }
      for (k = 0; k < n; k++) { var rr = 96 * (k + 1) / n; svg += '<text class="anneau-n" data-n="' + (k + 1) + '" x="100" y="' + (k === 0 ? 106 : 100 - rr + 96 / n / 2 + 6) + '" text-anchor="middle">' + (k + 1) + '</text>'; }
      svg += '</svg>';
      el.innerHTML = svg + '<div class="tb-legende">' + a.items.map(function (it, k) { return '<div class="leg" data-n="' + (k + 1) + '"><i style="background:' + COULEURS_CERCLES[k % 5] + '">' + (k + 1) + '</i><span><b>' + it.titre + '</b>' + (it.x ? '<small>' + it.x + '</small>' : '') + '</span></div>'; }).join('') + '</div>';
      t.appendChild(el); C.widget = el; C.derniere = el.querySelector('svg') || el; return 0;
    case 'rangees':
      el = document.createElement('div'); el.className = 'tb-rangees';
      el.innerHTML = a.items.map(function (it, k) { return '<div class="rangee" data-n="' + (k + 1) + '" style="--c:' + COUL_MARQUEUR[it.c || 'bleu'] + '"><div class="rg-titre">' + it.titre + '</div>' + (it.sous ? '<div class="rg-sous">' + it.sous + '</div>' : '') + (it.x ? '<div class="rg-x">' + it.x + '</div>' : '') + '</div>'; }).join('<div class="rg-fleche">↓</div>');
      t.appendChild(el); C.widget = el; return 0;
    case 'grille':
      el = document.createElement('div'); el.className = 'tb-grille-boite';
      el.innerHTML = '<table class="tb-grille"><thead><tr>' + a.entetes.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + a.lignes.map(function (l, k) { return '<tr data-n="' + (k + 1) + '" class="' + (a.tout ? 'visible fixe' : '') + '">' + l.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
      t.appendChild(el); C.widget = el; C.derniere = a.tout ? el : (el.querySelector('thead') || el); return anime && a.tout ? 400 : 0;
    case 'montre':
      if (!C.widget) return 0;
      C.widget.querySelectorAll('.ici').forEach(function (x) { x.classList.remove('ici'); });
      C.widget.querySelectorAll('[data-n="' + a.n + '"]').forEach(function (x) { x.classList.add('visible'); if (!anime) x.classList.add('fixe'); if (anime) x.classList.add('ici'); });
      var f = C.widget.querySelectorAll('.rg-fleche')[a.n - 2]; if (f) f.classList.add('visible');
      C.derniere = C.widget.querySelector('.leg[data-n="' + a.n + '"], .rangee[data-n="' + a.n + '"], tr[data-n="' + a.n + '"]') || C.derniere;
      return anime ? 700 : 0;
  }
  return 0;
}
function voirDerniere() {
  var tb = $('#tableau'), el = C && C.derniere;
  if (!tb || !el || !tb.contains(el)) return;
  var bas = el.offsetTop + el.offsetHeight - tb.clientHeight + 20;
  var haut = el.offsetTop - 12;
  var cible = tb.scrollTop;
  if (bas > tb.scrollTop) cible = Math.min(bas, haut);
  if (haut < tb.scrollTop) cible = haut;
  if (cible !== tb.scrollTop) tb.scrollTo({ top: Math.max(0, cible), behavior: 'smooth' });
}
function humeur(h) { var z = $('#prof-zone'); if (!z) return; z.className = 'prof-zone' + (h ? ' ' + h : ''); }
function allerEtape(i, reconstruire) {
  clearTimeout(C.minuteur); clearTimeout(C.minuteurBoard); Voix.arreter();
  (C.ecritures || []).forEach(function (f) { f(); });
  C.ecritures = [];
  if (C.frappe) { clearInterval(C.frappe); C.frappe = null; }
  C.i = i; C.Q = null; C.phaseFin = false;
  if (reconstruire) {
    tableauVide();
    for (var k = 0; k < i; k++) (C.etapes[k].tab || []).forEach(function (a) { actionTableau(a, false); });
  }
  var e = C.etapes[i];
  $('#points').innerHTML = C.etapes.map(function (_, k) { return '<i class="' + (k < i ? 'fait' : k === i ? 'ici' : '') + '"></i>'; }).join('');
  history.replaceState(null, '', '#/classe/' + C.lecon.id + '/' + i);
  etat.pos = { lecon: C.lecon.id, ecran: 0, fini: false, classe: i }; sauver();
  var dit, btn = $('#btn-suiv');
  btn.hidden = false; btn.textContent = 'Suivant ›';
  if (e.quiz != null) {
    var q = C.lecon.questions[e.quiz];
    C.Q = preparerQuestion(q);
    tableauVide();
    dessinerQuizTableau();
    dit = e.quiz === 0 ? 'À toi maintenant ! ' + sansBalises(q.q) : 'Dernière question : ' + sansBalises(q.q);
    btn.hidden = true;
    parlerProf(dit, 'pointe');
    return;
  }
  if (e.fin) {
    C.phaseFin = true;
    var nb = C.resultats.filter(Boolean).length;
    L = { cours: C.cours, lecon: C.lecon, ecran: 0, phase: 'questions', resultats: C.resultats, ecoute: false };
    terminerLecon(); L = null;
    tableauVide();
    actionTableau({ t: 'titre', x: 'Bravo Inès ! 🎉' }, true);
    actionTableau({ t: 'ligne', x: nb + ' / ' + C.resultats.length + ' bonnes réponses', c: 'vert' }, true);
    var suiv = C.cours.lecons[C.lecon.rang + 1];
    var t = $('#tableau');
    var actions = document.createElement('div'); actions.className = 'tb-actions';
    actions.innerHTML = (suiv ? '<button type="button" class="btn" data-action="aller" data-vers="' + (suiv.classe ? '#/classe/' : '#/l/') + suiv.id + '">' + (suiv.classe ? '🎓 ' : '') + 'Leçon suivante</button>' : '') + '<button type="button" class="btn btn-doux" data-action="aller" data-vers="#/c/' + C.cours.id + '">Retour au cours</button>';
    t.appendChild(actions);
    btn.hidden = true;
    parlerProf(nb === C.resultats.length ? 'Parfait, tout juste ! Ces notions reviendront dans tes révisions, au bon moment. On continue ?' : 'C\'est noté ! Les notions ratées reviendront vite dans tes révisions. On continue ?', 'content');
    return;
  }
  // étape normale : le tableau s'anime pendant que le prof parle
  var actions2 = e.tab || [], k2 = 0;
  if (actions2.length) humeur('pointe');
  (function suivante() {
    if (!C || C.i !== i || k2 >= actions2.length) return;
    var d = actionTableau(actions2[k2++], true);
    voirDerniere();
    C.minuteurBoard = setTimeout(suivante, Math.max(d, 300) + 250);
  })();
  parlerProf(e.dit, e.humeur || (actions2.length ? 'pointe' : ''));
}
function parlerProf(txt, h) {
  var b = $('#bulle-txt'), suite = $('#bulle-suite'); if (!b) return;
  humeur((h || '') + ' en-parole');
  suite.hidden = true;
  var plein = txt, i = 0;
  b.innerHTML = '';
  C.texteProf = plein; C.frappeFinie = false;
  function fini() {
    if (C !== moi) return;
    C.frappeFinie = true; b.innerHTML = plein; suite.hidden = !!(C.Q && !C.Q.fini);
    if (!C.voix) humeur(h || '');
    programmerAuto();
  }
  if (C.frappe) clearInterval(C.frappe);
  var moi = C, id = setInterval(function () {
    if (C !== moi || C.frappe !== id) { clearInterval(id); return; }
    i += 2;
    var vis = plein.slice(0, i);
    b.innerHTML = vis.replace(/<[^>]*$/, '');
    if (i >= plein.length) { clearInterval(id); C.frappe = null; fini(); }
  }, 30);
  C.frappe = id;
  if (C.voix) Voix.lire([{ t: lisible(plein), ref: 0 }], null, function (ok) { if (C) { humeur(h || ''); C.voixFinie = true; programmerAuto(); } });
  C.voixFinie = !C.voix;
}
function programmerAuto() {
  clearTimeout(C.minuteur);
  if (!C.auto || C.Q || C.phaseFin || !C.frappeFinie || !C.voixFinie) return;
  var e = C.etapes[C.i];
  if (e.quiz != null || e.fin) return;
  C.minuteur = setTimeout(function () { if (C) classeSuivant(); }, C.voix ? 900 : Math.max(1800, sansBalises(C.texteProf).length * 38));
}
function classeSuivant() {
  if (!C) return;
  if (C.frappe) { clearInterval(C.frappe); C.frappe = null; $('#bulle-txt').innerHTML = C.texteProf; C.frappeFinie = true; $('#bulle-suite').hidden = !!(C.Q && !C.Q.fini); humeur(''); (C.ecritures || []).forEach(function (f) { f(); }); C.ecritures = []; programmerAuto(); return; }
  if (C.Q && !C.Q.fini) return;
  if (C.i < C.etapes.length - 1) allerEtape(C.i + 1, true);
}
function dessinerQuizTableau() {
  var t = $('#tableau');
  t.innerHTML = '<div class="tb-quiz">' + rendreQuestion(C.Q) + '</div>';
  if (C.Q.fini) $('#btn-suiv').hidden = false;
}

/* ---------- Actions (délégation) ---------- */
vue.addEventListener('click', function (ev) {
  var el = ev.target.closest('[data-action]'); if (!el || el.disabled) return;
  var act = el.dataset.action;
  switch (act) {
    case 'aller': Voix.arreter(); if (location.hash === el.dataset.vers) route(); else location.hash = el.dataset.vers; return;
    case 'recharger': route(); return;
    case 'retourner': var v = el.querySelector('.verso'); v.hidden = !v.hidden; el.classList.toggle('vu', !v.hidden); el.querySelector('.indice').textContent = v.hidden ? 'touche pour voir' : 'touche pour cacher'; return;
    case 'ecran-suiv': Voix.arreter(); avancerEcran(); return;
    case 'ecran-prec': Voix.arreter(); if (L.ecran > 0) { L.ecran--; history.replaceState(null, '', '#/l/' + L.lecon.id + '/' + L.ecran); memoriserPos(); window.scrollTo(0, 0); dessinerLecon(); } return;
    case 'ecoute-lecon': L.ecoute = !L.ecoute; if (!L.ecoute) { Voix.arreter(); surligner(null); } dessinerLecon(); return;
    case 'q-suiv':
      Voix.arreter();
      if (L.qi < L.lecon.questions.length - 1) { L.qi++; L.Q = preparerQuestion(L.lecon.questions[L.qi]); }
      else terminerLecon();
      window.scrollTo(0, 0); dessinerLecon(); return;
    case 'noter':
      var it = R.items[R.i], g = +el.dataset.g;
      if (!R.libre) { etat.cartes[it.cid] = FSRS.noter(etat.cartes[it.cid], g); noterActivite(1); sauver(); }
      R.i++; if (R.i < R.items.length) R.Q = preparerQuestion(R.items[R.i].q);
      window.scrollTo(0, 0); dessinerRevision(); return;
    case 'revisions-encore': vueRevisions(false); return;
    case 'ecoute-play': if (E.joue) { Voix.arreter(); E.joue = false; dessinerEcoute(); } else jouerEcoute(); return;
    case 'ecoute-prec': case 'ecoute-suiv':
      var enLecture = E.joue; Voix.arreter();
      E.i = Math.min(Math.max(E.i + (act === 'ecoute-suiv' ? 1 : -1), 0), E.cours.lecons.length - 1); E.texte = ''; E.joue = false;
      if (enLecture) jouerEcoute(); else dessinerEcoute(); return;
    case 'code-creer': exporterCode().then(function (c) { var t = $('#code-sortie'); t.value = c; t.hidden = false; $('#code-copier').hidden = false; t.select(); }); return;
    case 'code-copier': var t = $('#code-sortie'); (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(function () { toast('Code copié ✓'); }, function () { t.select(); toast('Sélectionne le code et copie-le'); }); return;
    case 'code-importer':
      importerCode($('#code-entree').value).then(function (nouvel) {
        return confirmer('Remplacer la progression de cet appareil par celle du code ? (' + Object.keys(nouvel.lecons).length + ' leçons, ' + Object.keys(nouvel.cartes).length + ' notions)').then(function (ok) { if (!ok) return; etat = nouvel; sauver(); toast('Progression récupérée ✓'); location.hash = '#/'; });
      }).catch(function (e) { toast(e.message || 'Code illisible.'); }); return;
    case 'classe-suiv': classeSuivant(); return;
    case 'classe-prec': if (C && C.i > 0) allerEtape(C.i - 1, true); return;
    case 'classe-auto': C.auto = !C.auto; etat.reglages.classeAuto = C.auto; sauver(); el.classList.toggle('actif', C.auto); el.setAttribute('aria-pressed', C.auto); programmerAuto(); return;
    case 'classe-voix':
      C.voix = !C.voix; etat.reglages.classeVoix = C.voix; sauver(); el.classList.toggle('actif', C.voix); el.setAttribute('aria-pressed', C.voix); el.textContent = C.voix ? '🔊' : '🔈';
      if (!C.voix) { Voix.arreter(); C.voixFinie = true; } else if (!Voix.dispo) toast('Pas de voix sur ce navigateur.');
      return;
    case 'voix-test': Voix.lire([{ t: 'Bonjour Inès ! Voici ma voix pour lire tes leçons.', ref: 0 }]); return;
  }
  // questions du mode cours
  if (C && C.Q && location.hash.indexOf('#/classe/') === 0) {
    var fin = agirQuestion(C.Q, act, el);
    if (fin) C.resultats[C.etapes[C.i].quiz] = C.Q.juste;
    dessinerQuizTableau();
    if (act === 'pd' && !fin && !C.Q.trouves[+el.dataset.i]) { var bb = vue.querySelector('[data-action="pd"][data-i="' + el.dataset.i + '"]'); if (bb) bb.classList.add('non'); }
    if (fin) parlerProf((C.Q.juste ? 'Bien joué ! ' : 'Pas tout à fait… ') + (C.Q.q.expl || ''), C.Q.juste ? 'content' : 'reflechit');
    return;
  }
  // questions
  var Q = L && L.phase === 'questions' && location.hash.indexOf('#/l/') === 0 ? L.Q : (R && location.hash.indexOf('#/revisions') === 0 ? R.Q : null);
  if (!Q) return;
  var termine = agirQuestion(Q, act, el);
  if (termine && L && Q === L.Q) L.resultats[L.qi] = Q.juste;
  if (termine && R && Q === R.Q && Q.juste) R.justes++;
  if (L && Q === L.Q) dessinerLecon(); else dessinerRevision();
  if (act === 'pd' && !termine && !Q.trouves[+el.dataset.i]) {
    var b = vue.querySelector('[data-action="pd"][data-i="' + el.dataset.i + '"]'); if (b) b.classList.add('non');
  }
});

/* ---------- Routeur ---------- */
function route() {
  Voix.arreter();
  if (E) { E.joue = false; }
  var p = (location.hash.slice(1) || '/').split('/').filter(Boolean);
  if (p[0] !== 'l' && L) { L.ecoute = false; }
  if (C) { clearTimeout(C.minuteur); clearTimeout(C.minuteurBoard); if (C.frappe) clearInterval(C.frappe); (C.ecritures || []).forEach(function (f) { f(); }); C = null; }
  switch (p[0]) {
    case undefined: return vueAccueil();
    case 'u': return vueUnivers(p[1]);
    case 'm': return vueMatiere(p[1]);
    case 'c': return vueCours(p[1]);
    case 'l': return vueLecon(p[1], p[2]);
    case 'ecoute': return vueEcoute(p[1], p[2]);
    case 'classe': return vueClasse(p[1], p[2]);
    case 'revisions': return vueRevisions(p[1] === 'libre');
    case 'reglages': return vueReglages();
  }
  introuvable();
}
window.addEventListener('hashchange', route);

chargerCatalogue().then(route).catch(function () { vue.innerHTML = '<div class="carte">Impossible de charger l\'appli. Vérifie ta connexion et recharge la page.</div>'; });

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
}

/* Accès pour les tests automatiques */
window.__bouchees = { etat: function () { return etat; }, FSRS: FSRS, exporterCode: exporterCode, importerCode: importerCode, index: index };
})();
