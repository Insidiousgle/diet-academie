// Cours : Les enzymes (Sciences › Biochimie › Enzymologie)
// Source : fiches « Les protéines » 7, 8, 9 (Enzymes 1 à 3).
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F7 = "Fiche 7", F7T = "Définition et caractéristiques des enzymes";
const F8 = "Fiche 8", F8T = "La réaction enzymatique et sa régulation";
const F9 = "Fiche 9", F9T = "Les enzymes allostériques";

export default {
  id: "bc-enzymes",
  titre: "Les enzymes",
  persos: {},
  carte: {
    depart: "Sans enzymes, digérer un repas prendrait des années. Comment ces protéines accélèrent-elles tout, et comment le corps les contrôle-t-il ?",
    etapes: [
      { titre: "Les enzymes", verbe: "Je découvre", question: "Catalyseurs, classes, site actif, cofacteurs", mots: "énergie d'activation · EC · apoenzyme · coenzymes" },
      { titre: "La cinétique", verbe: "Je mesure", question: "Vitesse, Km, Vmax", mots: "Michaelis-Menten · température · pH · inhibiteurs" },
      { titre: "L'allostérie", verbe: "Je régule", question: "Les enzymes qui servent d'interrupteurs", mots: "sigmoïde · T et R · rétro-inhibition · PFK-1" }
    ],
    arrivee: "Tu sais expliquer comment une enzyme travaille, lire une courbe de cinétique et dire comment une voie est régulée."
  },
  lecons: [

  /* ================= FICHE 7 ================= */
  {
    id: "bc-enzymes-01", fiche: F7, ficheTitre: F7T, titre: "Une enzyme, c'est quoi ?",
    classe: [
      E("L'<b>enzymologie</b>, c'est l'étude des enzymes. Une <b>enzyme</b> est un <b>catalyseur biologique</b>, de nature protéique, en général globulaire. Exception : certains ARN catalytiques, les ribozymes.", [T("Les enzymes, catalyseurs biologiques"), LG("ENZYME = catalyseur biologique, protéique (sauf ribozymes = ARN)", "bleu")]),
      E("Environ un quart des gènes humains codent des enzymes : leur synthèse est donc contrôlée génétiquement.", [LG("≈ 1/4 des gènes humains codent des enzymes", "noir", { puce: "•" })]),
      E("Un <b>catalyseur</b> augmente la vitesse d'une réaction, de 10³ à 10⁷ fois, parfois plus. Il n'est <b>pas consommé</b>, il ne change pas la composition du milieu, ni l'<b>équilibre</b> de la réaction : il accélère les deux sens.", [EQ("vitesse × 10³ à 10⁷ · non consommé · équilibre inchangé")]),
      E("Il agit en très petite quantité. Et attention : il ne rend <b>pas possible</b> une réaction impossible. Il ne fait qu'accélérer.", [POST("Catalyseur : accélère, non consommé, ne change pas l'équilibre, ne rend pas possible l'impossible", "piege")], "reflechit"),
      E("Étant des protéines, les enzymes sont sensibles à la <b>température</b> et au <b>pH</b>.", [LG("protéines → sensibles à la T° et au pH", "rouge", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "De combien une enzyme accélère-t-elle une réaction ?", ["De 10³ à 10⁷ fois, parfois plus", "De 2 fois", "De 10 %", "Elle ne l'accélère pas"], "C'est un catalyseur très efficace."),
      vf("a2", "Une enzyme est consommée pendant la réaction.", false, "Faux : elle sort intacte et sert à de nombreux cycles.")
    ],
    revision: [
      vf("r1", "Une enzyme peut rendre possible une réaction impossible.", false, "Faux : elle accélère seulement une réaction possible."),
      qcm("r2", "Que sont les ribozymes ?", ["Des ARN qui ont une activité catalytique", "Des enzymes digestives", "Des coenzymes", "Des inhibiteurs"], "L'exception aux enzymes protéiques."),
      vf("r3", "Une enzyme modifie l'équilibre de la réaction.", false, "Faux : elle accélère les deux sens, l'équilibre ne change pas.")
    ]
  },
  {
    id: "bc-enzymes-02", fiche: F7, ficheTitre: F7T, titre: "L'énergie d'activation",
    classe: [
      E("Comment une enzyme accélère-t-elle une réaction ? Pour passer du substrat S au produit P, il faut franchir une « colline » : l'<b>énergie d'activation</b>, Ea.", [T("L'énergie d'activation (Ea)"), LG("S → P : il faut franchir une « colline » = énergie d'activation", "noir")]),
      E("Sans enzyme, la colline est haute : la réaction est très lente. L'enzyme <b>abaisse l'Ea</b> : la réaction devient beaucoup plus rapide.", [LG("sans enzyme : Ea HAUTE → très lent", "rouge", { puce: "•" }), LG("avec enzyme : Ea ABAISSÉE → beaucoup plus rapide", "vert", { puce: "•" })]),
      E("Le départ et l'arrivée ne changent pas : l'enzyme n'apporte pas d'énergie et ne modifie pas le résultat. Elle abaisse l'Ea, pas l'énergie de S ni de P.", [POST("L'enzyme abaisse l'Ea, pas l'énergie de S ni de P", "cle")], "reflechit"),
      E("Grâce à elles, de nombreuses réactions deviennent possibles à <b>37 °C</b> et à pH physiologique, en épargnant l'énergie de la cellule. Elles empêchent aussi l'accumulation de sous-produits toxiques, et permettent de contrôler et d'orienter les voies du métabolisme.", [LG("réactions possibles à 37 °C · pas de sous-produits toxiques · voies contrôlées", "vert", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Comment une enzyme accélère-t-elle une réaction ?", ["Elle abaisse l'énergie d'activation", "Elle apporte de l'énergie", "Elle change l'équilibre", "Elle augmente la température"], "Le départ et l'arrivée ne changent pas."),
      qcm("a2", "Qu'est-ce que l'énergie d'activation ?", ["L'énergie à franchir pour passer du substrat au produit", "L'énergie libérée par la réaction", "L'énergie de l'ATP", "L'énergie de l'enzyme"], "La « colline » de la réaction.")
    ],
    revision: [
      vf("r1", "Une enzyme modifie l'énergie du substrat et du produit.", false, "Faux : elle abaisse seulement l'énergie d'activation.")
    ]
  },
  {
    id: "bc-enzymes-03", fiche: F7, ficheTitre: F7T, titre: "Nommer une enzyme",
    classe: [
      E("Le <b>nom usuel</b> : en général un mot qui décrit la réaction ou le substrat, plus le suffixe <b>-ase</b>. Exemple : la lactate déshydrogénase. Parfois un nom ancien : pepsine, trypsine.", [T("La nomenclature"), LG("nom usuel : réaction ou substrat + -ASE (lactate déshydrogénase) · parfois ancien (pepsine)", "bleu")]),
      E("La nomenclature officielle, de l'<b>IUBMB</b>, l'Union internationale de biochimie : chaque enzyme a un <b>numéro EC</b>, à <b>4 nombres</b> séparés par des points.", [EQ("Numéro EC : ① classe · ② sous-classe · ③ et ④ substrat et enzyme")]),
      E("Le 1er nombre, c'est la <b>classe</b> : le type de réaction. Le 2e, la sous-classe, qui précise. Le 3e et le 4e précisent la nature du substrat et l'enzyme.", [GRI(["Nombre", "Signification"], [["1er", "classe (type de réaction)"], ["2e", "sous-classe"], ["3e et 4e", "substrat et enzyme"]], true)]),
      E("Exemple : la glucokinase, EC 2.7.1.1. Le 2 : une transférase. Le 7 : elle transfère un phosphate. Le 1 : sur une fonction alcool. Le dernier 1 : l'accepteur est le glucose.", [EQ("Glucokinase = EC 2.7.1.1 → transférase · phosphate · sur un alcool · glucose"), POST("Numéro EC : 4 nombres ; le 1er = la classe", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien de nombres compte un numéro EC ?", ["4", "2", "6", "7"], "Classe, sous-classe, puis substrat et enzyme."),
      qcm("a2", "Que désigne le 1er nombre du numéro EC ?", ["La classe (type de réaction)", "Le substrat", "Le pH optimal", "L'organe"], "Ex. 2 = transférase.")
    ],
    revision: [
      qcm("r1", "Quel suffixe porte le nom usuel d'une enzyme ?", ["-ase", "-ose", "-ine", "-ol"], "Lactate déshydrogénase, lipase, amylase…")
    ]
  },
  {
    id: "bc-enzymes-04", fiche: F7, ficheTitre: F7T, titre: "Les 7 classes d'enzymes",
    classe: [
      E("Les enzymes se rangent en <b>7 classes</b>, selon le type de réaction.", [T("Les 7 classes"), GRI(["EC", "Classe", "Réaction (exemple)"], [
        ["1", "Oxydoréductases", "transfert d'électrons et de protons (lactate déshydrogénase)"],
        ["2", "Transférases", "transfert d'un groupement (transaminases, kinases)"],
        ["3", "Hydrolases", "coupure par l'eau (toutes les enzymes digestives : trypsine)"],
        ["4", "Lyases", "coupure sans eau ni oxydation, double liaison (aldolase)"],
        ["5", "Isomérases", "réarrangement interne (phosphoglucose isomérase : G6P ⇌ F6P)"],
        ["6", "Ligases", "liaison grâce à l'ATP (glutamine synthétase)"],
        ["7", "Translocases", "passage à travers une membrane (pompe Na⁺/K⁺) · ajoutée en 2018"]
      ], true)]),
      E("Un, les <b>oxydoréductases</b> : transfert d'électrons et de protons. Les déshydrogénases, réductases, oxydases. Deux, les <b>transférases</b> : transfert d'un groupement, comme les transaminases et les kinases.", [MONTRE(1), MONTRE(2)]),
      E("Trois, les <b>hydrolases</b> : coupure d'une liaison par l'eau. Toutes les enzymes digestives en font partie ! Quatre, les <b>lyases</b> : coupure sans eau ni oxydation, comme l'aldolase de la glycolyse.", [MONTRE(3), MONTRE(4)]),
      E("Cinq, les <b>isomérases</b> : réarrangement à l'intérieur d'une molécule. Six, les <b>ligases</b>, ou synthétases : elles forment une liaison grâce à l'énergie de l'ATP. Sept, les <b>translocases</b>, ajoutées en 2018 : elles font passer des ions à travers une membrane.", [MONTRE(5), MONTRE(6), MONTRE(7), POST("Oxydoréductases, transférases, hydrolases, lyases, isomérases, ligases, translocases", "cle")], "content")
    ],
    questions: [
      qcm("a1", "À quelle classe appartiennent toutes les enzymes digestives ?", ["Les hydrolases", "Les ligases", "Les isomérases", "Les oxydoréductases"], "Elles coupent les liaisons avec de l'eau."),
      qcm("a2", "Quelle classe forme une liaison grâce à l'énergie de l'ATP ?", ["Les ligases (synthétases)", "Les lyases", "Les hydrolases", "Les translocases"], "Ex. glutamine synthétase.")
    ],
    revision: [
      paires("r1", "Relie chaque enzyme à sa classe.", [["Lactate déshydrogénase", "Oxydoréductase"], ["Transaminase", "Transférase"], ["Trypsine", "Hydrolase"], ["Phosphoglucose isomérase", "Isomérase"]], "Les 7 classes EC."),
      qcm("r2", "Quelle est la 7e classe, ajoutée en 2018 ?", ["Les translocases", "Les kinases", "Les lyases", "Les phosphatases"], "Passage à travers une membrane."),
      qcm("r3", "Que font les transférases ?", ["Elles transfèrent un atome ou un groupement d'une molécule à une autre", "Elles coupent avec de l'eau", "Elles forment une liaison avec l'ATP", "Elles réarrangent une molécule"], "Ex. transaminases, kinases.")
    ]
  },
  {
    id: "bc-enzymes-05", fiche: F7, ficheTitre: F7T, titre: "Le site actif",
    classe: [
      E("Le <b>site actif</b> : une petite région de l'enzyme, souvent un creux, formée par quelques AA rapprochés par le repliement de la chaîne, la structure tertiaire. Il fixe le substrat et le transforme.", [T("Le site actif"), LG("SITE ACTIF : petit creux formé par quelques AA rapprochés (structure tertiaire)", "bleu")]),
      E("Le <b>substrat</b> : la molécule de forme complémentaire au site actif, transformée par l'enzyme.", [LG("SUBSTRAT : forme complémentaire au site actif", "bleu", { puce: "•" })]),
      E("Les étapes : le substrat se fixe, on obtient le <b>complexe enzyme-substrat</b>, ES ; il est transformé ; les produits sont libérés, et l'enzyme, intacte, accueille un nouveau substrat.", [EQ("E + S ⇌ ES → E + P"), SOUL()]),
      E("Deux modèles. <b>Clé-serrure</b> : la forme du substrat correspond exactement au site, comme une hormone et son récepteur. <b>Ajustement induit</b> : le site actif change un peu de forme en fixant le substrat.", [EFF(), T("Deux modèles"), LG("CLÉ-SERRURE : complémentarité de forme", "vert", { puce: "•" }), LG("AJUSTEMENT INDUIT : le site change un peu de forme en fixant S", "vert", { puce: "•" })]),
      E("L'idée clé : une petite quantité d'enzyme suffit pour transformer beaucoup de substrat.", [POST("E + S ⇌ ES → E + P · clé-serrure, ajustement induit", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce que le complexe ES ?", ["L'enzyme liée à son substrat", "L'enzyme liée à son inhibiteur", "Le produit final", "Une proenzyme"], "E + S ⇌ ES → E + P."),
      qcm("a2", "Que dit le modèle de l'ajustement induit ?", ["Le site actif change un peu de forme en fixant le substrat", "Le substrat change l'équilibre", "L'enzyme est consommée", "Le site actif est rigide"], "Le modèle clé-serrure, lui, parle de complémentarité stricte.")
    ],
    revision: [
      ordre("r1", "Remets dans l'ordre l'action d'une enzyme.", ["Fixation du substrat", "Formation du complexe ES", "Transformation du substrat", "Libération du produit, enzyme intacte"], "L'enzyme peut recommencer.")
    ]
  },
  {
    id: "bc-enzymes-06", fiche: F7, ficheTitre: F7T, titre: "Spécificité et localisation",
    classe: [
      E("Les enzymes sont <b>spécifiques</b>, de deux façons. <b>Spécificité de substrat</b> : chaque enzyme ne fixe qu'un substrat, ou quelques substrats proches. Exemple : la lactase coupe le lactose, pas le saccharose.", [T("La spécificité"), LG("de SUBSTRAT : 1 substrat (ou proches) · la lactase coupe le lactose, pas le saccharose", "bleu", { puce: "•" })]),
      E("<b>Spécificité de réaction</b> : elle ne catalyse qu'un type de réaction. Mais un même substrat peut être pris en charge par plusieurs enzymes différentes, pour des réactions différentes.", [LG("de RÉACTION : 1 seul type de réaction", "bleu", { puce: "•" }), POST("Double spécificité : de substrat et de réaction", "cle")]),
      E("Où agissent-elles ? Les <b>exoenzymes</b>, extracellulaires : fabriquées dans la cellule puis sécrétées, comme les enzymes digestives, amylase salivaire, lipase pancréatique.", [EFF(), T("La localisation"), LG("EXOenzymes : sécrétées (enzymes digestives)", "vert", { puce: "•" })]),
      E("Les <b>endoenzymes</b>, intracellulaires, souvent fixées à des organites.", [GRI(["Lieu", "Exemples"], [["Cytosol", "glycolyse, synthèse des AG"], ["Mitochondrie", "cycle de Krebs, β-oxydation, phosphorylation oxydative"], ["Lysosomes", "dégradation des macromolécules"], ["Noyau", "réplication de l'ADN, expression des gènes"], ["Réticulum", "lipides, modification des protéines"]], true)], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi la lactase ne coupe-t-elle pas le saccharose ?", ["Elle a une spécificité de substrat", "Elle est dénaturée", "Le saccharose est un inhibiteur", "Elle manque de cofacteur"], "Chaque enzyme ne fixe qu'un substrat ou quelques substrats proches."),
      qcm("a2", "Où se déroule la β-oxydation ?", ["Dans la mitochondrie", "Dans le cytosol", "Dans le noyau", "Dans les lysosomes"], "Comme le cycle de Krebs.")
    ],
    revision: [
      qcm("r1", "Qu'est-ce qu'une exoenzyme ?", ["Une enzyme sécrétée hors de la cellule", "Une enzyme du noyau", "Une enzyme inactive", "Une enzyme sans cofacteur"], "Ex. les enzymes digestives.")
    ]
  },
  {
    id: "bc-enzymes-07", fiche: F7, ficheTitre: F7T, titre: "Apoenzyme et cofacteur",
    classe: [
      E("Certaines enzymes sont des holoprotéines, uniquement des AA, comme les enzymes digestives. Mais beaucoup sont des hétéroprotéines : une partie protéique, l'<b>apoenzyme</b>, plus une partie non protéique.", [T("Apoenzyme et cofacteur"), LG("APOENZYME : partie protéique → responsable de la SPÉCIFICITÉ", "bleu")]),
      E("L'apoenzyme est responsable de la <b>spécificité</b> vis-à-vis du substrat. La partie non protéique, le <b>cofacteur</b>, est indispensable à l'<b>activité</b>.", [LG("COFACTEUR : non protéique, indispensable → responsable de l'ACTIVITÉ", "vert")]),
      E("L'équation à retenir : apoenzyme, inactive, plus cofacteur, égale <b>holoenzyme</b>, active.", [EQ("Apoenzyme (inactive) + cofacteur = HOLOENZYME (active)"), POST("Holoenzyme (enzyme complète) ≠ holoprotéine (AA seuls)", "piege")], "pointe"),
      E("Deux catégories de cofacteurs. Les <b>ions métalliques</b>, minéraux : l'enzyme est alors une <b>métalloenzyme</b>. Et les <b>coenzymes</b> : de petites molécules organiques, très souvent d'origine <b>vitaminique</b>, des vitamines B et C.", [EFF(), T("Deux catégories de cofacteurs"), RANG([
        { titre: "Ions métalliques", x: "Zn²⁺, Mg²⁺, Fe²⁺, Ca²⁺, Se… → métalloenzymes", c: "rouge" },
        { titre: "Coenzymes", x: "petites molécules organiques, souvent dérivées de vitamines (B, C)", c: "vert" }
      ])]),
      E("Application : une carence en une vitamine ou un minéral bloque les enzymes qui en dépendent.", [POST("Carence en vitamine ou minéral → enzymes bloquées", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce qu'une holoenzyme ?", ["Une apoenzyme + son cofacteur : l'enzyme active", "Une enzyme sans cofacteur", "Une protéine faite uniquement d'AA", "Un inhibiteur"], "Ne pas confondre avec holoprotéine."),
      qcm("a2", "Quelle partie de l'enzyme détermine la spécificité pour le substrat ?", ["L'apoenzyme", "Le cofacteur", "Le coenzyme", "L'ion métallique"], "Le cofacteur, lui, assure l'activité.")
    ],
    revision: [
      vf("r1", "Une apoenzyme seule est active.", false, "Faux : il lui faut son cofacteur pour former l'holoenzyme active.")
    ]
  },
  {
    id: "bc-enzymes-08", fiche: F7, ficheTitre: F7T, titre: "Coenzymes et métaux",
    classe: [
      E("Les coenzymes peuvent être liés de deux façons. <b>Faiblement</b>, par des liaisons H ou ioniques : ils se fixent et se détachent à chaque réaction, comme le NAD⁺ et le CoA. <b>Fortement</b>, souvent par une liaison covalente : c'est un <b>groupement prosthétique</b>, comme le FAD de certaines enzymes ou la biotine.", [T("Les coenzymes"), LG("FAIBLEMENT liés : vont et viennent (NAD⁺, CoA)", "bleu", { puce: "•" }), LG("FORTEMENT liés = GROUPEMENT PROSTHÉTIQUE (FAD, biotine)", "bleu", { puce: "•" })]),
      E("Ils sont en faible quantité et sans cesse régénérés. Et ils ne décident ni de la spécificité, ni de l'orientation de la réaction.", [LG("faible quantité, régénérés · ne décident PAS de la spécificité", "noir", { taille: "petit" })]),
      E("Deux types. Les coenzymes de <b>transfert</b> : ils prennent un atome ou un groupement et le donnent à une autre molécule : phosphate de pyridoxal, coenzyme A, TPP, biotine, THF, ATP. Les coenzymes d'<b>oxydoréduction</b> : ils transportent électrons et protons : NAD⁺, NADP⁺, FAD, FMN.", [GRI(["Type", "Exemples"], [["Transfert (groupement)", "phosphate de pyridoxal, CoA, TPP, biotine, THF, ATP"], ["Oxydoréduction (électrons)", "NAD⁺, NADP⁺, FAD, FMN"]], true)]),
      E("Les <b>métalloenzymes</b> : le métal contribue à la catalyse, parfois à la stabilité.", [EFF(), T("Les métalloenzymes"), GRI(["Métal", "Enzyme"], [["Zinc (Zn²⁺)", "anhydrase carbonique, carboxypeptidase"], ["Magnésium (Mg²⁺)", "kinases (complexe Mg-ATP)"], ["Fer (Fe²⁺)", "cytochromes, catalase"], ["Calcium (Ca²⁺)", "lipases"], ["Sélénium (Se)", "glutathion peroxydase"]], true)]),
      E("D'où l'importance des apports alimentaires en minéraux et oligo-éléments.", [POST("Zn (anhydrase carbonique) · Mg (kinases) · Fe · Ca · Se (glutathion peroxydase)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel métal est indispensable aux kinases ?", ["Le magnésium (Mg-ATP)", "Le zinc", "Le sélénium", "Le cuivre"], "Ex. kinases de la glycolyse."),
      qcm("a2", "Lequel de ces coenzymes transporte des électrons ?", ["Le NAD⁺", "Le coenzyme A", "La biotine", "Le phosphate de pyridoxal"], "Coenzyme d'oxydoréduction.")
    ],
    revision: [
      qcm("r1", "Quel oligo-élément est indispensable à la glutathion peroxydase ?", ["Le sélénium", "Le fer", "Le calcium", "Le zinc"], "Enzyme antioxydante."),
      qcm("r2", "Comment appelle-t-on un coenzyme fortement lié à son enzyme ?", ["Un groupement prosthétique", "Un substrat", "Un effecteur", "Un zymogène"], "Ex. FAD de certaines enzymes, biotine."),
      qcm("r3", "Quel métal est le cofacteur de l'anhydrase carbonique ?", ["Le zinc", "Le fer", "Le magnésium", "Le calcium"], "Elle forme le bicarbonate dans les hématies.")
    ]
  },
  {
    id: "bc-enzymes-09", fiche: F7, ficheTitre: F7T, titre: "Coenzymes et vitamines B",
    classe: [
      E("Les principales coenzymes viennent des <b>vitamines hydrosolubles</b>, du groupe B et la vitamine C. Le lien vitamine-coenzyme est à connaître.", [T("Vitamines → coenzymes"), GRI(["Vitamine", "Coenzyme", "Rôle (exemple)"], [
        ["B1 thiamine", "TPP", "pyruvate → acétyl-CoA"],
        ["B2 riboflavine", "FAD, FMN", "β-oxydation, chaîne respiratoire"],
        ["B3 niacine", "NAD⁺, NADP⁺", "glycolyse, Krebs, synthèses (NADPH)"],
        ["B5 acide pantothénique", "coenzyme A", "acétyl-CoA"],
        ["B6 pyridoxine", "phosphate de pyridoxal", "transaminases"],
        ["B8 biotine", "biotine", "carboxylases"],
        ["B9 folates", "tétrahydrofolate (THF)", "synthèse de l'ADN"],
        ["B12 cobalamine", "cobalamines", "méthylmalonyl-CoA → succinyl-CoA"],
        ["C acide ascorbique", "acide ascorbique", "hydroxylation du collagène"]
      ], true)]),
      E("Les classiques : B1 donne le <b>TPP</b>, B2 le <b>FAD</b>, B3 le <b>NAD⁺</b>, B5 le <b>coenzyme A</b>, B6 le <b>phosphate de pyridoxal</b>, des transaminases.", [MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4), MONTRE(5)]),
      E("Puis B8, la <b>biotine</b>, des carboxylases ; B9, le <b>THF</b>, pour l'ADN ; B12, les cobalamines ; et C, l'acide ascorbique, pour le collagène.", [MONTRE(6), MONTRE(7), MONTRE(8), MONTRE(9), POST("B1 TPP · B2 FAD · B3 NAD⁺ · B5 CoA · B6 PLP · B8 biotine · B9 THF · B12 · C", "cle")]),
      E("Les carences célèbres : <b>béribéri</b> pour la B1, <b>pellagre</b> pour la B3, <b>anémie</b> pour la B9 et la B12, <b>scorbut</b> pour la C. Et la B12 ne vient que des produits <b>animaux</b>. Tu verras le détail dans le cours sur les vitamines.", [EFF(), T("Carences"), GRI(["Vitamine", "Carence"], [["B1", "béribéri"], ["B3", "pellagre"], ["B9, B12", "anémie"], ["C", "scorbut"]], true), POST("B12 : seulement d'origine animale", "piege")], "content")
    ],
    questions: [
      qcm("a1", "De quelle vitamine dérive le NAD⁺ ?", ["La vitamine B3 (niacine)", "La vitamine B1", "La vitamine B2", "La vitamine C"], "B2 donne le FAD."),
      qcm("a2", "Quel coenzyme, dérivé de la vitamine B6, utilisent les transaminases ?", ["Le phosphate de pyridoxal", "Le TPP", "Le coenzyme A", "Le THF"], "B6 = pyridoxine.")
    ],
    revision: [
      paires("r1", "Relie chaque vitamine à son coenzyme.", [["B1", "TPP"], ["B2", "FAD"], ["B5", "Coenzyme A"], ["B9", "Tétrahydrofolate"]], "À connaître pour le BTS."),
      paires("r2", "Relie chaque carence à sa vitamine.", [["Béribéri", "B1"], ["Pellagre", "B3"], ["Scorbut", "C"]], "Les carences classiques.")
    ]
  },
  {
    id: "bc-enzymes-10", fiche: F7, ficheTitre: F7T, titre: "Une réaction, plusieurs vitamines",
    classe: [
      E("Une même réaction peut demander plusieurs coenzymes. Exemple : la <b>pyruvate déshydrogénase</b>, dans la mitochondrie, qui transforme le pyruvate en acétyl-CoA.", [T("La pyruvate déshydrogénase"), EQ("Pyruvate + CoA-SH + NAD⁺ → acétyl-CoA + CO₂ + NADH,H⁺")]),
      E("Elle utilise <b>5 coenzymes</b> : le TPP, de la B1 ; le CoA, de la B5 ; le FAD, de la B2 ; le NAD⁺, de la B3 ; et le lipoate, qui n'est pas une vitamine.", [GRI(["Coenzyme", "Vitamine"], [["TPP", "B1"], ["CoA-SH", "B5"], ["FAD", "B2"], ["NAD⁺", "B3"], ["Lipoate", "pas une vitamine"]], true)]),
      E("Conséquence : il suffit qu'une de ces vitamines manque pour que l'utilisation du glucose ralentisse. C'est pourquoi la carence en <b>B1</b>, chez l'alcoolique ou la personne dénutrie, touche d'abord les organes qui dépendent du glucose : cerveau, cœur.", [POST("Une vitamine B manque → tout le métabolisme énergétique ralentit (carence B1 : cerveau, cœur)", "piege")], "reflechit"),
      E("Autre exemple : la fabrication des <b>catécholamines</b>. Phénylalanine, tyrosine, DOPA, dopamine, noradrénaline, adrénaline. La <b>vitamine C</b> intervient pour passer de la dopamine à la noradrénaline ; la B6 pour la décarboxylation ; la SAM pour la méthylation.", [EFF(), T("La synthèse des catécholamines"), EQ("Phe → Tyr → DOPA → (B6) dopamine → (vit. C) noradrénaline → (SAM) adrénaline")]),
      E("L'idée clé : fabriquer des hormones et des neurotransmetteurs dépend aussi des apports en vitamines. Et retiens : les coenzymes d'oxydoréduction, NAD⁺, FAD, sont dans toutes les voies de dégradation ; ceux de transfert, CoA, biotine, PLP, dans les synthèses et le métabolisme des AA.", [POST("NAD⁺, FAD : voies de dégradation · CoA, biotine, PLP : synthèses et AA", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelles vitamines utilise la pyruvate déshydrogénase ?", ["B1, B2, B3 et B5", "Seulement la B1", "A, D, E et K", "B9 et B12"], "Plus le lipoate, qui n'est pas une vitamine."),
      qcm("a2", "Quelle vitamine permet de transformer la dopamine en noradrénaline ?", ["La vitamine C", "La vitamine B12", "La vitamine D", "La vitamine B9"], "Synthèse des catécholamines.")
    ],
    revision: [
      qcm("r1", "Pourquoi une carence en B1 touche-t-elle d'abord le cerveau et le cœur ?", ["Ils dépendent du glucose, dont l'utilisation ralentit", "Ils stockent la B1", "Ils n'ont pas de mitochondries", "Ils utilisent les corps cétoniques"], "La PDH a besoin du TPP (B1).")
    ]
  },
  {
    id: "bc-enzymes-11", fiche: F7, ficheTitre: F7T, titre: "Réguler les enzymes dans la cellule",
    classe: [
      E("La cellule règle l'activité de ses enzymes de plusieurs façons, plus ou moins rapides.", [T("La régulation dans la cellule"), GRI(["Mécanisme", "Principe (exemple)", "Délai"], [
        ["Substrat disponible", "plus de glucose dans l'hépatocyte → glucokinase plus active", "immédiat"],
        ["Cofacteurs disponibles", "manque d'O₂ → NAD⁺ pas recyclé → pyruvate vers lactate", "immédiat"],
        ["Allostérie", "effecteur sur un site allostérique (acétyl-CoA active la pyruvate carboxylase)", "seconde à minute"],
        ["Modification covalente", "phosphorylation par l'insuline / le glucagon (glycogène)", "minute à heure"],
        ["Régulation transcriptionnelle", "l'hormone fait fabriquer de nouvelles enzymes (insuline → LPL)", "de l'ordre du jour"],
        ["Proenzymes (zymogènes)", "activées par coupure (trypsinogène → trypsine)", "—"]
      ])]),
      E("Le plus rapide : la disponibilité du <b>substrat</b> et des <b>cofacteurs</b>. Immédiat. Exemple : en effort intense, si l'O₂ manque, le NADH n'est plus recyclé en NAD⁺, et le pyruvate part vers le lactate.", [MONTRE(1), MONTRE(2)]),
      E("L'<b>allostérie</b>, en secondes à minutes : un effecteur se fixe sur un site distinct du site actif. Avec la <b>rétro-inhibition</b> : le produit final d'une chaîne freine une enzyme du début, comme le cholestérol freine l'HMG-CoA réductase.", [MONTRE(3)]),
      E("La <b>modification covalente</b>, en minutes à heures : phosphorylation ou déphosphorylation de l'enzyme, commandée par l'insuline ou le glucagon. La <b>régulation transcriptionnelle</b>, en jours : l'hormone fait fabriquer de nouvelles enzymes, comme l'insuline pour la LPL. Et les <b>proenzymes</b>, activées par coupure.", [MONTRE(4), MONTRE(5), MONTRE(6), POST("Substrat, cofacteurs (immédiat) · allostérie (s) · phosphorylation (min-h) · transcription (jour) · zymogènes", "cle")]),
      E("Un mot de vocabulaire : un <b>ligand</b>, c'est une molécule qui se fixe spécifiquement sur une protéine, par des liaisons faibles : substrat, effecteur, hormone sur son récepteur, O₂ sur l'hémoglobine.", [LG("LIGAND : se fixe spécifiquement sur une protéine (liaisons faibles)", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Quel mécanisme de régulation est le plus lent ?", ["La régulation transcriptionnelle (de l'ordre du jour)", "L'allostérie", "La disponibilité du substrat", "La disponibilité des cofacteurs"], "Il faut fabriquer de nouvelles enzymes."),
      qcm("a2", "Comment l'insuline et le glucagon modifient-ils rapidement l'activité d'une enzyme ?", ["Par phosphorylation / déphosphorylation", "En changeant le pH", "En coupant un fragment", "En apportant du substrat"], "Modification covalente, en minutes à heures.")
    ],
    revision: [
      ordre("r1", "Range ces régulations de la plus rapide à la plus lente.", ["Disponibilité du substrat", "Allostérie", "Phosphorylation par une hormone", "Synthèse de nouvelles enzymes"], "Immédiat → secondes → minutes-heures → jour."),
      qcm("r2", "Comment une proenzyme devient-elle active ?", ["Par la coupure d'un fragment de sa chaîne", "Par l'ajout d'un phosphate", "Par la chaleur", "Par un effecteur allostérique"], "Ex. trypsinogène → trypsine.")
    ]
  },
  {
    id: "bc-enzymes-12", fiche: F7, ficheTitre: F7T, titre: "Doser les enzymes en clinique",
    classe: [
      E("En clinique, on <b>dose les enzymes</b>. Lors de lésions de tissus, des enzymes normalement à l'intérieur des cellules passent dans le <b>sang</b>. Leur tissu d'origine oriente le diagnostic.", [T("Doser les enzymes"), LG("lésion d'un tissu → ses enzymes passent dans le SANG → diagnostic", "bleu")]),
      E("Exemple : l'<b>ALAT</b>, enzyme du cytosol de l'hépatocyte. Si elle augmente dans le plasma, c'est une <b>cytolyse hépatique</b>, une destruction de cellules du foie, comme dans les hépatites.", [EQ("ALAT ↑ dans le plasma → CYTOLYSE HÉPATIQUE (ex. hépatite)")]),
      E("Les enzymes dosées et leur origine.", [GRI(["Enzyme", "Origine principale"], [["ALAT", "foie"], ["ASAT", "foie, cœur, muscle"], ["Créatine kinase (CK)", "muscle, cœur, cerveau"], ["Amylase, lipase", "pancréas (pancréatite)"], ["Phosphatases alcalines", "foie (voies biliaires), os, intestin, rein"], ["Phosphatase acide", "prostate (remplacée par le PSA)"]], true)]),
      E("Les <b>isoenzymes</b> : même activité, mais structure un peu différente selon le tissu. Exemple : les phosphatases alcalines peuvent venir du rein, de l'intestin, de l'os ou du foie. L'isoenzyme du foie, avec une bilirubine élevée, révèle un ictère par obstruction des voies biliaires.", [POST("Isoenzymes : même activité, structure différente selon le tissu (phosphatases alcalines)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Que révèle une hausse de l'ALAT dans le plasma ?", ["Une cytolyse hépatique", "Une pancréatite", "Un infarctus seulement", "Une carence en fer"], "L'ALAT est une enzyme du cytosol de l'hépatocyte."),
      qcm("a2", "Qu'est-ce qu'une isoenzyme ?", ["Une enzyme de même activité, de structure un peu différente selon le tissu", "Une enzyme inactive", "Une enzyme allostérique", "Un coenzyme"], "Ex. phosphatases alcalines.")
    ],
    revision: [
      qcm("r1", "Quelles enzymes dose-t-on en cas de suspicion de pancréatite ?", ["Amylase et lipase", "ALAT et ASAT", "Créatine kinase", "Phosphatase acide"], "Elles viennent du pancréas.")
    ]
  },
  {
    id: "bc-enzymes-13", fiche: F7, ficheTitre: F7T, titre: "Les enzymopathies",
    classe: [
      E("Les <b>enzymopathies</b> : des maladies héréditaires par déficit enzymatique. Une mutation rend une enzyme absente ou inactive. Son <b>substrat s'accumule</b>, souvent toxique, et/ou son produit manque. La prise en charge est souvent <b>diététique</b> : ça te concerne !", [T("Les enzymopathies"), LG("mutation → enzyme absente → substrat S'ACCUMULE / produit MANQUE · prise en charge souvent DIÉTÉTIQUE", "rouge")]),
      E("La <b>phénylcétonurie</b> : déficit en phénylalanine hydroxylase, qui transforme la Phe en Tyr. La Phe s'accumule dans le sang et le cerveau : atteinte du développement cérébral. Dépistée à la naissance. Traitement : régime pauvre en phénylalanine, pas d'aspartame. Vie quasi normale.", [GRI(["Maladie", "Enzyme déficiente", "Prise en charge"], [
        ["Phénylcétonurie", "phénylalanine hydroxylase (Phe → Tyr)", "régime pauvre en Phe, pas d'aspartame"],
        ["Fructosémie", "aldolase B (foie)", "sans fructose, saccharose ni sorbitol"],
        ["Maladie de Pompe", "α-glucosidase acide (lysosomes)", "glycogène dans muscles, cœur"],
        ["Maladie de Gaucher", "glucocérébrosidase", "lipide dans rate, foie, os"]
      ], true), MONTRE(1)]),
      E("La <b>fructosémie</b>, l'intolérance héréditaire au fructose : déficit en aldolase B du foie. Après du fructose : hypoglycémie, vomissements, douleurs, retard de croissance. Régime strict sans fructose, ni saccharose, ni sorbitol.", [MONTRE(2), POST("Fructosémie : ni fructose, ni saccharose, ni sorbitol", "piege")], "reflechit"),
      E("La maladie de <b>Pompe</b> : le glycogène s'accumule dans les muscles et le cœur. La maladie de <b>Gaucher</b> : un lipide s'accumule dans la rate, le foie, les os. Autres : galactosémie, glycogénoses, leucinose, déficit en ornithine transcarbamylase. Traitements : régime, enzyme de remplacement.", [MONTRE(3), MONTRE(4)], "content")
    ],
    questions: [
      qcm("a1", "Quelle enzyme est déficiente dans la phénylcétonurie ?", ["La phénylalanine hydroxylase", "L'aldolase B", "La lactase", "La glucocérébrosidase"], "La Phe n'est plus transformée en Tyr."),
      qcm("a2", "Quel régime pour une fructosémie ?", ["Sans fructose, saccharose ni sorbitol", "Pauvre en phénylalanine", "Sans lactose", "Sans gluten"], "Déficit en aldolase B.")
    ],
    revision: [
      vf("r1", "Dans une enzymopathie, le substrat de l'enzyme déficiente a tendance à s'accumuler.", true, "Vrai, et le produit manque.")
    ]
  },
  {
    id: "bc-enzymes-14", fiche: F7, ficheTitre: F7T, titre: "Les enzymes en agroalimentaire",
    classe: [
      E("En <b>industrie agroalimentaire</b>, les enzymes servent en boulangerie, biscuiterie, confiserie, laiterie, brasserie. D'origine animale, végétale, mais surtout <b>microbienne</b>.", [T("Les enzymes en agroalimentaire"), LG("surtout d'origine MICROBIENNE", "bleu")]),
      E("Exemple : les <b>sirops de glucose et de fructose</b>, à partir de l'amidon. L'amidon chauffé passe par une α-amylase thermostable, puis une glucoamylase qui donne du glucose, puis la glucose isomérase qui donne du fructose, au pouvoir sucrant plus élevé.", [EQ("amidon → (α-amylase) → maltose, dextrines → (glucoamylase) → glucose → (glucose isomérase) → fructose")]),
      E("Les produits laitiers : la <b>présure</b>, ou chymosine, pour le fromage ; la <b>lactase</b> pour les laits sans lactose. Les lipases du lait donnent une odeur de rance, mais aussi la saveur de certains fromages.", [LG("PRÉSURE (chymosine) : fromage · LACTASE : laits sans lactose", "vert", { puce: "•" })]),
      E("Les viandes : des protéases les attendrissent pendant la maturation. Et aussi : les pectinases pour clarifier les jus, les fermentations, et les analyses des aliments, comme la détection du gluten.", [LG("viandes attendries (protéases) · pectinases (jus) · détection d'allergènes", "vert", { puce: "•" }), POST("Agroalimentaire : sirops de glucose-fructose, présure, lactase, maturation des viandes", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle enzyme permet de fabriquer des laits sans lactose ?", ["La lactase", "La présure", "La lipase", "La glucose isomérase"], "Elle coupe le lactose."),
      qcm("a2", "Quelle enzyme transforme le glucose en fructose dans les sirops ?", ["La glucose isomérase", "L'α-amylase", "La glucoamylase", "La lactase"], "Le fructose sucre plus.")
    ],
    revision: [
      qcm("r1", "À quoi sert la présure (chymosine) ?", ["À fabriquer le fromage", "À clarifier les jus", "À attendrir la viande", "À faire du sirop de glucose"], "Elle fait cailler le lait.")
    ]
  },

  /* ================= FICHE 8 ================= */
  {
    id: "bc-enzymes-15", fiche: F8, ficheTitre: F8T, titre: "Les étapes de la réaction",
    classe: [
      E("Le métabolisme, l'anabolisme pour les synthèses, le catabolisme pour les dégradations, repose sur des chaînes de réactions catalysées par des enzymes. Ce sont des réactions « <b>douces</b> » : 37 °C, pression atmosphérique, pH proche de la neutralité.", [T("La réaction enzymatique"), LG("réactions « DOUCES » : 37 °C, pression atmosphérique, pH ≈ neutre", "noir")]),
      E("Le site actif a un <b>double rôle</b>. Site de <b>fixation</b> : il reconnaît et fixe le substrat par des liaisons faibles. Site <b>catalytique</b> : ses groupements transforment le substrat.", [LG("site actif = site de FIXATION (liaisons faibles) + site CATALYTIQUE", "bleu", { taille: "grand" }), POST("Site actif = fixation + catalyse", "cle")]),
      E("Trois étapes. Un, l'<b>association</b> : E et S forment ES, c'est réversible. Deux, la <b>catalyse</b> : dans le complexe, S est transformé, en général l'étape la plus lente. Trois, la <b>libération</b> du produit : l'enzyme est régénérée.", [EFF(), T("Les 3 étapes"), EQ("E + S ⇌(k₁, k₋₁) ES →(k₂ = kcat) E + P")]),
      E("Les constantes : <b>k₁</b> pour former ES, <b>k₋₁</b> pour le dissocier, et <b>k₂</b>, ou <b>kcat</b>, la constante catalytique, pour transformer ES en E plus P.", [GRI(["Constante", "Ce qu'elle mesure"], [["k₁", "formation de ES"], ["k₋₁", "dissociation de ES en E + S"], ["k₂ = kcat", "catalyse : ES → E + P"]], true)]),
      E("On mesure la vitesse au tout <b>début</b> de la réaction, quand il n'y a presque pas de produit : la réaction inverse est négligeable. Et pour une enzyme <b>michaélienne</b>, chaque site actif fonctionne indépendamment des autres.", [LG("enzyme MICHAÉLIENNE : sites actifs indépendants", "vert", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Que mesure la constante kcat (k₂) ?", ["La vitesse de transformation de ES en E + P", "La formation de ES", "La dissociation de ES", "L'affinité pour l'inhibiteur"], "C'est la constante catalytique."),
      qcm("a2", "Quel est le double rôle du site actif ?", ["Fixer le substrat et le transformer", "Fixer l'inhibiteur et l'effecteur", "Fabriquer l'enzyme et la dégrader", "Changer le pH et la température"], "Site de fixation + site catalytique.")
    ],
    revision: [
      vf("r1", "La formation du complexe ES est réversible.", true, "Vrai : constantes k₁ et k₋₁.")
    ]
  },
  {
    id: "bc-enzymes-16", fiche: F8, ficheTitre: F8T, titre: "Mesurer la vitesse",
    classe: [
      E("La <b>vitesse</b>, c'est une variation de concentration par unité de temps. On la mesure par la disparition du substrat, l'apparition du produit, ou l'utilisation d'un cofacteur, comme le NADH, qui absorbe les UV à <b>340 nm</b>.", [T("Mesurer la vitesse"), LG("disparition de S · apparition de P · cofacteur (NADH à 340 nm)", "bleu")]),
      E("L'<b>activité enzymatique</b> s'exprime en <b>unités internationales</b>, U : 1 U, c'est la quantité d'enzyme qui transforme 1 µmol de substrat par minute. L'unité officielle est le katal, en mol par seconde. C'est l'unité des résultats de dosage, comme l'ALAT en U/L.", [EQ("1 U = 1 µmol de substrat transformé par minute"), POST("Activité en U (µmol/min) · ex. ALAT en U/L", "cle")]),
      E("Si on trace le produit formé en fonction du temps : au début, la courbe monte presque en ligne droite, puis elle ralentit, et plafonne à l'équilibre.", [EFF(), T("La courbe [P] = f(temps)"), RANG([
        { titre: "Préstationnaire", x: "très brève : le complexe ES se forme", c: "noir" },
        { titre: "Stationnaire", x: "ES constant, vitesse constante → on mesure vᵢ", c: "vert" },
        { titre: "Ralentissement", x: "S s'épuise, P s'accumule (réaction inverse)", c: "rouge" },
        { titre: "Équilibre", x: "vitesses directe et inverse égales", c: "bleu" }
      ])]),
      E("On mesure la <b>vitesse initiale</b>, vᵢ : la pente au tout début, dans la phase stationnaire, quand le substrat n'est pas encore consommé et que le produit ne gêne pas encore.", [MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4), POST("On mesure la vitesse INITIALE vᵢ (pente à l'origine, phase stationnaire)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Que représente 1 unité internationale (U) d'activité enzymatique ?", ["La transformation de 1 µmol de substrat par minute", "1 g d'enzyme", "1 mol de produit par heure", "La vitesse maximale"], "L'unité officielle est le katal (mol/s)."),
      qcm("a2", "Pourquoi mesure-t-on la vitesse initiale ?", ["Le substrat n'est pas encore consommé et le produit ne gêne pas", "C'est la vitesse maximale", "L'enzyme est dénaturée ensuite", "C'est plus facile à calculer"], "Pente à l'origine, phase stationnaire.")
    ],
    revision: [
      qcm("r1", "À quelle longueur d'onde le NADH absorbe-t-il ?", ["340 nm", "280 nm", "540 nm", "260 nm"], "Il sert à suivre de nombreuses réactions.")
    ]
  },
  {
    id: "bc-enzymes-17", fiche: F8, ficheTitre: F8T, titre: "Michaelis-Menten : Vmax et Km",
    classe: [
      E("La théorie de <b>Michaelis et Menten</b>, 1913. On fait varier la quantité de substrat, avec toujours la même quantité d'enzyme. La vitesse initiale suit une <b>hyperbole</b> : l'enzyme est dite <b>michaélienne</b>.", [T("Michaelis-Menten"), EQ("vᵢ = Vmax × [S] / (Km + [S])")]),
      E("Avec peu de substrat, la vitesse augmente presque proportionnellement. Avec beaucoup, tous les sites actifs sont occupés : la vitesse plafonne, c'est le <b>plateau de saturation</b>.", [LG("peu de S : vᵢ ≈ proportionnelle · beaucoup de S : PLATEAU (tous les sites occupés)", "bleu")]),
      E("La <b>Vmax</b>, vitesse maximale : la valeur limite de vᵢ quand le substrat tend vers l'infini. Elle augmente avec la quantité d'enzyme.", [LG("Vmax : vitesse au plateau · ↑ avec la quantité d'enzyme", "vert", { puce: "•" })]),
      E("Le <b>Km</b>, constante de Michaelis : la concentration de substrat qui donne la <b>moitié de la Vmax</b>. Il est propre au couple enzyme-substrat et ne dépend pas de la quantité d'enzyme.", [EQ("Km = [S] pour laquelle vᵢ = Vmax / 2"), SOUL()]),
      E("Le Km mesure l'<b>affinité</b>. Piège : c'est à l'envers ! Plus le Km est <b>petit</b>, plus l'affinité est <b>grande</b> : il faut peu de substrat pour travailler vite.", [POST("Km PETIT = affinité FORTE (il faut peu de substrat)", "piege")], "pointe"),
      E("Application, les <b>dosages</b> : avec beaucoup de substrat, il n'est pas limitant, et la vitesse est proportionnelle à la quantité d'enzyme. C'est comme ça qu'on mesure l'activité d'une enzyme dans le sang, comme les transaminases.", [EFF(), T("Principe des dosages"), EQ("[S] saturante → vitesse ∝ [enzyme]"), POST("Vmax ∝ [E] : base des dosages", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce que le Km ?", ["La concentration de substrat qui donne Vmax/2", "La vitesse maximale", "La quantité d'enzyme", "La constante catalytique"], "Il mesure l'affinité."),
      qcm("a2", "Une enzyme A a un Km plus petit qu'une enzyme B pour le même substrat. Laquelle a la plus forte affinité ?", ["L'enzyme A", "L'enzyme B", "Les deux pareil", "On ne peut pas savoir"], "Km petit = affinité forte.")
    ],
    revision: [
      qcm("r1", "De quoi dépend la Vmax ?", ["De la quantité d'enzyme", "Seulement du substrat", "Du Km", "De rien"], "D'où le principe des dosages."),
      vf("r2", "Le Km dépend de la quantité d'enzyme.", false, "Faux : il est propre au couple enzyme-substrat."),
      qcm("r3", "Pourquoi la vitesse plafonne-t-elle à forte concentration de substrat ?", ["Tous les sites actifs sont occupés (plateau de saturation)", "L'enzyme est dénaturée", "Le substrat devient inhibiteur", "Le pH change"], "On atteint la Vmax.")
    ]
  },
  {
    id: "bc-enzymes-18", fiche: F8, ficheTitre: F8T, titre: "L'effet de la température",
    classe: [
      E("Pour réagir, l'enzyme et le substrat doivent se rencontrer avec assez d'énergie. Entre 0 et 40 °C environ, quand la température monte, les molécules s'agitent plus : plus de rencontres, plus de complexes ES, la vitesse augmente.", [T("La température"), LG("T° ↑ → agitation ↑ → plus de rencontres E-S → vitesse ↑", "vert")]),
      E("Jusqu'à la <b>température optimale</b>, où la vitesse est maximale : pour la plupart des enzymes humaines, un peu au-dessus de 37 °C, vers 40 à 45 °C.", [EQ("T° optimale (enzymes humaines) : ≈ 40-45 °C")]),
      E("Au-delà : la chaleur <b>dénature</b> la protéine. Chute brutale de l'activité, <b>irréversible</b>.", [LG("au-delà : DÉNATURATION → chute brutale, IRRÉVERSIBLE", "rouge", { taille: "grand" })], "reflechit"),
      E("Le <b>froid</b>, lui, ralentit les enzymes <b>sans les détruire</b> : c'est réversible. C'est le principe du réfrigérateur et de la congélation. Et le <b>blanchiment</b> des légumes avant congélation détruit leurs enzymes.", [POST("Chaleur excessive : dénaturation irréversible · froid : ralentit, réversible", "cle")]),
      E("D'où l'importance de maintenir le corps à 37 °C.", [LG("application : réfrigération, congélation, blanchiment des légumes", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Que fait le froid aux enzymes ?", ["Il les ralentit, de façon réversible", "Il les dénature définitivement", "Il les accélère", "Il les détruit toutes"], "Principe de la réfrigération."),
      qcm("a2", "Pourquoi blanchit-on les légumes avant de les congeler ?", ["Pour détruire leurs enzymes", "Pour les sucrer", "Pour augmenter leurs vitamines", "Pour les colorer"], "Le froid seul ne fait que ralentir les enzymes.")
    ],
    revision: [
      vf("r1", "Au-delà de la température optimale, la chute d'activité est réversible.", false, "Faux : la chaleur dénature l'enzyme, c'est irréversible.")
    ]
  },
  {
    id: "bc-enzymes-19", fiche: F8, ficheTitre: F8T, titre: "L'effet du pH",
    classe: [
      E("Chaque enzyme a un <b>pH optimal</b>, adapté à son lieu de travail. La plupart des enzymes du corps ont un pH optimal proche de <b>7</b>, comme les liquides de l'organisme.", [T("Le pH"), GRI(["Enzyme", "pH optimal", "Lieu"], [["Pepsine", "≈ 2", "estomac"], ["Amylase salivaire", "≈ 6,8", "bouche"], ["Trypsine", "≈ 8", "intestin"], ["Arginase", "≈ 10", "foie"]], true)]),
      E("Un écart de 0,5 unité fait déjà baisser la vitesse ; à 2 unités, elle devient très faible. Pourquoi ? Le pH change l'état d'ionisation des radicaux du site actif, Asp, Glu, Lys, Arg, His, et du substrat : le complexe ES se forme mal.", [LG("pH → ionisation du SITE ACTIF (Asp, Glu, Lys, Arg, His) → ES gêné", "bleu", { puce: "•" })]),
      E("C'est d'abord <b>réversible</b> ; seuls les pH extrêmes dénaturent l'enzyme.", [POST("pH : réversible, sauf aux valeurs extrêmes (dénaturation)", "cle")], "reflechit"),
      E("Exemple : la <b>pepsine</b>, protéase de l'estomac, pH optimal 2. Quand le chyme passe dans l'intestin, à pH 6,5 à 7,5, elle perd son activité : son action se limite à l'estomac.", [LG("pepsine : active à pH 2 (estomac), inactive dans l'intestin", "vert", { puce: "•" })]),
      E("Application : l'amylase de la salive est arrêtée par l'acidité de l'estomac ; les enzymes du pancréas ont besoin du bicarbonate qui neutralise l'acidité dans l'intestin.", [POST("Amylase salivaire stoppée par l'estomac · enzymes pancréatiques : besoin du bicarbonate", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le pH optimal de la pepsine ?", ["≈ 2", "≈ 7", "≈ 8", "≈ 10"], "Celui de l'estomac."),
      qcm("a2", "Pourquoi le pH modifie-t-il l'activité d'une enzyme ?", ["Il change l'ionisation des radicaux du site actif", "Il change la séquence de l'enzyme", "Il ajoute un cofacteur", "Il augmente la température"], "Le complexe ES se forme mal.")
    ],
    revision: [
      qcm("r1", "Pourquoi l'amylase salivaire arrête-t-elle de travailler dans l'estomac ?", ["Le pH y est trop acide", "Il n'y a plus d'amidon", "La température est trop basse", "Elle est digérée immédiatement"], "Son pH optimal est d'environ 6,8.")
    ]
  },
  {
    id: "bc-enzymes-20", fiche: F8, ficheTitre: F8T, titre: "Activateurs et inhibiteurs",
    classe: [
      E("Les <b>effecteurs</b> modifient l'activité des enzymes. Les <b>activateurs</b> augmentent la vitesse ; les <b>inhibiteurs</b> la diminuent ou l'arrêtent.", [T("Les effecteurs"), LG("ACTIVATEURS : vitesse ↑ · INHIBITEURS : vitesse ↓ ou arrêt", "noir")]),
      E("L'inhibition est un mécanisme important de régulation. C'est aussi le mode d'action de nombreux <b>médicaments</b> et de substances <b>toxiques</b>.", [LG("régulation · médicaments · toxiques", "bleu", { puce: "•" })]),
      E("Inhibiteur <b>irréversible</b> : il se fixe par une liaison <b>covalente</b> et inactive l'enzyme pour de bon. Exemples : la <b>pénicilline</b> bloque l'enzyme qui construit la paroi des bactéries ; l'<b>aspirine</b> bloque la cyclo-oxygénase.", [LG("IRRÉVERSIBLE : liaison COVALENTE → inactivation définitive (pénicilline, aspirine)", "rouge", { puce: "•" })]),
      E("Inhibiteur <b>réversible</b>, le plus souvent : fixation par liaisons faibles, de courte durée ; l'enzyme retrouve son activité. Deux grands types : <b>compétitif</b> et <b>non compétitif</b>.", [LG("RÉVERSIBLE : liaisons faibles → compétitif ou non compétitif", "vert", { puce: "•" }), POST("Irréversible : covalent (pénicilline) · réversible : compétitif / non compétitif", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Comment agit un inhibiteur irréversible ?", ["Il se fixe par une liaison covalente et inactive l'enzyme définitivement", "Il prend la place du substrat un court instant", "Il change le pH", "Il apporte un cofacteur"], "Ex. pénicilline."),
      qcm("a2", "Quelle enzyme l'aspirine bloque-t-elle ?", ["La cyclo-oxygénase", "L'HMG-CoA réductase", "La lipase pancréatique", "La trypsine"], "Inhibition irréversible.")
    ],
    revision: [
      vf("r1", "La pénicilline est un inhibiteur réversible.", false, "Faux : elle bloque définitivement l'enzyme de la paroi bactérienne.")
    ]
  },
  {
    id: "bc-enzymes-21", fiche: F8, ficheTitre: F8T, titre: "Compétitif ou non compétitif ?",
    classe: [
      E("Comparons les deux inhibiteurs réversibles.", [T("Compétitif ou non compétitif ?"), GRI(["", "Compétitif", "Non compétitif"], [
        ["Où se fixe-t-il ?", "sur le SITE ACTIF (ressemble au substrat)", "sur un AUTRE site"],
        ["Km", "AUGMENTE (affinité apparente ↓)", "inchangé"],
        ["Vmax", "inchangée (avec plus de substrat)", "DIMINUÉE"],
        ["Levé par plus de substrat ?", "OUI", "non"],
        ["Exemples", "statines, acarbose, rétrocontrôle", "plomb, mercure (sur les –SH) ; orlistat"]
      ])]),
      E("L'inhibiteur <b>compétitif</b> ressemble au substrat et prend sa place dans le <b>site actif</b>, sans être transformé. Si on ajoute beaucoup de substrat, il « gagne » la compétition : la Vmax est toujours atteinte, mais il faut plus de substrat. Le <b>Km augmente</b>.", [MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4)]),
      E("Exemples : les <b>statines</b>, sur l'HMG-CoA réductase ; l'<b>acarbose</b>, sur les α-glucosidases de l'intestin, dans le diabète ; et le produit d'une réaction qui freine son enzyme.", [MONTRE(5)]),
      E("L'inhibiteur <b>non compétitif</b> se fixe <b>ailleurs</b> et rend une partie des enzymes inactives. Ajouter du substrat n'y change rien : la <b>Vmax baisse</b>, le Km ne change pas. Exemples : les métaux toxiques, plomb, mercure, qui se fixent sur les SH ; l'orlistat, qui bloque la lipase pancréatique, de façon irréversible.", [LG("non compétitif : Vmax ↓, Km = · ex. plomb, mercure", "rouge", { puce: "•" })]),
      E("L'astuce pour ne pas te tromper : <b>compétitif, le Km change</b> ; <b>non compétitif, la Vmax change</b>.", [POST("Compétitif → Km ↑ (Vmax =) · non compétitif → Vmax ↓ (Km =)", "astuce")], "pointe")
    ],
    questions: [
      qcm("a1", "Quel est l'effet d'un inhibiteur compétitif ?", ["Km augmente, Vmax inchangée", "Vmax diminue, Km inchangé", "Km et Vmax diminuent", "Aucun effet"], "On peut le chasser avec plus de substrat."),
      qcm("a2", "Peut-on lever une inhibition non compétitive en ajoutant du substrat ?", ["Non", "Oui", "Seulement à pH 2", "Seulement à froid"], "L'inhibiteur se fixe ailleurs que sur le site actif.")
    ],
    revision: [
      paires("r1", "Relie chaque inhibiteur à son type.", [["Statines", "Compétitif"], ["Plomb, mercure", "Non compétitif"], ["Pénicilline", "Irréversible"]], "Trois façons d'inhiber."),
      qcm("r2", "Où se fixe un inhibiteur compétitif ?", ["Sur le site actif", "Sur un site allostérique", "Sur le cofacteur", "Sur le produit"], "Il ressemble au substrat.")
    ]
  },
  {
    id: "bc-enzymes-22", fiche: F8, ficheTitre: F8T, titre: "Les proenzymes",
    classe: [
      E("Certaines enzymes sont fabriquées sous une forme <b>inactive</b> : la <b>proenzyme</b>, ou zymogène. Elles deviennent actives quand on coupe un fragment de leur chaîne.", [T("Les proenzymes (zymogènes)"), EQ("proenzyme (inactive) → coupure d'un fragment → enzyme ACTIVE")]),
      E("Exemple : les protéases du suc pancréatique. Le pancréas les sécrète en formes inactives : trypsinogène, chymotrypsinogène, proélastase, procarboxypeptidase. Pourquoi ? Pour qu'elles ne digèrent pas le pancréas lui-même.", [LG("pancréas : trypsinogène, chymotrypsinogène, proélastase, procarboxypeptidase", "bleu"), POST("Proenzymes : évitent l'autodigestion du pancréas (activation trop tôt = pancréatite)", "piege")], "reflechit"),
      E("Dans l'intestin grêle, l'<b>entérokinase</b>, sur la bordure en brosse, coupe le trypsinogène en <b>trypsine</b>. Puis la trypsine active les autres proenzymes, et d'autres trypsinogènes : c'est l'<b>autocatalyse</b>, un effet en cascade.", [EQ("trypsinogène → (entérokinase) → TRYPSINE → active les autres + autocatalyse")]),
      E("Même principe dans l'estomac : le pepsinogène devient pepsine, activé par l'acidité et par la pepsine. Et le <b>système du complément</b> : des proenzymes du plasma qui s'activent en cascade au contact d'un microbe et perforent sa paroi.", [LG("pepsinogène → pepsine (acidité) · complément : cascade contre les microbes", "vert", { puce: "•" })]),
      E("Bravo, tu as fini la fiche 8 !", [EFF(), T("L'essentiel de la fiche 8"), POST("E + S ⇌ ES → E + P · vᵢ · Km = [S] à Vmax/2 (petit = affinité forte) · Vmax ∝ [E] · T° et pH optimaux · compétitif (Km ↑) / non compétitif (Vmax ↓) · proenzymes", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle enzyme active le trypsinogène dans l'intestin ?", ["L'entérokinase", "La pepsine", "L'amylase", "La lipase"], "Sur la bordure en brosse des entérocytes."),
      qcm("a2", "Pourquoi les protéases pancréatiques sont-elles sécrétées inactives ?", ["Pour ne pas digérer le pancréas", "Parce qu'elles manquent de cofacteur", "Pour agir dans l'estomac", "Parce qu'elles sont dénaturées"], "Une activation trop précoce = pancréatite.")
    ],
    revision: [
      qcm("r1", "Qu'est-ce que l'autocatalyse de la trypsine ?", ["La trypsine active d'autres molécules de trypsinogène", "La trypsine se détruit elle-même", "La trypsine fabrique de l'ATP", "La trypsine change de pH"], "Effet en cascade."),
      vf("r2", "Les proenzymes pancréatiques évitent l'autodigestion du pancréas.", true, "Vrai : elles ne s'activent que dans l'intestin.")
    ]
  },

  /* ================= FICHE 9 ================= */
  {
    id: "bc-enzymes-23", fiche: F9, ficheTitre: F9T, titre: "Une enzyme allostérique",
    classe: [
      E("« Allostérique », du grec <i>allos</i>, autre, et <i>stereos</i>, forme. Une <b>enzyme allostérique</b> a, en plus de son site actif, un ou plusieurs <b>sites allostériques</b>, ou sites régulateurs, distincts du site actif.", [T("Les enzymes allostériques"), LG("site ACTIF (substrat) + site(s) ALLOSTÉRIQUE(S) (régulateurs)", "bleu", { taille: "grand" })]),
      E("Sur le site allostérique se fixe un <b>effecteur</b> : un métabolite, un produit de la voie, un nucléotide comme l'ATP ou l'AMP, un ion. Il peut être <b>activateur</b> ou <b>inhibiteur</b>.", [LG("EFFECTEUR : métabolite, ATP, AMP, ion… → activateur ou inhibiteur", "vert", { puce: "•" })]),
      E("Sa fixation change la <b>forme</b> de l'enzyme, donc son affinité pour le substrat, donc sa vitesse. Il ne se fixe pas là où va le substrat, mais il agit à distance.", [POST("Effecteur sur un AUTRE site → change la forme → change l'activité", "cle")], "reflechit"),
      E("Les enzymes allostériques contrôlent souvent une <b>étape clé</b> d'une voie, l'étape d'engagement, la plus lente. Elles adaptent la vitesse de la voie aux besoins de la cellule, en quelques <b>secondes</b>.", [LG("contrôlent l'ÉTAPE CLÉ d'une voie · en quelques secondes", "rouge", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce qui distingue une enzyme allostérique ?", ["Elle a un ou plusieurs sites allostériques en plus du site actif", "Elle n'a pas de site actif", "Elle n'est pas une protéine", "Elle ne fixe pas de substrat"], "Allos = autre."),
      qcm("a2", "Où se fixe un effecteur allostérique ?", ["Sur un site distinct du site actif", "Sur le site actif", "Sur le substrat", "Sur le produit"], "Il agit à distance en changeant la forme de l'enzyme.")
    ],
    revision: [
      vf("r1", "Les enzymes allostériques contrôlent souvent l'étape clé d'une voie.", true, "Vrai : l'étape d'engagement, la plus lente.")
    ]
  },
  {
    id: "bc-enzymes-24", fiche: F9, ficheTitre: F9T, titre: "Michaélienne ou allostérique ?",
    classe: [
      E("Les enzymes allostériques ont presque toujours plusieurs sous-unités : une <b>structure quaternaire</b>. Identiques, homomère, comme la PFK-1, un homotétramère ; ou différentes, hétéromère, comme l'ATCase bactérienne.", [T("Structure quaternaire"), LG("plusieurs PROTOMÈRES · autant de sites actifs que de sous-unités", "bleu")]),
      E("Les sous-unités sont liées par des liaisons faibles : le changement de forme d'une sous-unité peut se transmettre aux autres.", [LG("liaisons faibles entre sous-unités → le changement se TRANSMET", "noir", { puce: "•" })]),
      E("Comparons avec une enzyme michaélienne.", [EFF(), T("Michaélienne / allostérique"), GRI(["", "Michaélienne", "Allostérique"], [
        ["Sites", "sites actifs indépendants", "actifs + allostériques, qui « communiquent »"],
        ["Structure", "une ou plusieurs sous-unités", "presque toujours plusieurs"],
        ["Courbe vᵢ = f([S])", "HYPERBOLE", "SIGMOÏDE (en S)"],
        ["Affinité", "constante (Km)", "variable (K0,5)"],
        ["Régulée par", "[S], pH, T°, inhibiteurs", "+ effecteurs allostériques"]
      ], true)]),
      E("La grande différence : la courbe. <b>Hyperbole</b> pour la michaélienne, <b>sigmoïde</b> pour l'allostérique. Et on ne parle plus de Km, mais de <b>K0,5</b> : la concentration de substrat qui donne la moitié de la Vmax.", [MONTRE(3), MONTRE(4), POST("Michaélienne : hyperbole, Km · allostérique : sigmoïde, K0,5", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle est la forme de la courbe vᵢ = f([S]) d'une enzyme allostérique ?", ["Sigmoïde (en S)", "Hyperbole", "Droite", "Cloche"], "Une michaélienne donne une hyperbole."),
      qcm("a2", "Qu'est-ce que le K0,5 ?", ["La [S] qui donne Vmax/2 pour une enzyme allostérique", "La moitié du Km", "La vitesse à pH 0,5", "Le nombre de sous-unités"], "On ne parle plus de Km.")
    ],
    revision: [
      vf("r1", "Une enzyme allostérique a presque toujours plusieurs sous-unités.", true, "Vrai : structure quaternaire.")
    ]
  },
  {
    id: "bc-enzymes-25", fiche: F9, ficheTitre: F9T, titre: "La coopérativité",
    classe: [
      E("Pourquoi une courbe en S ? À cause de la <b>coopérativité</b> : la fixation d'un substrat sur une sous-unité modifie l'affinité des autres sites actifs. C'est le même phénomène que l'O₂ sur l'hémoglobine.", [T("La coopérativité"), LG("fixation sur 1 site → affinité des AUTRES sites modifiée (comme l'O₂ sur l'Hb)", "bleu")]),
      E("<b>Positive</b>, le plus fréquent : l'affinité des autres sites augmente. D'où la courbe en S : à faible substrat, l'enzyme travaille peu ; puis une petite variation de substrat dans la zone moyenne fait beaucoup varier la vitesse. Un vrai <b>interrupteur</b>.", [LG("POSITIVE : affinité ↑ → courbe en S → effet « INTERRUPTEUR »", "vert", { puce: "•" })]),
      E("<b>Négative</b>, rare : l'affinité des autres sites diminue. Exemple : le NAD⁺ sur la glycéraldéhyde-3-P déshydrogénase.", [LG("NÉGATIVE (rare) : affinité ↓", "rouge", { puce: "•" })]),
      E("Deux mots de vocabulaire. Effet <b>homotrope</b> : la molécule qui se fixe agit sur la fixation de la <b>même</b> molécule, substrat sur substrat, O₂ sur O₂. Effet <b>hétérotrope</b> : un effecteur <b>différent</b> du substrat modifie sa fixation, comme les activateurs, les inhibiteurs, ou l'effet Bohr pour l'hémoglobine.", [EFF(), T("Homotrope ou hétérotrope ?"), GRI(["Effet", "Qui agit sur qui ?", "Exemple"], [["Homotrope", "la même molécule", "substrat sur substrat · O₂ sur O₂"], ["Hétérotrope", "un effecteur différent du substrat", "activateurs, inhibiteurs · effet Bohr"]], true), POST("Homotrope : même molécule · hétérotrope : effecteur différent", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Que produit une coopérativité positive ?", ["Une courbe sigmoïde, effet interrupteur", "Une hyperbole", "Une droite", "Une inhibition totale"], "L'affinité des autres sites augmente."),
      qcm("a2", "L'effet Bohr sur l'hémoglobine est un effet…", ["Hétérotrope", "Homotrope", "Michaélien", "Irréversible"], "H⁺ et CO₂ sont différents de l'O₂.")
    ],
    revision: [
      qcm("r1", "Qu'est-ce qu'un effet homotrope ?", ["La fixation d'une molécule agit sur la fixation de la même molécule", "Un effecteur différent agit sur le substrat", "Une inhibition irréversible", "Un changement de pH"], "Ex. O₂ sur O₂ pour l'hémoglobine.")
    ]
  },
  {
    id: "bc-enzymes-26", fiche: F9, ficheTitre: F9T, titre: "Formes T et R",
    classe: [
      E("Une enzyme allostérique a deux états. La forme <b>T</b>, tendue : faible affinité, peu active. La forme <b>R</b>, relâchée : forte affinité, active.", [T("Formes T et R"), GRI(["Forme", "Affinité", "Activité"], [["T (tendue)", "faible", "peu active"], ["R (relâchée)", "forte", "active"]], true)]),
      E("Au départ, les sous-unités sont surtout en forme T. La fixation du substrat les fait passer en forme R : c'est la <b>transition allostérique</b>.", [EQ("T →(substrat, activateur) R · R →(inhibiteur) T")]),
      E("Un <b>activateur</b> facilite le passage T vers R : la courbe se décale vers la <b>gauche</b>, il faut moins de substrat, le K0,5 baisse. Un <b>inhibiteur</b> favorise R vers T : la courbe se décale vers la <b>droite</b>, le K0,5 monte. Les effecteurs agissent surtout sur l'affinité, peu sur la Vmax.", [EFF(), T("Effet des effecteurs"), LG("ACTIVATEUR → forme R → courbe à GAUCHE (K0,5 ↓)", "vert", { puce: "•" }), LG("INHIBITEUR → forme T → courbe à DROITE (K0,5 ↑)", "rouge", { puce: "•" }), LG("Vmax presque inchangée", "noir", { puce: "•" })]),
      E("À très forte dose d'activateur, toute l'enzyme est en forme R : la courbe redevient une hyperbole, la coopérativité disparaît. On parle de désensibilisation.", [POST("Activateur → R, courbe à gauche · inhibiteur → T, courbe à droite · Vmax ≈ inchangée", "cle")], "reflechit")
    ],
    questions: [
      qcm("a1", "Que fait un activateur allostérique sur la courbe ?", ["Il la décale vers la gauche (K0,5 diminue)", "Il la décale vers la droite", "Il augmente beaucoup la Vmax", "Il la transforme en droite"], "Il favorise la forme R."),
      qcm("a2", "Quelle forme d'une enzyme allostérique est la plus active ?", ["R (relâchée)", "T (tendue)", "Les deux pareil", "Aucune"], "Forte affinité.")
    ],
    revision: [
      vf("r1", "Les effecteurs allostériques modifient surtout la Vmax.", false, "Faux : surtout l'affinité (K0,5) ; la Vmax change peu."),
      qcm("r2", "Que signifie la lettre T de la forme T ?", ["Tendue (faible affinité)", "Totale", "Transformée", "Transitoire"], "R = relâchée."), qcm("r3", "Dans quel sens un inhibiteur allostérique décale-t-il la courbe ?", ["Vers la droite (K0,5 augmente)", "Vers la gauche", "Vers le haut", "Il ne la décale pas"], "Il favorise la forme T.")
    ]
  },
  {
    id: "bc-enzymes-27", fiche: F9, ficheTitre: F9T, titre: "Deux modèles et l'ATCase",
    classe: [
      E("Deux modèles pour expliquer l'allostérie.", [T("Deux modèles"), GRI(["", "Concerté (MWC)", "Séquentiel (KNF)"], [
        ["Auteurs", "Monod, Wyman, Changeux", "Koshland, Némethy, Filmer"],
        ["Changement de forme", "SIMULTANÉ : toutes les sous-unités ensemble", "PROGRESSIF : sous-unité par sous-unité"],
        ["Coopérativité", "positive seulement", "positive ou négative"],
        ["Exemples", "ATCase, PFK-1", "glycéraldéhyde-3-P DH (négative)"]
      ], true)]),
      E("Le modèle <b>concerté</b>, MWC : toutes les sous-unités passent ensemble de T à R. Le modèle <b>séquentiel</b>, KNF : seule la sous-unité qui fixe le ligand change, puis elle influence ses voisines. Ce sont des modèles simplifiés : beaucoup de protéines, dont l'hémoglobine, sont entre les deux.", [MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4)]),
      E("L'exemple classique : l'<b>ATCase</b>, aspartate transcarbamylase. Elle fait la 1re étape de la synthèse des <b>pyrimidines</b>. Étudiée chez la bactérie E. coli. Coopérativité positive pour l'aspartate.", [EFF(), T("L'ATCase"), EQ("aspartate + carbamoylphosphate → carbamoyl-aspartate (→ pyrimidines)")]),
      E("L'<b>ATP</b>, une purine, signal d'énergie, est <b>activateur</b> : équilibre entre purines et pyrimidines. Le <b>CTP</b>, produit final de la voie, est <b>inhibiteur</b> : c'est une rétro-inhibition quand les pyrimidines sont en excès. Chez l'humain, l'étape régulée de cette voie est une autre enzyme, la carbamoyl-phosphate synthétase II.", [LG("⊕ ATP (purine) · ⊖ CTP (produit final : rétro-inhibition)", "vert", { puce: "•" }), POST("ATCase : ⊕ ATP, ⊖ CTP (rétro-inhibition)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Dans le modèle concerté (MWC), comment changent les sous-unités ?", ["Toutes ensemble, simultanément", "Une par une", "Jamais", "Seulement en coopérativité négative"], "Tout l'oligomère est T ou R."),
      qcm("a2", "Quel est l'inhibiteur de l'ATCase ?", ["Le CTP, produit final de la voie", "L'ATP", "L'aspartate", "Le glucose"], "Rétro-inhibition.")
    ],
    revision: [
      qcm("r1", "Quel modèle permet une coopérativité négative ?", ["Le modèle séquentiel (KNF)", "Le modèle concerté (MWC)", "Le modèle de Michaelis", "Aucun"], "Changement progressif, formes mixtes possibles.")
    ]
  },
  {
    id: "bc-enzymes-28", fiche: F9, ficheTitre: F9T, titre: "Réguler une voie métabolique",
    classe: [
      E("Imagine une chaîne de réactions, A vers B vers C vers D vers P, chaque étape faite par une enzyme, E1 à E4. Deux contrôles.", [T("Réguler une voie"), EQ("A →(E1) B →(E2) C →(E3) D →(E4) P")]),
      E("La <b>rétro-inhibition</b>, ou rétrocontrôle négatif : le produit final P est souvent l'inhibiteur allostérique de la <b>1re enzyme</b>, E1. Quand P est en excès, toute la chaîne s'arrête : on ne gaspille pas les matières premières et on n'accumule pas d'intermédiaires.", [LG("RÉTRO-INHIBITION : P ⊖ E1 → toute la chaîne s'arrête", "rouge", { taille: "grand" })]),
      E("Exemples : le CTP sur l'ATCase ; le cholestérol sur l'HMG-CoA réductase.", [LG("ex. CTP ⊖ ATCase · cholestérol ⊖ HMG-CoA réductase", "rouge", { puce: "•" })]),
      E("L'<b>activation anticipée</b> : un métabolite du début de la voie active une enzyme plus loin, pour préparer la suite. Exemple : le fructose 1,6-bisphosphate active la pyruvate kinase.", [LG("ACTIVATION ANTICIPÉE : B ⊕ E3 · ex. fructose 1,6-bisP ⊕ pyruvate kinase", "vert", { taille: "grand" })]),
      E("Les signaux, ce sont souvent l'état d'énergie de la cellule. ATP élevé : « assez d'énergie ». AMP élevé : « manque d'énergie ». Ou l'abondance d'un intermédiaire, comme le citrate ou l'acétyl-CoA. Délai : seconde à minute, plus rapide que les hormones.", [POST("Rétro-inhibition : produit final ⊖ 1re enzyme · activation anticipée · ATP = énergie ok, AMP = manque", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce que la rétro-inhibition ?", ["Le produit final d'une voie inhibe la 1re enzyme", "Le substrat active la dernière enzyme", "L'enzyme est détruite", "Une hormone bloque la voie"], "Ex. CTP sur l'ATCase."),
      qcm("a2", "Que signale un taux élevé d'AMP dans la cellule ?", ["Un manque d'énergie", "Un excès d'énergie", "Un excès de glucose", "Un excès de cholestérol"], "ATP élevé = énergie suffisante.")
    ],
    revision: [
      qcm("r1", "Quel est un exemple d'activation anticipée ?", ["Le fructose 1,6-bisphosphate active la pyruvate kinase", "Le cholestérol freine l'HMG-CoA réductase", "Le CTP freine l'ATCase", "L'ATP freine la PFK-1"], "Un métabolite du début active une enzyme plus loin.")
    ]
  },
  {
    id: "bc-enzymes-29", fiche: F9, ficheTitre: F9T, titre: "La PFK-1",
    classe: [
      E("Exemple-clé : la <b>PFK-1</b>, phosphofructokinase-1. Elle fait la 3e étape de la glycolyse : fructose 6-P plus ATP donne fructose 1,6-bisP. C'est l'étape d'engagement, la plus lente : elle donne le rythme de toute la voie.", [T("La PFK-1"), EQ("Fructose 6-P + ATP → Fructose 1,6-bisP + ADP (PFK-1)")]),
      E("Elle « mesure » l'énergie de la cellule.", [GRI(["Activateurs ⊕", "Inhibiteurs ⊖"], [["AMP, ADP (énergie basse)", "ATP (énergie suffisante)"], ["fructose 2,6-bisP (PFK-2, insuline)", "citrate (excès d'intermédiaires de Krebs)"], ["", "H⁺"]], true)]),
      E("Beaucoup d'AMP : énergie basse, elle accélère la glycolyse pour refaire de l'ATP. Beaucoup d'ATP et de citrate : énergie suffisante, elle freine.", [POST("PFK-1 : ⊖ ATP, citrate · ⊕ AMP, fructose 2,6-bisP", "cle")]),
      E("Subtil : l'<b>ATP</b> est à la fois substrat et inhibiteur ! Le site actif a plus d'affinité pour lui que le site allostérique. À faible dose, il va surtout sur le site actif. À forte dose, quand l'énergie est suffisante, il occupe aussi le site allostérique et freine l'enzyme.", [POST("ATP : substrat ET inhibiteur de la PFK-1", "piege")], "reflechit"),
      E("Le <b>fructose 2,6-bisphosphate</b>, activateur très puissant, est fabriqué par la PFK-2, elle-même réglée dans le foie par l'<b>insuline</b>, qui l'active, et le <b>glucagon</b>, qui la freine. Il freine aussi la fructose 1,6-bisphosphatase : glycolyse en hausse, néoglucogenèse en baisse.", [EQ("insuline ⊕ PFK-2 → fructose 2,6-bisP ⊕ PFK-1 (glycolyse ↑, néoglucogenèse ↓)")], "content")
    ],
    questions: [
      qcm("a1", "Lequel de ces effecteurs active la PFK-1 ?", ["L'AMP", "L'ATP", "Le citrate", "Les H⁺"], "AMP élevé = énergie basse."),
      qcm("a2", "Pourquoi l'ATP freine-t-il la PFK-1 alors que c'est son substrat ?", ["À forte dose, il occupe aussi le site allostérique", "Il est dénaturé", "Il devient AMP", "Il change le pH"], "Énergie suffisante → glycolyse freinée.")
    ],
    revision: [
      qcm("r1", "Quelle enzyme fabrique le fructose 2,6-bisphosphate ?", ["La PFK-2", "La PFK-1", "La pyruvate kinase", "L'hexokinase"], "Elle-même réglée par l'insuline (+) et le glucagon (−)."),
      vf("r2", "Le citrate active la PFK-1.", false, "Faux : il l'inhibe (excès d'intermédiaires du cycle de Krebs).")
    ]
  },
  {
    id: "bc-enzymes-30", fiche: F9, ficheTitre: F9T, titre: "Allostérie et nutrition",
    classe: [
      E("Ce tableau relie tes fiches de métabolisme. À comprendre, pas à apprendre par cœur.", [T("Les grandes enzymes allostériques"), GRI(["Enzyme (voie)", "⊕", "⊖"], [
        ["Hexokinase (glycolyse, muscle)", "—", "glucose 6-P"],
        ["PFK-1 (glycolyse)", "AMP, ADP, F2,6-bisP", "ATP, citrate, H⁺"],
        ["Pyruvate kinase (glycolyse)", "fructose 1,6-bisP", "ATP, alanine"],
        ["Pyruvate carboxylase (néoglucogenèse)", "acétyl-CoA", "—"],
        ["Glycogène phosphorylase", "AMP (muscle)", "ATP, glucose 6-P ; glucose (foie)"],
        ["Glycogène synthase", "glucose 6-P", "—"],
        ["Acétyl-CoA carboxylase (lipogenèse)", "citrate", "palmitoyl-CoA"],
        ["CPT-I (β-oxydation)", "—", "malonyl-CoA"],
        ["Carbamoyl-phosphate synthétase I (urée)", "N-acétylglutamate", "—"]
      ])]),
      E("La logique générale : énergie abondante, ATP et citrate, donc <b>stockage</b>. Énergie faible, AMP, donc <b>dégradation</b>.", [POST("Énergie abondante (ATP, citrate) → stockage · énergie faible (AMP) → dégradation", "cle")], "reflechit"),
      E("Les nutriments ne sont pas eux-mêmes des effecteurs, mais leur métabolisme en produit. Après un repas : glucose 6-P, citrate, ATP en hausse, donc stockage. Au jeûne ou à l'effort : AMP et acétyl-CoA en hausse, donc dégradation et néoglucogenèse.", [EFF(), T("Allostérie et nutrition"), LG("REPAS : glucose 6-P, citrate, ATP ↑ → stockage", "vert", { puce: "•" }), LG("JEÛNE, EFFORT : AMP, acétyl-CoA ↑ → dégradation, néoglucogenèse", "rouge", { puce: "•" })]),
      E("Attention : les <b>hormones</b>, insuline, glucagon, adrénaline, ne sont <b>pas</b> des effecteurs allostériques. Elles agissent par leur récepteur, puis par phosphorylation des enzymes, en minutes, ou en faisant fabriquer des enzymes, en heures ou jours.", [POST("Hormones ≠ effecteurs allostériques (récepteur → phosphorylation ou synthèse d'enzymes)", "piege")], "pointe"),
      E("Et la <b>phénylcétonurie</b> : normalement, la phénylalanine hydroxylase est activée par son propre substrat, la Phe. Dans la maladie, l'enzyme est absente : la Phe s'accumule. Bravo, tu as fini les enzymes !", [EFF(), T("L'essentiel de la fiche 9"), POST("Allostérique : site actif + site allostérique · sigmoïde, K0,5 · coopérativité · T ⇄ R · rétro-inhibition · PFK-1 : ⊖ ATP, citrate ; ⊕ AMP · hormones ≠ effecteurs", "cle")], "content")
    ],
    questions: [
      vf("a1", "L'insuline est un effecteur allostérique.", false, "Faux : elle agit par son récepteur, puis par phosphorylation ou synthèse d'enzymes."),
      qcm("a2", "Quel effecteur active la pyruvate carboxylase de la néoglucogenèse ?", ["L'acétyl-CoA", "L'AMP", "Le glucose", "L'insuline"], "Il vient de la β-oxydation au jeûne.")
    ],
    revision: [
      qcm("r1", "Après un repas, quels effecteurs augmentent ?", ["Glucose 6-P, citrate, ATP", "AMP et acétyl-CoA", "Malonyl-CoA seulement", "Aucun"], "Ils orientent vers le stockage."),
      qcm("r2", "Quelle molécule bloque la CPT-I, et donc la β-oxydation ?", ["Le malonyl-CoA", "Le citrate", "L'AMP", "Le glucose 6-P"], "On ne dégrade pas les AG qu'on fabrique.")
    ]
  }

  ]
};
