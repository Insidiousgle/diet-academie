// Briques pour écrire les leçons de façon compacte.
export const P = (x) => ({ t: 'p', x });
export const L = (items, x) => ({ t: 'liste', items, ...(x ? { x } : {}) });
export const ESS = (x) => ({ t: 'essentiel', x });
export const AST = (x) => ({ t: 'astuce', x });
export const CLE = (x) => ({ t: 'cle', x });
export const PIEGE = (x) => ({ t: 'piege', x });
export const DONC = (x) => ({ t: 'donc', x });
export const IMAG = (x) => ({ t: 'imagine', x });
export const CIT = (x, auteur) => ({ t: 'citation', x, auteur });
export const PERSO = (qui, x) => ({ t: 'perso', qui, x });
export const CHIF = (n, x) => ({ t: 'chiffre', n, x });
export const TAB = (entetes, lignes, x) => ({ t: 'tableau', entetes, lignes, ...(x ? { x } : {}) });
export const DUO = (a, b, x) => ({ t: 'duo', a, b, ...(x ? { x } : {}) });
export const ETAPES = (items, x) => ({ t: 'etapes', items, ...(x ? { x } : {}) });
export const FRISE = (items, x) => ({ t: 'frise', items, ...(x ? { x } : {}) });
export const NIV = (items, largeur, x) => ({ t: 'niveaux', items, ...(largeur ? { largeur } : {}), ...(x ? { x } : {}) });
export const CERCLES = (titre, couches, x) => ({ t: 'cercles', titre, couches, ...(x ? { x } : {}) });
export const RET = (x, cartes) => ({ t: 'retourne', cartes, ...(x ? { x } : {}) });
// LIEN(titre, sous-titre, univers cible ('sciences' par défaut), id de leçon cible si elle existe déjà)
export const LIEN = (titre, x, univers, vers) => ({ t: 'lien', titre, x, univers: univers || 'sciences', ...(vers ? { vers } : {}) });

// Questions — pour les QCM, la BONNE réponse est toujours écrite en premier (l'appli mélange).
export const qcm = (id, q, choix, expl) => ({ id, type: 'qcm', q, choix, bonne: 0, expl });
export const vf = (id, q, bonne, expl) => ({ id, type: 'vf', q, bonne, expl });
export const ordre = (id, q, items, expl) => ({ id, type: 'ordre', q, items, expl });
export const paires = (id, q, p, expl) => ({ id, type: 'paires', q, paires: p, expl });

// ---- Mode cours (prof + tableau) ----
// Une étape = ce que dit le prof + ce qui apparaît au tableau pendant qu'il parle.
export const E = (dit, tab, humeur) => ({ dit, ...(tab ? { tab } : {}), ...(humeur ? { humeur } : {}) });
export const T = (x) => ({ t: 'titre', x });
export const LG = (x, c, o) => ({ t: 'ligne', x, ...(c ? { c } : {}), ...(o || {}) });
export const EFF = () => ({ t: 'efface' });
export const SOUL = (entoure) => ({ t: 'souligne', ...(entoure ? { entoure: true } : {}) });
export const POST = (x, genre) => ({ t: 'postit', x, genre: genre || 'cle' });
export const CERC = (items) => ({ t: 'cercles', items });
export const RANG = (items) => ({ t: 'rangees', items });
export const MONTRE = (n) => ({ t: 'montre', n });
export const GRI = (entetes, lignes, tout) => ({ t: 'grille', entetes, lignes, ...(tout ? { tout: true } : {}) });
export const EQ = (x) => ({ t: 'ligne', x, taille: 'eq' });
