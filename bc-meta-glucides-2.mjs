// Cours : Métabolisme des glucides (2) : Krebs et autres voies (Sciences › Biochimie › Métabolisme)
// Source : fiches « Le cycle de Krebs », « La voie des pentoses phosphates », « Le métabolisme du fructose »,
// « Le métabolisme du galactose », « Récap · un glucose complètement dégradé », « Récap · le métabolisme des glucides ».
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const FK = 'Cycle de Krebs', FKT = 'Le cycle de Krebs';
const FP = 'Pentoses phosphates', FPT = 'La voie des pentoses phosphates';
const FF = 'Fructose', FFT = 'Le métabolisme du fructose';
const FG = 'Galactose', FGT = 'Le métabolisme du galactose';
const FR = 'Récaps', FRT = 'Les fiches récap';

export default {
  id: 'bc-meta-glucides-2',
  titre: 'Métabolisme des glucides (2) : Krebs et autres voies',
  persos: {},
  carte: {
    depart: 'Le pyruvate sort de la glycolyse. Comment finir de dégrader le glucose ? Et que deviennent le fructose et le galactose ?',
    etapes: [
      { titre: 'Cycle de Krebs', verbe: 'Je termine', question: 'Comment le glucose est-il complètement dégradé ?', mots: 'pyruvate dH (B1) · 8 réactions · 12 ATP par tour · 38 ATP' },
      { titre: 'Pentoses phosphates', verbe: 'Je construis', question: 'Une voie qui ne fait pas d\'ATP ?', mots: 'G6PD · NADPH,H⁺ · ribose-5-P · glutathion' },
      { titre: 'Fructose', verbe: 'Je rejoins', question: 'Pourquoi le fructose est-il différent ?', mots: 'GLUT5 · fructokinase · après la PFK-1 · VLDL' },
      { titre: 'Galactose', verbe: 'Je transforme', question: 'Comment le galactose du lait devient-il glucose ?', mots: 'galactokinase · transférase · épimérase · galactosémie' },
      { titre: 'Récap', verbe: 'Je relie', question: 'Comment tout s\'assemble ?', mots: '10 NADH,H⁺ + 2 FADH₂ + 2 + 2 = 38 ATP · carte des voies' }
    ],
    arrivee: 'Tu sais compter les 38 ATP d\'un glucose, et situer chaque voie sur l\'autoroute de la glycolyse.'
  },
  lecons: [

  /* ================= KREBS ================= */
  {
    id: 'bc-meta-glucides-2-01', fiche: FK, ficheTitre: FKT, titre: 'Le cycle de Krebs : définition',
    classe: [
      E('Le <b>cycle de Krebs</b>, aussi appelé cycle de l\'acide citrique, c\'est la dernière étape de la dégradation des molécules énergétiques. C\'est la voie de dégradation oxydative <b>complète</b> des substrats énergétiques : glucides, acides gras, acides aminés, corps cétoniques.', [T('Le cycle de Krebs'), LG('dégradation oxydative COMPLÈTE : glucides, acides gras, acides aminés, corps cétoniques', 'bleu')]),
      E('Il se déroule <b>exclusivement</b> dans la <b>matrice mitochondriale</b>. Avec les chaînes respiratoires et l\'ATPase, il permet de former de l\'ATP.', [LG('Lieu : exclusivement la MATRICE MITOCHONDRIALE', 'rouge', { taille: 'grand' }), SOUL()]),
      E('Toutes ces molécules entrent dans le cycle par un intermédiaire commun : l\'<b>acétyl-CoA</b>.', [EQ('glucides, acides gras, acides aminés → ACÉTYL-CoA → cycle de Krebs')]),
      E('C\'est un cycle <b>amphibolique</b> : à la fois catabolique, il dégrade pour produire de l\'énergie, et anabolique, il fournit des précurseurs pour certaines biosynthèses, comme la néoglucogenèse et certains acides aminés.', [EFF(), T('Un cycle amphibolique'), RANG([{ titre: 'Catabolique', x: 'dégrade pour produire de l\'énergie', c: 'rouge' }, { titre: 'Anabolique', x: 'fournit des précurseurs (néoglucogenèse, certains acides aminés)', c: 'vert' }]), MONTRE(1), MONTRE(2), POST('Krebs : dégradation oxydative complète, dans la matrice mitochondriale · amphibolique · entrée commune : l\'acétyl-CoA', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Où se déroule le cycle de Krebs ?', ['Exclusivement dans la matrice mitochondriale', 'Dans le cytosol', 'Dans la membrane plasmique', 'Dans le noyau'], 'La glycolyse, elle, est dans le cytosol.'),
      qcm('a2', 'Par quelle molécule commune les substrats énergétiques entrent-ils dans le cycle ?', ['L\'acétyl-CoA', 'Le pyruvate', 'Le glucose-6-P', 'Le lactate'], 'Glucides, acides gras, acides aminés y aboutissent.')
    ],
    revision: [
      qcm('r1', 'Que veut dire « amphibolique » ?', ['À la fois catabolique et anabolique', 'Uniquement anabolique', 'Qui fonctionne sans O₂', 'Qui se déroule dans deux organites'], 'Il dégrade et fournit des précurseurs.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-02', fiche: FK, ficheTitre: FKT, titre: 'Du pyruvate à l\'acétyl-CoA',
    classe: [
      E('Avant le cycle, il faut transformer le pyruvate en acétyl-CoA. Trois temps.', [T('Avant le cycle'), RANG([
        { titre: '1 · Entrée dans la mitochondrie', x: 'le pyruvate, formé dans le cytosol, entre par une protéine de transport spécifique', c: 'noir' },
        { titre: '2 · La pyruvate déshydrogénase', x: 'complexe enzymatique : décarboxylation (− CO₂) + oxydation (NAD⁺ → NADH,H⁺) → acétyl-CoA', c: 'bleu' },
        { titre: '3 · Irréversible, point de régulation', x: 'se fait AVANT le cycle : elle ne fait pas partie des 8 réactions', c: 'rouge' }
      ]), MONTRE(1)]),
      E('Un : le pyruvate, formé dans le cytosol, entre dans la mitochondrie par une protéine de transport spécifique.', [MONTRE(1)]),
      E('Deux : dans la matrice, la <b>pyruvate déshydrogénase</b>, un complexe enzymatique, le décarboxyle, départ d\'un CO₂, et l\'oxyde, le NAD⁺ devient NADH,H⁺. On obtient l\'acétyl-CoA. C\'est une décarboxylation oxydative.', [MONTRE(2), EQ('Pyruvate + CoA-SH + NAD⁺ → Acétyl-CoA + CO₂ + NADH,H⁺')]),
      E('Trois : c\'est une étape <b>irréversible</b>, un point de régulation important. Elle se fait avant le cycle : elle ne fait pas partie des 8 réactions.', [MONTRE(3)]),
      E('Le lien avec la nutrition : la pyruvate déshydrogénase a besoin de la <b>TPP</b>, forme active de la <b>vitamine B1</b>, la thiamine. En cas de carence en B1, l\'enzyme est bloquée, le pyruvate part en lactate : <b>acidose lactique</b>, avec fatigue, douleurs musculaires, troubles neurologiques. L\'alcool aggrave la carence. Conseil : levure de bière, céréales complètes, et avis médical.', [EFF(), T('Vitamine B1 et alcool'), LG('pyruvate dH : besoin de TPP (vitamine B1, thiamine)', 'bleu'), LG('carence B1 (aggravée par l\'alcool) → pyruvate → lactate → ACIDOSE LACTIQUE', 'rouge'), POST('Sources de B1 : levure de bière, céréales complètes (+ avis médical)', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'De quelle vitamine la pyruvate déshydrogénase a-t-elle besoin ?', ['La vitamine B1 (thiamine)', 'La vitamine C', 'La vitamine B12', 'La vitamine D'], 'Sous sa forme active, la TPP.'),
      vf('a2', 'La transformation du pyruvate en acétyl-CoA est la première des 8 réactions du cycle de Krebs.', false, 'Faux : elle se fait AVANT le cycle et n\'en fait pas partie.')
    ],
    revision: [
      qcm('r1', 'Que provoque une carence en vitamine B1 ?', ['Une acidose lactique (le pyruvate part en lactate)', 'Une alcalose', 'Une hyperglycémie', 'Un excès d\'acétyl-CoA'], 'Fatigue, douleurs musculaires, troubles neurologiques. L\'alcool l\'aggrave.'),
      qcm('r2', 'Que libère la pyruvate déshydrogénase ?', ['Un CO₂ et un NADH,H⁺', 'Un ATP', 'Un lactate', 'Un FADH₂'], 'Décarboxylation oxydative.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-03', fiche: FK, ficheTitre: FKT, titre: 'Les réactions 1 à 4 du cycle',
    classe: [
      E('Le cycle, réaction par réaction. Il y en a 8. Première moitié.', [T('Le cycle · réactions 1 à 4'), RANG([
        { titre: '1 · Acétyl-CoA + oxaloacétate → citrate', sous: 'CONDENSATION · citrate synthase · + H₂O, − CoA-SH · IRRÉVERSIBLE', c: 'rouge' },
        { titre: '2 · Citrate → isocitrate', sous: 'isomérisation · aconitase (Fe²⁺) · réversible', c: 'noir' },
        { titre: '3 · Isocitrate → α-cétoglutarate', sous: 'décarboxylation oxydative · isocitrate dH · NADH,H⁺ + CO₂ · IRRÉVERSIBLE (via l\'oxalosuccinate)', c: 'rouge' },
        { titre: '4 · α-cétoglutarate → succinyl-CoA', sous: 'décarboxylation oxydative · α-cétoglutarate dH (complexe) · NADH,H⁺ + CO₂ · IRRÉVERSIBLE', c: 'rouge' }
      ])]),
      E('Réaction 1 : la <b>condensation</b>. L\'acétyl-CoA s\'associe à l\'<b>oxaloacétate</b> pour former le citrate. Enzyme : la citrate synthase. Irréversible.', [MONTRE(1)]),
      E('Réaction 2 : une isomérisation, citrate en isocitrate, par l\'aconitase, qui contient du fer. Réversible.', [MONTRE(2)]),
      E('Réaction 3 : une <b>décarboxylation oxydative</b> par l\'isocitrate déshydrogénase : un CO₂ part, un NADH,H⁺ est formé. On obtient l\'α-cétoglutarate. Irréversible.', [MONTRE(3)]),
      E('Réaction 4 : une deuxième décarboxylation oxydative, par le complexe α-cétoglutarate déshydrogénase : encore un CO₂ et un NADH,H⁺. On obtient le succinyl-CoA. Irréversible.', [MONTRE(4)]),
      E('Bilan de cette première moitié : les 2 carbones de l\'acétyl sont repartis en <b>2 CO₂</b>. Et les 3 réactions irréversibles du cycle sont la 1, la 3 et la 4.', [EFF(), POST('Krebs : 8 réactions · la 1re = condensation acétyl-CoA + oxaloacétate · 3 irréversibles : 1, 3, 4', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Avec quelle molécule l\'acétyl-CoA se condense-t-il au début du cycle ?', ['L\'oxaloacétate', 'Le pyruvate', 'Le citrate', 'Le succinate'], 'Il forme le citrate (citrate synthase).'),
      qcm('a2', 'Quelles sont les réactions irréversibles du cycle de Krebs ?', ['1, 3 et 4', '1, 2 et 3', '5, 6 et 7', 'Toutes'], 'Citrate synthase, isocitrate dH, α-cétoglutarate dH.')
    ],
    revision: [
      ordre('r1', 'Remets ces molécules du cycle dans l\'ordre.', ['Citrate', 'Isocitrate', 'α-Cétoglutarate', 'Succinyl-CoA'], 'Réactions 1 à 4.'),
      qcm('r2', 'Combien de CO₂ sont libérés par tour de cycle ?', ['2', '1', '3', '6'], 'Aux réactions 3 et 4 : les 2 carbones de l\'acétyl.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-04', fiche: FK, ficheTitre: FKT, titre: 'Les réactions 5 à 8 du cycle',
    classe: [
      E('Deuxième moitié du cycle : on va régénérer l\'oxaloacétate.', [T('Le cycle · réactions 5 à 8'), RANG([
        { titre: '5 · Succinyl-CoA → succinate', sous: 'rupture du thioester · succinate thiokinase · GDP + Pi → GTP · réversible', c: 'vert' },
        { titre: '6 · Succinate → fumarate', sous: 'déshydrogénation · succinate dH (Fe²⁺) · FAD → FADH₂ · réversible', c: 'bleu' },
        { titre: '7 · Fumarate → malate', sous: 'hydratation · fumarase · + H₂O · réversible', c: 'noir' },
        { titre: '8 · Malate → oxaloacétate', sous: 'oxydation · malate dH · NAD⁺ → NADH,H⁺ · réversible', c: 'bleu' }
      ])]),
      E('Réaction 5 : la rupture du thioester du succinyl-CoA, par la succinate thiokinase. Elle produit un <b>GTP</b>, à partir de GDP et Pi.', [MONTRE(1)]),
      E('Réaction 6 : une déshydrogénation par la succinate déshydrogénase, qui contient du fer. Cette fois, c\'est le <b>FAD</b> qui récupère les électrons : il devient FADH₂.', [MONTRE(2)]),
      E('Réaction 7 : une <b>hydratation</b> par la fumarase : on ajoute de l\'eau, le fumarate devient malate. Tu te souviens ? C\'était l\'exemple d\'hydratation des rappels de chimie !', [MONTRE(3)]),
      E('Réaction 8 : une oxydation par la malate déshydrogénase, avec un dernier NADH,H⁺. On obtient l\'<b>oxaloacétate</b> : il est régénéré, et il repart pour un nouveau tour.', [MONTRE(4), POST('Réaction 5 : GTP · 6 : FADH₂ (succinate dH) · 7 : hydratation (fumarase) · 8 : NADH,H⁺ → oxaloacétate régénéré', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'Quelle réaction du cycle produit un FADH₂ ?', ['La réaction 6 (succinate déshydrogénase)', 'La réaction 1', 'La réaction 8', 'La réaction 5'], 'Le FAD récupère les électrons du succinate.'),
      vf('a2', 'À la fin du cycle, l\'oxaloacétate est régénéré et repart pour un nouveau tour.', true, 'Vrai, c\'est pour ça qu\'on parle de cycle.')
    ],
    revision: [
      ordre('r1', 'Remets ces molécules du cycle dans l\'ordre.', ['Succinyl-CoA', 'Succinate', 'Fumarate', 'Malate', 'Oxaloacétate'], 'Réactions 5 à 8.'),
      qcm('r2', 'Quelle réaction du cycle produit un GTP ?', ['La réaction 5 (succinate thiokinase)', 'La réaction 1', 'La réaction 7', 'La réaction 3'], 'Rupture du thioester du succinyl-CoA.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-05', fiche: FK, ficheTitre: FKT, titre: 'Le bilan : 12 ATP par tour, 38 par glucose',
    classe: [
      E('Le bilan d\'un tour de cycle.', [T('Le bilan d\'un tour'), EQ('Acétyl-CoA + 3 NAD⁺ + FAD + (GDP + Pi) + 2 H₂O → 2 CO₂ + 3 NADH,H⁺ + FADH₂ + GTP + CoA-SH')]),
      E('Un tour donne <b>3 NADH,H⁺</b>, <b>1 FADH₂</b> et <b>1 GTP</b>. Les NADH,H⁺ et FADH₂ sont réoxydés par la chaîne respiratoire : 3 ATP par NADH,H⁺, 2 ATP par FADH₂.', [EQ('3 × 3 + 1 × 2 + 1 GTP = 12 ATP par acétyl-CoA'), LG('les 2 C de l\'acétyl → 2 CO₂, un déchet éliminé par les poumons', 'noir', { taille: 'petit' })]),
      E('Et pour un glucose complètement dégradé ? On additionne trois morceaux.', [EFF(), T('Un glucose complètement dégradé'), GRI(['Étape', 'Calcul', 'ATP'], [['Glycolyse (aérobie)', '2 ATP + 2 NADH,H⁺ × 3', '8'], ['Pyruvate → acétyl-CoA', '1 NADH,H⁺ × 3 × 2 pyruvates', '6'], ['Cycle de Krebs', '12 ATP × 2 acétyl-CoA', '24'], ['TOTAL', 'par glucose', '38 ATP']]), MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4)]),
      E('8 plus 6 plus 24 : <b>38 ATP</b> par glucose.', [EQ('Glucose + 6 O₂ + 38 (ADP + Pi) → 6 CO₂ + 44 H₂O + 38 ATP')]),
      E('Important : le cycle de Krebs est <b>strictement aérobie</b>. L\'O₂ n\'intervient pas directement dans le cycle, mais il est indispensable aux chaînes respiratoires pour régénérer le NAD⁺ et le FAD. La glycolyse peut être aérobie ou anaérobie ; le cycle de Krebs, non.', [POST('Un tour : 3 NADH,H⁺ + 1 FADH₂ + 1 GTP = 12 ATP · un glucose : 38 ATP · strictement aérobie', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Combien d\'ATP rapporte un tour de cycle de Krebs ?', ['12', '38', '8', '2'], '3 NADH,H⁺ × 3 + 1 FADH₂ × 2 + 1 GTP.'),
      qcm('a2', 'Combien d\'ATP pour un glucose complètement dégradé (valeur du cours) ?', ['38', '12', '24', '8'], '8 (glycolyse) + 6 (pyruvate dH) + 24 (Krebs).')
    ],
    revision: [
      vf('r1', 'Le cycle de Krebs peut fonctionner sans O₂.', false, 'Faux : il est strictement aérobie, l\'O₂ est indispensable pour régénérer NAD⁺ et FAD.'),
      paires('r2', 'Combien d\'ATP rapporte chaque « ticket » ?', [['1 NADH,H⁺', '3 ATP'], ['1 FADH₂', '2 ATP'], ['1 GTP', '1 ATP']], 'Valeurs de ton cours.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-06', fiche: FK, ficheTitre: FKT, titre: 'La régulation du cycle de Krebs',
    classe: [
      E('Le cycle tourne tout le temps. Ce qui change selon la situation, c\'est la <b>provenance de l\'acétyl-CoA</b>. Et la clé, c\'est la pyruvate déshydrogénase, qu\'un phosphate allume ou éteint. Ici, le phosphate l\'<b>éteint</b>.', [T('La régulation'), RANG([
        { titre: 'Pyruvate dH (sans phosphate)', x: 'ACTIVE', c: 'vert' },
        { titre: 'Pyruvate dH–Ⓟ (phosphorylée)', x: 'INACTIVE', c: 'rouge' }
      ]), MONTRE(1), MONTRE(2)]),
      E('Après un repas : le glucose est utilisé en priorité. L\'hyperglycémie déclenche l\'insuline, qui active une phosphatase : elle <b>déphosphoryle</b> la pyruvate déshydrogénase, qui devient active. L\'acétyl-CoA vient surtout du pyruvate. Et si la cellule a déjà beaucoup d\'ATP, l\'acétyl-CoA sert à fabriquer des acides gras ou du cholestérol : un excès de glucose favorise les lipides et le tissu adipeux.', [EFF(), T('3 situations'), RANG([
        { titre: 'Après un repas', x: 'insuline → phosphatase → pyruvate dH ACTIVE · acétyl-CoA du pyruvate · si trop d\'ATP : → acides gras, cholestérol', c: 'vert' },
        { titre: 'Jeûne / effort prolongé', x: 'glucagon → AMPc → kinase → pyruvate dH INACTIVE · acétyl-CoA des acides gras (β-oxydation)', c: 'bleu' },
        { titre: 'Anaérobie (effort intense)', x: 'NADH,H⁺ accumulés → inhibent isocitrate dH, α-cétoglutarate dH, pyruvate dH → cycle bloqué', c: 'rouge' }
      ]), MONTRE(1)]),
      E('Pendant le jeûne ou un effort prolongé : hypoglycémie, le glucose est gardé pour les cellules gluco-dépendantes, globules rouges et neurones. Le glucagon active une kinase, par l\'AMPc : elle <b>phosphoryle</b> la pyruvate déshydrogénase, qui devient inactive. Il favorise la lipolyse : l\'acétyl-CoA vient des acides gras. Le glucagon peut être renforcé par l\'adrénaline, le cortisol et les hormones thyroïdiennes.', [MONTRE(2)]),
      E('En anaérobie, lors d\'un effort intense : sans O₂, les NADH,H⁺ s\'accumulent. En excès, ils inhibent l\'isocitrate déshydrogénase, l\'α-cétoglutarate déshydrogénase et la pyruvate déshydrogénase : le cycle se bloque. Le pyruvate part en lactate ; la glycolyse reste la seule source d\'énergie.', [MONTRE(3), POST('Insuline → pyruvate dH active (déphosphorylée) · glucagon → inactive (phosphorylée) · anaérobie : NADH,H⁺ bloquent le cycle', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Après un repas, la pyruvate déshydrogénase est…', ['active (déphosphorylée sous l\'effet de l\'insuline)', 'inactive (phosphorylée)', 'détruite', 'transformée en kinase'], 'L\'acétyl-CoA vient alors surtout du pyruvate.'),
      vf('a2', 'Pour la pyruvate déshydrogénase, le phosphate l\'éteint.', true, 'Vrai : pyruvate dH–Ⓟ = inactive.')
    ],
    revision: [
      qcm('r1', 'Pendant le jeûne, d\'où vient surtout l\'acétyl-CoA ?', ['Des acides gras (β-oxydation)', 'Du glucose', 'Du lactate', 'Du glycogène musculaire'], 'Le glucose est gardé aux cellules gluco-dépendantes.'),
      qcm('r2', 'Pourquoi le cycle de Krebs se bloque-t-il en anaérobie ?', ['Les NADH,H⁺ s\'accumulent et inhibent ses déshydrogénases', 'L\'acétyl-CoA est détruit', 'Le glucagon l\'arrête', 'L\'oxaloacétate devient du lactate'], 'Sans O₂, pas de réoxydation des NADH,H⁺.')
    ]
  },

  /* ================= PENTOSES PHOSPHATES ================= */
  {
    id: 'bc-meta-glucides-2-07', fiche: FP, ficheTitre: FPT, titre: 'Une voie sans ATP : NADPH et ribose',
    classe: [
      E('La <b>voie des pentoses phosphates</b> est spéciale : elle ne sert pas à faire de l\'ATP, mais à fournir deux « matières premières » : du <b>NADPH,H⁺</b> et du <b>ribose-5-phosphate</b>.', [T('La voie des pentoses phosphates')]),
      E('En une phrase : une partie du glucose-6-phosphate quitte la glycolyse pour faire un « détour ». Il est oxydé pour produire 2 NADPH,H⁺ et 1 ribose-5-phosphate. Dans le cytosol, sans produire ni consommer d\'ATP, dans presque toutes les cellules.', [LG('glucose-6-P en « détour » → 2 NADPH,H⁺ + 1 ribose-5-P', 'bleu', { taille: 'grand' }), LG('cytosol · 0 ATP · presque toutes les cellules', 'noir', { taille: 'petit' })]),
      E('Comparons avec la glycolyse.', [EFF(), T('Glycolyse ou pentoses ?'), GRI(['', 'Glycolyse', 'Pentoses phosphates'], [['Objectif', 'produire de l\'énergie (ATP)', 'produire des matières premières'], ['Départ', 'glucose', 'glucose-6-P'], ['Coenzyme produite', 'NADH,H⁺', 'NADPH,H⁺'], ['ATP', '+ 2 net', '0 (nul)'], ['Lieu', 'cytosol', 'cytosol'], ['Enzyme clé', 'PFK-1', 'G6PD (glucose-6-P déshydrogénase)']], true)]),
      E('NADH et NADPH : même famille, rôles différents. Le <b>NADH,H⁺</b> est fait <b>pour l\'énergie</b> : réoxydé par la chaîne respiratoire, il sert à fabriquer de l\'ATP. Le <b>NADPH,H⁺</b> est fait <b>pour construire et protéger</b> : il fournit les électrons de la biosynthèse des acides gras et du cholestérol, et protège les globules rouges. Le « P » en plus est un phosphate qui empêche les enzymes de les confondre.', [EFF(), RANG([{ titre: 'NADH,H⁺ · pour l\'ÉNERGIE', x: 'catabolisme → chaîne respiratoire → ATP', c: 'rouge' }, { titre: 'NADPH,H⁺ · pour CONSTRUIRE et PROTÉGER', x: 'biosynthèse des acides gras, du cholestérol · protection des globules rouges (glutathion)', c: 'vert' }]), MONTRE(1), MONTRE(2)]),
      E('Et le ribose-5-phosphate ? C\'est un sucre à 5 carbones, un pentose, d\'où le nom de la voie. Il sert à fabriquer les nucléotides, donc l\'ADN et l\'ARN.', [POST('But : NADPH,H⁺ (biosynthèses, protection des globules rouges) + ribose-5-P (nucléotides) · pas d\'ATP', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Combien d\'ATP produit la voie des pentoses phosphates ?', ['0 (bilan nul)', '2', '8', '38'], 'Elle produit des matières premières, pas de l\'énergie.'),
      paires('a2', 'NADH ou NADPH ?', [['Pour fabriquer de l\'ATP', 'NADH,H⁺'], ['Pour construire (acides gras) et protéger', 'NADPH,H⁺']], 'Même famille, rôles différents.')
    ],
    revision: [
      qcm('r1', 'Quelle est l\'enzyme clé de la voie des pentoses phosphates ?', ['La G6PD (glucose-6-P déshydrogénase)', 'La PFK-1', 'L\'hexokinase', 'La pyruvate dH'], 'Comme la PFK-1 pour la glycolyse.'),
      qcm('r2', 'À quoi sert le ribose-5-phosphate ?', ['À fabriquer les nucléotides (ADN, ARN)', 'À produire de l\'ATP', 'À fabriquer du glycogène', 'À protéger les globules rouges'], 'C\'est un pentose, d\'où le nom de la voie.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-08', fiche: FP, ficheTitre: FPT, titre: 'Le bilan et l\'exemple de l\'adipocyte',
    classe: [
      E('L\'équation bilan, terme par terme.', [T('L\'équation bilan'), EQ('Glucose-6-P + 2 NADP⁺ + H₂O → Ribose-5-P + 2 NADPH,H⁺ + CO₂')]),
      E('Le point de départ, c\'est le glucose-6-P : le glucose a déjà été phosphorylé par l\'hexokinase. Il est oxydé <b>deux fois</b> : à chaque fois, un NADP⁺ récupère les électrons et les H⁺. Une molécule d\'eau est consommée. Et un carbone est retiré sous forme de <b>CO₂</b> : on passe de 6 carbones à 5, le ribose-5-P, un pentose.', [LG('glucose-6-P oxydé 2 fois → 2 NADPH,H⁺', 'bleu', { puce: '•' }), LG('1 CO₂ retiré : 6 C → 5 C (ribose-5-P)', 'bleu', { puce: '•' }), LG('1 H₂O consommée · ATP : bilan nul', 'bleu', { puce: '•' })]),
      E('Le lien avec la glycolyse : l\'exemple de l\'<b>adipocyte</b>. Il fabrique beaucoup d\'acides gras, donc il a besoin de beaucoup de NADPH,H⁺, mais de peu de ribose-5-P. Or la voie produit toujours les deux ensemble : le ribose-5-P est en trop.', [EFF(), T('L\'exemple de l\'adipocyte'), LG('besoin de beaucoup de NADPH (acides gras), peu de ribose → ribose EN TROP', 'rouge')]),
      E('Il est donc <b>recyclé</b> vers la glycolyse. La transcétolase et la transaldolase transforment 3 pentoses-P en 2 hexoses-P, du fructose-6-P, et 1 triose-P, du glycéraldéhyde-3-P. Ces deux molécules sont des intermédiaires de la glycolyse : elles y reprennent leur place.', [EQ('3 pentoses-P → (transcétolase + transaldolase) → 2 fructose-6-P + 1 glycéraldéhyde-3-P → glycolyse')]),
      E('À retenir : quand le ribose-5-P est en trop, il retourne dans la glycolyse.', [POST('Glucose-6-P + 2 NADP⁺ + H₂O → ribose-5-P + 2 NADPH,H⁺ + CO₂ · ribose en trop (adipocyte) → transcétolase, transaldolase → fructose-6-P + G3P', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Pourquoi un CO₂ est-il libéré dans la voie des pentoses phosphates ?', ['On passe de 6 carbones (glucose-6-P) à 5 (ribose-5-P)', 'Pour produire de l\'ATP', 'Parce que la voie est mitochondriale', 'Pour fabriquer du glycogène'], 'Le pentose a un carbone de moins.'),
      qcm('a2', 'Dans l\'adipocyte, que devient le ribose-5-P en trop ?', ['Il est recyclé en fructose-6-P et glycéraldéhyde-3-P (glycolyse)', 'Il est éliminé dans l\'urine', 'Il devient du glycogène', 'Il est stocké tel quel'], 'Transcétolase et transaldolase.')
    ],
    revision: [
      qcm('r1', 'Combien de NADPH,H⁺ par glucose-6-P dans la voie des pentoses ?', ['2', '1', '3', '0'], 'Le glucose-6-P est oxydé deux fois.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-09', fiche: FP, ficheTitre: FPT, titre: 'Régulation et protection des globules rouges',
    classe: [
      E('La régulation de la voie : plus il y a de NADPH,H⁺, plus elle ralentit. Le NADPH,H⁺ freine la G6PD : c\'est un effecteur allostérique. Quand le rapport NADPH sur NADP⁺ augmente, la cellule en a assez, la voie s\'arrête. Quand il est consommé, la voie repart. Même logique que l\'ATP qui freine la PFK-1 !', [T('La régulation'), LG('NADPH,H⁺ ⊣ G6PD (effecteur allostérique)', 'rouge', { taille: 'grand' }), SOUL(), LG('comme l\'ATP qui freine la PFK-1 dans la glycolyse', 'noir', { taille: 'petit' })]),
      E('Où la voie est-elle importante ? Dans le <b>foie</b>, pour les acides gras et le cholestérol. Dans le <b>tissu adipeux</b>, pour les acides gras. Dans la <b>glande mammaire</b>, pour les acides gras pendant la lactation. Et dans les <b>globules rouges</b>, avec un autre but : la protection.', [LG('foie (acides gras, cholestérol) · tissu adipeux · glande mammaire (lactation) · globules rouges (protection)', 'bleu')]),
      E('Le cas des globules rouges. Pense à une <b>pile rechargeable</b> : le glutathion est la pile, le NADPH,H⁺ est le chargeur.', [EFF(), T('Les globules rouges'), RANG([
        { titre: '1 · Le problème', x: 'en contexte aérobie, il se forme du H₂O₂, toxique : il abîme l\'hémoglobine et la membrane → le globule rouge éclate (hémolyse)', c: 'rouge' },
        { titre: '2 · Le protecteur', x: 'le glutathion réduit (« pile chargée ») transforme H₂O₂ en eau (glutathion peroxydase) · il s\'use : devient oxydé', c: 'bleu' },
        { titre: '3 · La recharge', x: 'le NADPH,H⁺ de la voie des pentoses réduit le glutathion oxydé (glutathion réductase) : il est rechargé', c: 'vert' }
      ]), MONTRE(1)]),
      E('Le problème : en contexte aérobie, il se forme du H₂O₂, toxique. S\'il s\'accumule, il abîme l\'hémoglobine et la membrane : le globule rouge éclate, c\'est l\'hémolyse.', [MONTRE(1)]),
      E('Le protecteur : le glutathion réduit, la pile chargée, transforme le H₂O₂ en eau, grâce à la glutathion peroxydase. Ce faisant, il s\'use et devient glutathion oxydé. La recharge : le NADPH,H⁺ de la voie des pentoses le réduit à nouveau, grâce à la glutathion réductase.', [MONTRE(2), MONTRE(3), POST('Globules rouges : NADPH,H⁺ → recharge le glutathion → neutralise le H₂O₂ → pas d\'hémolyse · NADPH,H⁺ freine la G6PD', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel est le rôle du NADPH,H⁺ dans les globules rouges ?', ['Recharger le glutathion, qui neutralise le H₂O₂', 'Produire de l\'ATP', 'Fabriquer des acides gras', 'Transporter l\'O₂'], 'Le glutathion est la pile, le NADPH le chargeur.'),
      vf('a2', 'Plus il y a de NADPH,H⁺, plus la voie des pentoses phosphates accélère.', false, 'Faux : le NADPH,H⁺ freine la G6PD, la voie ralentit.')
    ],
    revision: [
      qcm('r1', 'Que se passe-t-il si le H₂O₂ s\'accumule dans un globule rouge ?', ['Il abîme l\'hémoglobine et la membrane : hémolyse', 'Il produit de l\'ATP', 'Il est transformé en glucose', 'Rien'], 'D\'où l\'importance du glutathion.'),
      ordre('r2', 'Remets la protection du globule rouge dans l\'ordre.', ['Le NADPH,H⁺ recharge le glutathion', 'Le glutathion réduit neutralise le H₂O₂', 'Le H₂O₂ devient de l\'eau : pas d\'hémolyse'], 'Chargeur → pile → protection.')
    ]
  },

  /* ================= FRUCTOSE ================= */
  {
    id: 'bc-meta-glucides-2-10', fiche: FF, ficheTitre: FFT, titre: 'Le trajet du fructose et ses 3 réactions',
    classe: [
      E('Le <b>fructose</b>, présent en quantité non négligeable dans l\'alimentation, est surtout métabolisé dans le <b>foie</b>. Son but : rejoindre la glycolyse.', [T('Le métabolisme du fructose'), RANG([
        { titre: '1 · Absorption', x: 'dans l\'intestin grêle, par les entérocytes', c: 'noir' },
        { titre: '2 · Dans le sang', x: 'très hydrophile : circule librement dans le plasma, puis gagne la veine porte', c: 'noir' },
        { titre: '3 · Les organes', x: 'surtout le foie ; aussi le muscle et le tissu adipeux', c: 'bleu' },
        { titre: '4 · L\'entrée', x: 'par le transporteur GLUT5, indépendant de l\'insuline', c: 'rouge' }
      ]), MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4)]),
      E('Dans l\'hépatocyte, 3 réactions. Une : la <b>fructokinase</b> phosphoryle le fructose. Attention : le phosphate est fixé sur le <b>carbone 1</b>. On obtient le fructose-1-P. Elle consomme 1 ATP, irréversible.', [EFF(), T('Les 3 réactions (foie)'), EQ('① Fructose + ATP → Fructose-1-P + ADP (fructokinase, irréversible)')]),
      E('Deux : le <b>clivage</b>. La fructose-1-P aldolase coupe la molécule à 6 carbones en deux molécules à 3 carbones : le DHAP, qui peut directement participer à la glycolyse, et le glycéraldéhyde, qui n\'a pas de phosphate : il ne peut pas encore y entrer.', [EQ('② Fructose-1-P → DHAP + Glycéraldéhyde (fructose-1-P aldolase)')]),
      E('Trois : la <b>triose kinase</b> donne son phosphate au glycéraldéhyde, en consommant 1 ATP. Il devient glycéraldéhyde-3-P et peut retourner dans la glycolyse.', [EQ('③ Glycéraldéhyde + ATP → Glycéraldéhyde-3-P + ADP (triose kinase)')]),
      E('Le point clé : le fructose rejoint la glycolyse <b>après la PFK-1</b>. Il échappe à son principal point de contrôle ! Et dans le tissu adipeux, c\'est différent : l\'hexokinase le transforme en fructose-6-P, et il entre au niveau de la réaction 3, la PFK-1. La fructokinase existe aussi, en faible quantité, dans l\'intestin et le rein.', [EFF(), POST('Le fructose (foie) rejoint la glycolyse APRÈS la PFK-1 : il échappe à son contrôle', 'piege'), POST('GLUT5 (sans insuline) · fructokinase (1 ATP) → fructose-1-P → aldolase → DHAP + glycéraldéhyde → triose kinase (1 ATP) → G3P · tissu adipeux : hexokinase → fructose-6-P', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Par quel transporteur le fructose entre-t-il dans les cellules ?', ['GLUT5, indépendant de l\'insuline', 'GLUT4, dépendant de l\'insuline', 'SGLT1', 'GLUT2 uniquement'], 'D\'où un métabolisme sans contrôle hormonal.'),
      vf('a2', 'Dans le foie, le fructose entre dans la glycolyse après la PFK-1.', true, 'Vrai : il échappe à son principal point de contrôle.')
    ],
    revision: [
      ordre('r1', 'Remets le trajet du fructose dans le foie dans l\'ordre.', ['Fructose', 'Fructose-1-P', 'DHAP + glycéraldéhyde', 'Glycéraldéhyde-3-P'], 'Fructokinase, aldolase, triose kinase.'),
      qcm('r2', 'Dans le tissu adipeux, quelle enzyme prend en charge le fructose ?', ['L\'hexokinase (→ fructose-6-P)', 'La fructokinase', 'La galactokinase', 'La lactase'], 'Il entre alors au niveau de la PFK-1.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-11', fiche: FF, ficheTitre: FFT, titre: 'Le bilan et la triple particularité du fructose',
    classe: [
      E('Le bilan du fructose : <b>identique</b> à celui du glucose. 2 ATP consommés, la fructokinase et la triose kinase, au lieu de l\'hexokinase et la PFK-1. 4 ATP produits par la suite de la glycolyse. Bilan net : 2 ATP et 2 NADH,H⁺.', [T('Le bilan'), EQ('Fructose + 2 NAD⁺ + 2 ADP + 2 Pi → 2 Pyruvate + 2 NADH,H⁺ + 2 ATP + 2 H₂O'), LG('même bilan que le glucose : 2 ATP + 2 NADH,H⁺', 'vert', { taille: 'grand' })]),
      E('Mais il a une <b>triple particularité</b>.', [EFF(), T('La triple particularité'), RANG([
        { titre: '1 · Très rapide', x: 'la fructokinase est plus active que la glucokinase, et le fructose passe après la PFK-1, sans ce frein', c: 'rouge' },
        { titre: '2 · Sans contrôle hormonal', x: 'indépendant de l\'insuline (GLUT5, fructokinase) · intérêt pour le diabétique revu à la baisse (toxique en excès : ex. rétinopathies)', c: 'bleu' },
        { titre: '3 · Favorise les graisses', x: 'fructose → pyruvate → acétyl-CoA → acides gras · plus de VLDL → hypertriacylglycérolémie, hypercholestérolémie', c: 'noir' }
      ])]),
      E('Un : il est <b>très rapide</b>. La fructokinase est plus active que la glucokinase, et il rejoint la glycolyse sans passer par le frein de la PFK-1.', [MONTRE(1)]),
      E('Deux : <b>sans contrôle hormonal</b>, indépendant de l\'insuline. D\'où son intérêt pour l\'alimentation du diabétique… revu à la baisse, à cause de sa toxicité en excès, par exemple les rétinopathies.', [MONTRE(2)]),
      E('Trois : il <b>favorise les graisses</b>. Fructose, pyruvate, acétyl-CoA, acides gras. Dans le foie, plus de VLDL : risque d\'hypertriacylglycérolémie et d\'hypercholestérolémie. Autres effets : contrairement au glucose, il a peu d\'effet sur la satiété, et une consommation importante est impliquée dans l\'insulinorésistance.', [MONTRE(3), POST('Fructose : même bilan que le glucose · rapide · sans insuline · en excès favorise les acides gras (VLDL, triglycérides, cholestérol) · peu de satiété', 'cle')], 'content')
    ],
    questions: [
      vf('a1', 'Le bilan énergétique du fructose est le même que celui du glucose.', true, 'Vrai : 2 pyruvates + 2 ATP + 2 NADH,H⁺.'),
      qcm('a2', 'Pourquoi le fructose en excès favorise-t-il les graisses ?', ['Il est vite transformé en acétyl-CoA puis en acides gras (VLDL)', 'Il est stocké tel quel dans le tissu adipeux', 'Il bloque la lipolyse', 'Il augmente la satiété'], 'Rapide et sans contrôle : le foie fabrique des acides gras.')
    ],
    revision: [
      ordre('r1', 'Retrouve la triple particularité du fructose.', ['Très rapide', 'Sans contrôle hormonal', 'Favorise les graisses'], 'Rapide, sans insuline, lipogène.'),
      qcm('r2', 'Quel effet le fructose a-t-il sur la satiété, comparé au glucose ?', ['Peu d\'effet', 'Un effet plus fort', 'Le même effet', 'Il supprime la faim'], 'Et une consommation importante est impliquée dans l\'insulinorésistance.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-12', fiche: FF, ficheTitre: FFT, titre: 'Le fructose en pratique',
    classe: [
      E('Le fructose en pratique diététique. D\'abord, l\'<b>indice glycémique</b>, l\'IG : il mesure la vitesse à laquelle un aliment fait monter la glycémie, par rapport au glucose, IG = 100. On donne 50 g de glucides et on suit la glycémie pendant 3 heures.', [T('L\'indice glycémique'), LG('IG = vitesse de montée de la glycémie, par rapport au glucose (IG 100)', 'bleu'), LG('protocole : 50 g de glucides, glycémie suivie 3 h', 'noir', { taille: 'petit' })]),
      E('L\'IG du fructose est très bas : <b>19</b>. Il passe d\'abord par le foie, et fait peu monter la glycémie. Les fibres, les protéines et le mode de cuisson font aussi varier l\'IG d\'un aliment.', [LG('IG du fructose = 19 (très bas) : il passe d\'abord par le foie', 'vert', { taille: 'grand' }), SOUL()]),
      E('Mais ce n\'est pas un « bon sucre » pour autant ! Son IG bas l\'a fait conseiller aux diabétiques. Mais en excès, il fait monter les triglycérides et baisser le HDL-cholestérol, il favorise la stéatose hépatique, le foie gras, et l\'insulinorésistance.', [EFF(), T('Pas un « bon sucre » pour autant'), LG('↑ triglycérides · ↓ HDL-cholestérol', 'rouge', { puce: '−' }), LG('stéatose hépatique (foie gras) · insulinorésistance', 'rouge', { puce: '−' })], 'reflechit'),
      E('Le conseil pratique : limiter le fructose <b>ajouté</b>, sirops, sodas, miel, sirop d\'agave. Pas les fruits entiers !', [POST('Limiter le fructose AJOUTÉ (sirops, sodas, miel, sirop d\'agave), pas les fruits entiers', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel est l\'indice glycémique du fructose ?', ['19 (très bas)', '100', '70', '50'], 'Il passe d\'abord par le foie.'),
      vf('a2', 'Il faut limiter les fruits entiers à cause de leur fructose.', false, 'Faux : il faut limiter le fructose AJOUTÉ (sirops, sodas, miel), pas les fruits entiers.')
    ],
    revision: [
      qcm('r1', 'Quel est le risque d\'un excès de fructose pour le foie ?', ['La stéatose hépatique (foie gras)', 'Une hypoglycémie', 'Une carence en fer', 'Une acidose lactique'], 'Il favorise aussi l\'insulinorésistance.')
    ]
  },

  /* ================= GALACTOSE ================= */
  {
    id: 'bc-meta-glucides-2-13', fiche: FG, ficheTitre: FGT, titre: 'Le galactose devient glucose-6-P',
    classe: [
      E('Le <b>galactose</b>, c\'est un hexose issu de l\'hydrolyse du lactose, le sucre du lait. Peu abondant chez l\'adulte, c\'est un apport glucidique important chez le nouveau-né, dont l\'alimentation est exclusivement lactée. Dans le foie, il est transformé en <b>glucose-6-phosphate</b>.', [T('Le métabolisme du galactose'), EQ('Lactose → (hydrolyse) → galactose + glucose')]),
      E('Son trajet : il est absorbé dans l\'intestin par le même mécanisme que le glucose, transporté librement jusqu\'aux hépatocytes, et y entre par un transporteur spécifique, dans le sens du gradient.', [LG('absorption comme le glucose → sang → foie (transporteur spécifique)', 'noir', { taille: 'petit' })]),
      E('Dans l\'hépatocyte, 4 réactions.', [EFF(), T('Les 4 réactions (foie)'), RANG([
        { titre: '① Galactose + ATP → Galactose-1-P + ADP', sous: 'galactokinase · 1 ATP · irréversible', c: 'rouge' },
        { titre: '② Galactose-1-P + UDP-glucose → UDP-galactose + Glucose-1-P', sous: 'galactose-1-P uridyl transférase · échange de l\'UDP', c: 'bleu' },
        { titre: '③ Glucose-1-P ⇄ Glucose-6-P', sous: 'phosphoglucomutase · le phosphate passe du C1 au C6 · réversible', c: 'vert' },
        { titre: '④ UDP-galactose ⇄ UDP-glucose', sous: 'UDP-galactose 4-épimérase · épimérisation · réversible', c: 'noir' }
      ])]),
      E('Un : la <b>galactokinase</b> phosphoryle le galactose, avec 1 ATP. Irréversible.', [MONTRE(1)]),
      E('Deux : un <b>échange</b>. Le groupe uridyl, l\'UDP, quitte le glucose de l\'UDP-glucose pour se fixer sur le galactose. En échange, le glucose récupère le phosphate : on obtient du glucose-1-P. Enzyme : la galactose-1-P uridyl transférase.', [MONTRE(2)]),
      E('Trois : la <b>phosphoglucomutase</b> fait passer le phosphate du carbone 1 au carbone 6 : glucose-6-P, qui part en glycolyse ou en glycogénèse dans le foie. Note de ta fiche : ton cours parle d\'« épimérase » et de « glucogénèse » ici ; les noms exacts sont phosphoglucomutase et glycogenèse.', [MONTRE(3), POST('Réaction 3 : phosphoglucomutase (pas « épimérase ») → glucose-6-P → glycolyse ou glycogenèse', 'piege')]),
      E('Quatre : l\'<b>épimérase</b> recycle l\'UDP-galactose formé à l\'étape 2 en UDP-glucose. Il resservira à l\'étape 2, ou fera du glycogène : c\'est la forme active du glucose.', [MONTRE(4), POST('Galactokinase (1 ATP) → transférase (échange de l\'UDP) → phosphoglucomutase → glucose-6-P · épimérase : UDP-galactose ⇄ UDP-glucose (recyclé)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'En quoi le galactose est-il transformé dans le foie ?', ['En glucose-6-phosphate', 'En fructose', 'En lactate', 'En lactose'], 'Il rejoint ensuite la glycolyse ou la glycogenèse.'),
      ordre('a2', 'Remets les enzymes du galactose dans l\'ordre.', ['Galactokinase', 'Galactose-1-P uridyl transférase', 'Phosphoglucomutase'], 'Puis l\'épimérase recycle l\'UDP-galactose.')
    ],
    revision: [
      qcm('r1', 'Quel est le rôle de l\'UDP-galactose 4-épimérase ?', ['Recycler l\'UDP-galactose en UDP-glucose', 'Phosphoryler le galactose', 'Hydrolyser le lactose', 'Déplacer le phosphate du C1 au C6'], 'L\'UDP-glucose resservira ou fera du glycogène.'),
      vf('r2', 'Le galactose est un apport glucidique important chez le nouveau-né.', true, 'Vrai : son alimentation est exclusivement lactée.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-14', fiche: FG, ficheTitre: FGT, titre: 'La glande mammaire et la galactosémie',
    classe: [
      E('Pendant la lactation, le chemin est <b>inverse</b> : la glande mammaire fabrique du galactose à partir du glucose, pour produire le lactose du lait. L\'épimérase fonctionne dans l\'autre sens, UDP-glucose vers UDP-galactose, puis la <b>lactose synthase</b> assemble le lactose.', [T('La glande mammaire'), EQ('UDP-glucose → (épimérase) → UDP-galactose'), EQ('UDP-galactose + glucose → lactose + UDP (lactose synthase)')]),
      E('Les pathologies : si une enzyme de la voie manque, par une maladie génétique, le galactose ne peut plus être transformé en glucose. Il s\'accumule : c\'est la <b>galactosémie</b>. Le galactose est élevé dans le sang, et dans les urines, c\'est la galactosurie.', [EFF(), T('La galactosémie'), LG('enzyme manquante (génétique) → galactose accumulé dans le sang (et les urines)', 'rouge')], 'reflechit'),
      E('Deux déficits possibles.', [RANG([
        { titre: 'Déficit 1 : galactokinase', x: 'galactose accumulé → voie de secours (aldose réductase, NADPH) → galactitol dans le cristallin → CATARACTE', c: 'bleu' },
        { titre: 'Déficit 2 : uridyl transférase (plus grave)', x: 'en plus, le galactose-1-P s\'accumule : toxique pour le foie, les reins, le cerveau (retard mental) + cataracte', c: 'rouge' }
      ]), MONTRE(1), MONTRE(2)]),
      E('La prise en charge diététique : <b>éviction à vie</b> du galactose, donc du lactose : lait, produits laitiers, et lactose ajouté, charcuteries, plats préparés, certains médicaments. Il faut lire les étiquettes. Chez le nourrisson : arrêt du lait maternel et lait infantile sans lactose, par exemple à base de soja.', [EFF(), T('La prise en charge'), LG('ÉVICTION À VIE du lactose (lait, laitages, lactose ajouté, médicaments)', 'rouge', { taille: 'grand' }), SOUL(), LG('nourrisson : arrêt du lait maternel, lait infantile sans lactose (soja)', 'bleu')]),
      E('Pourquoi c\'est possible ? Parce que l\'épimérase fabrique l\'UDP-galactose à partir du glucose. Le corps a donc toujours le galactose nécessaire à ses glycoprotéines et glycolipides, sans en manger.', [LG('l\'épimérase fabrique le galactose nécessaire à partir du glucose', 'vert')]),
      E('Ne confonds pas avec l\'intolérance au lactose !', [GRI(['', 'Intolérance au lactose', 'Galactosémie'], [['Ce qui manque', 'la lactase (intestin)', 'une enzyme du foie'], ['Conséquence', 'lactose non digéré → ballonnements, diarrhée', 'galactose toxique → cataracte, foie, cerveau'], ['Régime', 'réduction ; yaourts et fromages affinés souvent tolérés', 'éviction stricte et à vie']], true), POST('Galactosémie : déficit en galactokinase ou en uridyl transférase (plus grave) · galactitol → cataracte · éviction à vie du lactose', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel est le traitement de la galactosémie ?', ['L\'éviction stricte et à vie du lactose', 'Une simple réduction des laitages', 'Des comprimés de lactase', 'Aucun traitement'], 'Lait, produits laitiers et lactose ajouté.'),
      qcm('a2', 'Quel déficit de la galactosémie est le plus grave ?', ['Le déficit en uridyl transférase', 'Le déficit en galactokinase', 'Le déficit en lactase', 'Le déficit en épimérase'], 'Le galactose-1-P s\'accumule aussi : toxique pour le foie, les reins, le cerveau.')
    ],
    revision: [
      paires('r1', 'Intolérance au lactose ou galactosémie ?', [['Intolérance au lactose', 'Manque de lactase · réduction, yaourts souvent tolérés'], ['Galactosémie', 'Enzyme du foie déficiente · éviction stricte et à vie']], 'Ne pas les confondre !'),
      qcm('r2', 'Quelle molécule, formée par la voie de secours, provoque la cataracte ?', ['Le galactitol', 'Le sorbitol', 'Le lactate', 'L\'UDP-glucose'], 'Il s\'accumule dans le cristallin.'),
      qcm('r3', 'Quelle enzyme de la glande mammaire assemble le lactose ?', ['La lactose synthase', 'La lactase', 'La galactokinase', 'L\'épimérase'], 'UDP-galactose + glucose → lactose + UDP.')
    ]
  },

  /* ================= RÉCAPS ================= */
  {
    id: 'bc-meta-glucides-2-15', fiche: FR, ficheTitre: FRT, titre: 'Récap : les 38 ATP d\'un glucose',
    classe: [
      E('Récap : un glucose complètement dégradé. La clé : la plupart des étapes ne fabriquent pas directement de l\'ATP. Elles fabriquent des NADH,H⁺ et des FADH₂, comme des <b>tickets</b>. Ces tickets sont échangés contre de l\'ATP à la fin, par la chaîne respiratoire et l\'ATP synthase.', [T('Les 38 ATP d\'un glucose'), LG('NADH,H⁺ et FADH₂ = des « tickets » échangés contre de l\'ATP à la fin', 'bleu', { taille: 'grand' })]),
      E('On compte les tickets étape par étape.', [EFF(), T('Le compteur d\'ATP'), GRI(['Étape (lieu)', 'Ce qu\'elle donne', 'ATP'], [
        ['Glycolyse (cytosol)', '− 2 + 4 = 2 ATP directs · 2 NADH,H⁺ × 3 = 6', '8'],
        ['Pyruvate → acétyl-CoA (matrice)', '2 NADH,H⁺ (1 par pyruvate) × 3', '6'],
        ['Krebs × 2 (matrice)', '6 NADH,H⁺ × 3 = 18 · 2 FADH₂ × 2 = 4 · 2 GTP = 2', '24'],
        ['TOTAL', '8 + 6 + 24', '38']
      ]), MONTRE(1)]),
      E('La glycolyse, dans le cytosol : 2 ATP directs et 2 NADH,H⁺, soit 8 ATP.', [MONTRE(1)]),
      E('Le passage du pyruvate à l\'acétyl-CoA, dans la matrice : 1 NADH,H⁺ par pyruvate, donc 2, soit 6 ATP.', [MONTRE(2)]),
      E('Le cycle de Krebs, deux tours : 6 NADH,H⁺, 2 FADH₂ et 2 GTP, soit 24 ATP. Total : 8 + 6 + 24 = <b>38 ATP</b>.', [MONTRE(3), MONTRE(4)]),
      E('Autre façon de compter : 10 NADH,H⁺ fois 3, plus 2 FADH₂ fois 2, plus 2 ATP de la glycolyse, plus 2 GTP. Ça fait aussi 38 !', [EQ('10 NADH,H⁺ × 3 + 2 FADH₂ × 2 + 2 ATP + 2 GTP = 38 ATP'), POST('1 NADH,H⁺ → 3 ATP · 1 FADH₂ → 2 ATP · 1 GTP = 1 ATP · total : 38 ATP par glucose', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Combien de NADH,H⁺ au total pour un glucose complètement dégradé ?', ['10', '2', '6', '38'], '2 (glycolyse) + 2 (pyruvate dH) + 6 (Krebs × 2).'),
      ordre('a2', 'Remets les étapes de la dégradation du glucose dans l\'ordre.', ['Glycolyse (cytosol)', 'Pyruvate → acétyl-CoA', 'Cycle de Krebs', 'Chaîne respiratoire + ATP synthase'], 'Les tickets sont échangés à la fin.')
    ],
    revision: [
      paires('r1', 'Relie chaque étape à son nombre d\'ATP.', [['Glycolyse (aérobie)', '8 ATP'], ['Pyruvate → acétyl-CoA', '6 ATP'], ['Krebs (2 tours)', '24 ATP']], '8 + 6 + 24 = 38.')
    ]
  },
  {
    id: 'bc-meta-glucides-2-16', fiche: FR, ficheTitre: FRT, titre: 'Récap : la carte du métabolisme des glucides',
    classe: [
      E('Le récap final. La <b>glycolyse</b> est l\'autoroute centrale : elle transforme le glucose en pyruvate pour produire de l\'ATP. Les trois autres voies sont branchées dessus : le fructose et le galactose y <b>entrent</b>, la voie des pentoses phosphates en <b>sort</b> pour fabriquer autre chose que de l\'énergie.', [T('La carte d\'ensemble'), LG('glycolyse = l\'AUTOROUTE centrale', 'rouge', { taille: 'grand' })]),
      E('Les voies, une par une.', [RANG([
        { titre: 'Glycolyse · cytosol, toutes les cellules', x: 'glucose → 2 pyruvates · produire de l\'ATP (+ 2 net) · enzyme clé : PFK-1', c: 'rouge' },
        { titre: 'Pentoses phosphates · sort au glucose-6-P', x: 'NADPH,H⁺ (construire, protéger) + ribose-5-P (nucléotides) · 0 ATP · enzyme clé : G6PD', c: 'vert' },
        { titre: 'Fructose · entre après la PFK-1', x: 'foie : → DHAP + G3P · très rapide, sans insuline · fructokinase · + 2 ATP net', c: 'bleu' },
        { titre: 'Galactose · entre au glucose-6-P', x: 'foie : → glucose-6-P → glycolyse ou glycogène · galactokinase', c: 'noir' }
      ]), MONTRE(1)]),
      E('La <b>glycolyse</b>, dans le cytosol de toutes les cellules : le glucose devient 2 pyruvates pour produire de l\'ATP.', [MONTRE(1)]),
      E('Les <b>pentoses phosphates</b> : une partie du glucose-6-P fait un détour pour fabriquer du NADPH,H⁺ et du ribose-5-P, sans ATP.', [MONTRE(2)]),
      E('Le <b>fructose</b> : dans le foie, il devient DHAP et glycéraldéhyde-3-P, et rejoint la glycolyse après la PFK-1, très vite et sans insuline. Le <b>galactose</b> : dans le foie, il devient glucose-6-P, qui part en glycolyse ou en glycogène.', [MONTRE(3), MONTRE(4)]),
      E('Et à la sortie : sans O₂, le pyruvate devient lactate, 2 ATP par glucose ; avec O₂, il va dans la mitochondrie, 8 ATP pour la glycolyse, et 38 avec le cycle de Krebs. Bravo, tu as terminé le métabolisme des glucides !', [EFF(), POST('Glycolyse (PFK-1, + 2 ATP) · pentoses (G6PD, 0 ATP) · fructose (fructokinase, après la PFK-1) · galactose (galactokinase → glucose-6-P) · sans O₂ : lactate · avec O₂ : 8 puis 38 ATP', 'cle')], 'content')
    ],
    questions: [
      paires('a1', 'Relie chaque voie à son enzyme à retenir.', [['Glycolyse', 'PFK-1'], ['Pentoses phosphates', 'G6PD'], ['Fructose', 'Fructokinase'], ['Galactose', 'Galactokinase']], 'Le tableau récap de ta fiche.'),
      qcm('a2', 'Quelle voie « sort » de la glycolyse pour fabriquer autre chose que de l\'énergie ?', ['La voie des pentoses phosphates', 'Le métabolisme du fructose', 'Le métabolisme du galactose', 'La fermentation lactique'], 'Elle part du glucose-6-P.')
    ],
    revision: [
      paires('r1', 'Où chaque sucre rejoint-il la glycolyse ?', [['Fructose (foie)', 'Après la PFK-1 (DHAP + G3P)'], ['Galactose', 'Au glucose-6-P'], ['Fructose (tissu adipeux)', 'Au fructose-6-P']], 'La carte d\'ensemble.')
    ]
  }

  ]
};
