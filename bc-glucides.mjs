// Cours : Les glucides, structure (Sciences › Biochimie › Biochimie structurale)
// Source : fiches « Les glucides » 1 à 5.
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F1 = 'Fiche 1', F1T = 'Classification et structure des oses';
const F2 = 'Fiche 2', F2T = 'Les oligosides';
const F3 = 'Fiche 3', F3T = 'Les polyholosides';
const F4 = 'Fiche 4', F4T = 'Dérivés des oses et hétérosides';
const F5 = 'Fiche 5', F5T = 'Propriétés physico-chimiques des oses';

export default {
  id: 'bc-glucides',
  titre: 'Les glucides : structure',
  persos: {},
  carte: {
    depart: 'Les glucides sont notre principale source d\'énergie. Mais du glucose à la cellulose, comment s\'y retrouver ?',
    etapes: [
      { titre: 'Les oses', verbe: 'Je classe', question: 'Comment classer les glucides ? Qu\'est-ce qu\'un ose ?', mots: 'oses / osides · aldose / cétose · Fischer, série D · cycle, α / β' },
      { titre: 'Les oligosides', verbe: 'J\'assemble', question: 'Comment deux oses se lient-ils ?', mots: 'liaison osidique · réducteur · saccharose, lactose, maltose…' },
      { titre: 'Les polyholosides', verbe: 'J\'empile', question: 'Réserves et fibres', mots: 'amidon, glycogène · cellulose · effets des fibres' },
      { titre: 'Dérivés et hétérosides', verbe: 'Je modifie', question: 'Des oses transformés ou liés à autre chose', mots: 'acide glucuronique · polyols · osamines · anthocyanes' },
      { titre: 'Propriétés', verbe: 'J\'observe', question: 'Comment se comportent les oses ?', mots: 'isomères · pouvoir rotatoire · Fehling · estérification' }
    ],
    arrivee: 'Tu sais reconnaître un glucide, prévoir s\'il est digéré, et expliquer ses propriétés en cuisine et dans le corps.'
  },
  lecons: [

  /* ================= FICHE 1 ================= */
  {
    id: 'bc-glucides-01', fiche: F1, ficheTitre: F1T, titre: 'Les glucides : rôles et origine',
    classe: [
      E('On attaque les <b>glucides</b> ! D\'abord, à quoi servent-ils ? Ils ont quatre grands rôles.', [T('Les rôles des glucides'), RANG([
        { titre: 'Énergie', x: 'principale source d\'énergie · 1 g = 4 kcal (17 kJ) · 40 à 55 % de l\'apport énergétique', c: 'rouge' },
        { titre: 'Réserve', x: 'glycogène du foie et des muscles squelettiques, en quantité limitée · au-delà → graisses', c: 'bleu' },
        { titre: 'Structure', x: 'glycolipides, glycoprotéines des membranes (reconnaissance, groupes ABO) · matrice du tissu conjonctif', c: 'vert' },
        { titre: 'Acides nucléiques', x: 'ribose (ARN), désoxyribose (ADN) · aussi dans l\'ATP, le NAD⁺, le FAD, le coenzyme A', c: 'noir' }
      ])]),
      E('Un : l\'<b>énergie</b>. C\'est la principale source d\'énergie de l\'organisme. <b>1 gramme = 4 kcal</b>, soit 17 kJ. Ils doivent représenter <b>40 à 55 %</b> de l\'apport énergétique.', [MONTRE(1)]),
      E('Deux : la <b>réserve</b>. Ils sont stockés en glycogène dans le foie et les muscles squelettiques, mais en quantité limitée. Au-delà, l\'excès est transformé en graisses.', [MONTRE(2)]),
      E('Trois : la <b>structure</b>. Dans les membranes, liés à des lipides ou des protéines : ça sert à la reconnaissance cellulaire et aux groupes sanguins ABO. Quatre : les <b>acides nucléiques</b>, avec le ribose de l\'ARN et le désoxyribose de l\'ADN.', [MONTRE(3), MONTRE(4)]),
      E('D\'où viennent-ils ? <b>Exogènes</b> : de l\'alimentation, surtout d\'origine végétale. Exception : le nourrisson, dont le seul glucide est le lactose du lait. <b>Endogènes</b> : fabriqués par le corps, à partir du glycogène, c\'est la glycogénolyse, ou de molécules non glucidiques, c\'est la néoglucogenèse.', [EFF(), T('D\'où viennent-ils ?'), LG('EXOGÈNES : alimentation, surtout végétale (sauf nourrisson : lactose du lait)', 'bleu', { puce: '•' }), LG('ENDOGÈNES : glycogénolyse (depuis le glycogène) ou néoglucogenèse (depuis du non-glucidique)', 'vert', { puce: '•' })]),
      E('Retiens les chiffres clés : 4 kcal par gramme, 40 à 55 % de l\'apport.', [POST('Glucides : 4 kcal/g (17 kJ) · 40-55 % de l\'apport énergétique · réserve = glycogène (foie, muscles)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Combien de kcal apporte 1 g de glucides ?', ['4 kcal', '9 kcal', '7 kcal', '2 kcal'], '4 kcal, soit 17 kJ.'),
      qcm('a2', 'Quelle part de l\'apport énergétique les glucides doivent-ils représenter ?', ['40 à 55 %', '10 à 20 %', '60 à 80 %', '20 à 35 %'], 'C\'est la principale source d\'énergie.')
    ],
    revision: [
      paires('r1', 'Relie chaque mot à sa définition.', [['Exogène', 'Apporté par l\'alimentation'], ['Glycogénolyse', 'Glucose fabriqué depuis le glycogène'], ['Néoglucogenèse', 'Glucose fabriqué depuis du non-glucidique']], 'Origines des glucides.'),
      qcm('r2', 'Où les glucides sont-ils stockés sous forme de glycogène ?', ['Dans le foie et les muscles squelettiques', 'Dans le tissu adipeux', 'Dans le sang', 'Dans les os'], 'En quantité limitée : au-delà, l\'excès devient des graisses.')
    ]
  },
  {
    id: 'bc-glucides-02', fiche: F1, ficheTitre: F1T, titre: 'La classification des glucides',
    classe: [
      E('Comment classer les glucides ? Tout dépend du <b>nombre</b> et de la <b>nature</b> des oses. Je te construis l\'arbre étape par étape.', [T('La classification')]),
      E('Premier niveau : les <b>oses</b>, une seule unité, un monomère, comme le glucose, le fructose, le galactose. Et les <b>osides</b>, au moins 2 oses liés.', [LG('OSES : 1 seule unité (glucose, fructose, galactose…)', 'bleu', { puce: '1' }), LG('OSIDES : au moins 2 oses liés', 'bleu', { puce: '2' })]),
      E('Les osides se divisent en deux. Les <b>holosides</b> : uniquement des oses. Les <b>hétérosides</b> : des oses plus une partie non glucidique, l\'<b>aglycone</b>.', [LG('HOLOSIDES : uniquement des oses', 'vert', { puce: '→', decale: true }), LG('HÉTÉROSIDES : oses + partie non glucidique (aglycone)', 'vert', { puce: '→', decale: true })]),
      E('Les holosides se divisent encore. Les <b>oligosides</b> : 2 à 10 oses, surtout 2, les diholosides, comme le saccharose, le lactose, le maltose. Et les <b>polyholosides</b> : plus de 10 oses, jusqu\'à des milliers.', [EFF(), T('Les holosides'), RANG([
        { titre: 'Oligosides', sous: '2 à 10 oses (surtout 2 : diholosides)', x: 'saccharose, lactose, maltose', c: 'bleu' },
        { titre: 'Polyholosides', sous: 'plus de 10 oses (jusqu\'à des milliers)', x: 'homoglycannes : un seul type d\'ose (amidon, glycogène, cellulose) · hétéroglycannes : plusieurs oses (hémicelluloses)', c: 'vert' }
      ]), MONTRE(1)]),
      E('Et les polyholosides sont des <b>homoglycannes</b>, un seul type d\'ose, comme l\'amidon, le glycogène, la cellulose ; ou des <b>hétéroglycannes</b>, plusieurs oses différents, comme les hémicelluloses.', [MONTRE(2), POST('Oses (1) / osides (≥ 2) → holosides (que des oses) ou hétérosides (+ aglycone) → oligosides (2-10) ou polyholosides (> 10 : homo- ou hétéroglycannes)', 'cle')], 'content')
    ],
    questions: [
      ordre('a1', 'Du plus petit au plus grand : range ces glucides.', ['Ose (1 unité)', 'Diholoside (2 oses)', 'Oligoside (jusqu\'à 10 oses)', 'Polyholoside (plus de 10 oses)'], 'Oses → oligosides → polyholosides.'),
      qcm('a2', 'Un hétéroside, c\'est…', ['des oses + une partie non glucidique (aglycone)', 'uniquement des oses', 'un seul ose', 'un polymère de glucose'], 'Holoside = que des oses ; hétéroside = oses + aglycone.')
    ],
    revision: [
      paires('r1', 'Relie chaque glucide à sa catégorie.', [['Glucose', 'Ose'], ['Saccharose', 'Diholoside'], ['Amidon', 'Homoglycanne'], ['Hémicelluloses', 'Hétéroglycanne']], 'La classification biochimique.'),
      qcm('r2', 'Combien d\'oses dans un oligoside ?', ['2 à 10', '1', 'Plus de 10', 'Plus de 1 000'], 'Surtout 2 : les diholosides.')
    ]
  },
  {
    id: 'bc-glucides-03', fiche: F1, ficheTitre: F1T, titre: 'Diététique ou biochimie : le piège du vocabulaire',
    classe: [
      E('Attention, piège ! Ce sont les mêmes molécules, mais avec <b>deux vocabulaires</b> selon qu\'on parle diététique ou biochimie.', [T('Diététique ou biochimie ?')]),
      E('En diététique, on parle de glucides <b>simples</b> : oses et diholosides, digérés et absorbés vite. De glucides <b>complexes</b> : amidon, glycogène, à digestion plus lente. Et à part, des <b>fibres</b>, non digérées.', [LG('Diététique : SIMPLES (oses + diholosides) · COMPLEXES (amidon, glycogène) · FIBRES', 'bleu')]),
      E('Les correspondances : monosaccharide = ose ; disaccharide = diholoside ; polysaccharide = polyholoside = polyoside.', [GRI(['Mot courant', 'Mot de biochimie'], [['monosaccharide', 'ose'], ['disaccharide', 'diholoside'], ['polysaccharide', 'polyholoside = polyoside']], true)]),
      E('La seule différence : les diholosides, comme le saccharose et le lactose, sont « simples » en diététique, mais ce sont des <b>osides</b> en biochimie. Et un mot à éviter dans une copie de biochimie : « le sucre », au singulier, c\'est le saccharose ; « les sucres », ce sont les oses et les disaccharides.', [POST('Diholosides : « simples » en diététique, mais OSIDES en biochimie · évite « sucre » en copie de biochimie', 'piege')], 'reflechit'),
      E('Autre idée reçue : simple ou complexe ne suffit pas à prévoir la glycémie. Les oses sont absorbés dans l\'intestin grêle : plus un aliment reste longtemps dans l\'estomac, plus le pic de glycémie est faible. Ce séjour est allongé par le volume du repas, les protéines, les fibres et les lipides.', [EFF(), T('Et la glycémie ?'), LG('séjour long dans l\'estomac → pic de glycémie plus faible', 'bleu'), LG('allongé par : volume du repas, protéines, fibres, lipides', 'vert', { puce: '+' })]),
      E('Exemple : le pain blanc, de l\'amidon, fait presque autant monter la glycémie que le saccharose. Les lentilles, amidon plus protéines plus fibres, la font monter bien plus doucement.', [POST('Pain blanc ≈ saccharose · lentilles (amidon + protéines + fibres) : montée bien plus douce', 'astuce')], 'content')
    ],
    questions: [
      vf('a1', 'En biochimie, le saccharose est un ose, puisqu\'il est « simple ».', false, 'Faux : c\'est un diholoside, donc un oside. « Simple » est un terme de diététique.'),
      qcm('a2', 'Qu\'est-ce qui diminue le pic de glycémie après un repas ?', ['Un séjour plus long dans l\'estomac (protéines, fibres, lipides, volume)', 'Manger du pain blanc seul', 'Boire un soda', 'Manger plus vite'], 'Les oses sont absorbés dans l\'intestin grêle : plus tard ils y arrivent, plus le pic est faible.')
    ],
    revision: [
      qcm('r1', 'Un disaccharide, en biochimie, s\'appelle…', ['un diholoside', 'un ose', 'un polyoside', 'un hétéroside'], 'Monosaccharide = ose ; polysaccharide = polyholoside.')
    ]
  },
  {
    id: 'bc-glucides-04', fiche: F1, ficheTitre: F1T, titre: 'Les oses',
    classe: [
      E('Zoom sur l\'unité de base : l\'<b>ose</b>. C\'est la plus petite unité des glucides : une seule chaîne de carbones, non ramifiée, de 3 à 6 carbones.', [T('Qu\'est-ce qu\'un ose ?'), LG('1 chaîne de C non ramifiée (3 à 6 C)', 'bleu', { puce: '•' })]),
      E('Cette chaîne porte une <b>fonction carbonyle</b>, aldéhyde ou cétone, et <b>plusieurs fonctions alcool</b>, des –OH.', [LG('+ 1 fonction CARBONYLE : aldéhyde ou cétone', 'bleu', { puce: '•' }), LG('+ plusieurs fonctions ALCOOL (–OH)', 'bleu', { puce: '•' })]),
      E('On les nomme selon le nombre de carbones : triose 3, pentose 5, hexose 6. Et selon la fonction carbonyle : <b>aldose</b> si c\'est un aldéhyde, <b>cétose</b> si c\'est une cétone.', [LG('nom = nb de C (triose 3, pentose 5, hexose 6) + carbonyle (ALDOSE ou CÉTOSE)', 'rouge'), SOUL()]),
      E('Les oses à connaître.', [EFF(), T('Les oses à connaître'), GRI(['Ose', 'Nb de C', 'Fonction'], [['Glycéraldéhyde', '3 (triose)', 'aldose'], ['Dihydroxyacétone', '3 (triose)', 'cétose'], ['Ribose', '5 (pentose)', 'aldose'], ['Glucose', '6 (hexose)', 'aldose'], ['Galactose', '6 (hexose)', 'aldose'], ['Fructose', '6 (hexose)', 'cétose']]), MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4), MONTRE(5), MONTRE(6)]),
      E('Glucose, galactose et fructose sont des <b>isomères</b> : même formule brute, C₆H₁₂O₆, atomes rangés différemment. Et les deux trioses sont des intermédiaires de la glycolyse, sous forme phosphorylée.', [POST('Ose = 1 chaîne de C + 1 carbonyle (aldose ou cétose) + plusieurs –OH · glucose, galactose, fructose : C₆H₁₂O₆', 'cle'), POST('Seul le fructose (et le dihydroxyacétone) sont des cétoses : tous les autres sont des aldoses', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'Le fructose est…', ['un hexose cétose', 'un hexose aldose', 'un pentose aldose', 'un triose cétose'], '6 C, fonction cétone.'),
      qcm('a2', 'Le ribose est…', ['un pentose aldose', 'un hexose cétose', 'un triose aldose', 'un diholoside'], '5 C, fonction aldéhyde.')
    ],
    revision: [
      paires('r1', 'Aldose ou cétose ?', [['Glucose', 'Aldose'], ['Fructose', 'Cétose'], ['Dihydroxyacétone', 'Cétose (triose)'], ['Glycéraldéhyde', 'Aldose (triose)']], 'Aldéhyde → aldose ; cétone → cétose.'),
      vf('r2', 'Un ose est une chaîne de carbones ramifiée.', false, 'Faux : une seule chaîne NON ramifiée, de 3 à 6 C.')
    ]
  },
  {
    id: 'bc-glucides-05', fiche: F1, ficheTitre: F1T, titre: 'Fischer, série D et cyclisation',
    classe: [
      E('Pour dessiner un ose, on utilise la <b>représentation de Fischer</b>. La chaîne de carbones est verticale, le C1 en haut, la fonction carbonyle le plus haut possible. Chaque croisement est un carbone, avec ses –OH à droite ou à gauche. En bas, l\'alcool primaire, CH₂OH.', [T('La représentation de Fischer'), LG('chaîne verticale, C1 en haut (carbonyle le plus haut)', 'bleu', { puce: '•' }), LG('chaque croisement = 1 C, –OH à droite ou à gauche', 'bleu', { puce: '•' }), LG('en bas : alcool primaire CH₂OH', 'bleu', { puce: '•' })]),
      E('Série D ou série L ? On regarde le –OH de l\'<b>avant-dernier carbone</b>, le dernier carbone asymétrique. À droite : série <b>D</b>. À gauche : série <b>L</b>. D et L sont l\'image l\'une de l\'autre dans un miroir : des énantiomères.', [LG('–OH de l\'AVANT-DERNIER C : à droite → D · à gauche → L', 'rouge', { taille: 'grand' }), SOUL(), POST('Les oses de notre alimentation et de notre organisme sont tous de la série D', 'cle')]),
      E('Maintenant, la <b>cyclisation</b>. Dans l\'eau, donc dans les liquides du corps, les pentoses et hexoses se referment en cycle : c\'est leur forme la plus stable.', [EFF(), T('La cyclisation')]),
      E('La fonction carbonyle réagit avec une fonction alcool de la même molécule, par un pont oxygène. Pour le glucose : le C1 avec le –OH du C5. Le C1 porte alors un nouveau –OH : la fonction <b>hémiacétal</b>.', [EQ('Glucose : C1 + –OH du C5 → cycle · nouveau –OH sur C1 (hémiacétal)')]),
      E('Deux formes de cycles : le <b>pyrane</b>, 6 côtés, 5 C et 1 O, comme le glucopyranose ; le <b>furane</b>, 5 côtés, 4 C et 1 O, comme le fructofuranose et le ribofuranose.', [GRI(['Cycle', 'Forme', 'Exemples'], [['Pyrane', '6 côtés (5 C + 1 O)', 'glucopyranose, galactopyranose'], ['Furane', '5 côtés (4 C + 1 O)', 'fructofuranose, ribofuranose']], true)]),
      E('La cyclisation crée deux formes, les <b>anomères</b>, selon la position du –OH du C1, le carbone anomérique. Dans la représentation de Haworth, le cycle à plat : –OH en bas, c\'est <b>α</b> ; en haut, c\'est <b>β</b>. Règle de passage : un –OH à droite en Fischer passe en dessous du cycle.', [EFF(), T('Haworth et anomérie'), LG('–OH du C1 (carbone anomérique) : en BAS → α · en HAUT → β', 'rouge', { taille: 'grand' }), LG('Fischer → Haworth : –OH à droite → en dessous du cycle', 'noir', { taille: 'petit' })]),
      E('Pourquoi c\'est important ? α ou β change la liaison entre deux oses. C\'est ce qui distingue l\'amidon, digéré, de la cellulose, non digérée. On le verra avec les osides !', [POST('Fischer : –OH de l\'avant-dernier C à droite → D (tous nos oses) · cycle : pyrane (6) / furane (5) · –OH du C1 en bas α, en haut β', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'En Fischer, comment sait-on qu\'un ose est de la série D ?', ['Le –OH de l\'avant-dernier carbone est à droite', 'Le –OH du C1 est à droite', 'Le –OH du C2 est à gauche', 'Il a 6 carbones'], 'Avant-dernier carbone (dernier C asymétrique) : droite → D.'),
      qcm('a2', 'Après cyclisation, le –OH du C1 est en bas (Haworth). C\'est la forme…', ['α', 'β', 'D', 'L'], 'En bas → α ; en haut → β.')
    ],
    revision: [
      vf('r1', 'Les oses de notre alimentation sont tous de la série L.', false, 'Faux : ils sont tous de la série D.'),
      paires('r2', 'Relie chaque cycle à sa forme.', [['Pyrane', '6 côtés (5 C + 1 O)'], ['Furane', '5 côtés (4 C + 1 O)']], 'Glucopyranose ; fructofuranose.'),
      qcm('r3', 'Pour le glucose, quels atomes se lient lors de la cyclisation ?', ['Le C1 avec le –OH du C5', 'Le C1 avec le –OH du C6', 'Le C2 avec le –OH du C4', 'Le C6 avec le C1'], 'Pont oxygène C1–C5 : cycle pyrane.')
    ]
  },

  /* ================= FICHE 2 ================= */
  {
    id: 'bc-glucides-06', fiche: F2, ficheTitre: F2T, titre: 'La liaison osidique',
    classe: [
      E('Rappel : les oligosides, ce sont 2 à 10 oses. Les plus courants en ont 2 : les diholosides. Comment ces oses sont-ils reliés ? Par la <b>liaison osidique</b>.', [T('La liaison osidique')]),
      E('Le –OH du <b>carbone anomérique</b> d\'un ose, C1 pour un aldose, C2 pour un cétose, réagit avec un –OH d\'un autre ose. Il part une molécule d\'eau : c\'est une <b>condensation</b>. L\'inverse, qui coupe la liaison avec de l\'eau, c\'est l\'<b>hydrolyse</b>, la digestion.', [EQ('Ose 1–OH (anomérique) + HO–Ose 2 ⇄ Ose 1–O–Ose 2 + H₂O'), LG('→ condensation · ← hydrolyse (digestion)', 'bleu', { taille: 'petit' })]),
      E('Il reste un seul oxygène, qui fait le pont entre deux carbones, C–O–C. Les oses doivent être sous forme cyclique. Et la liaison est α ou β selon la position du –OH anomérique engagé : c\'est fixé une fois pour toutes.', [LG('pont C–O–C · oses cycliques · liaison α ou β (fixée)', 'bleu', { puce: '•' })]),
      E('Réducteur ou non ? Le carbone anomérique libre, avec son –OH hémiacétal, donne aux oses leur <b>pouvoir réducteur</b> : test de Fehling positif. S\'il est engagé dans la liaison, il le perd.', [EFF(), T('Réducteur ou non réducteur ?'), RANG([
        { titre: 'Au moins 1 carbone anomérique LIBRE', x: '→ diholoside RÉDUCTEUR (Fehling +)', c: 'vert' },
        { titre: 'Les 2 carbones anomériques ENGAGÉS', x: '→ NON réducteur (cas du saccharose)', c: 'rouge' }
      ]), MONTRE(1), MONTRE(2)]),
      E('Et il existe trois types de liaisons. O-osidique : entre deux oses, les diholosides. Hétérosidique : avec une molécule non glucidique, l\'aglycone. N-osidique : avec une base azotée, par son azote, comme l\'adénosine, ribose plus adénine.', [GRI(['Liaison', 'Entre un ose et…', 'Exemple'], [['O-osidique', 'un autre ose', 'diholosides'], ['Hétérosidique', 'une aglycone (non glucidique)', 'hétérosides'], ['N-osidique', 'une base azotée (par son N)', 'adénosine = ribose + adénine']], true), POST('Liaison osidique : –OH anomérique + –OH d\'un autre ose → C–O–C + H₂O · 1 C anomérique libre → réducteur', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel –OH engage obligatoirement le premier ose dans une liaison osidique ?', ['Celui de son carbone anomérique', 'Celui de son dernier carbone', 'N\'importe lequel', 'Celui du C6'], 'C1 pour un aldose, C2 pour un cétose.'),
      vf('a2', 'Un diholoside dont les deux carbones anomériques sont engagés est non réducteur.', true, 'Vrai : c\'est le cas du saccharose.')
    ],
    revision: [
      paires('r1', 'Relie chaque liaison à ce qu\'elle relie.', [['O-osidique', 'Deux oses'], ['Hétérosidique', 'Un ose et une aglycone'], ['N-osidique', 'Un ose et une base azotée']], 'Ex. adénosine = ribose + adénine (N-osidique).'),
      qcm('r2', 'Qu\'est-ce qui donne aux oses leur pouvoir réducteur ?', ['Le –OH hémiacétal du carbone anomérique libre', 'Leurs nombreux –OH', 'Leur chaîne de carbones', 'Leur cycle'], 'Engagé dans une liaison, il est perdu.'),
      vf('r3', 'La formation d\'une liaison osidique est une condensation : elle libère une molécule d\'eau.', true, 'Vrai. L\'inverse, avec de l\'eau, est l\'hydrolyse.')
    ]
  },
  {
    id: 'bc-glucides-07', fiche: F2, ficheTitre: F2T, titre: 'Lire le nom d\'un diholoside',
    classe: [
      E('Les noms des diholosides font peur, mais ils se lisent comme une phrase. Exemple : le saccharose.', [T('Lire le nom d\'un diholoside'), EQ('α-D-glucopyranosyl (1→2) β-D-fructofuranoside')]),
      E('« gluco », « fructo » : ce sont les <b>oses</b>. « D » : la <b>série</b>. « α » ou « β » : l\'orientation du –OH anomérique.', [LG('gluco, fructo… = les oses', 'bleu', { puce: '•' }), LG('D = la série', 'bleu', { puce: '•' }), LG('α / β = orientation du –OH anomérique', 'bleu', { puce: '•' })]),
      E('« pyran » ou « furan » : cycle à 6 ou à 5 côtés. « (1→2) » : les carbones reliés, ici le C1 du premier ose et le C2 du second.', [LG('pyran / furan = cycle à 6 / à 5 côtés', 'bleu', { puce: '•' }), LG('(1→2) = carbones reliés (C1 du 1ᵉʳ, C2 du 2ᵉ)', 'bleu', { puce: '•' })]),
      E('Et les terminaisons sont la clé ! « -osyl » : cet ose engage son carbone anomérique. Si le nom finit en « <b>-oside</b> », le deuxième aussi : le diholoside est <b>non réducteur</b>. S\'il finit en « <b>-ose</b> », le deuxième est libre : il est <b>réducteur</b>.', [EFF(), T('Les terminaisons'), RANG([
        { titre: '-osyl', x: 'cet ose engage son carbone anomérique', c: 'noir' },
        { titre: 'fin en -oside', x: 'le 2ᵉ aussi → NON réducteur', c: 'rouge' },
        { titre: 'fin en -ose', x: 'le 2ᵉ est libre → RÉDUCTEUR', c: 'vert' }
      ]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E('Donc le saccharose, qui finit en « fructofuranoside », est non réducteur. Le lactose, β-D-galactopyranosyl (1→4) D-glucopyranose, finit en « -ose » : réducteur.', [POST('Fin en -OSIDE → non réducteur · fin en -OSE → réducteur', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'Un diholoside dont le nom finit en « -oside » est…', ['non réducteur', 'réducteur', 'un polyholoside', 'un hétéroside'], 'Les deux carbones anomériques sont engagés.'),
      qcm('a2', 'Dans « (1→4) », que signifient les chiffres ?', ['Les carbones reliés par la liaison', 'Le nombre d\'oses', 'Le nombre de liaisons', 'La série'], 'C1 du premier ose, C4 du second.')
    ],
    revision: [
      vf('r1', 'Le lactose (… D-glucopyranose) est réducteur.', true, 'Vrai : son nom finit en -ose, le glucose garde son carbone anomérique libre.')
    ]
  },
  {
    id: 'bc-glucides-08', fiche: F2, ficheTitre: F2T, titre: 'Les 5 diholosides à connaître',
    classe: [
      E('Voici les 5 diholosides à connaître. Ils ont tous la même formule brute, C₁₂H₂₂O₁₁ : ce sont des isomères. Ils sont hydrolysés par des enzymes de la bordure en brosse de l\'intestin grêle.', [T('Les 5 diholosides'), GRI(['Diholoside', 'Oses', 'Liaison', 'Réducteur ?', 'Enzyme', 'Origine'], [
        ['Saccharose', 'glucose + fructose', 'α1→β2', 'Non', 'saccharase (invertase)', 'canne, betterave, fruits'],
        ['Lactose', 'galactose + glucose', 'β1→4', 'Oui', 'lactase', 'lait'],
        ['Maltose', 'glucose + glucose', 'α1→4', 'Oui', 'maltase', 'digestion de l\'amidon (chaînes)'],
        ['Isomaltose', 'glucose + glucose', 'α1→6', 'Oui', 'isomaltase', 'digestion de l\'amidon (ramifications)'],
        ['Cellobiose', 'glucose + glucose', 'β1→4', 'Oui', 'pas chez l\'humain', 'motif de la cellulose']
      ])]),
      E('Le <b>saccharose</b> : glucose plus fructose, liaison α1→β2. C\'est le sucre de table. Ses deux carbones anomériques sont engagés : <b>non réducteur</b>. Enzyme : la saccharase, ou invertase.', [MONTRE(1)]),
      E('Le <b>lactose</b> : galactose plus glucose, liaison β1→4. Le glucide du lait, seule source glucidique du nourrisson. Le glucose garde son carbone anomérique libre : réducteur. Enzyme : la lactase.', [MONTRE(2)]),
      E('Le <b>maltose</b>, glucose plus glucose en α1→4, et l\'<b>isomaltose</b>, en α1→6. Rarement libres dans les aliments : ils viennent de la digestion de l\'amidon, les chaînes pour le maltose, les ramifications pour l\'isomaltose, car les amylases ne coupent que les α1→4.', [MONTRE(3), MONTRE(4)]),
      E('Et le <b>cellobiose</b> : glucose plus glucose, mais en <b>β1→4</b>. C\'est le motif de la cellulose. Pas de cellulase chez l\'humain : la cellulose n\'est pas digérée, c\'est une fibre.', [MONTRE(5)]),
      E('Le piège : maltose et cellobiose sont faits des mêmes oses, reliés entre les mêmes carbones. Seule la liaison change, α ou β… et nos enzymes ne savent couper que l\'α. C\'est la même différence qu\'entre l\'amidon et la cellulose.', [EFF(), POST('Maltose α1→4 (digéré) vs cellobiose β1→4 (non digéré) : nos enzymes ne coupent que l\'α', 'piege'), POST('Saccharose glc-fru α1→β2 (non réducteur) · lactose gal-glc β1→4 · maltose α1→4 · isomaltose α1→6 · cellobiose β1→4 · enzymes de la bordure en brosse ; pas de cellulase', 'cle')], 'content')
    ],
    questions: [
      paires('a1', 'Relie chaque diholoside à ses oses.', [['Saccharose', 'Glucose + fructose'], ['Lactose', 'Galactose + glucose'], ['Maltose', 'Glucose + glucose (α1→4)']], 'Les diholosides à connaître.'),
      qcm('a2', 'Lequel de ces diholosides est NON réducteur ?', ['Le saccharose', 'Le lactose', 'Le maltose', 'L\'isomaltose'], 'Ses deux carbones anomériques sont engagés (α1→β2).')
    ],
    revision: [
      paires('r1', 'Relie chaque diholoside à sa liaison.', [['Saccharose', 'α1→β2'], ['Lactose', 'β1→4'], ['Maltose', 'α1→4'], ['Isomaltose', 'α1→6'], ['Cellobiose', 'β1→4 (glc-glc)']], 'α ou β change tout pour la digestion.'),
      qcm('r2', 'Pourquoi le cellobiose n\'est-il pas digéré par l\'humain ?', ['Sa liaison est β, et nous n\'avons pas de cellulase', 'Il contient du fructose', 'Il est trop gros', 'Il est non réducteur'], 'Nos enzymes ne coupent que les liaisons α.'),
      paires('r3', 'Relie chaque diholoside à son enzyme.', [['Saccharose', 'Saccharase'], ['Lactose', 'Lactase'], ['Maltose', 'Maltase'], ['Isomaltose', 'Isomaltase']], 'Enzymes de la bordure en brosse. Pas de cellulase chez l\'humain.')
    ]
  },
  {
    id: 'bc-glucides-09', fiche: F2, ficheTitre: F2T, titre: 'Les diholosides dans l\'alimentation',
    classe: [
      E('Les diholosides en cuisine et en diététique. D\'abord, le <b>pouvoir sucrant</b>, PS. Le saccharose sert de référence : PS = 1.', [T('Le pouvoir sucrant'), GRI(['Molécule', 'Pouvoir sucrant'], [['Saccharose (référence)', '1'], ['Fructose', '1,3'], ['Glucose', '0,7'], ['Maltose', '0,4'], ['Lactose', '0,2'], ['Aspartam', '≈ 200'], ['Saccharine', '400']], true)]),
      E('Le fructose sucre plus que le saccharose, 1,3 ; le glucose moins, 0,7 ; et le lactose très peu, 0,2. Les édulcorants, eux, sucrent des centaines de fois plus.', [POST('PS : saccharose 1 · fructose 1,3 · glucose 0,7 · lactose 0,2', 'astuce')]),
      E('Le <b>sucre inverti</b> : l\'hydrolyse du saccharose, par l\'invertase ou par un acide, donne un mélange de glucose et de fructose à parts égales. Il sucre davantage, est plus soluble, cristallise moins, et aide à conserver confitures et sirops, car il reste moins d\'eau disponible pour les microbes. Le miel est un sucre inverti naturel : les abeilles ont une invertase.', [EFF(), T('Le sucre inverti'), EQ('Saccharose + H₂O → glucose + fructose (parts égales)'), LG('sucre plus · plus soluble · cristallise moins · conserve mieux', 'vert', { puce: '+' }), LG('le miel = sucre inverti naturel', 'bleu', { puce: '🍯' })]),
      E('Pourquoi « inverti » ? Parce que le pouvoir rotatoire de la solution s\'inverse, de +66,5° à environ −20°. On reverra ça dans la fiche des propriétés.', [LG('« inverti » : pouvoir rotatoire +66,5° → environ −20°', 'noir', { taille: 'petit' })]),
      E('L\'<b>intolérance au lactose</b> : la lactase, très active chez l\'enfant, diminue souvent avec l\'âge. Le lactose non hydrolysé reste dans l\'intestin : il attire l\'eau, d\'où une diarrhée osmotique ; et il est fermenté par le microbiote du côlon, d\'où gaz, ballonnements, douleurs. Attention, le lactose est aussi un ingrédient, biscuits, sauces, et un excipient de nombreux médicaments.', [EFF(), T('L\'intolérance au lactose'), LG('lactase ↓ avec l\'âge → lactose non hydrolysé', 'rouge'), LG('attire l\'eau → diarrhée osmotique', 'rouge', { puce: '→' }), LG('fermenté dans le côlon → gaz, ballonnements, douleurs', 'rouge', { puce: '→' })], 'reflechit'),
      E('Bonus : les légumineuses contiennent d\'autres oligosides, le raffinose, 3 oses, et le stachyose, 4 oses, que nous ne savons pas digérer. Ils sont fermentés dans le côlon, d\'où les flatulences.', [POST('Sucre inverti = glucose + fructose (miel) · raffinose, stachyose des légumineuses : non digérés → flatulences', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel glucide a le pouvoir sucrant le plus élevé ?', ['Le fructose (1,3)', 'Le saccharose (1)', 'Le glucose (0,7)', 'Le lactose (0,2)'], 'Parmi les glucides ; les édulcorants sucrent bien plus.'),
      qcm('a2', 'Le sucre inverti, c\'est…', ['un mélange de glucose et de fructose à parts égales', 'du saccharose pur', 'du lactose hydrolysé', 'un édulcorant'], 'Issu de l\'hydrolyse du saccharose. Le miel en est un.')
    ],
    revision: [
      qcm('r1', 'Pourquoi l\'intolérance au lactose provoque-t-elle une diarrhée ?', ['Le lactose non hydrolysé attire l\'eau dans l\'intestin (effet osmotique)', 'Le lactose est toxique', 'Le lactose détruit la muqueuse', 'Le lactose bloque l\'absorption de l\'eau par le côlon'], 'Et sa fermentation donne gaz et ballonnements.'),
      vf('r2', 'Le raffinose et le stachyose des légumineuses sont digérés dans l\'intestin grêle.', false, 'Faux : non digérés, ils sont fermentés dans le côlon (flatulences).'),
      paires('r3', 'Relie chaque molécule à son pouvoir sucrant.', [['Saccharose', '1'], ['Fructose', '1,3'], ['Glucose', '0,7'], ['Lactose', '0,2']], 'Le saccharose sert de référence.')
    ]
  },

  /* ================= FICHE 3 ================= */
  {
    id: 'bc-glucides-10', fiche: F3, ficheTitre: F3T, titre: 'Qu\'est-ce qu\'un polyholoside ?',
    classe: [
      E('Les <b>polyholosides</b>, aussi appelés polyosides, polysaccharides ou glycanes : ce sont des holosides de <b>plus de 10 oses</b>, souvent des centaines à des milliers, reliés par des liaisons osidiques.', [T('Les polyholosides'), LG('plus de 10 oses (souvent des centaines à des milliers)', 'bleu', { taille: 'grand' })]),
      E('Homoglycane : un seul type d\'ose, comme l\'amidon, le glycogène, la cellulose. Hétéroglycane : plusieurs oses différents, comme les hémicelluloses et les pectines.', [LG('HOMOGLYCANE : 1 type d\'ose (amidon, glycogène, cellulose)', 'bleu', { puce: '•' }), LG('HÉTÉROGLYCANE : plusieurs oses (hémicelluloses, pectines)', 'bleu', { puce: '•' })]),
      E('Et surtout, deux grandes familles à ne pas confondre.', [EFF(), T('Deux familles'), RANG([
        { titre: 'Polyosides de réserve (assimilables)', sous: 'digérés par nos enzymes', x: '→ glucose absorbé dans l\'intestin grêle · amidon (végétal), glycogène (animal)', c: 'vert' },
        { titre: 'Fibres alimentaires (glucides pariétaux)', sous: 'pas d\'enzyme humaine', x: '→ arrivent au côlon, fermentées en partie par le microbiote · cellulose, hémicelluloses, pectines…', c: 'rouge' }
      ]), MONTRE(1), MONTRE(2)]),
      E('Les polyosides de <b>réserve</b>, amidon et glycogène, sont digérés : on absorbe leur glucose. Les <b>fibres</b>, elles, ne le sont pas : elles arrivent au côlon, où le microbiote en fermente une partie.', [POST('Réserve (digérés) : amidon (végétal), glycogène (animal) · fibres : non digérées, fermentées dans le côlon', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Lequel de ces polyholosides est une fibre ?', ['La cellulose', 'L\'amidon', 'Le glycogène', 'L\'amylopectine'], 'Pas d\'enzyme humaine : elle arrive au côlon.'),
      vf('a2', 'Le glycogène est la réserve glucidique des végétaux.', false, 'Faux : c\'est celle des animaux. L\'amidon est la réserve des végétaux.')
    ],
    revision: [
      paires('r1', 'Réserve ou fibre ?', [['Amidon', 'Réserve végétale (digérée)'], ['Glycogène', 'Réserve animale (digérée)'], ['Cellulose', 'Fibre insoluble'], ['Pectines', 'Fibre soluble (gels)']], 'Réserves digérées, fibres fermentées dans le côlon.')
    ]
  },
  {
    id: 'bc-glucides-11', fiche: F3, ficheTitre: F3T, titre: 'Amidon et glycogène',
    classe: [
      E('Les deux polyosides de réserve sont faits de glucose. L\'<b>amidon</b> est un mélange de deux molécules : l\'amylose et l\'amylopectine. Je te les compare au glycogène.', [T('Amidon et glycogène'), GRI(['', 'Amylose', 'Amylopectine', 'Glycogène'], [
        ['Structure', 'linéaire, en hélice', 'ramifiée (en arbre)', 'très ramifiée, très compacte'],
        ['Liaisons', 'α1→4', 'α1→4 + α1→6', 'α1→4 + α1→6'],
        ['Ramification', 'aucune', 'tous les 20 à 30 glucoses', 'tous les 8 à 10 glucoses'],
        ['Taille', 'des centaines de glucoses', 'des milliers', 'des milliers'],
        ['Test à l\'iode', 'bleu (nuit)', 'rouge-violet', 'brun']
      ])]),
      E('L\'<b>amylose</b> : une longue chaîne linéaire, sans branche, en liaisons α1→4, enroulée en hélice. À l\'iode, elle donne un <b>bleu nuit</b>.', [MONTRE(1), MONTRE(2)]),
      E('L\'<b>amylopectine</b> : ramifiée, en arbre. Liaisons α1→4, plus des ramifications en α1→6, une tous les <b>20 à 30</b> glucoses. Iode : rouge-violet.', [MONTRE(3), MONTRE(4)]),
      E('L\'amidon, c\'est environ <b>20 % d\'amylose</b>, de 5 à 30 %, et <b>80 % d\'amylopectine</b>. C\'est la réserve des végétaux, en grains.', [MONTRE(5), POST('Amidon = amylose (≈ 20 %) + amylopectine (≈ 80 %) · réserve végétale', 'astuce')]),
      E('Le <b>glycogène</b> : comme l\'amylopectine, mais <b>beaucoup plus ramifié</b>, une branche tous les 8 à 10 glucoses, et très compact. C\'est la réserve des animaux, dans le foie et les muscles, en grains dans le cytosol. Iode : brun.', [EFF(), POST('Amylose : linéaire α1→4 (iode bleu) · amylopectine : α1→4 + α1→6 tous les 20-30 (rouge-violet) · glycogène : branché tous les 8-10 (brun), foie et muscles', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quelle molécule est linéaire, sans ramification ?', ['L\'amylose', 'L\'amylopectine', 'Le glycogène', 'Aucune'], 'Uniquement des liaisons α1→4.'),
      qcm('a2', 'Le glycogène a une ramification tous les…', ['8 à 10 glucoses', '20 à 30 glucoses', '100 glucoses', 'il n\'en a pas'], 'Plus ramifié que l\'amylopectine (20 à 30).')
    ],
    revision: [
      paires('r1', 'Relie chaque molécule à sa couleur avec l\'iode.', [['Amylose', 'Bleu nuit'], ['Amylopectine', 'Rouge-violet'], ['Glycogène', 'Brun']], 'Le test à l\'eau iodée.'),
      qcm('r2', 'Quelle est la composition approximative de l\'amidon ?', ['20 % amylose + 80 % amylopectine', '80 % amylose + 20 % amylopectine', '50 % / 50 %', '100 % amylose'], 'Environ 20 % d\'amylose (5 à 30 %).')
    ]
  },
  {
    id: 'bc-glucides-12', fiche: F3, ficheTitre: F3T, titre: 'L\'amidon et le glycogène dans l\'assiette',
    classe: [
      E('Où trouve-t-on l\'<b>amidon</b> ? Dans les céréales, blé, riz, maïs ; les tubercules, pomme de terre, manioc ; les légumineuses, lentilles, haricots ; et certains fruits, banane, châtaigne. C\'est la principale source de glucose de l\'alimentation.', [T('L\'amidon dans l\'assiette'), LG('céréales · tubercules · légumineuses · banane, châtaigne', 'bleu'), LG('= principale source de glucose de l\'alimentation', 'vert', { puce: '→' })]),
      E('La <b>cuisson</b> change tout. À froid, l\'amidon est insoluble ; il retient environ 40 % d\'eau. Chauffé dans l\'eau, à 70 à 80 °C, il gonfle et forme un liquide visqueux : l\'<b>empois</b>. C\'est la gélatinisation, ou empesage.', [EFF(), T('La cuisson'), LG('à froid : insoluble (retient ≈ 40 % d\'eau)', 'noir', { puce: '•' }), LG('chauffé dans l\'eau (70-80 °C) → gonfle → EMPOIS (gélatinisation)', 'bleu', { puce: '•' })]),
      E('La cuisson rend donc l\'amidon plus <b>digestible</b> : les amylases l\'attaquent plus facilement.', [LG('→ cuisson = amidon plus digestible', 'vert', { taille: 'grand' }), SOUL()]),
      E('Et la digestion : les amylases, salivaire et pancréatique, coupent les liaisons α1→4. Elles donnent surtout du maltose, et de l\'isomaltose pour les ramifications α1→6. Puis la maltase et l\'isomaltase de la bordure en brosse libèrent le glucose.', [EQ('Amidon → (amylases) → maltose + isomaltose → (maltase, isomaltase) → glucose')]),
      E('Et le <b>glycogène</b> dans l\'assiette ? Très peu : il disparaît pendant la maturation de la viande. On en trouve dans le foie, la viande de cheval non maturée, et certains mollusques, huîtres et moules.', [POST('Glycogène alimentaire : très peu (disparaît à la maturation) · foie, cheval non maturé, huîtres, moules', 'astuce')], 'content')
    ],
    questions: [
      vf('a1', 'La cuisson rend l\'amidon plus digestible.', true, 'Vrai : il gonfle (empois) et les amylases l\'attaquent plus facilement.'),
      qcm('a2', 'Quelles liaisons les amylases coupent-elles ?', ['α1→4', 'α1→6', 'β1→4', 'toutes les liaisons'], 'D\'où le maltose (α1→4) et l\'isomaltose (ramifications α1→6) restants.')
    ],
    revision: [
      qcm('r1', 'Comment s\'appelle le liquide visqueux formé par l\'amidon chauffé dans l\'eau ?', ['L\'empois', 'Le caramel', 'Le sirop', 'La dextrine'], 'C\'est la gélatinisation (empesage), vers 70-80 °C.'),
      qcm('r2', 'Pourquoi trouve-t-on très peu de glycogène dans la viande ?', ['Il disparaît pendant la maturation', 'Les animaux n\'en ont pas', 'Il est détruit par la congélation', 'Il est transformé en amidon'], 'On en trouve dans le foie, le cheval non maturé, huîtres et moules.')
    ]
  },
  {
    id: 'bc-glucides-13', fiche: F3, ficheTitre: F3T, titre: 'Les fibres alimentaires',
    classe: [
      E('Les <b>fibres alimentaires</b> : des constituants le plus souvent végétaux, <b>non hydrolysables</b> par nos enzymes. Ni coupées ni absorbées dans l\'intestin grêle, elles suivent le chyme jusqu\'au gros intestin, où le microbiote en dégrade une partie. Ce sont surtout les glucides de la paroi des cellules végétales : les glucides pariétaux.', [T('Les fibres alimentaires'), LG('non hydrolysables par nos enzymes → arrivent au côlon (microbiote)', 'rouge', { taille: 'grand' })]),
      E('Le piège : amidon ou cellulose ? Les deux sont faits uniquement de glucose. La seule différence est la liaison : α1→4 dans l\'amidon, β1→4 dans la cellulose. Nos amylases ne coupent que l\'α, et nous n\'avons pas de cellulase.', [POST('Amidon α1→4 (digéré) vs cellulose β1→4 (non digérée) : même glucose, liaison différente', 'piege')], 'reflechit'),
      E('Les principales fibres.', [EFF(), T('Les fibres'), GRI(['Fibre', 'Composition', 'Dans l\'eau', 'Où la trouver'], [
        ['Cellulose', 'homoglycane de glucose (jusqu\'à 10 000), linéaire, β1→4', 'insoluble, retient l\'eau', 'parois des végétaux : légumes, fruits, céréales complètes'],
        ['Hémicelluloses', 'hétéroglycanes (glucose, xylose, arabinose, ac. glucuronique…), 100-200 oses, ramifiées', 'plus ou moins soluble', 'son, céréales complètes, légumineuses'],
        ['Pectines', 'chaîne d\'acide galacturonique + oses greffés', 'très soluble, gels', 'fruits et légumes (pomme, agrumes)'],
        ['Lignine', 'NON glucidique (polymère phénolique)', 'très insoluble', 'son, légumes secs'],
        ['Gommes, mucilages, algues', 'gomme arabique, guar ; alginates, carraghénanes, agar', 'solubles, gélifiants', 'additifs texturants'],
        ['Inuline', 'polymère de fructose', 'soluble', 'artichaut, pissenlit'],
        ['Amidon résistant', 'amidon qui échappe aux amylases', '—', 'amidon cru (banane verte), légumineuses, pain rassis (rétrogradation)'],
        ['Chitine', 'comme la cellulose (β1→4), avec un groupe acétamide en C2', 'insoluble', 'animale : carapaces de crustacés et d\'insectes ; champignons']
      ]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E('La <b>cellulose</b>, insoluble, dans toutes les parois végétales. Les <b>hémicelluloses</b>, ramifiées, dans le son et les céréales complètes. Les <b>pectines</b>, très solubles, qui forment des gels, dans les fruits.', [MONTRE(4), MONTRE(5)]),
      E('Attention : la <b>lignine</b> est une fibre, mais <b>non glucidique</b>. Ensuite les gommes et mucilages, gélifiants de l\'industrie, et l\'<b>inuline</b>, polymère de fructose de l\'artichaut.', [MONTRE(6), MONTRE(7), MONTRE(8)]),
      E('Et deux fibres surprenantes : l\'<b>amidon résistant</b>, qui échappe aux amylases, comme dans la banane verte ou le pain rassis, c\'est la rétrogradation ; et la <b>chitine</b>, d\'origine animale, dans les carapaces de crustacés. En cuisine, les pectines faiblement méthylées gélifient avec du calcium, pour les confitures allégées ; hautement méthylées, avec du sucre en milieu acide, pour les confitures classiques.', [POST('Pectines faiblement méthylées : gel avec du calcium (allégé) · hautement méthylées : gel avec sucre + acide (confitures)', 'astuce')], 'content')
    ],
    questions: [
      qcm('a1', 'Quelle fibre n\'est PAS un glucide ?', ['La lignine', 'La cellulose', 'Les pectines', 'L\'inuline'], 'C\'est un polymère phénolique.'),
      qcm('a2', 'Qu\'est-ce qui distingue l\'amidon de la cellulose ?', ['La liaison : α1→4 pour l\'amidon, β1→4 pour la cellulose', 'L\'ose : glucose pour l\'un, fructose pour l\'autre', 'La taille uniquement', 'Rien'], 'Même glucose, liaison différente.')
    ],
    revision: [
      paires('r1', 'Relie chaque fibre à un aliment qui en contient.', [['Pectines', 'Pomme, agrumes'], ['Inuline', 'Artichaut'], ['Chitine', 'Carapace de crustacés'], ['Amidon résistant', 'Banane verte']], 'Les fibres du cours.'),
      vf('r2', 'L\'inuline est un polymère de glucose.', false, 'Faux : c\'est un polymère de fructose.')
    ]
  },
  {
    id: 'bc-glucides-14', fiche: F3, ficheTitre: F3T, titre: 'Les effets des fibres',
    classe: [
      E('Les fibres ont cinq grands effets. On les voit un par un.', [T('Les 5 effets des fibres'), RANG([
        { titre: '1 · Satiété', x: 'du volume sans énergie → densité énergétique ↓', c: 'vert' },
        { titre: '2 · Transit', x: 'le régulent · insolubles (cellulose, lignine) : retiennent l\'eau → contre la constipation', c: 'bleu' },
        { titre: '3 · Fermentation (côlon)', x: 'microbiote : ≈ 60 % de la cellulose, 80 % des hémicelluloses, toutes les pectines → acides gras volatils + gaz', c: 'rouge' },
        { titre: '4 · Glycémie', x: 'fibres gélifiantes : vidange gastrique ralentie → pic glycémique ↓ (diabétique)', c: 'vert' },
        { titre: '5 · Lipides', x: 'gênent les lipases, piègent cholestérol et sels biliaires → prévention cardiovasculaire', c: 'bleu' }
      ])]),
      E('Un : la <b>satiété</b>. Elles font du volume sans apporter d\'énergie : elles diminuent la densité énergétique.', [MONTRE(1)]),
      E('Deux : le <b>transit</b>. Elles le régulent : l\'accélèrent s\'il est lent, le ralentissent s\'il est trop rapide. Les fibres insolubles, cellulose, lignine, retiennent l\'eau et font du volume : contre la constipation.', [MONTRE(2)]),
      E('Trois : la <b>fermentation</b>. Le microbiote, 10⁹ à 10¹¹ bactéries par gramme, fermente environ 60 % de la cellulose, 80 % des hémicelluloses et toutes les pectines. Il produit des acides gras volatils, acétique, propionique, butyrique, énergie pour la muqueuse, et des gaz.', [MONTRE(3)]),
      E('Quatre : la <b>glycémie</b>. Les fibres gélifiantes, pectines et gommes, ralentissent la vidange de l\'estomac : l\'absorption des oses est étalée, le pic est plus faible. Intérêt chez le diabétique. Cinq : les <b>lipides</b>. Elles gênent les lipases et piègent le cholestérol et les sels biliaires : intérêt cardiovasculaire.', [MONTRE(4), MONTRE(5)]),
      E('En pratique : introduis les fibres <b>progressivement</b>, selon la tolérance de chacun, à cause des gaz et ballonnements, surtout avec les fibres très fermentées comme les pectines et les légumineuses.', [EFF(), POST('Fibres : introduire progressivement, selon la tolérance (gaz, ballonnements)', 'astuce'), POST('Effets des fibres : satiété · transit · fermentation · glycémie ↓ (pic) · lipides ↓ (cholestérol)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel type de fibres diminue le pic de glycémie ?', ['Les fibres gélifiantes (pectines, gommes)', 'La lignine', 'La chitine', 'Aucune fibre'], 'Elles ralentissent la vidange gastrique.'),
      vf('a2', 'La fermentation des fibres par le microbiote produit des acides gras volatils et des gaz.', true, 'Vrai : acétique, propionique, butyrique + gaz.')
    ],
    revision: [
      ordre('r1', 'Retrouve l\'ordre des 5 effets des fibres de ton cours.', ['Satiété', 'Transit', 'Fermentation', 'Glycémie', 'Lipides'], 'Satiété, transit, fermentation, glycémie, lipides.'),
      qcm('r2', 'Pourquoi conseille-t-on d\'introduire les fibres progressivement ?', ['À cause des gaz et ballonnements', 'Parce qu\'elles sont caloriques', 'Parce qu\'elles font monter la glycémie', 'Parce qu\'elles sont allergisantes'], 'Surtout les plus fermentées (pectines, légumineuses).')
    ]
  },

  /* ================= FICHE 4 ================= */
  {
    id: 'bc-glucides-15', fiche: F4, ficheTitre: F4T, titre: 'Les dérivés des oses',
    classe: [
      E('Ne pas confondre ! Un <b>dérivé d\'ose</b>, c\'est un ose <b>seul</b>, dont une fonction a été modifiée : oxydée, réduite ou remplacée. Pas de liaison osidique, pas d\'aglycone. Un <b>hétéroside</b>, c\'est un ou plusieurs oses reliés par une liaison osidique à une partie non glucidique, l\'aglycone.', [T('Dérivé d\'ose ou hétéroside ?'), RANG([
        { titre: 'Dérivé d\'ose', x: 'un ose SEUL, fonction modifiée · ex. acide glucuronique, sorbitol, désoxyribose, glucosamine', c: 'bleu' },
        { titre: 'Hétéroside', x: 'ose(s) + aglycone (= génine), par liaison osidique · ex. nucléosides, anthocyanes, saponines', c: 'vert' }
      ]), MONTRE(1), MONTRE(2)]),
      E('Les quatre familles de dérivés.', [EFF(), T('4 familles de dérivés'), GRI(['Famille', 'Modification', 'Exemples'], [
        ['Acides uroniques', 'l\'alcool primaire (C6) est oxydé en –COOH', 'acides glucuronique, galacturonique, iduronique'],
        ['Polyols', 'le C=O est réduit en –OH : que des alcools', 'glycérol, sorbitol, mannitol, xylitol, inositol…'],
        ['Désoxyoses', 'un –OH est remplacé par un H', '2-désoxyribose (perd le –OH du C2)'],
        ['Osamines', 'un –OH (en C2) est remplacé par –NH₂', 'glucosamine, galactosamine, N-acétylglucosamine']
      ])]),
      E('Les <b>acides uroniques</b> : l\'alcool primaire, en C6, est oxydé en –COOH. On les trouve dans le tissu conjonctif et les fibres, pectines et hémicelluloses.', [MONTRE(1)]),
      E('Les <b>polyols</b> : la fonction carbonyle est réduite en –OH, il ne reste que des alcools. Ce sont des édulcorants, et le glycérol est un carrefour métabolique.', [MONTRE(2)]),
      E('Les <b>désoxyoses</b> : un –OH remplacé par un H. Le 2-désoxyribose, c\'est le ribose qui a perdu le –OH de son C2 : le sucre de l\'ADN, alors que le ribose est dans l\'ARN. Il rend l\'ADN plus stable.', [MONTRE(3)]),
      E('Les <b>osamines</b> : le –OH du C2 remplacé par un –NH₂, comme la glucosamine. On les trouve dans le cartilage et le tissu conjonctif, et la N-acétylglucosamine forme la chitine.', [MONTRE(4), POST('Dérivé = ose modifié, seul · acide uronique : C6 → COOH · polyol : C=O → OH · désoxyribose : sans OH en C2 · osamine : OH du C2 → NH₂', 'cle')], 'content')
    ],
    questions: [
      paires('a1', 'Relie chaque famille de dérivés à sa modification.', [['Acide uronique', 'C6 oxydé en –COOH'], ['Polyol', 'C=O réduit en –OH'], ['Désoxyose', 'Un –OH remplacé par H'], ['Osamine', '–OH du C2 remplacé par –NH₂']], 'Les 4 familles de dérivés.'),
      vf('a2', 'Le désoxyribose est le sucre de l\'ARN.', false, 'Faux : c\'est le sucre de l\'ADN. Le ribose est dans l\'ARN.')
    ],
    revision: [
      qcm('r1', 'Un dérivé d\'ose, c\'est…', ['un ose seul dont une fonction a été modifiée', 'un ose lié à une aglycone', 'deux oses liés', 'un polymère d\'oses'], 'Pas de liaison osidique, pas d\'aglycone.')
    ]
  },
  {
    id: 'bc-glucides-16', fiche: F4, ficheTitre: F4T, titre: 'Acide glucuronique, polyols et acide phytique',
    classe: [
      E('Trois dérivés très utiles en nutrition. D\'abord l\'<b>acide glucuronique</b> et la <b>conjugaison hépatique</b>. Dans le foie, il est fixé sur des molécules peu solubles pour les rendre solubles dans l\'eau et faciliter leur élimination, par l\'urine ou la bile. C\'est un processus de détoxification.', [T('L\'acide glucuronique'), LG('foie : fixé sur des molécules peu solubles → solubles → éliminées (urine, bile)', 'bleu'), LG('ex. paracétamol, hormones stéroïdes, bilirubine', 'noir', { taille: 'petit' })]),
      E('Le saviez-vous ? Chez la plupart des animaux, l\'acide glucuronique sert aussi à fabriquer la vitamine C. Pas chez l\'humain : la vitamine C doit donc être apportée par l\'alimentation.', [POST('L\'humain ne fabrique pas de vitamine C : apport alimentaire obligatoire', 'astuce')]),
      E('Les <b>polyols</b> : glycérol, sorbitol des fruits comme la poire et la prune, mannitol des champignons, xylitol des chewing-gums, inositol des membranes. Leurs intérêts : un goût sucré mais moins caloriques, l\'érythritol presque zéro ; <b>non cariogènes</b> ; et un faible effet sur la glycémie. Le sorbitol est transformé en fructose sans insuline.', [EFF(), T('Les polyols'), LG('goût sucré, moins caloriques (érythritol ≈ 0) → « sans sucre »', 'vert', { puce: '+' }), LG('non cariogènes (xylitol, sorbitol)', 'vert', { puce: '+' }), LG('faible effet sur la glycémie (sorbitol → fructose sans insuline)', 'vert', { puce: '+' })]),
      E('Leur limite : mal absorbés, ils attirent l\'eau dans l\'intestin. À forte dose : ballonnements et diarrhée, un effet <b>laxatif</b>, avec une tolérance variable.', [LG('limite : mal absorbés → laxatifs à forte dose', 'rouge', { puce: '−' }), SOUL()], 'reflechit'),
      E('Et l\'<b>acide phytique</b> : c\'est l\'inositol avec 6 phosphates, la réserve de phosphore des plantes, dans l\'enveloppe des céréales complètes, les légumineuses, les graines et les noix. C\'est un <b>anti-nutriment</b> : il piège le calcium, le fer, le zinc et le magnésium en sels insolubles, qui ne sont pas absorbés. Risque de carences si l\'apport en minéraux est faible.', [EFF(), T('L\'acide phytique'), LG('inositol + 6 phosphates · céréales complètes, légumineuses, graines, noix', 'bleu'), LG('ANTI-NUTRIMENT : piège Ca, Fe, Zn, Mg → non absorbés', 'rouge', { taille: 'grand' }), SOUL()]),
      E('Le résumé :', [POST('Acide glucuronique : conjugaison hépatique (paracétamol, bilirubine…) · polyols : édulcorants peu caloriques, non cariogènes, laxatifs à forte dose · acide phytique : piège Ca, Fe, Zn, Mg', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'À quoi sert l\'acide glucuronique dans le foie ?', ['À rendre solubles des molécules pour les éliminer (conjugaison)', 'À stocker le glucose', 'À fabriquer la vitamine C chez l\'humain', 'À digérer les fibres'], 'Paracétamol, hormones stéroïdes, bilirubine…'),
      qcm('a2', 'Quel est l\'effet indésirable des polyols à forte dose ?', ['Un effet laxatif (ballonnements, diarrhée)', 'Des caries', 'Une hyperglycémie', 'Une prise de poids rapide'], 'Mal absorbés, ils attirent l\'eau dans l\'intestin.')
    ],
    revision: [
      qcm('r1', 'Quels minéraux l\'acide phytique piège-t-il ?', ['Calcium, fer, zinc, magnésium', 'Sodium et potassium', 'Iode et fluor', 'Aucun'], 'En sels insolubles, non absorbés : c\'est un anti-nutriment.'),
      vf('r2', 'Le xylitol et le sorbitol sont cariogènes.', false, 'Faux : les bactéries de la bouche ne les fermentent pas, ils sont non cariogènes.')
    ]
  },
  {
    id: 'bc-glucides-17', fiche: F4, ficheTitre: F4T, titre: 'Les hétérosides',
    classe: [
      E('Un <b>hétéroside</b> : une partie osidique, un ou plusieurs oses, plus une <b>aglycone</b>, ou génine, la partie non glucidique, très variée : stéroïde, pigment, base azotée… Le lien est une liaison osidique, qui peut être coupée par hydrolyse.', [T('Les hétérosides'), EQ('Hétéroside = ose(s) + aglycone (génine)')]),
      E('Rôle des deux parties : l\'ose rend la molécule <b>soluble</b> dans l\'eau ; l\'aglycone porte souvent l\'<b>effet biologique</b>. Petit point de vocabulaire : glycoside, c\'est le terme général, n\'importe quel ose ; glucoside, c\'est quand l\'ose est le glucose.', [LG('ose → solubilité · aglycone → effet biologique', 'bleu'), LG('glycoside (tout ose) ⊃ glucoside (glucose)', 'noir', { taille: 'petit' })]),
      E('Dans notre organisme : les <b>nucléosides</b>, ribose ou désoxyribose plus une base azotée, en liaison N-osidique, comme l\'adénosine de l\'ATP. Et les glycoprotéines et glycolipides des membranes : reconnaissance cellulaire, groupes ABO.', [LG('nucléosides (adénosine de l\'ATP) · glycoprotéines, glycolipides (ABO)', 'vert')]),
      E('Dans l\'alimentation et les plantes, quatre familles.', [EFF(), T('Hétérosides des plantes'), GRI(['Hétéroside', 'Où ?', 'Intérêt et effets'], [
        ['Anthocyanes (flavonoïdes)', 'fruits rouges, chou rouge, betterave, aubergine', 'pigments rouges, bleus, violets · antioxydants · autres effets étudiés, non démontrés'],
        ['Autres flavonoïdes', 'agrumes, pommes, baies, thé, vin rouge', 'antioxydants, anti-inflammatoires, moindre risque cardiovasculaire'],
        ['Saponines', 'légumineuses, quinoa, saponaire', 'moussent (sapo = savon) · goût amer (on rince le quinoa) · toxiques à forte dose'],
        ['Glycosides cardiotoniques (digitaliques)', 'digitale pourpre, muguet, laurier-rose', 'médicaments du cœur (insuffisance cardiaque) · marge très étroite → surveillance']
      ]), MONTRE(1), MONTRE(2)]),
      E('Les <b>anthocyanes</b>, des pigments antioxydants des fruits rouges. Des études suggèrent d\'autres effets, sur la tension, la vision, certains cancers : non démontrés à ce jour. Les <b>saponines</b> : une partie aime l\'eau, l\'autre non, donc elles moussent, sapo veut dire savon. Goût amer : c\'est pour ça qu\'on rince le quinoa.', [MONTRE(3)]),
      E('Les <b>digitaliques</b> de la digitale pourpre : des médicaments du cœur, qui augmentent la force de contraction. Mais la marge entre dose utile et dose toxique est très étroite : surveillance médicale. Note de ta fiche : l\'alliine de l\'ail, la sésamine du sésame et les xanthones ne sont <b>pas</b> des hétérosides, même si ton cours les classe là.', [MONTRE(4), POST('Hétérosides : nucléosides, glycoprotéines · anthocyanes (pigments antioxydants) · saponines (moussent) · digitaliques (cœur, toxiques)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Dans un hétéroside, quelle partie porte souvent l\'effet biologique ?', ['L\'aglycone', 'L\'ose', 'La liaison osidique', 'L\'eau'], 'L\'ose, lui, rend la molécule soluble.'),
      qcm('a2', 'Pourquoi rince-t-on le quinoa ?', ['Pour retirer ses saponines au goût amer', 'Pour retirer son amidon', 'Pour retirer ses anthocyanes', 'Pour le rendre plus sucré'], 'Les saponines moussent et sont amères.')
    ],
    revision: [
      paires('r1', 'Relie chaque hétéroside à son effet.', [['Anthocyanes', 'Pigments antioxydants'], ['Saponines', 'Moussent, goût amer'], ['Digitaliques', 'Médicaments du cœur']], 'Hétérosides des plantes.'),
      vf('r2', 'Glycoside et glucoside, c\'est exactement la même chose.', false, 'Faux : glycoside = terme général ; glucoside = quand l\'ose est le glucose.')
    ]
  },

  /* ================= FICHE 5 ================= */
  {
    id: 'bc-glucides-18', fiche: F5, ficheTitre: F5T, titre: 'Les isomères des oses',
    classe: [
      E('Les oses ont beaucoup d\'isomères. Commençons par le <b>carbone asymétrique</b>, noté C* : un carbone lié à 4 atomes ou groupes différents. Une molécule avec un C* n\'est pas superposable à son image dans un miroir, comme la main droite et la main gauche : elle est <b>chirale</b>.', [T('Le carbone asymétrique C*'), LG('C* = carbone lié à 4 groupes DIFFÉRENTS → molécule chirale', 'bleu', { taille: 'grand' })]),
      E('Combien de stéréo-isomères ? <b>2ⁿ</b> pour n carbones asymétriques. Le glucose, en forme linéaire, a 4 C*, du C2 au C5 : 2⁴ = 16 stéréo-isomères, 8 de la série D et 8 de la série L.', [EQ('2ⁿ stéréo-isomères · glucose : 4 C* → 2⁴ = 16 (8 D + 8 L)')]),
      E('Les types d\'isomères.', [EFF(), T('Les types d\'isomères'), GRI(['Type', 'Définition', 'Exemple'], [
        ['Isomères', 'même formule brute, structure différente', 'glucose / fructose (aldose / cétose)'],
        ['Énantiomères', 'images dans un miroir : TOUS les C* inversés', 'D-glucose / L-glucose'],
        ['Épimères', 'diffèrent par UN SEUL C*', 'glucose / galactose (C4) · glucose / mannose (C2)'],
        ['Anomères', 'diffèrent par le carbone anomérique (après cyclisation)', 'α-glucose / β-glucose']
      ]), MONTRE(1)]),
      E('Les <b>énantiomères</b> : images dans un miroir, tous les C* inversés, comme le D-glucose et le L-glucose. Chaque ose n\'a qu\'un seul énantiomère.', [MONTRE(2)]),
      E('Les <b>épimères</b> : ils diffèrent par un <b>seul</b> C*. Le glucose et le galactose, épimères en C4 ; le glucose et le mannose, épimères en C2. Et les <b>anomères</b>, α et β, qui diffèrent par le carbone anomérique.', [MONTRE(3), MONTRE(4)]),
      E('Le piège : α/β n\'a rien à voir avec D/L ! D/L, c\'est le –OH de l\'avant-dernier carbone en Fischer. α/β, c\'est le –OH du carbone anomérique en Haworth. L\'amidon, α, et la cellulose, β, sont faits tous les deux de D-glucose.', [EFF(), POST('α/β (C anomérique, Haworth) ≠ D/L (avant-dernier C, Fischer)', 'piege'), POST('Énantiomères (miroir) · épimères (1 C* : glc/gal C4, glc/man C2) · anomères (α/β) · 2ⁿ stéréo-isomères', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Le glucose et le galactose sont…', ['des épimères en C4', 'des énantiomères', 'des anomères', 'des épimères en C2'], 'Ils diffèrent par un seul C*, le C4.'),
      qcm('a2', 'Combien de stéréo-isomères pour 4 carbones asymétriques ?', ['16', '8', '4', '32'], '2⁴ = 16 (8 D + 8 L).')
    ],
    revision: [
      paires('r1', 'Relie chaque paire au type d\'isomérie.', [['D-glucose / L-glucose', 'Énantiomères'], ['Glucose / mannose', 'Épimères (C2)'], ['α-glucose / β-glucose', 'Anomères'], ['Glucose / fructose', 'Isomères (aldose / cétose)']], 'Les isomères des oses.'),
      vf('r2', 'α et β, c\'est la même chose que D et L.', false, 'Faux : α/β = –OH du carbone anomérique ; D/L = –OH de l\'avant-dernier carbone.')
    ]
  },
  {
    id: 'bc-glucides-19', fiche: F5, ficheTitre: F5T, titre: 'Le pouvoir rotatoire et la mutarotation',
    classe: [
      E('Grâce à leurs C*, les oses en solution font tourner le plan de la lumière polarisée : c\'est le <b>pouvoir rotatoire</b>. On le mesure avec un polarimètre, ce qui permet d\'identifier un ose et de le doser : l\'angle est proportionnel à la concentration.', [T('Le pouvoir rotatoire'), GRI(['Ose', 'Pouvoir rotatoire', 'Il est…'], [['Glucose', '+52,5° (vers la droite)', 'dextrogyre'], ['Fructose', '−92° (vers la gauche)', 'lévogyre'], ['Saccharose', '+66,5°', 'dextrogyre']], true)]),
      E('Le glucose tourne vers la droite, +52,5° : il est <b>dextrogyre</b>. Le fructose, vers la gauche, −92° : il est <b>lévogyre</b>.', [LG('glucose +52,5° dextrogyre · fructose −92° lévogyre', 'bleu', { taille: 'grand' })]),
      E('Le piège : D ne veut pas dire « dextrogyre » ! La lettre D ou L se lit sur la formule, en Fischer. Le signe + ou − se mesure au polarimètre. Les deux ne sont pas liés : le D-fructose est lévogyre. Par contre, deux énantiomères ont des pouvoirs rotatoires opposés.', [POST('D ≠ dextrogyre : le D-fructose est lévogyre (−92°)', 'piege')], 'reflechit'),
      E('Le lien avec le sucre inverti : le saccharose, +66,5°, hydrolysé, donne glucose plus fructose. Le fructose l\'emporte : la solution passe à environ −20°. Le sens de rotation s\'est inversé, d\'où le nom.', [EQ('Saccharose (+66,5°) → glucose + fructose (≈ −20°) : « inverti »')]),
      E('Dernière notion : la <b>mutarotation</b>. En solution, les anomères α et β se transforment l\'un en l\'autre, en passant par la forme ouverte, jusqu\'à un équilibre : environ 36 % d\'α, 64 % de β, et moins de 0,1 % de forme linéaire. Une solution de glucose contient donc surtout la forme β.', [EFF(), T('La mutarotation'), EQ('α (≈ 36 %) ⇄ forme ouverte (< 0,1 %) ⇄ β (≈ 64 %)'), POST('Glucose +52,5° (dextrogyre) · fructose −92° (lévogyre) · mutarotation α 36 % / β 64 %', 'cle')], 'content')
    ],
    questions: [
      vf('a1', 'Le D-fructose est dextrogyre, puisqu\'il est de la série D.', false, 'Faux : D et dextrogyre ne sont pas liés. Le D-fructose est lévogyre (−92°).'),
      qcm('a2', 'À l\'équilibre (mutarotation), une solution de glucose contient surtout…', ['la forme β (≈ 64 %)', 'la forme α (≈ 64 %)', 'la forme linéaire', 'autant de chaque forme'], 'α ≈ 36 %, β ≈ 64 %, linéaire < 0,1 %.')
    ],
    revision: [
      paires('r1', 'Relie chaque ose à son pouvoir rotatoire.', [['Glucose', '+52,5°'], ['Fructose', '−92°'], ['Saccharose', '+66,5°']], 'Dextrogyre (+) ou lévogyre (−).'),
      qcm('r2', 'Pourquoi parle-t-on de sucre « inverti » ?', ['Parce que le pouvoir rotatoire de la solution s\'inverse', 'Parce que le goût s\'inverse', 'Parce que la couleur change', 'Parce que le fructose devient du glucose'], '+66,5° → environ −20°.')
    ]
  },
  {
    id: 'bc-glucides-20', fiche: F5, ficheTitre: F5T, titre: 'Solubilité et chaleur',
    classe: [
      E('Les oses sont <b>très solubles</b> dans l\'eau : leurs nombreux –OH et leur carbonyle font des liaisons hydrogène avec l\'eau. Dans 100 g d\'eau à 20 °C, on peut dissoudre 107 g de glucose et 375 g de fructose. La solubilité augmente avec la température. Les diholosides aussi sont solubles, sauf le lactose, peu soluble.', [T('Très solubles dans l\'eau'), LG('–OH + carbonyle → liaisons H avec l\'eau', 'bleu', { puce: '•' }), LG('100 g d\'eau à 20 °C : 107 g de glucose · 375 g de fructose', 'bleu', { puce: '•' }), LG('sauf le lactose, peu soluble', 'rouge', { puce: '!' })]),
      E('Conséquence en physiologie : le glucose voyage dissous dans le plasma, qui est à 90 % de l\'eau. Mais il n\'est pas liposoluble : il ne traverse pas seul la membrane. Il lui faut des transporteurs, les <b>GLUT</b>.', [LG('pas liposoluble → ne traverse pas seul la membrane → transporteurs GLUT', 'vert', { taille: 'grand' }), SOUL()]),
      E('Conséquence en alimentation : les confitures et sirops, très concentrés en sucres, rendent l\'eau indisponible, par pression osmotique : pas de bactéries, peu de levures et moisissures.', [LG('confitures, sirops : eau indisponible → conservation', 'bleu', { puce: '🍓' })]),
      E('Ils sont aussi <b>sensibles à la chaleur</b>. Chauffés seuls, les sucres se dégradent et brunissent : c\'est la <b>caramélisation</b>. Et chauffés avec des acides aminés, c\'est la <b>réaction de Maillard</b> : la croûte du pain, les biscuits, la viande grillée. Elle donne couleur et goût.', [EFF(), T('Sensibles à la chaleur'), RANG([
        { titre: 'Caramélisation', x: 'sucres chauffés SEULS → se dégradent et brunissent', c: 'rouge' },
        { titre: 'Réaction de Maillard', x: 'sucres + ACIDES AMINÉS à la cuisson → couleur et goût (croûte du pain, biscuits, viande grillée)', c: 'bleu' }
      ]), MONTRE(1), MONTRE(2)]),
      E('Retiens la différence : caramel, les sucres seuls ; Maillard, sucres plus acides aminés.', [POST('Très solubles (–OH), pas liposolubles → GLUT · chaleur : caramel (sucres seuls), Maillard (+ acides aminés)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Pourquoi le glucose a-t-il besoin de transporteurs GLUT pour entrer dans les cellules ?', ['Il n\'est pas liposoluble et ne traverse pas seul la membrane', 'Il est trop insoluble dans l\'eau', 'Il est chargé positivement', 'Il est trop petit'], 'Très hydrosoluble, mais pas liposoluble.'),
      paires('a2', 'Caramel ou Maillard ?', [['Sucres chauffés seuls', 'Caramélisation'], ['Sucres + acides aminés', 'Réaction de Maillard']], 'Maillard : croûte du pain, viande grillée.')
    ],
    revision: [
      qcm('r1', 'Quel diholoside est peu soluble dans l\'eau ?', ['Le lactose', 'Le saccharose', 'Le maltose', 'Aucun'], 'Les autres diholosides sont solubles.')
    ]
  },
  {
    id: 'bc-glucides-21', fiche: F5, ficheTitre: F5T, titre: 'Le pouvoir réducteur et les tests',
    classe: [
      E('D\'où vient le <b>pouvoir réducteur</b> des oses ? Du groupement <b>hémiacétal libre</b>, le –OH du carbone anomérique. Il peut être oxydé : en s\'oxydant, l\'ose réduit d\'autres molécules, par exemple des sels de cuivre en milieu alcalin et à chaud. L\'ose est donc un réducteur.', [T('Le pouvoir réducteur'), LG('hémiacétal libre (–OH du C anomérique) → l\'ose s\'oxyde et RÉDUIT d\'autres molécules', 'bleu')]),
      E('Un aldose oxydé donne un acide aldonique : le glucose donne l\'acide gluconique. Et si le carbone anomérique est engagé dans une liaison osidique, le pouvoir réducteur est perdu : le saccharose ne réagit pas, il faut d\'abord l\'hydrolyser.', [LG('aldose oxydé → acide aldonique (glucose → acide gluconique)', 'bleu', { puce: '•' }), LG('C anomérique engagé → plus réducteur (saccharose)', 'rouge', { puce: '•' })]),
      E('Le test de la <b>liqueur de Fehling</b> : elle est bleue, avec du Cu²⁺. Avec un ose réducteur, en milieu alcalin et à chaud, le cuivre est réduit : précipité <b>rouge brique</b>, Cu₂O. L\'ose, lui, est oxydé. Vocabulaire : Fehling est un oxydant.', [EFF(), T('Les tests'), EQ('Fehling (Cu²⁺ bleu) + ose réducteur → chaud → Cu₂O rouge brique')]),
      E('Les trois tests à connaître.', [GRI(['Test', 'Détecte', 'Résultat positif', 'Usage'], [
        ['Liqueur de Fehling', 'les oses réducteurs', 'bleu → précipité rouge brique (à chaud)', 'mise en évidence (qualitatif)'],
        ['DNS', 'les oses réducteurs', 'jaune → rouge (plus il y a de sucre, plus c\'est rouge)', 'dosage par colorimétrie (labo)'],
        ['Eau iodée', 'l\'amidon (pas les oses)', 'bleu (amylose), rouge-violet (amylopectine), brun (glycogène)', 'mise en évidence de l\'amidon']
      ]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E('À l\'inverse, la fonction carbonyle d\'un ose peut être <b>réduite</b> en –OH : on obtient un polyol, nom en « -itol ». Exemple : glucose → sorbitol. Et attention : la glycémie, elle, se dose par une méthode enzymatique, pas au DNS.', [POST('Hémiacétal libre → réducteur : Fehling rouge brique, DNS · saccharose non réducteur · réduction du C=O → polyol (-itol)', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Quel test permet de doser les oses réducteurs par colorimétrie ?', ['Le DNS', 'L\'eau iodée', 'La liqueur de Fehling', 'Le DNPH'], 'Jaune → rouge : plus il y a de sucre, plus c\'est rouge.'),
      vf('a2', 'Le saccharose donne un test de Fehling positif.', false, 'Faux : ses carbones anomériques sont engagés, il est non réducteur.')
    ],
    revision: [
      qcm('r1', 'Que détecte l\'eau iodée ?', ['L\'amidon (et le glycogène)', 'Les oses réducteurs', 'Les protéines', 'Le saccharose'], 'Bleu, rouge-violet ou brun selon la molécule.'),
      qcm('r2', 'Dans le test de Fehling, qu\'arrive-t-il au cuivre ?', ['Il est réduit (Cu²⁺ → Cu₂O rouge brique)', 'Il est oxydé', 'Il disparaît', 'Il reste bleu'], 'L\'ose est oxydé, le cuivre réduit.')
    ]
  },
  {
    id: 'bc-glucides-22', fiche: F5, ficheTitre: F5T, titre: 'L\'estérification',
    classe: [
      E('Dernière propriété : l\'<b>estérification</b>. Une fonction alcool d\'un ose réagit avec un acide : on obtient un ester plus de l\'eau.', [T('L\'estérification'), EQ('Ose–OH + acide → ester + H₂O')]),
      E('Le cas le plus important : l\'<b>ester phosphorique</b>. Le phosphate vient de l\'ATP, l\'enzyme est une kinase. Exemple : la première réaction de la glycolyse, par l\'hexokinase.', [EQ('Glucose + ATP → Glucose-6-P + ADP (hexokinase)')]),
      E('Pourquoi c\'est important ? Un : le phosphate <b>active</b> l\'ose, au départ de la glycolyse et du glycogène. Deux : le phosphate est chargé, donc le glucose-6-P ne peut plus ressortir de la cellule par les GLUT : il est <b>piégé</b>.', [LG('1 · le phosphate ACTIVE l\'ose (glycolyse, glycogène)', 'vert', { puce: '✓' }), LG('2 · chargé → ne ressort plus par les GLUT → PIÉGÉ dans la cellule', 'vert', { puce: '✓' })]),
      E('On retrouve aussi ces esters phosphoriques dans l\'ATP, le NAD⁺, les acides nucléiques et l\'acide phytique.', [LG('aussi : ATP, NAD⁺, acides nucléiques, acide phytique', 'noir', { taille: 'petit' })]),
      E('Bravo, tu as fini la structure des glucides ! Le résumé de la fiche 5 :', [EFF(), T('L\'essentiel de la fiche 5'), POST('Énantiomères, épimères, anomères · 2ⁿ stéréo-isomères · α/β ≠ D/L ; D ≠ dextrogyre · glucose +52,5°, fructose −92° · très solubles, GLUT · Fehling, DNS · glucose-6-P : ose activé et piégé', 'cle')], 'content')
    ],
    questions: [
      qcm('a1', 'Pourquoi le glucose-6-P reste-t-il piégé dans la cellule ?', ['Son phosphate chargé l\'empêche de ressortir par les GLUT', 'Il est trop gros', 'Il est insoluble', 'Il est immédiatement stocké'], 'Le phosphate l\'active et le piège.'),
      qcm('a2', 'Quelle enzyme fixe le phosphate sur le glucose au début de la glycolyse ?', ['L\'hexokinase', 'La phosphatase', 'L\'isomérase', 'La lactase'], 'Une kinase, avec un ATP.')
    ],
    revision: [
      vf('r1', 'Dans l\'estérification phosphorique d\'un ose, le phosphate vient de l\'ATP.', true, 'Vrai : l\'enzyme est une kinase.')
    ]
  }

  ]
};
