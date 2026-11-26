// Cours : Métabolisme des glucides (1) : digestion et glycolyse (Sciences › Biochimie › Métabolisme)
// Source : fiches « Digestion, absorption et distribution des glucides » et « La glycolyse ».
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F1 = 'Digestion', F1T = 'Digestion, absorption et distribution des glucides';
const F2 = 'Glycolyse', F2T = 'La glycolyse';

export default {
  id: 'bc-meta-glucides-1',
  titre: 'Métabolisme des glucides (1) : digestion et glycolyse',
  persos: {},
  carte: {
    depart: 'Du glucide dans l\'assiette jusqu\'à l\'énergie de la cellule : quel chemin parcourt le glucose ?',
    etapes: [
      { titre: 'Digestion', verbe: 'Je découpe', question: 'Comment les glucides deviennent-ils des oses ?', mots: 'amylases · bordure en brosse · lactase' },
      { titre: 'Absorption', verbe: 'Je fais entrer', question: 'Comment le glucose passe-t-il dans le sang ?', mots: 'SGLT1 · GLUT2 · pompe Na⁺/K⁺ · actif secondaire' },
      { titre: 'Distribution', verbe: 'Je distribue', question: 'Comment arrive-t-il aux cellules ?', mots: 'veine porte · foie 30-40 % · GLUT1/3, 2, 4' },
      { titre: 'Glycolyse', verbe: 'Je dégrade', question: 'Comment le glucose devient-il pyruvate ?', mots: '10 réactions · 2 ATP net · 3 irréversibles · PFK-1' },
      { titre: 'NADH et régulation', verbe: 'J\'adapte', question: 'Avec ou sans O₂ ? Repas ou jeûne ?', mots: 'aérobie 8 ATP · anaérobie lactate · hématies · insuline, ATP, glucagon' }
    ],
    arrivee: 'Tu sais suivre le glucose de l\'assiette à la cellule, et expliquer comment la glycolyse produit de l\'énergie selon le contexte.'
  },
  lecons: [

  /* ================= DIGESTION ================= */
  {
    id: 'bc-meta-glucides-1-01', fiche: F1, ficheTitre: F1T, titre: 'La digestion des glucides',
    classe: [
      E('Pourquoi le glucose est-il au centre ? C\'est le principal ose assimilé dans l\'intestin. Il fournit une grande partie de l\'énergie de la cellule, peut être stocké en glycogène, et ses carbones servent à fabriquer d\'autres molécules : acides gras, glycérol, cholestérol, acides aminés.', [T('Le glucose au centre')]),
      E('Pour être absorbés, les glucides doivent être découpés étape par étape jusqu\'aux <b>oses</b> : c\'est la seule forme absorbable. Suivons l\'amidon.', [EFF(), T('La digestion étape par étape'), RANG([
        { titre: 'Bouche · salive pH 7', x: 'α-amylase salivaire : amidon → dextrines + maltose (hydrolyse partielle)', c: 'bleu' },
        { titre: 'Estomac · pH 3', x: 'l\'amylase salivaire est dénaturée : rien ne se passe pour les glucides', c: 'noir' },
        { titre: 'Duodénum · pH 6-7', x: 'α-amylase pancréatique (canal de Wirsung) : dextrines + maltose → maltose + isomaltose', c: 'vert' },
        { titre: 'Bordure en brosse (jéjunum)', x: 'maltase, isomaltase, saccharase, lactase → oses, seuls absorbés', c: 'rouge' }
      ])]),
      E('Dans la <b>bouche</b>, la salive, à pH 7, apporte l\'α-amylase salivaire. Elle découpe l\'amidon en dextrines et maltose.', [MONTRE(1)]),
      E('Dans l\'<b>estomac</b>, à pH 3, l\'amylase salivaire est dénaturée. Rien ne se passe pour les glucides.', [MONTRE(2)]),
      E('Dans le <b>duodénum</b>, à pH 6-7, l\'α-amylase pancréatique, déversée par le canal de Wirsung, continue : on obtient du maltose et de l\'isomaltose. Toujours pas absorbable !', [MONTRE(3)]),
      E('Enfin, à la <b>bordure en brosse</b> du jéjunum, les glucidases finissent le travail et libèrent les oses. Pourquoi parle-t-on d\'hydrolyse « partielle » pour les amylases ? Parce qu\'elles ne coupent que certaines liaisons, les α1→4 : leurs produits sont encore trop gros pour être absorbés.', [MONTRE(4), POST('Bouche : amylase salivaire (pH 7) · estomac (pH 3) : rien · duodénum : amylase pancréatique → maltose + isomaltose · bordure en brosse → oses', 'cle')], 'content')
    ],
    questions: [
      ordre('a1', 'Remets les étapes de la digestion de l\'amidon dans l\'ordre.', ['Bouche : amylase salivaire', 'Estomac : rien pour les glucides', 'Duodénum : amylase pancréatique', 'Bordure en brosse : glucidases → oses'], 'Seuls les oses sont absorbés.'),
      qcm('a2', 'Pourquoi rien ne se passe pour les glucides dans l\'estomac ?', ['Le pH 3 dénature l\'amylase salivaire', 'L\'estomac n\'a pas d\'enzymes', 'Les glucides y sont déjà absorbés', 'Le pH y est trop basique'], 'L\'amylase salivaire travaille à pH 7.')
    ],
    revision: [
      qcm('r1', 'Quels glucides produit l\'amylase pancréatique ?', ['Maltose + isomaltose', 'Glucose + fructose', 'Galactose + glucose', 'Amidon'], 'Toujours pas absorbables : il faut les glucidases de la bordure en brosse.'),
      vf('r2', 'Les amylases coupent toutes les liaisons de l\'amidon.', false, 'Faux : seulement les α1→4. C\'est une hydrolyse partielle.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-02', fiche: F1, ficheTitre: F1T, titre: 'Les glucidases et l\'intolérance au lactose',
    classe: [
      E('Les <b>4 glucidases de la bordure en brosse</b> : maltase, isomaltase, saccharase et lactase. Fabriquées par les entérocytes et fixées sur leurs microvillosités, elles forment le « suc intestinal ».', [T('Les 4 glucidases'), GRI(['Enzyme', 'Coupe…', 'En…'], [['Maltase', 'maltose', 'glucose + glucose'], ['Isomaltase', 'isomaltose', 'glucose + glucose'], ['Saccharase', 'saccharose', 'glucose + fructose'], ['Lactase', 'lactose', 'galactose + glucose']]), MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4)]),
      E('Retiens que le saccharose et le lactose ne sont digérés qu\'à la bordure en brosse. Et la saccharase est <b>inductible</b> : plus il y a de saccharose, plus elle est présente et efficace.', [LG('saccharose et lactose : digérés seulement à la bordure en brosse', 'bleu', { puce: '•' }), LG('saccharase INDUCTIBLE : plus de saccharose → plus d\'enzyme', 'bleu', { puce: '•' })]),
      E('Un mot de vocabulaire : ton cours dit que ces enzymes sont « glycolytiques ». Ici, ça veut dire qu\'elles coupent les glucides : rien à voir avec la glycolyse !', [POST('« Glycolytique » ici = qui coupe les glucides ≠ glycolyse', 'piege')], 'reflechit'),
      E('Le cas de la <b>lactase</b>. Très active à la naissance, son activité diminue chez l\'adolescent et l\'adulte, d\'autant plus si l\'apport en lactose diminue. Elle est même absente chez plus de 50 % des adultes, souvent pour des raisons génétiques.', [EFF(), T('L\'intolérance au lactose'), LG('lactase ↓ avec l\'âge · absente chez > 50 % des adultes (génétique)', 'rouge')]),
      E('Sans lactase, le lactose n\'est pas hydrolysé. Dans l\'intestin grêle, il reste dans la lumière et attire l\'eau : douleurs abdominales, diarrhées. Dans le gros intestin, le microbiote le digère : acides gras volatils, CO₂, méthane, acide lactique ; l\'acidification accentue les diarrhées.', [RANG([
        { titre: 'Intestin grêle', x: 'lactose hydrophile → attire l\'eau (osmose) → douleurs, diarrhées', c: 'bleu' },
        { titre: 'Gros intestin', x: 'microbiote : acides gras volatils, CO₂, méthane, acide lactique → acidification, diarrhées accentuées', c: 'rouge' }
      ]), MONTRE(1), MONTRE(2)], 'content')
    ],
    questions: [
      paires('a1', 'Relie chaque enzyme au glucide qu\'elle coupe.', [['Lactase', 'Lactose'], ['Saccharase', 'Saccharose'], ['Maltase', 'Maltose'], ['Isomaltase', 'Isomaltose']], 'Les 4 glucidases de la bordure en brosse.'),
      vf('a2', 'La lactase est absente chez plus de 50 % des adultes.', true, 'Vrai, souvent pour des raisons génétiques.')
    ],
    revision: [
      qcm('r1', 'Que signifie « saccharase inductible » ?', ['Plus il y a de saccharose, plus l\'enzyme est présente et efficace', 'Elle est absente chez l\'adulte', 'Elle ne fonctionne qu\'à pH acide', 'Elle est fabriquée par le pancréas'], 'Elle s\'adapte à l\'apport.'),
      qcm('r2', 'Où sont fixées les glucidases de la bordure en brosse ?', ['Sur les microvillosités des entérocytes', 'Dans la salive', 'Dans le suc pancréatique', 'Dans l\'estomac'], 'Elles forment le « suc intestinal ».')
    ]
  },
  {
    id: 'bc-meta-glucides-1-03', fiche: F1, ficheTitre: F1T, titre: 'L\'absorption du glucose',
    classe: [
      E('Le glucose doit traverser l\'<b>entérocyte</b> : c\'est le passage transépithélial. Premier problème : franchir la membrane apicale. Il est trop gros et pas liposoluble, il ne passe pas entre les phospholipides. Il lui faut une protéine de transport.', [T('L\'absorption du glucose')]),
      E('On suit le trajet en 4 temps.', [RANG([
        { titre: '1 · Côté apical : entrée par SGLT1', x: 'cotransport glucose + Na⁺ dans le même sens (symport) : le Na⁺ descend son gradient (≈ 140 mM dehors, 10-15 mM dedans) et fournit l\'énergie', c: 'bleu' },
        { titre: '2 · Traversée de la cellule', x: 'le glucose migre vers le pôle basal ; une petite partie sert à l\'entérocyte (glycolyse, Krebs)', c: 'noir' },
        { titre: '3 · Côté basal : sortie par GLUT2', x: 'transport facilité simple (uniport), dans le sens du gradient : pas d\'énergie consommée', c: 'vert' },
        { titre: '4 · Pompe Na⁺/K⁺-ATPase (côté basal)', x: 'expulse le Na⁺ entré (3 Na⁺ sortent, 2 K⁺ entrent) en consommant de l\'ATP', c: 'rouge' }
      ]), MONTRE(1)]),
      E('Un : côté apical, le glucose entre par <b>SGLT1</b>, avec des ions Na⁺, dans le même sens : c\'est un cotransport de type <b>symport</b>. Le Na⁺ entre en descendant son gradient, et cette énergie fait entrer le glucose.', [MONTRE(1)]),
      E('Deux : le glucose traverse la cellule. Une petite partie est utilisée par l\'entérocyte lui-même. Trois : côté basal, il sort par <b>GLUT2</b>, un transport facilité simple, un uniport, dans le sens du gradient : pas de consommation d\'énergie ici.', [MONTRE(2), MONTRE(3)]),
      E('Quatre : la <b>pompe Na⁺/K⁺-ATPase</b>. Le Na⁺ entré avec le glucose doit ressortir, sinon il s\'accumulerait et bloquerait les SGLT. La pompe l\'expulse, en consommant de l\'ATP. Globalement, l\'absorption du glucose est donc un <b>transport actif secondaire</b> : actif, mais de façon indirecte.', [MONTRE(4), POST('SGLT1 (symport avec Na⁺) puis GLUT2 ; pompe Na⁺/K⁺ → transport ACTIF SECONDAIRE', 'cle')]),
      E('Deux points de plus. La <b>voie paracellulaire</b> : environ 10 % du glucose passe entre les entérocytes, par simple diffusion. Et l\'<b>effet osmotique</b> : glucose et Na⁺ ont un fort pouvoir osmotique, leur absorption entraîne de l\'eau vers le plasma. Le galactose suit le même chemin que le glucose.', [EFF(), LG('voie paracellulaire : ≈ 10 % du glucose, entre les entérocytes', 'bleu', { puce: '•' }), LG('effet osmotique : l\'eau suit le glucose et le Na⁺', 'bleu', { puce: '•' }), LG('le galactose suit le même chemin', 'noir', { puce: '•' })], 'content')
    ],
    questions: [
      qcm('a1', 'Par quel transporteur le glucose entre-t-il dans l\'entérocyte (côté apical) ?', ['SGLT1, avec du Na⁺', 'GLUT2, seul', 'GLUT4, grâce à l\'insuline', 'La pompe Na⁺/K⁺'], 'Symport glucose + Na⁺.'),
      qcm('a2', 'L\'absorption du glucose est un transport…', ['actif secondaire', 'passif simple', 'actif primaire', 'par endocytose'], 'L\'ATP est consommé par la pompe Na⁺/K⁺, pas par le SGLT.')
    ],
    revision: [
      paires('r1', 'Relie chaque transporteur à son rôle.', [['SGLT1', 'Fait entrer glucose + Na⁺ (apical)'], ['GLUT2', 'Fait sortir le glucose (basal)'], ['Pompe Na⁺/K⁺-ATPase', 'Expulse le Na⁺ en consommant de l\'ATP']], 'Les 3 acteurs de l\'absorption.'),
      qcm('r2', 'Quelle part du glucose passe par la voie paracellulaire ?', ['Environ 10 %', 'Environ 50 %', 'Environ 90 %', 'Aucune'], 'Entre les entérocytes, par simple diffusion.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-04', fiche: F1, ficheTitre: F1T, titre: 'La distribution du glucose',
    classe: [
      E('Le glucose a quitté l\'entérocyte. Il rejoint les capillaires, puis la <b>veine porte</b>, qui l\'emmène au <b>foie</b>. Le transport est libre, car il est très hydrosoluble.', [T('La distribution du glucose'), EQ('Intestin → capillaires → veine porte → FOIE → autres tissus')]),
      E('Le foie récupère <b>30 à 40 %</b> du glucose : il limite ainsi l\'hyperglycémie. Le reste part vers les autres tissus.', [LG('le foie récupère 30 à 40 % → limite l\'hyperglycémie', 'rouge', { taille: 'grand' }), SOUL()]),
      E('Le glucose suit son gradient : plasma, puis liquide interstitiel, puis cytosol. Du plasma au liquide interstitiel, par simple diffusion. Du liquide interstitiel à la cellule, par un <b>GLUT</b>, un transport facilité simple.', [LG('plasma → liquide interstitiel : simple diffusion', 'bleu', { puce: '1' }), LG('liquide interstitiel → cellule : GLUT (transport facilité)', 'bleu', { puce: '2' })]),
      E('Et il y a plusieurs GLUT, selon les tissus.', [EFF(), T('Les GLUT selon les tissus'), GRI(['GLUT', 'Où ?', 'Particularité'], [
        ['GLUT1 et GLUT3', 'neurones, globules rouges', 'efficaces même quand la glycémie est faible → cellules gluco-dépendantes toujours servies'],
        ['GLUT2', 'hépatocytes, cellules β du pancréas', 'très efficaces quand la glycémie est élevée → le foie récupère l\'excès ; cellules β : sécrètent l\'insuline'],
        ['GLUT4', 'muscles (cardiaque, striés), tissu adipeux', 'optimaux en glycémie classique, vite saturés · SEULS régulés par l\'insuline']
      ]), MONTRE(1)]),
      E('<b>GLUT1 et GLUT3</b>, dans les neurones et les globules rouges : efficaces même quand la glycémie est faible. Le passage du glucose est toujours assuré : ces cellules sont <b>gluco-dépendantes</b>.', [MONTRE(1)]),
      E('<b>GLUT2</b>, dans le foie et les cellules β du pancréas : très efficaces quand la glycémie est <b>élevée</b>. Le foie récupère l\'excès, pour faire du glycogène, des acides gras, des triglycérides. Et les cellules β sécrètent l\'insuline.', [MONTRE(2)]),
      E('<b>GLUT4</b>, dans les muscles et le tissu adipeux : vite saturés quand la glycémie monte. L\'insuline augmente leur nombre à la membrane. Ce sont les <b>seuls</b> GLUT régulés par l\'insuline.', [MONTRE(3), POST('Veine porte → foie (30-40 %) → GLUT1/3 (neurones, hématies) · GLUT2 (foie, cellules β) · GLUT4 (muscles, tissu adipeux, insulino-régulés)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quels GLUT sont régulés par l\'insuline ?', ['GLUT4 uniquement', 'GLUT2', 'GLUT1 et GLUT3', 'Tous les GLUT'], 'Muscles et tissu adipeux : l\'insuline augmente leur nombre à la membrane.'),
      qcm('a2', 'Quelle part du glucose le foie récupère-t-il ?', ['30 à 40 %', '5 à 10 %', '80 à 90 %', '100 %'], 'Il limite ainsi l\'hyperglycémie.')
    ],
    revision: [
      paires('r1', 'Relie chaque GLUT à ses tissus.', [['GLUT1 / GLUT3', 'Neurones, globules rouges'], ['GLUT2', 'Foie, cellules β du pancréas'], ['GLUT4', 'Muscles, tissu adipeux']], 'Les GLUT selon les tissus.'),
      vf('r2', 'Les neurones et les globules rouges reçoivent du glucose même quand la glycémie est basse.', true, 'Vrai : grâce à GLUT1 et GLUT3, très affins. Ils sont gluco-dépendants.'),
      qcm('r3', 'Par quel vaisseau le glucose absorbé arrive-t-il au foie ?', ['La veine porte', 'L\'aorte', 'La veine cave', 'L\'artère pulmonaire'], 'Intestin → capillaires → veine porte → foie.')
    ]
  },

  /* ================= GLYCOLYSE ================= */
  {
    id: 'bc-meta-glucides-1-05', fiche: F2, ficheTitre: F2T, titre: 'La glycolyse : définition et bilan',
    classe: [
      E('Place à la <b>glycolyse</b>, aussi appelée voie d\'Embden-Meyerhof. C\'est une voie <b>catabolique</b> qui dégrade le glucose par oxydation. Catabolique, ça veut dire qu\'elle dégrade de grosses molécules en plus petites, ce qui libère de l\'énergie. L\'inverse, l\'anabolisme, construit et consomme de l\'énergie.', [T('La glycolyse'), LG('voie CATABOLIQUE : dégrade → libère de l\'énergie', 'bleu'), LG('≠ anabolisme : construit → consomme de l\'énergie', 'noir', { taille: 'petit' })]),
      E('Où ? Dans le <b>cytosol</b> de <b>toutes</b> les cellules. Son rôle : produire de l\'ATP.', [LG('Lieu : CYTOSOL de toutes les cellules · rôle : produire de l\'ATP', 'rouge', { taille: 'grand' }), SOUL()]),
      E('Le bilan : à partir d\'1 glucose, 6 carbones, elle aboutit à <b>2 pyruvates</b>, 3 carbones chacun, <b>2 ATP</b> en bilan net, et <b>2 NADH,H⁺</b>.', [EQ('Glucose + 2 NAD⁺ + 2 ADP + 2 Pi → 2 Pyruvate + 2 NADH,H⁺ + 2 ATP + 2 H₂O'), LG('Pi = phosphate inorganique', 'noir', { taille: 'petit' })]),
      E('Elle se déroule en <b>10 réactions</b>, regroupées en <b>3 grandes étapes</b>.', [EFF(), T('3 grandes étapes'), RANG([
        { titre: 'Étape 1 · réactions 1 à 3', x: 'du glucose au fructose-1,6-bisphosphate : 2 phosphorylations, 1 isomérisation · 2 ATP consommés', c: 'rouge' },
        { titre: 'Étape 2 · réactions 4 et 5', x: 'clivage en deux trioses phosphates : 1 molécule à 6 C → 2 glycéraldéhyde-3-P (3 C)', c: 'noir' },
        { titre: 'Étape 3 · réactions 6 à 10 (× 2)', x: 'du glycéraldéhyde-3-P au pyruvate : 4 ATP et 2 NADH,H⁺ produits', c: 'vert' }
      ]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E('Le compte : on consomme 2 ATP à l\'étape 1, on en produit 4 à l\'étape 3. Bilan net : <b>+ 2 ATP</b> par glucose.', [EQ('− 2 ATP (étape 1) + 4 ATP (étape 3) = + 2 ATP net'), POST('Glycolyse : cytosol · 1 glucose → 2 pyruvates + 2 ATP net + 2 NADH,H⁺ · 10 réactions en 3 étapes', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Où se déroule la glycolyse ?', ['Dans le cytosol de toutes les cellules', 'Dans la matrice mitochondriale', 'Uniquement dans le foie', 'Dans le noyau'], 'Toutes les cellules la font.'),
      qcm('a2', 'Quel est le bilan net de la glycolyse pour 1 glucose ?', ['2 pyruvates + 2 ATP + 2 NADH,H⁺', '2 pyruvates + 4 ATP + 2 NADH,H⁺', '1 pyruvate + 2 ATP', '2 lactates + 38 ATP'], '4 ATP produits − 2 consommés = 2 net.')
    ],
    revision: [
      vf('r1', 'La glycolyse est une voie anabolique.', false, 'Faux : elle est catabolique, elle dégrade le glucose et libère de l\'énergie.'),
      ordre('r2', 'Remets les 3 étapes de la glycolyse dans l\'ordre.', ['Glucose → fructose-1,6-bisP (2 ATP consommés)', 'Clivage en deux trioses phosphates', 'Glycéraldéhyde-3-P → pyruvate (4 ATP, 2 NADH,H⁺)'], 'Investir, couper, récolter.'),
      vf('r3', 'La glycolyse comporte 10 réactions, regroupées en 3 étapes.', true, 'Vrai : investir (1-3), couper (4-5), récolter (6-10).')
    ]
  },
  {
    id: 'bc-meta-glucides-1-06', fiche: F2, ficheTitre: F2T, titre: 'Étape 1 : réactions 1 à 3',
    classe: [
      E('On construit la glycolyse réaction par réaction. Étape 1 : on « investit » 2 ATP pour préparer le glucose.', [T('Étape 1 · réactions 1 à 3'), RANG([
        { titre: '1 · Glucose → Glucose-6-P', sous: 'phosphorylation · hexokinase (foie, cellules β : glucokinase) · Mg²⁺ · − 1 ATP · IRRÉVERSIBLE', x: 'le glucose reçoit un phosphate : chargé, il ne ressort plus par les GLUT (piégé)', c: 'rouge' },
        { titre: '2 · Glucose-6-P → Fructose-6-P', sous: 'isomérisation · phosphoglucose isomérase · réversible', x: 'même formule, atomes réarrangés : le glucose devient un fructose', c: 'bleu' },
        { titre: '3 · Fructose-6-P → Fructose-1,6-bisP', sous: 'phosphorylation · phosphofructokinase-1 (PFK-1) · Mg²⁺ · − 1 ATP · IRRÉVERSIBLE', x: 'ENZYME CLÉ : contrôle la vitesse · après elle, la molécule est engagée · freinée par l\'ATP', c: 'rouge' }
      ])]),
      E('Réaction 1 : une <b>phosphorylation</b>. Le glucose reçoit un phosphate venant d\'un ATP : il devient glucose-6-P. Chargé, il ne peut plus ressortir par les GLUT : il est piégé. L\'enzyme : l\'<b>hexokinase</b>, ou la glucokinase dans le foie et les cellules β. Irréversible.', [MONTRE(1)]),
      E('Réaction 2 : une <b>isomérisation</b>. Même formule, atomes réarrangés : le glucose-6-P devient fructose-6-P. Réversible.', [MONTRE(2)]),
      E('Réaction 3 : une deuxième phosphorylation, par la <b>phosphofructokinase-1</b>, la PFK-1. On obtient le fructose-1,6-bisphosphate. C\'est l\'<b>enzyme clé</b> : elle contrôle la vitesse de la voie. Après elle, la molécule est engagée dans la glycolyse. Et elle est freinée par l\'ATP.', [MONTRE(3)]),
      E('Le magnésium, Mg²⁺, est un <b>cofacteur</b> des kinases : ni consommé, ni produit. Bilan de l\'étape 1 : 2 ATP consommés.', [POST('Étape 1 : hexokinase (−1 ATP, irréversible) · isomérase · PFK-1 (−1 ATP, irréversible, enzyme clé) · Mg²⁺ cofacteur', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quelle est l\'enzyme clé qui contrôle la vitesse de la glycolyse ?', ['La phosphofructokinase-1 (PFK-1)', 'L\'hexokinase', 'L\'aldolase', 'La pyruvate kinase'], 'Réaction 3, freinée par l\'ATP.'),
      ordre('a2', 'Remets les molécules de l\'étape 1 dans l\'ordre.', ['Glucose', 'Glucose-6-P', 'Fructose-6-P', 'Fructose-1,6-bisP'], 'Phosphorylation, isomérisation, phosphorylation.')
    ],
    revision: [
      qcm('r1', 'Combien d\'ATP l\'étape 1 de la glycolyse consomme-t-elle ?', ['2', '1', '4', '0'], 'Réactions 1 (hexokinase) et 3 (PFK-1).'),
      qcm('r2', 'Quel est le rôle du Mg²⁺ dans la glycolyse ?', ['Cofacteur des kinases (ni consommé, ni produit)', 'Il apporte le phosphate', 'Il oxyde le glucose', 'Il est produit par la glycolyse'], 'Cofacteur des kinases et de l\'énolase.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-07', fiche: F2, ficheTitre: F2T, titre: 'Étape 2 : le clivage',
    classe: [
      E('Étape 2 : on coupe la molécule en deux.', [T('Étape 2 · réactions 4 et 5'), RANG([
        { titre: '4 · Fructose-1,6-bisP → DHAP + Glycéraldéhyde-3-P', sous: 'clivage · aldolase · réversible', x: 'la molécule à 6 C est coupée en deux trioses phosphates à 3 C', c: 'bleu' },
        { titre: '5 · DHAP → Glycéraldéhyde-3-P', sous: 'isomérisation · triose-P isomérase · réversible', x: 'seul le G3P continue : le DHAP devient G3P → 2 G3P par glucose', c: 'vert' }
      ])]),
      E('Réaction 4 : le <b>clivage</b>, par l\'<b>aldolase</b>. Le fructose-1,6-bisphosphate, 6 carbones, est coupé en deux trioses phosphates, 3 carbones chacun : le DHAP, dihydroxyacétone phosphate, et le glycéraldéhyde-3-P, ou G3P.', [MONTRE(1)]),
      E('Réaction 5 : seul le G3P peut continuer. Alors la <b>triose-phosphate isomérase</b> transforme le DHAP en G3P. Résultat : <b>2 G3P</b> par glucose.', [MONTRE(2)]),
      E('Conséquence très importante : à partir de maintenant, <b>tout se fait deux fois</b>. Toute l\'étape 3 est à multiplier par 2.', [EFF(), LG('À partir d\'ici : TOUT × 2', 'rouge', { taille: 'grand' }), SOUL(true), POST('Aldolase : 6 C → DHAP + G3P · triose-P isomérase : DHAP → G3P · 2 G3P par glucose → étape 3 × 2', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quelle enzyme coupe le fructose-1,6-bisP en deux trioses ?', ['L\'aldolase', 'La PFK-1', 'L\'énolase', 'L\'hexokinase'], 'Réaction 4 : 6 C → 2 × 3 C.'),
      vf('a2', 'Après le clivage, toute la suite de la glycolyse se fait deux fois.', true, 'Vrai : on a 2 glycéraldéhyde-3-P par glucose.')
    ],
    revision: [
      qcm('r1', 'Que devient le DHAP ?', ['Il est transformé en glycéraldéhyde-3-P (triose-P isomérase)', 'Il est éliminé', 'Il devient du pyruvate directement', 'Il retourne en glucose'], 'Seul le G3P continue la glycolyse.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-08', fiche: F2, ficheTitre: F2T, titre: 'Étape 3 : réactions 6 à 10',
    classe: [
      E('Étape 3 : on récolte ! Rappelle-toi, tout se fait deux fois.', [T('Étape 3 · réactions 6 à 10 (× 2)'), RANG([
        { titre: '6 · G3P → 1,3-bisphosphoglycérate', sous: 'oxydation + phosphorylation · G3P déshydrogénase · NAD⁺ + Pi → NADH,H⁺', x: 'SEULE oxydation de la voie · le phosphate vient du Pi, pas d\'un ATP', c: 'bleu' },
        { titre: '7 · → 3-phosphoglycérate', sous: 'transfert de phosphate · phosphoglycérate kinase · Mg²⁺ · + 1 ATP', x: '1er ATP, au niveau du substrat · PIÈGE : réversible !', c: 'vert' },
        { titre: '8 · → 2-phosphoglycérate', sous: 'isomérisation · phosphoglycérate mutase', x: 'le phosphate passe du C3 au C2', c: 'noir' },
        { titre: '9 · → phosphoénolpyruvate (PEP)', sous: 'déshydratation · énolase · Mg²⁺ · − H₂O', x: 'le PEP a un très haut potentiel énergétique', c: 'noir' },
        { titre: '10 · PEP → Pyruvate', sous: 'transfert de phosphate · pyruvate kinase · Mg²⁺ · + 1 ATP · IRRÉVERSIBLE', x: '2e ATP au niveau du substrat · produit final : le pyruvate', c: 'rouge' }
      ])]),
      E('Réaction 6 : la <b>seule oxydation</b> de la voie, par la glycéraldéhyde-3-P déshydrogénase. Le NAD⁺ devient NADH,H⁺. Et attention : le phosphate ajouté vient du <b>Pi</b>, pas d\'un ATP.', [MONTRE(1)]),
      E('Réaction 7 : le <b>premier ATP</b> produit, par la phosphoglycérate kinase. C\'est une phosphorylation au niveau du substrat : le phosphate est donné à l\'ADP. Piège : cette réaction est <b>réversible</b> !', [MONTRE(2)]),
      E('Réaction 8 : une isomérisation, le phosphate passe du carbone 3 au carbone 2. Réaction 9 : une <b>déshydratation</b> par l\'énolase, qui donne le phosphoénolpyruvate, le PEP, à très haut potentiel énergétique.', [MONTRE(3), MONTRE(4)]),
      E('Réaction 10 : le <b>deuxième ATP</b>, par la <b>pyruvate kinase</b>. Irréversible. Produit final : le <b>pyruvate</b> !', [MONTRE(5)]),
      E('Bilan de l\'étape 3, multiplié par 2 : 4 ATP, aux réactions 7 et 10, et 2 NADH,H⁺, à la réaction 6.', [EFF(), EQ('Étape 3 (× 2) : + 4 ATP (réactions 7 et 10) + 2 NADH,H⁺ (réaction 6)'), POST('Une seule oxydation : G3P déshydrogénase (réaction 6, NAD⁺ + Pi) · réaction 7 : ATP mais réversible · Mg²⁺ cofacteur des kinases et de l\'énolase', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quelle est la seule réaction d\'oxydation de la glycolyse ?', ['La réaction 6 (glycéraldéhyde-3-P déshydrogénase)', 'La réaction 1 (hexokinase)', 'La réaction 10 (pyruvate kinase)', 'La réaction 4 (aldolase)'], 'NAD⁺ → NADH,H⁺, avec un Pi.'),
      vf('a2', 'La réaction 7, qui produit un ATP, est irréversible.', false, 'Faux, c\'est un piège : elle produit de l\'ATP mais reste réversible.')
    ],
    revision: [
      paires('r1', 'Relie chaque réaction à ce qu\'elle produit.', [['Réaction 6', 'NADH,H⁺'], ['Réaction 7', '1er ATP (réversible)'], ['Réaction 9', 'PEP (− H₂O)'], ['Réaction 10', '2e ATP + pyruvate']], 'L\'étape 3, à multiplier par 2.'),
      qcm('r2', 'D\'où vient le phosphate ajouté à la réaction 6 ?', ['Du phosphate inorganique (Pi)', 'D\'un ATP', 'Du NAD⁺', 'Du glucose-6-P'], 'Pas d\'ATP consommé à cette étape.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-09', fiche: F2, ficheTitre: F2T, titre: 'Les 3 réactions irréversibles, hexokinase et glucokinase',
    classe: [
      E('Sur les 10 réactions, seulement <b>3 sont irréversibles</b>. Les 7 autres sont réversibles.', [T('Les 3 réactions irréversibles'), GRI(['Enzyme', 'Réaction', 'ATP'], [['Hexokinase', 'Glucose → glucose-6-P (1)', 'consomme 1 ATP'], ['Phosphofructokinase-1', 'Fructose-6-P → fructose-1,6-bisP (3)', 'consomme 1 ATP'], ['Pyruvate kinase', 'PEP → pyruvate (10)', 'produit 1 ATP']]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E('Ce sont ces 3 réactions que la cellule <b>régule</b> pour accélérer ou freiner la glycolyse. Et la PFK-1 contrôle la vitesse de toute la voie.', [LG('ce sont elles que la cellule RÉGULE · la PFK-1 contrôle la vitesse', 'rouge'), SOUL()]),
      E('Hexokinase ou glucokinase ? Elles font la même réaction 1, mais pas au même endroit, ni de la même façon.', [EFF(), T('Hexokinase ou glucokinase ?'), GRI(['', 'Hexokinase', 'Glucokinase'], [['Où ?', 'la plupart des cellules', 'foie, cellules β du pancréas'], ['Affinité pour le glucose', 'forte', 'faible'], ['Efficace…', 'même avec peu de glucose', 'seulement si glycémie élevée'], ['Freinée par le glucose-6-P ?', 'oui', 'non']]), MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4)]),
      E('L\'hexokinase a une forte affinité : elle travaille même avec peu de glucose, et elle ralentit si son produit, le glucose-6-P, s\'accumule. La glucokinase, dans le foie, a une faible affinité : elle ne travaille vraiment qu\'en cas d\'excès de glucose, et elle n\'est pas freinée.', [LG('même logique que GLUT2 : le foie utilise des outils à faible affinité', 'bleu')]),
      E('L\'idée : le foie absorbe le surplus après un repas, sans priver les autres organes quand la glycémie est basse.', [POST('3 irréversibles : hexokinase, PFK-1, pyruvate kinase (régulées) · glucokinase du foie : faible affinité, pas freinée → stocke le surplus', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Laquelle n\'est PAS une réaction irréversible de la glycolyse ?', ['La phosphoglycérate kinase (réaction 7)', 'L\'hexokinase', 'La PFK-1', 'La pyruvate kinase'], 'La réaction 7 produit de l\'ATP mais reste réversible.'),
      qcm('a2', 'Où trouve-t-on la glucokinase ?', ['Dans le foie et les cellules β du pancréas', 'Dans toutes les cellules', 'Dans les globules rouges', 'Dans les muscles'], 'Faible affinité : elle travaille quand la glycémie est élevée.')
    ],
    revision: [
      paires('r1', 'Hexokinase ou glucokinase ?', [['Forte affinité, freinée par le glucose-6-P', 'Hexokinase'], ['Faible affinité, non freinée, foie', 'Glucokinase']], 'Le foie récupère le surplus après un repas.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-10', fiche: F2, ficheTitre: F2T, titre: 'Le problème du NAD⁺',
    classe: [
      E('Partie 2 : le devenir des NADH,H⁺. Le problème : la réaction 6 a besoin de NAD⁺, qu\'elle transforme en NADH,H⁺. Or la cellule n\'a qu\'une <b>petite réserve</b> de NAD⁺.', [T('Le problème du NAD⁺'), LG('réaction 6 : NAD⁺ → NADH,H⁺ · réserve de NAD⁺ LIMITÉE', 'bleu')]),
      E('Si le NADH,H⁺ n\'est pas réoxydé en NAD⁺, la réserve s\'épuise, la réaction 6 s\'arrête, et toute la glycolyse se <b>bloque</b> : plus d\'ATP !', [LG('pas de réoxydation → plus de NAD⁺ → glycolyse BLOQUÉE → plus d\'ATP', 'rouge', { taille: 'grand' }), SOUL()], 'reflechit'),
      E('La cellule régénère son NAD⁺ de deux façons, selon qu\'elle peut utiliser l\'O₂ dans ses mitochondries ou non. Dans les deux cas, la glycolyse elle-même est identique.', [EFF(), T('Deux solutions'), RANG([
        { titre: 'O₂ utilisable : AÉROBIE', x: 'navette + chaîne respiratoire (mitochondrie) · O₂ = accepteur final · + 6 ATP en plus', c: 'vert' },
        { titre: 'O₂ insuffisant ou pas de mitochondries : ANAÉROBIE', x: 'fermentation lactique (LDH) dans le cytosol · pyruvate = accepteur final · aucun ATP en plus', c: 'rouge' }
      ]), MONTRE(1), MONTRE(2)]),
      E('Dans les deux cas, le NAD⁺ régénéré retourne à la glycolyse. On détaille chaque voie dans les leçons suivantes.', [POST('Le NADH,H⁺ doit toujours être réoxydé, sinon la glycolyse se bloque · aérobie (O₂) ou anaérobie (lactate)', 'cle')], 'content')
    ],
    questions: [
      vf('a1', 'Si le NADH,H⁺ n\'est pas réoxydé, la glycolyse se bloque.', true, 'Vrai : la réserve de NAD⁺ s\'épuise, la réaction 6 s\'arrête.'),
      qcm('a2', 'En aérobie, quel est l\'accepteur final des électrons ?', ['L\'O₂', 'Le pyruvate', 'Le lactate', 'Le glucose'], 'En anaérobie, c\'est le pyruvate (qui devient lactate).')
    ],
    revision: [
      paires('r1', 'Aérobie ou anaérobie ?', [['Navette + chaîne respiratoire', 'Aérobie'], ['Fermentation lactique (LDH)', 'Anaérobie']], 'Deux façons de régénérer le NAD⁺.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-11', fiche: F2, ficheTitre: F2T, titre: 'En aérobie : navette et chaîne respiratoire',
    classe: [
      E('Aérobie : la cellule reçoit assez d\'O₂ et possède des mitochondries. Les NADH,H⁺ y sont réoxydés, ce qui produit de l\'ATP en plus. On suit 4 temps.', [T('En aérobie'), RANG([
        { titre: '1 · Le problème', x: 'NADH,H⁺ formé dans le cytosol, réoxydé dans la mitochondrie… mais il ne traverse pas la membrane interne', c: 'noir' },
        { titre: '2 · La navette', x: 'le NADH,H⁺ donne ses e⁻ et H⁺ à la navette et redevient NAD⁺ · ce sont ses électrons qui passent, pas la molécule', c: 'bleu' },
        { titre: '3 · La chaîne respiratoire', x: 'les e⁻ passent de protéine en protéine (membrane interne) · l\'énergie pompe des H⁺ : gradient · O₂ = accepteur final → H₂O', c: 'vert' },
        { titre: '4 · L\'ATP synthase', x: 'les H⁺ redescendent leur gradient à travers l\'ATP synthase → ATP · 3 ATP par NADH,H⁺', c: 'rouge' }
      ]), MONTRE(1)]),
      E('Le problème : le NADH,H⁺ est formé dans le cytosol, mais réoxydé dans la mitochondrie. Or il ne peut pas traverser la membrane interne. Solution : la <b>navette</b>. Il donne ses électrons et ses H⁺ à une molécule de la navette, et redevient NAD⁺. À retenir : la molécule ne traverse pas, ce sont ses <b>électrons</b> qui passent.', [MONTRE(2)]),
      E('La <b>chaîne respiratoire</b> : les électrons passent de protéine en protéine dans la membrane interne. L\'énergie libérée pompe des H⁺ vers l\'espace intermembranaire : c\'est le gradient. Au bout, l\'<b>O₂</b> est l\'accepteur final : il forme de l\'eau. Sans O₂, les électrons ne peuvent plus avancer et toute la chaîne se bloque.', [MONTRE(3), EQ('2 NADH,H⁺ + O₂ → 2 NAD⁺ + 2 H₂O')]),
      E('L\'<b>ATP synthase</b>, aussi appelée ATPase : les H⁺ redescendent leur gradient à travers elle, et elle utilise cette énergie pour fabriquer de l\'ATP. Chaque NADH,H⁺ rapporte <b>3 ATP</b>. Même principe que SGLT1 : un ion qui descend son gradient fournit l\'énergie. Piège : la pompe Na⁺/K⁺-ATPase consomme de l\'ATP, l\'ATP synthase en produit.', [MONTRE(4)]),
      E('Le bilan : 2 ATP de la glycolyse, plus 2 NADH,H⁺ fois 3 = 6 ATP. Total : <b>8 ATP</b> par glucose, pour la glycolyse seule. Selon les sources, on trouve 6, 7 ou 8 : utilise le chiffre de ton cours. Et le pyruvate, lui, continue dans la mitochondrie, vers le cycle de Krebs.', [EFF(), T('Le bilan en aérobie'), EQ('2 ATP + 2 NADH,H⁺ × 3 = 8 ATP par glucose (glycolyse seule)'), EQ('Glucose + O₂ + 8 ADP + 8 Pi → 2 Pyruvate + 8 ATP + 10 H₂O'), POST('Aérobie : navette + chaîne respiratoire (O₂ accepteur final) → + 6 ATP, soit 8 ATP pour la glycolyse', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Combien d\'ATP rapporte la glycolyse en aérobie (glycolyse seule) ?', ['8 ATP', '2 ATP', '38 ATP', '4 ATP'], '2 ATP + 2 NADH,H⁺ × 3 = 8.'),
      vf('a2', 'Le NADH,H⁺ du cytosol traverse la membrane mitochondriale pour être réoxydé.', false, 'Faux : il ne traverse pas. Ce sont ses électrons qui passent, grâce à une navette.')
    ],
    revision: [
      qcm('r1', 'Combien d\'ATP rapporte 1 NADH,H⁺ réoxydé par la chaîne respiratoire (valeur du cours) ?', ['3', '2', '1', '12'], '3 ATP par NADH,H⁺ ; 2 par FADH₂.'),
      paires('r2', 'Consomme ou produit de l\'ATP ?', [['Pompe Na⁺/K⁺-ATPase', 'Consomme de l\'ATP'], ['ATP synthase', 'Produit de l\'ATP']], 'Ne pas confondre les deux « ATPases ».')
    ]
  },
  {
    id: 'bc-meta-glucides-1-12', fiche: F2, ficheTitre: F2T, titre: 'En anaérobie : la fermentation lactique',
    classe: [
      E('Anaérobie : la cellule ne peut pas utiliser l\'O₂ pour régénérer son NAD⁺. Le plus souvent parce que l\'O₂ manque, comme dans un muscle en effort intense. La chaîne respiratoire ne fonctionne plus.', [T('En anaérobie')]),
      E('La solution : la <b>lactate déshydrogénase</b>, la LDH. Le pyruvate récupère les électrons et les H⁺ du NADH,H⁺ : il devient <b>lactate</b>, et le NAD⁺ est libéré. Réaction réversible.', [EQ('Pyruvate + NADH,H⁺ ⇄ Lactate + NAD⁺ (LDH)')]),
      E('À retenir : cette réaction ne produit <b>pas</b> d\'ATP. Son seul but : rendre du NAD⁺ pour que la glycolyse continue. En aérobie, l\'accepteur final est l\'O₂ ; en anaérobie, c\'est le <b>pyruvate</b>.', [LG('LDH : 0 ATP · seul but = rendre du NAD⁺', 'rouge', { taille: 'grand' }), SOUL(), LG('accepteur final : O₂ (aérobie) / pyruvate (anaérobie)', 'bleu')]),
      E('Bilan : seulement les <b>2 ATP</b> de la glycolyse. Sans chaîne respiratoire, les NADH,H⁺ ne rapportent rien, et la LDH non plus.', [EFF(), T('Le bilan'), EQ('Glucose + 2 ADP + 2 Pi → 2 Lactate + 2 ATP + 2 H₂O')]),
      E('Pour le muscle, le lactate est un déchet. Il passe dans le sang. Il peut être recyclé par le <b>foie</b>, qui le retransforme en glucose, ou utilisé par le <b>cœur</b>, qui le retransforme en pyruvate pour produire de l\'énergie. Le trajet muscle, sang, foie, sang, muscle s\'appelle le <b>cycle de Cori</b>.', [RANG([{ titre: 'Muscle', x: 'glucose → lactate', c: 'rouge' }, { titre: 'Sang', x: 'le lactate voyage', c: 'noir' }, { titre: 'Foie', x: 'lactate → glucose (cycle de Cori)', c: 'vert' }]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E('Attention : beaucoup de lactate peut entraîner une acidification, avec par exemple des crampes, selon ton cours. Les recherches récentes nuancent ce lien ; pour l\'examen, retiens la version de ton cours.', [POST('Anaérobie : LDH (pyruvate accepteur final) → 2 ATP + lactate, recyclé par le foie (cycle de Cori)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel est le seul but de la lactate déshydrogénase en anaérobie ?', ['Régénérer du NAD⁺ pour que la glycolyse continue', 'Produire de l\'ATP', 'Fabriquer du glucose', 'Consommer de l\'O₂'], 'Elle ne produit aucun ATP.'),
      qcm('a2', 'Combien d\'ATP par glucose en anaérobie ?', ['2', '8', '38', '0'], 'Uniquement ceux de la glycolyse (bilan net).')
    ],
    revision: [
      qcm('r1', 'Comment s\'appelle le trajet muscle → sang → foie (lactate → glucose) → sang → muscle ?', ['Le cycle de Cori', 'Le cycle de Krebs', 'La navette malate-aspartate', 'La voie des pentoses phosphates'], 'Aussi appelé cycle de l\'acide lactique.'),
      vf('r2', 'En anaérobie, l\'accepteur final des électrons est le pyruvate.', true, 'Vrai : il devient lactate.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-13', fiche: F2, ficheTitre: F2T, titre: 'Les hématies et la comparaison des contextes',
    classe: [
      E('Cas particulier : les <b>hématies</b>, les globules rouges. Elles n\'ont <b>pas de mitochondries</b>. Donc ni navette, ni chaîne respiratoire : elles régénèrent leur NAD⁺ uniquement par la fermentation lactique, et produisent 2 ATP par glucose… même quand l\'O₂ est abondant. Ce sont elles qui le transportent !', [T('Le cas des hématies'), LG('pas de mitochondries → fermentation lactique MÊME avec beaucoup d\'O₂', 'rouge', { taille: 'grand' }), SOUL()]),
      E('Piège classique : « anaérobie » ne veut pas forcément dire « sans O₂ ». Ici, ça veut dire « sans <b>utiliser</b> l\'O₂ ». Leur lactate part vers le foie, par le cycle de Cori. Et ce sont aussi des cellules <b>gluco-dépendantes</b> : le glucose est leur seule source d\'énergie.', [POST('Anaérobie = sans UTILISER l\'O₂ (pas forcément sans O₂) : cas des hématies', 'piege')], 'reflechit'),
      E('Comparons les trois contextes.', [EFF(), T('Comparaison'), GRI(['', 'Aérobie', 'Anaérobie (manque d\'O₂)', 'Hématies'], [
        ['O₂', 'suffisant', 'insuffisant', 'abondant, mais pas de mitochondries'],
        ['Régénération du NAD⁺', 'navette + chaîne respiratoire', 'fermentation lactique (LDH)', 'fermentation lactique (LDH)'],
        ['Accepteur final', 'O₂ (→ H₂O)', 'pyruvate (→ lactate)', 'pyruvate (→ lactate)'],
        ['ATP par glucose', '8 (glycolyse) ; 38 avec Krebs', '2', '2'],
        ['Exemple', 'muscle au repos, effort modéré', 'muscle en effort intense', 'globules rouges, toujours']
      ]), MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4), MONTRE(5)]),
      E('Combien de fois moins rentable ? Si on compare la glycolyse seule : 8 ATP contre 2, l\'anaérobie est 4 fois moins rentable. Mais en aérobie, le pyruvate continue dans le cycle de Krebs : la dégradation complète du glucose donne 38 ATP. L\'anaérobie est donc en réalité environ <b>19 fois</b> moins rentable.', [EQ('8 ÷ 2 = 4 fois (glycolyse seule) · 38 ÷ 2 = 19 fois (dégradation complète)'), POST('Hématies : pas de mitochondries → fermentation lactique même avec O₂ · anaérobie : 4 fois moins rentable (glycolyse), 19 fois (38 ATP)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Pourquoi les globules rouges font-ils de la fermentation lactique même avec beaucoup d\'O₂ ?', ['Ils n\'ont pas de mitochondries', 'Ils manquent d\'O₂', 'Ils n\'ont pas de LDH', 'Ils n\'utilisent pas de glucose'], 'Pas de navette, pas de chaîne respiratoire.'),
      qcm('a2', 'Par rapport à la dégradation complète du glucose (38 ATP), l\'anaérobie est environ…', ['19 fois moins rentable', '4 fois moins rentable', '2 fois moins rentable', 'aussi rentable'], '38 ÷ 2 = 19.')
    ],
    revision: [
      vf('r1', '« Anaérobie » veut toujours dire « sans O₂ ».', false, 'Faux : ça veut dire « sans utiliser l\'O₂ ». Les hématies en sont l\'exemple.'),
      paires('r2', 'Combien d\'ATP par glucose ?', [['Glycolyse aérobie (seule)', '8 ATP'], ['Anaérobie', '2 ATP'], ['Dégradation complète (avec Krebs)', '38 ATP']], 'Chiffres de ton cours.'),
      qcm('r3', 'Glycolyse seule : 8 ATP en aérobie contre 2 en anaérobie. L\'anaérobie est donc…', ['4 fois moins rentable', '2 fois moins rentable', '19 fois moins rentable', 'aussi rentable'], '8 ÷ 2 = 4. Avec Krebs : 38 ÷ 2 = 19.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-14', fiche: F2, ficheTitre: F2T, titre: 'Régulation A : après un repas',
    classe: [
      E('Partie 3 : la <b>régulation</b>. La glycolyse a lieu dans toutes les cellules, mais son intensité change selon le contexte nutritionnel. Trois situations.', [T('La régulation de la glycolyse'), RANG([
        { titre: 'A · Après un repas', x: 'hyperglycémie, insuline → glycolyse STIMULÉE', c: 'vert' },
        { titre: 'B · Cellule au repos, assez d\'ATP', x: 'régulation allostérique interne → glycolyse RALENTIE', c: 'bleu' },
        { titre: 'C · Jeûne ou effort prolongé', x: 'peu d\'insuline, glucagon (foie) → glycolyse FREINÉE', c: 'rouge' }
      ]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E('Situation A : après un repas. La digestion et l\'absorption des glucides provoquent une hyperglycémie. Les cellules utilisent alors le glucose en priorité, pour deux raisons.', [EFF(), T('A · Après un repas'), LG('hyperglycémie → le glucose est utilisé en priorité', 'vert', { taille: 'grand' })]),
      E('Raison 1 : le <b>gradient de concentration</b>. Le glucose va du plus concentré vers le moins concentré. Plus la glycémie est haute, plus il passe facilement du plasma au liquide interstitiel, puis dans la cellule grâce à un GLUT.', [LG('1 · GRADIENT : glycémie haute → le glucose entre plus facilement', 'bleu')]),
      E('Raison 2 : l\'<b>insuline</b>. L\'hyperglycémie stimule les cellules β du pancréas, qui sécrètent l\'insuline. Deux effets. Plus de glucose entre dans les muscles et le tissu adipeux : les vésicules de GLUT4 migrent vers la membrane. Et plus d\'enzymes : l\'insuline stimule la synthèse de la glucokinase, de la PFK-1 et de la pyruvate kinase.', [LG('2 · INSULINE : GLUT4 à la membrane + synthèse de glucokinase, PFK-1, pyruvate kinase', 'bleu')]),
      E('Résultat : la glycolyse s\'accélère. Et remarque : l\'insuline agit sur les enzymes des 3 réactions irréversibles.', [POST('Après un repas : gradient + insuline (GLUT4, glucokinase, PFK-1, pyruvate kinase) → glycolyse stimulée', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Après un repas, quelle hormone stimule la glycolyse ?', ['L\'insuline', 'Le glucagon', 'L\'adrénaline', 'Le cortisol'], 'Sécrétée par les cellules β du pancréas.'),
      qcm('a2', 'Quel transporteur l\'insuline fait-elle migrer vers la membrane ?', ['GLUT4', 'GLUT2', 'GLUT1', 'SGLT1'], 'Dans les muscles et le tissu adipeux.')
    ],
    revision: [
      qcm('r1', 'Quelles enzymes l\'insuline fait-elle synthétiser davantage ?', ['Glucokinase, PFK-1, pyruvate kinase', 'Aldolase et énolase', 'LDH', 'Lactase'], 'Les enzymes des 3 étapes irréversibles.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-15', fiche: F2, ficheTitre: F2T, titre: 'Régulation B : la cellule se freine elle-même',
    classe: [
      E('Situation B : une cellule au repos. Exemple : un muscle squelettique au repos consomme peu d\'ATP. Sa concentration en ATP augmente : la cellule a assez d\'énergie. Une <b>régulation allostérique</b> se met en place : une molécule se fixe sur une enzyme et la freine. C\'est comme un effet domino qui remonte la voie.', [T('B · Cellule au repos'), LG('ATP élevé → régulation ALLOSTÉRIQUE (une molécule se fixe sur une enzyme et la freine)', 'bleu')]),
      E('On suit les dominos.', [RANG([
        { titre: '1 · L\'ATP freine la PFK-1', x: 'en excès, l\'ATP est un inhibiteur allostérique de la PFK-1 (réaction 3)', c: 'rouge' },
        { titre: '2 · En aval : moins de produits', x: 'moins de fructose-1,6-bisP, donc moins d\'ATP produit : la cellule en a assez', c: 'noir' },
        { titre: '3 · En amont : les réactifs s\'accumulent', x: 'le fructose-6-P s\'accumule → loi d\'action de masse : l\'isomérisation repart en arrière → le glucose-6-P augmente', c: 'noir' },
        { titre: '4 · Une partie part en stock', x: 'le glucose-6-P en excès favorise la glycogenèse (stockage limité)', c: 'vert' },
        { titre: '5 · Le glucose-6-P freine l\'hexokinase', x: 'inhibiteur allostérique : le glucose n\'est plus phosphorylé (pas la glucokinase du foie)', c: 'rouge' },
        { titre: '6-7 · Le glucose reste dans le sang', x: 'les concentrations s\'égalisent, le glucose n\'entre plus · il est distribué à d\'autres cellules', c: 'bleu' }
      ])]),
      E('Un : l\'ATP en excès freine la <b>PFK-1</b>. Deux, en aval : moins de produits, donc moins d\'ATP produit. Logique, la cellule en a assez.', [MONTRE(1), MONTRE(2)]),
      E('Trois, en amont : le fructose-6-P s\'accumule. Par la loi d\'action de masse, l\'isomérisation repart en arrière : le glucose-6-P augmente. C\'est possible parce que cette réaction est réversible. Quatre : une partie du glucose-6-P part en stock, en glycogène, mais ce stockage est limité.', [MONTRE(3), MONTRE(4)]),
      E('Cinq : le glucose-6-P freine à son tour l\'<b>hexokinase</b>. Le glucose n\'est plus phosphorylé. Attention, ce frein ne concerne pas la glucokinase du foie. Six et sept : le glucose s\'accumule dans la cellule, les concentrations s\'égalisent, il n\'entre plus. Il reste dans le sang, et il est distribué à d\'autres cellules.', [MONTRE(5), MONTRE(6)]),
      E('L\'idée clé : même si l\'insuline incite la cellule à consommer du glucose, la régulation allostérique interne prime. Une cellule qui a assez d\'énergie laisse le glucose aux autres.', [EFF(), POST('ATP ⊣ PFK-1 · glucose-6-P ⊣ hexokinase · une cellule qui a assez d\'énergie laisse le glucose aux autres', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Dans une cellule au repos, quelle molécule freine la PFK-1 ?', ['L\'ATP', 'L\'insuline', 'Le glucagon', 'Le pyruvate'], 'C\'est un inhibiteur allostérique.'),
      vf('a2', 'Le glucose-6-P freine la glucokinase du foie.', false, 'Faux : il freine l\'hexokinase, pas la glucokinase.')
    ],
    revision: [
      qcm('r1', 'Quelle est l\'idée clé de la régulation allostérique de la glycolyse ?', ['Une cellule qui a assez d\'énergie laisse le glucose aux autres', 'La cellule stocke tout le glucose', 'L\'insuline l\'emporte toujours', 'La glycolyse s\'accélère quand l\'ATP augmente'], 'La régulation interne prime sur l\'insuline.')
    ]
  },
  {
    id: 'bc-meta-glucides-1-16', fiche: F2, ficheTitre: F2T, titre: 'Régulation C : jeûne et effort prolongé',
    classe: [
      E('Situation C : le jeûne ou l\'effort prolongé. L\'insuline est basse : la glycolyse n\'est plus stimulée. Les cellules α du pancréas sécrètent du <b>glucagon</b>.', [T('C · Jeûne ou effort prolongé'), LG('insuline basse + GLUCAGON (cellules α du pancréas)', 'rouge', { taille: 'grand' })]),
      E('Qui fait quoi ? Le glucagon agit surtout sur le <b>foie</b> : il y freine la glycolyse, la pyruvate kinase est inhibée, et il favorise la néoglucogenèse.', [LG('FOIE : glucagon → pyruvate kinase inhibée + néoglucogenèse', 'bleu')]),
      E('Et les muscles ? Ils n\'ont pas de récepteurs au glucagon. S\'ils utilisent les acides gras, c\'est parce que l\'insuline est basse, donc peu de GLUT4, et que la lipolyse du tissu adipeux libère des acides gras dans le sang.', [LG('MUSCLES : pas de récepteur au glucagon · insuline basse + acides gras libérés → β-oxydation', 'bleu')]),
      E('L\'objectif : préserver le glucose restant pour les cellules qui ne peuvent vivre que de glucose : les <b>neurones</b>, les <b>hématies</b>, et les myocytes en anaérobie. Les autres cellules utilisent les acides gras, par la β-oxydation.', [POST('Objectif : garder le glucose pour les neurones, les hématies, les myocytes en anaérobie', 'cle')]),
      E('Le bilan des trois situations.', [EFF(), T('Bilan de la régulation'), GRI(['', 'A · Repas', 'B · Repos', 'C · Jeûne / effort'], [
        ['Signal', 'hyperglycémie + insuline', 'ATP élevé dans la cellule', 'insuline basse + glucagon'],
        ['Type', 'hormonale (+ gradient)', 'allostérique (interne)', 'hormonale'],
        ['Cibles', 'GLUT4 ; glucokinase, PFK-1, pyruvate kinase', 'ATP ⊣ PFK-1 ; glucose-6-P ⊣ hexokinase', 'pyruvate kinase du foie inhibée'],
        ['Effet', 'glycolyse stimulée', 'glycolyse ralentie', 'glycolyse freinée (β-oxydation, néoglucogenèse)']
      ], true), POST('Les enzymes régulées sont toujours celles des 3 étapes irréversibles (hexokinase/glucokinase, PFK-1, pyruvate kinase)', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'En période de jeûne, sur quel organe agit surtout le glucagon ?', ['Le foie', 'Les muscles', 'Le cerveau', 'Les globules rouges'], 'Les muscles n\'ont pas de récepteurs au glucagon.'),
      qcm('a2', 'Pourquoi la glycolyse est-elle freinée pendant le jeûne ?', ['Pour garder le glucose aux cellules gluco-dépendantes (neurones, hématies)', 'Parce que le foie n\'a plus de glucose', 'Parce que l\'ATP est trop élevé', 'Parce que l\'insuline est trop haute'], 'Les autres cellules utilisent les acides gras.')
    ],
    revision: [
      paires('r1', 'Relie chaque situation à son signal.', [['Après un repas', 'Hyperglycémie + insuline'], ['Cellule au repos', 'ATP élevé'], ['Jeûne / effort prolongé', 'Insuline basse + glucagon']], 'Les 3 situations de régulation.'),
      vf('r2', 'Les muscles utilisent les acides gras pendant le jeûne parce que le glucagon agit sur eux.', false, 'Faux : ils n\'ont pas de récepteurs au glucagon. C\'est l\'insuline basse et la lipolyse qui l\'expliquent.')
    ]
  }

  ]
};
