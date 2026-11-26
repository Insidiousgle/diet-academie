// Cours : Rappels de chimie, eau et minéraux (Sciences › Biochimie › Biochimie structurale)
// Source : fiches « Rappels de chimie » 1 à 5 + « L'eau et les minéraux ».
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, CERC, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F1 = 'Fiche 1', F1T = 'L\'atome';
const F2 = 'Fiche 2', F2T = 'Les liaisons chimiques';
const F3 = 'Fiche 3', F3T = 'Les molécules';
const F4 = 'Fiche 4', F4T = 'Les réactions en biochimie';
const F5 = 'Fiche 5', F5T = 'Le pH';
const F6 = 'Fiche 6', F6T = 'L\'eau et les minéraux';

export default {
  id: 'bc-chimie',
  titre: 'Rappels de chimie, eau et minéraux',
  persos: {},
  carte: {
    depart: 'Pour comprendre la biochimie (glucides, métabolisme…), il faut d\'abord parler le langage de la chimie : atomes, liaisons, molécules, réactions, pH.',
    etapes: [
      { titre: 'L\'atome', verbe: 'Je découvre', question: 'De quoi est fait un atome, et quand est-il stable ?', mots: 'Z, A · couches K L M · octet / duet · Lewis · électronégativité' },
      { titre: 'Les liaisons', verbe: 'Je relie', question: 'Comment les atomes s\'associent-ils ?', mots: 'covalente · ionique · polarité δ⁺/δ⁻ · liaison H · hydrophile / hydrophobe' },
      { titre: 'Les molécules', verbe: 'Je reconnais', question: 'Quels groupements décident des propriétés ?', mots: 'formules · isomères · alcool, aldéhyde, cétone, acide, amine, thiol' },
      { titre: 'Réactions et pH', verbe: 'Je comprends', question: 'Comment les molécules se transforment-elles ?', mots: 'hydrolyse · oxydoréduction · kinase · loi d\'action de masse · pH, pKa' },
      { titre: 'Eau et minéraux', verbe: 'J\'applique', question: 'Où est l\'eau dans le corps, à quoi servent les minéraux ?', mots: '65 % · 2/3 intracellulaire · électrolytes · macro / oligoéléments' }
    ],
    arrivee: 'Tu sais lire une molécule, prévoir si elle se dissout dans l\'eau, et reconnaître les grandes réactions du métabolisme.'
  },
  lecons: [

  /* ================= FICHE 1 : L'ATOME ================= */
  {
    id: 'bc-chimie-01', fiche: F1, ficheTitre: F1T, titre: 'La structure de l\'atome',
    classe: [
      E('Bienvenue en biochimie, Inès ! On commence par la plus petite pièce du puzzle : l\'<b>atome</b>. Il est minuscule, à l\'échelle du nanomètre, 10⁻⁹ mètre.', [T('L\'atome')]),
      E('Au centre, il y a le <b>noyau</b>, qui fait 99,9 % de sa masse. Il contient les <b>protons</b>, chargés +, et les <b>neutrons</b>, sans charge. Ensemble, on les appelle les <b>nucléons</b>.', [LG('Noyau (99,9 % de la masse) = protons (+) + neutrons (0) = nucléons', 'bleu', { puce: '•' })]),
      E('Autour, il y a le <b>nuage électronique</b> : les <b>électrons</b>, chargés −, de masse quasi nulle, qui tournent autour du noyau. Un atome a autant de protons que d\'électrons : il est électriquement <b>neutre</b>.', [LG('Nuage électronique = électrons (−), masse quasi nulle', 'bleu', { puce: '•' }), LG('autant de protons que d\'électrons → atome neutre', 'vert', { puce: '→' })]),
      E('On note un atome avec son symbole X, son numéro atomique <b>Z</b> en bas, et son nombre de masse <b>A</b> en haut. Z, c\'est le nombre de protons, donc aussi d\'électrons. A, c\'est protons plus neutrons.', [EFF(), T('La notation ᴬ_Z X'), LG('Z = numéro atomique = nombre de protons = nombre d\'électrons', 'bleu', { puce: 'Z' }), LG('A = nombre de masse = protons + neutrons', 'bleu', { puce: 'A' }), EQ('neutrons = A − Z')]),
      E('Exemple : le carbone, Z = 6 et A = 12. Il a 6 protons, 6 électrons, et 12 − 6 = 6 neutrons. Voici les atomes à connaître.', [GRI(['Atome', 'H', 'C', 'N', 'O', 'Na', 'Cl', 'Ca'], [['Z', '1', '6', '7', '8', '11', '17', '20'], ['A', '1', '12', '14', '16', '23', '35', '40']], true)]),
      E('Petite précision : il existe <b>118</b> atomes connus. Ton livre dit 109, c\'est un chiffre ancien. Et nos molécules sont surtout faites de 4 atomes : <b>C, H, O, N</b>, avec un peu de S et de P.', [POST('Les 4 atomes du vivant : C, H, O, N (+ un peu de S et de P) · 118 atomes connus', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'Que représente Z, le numéro atomique ?', ['Le nombre de protons (= nombre d\'électrons)', 'Le nombre de neutrons', 'Le nombre de protons + neutrons', 'Le nombre de couches électroniques'], 'Z = protons = électrons. A = protons + neutrons.'),
      qcm('a2', 'Combien de neutrons a le carbone (Z = 6, A = 12) ?', ['6', '12', '18', '0'], 'Neutrons = A − Z = 12 − 6 = 6.')
    ],
    revision: [
      vf('r1', 'Un atome est électriquement neutre parce qu\'il a autant de protons que d\'électrons.', true, 'Vrai : autant de charges + que de charges −.'),
      qcm('r2', 'Quels sont les 4 atomes principaux des molécules du vivant ?', ['C, H, O, N', 'Na, Cl, K, Ca', 'Fe, Zn, Cu, Mg', 'He, Ne, Ar, Kr'], 'C, H, O, N, avec un peu de S et de P.')
    ]
  },
  {
    id: 'bc-chimie-02', fiche: F1, ficheTitre: F1T, titre: 'Les couches électroniques',
    classe: [
      E('Les électrons ne sont pas rangés n\'importe comment : ils se placent sur des <b>couches</b>, des niveaux d\'énergie, notées K, L, M…', [T('Les couches électroniques')]),
      E('La couche numéro n peut contenir au maximum <b>2n²</b> électrons. K, c\'est n = 1 : 2 électrons. L, n = 2 : 8 électrons. M, n = 3 : 18 électrons.', [GRI(['Couche', 'n', 'Calcul', 'Maximum'], [['K', '1', '2 × 1²', '2 e⁻'], ['L', '2', '2 × 2²', '8 e⁻'], ['M', '3', '2 × 3²', '18 e⁻']]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E('On remplit dans l\'ordre : K d\'abord, puis L, puis M. Et la <b>dernière couche occupée</b> s\'appelle la <b>couche de valence</b> : c\'est elle qui sert à faire les liaisons.', [LG('On remplit K → L → M', 'bleu', { puce: '→' }), LG('Dernière couche occupée = couche de VALENCE (sert aux liaisons)', 'rouge'), SOUL()]),
      E('Exemple 1 : le carbone, 6 électrons. K en prend 2, L en prend 4. Il lui manque 4 électrons pour en avoir 8.', [EFF(), T('Deux exemples'), LG('Carbone (Z = 6) : K = 2 · L = 4 → il lui manque 4 e⁻', 'bleu', { puce: 'C' })]),
      E('Exemple 2 : le sodium, 11 électrons. K = 2, L = 8, M = 1. Ce seul électron sur M, il a tendance à le perdre : il devient l\'ion Na⁺.', [LG('Sodium (Z = 11) : K = 2 · L = 8 · M = 1 → perd cet e⁻ → Na⁺', 'bleu', { puce: 'Na' })]),
      E('À retenir : K = 2, L = 8, M = 18 électrons maximum. La formule 2n² te permet de les retrouver.', [POST('K = 2 · L = 8 · M = 18 (2n²) · dernière couche = couche de valence', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'Combien d\'électrons au maximum sur la couche L ?', ['8', '2', '18', '32'], 'L : n = 2 → 2 × 2² = 8.'),
      vf('a2', 'La couche de valence est la dernière couche occupée, celle qui sert à faire les liaisons.', true, 'Vrai.')
    ],
    revision: [
      paires('r1', 'Relie chaque couche à son nombre maximum d\'électrons.', [['K', '2 e⁻'], ['L', '8 e⁻'], ['M', '18 e⁻']], 'Formule : 2n².'),
      qcm('r2', 'Comment se répartissent les 11 électrons du sodium ?', ['K = 2, L = 8, M = 1', 'K = 8, L = 2, M = 1', 'K = 2, L = 9', 'K = 1, L = 8, M = 2'], 'On remplit K puis L puis M : 2 + 8 + 1.')
    ]
  },
  {
    id: 'bc-chimie-03', fiche: F1, ficheTitre: F1T, titre: 'Être stable : octet, duet et Lewis',
    classe: [
      E('Un atome cherche à être <b>stable</b>. Et pour ça, il y a une règle : la <b>règle de l\'octet</b>.', [T('La règle de l\'octet')]),
      E('Un atome est stable quand sa couche de valence contient <b>8 électrons</b>. Seuls les <b>gaz rares</b> le sont naturellement. Les autres perdent, gagnent ou partagent des électrons pour atteindre 8 : ce sont les <b>liaisons chimiques</b>.', [LG('Stable = 8 e⁻ sur la couche de valence', 'rouge', { taille: 'grand' }), SOUL(), LG('naturellement : seulement les gaz rares', 'noir', { puce: '•' }), LG('les autres perdent, gagnent ou partagent des e⁻ → liaisons', 'bleu', { puce: '•' })]),
      E('Exception : la <b>règle du duet</b>. L\'hydrogène n\'a qu\'une couche, K, qui se remplit avec 2 électrons. Il est donc stable avec <b>2 électrons</b>, pas 8. Pareil pour l\'hélium, qui a déjà ses 2.', [POST('Duet : H (et He) stables avec 2 e⁻, pas 8', 'piege')], 'reflechit'),
      E('Pour représenter tout ça, on utilise la <b>représentation de Lewis</b> : le symbole de l\'atome, entouré <b>seulement</b> des électrons de sa couche de valence. On place d\'abord les électrons un par un, les célibataires, puis on forme des doublets.', [EFF(), T('La représentation de Lewis'), LG('symbole + électrons de la couche de valence seulement', 'bleu'), LG('● = électron célibataire · — = doublet (2 e⁻)', 'noir', { taille: 'petit' })]),
      E('La règle d\'or : le nombre d\'électrons célibataires, c\'est le nombre de liaisons possibles. H en a 1, O en a 2, N en a 3, C en a 4.', [GRI(['Atome', 'Célibataires', 'Liaisons possibles'], [['H', '1', '1'], ['O', '2', '2'], ['N', '3', '3'], ['C', '4', '4']]), MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4)]),
      E('Retiens : H 1, O 2, N 3, C 4. Tu t\'en serviras sans arrêt pour vérifier une formule.', [POST('Lewis : électrons célibataires = liaisons possibles · H 1 · O 2 · N 3 · C 4', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'Combien d\'électrons sur sa couche de valence pour qu\'un atome soit stable (règle de l\'octet) ?', ['8', '2', '4', '18'], 'Octet = 8. Exception : l\'hydrogène (duet = 2).'),
      qcm('a2', 'Combien de liaisons le carbone peut-il former ?', ['4', '1', '2', '3'], '4 électrons célibataires → 4 liaisons.')
    ],
    revision: [
      vf('r1', 'L\'hydrogène est stable avec 8 électrons.', false, 'Faux : c\'est la règle du duet, 2 électrons (une seule couche, K).'),
      paires('r2', 'Relie chaque atome au nombre de liaisons qu\'il peut faire.', [['H', '1'], ['O', '2'], ['N', '3'], ['C', '4']], 'Électrons célibataires = liaisons possibles.')
    ]
  },
  {
    id: 'bc-chimie-04', fiche: F1, ficheTitre: F1T, titre: 'Le tableau périodique et l\'électronégativité',
    classe: [
      E('Les atomes sont rangés dans le <b>tableau périodique</b>, celui de Mendeleïev, par Z croissant.', [T('Le tableau périodique')]),
      E('Une <b>ligne</b>, c\'est une <b>période</b> : le nombre de couches d\'électrons. Une <b>colonne</b>, c\'est un <b>groupe</b> : le nombre d\'électrons de valence. Exemple : le carbone a 2 couches et 4 électrons sur la dernière, il est en période 2, groupe IV.', [LG('Ligne = période = nombre de couches', 'bleu', { puce: '→' }), LG('Colonne = groupe = nombre d\'électrons de valence', 'bleu', { puce: '↓' }), LG('Carbone : 2 couches, 4 e⁻ de valence → période 2, groupe IV', 'noir', { taille: 'petit' })]),
      E('Maintenant, une notion clé : l\'<b>électronégativité</b>. C\'est la capacité d\'un atome à attirer vers lui les électrons d\'une liaison. On la mesure sur l\'échelle de Pauling.', [EFF(), T('L\'électronégativité'), LG('= capacité à attirer les électrons d\'une liaison (échelle de Pauling)', 'rouge'), SOUL()]),
      E('Elle augmente de <b>gauche à droite</b> et de <b>bas en haut</b> du tableau. Le champion, c\'est le fluor : 3,98. Les gaz rares, eux, n\'en ont pas.', [LG('↑ de gauche à droite et de bas en haut', 'bleu', { puce: '→' }), LG('le plus électronégatif : le fluor (3,98) · gaz rares : aucune', 'noir', { puce: '•' })]),
      E('Les 4 atomes du vivant, dans l\'ordre : l\'oxygène 3,44, l\'azote 3,04, le carbone 2,55, l\'hydrogène 2,2. Retiens O > N > C > H.', [GRI(['Atome', 'Électronégativité'], [['O', '3,44'], ['N', '3,04'], ['C', '2,55'], ['H', '2,2']]), MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4)]),
      E('Et un lien avec la suite : l\'oxygène attire très fort les électrons. C\'est pour ça que l\'O₂ est l\'<b>accepteur final</b> de la chaîne respiratoire, qu\'on verra dans le métabolisme.', [POST('O (3,44) > N (3,04) > C (2,55) > H (2,2) · O₂ = accepteur final de la chaîne respiratoire', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Qu\'est-ce que l\'électronégativité ?', ['La capacité d\'un atome à attirer les électrons d\'une liaison', 'Le nombre d\'électrons d\'un atome', 'La charge électrique d\'un ion', 'Le nombre de couches d\'un atome'], 'Elle augmente vers la droite et vers le haut du tableau.'),
      ordre('a2', 'Range ces atomes du PLUS au MOINS électronégatif.', ['O (oxygène)', 'N (azote)', 'C (carbone)', 'H (hydrogène)'], 'O 3,44 > N 3,04 > C 2,55 > H 2,2.')
    ],
    revision: [
      qcm('r1', 'Dans le tableau périodique, que donne une colonne (un groupe) ?', ['Le nombre d\'électrons de valence', 'Le nombre de couches', 'Le nombre de neutrons', 'La masse de l\'atome'], 'Ligne = période = couches ; colonne = groupe = électrons de valence.'),
      vf('r2', 'L\'électronégativité augmente de droite à gauche du tableau.', false, 'Faux : elle augmente de gauche à droite et de bas en haut.')
    ]
  },

  /* ================= FICHE 2 : LES LIAISONS ================= */
  {
    id: 'bc-chimie-05', fiche: F2, ficheTitre: F2T, titre: 'La liaison covalente et la valence',
    classe: [
      E('Rappel : un atome veut 8 électrons sur sa couche de valence, 2 pour H. Pour y arriver, il peut <b>partager</b> des électrons, ou en <b>donner</b> et en <b>recevoir</b>. On commence par le partage : la <b>liaison covalente</b>.', [T('La liaison covalente')]),
      E('C\'est la <b>mise en commun d\'une paire d\'électrons</b> entre deux atomes voisins : chacun apporte 1 électron. Les deux atomes comptent ces électrons partagés, et complètent ainsi leur couche de valence.', [LG('partage d\'une PAIRE d\'e⁻ : chaque atome en apporte 1', 'bleu', { taille: 'grand' }), SOUL()]),
      E('Un trait = une paire partagée. Deux traits, comme dans C=O ou O=O, = deux paires : une <b>double liaison</b>. Exemple : le méthane CH₄ a 4 liaisons simples, le dioxygène O₂ a une double liaison.', [LG('1 trait = 1 paire · 2 traits (C=O, O=O) = double liaison', 'bleu', { puce: '•' }), LG('CH₄ : 4 liaisons simples · O₂ : 1 double liaison', 'noir', { taille: 'petit' })]),
      E('C\'est une liaison de <b>forte énergie</b> : très solide, difficile à rompre. Il faut de la chaleur, un produit chimique ou une enzyme. Et c\'est elle qui construit toutes nos molécules organiques : glucides, lipides, protéines.', [LG('liaison FORTE : il faut chaleur, produit chimique ou enzyme pour la rompre', 'rouge', { puce: '!' }), LG('construit glucides, lipides, protéines', 'vert', { puce: '→' })]),
      E('La <b>valence</b>, c\'est le nombre de liaisons qu\'un atome fait.', [EFF(), T('La valence'), GRI(['Atome', 'Liaisons', 'Nom'], [['H', '1', 'monovalent'], ['O', '2', 'divalent'], ['S', '2', 'divalent'], ['N', '3', 'trivalent'], ['C', '4', 'tétravalent'], ['P', '5', 'pentavalent']], true)]),
      E('Astuce pour vérifier une formule développée : chaque C a 4 traits, chaque O en a 2, chaque H en a 1. Un double trait compte pour 2.', [POST('Valence : H 1 · O 2 · S 2 · N 3 · C 4 · P 5 — chaque C a 4 traits (double trait = 2)', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'Une liaison covalente, c\'est…', ['la mise en commun d\'une paire d\'électrons entre deux atomes', 'le transfert d\'un électron d\'un atome à l\'autre', 'une attraction faible entre deux molécules', 'la perte d\'un proton'], 'Chaque atome apporte 1 électron à la paire partagée.'),
      qcm('a2', 'Quelle est la valence de l\'azote (N) ?', ['3 (trivalent)', '1 (monovalent)', '2 (divalent)', '4 (tétravalent)'], 'H 1, O 2, S 2, N 3, C 4, P 5.')
    ],
    revision: [
      vf('r1', 'La liaison covalente est une liaison faible, qui se défait facilement.', false, 'Faux : c\'est une liaison FORTE. Il faut chaleur, produit chimique ou enzyme pour la rompre.'),
      paires('r2', 'Relie chaque atome à sa valence.', [['H', '1'], ['O', '2'], ['N', '3'], ['C', '4'], ['P', '5']], 'S est divalent, comme O.')
    ]
  },
  {
    id: 'bc-chimie-06', fiche: F2, ficheTitre: F2T, titre: 'La liaison ionique',
    classe: [
      E('Deuxième façon de devenir stable : ici, on ne partage pas, on <b>donne</b>. Un atome <b>cède</b> un ou plusieurs électrons à un autre. C\'est la <b>liaison ionique</b>.', [T('La liaison ionique')]),
      E('Celui qui <b>perd</b> des électrons devient un <b>cation</b>, un ion positif. C\'est un atome peu électronégatif, souvent un métal : le sodium Na devient Na⁺.', [LG('perd des e⁻ → CATION (+) · peu électronégatif, souvent un métal', 'bleu', { puce: '−e⁻' }), LG('Na → Na⁺', 'noir', { taille: 'petit', decale: true })]),
      E('Celui qui <b>gagne</b> des électrons devient un <b>anion</b>, un ion négatif. C\'est un atome très électronégatif : le chlore Cl devient Cl⁻.', [LG('gagne des e⁻ → ANION (−) · très électronégatif', 'rouge', { puce: '+e⁻' }), LG('Cl → Cl⁻', 'noir', { taille: 'petit', decale: true })]),
      E('Les charges opposées s\'attirent : le cation et l\'anion restent collés. C\'est la liaison ionique. L\'exemple type : NaCl, le sel de cuisine.', [EQ('Na⁺ + Cl⁻ → NaCl (sel de cuisine)')]),
      E('Un ion <b>monovalent</b> porte 1 charge : Na⁺, K⁺, Cl⁻. Un ion <b>divalent</b> en porte 2 : Ca²⁺, Mg²⁺, Fe²⁺, Cu²⁺. Ce sont les <b>minéraux</b> de l\'alimentation.', [EFF(), T('Ions mono- et divalents'), LG('monovalent (1 charge) : Na⁺, K⁺, Cl⁻', 'bleu', { puce: '1' }), LG('divalent (2 charges) : Ca²⁺, Mg²⁺, Fe²⁺, Cu²⁺', 'bleu', { puce: '2' }), POST('Ce sont les minéraux de l\'alimentation !', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'Un atome qui perd un électron devient…', ['un cation (ion +)', 'un anion (ion −)', 'un isotope', 'un gaz rare'], 'Perdre une charge − rend l\'atome positif : cation.'),
      vf('a2', 'Dans le sel de cuisine NaCl, le sodium et le chlore sont reliés par une liaison ionique.', true, 'Vrai : Na⁺ et Cl⁻ s\'attirent.')
    ],
    revision: [
      qcm('r1', 'Lequel de ces ions est divalent ?', ['Ca²⁺', 'Na⁺', 'K⁺', 'Cl⁻'], 'Divalents : Ca²⁺, Mg²⁺, Fe²⁺, Cu²⁺.'),
      qcm('r2', 'Quel type d\'atome devient un anion ?', ['Un atome très électronégatif, qui gagne des électrons', 'Un métal peu électronégatif', 'Un gaz rare', 'Un atome qui perd des électrons'], 'Très électronégatif → il arrache l\'électron → anion (−).')
    ]
  },
  {
    id: 'bc-chimie-07', fiche: F2, ficheTitre: F2T, titre: 'Covalente ou ionique ? L\'électronégativité décide',
    classe: [
      E('Comment savoir si une liaison est covalente ou ionique ? C\'est l\'<b>électronégativité</b> qui décide. Dans une liaison, l\'atome le plus électronégatif attire les électrons vers lui.', [T('Covalente ou ionique ?')]),
      E('On calcule la différence d\'électronégativité entre les deux atomes, notée <b>Δ</b>. Plus Δ est grand, plus le partage est inégal… jusqu\'à ce que l\'électron change carrément d\'atome.', [EQ('Δ = électronégativité du plus attracteur − électronégativité de l\'autre')]),
      E('Trois zones à connaître.', [RANG([
        { titre: 'Δ < 0,4 · covalente NON polarisée', x: 'partage équitable · ex. C–H : 2,55 − 2,2 = 0,35', c: 'vert' },
        { titre: '0,4 < Δ < 1,7 · covalente POLARISÉE', x: 'partage inégal : charges partielles δ⁺ / δ⁻ · ex. O–H : 1,24 · C–O : 0,89', c: 'bleu' },
        { titre: 'Δ > 1,7 · IONIQUE', x: 'l\'e⁻ change d\'atome : ions + / − · ex. Na–Cl : 3,16 − 0,93 = 2,23', c: 'rouge' }
      ]), MONTRE(1)]),
      E('Moins de 0,4 : <b>covalente non polarisée</b>, le partage est équitable. C\'est le cas de C–H.', [MONTRE(1)]),
      E('Entre 0,4 et 1,7 : <b>covalente polarisée</b>. Le partage est inégal, il apparaît des charges partielles. C\'est le cas de O–H.', [MONTRE(2)]),
      E('Plus de 1,7 : <b>ionique</b>, l\'électron change d\'atome. C\'est le cas de Na–Cl.', [MONTRE(3), POST('Δ < 0,4 non polarisée · 0,4 à 1,7 polarisée · > 1,7 ionique', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'La liaison O–H (Δ = 1,24) est…', ['covalente polarisée', 'covalente non polarisée', 'ionique', 'une liaison hydrogène'], 'Δ entre 0,4 et 1,7 → covalente polarisée.'),
      paires('a2', 'Relie chaque valeur de Δ au type de liaison.', [['Δ < 0,4', 'Covalente non polarisée'], ['0,4 < Δ < 1,7', 'Covalente polarisée'], ['Δ > 1,7', 'Ionique']], 'C–H, O–H, Na–Cl.')
    ],
    revision: [
      qcm('r1', 'La liaison C–H (Δ = 0,35) est…', ['covalente non polarisée', 'covalente polarisée', 'ionique', 'impossible'], 'Δ < 0,4 → partage équitable.')
    ]
  },
  {
    id: 'bc-chimie-08', fiche: F2, ficheTitre: F2T, titre: 'Liaison polarisée et liaison hydrogène',
    classe: [
      E('Zoom sur la liaison polarisée, avec l\'exemple de <b>O–H</b>. L\'oxygène, 3,44, attire plus les électrons que l\'hydrogène, 2,2. La paire partagée n\'est plus au milieu : elle est tirée vers le O.', [T('La liaison O–H polarisée')]),
      E('Le O devient donc un peu négatif, et le H un peu positif. On écrit δ⁻ et δ⁺, « delta moins » et « delta plus ». Ce sont des <b>charges partielles</b>, pas de vraies charges comme dans un ion.', [EQ('O δ⁻ — H δ⁺'), LG('δ = charge PARTIELLE (pas un vrai ion)', 'rouge'), SOUL()]),
      E('Conséquence : la molécule a un côté un peu + et un côté un peu −. On dit qu\'elle est <b>polaire</b>. Elle peut attirer d\'autres molécules polaires, surtout l\'eau : elle est <b>hydrophile</b>. À l\'inverse, C–H n\'est pas polarisée : rien pour attirer l\'eau, elle est <b>hydrophobe</b>.', [LG('O–H polaire → attire l\'eau → hydrophile', 'bleu', { puce: '•' }), LG('C–H apolaire → rien pour l\'eau → hydrophobe', 'noir', { puce: '•' })]),
      E('Maintenant, la <b>liaison hydrogène</b>. Le H un peu positif d\'une molécule est attiré par le O un peu négatif d\'une molécule voisine, comme deux petits aimants.', [EFF(), T('La liaison hydrogène'), LG('H δ⁺ d\'une molécule ··· O δ⁻ de la molécule voisine', 'bleu', { taille: 'grand' })]),
      E('Ce n\'est pas un partage d\'électrons, c\'est une simple attraction. Donc une liaison <b>faible</b>, qui se fait et se défait facilement. Mais il y en a <b>énormément</b>.', [LG('simple attraction → liaison FAIBLE, mais très nombreuse', 'rouge'), SOUL()]),
      E('On la trouve entre les molécules d\'eau, entre l\'eau et les –OH des glucides, et dans la forme des protéines et de l\'ADN.', [POST('Liaison H : faible, nombreuse — entre molécules d\'eau, eau et –OH des glucides, forme des protéines et de l\'ADN', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Dans la liaison O–H, que signifie « δ⁻ » sur l\'oxygène ?', ['Une charge partielle négative', 'Un vrai ion négatif', 'Un électron en moins', 'Un neutron supplémentaire'], 'δ = charge partielle : la paire d\'électrons est tirée vers le O.'),
      vf('a2', 'La liaison hydrogène est une liaison forte, issue d\'un partage d\'électrons.', false, 'Faux : c\'est une simple attraction, donc faible (mais très nombreuse).')
    ],
    revision: [
      qcm('r1', 'Pourquoi une molécule portant des –OH est-elle hydrophile ?', ['Parce que la liaison O–H est polaire et forme des liaisons hydrogène avec l\'eau', 'Parce qu\'elle contient beaucoup de carbone', 'Parce qu\'elle est ionique', 'Parce qu\'elle est très lourde'], 'O δ⁻ / H δ⁺ → liaisons H avec l\'eau.')
    ]
  },
  {
    id: 'bc-chimie-09', fiche: F2, ficheTitre: F2T, titre: 'Hydrophile ou hydrophobe ?',
    classe: [
      E('Une question qui revient sans cesse en nutrition : une molécule se dissout-elle dans l\'eau ?', [T('Hydrophile ou hydrophobe ?')]),
      E('<b>Hydrophile</b>, « qui aime l\'eau » : ce sont les parties polaires ou chargées, –OH, –COO⁻, –NH₃⁺. Elles font des liaisons hydrogène avec l\'eau, qui les entoure : la molécule se dissout. Exemple : le glycérol.', [LG('HYDROPHILE : –OH, –COO⁻, –NH₃⁺ → liaisons H avec l\'eau → se dissout', 'bleu')]),
      E('<b>Hydrophobe</b>, « qui fuit l\'eau » : ce sont les parties apolaires, les chaînes de C–H. L\'eau ne peut pas s\'y accrocher : elles se regroupent entre elles, à l\'écart de l\'eau, comme l\'huile.', [LG('HYDROPHOBE : chaînes C–H → l\'eau ne s\'y accroche pas → gouttelettes (huile)', 'rouge')]),
      E('Et si une molécule a les deux ? C\'est la <b>partie la plus grande</b> qui l\'emporte.', [EFF(), T('Quand il y a les deux'), GRI(['Molécule', 'Hydrophile', 'Hydrophobe', 'Résultat'], [['Éthanol', '1 –OH', 'petite (2 C)', 'soluble'], ['Glycérol', '3 –OH', 'petite (3 C)', 'soluble'], ['Acide gras long', '1 –COOH', 'très grande (16-18 C)', 'insoluble'], ['Cholestérol', '1 –OH', 'très grande (27 C)', 'insoluble']]), MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4)]),
      E('Pourquoi c\'est important ? Le plasma, c\'est surtout de l\'eau. Les molécules solubles y circulent librement. Les insolubles doivent être <b>transportées par des protéines</b> : les lipoprotéines pour le cholestérol, l\'albumine pour les acides gras.', [POST('Plasma = eau : les insolubles voyagent sur des protéines (cholestérol → lipoprotéines · acides gras → albumine)', 'cle')], 'content')
    ],
    questions: [
      vf('a1', 'Les longues chaînes de C–H sont hydrophobes.', true, 'Vrai : apolaires, l\'eau ne peut pas s\'y accrocher.'),
      qcm('a2', 'Le cholestérol a un –OH mais une très grande partie carbonée (27 C). Il est donc…', ['insoluble dans l\'eau', 'soluble dans l\'eau', 'ionique', 'gazeux'], 'C\'est la partie la plus grande qui l\'emporte.')
    ],
    revision: [
      qcm('r1', 'Comment le cholestérol circule-t-il dans le plasma ?', ['Transporté par des lipoprotéines', 'Dissous librement dans l\'eau', 'Transporté par l\'albumine', 'Il ne circule pas'], 'Insoluble → lipoprotéines. Les acides gras, eux, voyagent sur l\'albumine.'),
      paires('r2', 'Soluble ou insoluble dans l\'eau ?', [['Glycérol (3 –OH, 3 C)', 'Soluble'], ['Acide gras long (16-18 C)', 'Insoluble']], 'La partie la plus grande l\'emporte.')
    ]
  },
  {
    id: 'bc-chimie-10', fiche: F2, ficheTitre: F2T, titre: 'Bilan des liaisons',
    classe: [
      E('On fait le point sur les liaisons. Essaie de dire chaque réponse avant que je l\'écrive !', [T('L\'essentiel des liaisons')]),
      E('La liaison <b>covalente</b> : partage d\'une paire d\'électrons, simple ou double. Elle est forte. La <b>valence</b> : H 1, O 2, S 2, N 3, C 4, P 5.', [LG('Covalente = partage d\'une paire d\'e⁻ (simple ou double). Forte.', 'bleu', { puce: '1' }), LG('Valence : H 1, O 2, S 2, N 3, C 4, P 5', 'bleu', { puce: '2' })]),
      E('La liaison <b>ionique</b> : transfert d\'électrons, un cation + et un anion −, comme NaCl. Et le Δ d\'électronégativité : moins de 0,4 non polarisée, 0,4 à 1,7 polarisée, plus de 1,7 ionique.', [LG('Ionique = transfert d\'e⁻ : cation (+) et anion (−). Ex. NaCl', 'bleu', { puce: '3' }), LG('Δ : < 0,4 non polarisée · 0,4-1,7 polarisée · > 1,7 ionique', 'bleu', { puce: '4' })]),
      E('O–H est polaire, avec O δ⁻ et H δ⁺ ; C–H est apolaire. Et la liaison hydrogène, faible mais nombreuse, rend les –OH hydrophiles.', [LG('O–H polaire (O δ⁻, H δ⁺) ; C–H apolaire', 'bleu', { puce: '5' }), LG('Liaison H : faible, nombreuse ; rend les –OH hydrophiles', 'bleu', { puce: '6' })]),
      E('C\'est le résumé de ta fiche 2. On vérifie avec le quiz ?', [POST('Covalente (partage, forte) · ionique (transfert) · Δ 0,4 / 1,7 · O–H polaire, C–H apolaire · liaison H faible et nombreuse', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel type de liaison relie Na⁺ et Cl⁻ dans le sel ?', ['Ionique', 'Covalente non polarisée', 'Hydrogène', 'Peptidique'], 'Transfert d\'électron → ions + et − qui s\'attirent.'),
      vf('a2', 'La liaison C–H est polarisée, ce qui rend les chaînes carbonées hydrophiles.', false, 'Faux : C–H est apolaire (Δ = 0,35), d\'où les chaînes hydrophobes.')
    ],
    revision: [
      qcm('r1', 'Quelle liaison est faible mais très nombreuse, et rend les –OH hydrophiles ?', ['La liaison hydrogène', 'La liaison covalente', 'La liaison ionique', 'La liaison peptidique'], 'Simple attraction entre H δ⁺ et O δ⁻.')
    ]
  },

  /* ================= FICHE 3 : LES MOLÉCULES ================= */
  {
    id: 'bc-chimie-11', fiche: F3, ficheTitre: F3T, titre: 'Écrire une molécule, les isomères',
    classe: [
      E('Une molécule se définit par la nature de ses atomes, leur nombre et les liaisons entre eux. On peut l\'écrire de <b>trois façons</b>. Exemple : le glycérol.', [T('Trois façons d\'écrire une molécule')]),
      E('La <b>formule brute</b> : uniquement les atomes et leur nombre. Pour le glycérol : C₃H₈O₃.', [LG('Formule BRUTE : les atomes et leur nombre', 'bleu', { puce: '1' }), EQ('Glycérol : C₃H₈O₃')]),
      E('La <b>formule développée</b> : toutes les liaisons, un trait par liaison covalente. Et la <b>semi-développée</b> : les liaisons entre carbones, avec les groupements regroupés. C\'est la plus utilisée en biochimie.', [LG('Formule DÉVELOPPÉE : toutes les liaisons (1 trait = 1 liaison)', 'bleu', { puce: '2' }), LG('SEMI-DÉVELOPPÉE : liaisons entre C + groupements regroupés (la plus utilisée)', 'vert', { puce: '3' }), EQ('CH₂OH – CHOH – CH₂OH')]),
      E('Les <b>isomères</b>, maintenant. Deux isomères ont la <b>même formule brute</b>, mais des formules développées différentes : les atomes ne sont pas rangés pareil.', [EFF(), T('Les isomères'), LG('même formule brute, structure différente', 'rouge', { taille: 'grand' }), SOUL()]),
      E('L\'exemple à connaître : C₆H₁₂O₆, c\'est à la fois le <b>glucose</b>, le <b>fructose</b> et le <b>galactose</b>. Donc la formule brute ne suffit pas à identifier une molécule.', [EQ('C₆H₁₂O₆ = glucose = fructose = galactose'), POST('Isomères : la formule brute ne suffit pas à identifier une molécule', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quelle formule est la plus utilisée en biochimie ?', ['La semi-développée', 'La brute', 'La développée', 'La formule de Lewis'], 'Liaisons entre carbones + groupements regroupés.'),
      vf('a2', 'Le glucose, le fructose et le galactose sont des isomères.', true, 'Vrai : même formule brute C₆H₁₂O₆, atomes rangés différemment.')
    ],
    revision: [
      qcm('r1', 'Deux isomères ont…', ['la même formule brute mais une structure différente', 'la même structure mais des atomes différents', 'des formules brutes différentes', 'exactement la même formule développée'], 'C\'est pourquoi la formule brute ne suffit pas.')
    ]
  },
  {
    id: 'bc-chimie-12', fiche: F3, ficheTitre: F3T, titre: 'Alcools, aldéhydes et cétones',
    classe: [
      E('Certains groupes d\'atomes donnent à une molécule des propriétés particulières, solubilité, acidité, et des réactions possibles. Ce sont les <b>groupements fonctionnels</b>. R, c\'est le reste de la molécule.', [T('Les groupements fonctionnels (1/2)')]),
      E('L\'<b>alcool</b>, ou hydroxyle : –OH, porté par un carbone qui n\'a que des liaisons simples. Il est polaire, donc hydrophile.', [LG('ALCOOL –OH : C à liaisons simples · polaire → hydrophile', 'bleu')]),
      E('Primaire : en bout de chaîne, son carbone est lié à un seul autre C. Secondaire : en milieu de chaîne, lié à deux autres C. Quand on les oxyde, ils perdent 2 e⁻ et 2 H⁺ : le primaire donne un <b>aldéhyde</b>, le secondaire une <b>cétone</b>.', [GRI(['Alcool', 'Où ?', 'Oxydation →'], [['Primaire R–CH₂–OH', 'en bout de chaîne', 'aldéhyde'], ['Secondaire R–CH(OH)–R\'', 'en milieu de chaîne', 'cétone']]), MONTRE(1), MONTRE(2)]),
      E('L\'<b>aldéhyde</b> : un C=O en bout de chaîne, –CHO. Il s\'oxyde facilement en acide carboxylique. Test : la liqueur de Fehling, bleue, donne un précipité <b>rouge brique</b>.', [EFF(), T('Aldéhyde ou cétone ?'), RANG([
        { titre: 'Aldéhyde –CHO', sous: 'C=O en BOUT de chaîne', x: 's\'oxyde facilement → acide carboxylique · Fehling + (rouge brique)', c: 'bleu' },
        { titre: 'Cétone R–CO–R\'', sous: 'C=O en MILIEU de chaîne', x: 'ne s\'oxyde pas · Fehling −', c: 'rouge' }
      ]), MONTRE(1)]),
      E('La <b>cétone</b> : un C=O en milieu de chaîne. Elle ne s\'oxyde pas : Fehling négatif. Par contre, le test au DNPH, jaune, donne un précipité orangé avec une cétone ou un aldéhyde.', [MONTRE(2), LG('DNPH (jaune) → précipité orangé : cétone OU aldéhyde', 'noir', { taille: 'petit' })]),
      E('À retenir : l\'alcool primaire s\'oxyde en aldéhyde, le secondaire en cétone. L\'aldéhyde est en bout, Fehling positif ; la cétone au milieu, Fehling négatif.', [POST('Alcool I° (bout) → aldéhyde (Fehling +) · alcool II° (milieu) → cétone (Fehling −)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'L\'oxydation d\'un alcool primaire donne…', ['un aldéhyde', 'une cétone', 'une amine', 'un thiol'], 'Primaire → aldéhyde ; secondaire → cétone.'),
      vf('a2', 'La cétone s\'oxyde facilement et donne un test de Fehling positif.', false, 'Faux : c\'est l\'aldéhyde. La cétone ne s\'oxyde pas (Fehling négatif).')
    ],
    revision: [
      qcm('r1', 'Que donne un test de Fehling positif ?', ['Un précipité rouge brique', 'Une couleur bleue', 'Un précipité orangé', 'Une mousse'], 'Fehling est bleu ; avec un aldéhyde (réducteur), précipité rouge brique.'),
      qcm('r2', 'Où se trouve le C=O d\'un aldéhyde ?', ['En bout de chaîne', 'En milieu de chaîne', 'Dans un cycle', 'Il n\'en a pas'], 'Aldéhyde –CHO en bout ; cétone au milieu.')
    ]
  },
  {
    id: 'bc-chimie-13', fiche: F3, ficheTitre: F3T, titre: 'L\'acide carboxylique et ses liaisons',
    classe: [
      E('Groupement suivant : l\'<b>acide carboxylique</b>, –COOH. C\'est un acide : il peut lâcher son H⁺.', [T('L\'acide carboxylique –COOH'), EQ('R–COOH ⇄ R–COO⁻ + H⁺')]),
      E('Il ne le lâche pas toujours, la réaction est réversible : on dit que c\'est un <b>acide faible</b>. Dans le corps, à pH 7,4, il a lâché son H⁺ : il est sous forme R–COO⁻, chargé −, donc très hydrophile. Sauf si sa chaîne est très longue, comme les acides gras longs, insolubles.', [LG('acide FAIBLE (réversible)', 'bleu', { puce: '•' }), LG('à pH 7,4 : R–COO⁻ (chargé −) → très hydrophile', 'vert', { puce: '•' }), LG('sauf chaîne très longue (acides gras longs) → insoluble', 'rouge', { puce: '•' })]),
      E('Il se lie à d\'autres fonctions en libérant une molécule d\'eau. Avec un alcool : une liaison <b>ester</b>.', [EFF(), T('3 liaisons à connaître'), EQ('R–COOH + HO–R\' → R–CO–O–R\' + H₂O · ESTER')]),
      E('Avec un thiol : une liaison <b>thioester</b>.', [EQ('R–COOH + HS–R\' → R–CO–S–R\' + H₂O · THIOESTER')]),
      E('Avec une amine : une liaison <b>peptidique</b>. C\'est comme ça que les acides aminés s\'enchaînent pour former les protéines.', [EQ('R–COOH + H₂N–R\' → R–CO–NH–R\' + H₂O · PEPTIDIQUE')]),
      E('Et la <b>décarboxylation</b> : la fonction –COOH peut partir sous forme de CO₂. Retiens les trois associations : alcool → ester, thiol → thioester, amine → peptidique.', [POST('–COOH + alcool → ester · + thiol → thioester · + amine → peptidique (+ H₂O) · décarboxylation : départ de CO₂', 'cle')], 'content')
    ],
    questions: [
      paires('a1', 'Avec quoi l\'acide carboxylique forme-t-il chaque liaison ?', [['Ester', 'Un alcool'], ['Thioester', 'Un thiol'], ['Peptidique', 'Une amine']], 'Chaque fois, une molécule d\'eau est libérée.'),
      qcm('a2', 'Sous quelle forme est un acide carboxylique dans le corps (pH 7,4) ?', ['R–COO⁻ (il a lâché son H⁺)', 'R–COOH (il garde son H⁺)', 'R–NH₃⁺', 'R–OH'], 'Chargé −, donc très hydrophile.')
    ],
    revision: [
      qcm('r1', 'Comment s\'appelle le départ d\'un CO₂ depuis une fonction –COOH ?', ['La décarboxylation', 'L\'hydrolyse', 'La phosphorylation', 'L\'hydratation'], 'Décarboxylation = départ de CO₂.')
    ]
  },
  {
    id: 'bc-chimie-14', fiche: F3, ficheTitre: F3T, titre: 'Amine, amide, thiol',
    classe: [
      E('Derniers groupements. L\'<b>amine</b>, –NH₂, fait l\'inverse de l\'acide : elle peut <b>capter</b> un H⁺. Capter un H⁺, c\'est être une <b>base</b>, on dit aussi alcaline.', [T('Les groupements fonctionnels (2/2)'), EQ('R–NH₂ + H⁺ ⇄ R–NH₃⁺')]),
      E('Dans le corps, à pH 7,4, elle a capté un H⁺ : elle est sous forme R–NH₃⁺, chargée +, donc très hydrophile. Et c\'est elle qui forme la liaison peptidique avec l\'acide d\'un autre acide aminé.', [LG('AMINE –NH₂ : base, capte un H⁺ → R–NH₃⁺ à pH 7,4 (hydrophile)', 'bleu')]),
      E('L\'<b>amide</b> : un C=O lié à un NH₂, –CONH₂. Hydrophile. Il a un rôle dans le métabolisme de l\'azote.', [LG('AMIDE –CONH₂ : C=O + NH₂ · hydrophile · métabolisme de l\'azote', 'bleu')]),
      E('Le <b>thiol</b>, –SH, surtout sur l\'acide aminé cystéine et sur le coenzyme A, CoA–SH. Deux –SH se lient en <b>pont disulfure</b>, –S–S–, qui tient la forme des protéines. Et avec un acide, un thiol forme un thioester.', [LG('THIOL –SH : cystéine, coenzyme A (CoA–SH)', 'bleu'), LG('2 –SH → pont disulfure –S–S– (forme des protéines)', 'vert', { puce: '→' })]),
      E('Attention au piège ! Le glucose porte plusieurs fonctions alcool, mais aussi une fonction aldéhyde. Ce n\'est donc pas un alcool : c\'est un <b>ose</b>, un glucide. Une molécule n\'est un « alcool » que si elle porte <b>seulement</b> des fonctions alcool.', [EFF(), POST('Glucose = plusieurs –OH + un aldéhyde → c\'est un OSE, pas un alcool', 'piege')], 'reflechit'),
      E('Bravo, tu connais tous les groupements fonctionnels de la fiche 3 ! Le résumé :', [T('L\'essentiel de la fiche 3'), POST('Formules brute / développée / semi-développée · isomères (C₆H₁₂O₆) · alcool I° → aldéhyde, II° → cétone · –COOH lâche un H⁺ · –NH₂ capte un H⁺ · –SH → ponts disulfures', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Sous quelle forme est une amine dans le corps (pH 7,4) ?', ['R–NH₃⁺ (elle a capté un H⁺)', 'R–NH₂ (inchangée)', 'R–COO⁻', 'R–SH'], 'L\'amine est une base : elle capte un H⁺.'),
      vf('a2', 'Le glucose est un alcool, puisqu\'il porte plusieurs fonctions –OH.', false, 'Faux : il porte aussi un aldéhyde. C\'est un ose (glucide).')
    ],
    revision: [
      qcm('r1', 'Que forment deux fonctions thiol (–SH) en se liant ?', ['Un pont disulfure (–S–S–)', 'Une liaison peptidique', 'Un ester', 'Une liaison hydrogène'], 'Les ponts disulfures tiennent la forme des protéines.'),
      paires('r2', 'Relie chaque groupement à sa formule.', [['Alcool', '–OH'], ['Aldéhyde', '–CHO'], ['Acide carboxylique', '–COOH'], ['Amine', '–NH₂'], ['Thiol', '–SH']], 'Les groupements fonctionnels de la fiche 3.')
    ]
  },

  /* ================= FICHE 4 : LES RÉACTIONS ================= */
  {
    id: 'bc-chimie-15', fiche: F4, ficheTitre: F4T, titre: 'Les réactions qui font intervenir l\'eau',
    classe: [
      E('Toutes les réactions de la biochimie ont deux points communs. Un : elles ont lieu <b>dans l\'eau</b>, dans le sang, le liquide interstitiel ou le cytosol. Les molécules dissoutes y bougent et se rencontrent.', [T('Les réactions en biochimie'), LG('1 · dans l\'EAU (sang, liquide interstitiel, cytosol)', 'bleu')]),
      E('C\'est d\'ailleurs pour ça que la <b>congélation</b> ralentit les réactions et conserve les aliments : les molécules sont figées.', [LG('congélation → molécules figées → réactions ralenties', 'noir', { taille: 'petit', decale: true })]),
      E('Deux : elles sont catalysées par des <b>enzymes</b>, des protéines qui accélèrent énormément les réactions. Ce sont des catalyseurs biologiques. Leur nom indique souvent le type de réaction : hydrolase, kinase, phosphatase, isomérase, déshydrogénase…', [LG('2 · catalysées par des ENZYMES (protéines, catalyseurs biologiques)', 'bleu'), LG('nom = type de réaction : hydrolase, kinase, phosphatase, isomérase, déshydrogénase…', 'noir', { taille: 'petit', decale: true })]),
      E('Voyons 4 réactions qui font intervenir l\'eau.', [EFF(), T('4 réactions avec l\'eau'), GRI(['Réaction', 'Ce qui se passe'], [['Condensation', '2 molécules se lient → nouvelle liaison + départ d\'une molécule d\'eau'], ['Hydrolyse', 'l\'eau coupe une liaison → 2 molécules (inverse de la condensation) · hydrolases (digestion)'], ['Hydratation', 'l\'eau s\'ajoute sans couper, souvent sur un C=C → alcool secondaire'], ['Déshydratation', 'inverse : un alcool II° perd une eau → double liaison C=C']]), MONTRE(1)]),
      E('La <b>condensation</b> : deux molécules se lient, et une molécule d\'eau part, un –OH d\'un côté et un H de l\'autre. L\'<b>hydrolyse</b>, c\'est l\'inverse : l\'eau coupe la molécule en deux. C\'est la digestion.', [MONTRE(2), EQ('A + B ⇄ C + H₂O')]),
      E('L\'<b>hydratation</b> : l\'eau s\'ajoute sans couper, souvent sur une double liaison C=C. Exemple : la fumarase. La <b>déshydratation</b>, c\'est l\'inverse.', [MONTRE(3), MONTRE(4), POST('Condensation : A + B → C + H₂O · Hydrolyse : l\'eau coupe (digestion) · Hydratation : ajoute l\'eau sans couper (fumarase)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quelle réaction coupe une molécule en deux grâce à l\'eau ?', ['L\'hydrolyse', 'La condensation', 'L\'hydratation', 'La phosphorylation'], 'C\'est la réaction de la digestion (hydrolases).'),
      vf('a2', 'Dans une condensation, deux molécules se lient et une molécule d\'eau est libérée.', true, 'Vrai : A + B → C + H₂O.')
    ],
    revision: [
      paires('r1', 'Relie chaque réaction à sa description.', [['Condensation', 'Lie 2 molécules, libère de l\'eau'], ['Hydrolyse', 'L\'eau coupe une liaison'], ['Hydratation', 'L\'eau s\'ajoute sans couper'], ['Déshydratation', 'Un alcool perd une eau → C=C']], 'Condensation ⇄ hydrolyse ; hydratation ⇄ déshydratation.'),
      qcm('r2', 'Pourquoi la congélation conserve-t-elle les aliments ?', ['Les molécules sont figées, les réactions ralentissent', 'Elle détruit toutes les enzymes', 'Elle ajoute de l\'eau aux aliments', 'Elle oxyde les microbes'], 'Les réactions ont lieu dans l\'eau liquide, où les molécules bougent.')
    ]
  },
  {
    id: 'bc-chimie-16', fiche: F4, ficheTitre: F4T, titre: 'L\'oxydoréduction',
    classe: [
      E('Réaction très importante du métabolisme : l\'<b>oxydoréduction</b>.', [T('L\'oxydoréduction')]),
      E('<b>Oxydation</b> = perte d\'électrons. En biochimie, la molécule perd <b>2 e⁻ et 2 H⁺</b> : on dit aussi <b>déshydrogénation</b>, et les enzymes sont des déshydrogénases. <b>Réduction</b> = gain d\'électrons.', [LG('OXYDATION = perte d\'e⁻ (en biochimie : 2 e⁻ + 2 H⁺) = déshydrogénation', 'rouge'), LG('RÉDUCTION = gain d\'e⁻', 'vert')]),
      E('Les deux vont toujours ensemble : si l\'un perd, l\'autre gagne. Exemple avec la lactate déshydrogénase : le lactate est oxydé en pyruvate, et le NAD⁺ récupère les 2 e⁻ et 2 H⁺, il est réduit en NADH,H⁺. Dans l\'autre sens, c\'est l\'inverse.', [EQ('Lactate + NAD⁺ ⇄ Pyruvate + NADH,H⁺'), LG('lactate (alcool II°) oxydé → pyruvate (cétone) · NAD⁺ réduit', 'bleu', { taille: 'petit' })]),
      E('Pourquoi 2 e⁻ et 2 H⁺, et pas 1 ? Parce qu\'en biochimie, la molécule perd en fait 2 atomes d\'hydrogène, et un H, c\'est 1 e⁻ + 1 H⁺. Et le NAD⁺ et le FAD prennent toujours les électrons <b>par paire</b>. En chimie générale, une oxydation peut ne retirer qu\'un électron, comme Fe²⁺ en Fe³⁺ : c\'est le même concept.', [EFF(), T('Pourquoi 2 e⁻ + 2 H⁺ ?'), LG('1 H = 1 e⁻ + 1 H⁺ · on retire 2 H', 'bleu', { puce: '•' }), LG('NAD⁺ et FAD prennent les e⁻ par paire → NADH,H⁺ ou FADH₂', 'bleu', { puce: '•' })]),
      E('Le rôle des coenzymes NAD⁺ et FAD : un, capter les électrons et les H⁺, qui libres seraient toxiques, radicaux libres et acidification. Deux, être <b>régénérés</b> : sans NAD⁺ libre, la réaction s\'arrête. Le NADH,H⁺ est réoxydé par la chaîne respiratoire, avec l\'O₂ comme accepteur final : c\'est la phosphorylation oxydative.', [LG('1 · capter 2 e⁻ + 2 H⁺ (libres : radicaux libres, acidification)', 'vert', { puce: '✓' }), LG('2 · être régénérés : NADH,H⁺ réoxydé par la chaîne respiratoire (O₂)', 'vert', { puce: '✓' })]),
      E('Et en diététique : les <b>radicaux libres</b> abîment les cellules. Les <b>antioxydants</b>, vitamines C et E, les neutralisent par des réactions d\'oxydoréduction.', [POST('Oxydation = perte de 2 e⁻ + 2 H⁺, captés par NAD⁺ ou FAD (réduits) · NAD⁺ régénéré par la chaîne respiratoire', 'cle'), POST('Antioxydants (vit. C, E) : neutralisent les radicaux libres', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'En biochimie, une oxydation, c\'est…', ['la perte de 2 e⁻ et 2 H⁺', 'le gain de 2 e⁻ et 2 H⁺', 'l\'ajout d\'un phosphate', 'le départ d\'un CO₂'], 'On l\'appelle aussi déshydrogénation.'),
      vf('a2', 'Quand le lactate est oxydé en pyruvate, le NAD⁺ est réduit en NADH,H⁺.', true, 'Vrai : oxydation et réduction vont toujours ensemble.')
    ],
    revision: [
      qcm('r1', 'Comment le NADH,H⁺ est-il régénéré en NAD⁺ ?', ['Par la chaîne respiratoire, avec l\'O₂ comme accepteur final', 'Par la digestion', 'Par une kinase', 'Il n\'est jamais régénéré'], 'C\'est la phosphorylation oxydative.'),
      qcm('r2', 'Quelles vitamines antioxydantes neutralisent les radicaux libres ?', ['Les vitamines C et E', 'Les vitamines B1 et B12', 'La vitamine D', 'La vitamine K'], 'Par des réactions d\'oxydoréduction.')
    ]
  },
  {
    id: 'bc-chimie-17', fiche: F4, ficheTitre: F4T, titre: 'Phosphorylation, isomérisation, décarboxylation',
    classe: [
      E('D\'autres réactions que tu retrouveras partout dans le métabolisme. Leur enzyme porte souvent leur nom.', [T('D\'autres réactions clés'), GRI(['Réaction', 'Ce qui se passe', 'Enzyme'], [['Phosphorylation', 'ajout d\'un phosphate (souvent sur un –OH), venant d\'un ATP qui apporte aussi l\'énergie', 'kinase'], ['Déphosphorylation', 'retrait du phosphate par hydrolyse → libère un Pi', 'phosphatase'], ['Isomérisation', 'changement de forme, même formule brute · réversible', 'isomérase'], ['Décarboxylation', 'départ d\'un CO₂ (d\'un –COOH), souvent avec une oxydation', 'décarboxylase (ou déshydrogénase si oxydative)'], ['Carboxylation', 'fixation d\'un CO₂ → nouvelle fonction –COOH', 'carboxylase']])]),
      E('La <b>phosphorylation</b> : on ajoute un phosphate sur la molécule, souvent sur un –OH. Le phosphate vient d\'un <b>ATP</b>, qui apporte aussi l\'énergie. C\'est un transfert de phosphate. L\'enzyme : une <b>kinase</b>.', [MONTRE(1)]),
      E('La <b>déphosphorylation</b> : on retire le phosphate par hydrolyse, ce qui libère un Pi. L\'enzyme : une <b>phosphatase</b>. Sur une enzyme, ajouter ou retirer un phosphate l\'allume ou l\'éteint : c\'est un moyen de réguler une voie.', [MONTRE(2)]),
      E('L\'<b>isomérisation</b> : la molécule change de forme, avec la même formule brute. Réversible. Enzyme : une <b>isomérase</b>.', [MONTRE(3)]),
      E('La <b>décarboxylation</b> : départ d\'un CO₂, souvent avec une oxydation, on parle alors de décarboxylation oxydative. Et la <b>carboxylation</b> fait l\'inverse : elle fixe un CO₂.', [MONTRE(4), MONTRE(5)]),
      E('À retenir : la kinase ajoute un phosphate, avec un ATP ; la phosphatase le retire ; l\'isomérase change la forme.', [POST('Kinase : ajoute un phosphate (ATP) · phosphatase : le retire · isomérase : change la forme · décarboxylation : départ de CO₂', 'cle')], 'content')
    ],
    questions: [
      paires('a1', 'Relie chaque enzyme à ce qu\'elle fait.', [['Kinase', 'Ajoute un phosphate (ATP)'], ['Phosphatase', 'Retire un phosphate'], ['Isomérase', 'Change la forme'], ['Décarboxylase', 'Retire un CO₂']], 'Le nom de l\'enzyme indique la réaction.'),
      qcm('a2', 'D\'où vient le phosphate ajouté lors d\'une phosphorylation ?', ['D\'un ATP', 'De l\'eau', 'Du CO₂', 'Du NAD⁺'], 'L\'ATP apporte le phosphate et l\'énergie.')
    ],
    revision: [
      vf('r1', 'Ajouter ou retirer un phosphate sur une enzyme peut l\'allumer ou l\'éteindre.', true, 'Vrai : c\'est un moyen de réguler une voie métabolique.'),
      qcm('r2', 'Une isomérisation…', ['change la forme sans changer la formule brute', 'ajoute de l\'eau', 'retire un CO₂', 'ajoute un phosphate'], 'Même formule brute, forme différente. Réversible.')
    ]
  },
  {
    id: 'bc-chimie-18', fiche: F4, ficheTitre: F4T, titre: 'Réversibilité et loi d\'action de masse',
    classe: [
      E('Certaines réactions ne marchent que dans un sens : elles sont <b>irréversibles</b>. D\'autres peuvent aller dans les deux sens : elles sont <b>réversibles</b>. Un équilibre s\'installe, comme les deux plateaux d\'une balance.', [T('Réversible ou irréversible ?'), LG('irréversible : un seul sens', 'rouge', { puce: '→' }), LG('réversible : deux sens, équilibre (comme une balance)', 'bleu', { puce: '⇄' })]),
      E('Pour une réaction réversible, qui décide du sens ? La <b>loi d\'action de masse</b> : si on modifie la concentration d\'un composant, la réaction part dans le sens qui s\'oppose à ce changement.', [EQ('A + B ⇄ C + D')]),
      E('Si A ou B augmente, ou si C ou D diminue : on va dans le sens 1. Si C ou D augmente, ou si A ou B diminue : on va dans le sens 2.', [RANG([
        { titre: 'Sens 1 (A + B → C + D)', x: '↑ A ou ↑ B, ou ↓ C ou ↓ D', c: 'vert' },
        { titre: 'Sens 2 (C + D → A + B)', x: '↑ C ou ↑ D, ou ↓ A ou ↓ B', c: 'bleu' }
      ]), MONTRE(1), MONTRE(2), POST('La réaction part toujours « du côté trop rempli » vers « le côté qui se vide »', 'astuce')]),
      E('L\'exemple de ton livre : glucose-6-P ⇄ fructose-6-P. Pendant la glycolyse, le glucose-6-P augmente, car le glucose entre, et le fructose-6-P diminue, consommé par l\'étape suivante : sens 1. Pendant la néoglucogenèse ou la glycogénolyse, c\'est l\'inverse : sens 2.', [EFF(), T('Exemple'), EQ('Glucose-6-P ⇄ Fructose-6-P'), LG('glycolyse : ↑ glucose-6-P, ↓ fructose-6-P → sens 1', 'vert', { puce: '→' }), LG('néoglucogenèse, glycogénolyse → sens 2', 'bleu', { puce: '←' })]),
      E('Piège : la glucose-6-phosphatase refait du glucose à partir du glucose-6-P, mais ce n\'est <b>pas</b> la même réaction à l\'envers. L\'enzyme est différente, et les réactifs aussi : ATP et ADP d\'un côté, eau et Pi de l\'autre.', [POST('Glucose-6-phosphatase ≠ hexokinase à l\'envers : enzyme et réactifs différents (H₂O/Pi vs ATP/ADP)', 'piege')], 'reflechit'),
      E('Le résumé de la fiche 4 :', [POST('Réactions dans l\'eau, catalysées par des enzymes · condensation / hydrolyse · hydratation / déshydratation · oxydation = −2 e⁻ −2 H⁺ · kinase / phosphatase / isomérase · loi d\'action de masse : ↑ A/B ou ↓ C/D → sens 1', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Pour A + B ⇄ C + D, que se passe-t-il si D diminue ?', ['La réaction part dans le sens 1 (vers C + D)', 'La réaction part dans le sens 2 (vers A + B)', 'La réaction s\'arrête', 'Rien ne change'], 'Le côté qui se vide se remplit : sens 1.'),
      vf('a2', 'La glucose-6-phosphatase est simplement l\'hexokinase qui fonctionne à l\'envers.', false, 'Faux : enzyme différente, réactifs et produits différents.')
    ],
    revision: [
      qcm('r1', 'Pendant la glycolyse, dans quel sens va la réaction glucose-6-P ⇄ fructose-6-P ?', ['Vers le fructose-6-P (sens 1)', 'Vers le glucose-6-P (sens 2)', 'Elle est bloquée', 'Elle est irréversible'], 'Le glucose-6-P augmente, le fructose-6-P est consommé.')
    ]
  },

  /* ================= FICHE 5 : LE pH ================= */
  {
    id: 'bc-chimie-19', fiche: F5, ficheTitre: F5T, titre: 'Acide, pH et échelle',
    classe: [
      E('Un <b>acide</b>, c\'est une molécule capable de céder un ion H⁺, un proton. Plus il y a de H⁺ dans un milieu, plus il est acide. Le <b>pH</b>, potentiel hydrogène, sans unité, mesure ce niveau d\'acidité.', [T('Le pH'), EQ('pH = − log [H⁺]')]),
      E('Attention au sens : à cause du « moins log », plus il y a de H⁺, plus le pH est <b>bas</b>. Et 1 unité de pH en moins, c\'est 10 fois plus de H⁺. Dans l\'eau, H⁺ se lie à l\'eau et forme H₃O⁺ : on écrit aussi pH = − log [H₃O⁺].', [LG('plus de H⁺ → pH plus BAS', 'rouge', { taille: 'grand' }), SOUL(), LG('1 unité de pH en moins = 10 fois plus de H⁺', 'bleu', { puce: '+' })]),
      E('L\'échelle va de 0 à 14 ; 7, c\'est neutre, dans l\'eau pure à 25 °C. En dessous, acide ; au-dessus, basique, on dit aussi alcalin. Quelques valeurs de ton livre.', [EFF(), T('L\'échelle de pH'), GRI(['Liquide / aliment', 'pH'], [['Suc gastrique', '2'], ['Citron', '2,5'], ['Vinaigre', '3'], ['Tomate', '4'], ['Carotte', '6'], ['Salive', '6,5 à 7'], ['Sang', '7,35 à 7,45'], ['Bile', '7,5 à 8'], ['Blanc d\'œuf', '8'], ['Urine', '4,5 à 7,8']], true)]),
      E('Le pH du <b>sang</b> doit rester entre <b>7,35 et 7,45</b>. En dessous de 7,35 : <b>acidose</b>. Au-dessus de 7,45 : <b>alcalose</b>. Attention : un sang à pH 7, pourtant « neutre » en chimie, serait en acidose grave !', [POST('Sang 7,35 à 7,45 · < 7,35 acidose · > 7,45 alcalose · pH 7 = acidose !', 'piege')], 'reflechit'),
      E('Et côté alimentation : l\'estomac très acide est indispensable à la digestion des protéines ; l\'intestin grêle, légèrement alcalin, favorise l\'absorption. Les agrumes sont acides au goût, mais laissent des résidus alcalins une fois métabolisés. Et l\'alimentation modifie peu le pH du sang : l\'organisme le régule étroitement.', [LG('estomac très acide → digestion des protéines', 'bleu', { puce: '•' }), LG('intestin grêle légèrement alcalin → absorption', 'bleu', { puce: '•' }), LG('agrumes : acides au goût, résidus alcalins', 'bleu', { puce: '•' }), LG('l\'alimentation modifie peu le pH du sang', 'vert', { puce: '•' })], 'content')
    ],
    questions: [
      vf('a1', 'Plus il y a de H⁺ dans un milieu, plus son pH est élevé.', false, 'Faux : à cause du « − log », plus de H⁺ → pH plus BAS.'),
      qcm('a2', 'Entre quelles valeurs le pH du sang doit-il rester ?', ['7,35 et 7,45', '6,5 et 7', '7 et 8', '4,5 et 7,8'], 'En dessous : acidose ; au-dessus : alcalose.')
    ],
    revision: [
      qcm('r1', 'Un sang à pH 7, c\'est…', ['une acidose', 'un pH normal (neutre)', 'une alcalose', 'impossible à mesurer'], '« Neutre » est relatif : sous 7,35, le sang est en acidose.'),
      qcm('r2', 'Si le pH baisse d\'une unité, la quantité de H⁺…', ['est multipliée par 10', 'est divisée par 10', 'double', 'ne change pas'], 'Échelle logarithmique.'),
      vf('r3', 'Un acide est une molécule capable de céder un ion H⁺ (un proton).', true, 'Vrai. Une base, elle, fixe un H⁺.')
    ]
  },
  {
    id: 'bc-chimie-20', fiche: F5, ficheTitre: F5T, titre: 'Acides forts, acides faibles et pKa',
    classe: [
      E('Il y a deux sortes d\'acides. L\'<b>acide fort</b> se dissocie <b>complètement</b> dans l\'eau : tous ses H⁺ sont libérés, la réaction est irréversible. Exemple : l\'acide chlorhydrique, HCl, du suc gastrique.', [T('Acide fort ou faible ?'), EQ('HCl → H⁺ + Cl⁻ (fort : total, irréversible)')]),
      E('L\'<b>acide faible</b> : la réaction est <b>réversible</b>. Elle suit la loi d\'action de masse, et son sens dépend du pH du milieu. Exemple : les acides carboxyliques. R–COO⁻ s\'appelle la base conjuguée.', [EQ('R–COOH ⇄ R–COO⁻ + H⁺ (faible : réversible)')]),
      E('Chaque acide faible a un <b>pKa</b>. Le pKa, c\'est le pH auquel la molécule est à moitié dissociée : 50 % de R–COOH et 50 % de R–COO⁻. C\'est le pH de demi-dissociation.', [EFF(), T('Le pKa'), LG('pKa = pH de DEMI-dissociation (50 % / 50 %)', 'rouge', { taille: 'grand' }), SOUL()]),
      E('La règle : si le pH est plus bas que le pKa, c\'est la forme <b>acide</b> qui domine, R–COOH, qui garde son H⁺. Si le pH est plus haut que le pKa, c\'est la forme <b>basique</b>, R–COO⁻.', [RANG([{ titre: 'pH < pKa', x: 'forme ACIDE domine : R–COOH (garde son H⁺)', c: 'rouge' }, { titre: 'pH > pKa', x: 'forme BASIQUE domine : R–COO⁻ (a perdu son H⁺)', c: 'bleu' }]), MONTRE(1), MONTRE(2)]),
      E('Exemple : un acide carboxylique a un pKa d\'environ 4 à 5. Dans le sang, à pH 7,4, le pH est plus haut que le pKa : il est sous forme R–COO⁻. À retenir : l\'état chargé d\'une molécule dépend du pH du milieu. C\'est très important pour les acides aminés.', [POST('Acide carboxylique (pKa ≈ 4-5) à pH 7,4 → pH > pKa → R–COO⁻ · l\'état chargé dépend du pH (acides aminés !)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Qu\'est-ce que le pKa ?', ['Le pH auquel la molécule est à moitié dissociée', 'Le pH du sang', 'La quantité de H⁺ dans un acide fort', 'Le pH neutre (7)'], 'pKa = pH de demi-dissociation : 50 % / 50 %.'),
      qcm('a2', 'Si pH > pKa, quelle forme domine ?', ['La forme basique (R–COO⁻)', 'La forme acide (R–COOH)', 'Les deux à 50 %', 'Aucune'], 'Le milieu manque de H⁺ : l\'acide les lâche.')
    ],
    revision: [
      paires('r1', 'Acide fort ou acide faible ?', [['HCl (suc gastrique)', 'Acide fort : dissociation totale'], ['R–COOH', 'Acide faible : réversible']], 'Fort = irréversible ; faible = réversible, dépend du pH.')
    ]
  },
  {
    id: 'bc-chimie-21', fiche: F5, ficheTitre: F5T, titre: 'Les bases et l\'ammoniac dans l\'urine',
    classe: [
      E('Une <b>base</b>, c\'est une molécule capable de <b>fixer</b> un H⁺. En diminuant la quantité de H⁺, elle a un effet <b>alcalinisant</b> : elle fait monter le pH.', [T('Les bases'), LG('Base = fixe un H⁺ → fait monter le pH (alcalinisant)', 'bleu', { taille: 'grand' }), SOUL()]),
      E('Dans l\'organisme, on rencontre surtout des <b>bases faibles</b>, comme la fonction amine qu\'on a vue.', [LG('surtout des bases FAIBLES (ex. fonction amine)', 'noir', { puce: '•' })]),
      E('L\'exemple de ton cours : l\'ammoniac dans l\'urine. L\'ammoniac, NH₃, est une base faible ; en fixant un H⁺, il devient l\'ion ammonium, NH₄⁺, son acide conjugué.', [EFF(), T('L\'ammoniac dans l\'urine'), EQ('NH₃ + H⁺ ⇄ NH₄⁺')]),
      E('Le pKa est de 9, et l\'urine a un pH de 4,5 à 7,8. Le pH est plus bas que le pKa : il y a beaucoup de H⁺, la réaction part dans le sens de la fixation du H⁺. C\'est donc l\'ion <b>ammonium NH₄⁺</b> qui est éliminé dans l\'urine.', [LG('pKa = 9 · urine pH 4,5 à 7,8 → pH < pKa', 'bleu'), LG('→ forme acide NH₄⁺ éliminée dans l\'urine', 'rouge'), SOUL()]),
      E('Et voilà le résumé de la fiche pH.', [POST('Acide = cède un H⁺ · base = fixe un H⁺ · pH = −log[H⁺] · sang 7,35-7,45 · pKa = demi-dissociation · à pH 7,4 : R–COO⁻ et R–NH₃⁺ · urine : NH₄⁺', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Une base…', ['fixe un H⁺ et fait monter le pH', 'cède un H⁺ et fait baisser le pH', 'n\'a aucun effet sur le pH', 'est toujours un acide fort'], 'Effet alcalinisant.'),
      qcm('a2', 'Sous quelle forme l\'azote de l\'ammoniac est-il éliminé dans l\'urine ?', ['Ion ammonium NH₄⁺', 'Ammoniac NH₃', 'Urée uniquement', 'Nitrate'], 'pH de l\'urine < pKa (9) → la forme acide NH₄⁺ domine.')
    ],
    revision: [
      vf('r1', 'Dans l\'organisme, on rencontre surtout des bases fortes.', false, 'Faux : surtout des bases faibles, comme la fonction amine.')
    ]
  },

  /* ================= FICHE 6 : EAU ET MINÉRAUX ================= */
  {
    id: 'bc-chimie-22', fiche: F6, ficheTitre: F6T, titre: 'L\'eau dans l\'organisme',
    classe: [
      E('On passe à la composition de la matière vivante. Deux grandes catégories : les substances <b>inorganiques</b>, sans carbone : l\'eau et les sels minéraux. Et les <b>organiques</b>, avec du carbone : glucides, lipides, protides, composés nucléotidiques, vitamines.', [T('L\'eau et les minéraux'), LG('INORGANIQUES (sans C) : eau, sels minéraux', 'bleu', { puce: '•' }), LG('ORGANIQUES (avec C) : glucides, lipides, protides, nucléotides, vitamines', 'vert', { puce: '•' })]),
      E('Rappel de la fiche 2 : l\'eau est polaire, O δ⁻ et H δ⁺, et ses molécules sont reliées par des liaisons hydrogène. C\'est ce qui explique toutes ses propriétés. À 0 °C, les liaisons H figent les molécules : c\'est la glace. À 100 °C, elles sont rompues : c\'est la vapeur.', [LG('eau polaire + liaisons H → toutes ses propriétés (glace 0 °C, vapeur 100 °C)', 'noir', { taille: 'petit' })]),
      E('L\'eau représente environ <b>65 %</b> du poids d\'un adulte. Elle est répartie en deux grands compartiments.', [EFF(), T('Où est l\'eau ?'), RANG([
        { titre: 'Liquide INTRAcellulaire (LIC)', x: '≈ 2/3 de l\'eau, dans les cellules', c: 'bleu' },
        { titre: 'Liquide EXTRAcellulaire (LEC)', x: '≈ 1/3 de l\'eau, hors des cellules : plasma (≈ 1/4 du LEC) + liquide interstitiel (≈ 3/4 du LEC, entre les cellules)', c: 'vert' }
      ]), MONTRE(1)]),
      E('Deux tiers dans les cellules, c\'est le liquide <b>intracellulaire</b>. Un tiers dehors, le liquide <b>extracellulaire</b> : un quart dans le plasma, trois quarts dans le liquide interstitiel, entre les cellules.', [MONTRE(2), EQ('Adulte 70 kg : ≈ 46 L d\'eau → ≈ 31 L dans les cellules · ≈ 15 L dehors (≈ 4 L plasma + ≈ 11 L interstitiel)')]),
      E('La part d\'eau change avec l\'âge : 70 % chez l\'enfant, 65 % chez l\'adulte, 60 % chez la personne âgée. Et selon le tissu : 80 % dans le plasma, 75 % dans le cerveau, 70 % dans la peau, mais 23 % dans l\'os et 20 % dans le tissu adipeux.', [EFF(), T('La part d\'eau'), GRI(['Selon…', 'Part d\'eau'], [['Enfant', '70 %'], ['Adulte', '65 %'], ['Personne âgée', '60 %'], ['Plasma · cerveau · peau', '80 % · 75 % · 70 %'], ['Os · tissu adipeux', '23 % · 20 %']], true)]),
      E('À retenir : 65 % chez l\'adulte, deux tiers intracellulaire, un tiers extracellulaire.', [POST('Eau ≈ 65 % (adulte) · 70 % enfant · 60 % âgé · 2/3 intracellulaire, 1/3 extracellulaire (1/4 plasma, 3/4 interstitiel)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quelle part du poids d\'un adulte représente l\'eau ?', ['Environ 65 %', 'Environ 20 %', 'Environ 90 %', 'Environ 40 %'], '70 % chez l\'enfant, 60 % chez la personne âgée.'),
      qcm('a2', 'Où se trouvent les 2/3 de l\'eau du corps ?', ['Dans les cellules (liquide intracellulaire)', 'Dans le plasma', 'Dans le liquide interstitiel', 'Dans les os'], 'LIC 2/3 ; LEC 1/3 (1/4 plasma, 3/4 interstitiel).')
    ],
    revision: [
      paires('r1', 'Relie chaque tissu à sa part d\'eau.', [['Plasma', '80 %'], ['Cerveau', '75 %'], ['Os', '23 %'], ['Tissu adipeux', '20 %']], 'Le tissu adipeux est le plus pauvre en eau.'),
      vf('r2', 'L\'eau et les sels minéraux sont des substances organiques.', false, 'Faux : ils sont inorganiques (sans carbone).')
    ]
  },
  {
    id: 'bc-chimie-23', fiche: F6, ficheTitre: F6T, titre: 'Les rôles de l\'eau',
    classe: [
      E('L\'eau a quatre grands rôles dans l\'organisme. Je te les présente un par un.', [T('Les 4 rôles de l\'eau'), RANG([
        { titre: '1 · Solvant et transport', x: 'dissout les ions (Na⁺, Cl⁻) et les molécules polaires (glucose, acides aminés, lactate) · le plasma transporte nutriments et déchets (urée, CO₂)', c: 'bleu' },
        { titre: '2 · Réactif', x: 'participe aux réactions, notamment l\'hydrolyse (digestion)', c: 'vert' },
        { titre: '3 · Volant thermique', x: 'absorbe et libère la chaleur : thermorégulation (transpiration à l\'effort)', c: 'rouge' },
        { titre: '4 · Protection mécanique', x: 'lubrifiant (mucus, déglutition) · amortisseur (liquide céphalorachidien, liquide amniotique)', c: 'noir' }
      ])]),
      E('Un : <b>solvant et transport</b>. Les réactions ont lieu en solution. L\'eau dissout les ions, elle entoure Na⁺ et Cl⁻ et les disperse, et les molécules polaires comme le glucose, les acides aminés, le lactate. Le plasma transporte ainsi nutriments et déchets, urée et CO₂. Les molécules apolaires, elles, restent insolubles.', [MONTRE(1)]),
      E('Deux : <b>réactif</b>. L\'eau participe aux réactions, notamment l\'<b>hydrolyse</b> : elle coupe une liaison covalente en deux, c\'est la digestion.', [MONTRE(2)]),
      E('Trois : <b>volant thermique</b>. Elle absorbe et libère la chaleur, elle amortit les variations de température : c\'est la thermorégulation. Pendant un effort, le sang emmène la chaleur des muscles vers la peau, où l\'eau s\'évapore, c\'est la transpiration.', [MONTRE(3)]),
      E('Quatre : <b>protection mécanique</b>. Comme lubrifiant : le mucus protège les muqueuses et facilite la déglutition. Comme amortisseur : le liquide céphalorachidien protège le cerveau et la moelle épinière, le liquide amniotique entoure le fœtus.', [MONTRE(4), POST('Rôles de l\'eau : solvant/transport · réactif (hydrolyse) · volant thermique · protection', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Lequel n\'est PAS un rôle de l\'eau cité dans le cours ?', ['Source d\'énergie', 'Solvant et transport', 'Volant thermique', 'Protection mécanique'], 'Les 4 rôles : solvant/transport, réactif, volant thermique, protection.'),
      vf('a2', 'L\'eau participe à l\'hydrolyse, la réaction de la digestion.', true, 'Vrai : c\'est son rôle de réactif.')
    ],
    revision: [
      paires('r1', 'Relie chaque exemple au rôle de l\'eau.', [['Transpiration à l\'effort', 'Volant thermique'], ['Liquide amniotique', 'Protection mécanique'], ['Digestion', 'Réactif (hydrolyse)'], ['Plasma qui transporte l\'urée', 'Solvant et transport']], 'Les 4 rôles de l\'eau.')
    ]
  },
  {
    id: 'bc-chimie-24', fiche: F6, ficheTitre: F6T, titre: 'Les minéraux',
    classe: [
      E('Dans les liquides du corps, les minéraux se dissolvent sous forme d\'ions, cations + ou anions − : on les appelle des <b>électrolytes</b>. Certains sont aussi stockés en cristaux : le phosphate de calcium rend les os rigides.', [T('Les minéraux'), LG('minéraux dissous = ions = ÉLECTROLYTES', 'bleu', { taille: 'grand' }), LG('stockés en cristaux : phosphate de calcium → os rigides', 'noir', { taille: 'petit' })]),
      E('On les classe selon leur quantité dans le corps, pour 70 kg.', [EFF(), T('Les classer'), GRI(['Catégorie', 'Quantité', 'Lesquels'], [['Macroéléments', 'grandes quantités', 'Ca ≈ 1 000 g · P 700 g · K 250 g · S 200 g · Na 100 g · Cl 100 g · Mg 40 g'], ['Microéléments', '< 10 g', 'iode, fluor, fer, zinc, brome'], ['Oligoéléments', '< 0,1 g (traces)', 'cuivre, manganèse, cobalt, silicium, chrome, étain, molybdène…']]), MONTRE(1)]),
      E('Les <b>macroéléments</b>, en grandes quantités : calcium, phosphore, potassium, soufre, sodium, chlore, magnésium. Le calcium est le plus abondant, environ 1 000 g, grâce aux os, suivi du phosphore, dans les os aussi et dans l\'ATP.', [MONTRE(1), POST('Calcium = minéral le plus abondant (os), puis phosphore (os, ATP)', 'astuce')]),
      E('Les <b>microéléments</b>, moins de 10 g : iode, fluor, fer, zinc, brome. Et les <b>oligoéléments</b>, à l\'état de traces, moins de 0,1 g : cuivre, manganèse, cobalt…', [MONTRE(2), MONTRE(3)]),
      E('Attention : beaucoup de cours, et souvent la nutrition, n\'utilisent que <b>deux</b> catégories, macroéléments et oligoéléments. Le fer, le zinc, l\'iode et le fluor sont alors rangés dans les oligoéléments. Ce n\'est pas une contradiction, juste un autre découpage.', [POST('Souvent 2 catégories seulement (macro / oligo) : fer, zinc, iode, fluor passent alors en oligoéléments', 'piege')], 'reflechit'),
      E('Leurs rôles : l\'influx nerveux avec K⁺, Na⁺, Ca²⁺ ; la contraction musculaire et le mouvement cellulaire avec Ca²⁺ ; le transport de l\'O₂ avec Fe²⁺ ; et des cofacteurs d\'enzymes, Fe²⁺, Mg²⁺, Cu²⁺, Zn²⁺.', [EFF(), T('Leurs rôles'), GRI(['Rôle', 'Ions'], [['Influx nerveux', 'K⁺, Na⁺, Ca²⁺'], ['Contraction musculaire, mouvement cellulaire', 'Ca²⁺'], ['Transport de l\'O₂', 'Fe²⁺'], ['Cofacteurs d\'enzymes', 'Fe²⁺, Mg²⁺, Cu²⁺, Zn²⁺']], true), POST('Électrolytes : influx nerveux, contraction (Ca²⁺), O₂ (Fe²⁺), cofacteurs · macroéléments (Ca, P, K, S, Na, Cl, Mg) · microéléments (< 10 g) · oligoéléments (traces)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel est le minéral le plus abondant dans le corps ?', ['Le calcium', 'Le sodium', 'Le fer', 'Le magnésium'], 'Environ 1 000 g, surtout dans les os.'),
      qcm('a2', 'Quel ion transporte l\'O₂ ?', ['Fe²⁺', 'Ca²⁺', 'Na⁺', 'K⁺'], 'Le fer de l\'hémoglobine.')
    ],
    revision: [
      paires('r1', 'Relie chaque catégorie à sa quantité dans le corps.', [['Macroéléments', 'Grandes quantités'], ['Microéléments', 'Moins de 10 g'], ['Oligoéléments', 'Traces (< 0,1 g)']], 'Selon ton cours ; beaucoup n\'utilisent que macro / oligo.'),
      qcm('r2', 'Comment appelle-t-on les minéraux dissous sous forme d\'ions ?', ['Des électrolytes', 'Des enzymes', 'Des coenzymes', 'Des isomères'], 'Cations + et anions − dissous dans les liquides du corps.'),
      qcm('r3', 'À quoi servent notamment Fe²⁺, Mg²⁺, Cu²⁺ et Zn²⁺ ?', ['De cofacteurs d\'enzymes', 'De sources d\'énergie', 'De vitamines', 'De transporteurs du glucose'], 'Ce sont des cofacteurs d\'enzymes.')
    ]
  }

  ]
};
