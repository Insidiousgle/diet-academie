// Cours : Les acides nucléiques (Sciences › Biochimie › Biochimie structurale)
// Source : fiche « Les protéines » 6, Structure des acides nucléiques.
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F6 = "Fiche 6", F6T = "Structure des acides nucléiques";

export default {
  id: "bc-acides-nucleiques",
  titre: "Les acides nucléiques",
  persos: {},
  carte: {
    depart: "L'ADN porte la recette de toutes tes protéines. Comment est-il construit, et comment la recette devient-elle une protéine ?",
    etapes: [
      { titre: "Les nucléotides", verbe: "Je décompose", question: "Les briques des acides nucléiques", mots: "nucléoside · nucléotide · purines · pyrimidines · ATP" },
      { titre: "L'ADN", verbe: "J'enroule", question: "La double hélice et la chromatine", mots: "phosphodiester · A-T, G-C · antiparallèles · histones" },
      { titre: "Les ARN", verbe: "Je copie", question: "ARN messager, de transfert, ribosomique", mots: "ribose · uracile · 1 brin" },
      { titre: "ADN → protéine", verbe: "Je traduis", question: "Réplication, transcription, traduction", mots: "épissage · codon · AUG · sites P et A" },
      { titre: "Mutations", verbe: "Je repère", question: "Quand la séquence change", mots: "substitution · délétion · décalage du cadre" }
    ],
    arrivee: "Tu sais décrire l'ADN et les ARN, et suivre le trajet de l'information du gène jusqu'à la protéine."
  },
  lecons: [
  {
    id: "bc-acides-nucleiques-01", fiche: F6, ficheTitre: F6T, titre: "Nucléoside et nucléotide",
    classe: [
      E("Les acides nucléiques, l'ADN et les ARN, sont faits de briques : les <b>nucléotides</b>. Un nucléotide a 3 morceaux.", [T("Nucléoside et nucléotide"), RANG([
        { titre: "Base azotée", x: "purique ou pyrimidique · accrochée au carbone 1′", c: "bleu" },
        { titre: "Pentose", x: "sucre à 5 carbones (1′ à 5′) : ribose ou désoxyribose", c: "vert" },
        { titre: "Phosphate(s)", x: "1 à 3, sur le carbone 5′", c: "rouge" }
      ])]),
      E("Un <b>nucléoside</b>, c'est une base azotée plus un pentose, unis par une liaison <b>N-glycosidique</b>, entre un azote de la base et le carbone 1′ du sucre. Pas de phosphate.", [MONTRE(1), MONTRE(2), EQ("Nucléoside = base + pentose (liaison N-glycosidique, C1′)")]),
      E("Un <b>nucléotide</b>, c'est un nucléoside plus 1 à 3 phosphates, fixés sur le carbone 5′. Mono-, di- ou triphosphate : AMP, ADP, ATP. C'est le monomère des acides nucléiques.", [MONTRE(3), EQ("Nucléotide = nucléoside + phosphate(s) (C5′) · ex. AMP, ADP, ATP")]),
      E("Le carbone <b>2′</b> fait la différence. Le <b>ribose</b> porte un OH en 2′ : on fait de l'<b>ARN</b>. Le <b>désoxyribose</b> a un simple H : on fait de l'<b>ADN</b>, avec des nucléotides notés dAMP, dATP. Et le OH du carbone 3′ sert à accrocher le nucléotide suivant.", [EFF(), T("Ribose ou désoxyribose ?"), LG("RIBOSE : OH en 2′ → ARN", "vert", { puce: "•" }), LG("DÉSOXYRIBOSE : H en 2′ → ADN (dAMP, dATP…)", "bleu", { puce: "•" }), LG("OH en 3′ : accroche le nucléotide suivant", "noir", { puce: "•" })]),
      E("Le phosphate donne aux acides nucléiques leur caractère <b>acide</b>.", [POST("Nucléoside = base + pentose · nucléotide = nucléoside + phosphate(s) en C5′", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce qui distingue un nucléotide d'un nucléoside ?", ["Le ou les phosphates", "La base azotée", "Le sucre", "La liaison N-glycosidique"], "Nucléotide = nucléoside + phosphate(s)."),
      qcm("a2", "Qu'est-ce qui distingue le désoxyribose du ribose ?", ["Un H à la place du OH en 2′", "Un carbone en plus", "Un phosphate en 5′", "Un azote"], "Désoxyribose → ADN ; ribose → ARN.")
    ],
    revision: [
      qcm("r1", "Sur quel carbone du sucre se fixent les phosphates d'un nucléotide ?", ["Le carbone 5′", "Le carbone 1′", "Le carbone 2′", "Le carbone 3′"], "La base, elle, est sur le C1′."),
      vf("r2", "L'ATP est un nucléotide.", true, "Vrai : adénosine triphosphate."),
      qcm("r3", "Quelle liaison unit la base au sucre dans un nucléoside ?", ["Une liaison N-glycosidique", "Une liaison phosphodiester", "Une liaison peptidique", "Une liaison hydrogène"], "Entre un azote de la base et le carbone 1′.")
    ]
  },
  {
    id: "bc-acides-nucleiques-02", fiche: F6, ficheTitre: F6T, titre: "Les bases azotées",
    classe: [
      E("Deux familles de bases. Les <b>purines</b> : 2 cycles accolés, un hexagone plus un pentagone. Les <b>pyrimidines</b> : 1 seul cycle à 6 atomes.", [T("Les bases azotées"), GRI(["Famille", "Base", "Nucléoside", "Présente dans"], [
        ["Purine (2 cycles)", "Adénine (A)", "adénosine", "ADN et ARN · avec T ou U"],
        ["Purine (2 cycles)", "Guanine (G)", "guanosine", "ADN et ARN · avec C"],
        ["Pyrimidine (1 cycle)", "Cytosine (C)", "cytidine", "ADN et ARN · avec G"],
        ["Pyrimidine (1 cycle)", "Thymine (T)", "thymidine", "ADN seulement"],
        ["Pyrimidine (1 cycle)", "Uracile (U)", "uridine", "ARN seulement"]
      ], true)]),
      E("Les purines : <b>adénine</b> et <b>guanine</b>. Les pyrimidines : <b>cytosine</b>, <b>thymine</b> et <b>uracile</b>.", [POST("Purines A, G (2 cycles) · pyrimidines C, T, U (1 cycle)", "cle")]),
      E("La <b>thymine</b> n'existe que dans l'<b>ADN</b>, l'<b>uracile</b> que dans l'<b>ARN</b>. La thymine, c'est un uracile avec un méthyle en plus.", [LG("T : ADN seulement · U : ARN seulement · T = U + un méthyle", "rouge", { taille: "grand" })], "reflechit"),
      E("Piège de vocabulaire : ne confonds pas les bases, cytosine et thymine, avec les acides aminés, cystéine et thréonine !", [POST("Cytosine ≠ cystéine · thymine ≠ thréonine", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Quelles bases sont des purines ?", ["Adénine et guanine", "Cytosine et thymine", "Uracile et cytosine", "Thymine et adénine"], "Purines : 2 cycles accolés."),
      qcm("a2", "Quelle base trouve-t-on dans l'ARN mais pas dans l'ADN ?", ["L'uracile", "La thymine", "L'adénine", "La guanine"], "T dans l'ADN, U dans l'ARN.")
    ],
    revision: [
      paires("r1", "Relie chaque base à son nucléoside.", [["Adénine", "Adénosine"], ["Guanine", "Guanosine"], ["Cytosine", "Cytidine"], ["Uracile", "Uridine"]], "Avec le désoxyribose : désoxyadénosine, etc."),
      vf("r2", "La thymine se trouve dans l'ADN, l'uracile dans l'ARN.", true, "Vrai : T = U + un méthyle.")
    ]
  },
  {
    id: "bc-acides-nucleiques-03", fiche: F6, ficheTitre: F6T, titre: "Les rôles des nucléotides",
    classe: [
      E("Les nucléotides ne servent pas qu'à faire l'ADN. Ils ont six grands rôles.", [T("Les rôles des nucléotides"), GRI(["Rôle", "Exemples"], [
        ["Monomères", "dATP, dGTP, dCTP, dTTP → ADN · ATP, GTP, CTP, UTP → ARN"],
        ["Énergie", "ATP + H₂O → ADP + Pi + énergie · GTP (synthèse des protéines)"],
        ["Signalisation", "AMPc, GMPc : seconds messagers · GTP/GDP : protéines G"],
        ["Coenzymes", "NAD⁺, NADP⁺, FAD (électrons) · coenzyme A"],
        ["Méthylation", "SAM : donneur de groupes méthyle"],
        ["Précurseurs activés", "UDP-glucose (glycogène) · CDP-choline (phospholipides)"]
      ], true)]),
      E("Un : les <b>monomères</b> des acides nucléiques. Deux : l'<b>énergie</b>. L'énergie est stockée dans les liaisons entre phosphates de l'ATP. Son hydrolyse en ADP plus Pi libère de l'énergie pour la contraction musculaire, le transport actif, les synthèses. L'ATP est sans cesse régénéré par la respiration cellulaire.", [MONTRE(1), MONTRE(2), EQ("ATP + H₂O → ADP + Pi + énergie")]),
      E("Trois : la <b>signalisation</b>. L'<b>AMPc</b> et le GMPc sont des seconds messagers : ils relaient et amplifient le signal d'une hormone dans la cellule, comme la cascade de l'AMPc du glucagon.", [MONTRE(3)]),
      E("Quatre : les <b>coenzymes</b> : NAD⁺, NADP⁺, FAD pour les transferts d'électrons ; le coenzyme A. Cinq : la <b>méthylation</b>, avec la SAM, la S-adénosylméthionine. Six : des <b>précurseurs activés</b>, comme l'UDP-glucose pour fabriquer le glycogène.", [MONTRE(4), MONTRE(5), MONTRE(6), POST("Rôles : ADN/ARN · énergie (ATP) · seconds messagers (AMPc) · coenzymes (NAD⁺, FAD, CoA) · SAM", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel nucléotide est un second messager ?", ["L'AMPc", "Le dATP", "L'UTP", "Le FAD"], "Il relaie le signal hormonal, comme celui du glucagon."),
      qcm("a2", "Où est stockée l'énergie de l'ATP ?", ["Dans les liaisons entre phosphates", "Dans la base adénine", "Dans le ribose", "Dans la liaison N-glycosidique"], "Hydrolyse : ATP → ADP + Pi.")
    ],
    revision: [
      qcm("r1", "À quoi sert l'UDP-glucose ?", ["À fabriquer le glycogène", "À transporter l'O₂", "À méthyler l'ADN", "À fabriquer l'urée"], "C'est un précurseur activé."),
      qcm("r2", "Quel nucléotide est le donneur de groupes méthyle ?", ["La SAM (S-adénosylméthionine)", "L'AMPc", "Le NAD⁺", "Le GTP"], "Elle devient SAH, qui freine les méthylations."),
      qcm("r3", "De quel type de molécule le NAD⁺ fait-il partie ?", ["Un nucléotide qui sert de coenzyme", "Un acide aminé", "Un lipide", "Une hormone stéroïde"], "NAD⁺, NADP⁺, FAD : transfert d'électrons.")
    ]
  },
  {
    id: "bc-acides-nucleiques-04", fiche: F6, ficheTitre: F6T, titre: "Nucléotides, purines et goutte",
    classe: [
      E("Dans l'alimentation, on trouve des nucléotides en petites quantités dans la plupart des aliments, surtout viandes, poissons, champignons, légumineuses. On en ajoute à certains laits infantiles : ils sont dans le lait maternel et pourraient soutenir l'immunité du nourrisson.", [T("Nucléotides et alimentation"), LG("viandes, poissons, champignons, légumineuses · ajoutés à certains laits infantiles", "noir")]),
      E("Mais l'organisme sait les fabriquer : ils ne sont <b>pas indispensables</b> chez l'adulte.", [LG("fabriqués par l'organisme → NON indispensables chez l'adulte", "vert", { puce: "•" })]),
      E("Leur dégradation : les <b>purines</b>, A et G, deviennent de l'<b>acide urique</b>, éliminé dans les urines.", [EQ("purines (A, G) → ACIDE URIQUE → urines")]),
      E("Un excès d'acide urique, l'<b>hyperuricémie</b>, peut provoquer la <b>goutte</b>, des cristaux dans les articulations, et des calculs rénaux.", [LG("HYPERURICÉMIE → GOUTTE (cristaux articulaires), calculs rénaux", "rouge", { taille: "grand" })], "reflechit"),
      E("Dans ce cas, on limite les aliments riches en purines : abats, extraits de viande, anchois, sardines, harengs, fruits de mer. Et aussi la bière, l'alcool, les boissons riches en fructose.", [POST("Goutte : limiter abats, extraits de viande, anchois, sardines, harengs, fruits de mer, bière, alcool, boissons riches en fructose", "cle")], "content")
    ],
    questions: [
      qcm("a1", "En quoi les purines sont-elles dégradées ?", ["En acide urique", "En urée", "En ammoniac", "En glucose"], "Éliminé dans les urines."),
      qcm("a2", "Lequel de ces aliments faut-il limiter en cas de goutte ?", ["Les sardines", "Le riz", "Les pommes", "Le lait demi-écrémé"], "Riches en purines, comme les abats et les fruits de mer.")
    ],
    revision: [
      vf("r1", "Les nucléotides sont indispensables dans l'alimentation de l'adulte.", false, "Faux : l'organisme sait les fabriquer.")
    ]
  },
  {
    id: "bc-acides-nucleiques-05", fiche: F6, ficheTitre: F6T, titre: "L'ADN : la chaîne",
    classe: [
      E("L'<b>ADN</b>, acide désoxyribonucléique, est presque exclusivement dans le <b>noyau</b>, un peu dans les mitochondries. C'est le support de l'information génétique, divisé en <b>gènes</b>, qui codent chacun une ou plusieurs protéines ou un ARN.", [T("L'ADN : structure primaire"), LG("NOYAU (+ mitochondries) · support de l'info génétique · divisé en GÈNES", "bleu")]),
      E("C'est un polymère de désoxyribonucléotides, A, T, G, C, reliés par des liaisons <b>phosphodiester</b> : le phosphate du C5′ d'un nucléotide est relié au OH du C3′ du voisin. On obtient un squelette sucre-phosphate-sucre-phosphate.", [EQ("liaison PHOSPHODIESTER : phosphate (C5′) – OH (C3′) du voisin")]),
      E("Pour entrer dans la chaîne, un nucléotide triphosphate perd 2 phosphates, le pyrophosphate. Il n'en garde qu'un.", [LG("nucléotide triphosphate → perd 2 P (pyrophosphate) → garde 1 P", "noir", { taille: "petit" })]),
      E("La structure primaire, c'est la <b>séquence</b> : la nature et l'ordre des nucléotides. Chaque brin est <b>orienté</b> : une extrémité 5′, avec le phosphate, et une extrémité 3′-OH libre. On écrit de <b>5′ vers 3′</b>, et les nouveaux nucléotides s'ajoutent à l'extrémité 3′.", [POST("Brin orienté 5′ → 3′ · nouveaux nucléotides ajoutés en 3′", "cle")], "reflechit"),
      E("Le <b>séquençage</b>, depuis les années 1970, permet d'identifier les gènes de maladies, d'étudier l'évolution, de trouver des médicaments.", [LG("séquençage → gènes de maladies, évolution, médicaments", "vert", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quelle liaison relie les nucléotides dans l'ADN ?", ["La liaison phosphodiester", "La liaison peptidique", "La liaison osidique", "Le pont disulfure"], "Entre le phosphate du C5′ et le OH du C3′ voisin."),
      qcm("a2", "Dans quel sens écrit-on une séquence d'ADN ?", ["De 5′ vers 3′", "De 3′ vers 5′", "Du milieu vers les bouts", "Par ordre alphabétique"], "Les nouveaux nucléotides s'ajoutent en 3′.")
    ],
    revision: [
      vf("r1", "L'ADN se trouve uniquement dans le noyau.", false, "Faux : presque exclusivement, mais aussi un peu dans les mitochondries.")
    ]
  },
  {
    id: "bc-acides-nucleiques-06", fiche: F6, ficheTitre: F6T, titre: "La double hélice",
    classe: [
      E("Comment a-t-on trouvé la double hélice ? Les règles de <b>Chargaff</b> : A égale T, et G égale C. Les images de rayons X de Rosalind Franklin et Maurice Wilkins. Puis le modèle de <b>Watson et Crick</b>, en 1953.", [T("La double hélice"), LG("Chargaff : A = T, G = C · rayons X (Franklin, Wilkins) · Watson et Crick (1953)", "noir")]),
      E("L'ADN a <b>2 brins</b>, enroulés autour d'un même axe. Ils sont <b>antiparallèles</b> : l'un va de 5′ vers 3′, l'autre de 3′ vers 5′.", [LG("2 brins (BICATÉNAIRE) · ANTIPARALLÈLES (5′→3′ face à 3′→5′)", "bleu")]),
      E("Et ils sont <b>complémentaires</b> : les bases s'apparient toujours pareil, par des liaisons hydrogène. A avec T, par <b>2</b> liaisons. G avec C, par <b>3</b> liaisons, plus solide.", [EQ("A = T (2 liaisons H) · G ≡ C (3 liaisons H)"), EQ("5′-AATTGGCC-3′ ↔ 3′-TTAACCGG-5′"), SOUL()]),
      E("Les bases sont à l'<b>intérieur</b>, empilées ; le squelette sucre-phosphate est à l'<b>extérieur</b>. Environ 10 paires de bases par tour, soit 3,4 nm ; diamètre 2 nm. Un grand et un petit sillon, où se fixent les protéines qui « lisent » l'ADN.", [LG("bases DEDANS, sucre-phosphate DEHORS · 10 pb par tour (3,4 nm) · Ø 2 nm", "noir", { puce: "•" })]),
      E("L'idée clé : connaître un brin suffit pour reconstituer l'autre. C'est la base de la <b>réplication</b>.", [POST("2 brins antiparallèles et complémentaires : A-T (2 H), G-C (3 H)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien de liaisons hydrogène relient G et C ?", ["3", "2", "1", "4"], "A-T : 2 liaisons ; G-C : 3, plus solide."),
      qcm("a2", "Quel est le brin complémentaire de 5′-ATGC-3′ ?", ["3′-TACG-5′", "3′-ATGC-5′", "3′-UACG-5′", "3′-GCAT-5′"], "A-T, T-A, G-C, C-G ; brins antiparallèles.")
    ],
    revision: [
      vf("r1", "Les deux brins de l'ADN vont dans le même sens.", false, "Faux : ils sont antiparallèles."),
      qcm("r2", "Que disent les règles de Chargaff ?", ["A = T et G = C", "A = G et T = C", "Il y a 4 brins", "L'ADN contient de l'uracile"], "Donc purines = pyrimidines."),
      qcm("r3", "Pourquoi dit-on que les deux brins de l'ADN sont complémentaires ?", ["Les bases s'apparient toujours A-T et G-C", "Ils ont la même séquence", "Ils vont dans le même sens", "Ils contiennent de l'uracile"], "Connaître un brin permet de reconstituer l'autre.")
    ]
  },
  {
    id: "bc-acides-nucleiques-07", fiche: F6, ficheTitre: F6T, titre: "La chromatine",
    classe: [
      E("Un problème de rangement : chez l'humain, <b>46 chromosomes</b>, environ 6,4 milliards de paires de bases et <b>2 mètres</b> d'ADN, dans une cellule d'environ 10 µm. Il faut compacter !", [T("La chromatine"), LG("46 chromosomes · ≈ 2 m d'ADN dans une cellule de ≈ 10 µm → COMPACTION", "rouge")], "reflechit"),
      E("La <b>chromatine</b>, c'est l'ADN enroulé autour de protéines, les <b>histones</b>, des protéines basiques. Premier niveau : le <b>nucléosome</b>, de l'ADN enroulé autour de 8 histones. Ça fait comme un collier de perles.", [EQ("NUCLÉOSOME = ADN enroulé autour de 8 histones (« collier de perles »)")]),
      E("Puis le collier se replie en fibre, en boucles, en rosettes, jusqu'au <b>chromosome</b> très compact, visible pendant la division.", [EQ("double hélice → nucléosomes → fibre → boucles → chromosome")]),
      E("Deux états. L'<b>euchromatine</b> : relâchée, l'ADN est accessible, les gènes sont transcrits. L'<b>hétérochromatine</b> : compacte, gènes peu accessibles et peu actifs ; elle protège et stabilise les chromosomes.", [EFF(), T("Euchromatine ou hétérochromatine ?"), GRI(["État", "Forme", "Gènes"], [["Euchromatine", "relâchée", "accessibles, TRANSCRITS"], ["Hétérochromatine", "compacte", "peu accessibles, peu actifs · protège"]], true)]),
      E("Le passage de l'une à l'autre est dynamique : la chromatine participe ainsi à la <b>régulation</b> de l'expression des gènes.", [POST("Chromatine : ADN + histones (nucléosome) · euchromatine active / hétérochromatine compacte", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce qu'un nucléosome ?", ["De l'ADN enroulé autour de 8 histones", "Un ARN replié", "Un chromosome entier", "Un nucléotide triphosphate"], "Le « collier de perles »."),
      qcm("a2", "Dans quel état de la chromatine les gènes sont-ils transcrits ?", ["L'euchromatine (relâchée)", "L'hétérochromatine (compacte)", "Le chromosome en division", "Aucun"], "L'ADN y est accessible.")
    ],
    revision: [
      qcm("r1", "Combien de chromosomes compte une cellule humaine ?", ["46 (23 paires)", "23", "92", "64"], "Soit ≈ 2 m d'ADN."),
      vf("r2", "Les histones sont des protéines basiques.", true, "Vrai : elles sont riches en arginine et lysine."),
      qcm("r3", "Quel est le rôle de l'hétérochromatine ?", ["Compacte, elle garde les gènes peu actifs et protège les chromosomes", "Elle rend les gènes très actifs", "Elle traduit l'ARNm", "Elle réplique l'ADN"], "L'euchromatine, elle, est relâchée et active.")
    ]
  },
  {
    id: "bc-acides-nucleiques-08", fiche: F6, ficheTitre: F6T, titre: "Les ARN",
    classe: [
      E("Comparons l'ADN et les <b>ARN</b>.", [T("ADN ou ARN ?"), GRI(["", "ADN", "ARN"], [
        ["Sucre", "désoxyribose (H en 2′)", "ribose (OH en 2′)"],
        ["Bases", "A, G, C, T", "A, G, C, U (A-U : 2 liaisons H)"],
        ["Brins", "2, double hélice", "1, qui peut se replier sur lui-même"],
        ["Taille, stabilité", "très long, stable", "plus court, moins stable"],
        ["Localisation", "noyau (+ mitochondries)", "noyau et cytoplasme"],
        ["Quantité", "constante dans chaque cellule", "variable selon l'activité"]
      ], true)]),
      E("Les ARN ont le ribose, l'uracile, et <b>un seul brin</b>. Mais ce brin se replie grâce à des appariements de bases à l'intérieur. Les deux ont des liaisons phosphodiester.", [POST("ARN : ribose, U, 1 brin (replié) · plus court, moins stable", "cle")]),
      E("Trois types principaux.", [EFF(), T("Les 3 types d'ARN"), RANG([
        { titre: "ARNm (messager)", x: "copie d'un gène · emporte l'info du noyau vers les ribosomes", c: "bleu" },
        { titre: "ARNt (de transfert)", x: "forme en trèfle · apporte l'AA · son ANTICODON s'apparie au codon", c: "vert" },
        { titre: "ARNr (ribosomique)", x: "constitue les ribosomes · certains forment la liaison peptidique (ARN-enzyme)", c: "rouge" }
      ])]),
      E("L'<b>ARNm</b> : la copie d'un gène, qui part du noyau vers les ribosomes. L'<b>ARNt</b>, en forme de trèfle : il apporte l'AA, et son <b>anticodon</b> garantit que c'est le bon. L'<b>ARNr</b> : il constitue les ribosomes, et certains catalysent la liaison peptidique : un ARN qui fait l'enzyme !", [MONTRE(1), MONTRE(2), MONTRE(3)], "content")
    ],
    questions: [
      qcm("a1", "Quel ARN apporte les acides aminés au ribosome ?", ["L'ARN de transfert (ARNt)", "L'ARN messager", "L'ARN ribosomique", "L'ADN"], "Son anticodon s'apparie au codon."),
      qcm("a2", "Combien de brins a un ARN ?", ["1, qui peut se replier", "2", "3", "4"], "L'ADN en a 2.")
    ],
    revision: [
      paires("r1", "Relie chaque ARN à son rôle.", [["ARNm", "Copie d'un gène, porte le message"], ["ARNt", "Apporte l'AA (anticodon)"], ["ARNr", "Constitue le ribosome"]], "Les 3 principaux ARN."),
      vf("r2", "La quantité d'ARN est la même dans toutes les cellules.", false, "Faux : elle varie selon l'activité de la cellule (c'est l'ADN qui est constant).")
    ]
  },
  {
    id: "bc-acides-nucleiques-09", fiche: F6, ficheTitre: F6T, titre: "La réplication de l'ADN",
    classe: [
      E("Vue d'ensemble d'abord : l'information va de l'<b>ADN</b> à l'<b>ARN</b>, puis à la <b>protéine</b>. Transcription dans le noyau, traduction dans le cytoplasme.", [T("De l'ADN à la protéine"), EQ("ADN → (transcription, noyau) → ARNm → (traduction, cytoplasme) → protéine")]),
      E("Mais avant chaque division, en phase S, l'ADN est <b>copié</b> : c'est la <b>réplication</b>. Chaque cellule fille reçoit ainsi une information identique. Elle se fait en totalité ou pas du tout.", [EFF(), T("La réplication"), LG("avant chaque division (phase S) · en totalité ou pas du tout", "noir")]),
      E("Les liaisons H entre bases se rompent : le double brin s'ouvre en <b>fourche de réplication</b>. Chaque brin sert de <b>matrice</b>. L'<b>ADN polymérase</b> assemble en face les nucléotides complémentaires, toujours dans le sens <b>5′ vers 3′</b>. L'énergie vient des nucléotides triphosphates eux-mêmes.", [EQ("fourche → chaque brin = matrice → ADN POLYMÉRASE (5′ → 3′)")]),
      E("Chaque nouvelle molécule contient 1 brin ancien et 1 brin neuf : la réplication est <b>semi-conservative</b>.", [POST("Réplication SEMI-CONSERVATIVE : 1 brin ancien + 1 brin neuf (ADN polymérase)", "cle")], "reflechit"),
      E("Ensuite, l'ADN copié se réassocie aux histones et se condense en chromosomes à 2 chromatides, reliées par le centromère, pour la division.", [LG("→ chromosomes à 2 chromatides (centromère)", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi dit-on que la réplication est semi-conservative ?", ["Chaque nouvelle molécule a 1 brin ancien et 1 brin neuf", "Seule la moitié de l'ADN est copiée", "Elle conserve les introns", "Elle se fait à moitié dans le noyau"], "Chaque brin sert de matrice."),
      qcm("a2", "Quelle enzyme assemble les nucléotides lors de la réplication ?", ["L'ADN polymérase", "L'ARN polymérase", "La peptidyl-transférase", "La transcriptase inverse"], "Toujours dans le sens 5′ → 3′.")
    ],
    revision: [
      qcm("r1", "À quel moment du cycle cellulaire l'ADN est-il répliqué ?", ["En phase S, avant la division", "Pendant la traduction", "Après la mort de la cellule", "Jamais"], "Chaque cellule fille reçoit la même information.")
    ]
  },
  {
    id: "bc-acides-nucleiques-10", fiche: F6, ficheTitre: F6T, titre: "Transcription et épissage",
    classe: [
      E("L'ADN ne sort <b>jamais</b> du noyau. Un intermédiaire emporte l'information : l'<b>ARN messager</b>. Un gène, c'est une portion d'ADN qui détermine une protéine.", [T("La transcription"), LG("l'ADN ne sort JAMAIS du noyau → copie = ARNm", "rouge")]),
      E("L'<b>ARN polymérase</b> se fixe sur le <b>promoteur</b>, une région en amont du gène. Elle ouvre localement la double hélice et assemble un ARN complémentaire du brin transcrit : ribose au lieu de désoxyribose, U au lieu de T. Elle s'arrête sur une séquence de terminaison.", [EQ("ARN polymérase : PROMOTEUR → copie du brin matrice → terminaison")]),
      E("Résultat : l'ARN a la même séquence que le brin <b>non transcrit</b>, à T remplacé par U près.", [POST("ARN = même séquence que le brin NON transcrit (T → U)", "piege")], "reflechit"),
      E("Les gènes humains sont <b>discontinus</b> : des <b>exons</b>, codants, alternent avec des <b>introns</b>, non codants. La transcription copie tout : c'est le <b>pré-ARNm</b>.", [EFF(), T("L'épissage"), LG("EXONS (codants) / INTRONS (non codants) → tout est copié = pré-ARNm", "noir")]),
      E("L'<b>épissage</b> retire les introns et recolle les exons. On ajoute aussi une <b>coiffe</b> en 5′ et une <b>queue poly-A</b> en 3′, qui protègent l'ARNm. Seul l'ARNm mature sort du noyau, par les pores nucléaires.", [EQ("ÉPISSAGE : introns retirés, exons raboutés + coiffe 5′ + queue poly-A 3′ → ARNm mature"), POST("Transcription (promoteur, ARN polymérase) + épissage (introns retirés)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce que l'épissage ?", ["Le retrait des introns et le raboutage des exons", "La copie de l'ADN", "La lecture des codons", "L'ajout d'un AA"], "On obtient l'ARNm mature."),
      qcm("a2", "Où se fixe l'ARN polymérase pour commencer la transcription ?", ["Sur le promoteur", "Sur le codon AUG", "Sur le ribosome", "Sur la queue poly-A"], "Région en amont du gène.")
    ],
    revision: [
      vf("r1", "Les introns sont les parties codantes d'un gène.", false, "Faux : ce sont les exons qui codent ; les introns sont retirés."),
      qcm("r2", "À quoi servent la coiffe et la queue poly-A ?", ["À protéger l'ARNm", "À coder des AA", "À ouvrir la double hélice", "À reconnaître le promoteur"], "Ajoutées à l'ARNm mature.")
    ]
  },
  {
    id: "bc-acides-nucleiques-11", fiche: F6, ficheTitre: F6T, titre: "Le code génétique",
    classe: [
      E("Le <b>code génétique</b> : un <b>codon</b>, c'est 3 nucléotides de l'ARNm, qui correspondent à 1 AA.", [T("Le code génétique"), EQ("1 CODON = 3 nucléotides de l'ARNm = 1 acide aminé")]),
      E("4 bases, par groupes de 3 : 4 fois 4 fois 4, <b>64 codons</b>, pour 20 AA. 61 codent un AA ; 3 sont des codons <b>stop</b>, ou non-sens : UAA, UAG, UGA.", [EQ("4 × 4 × 4 = 64 codons : 61 codent un AA · 3 STOP (UAA, UAG, UGA)")]),
      E("Plusieurs codons pour un même AA : le code est <b>redondant</b>. Et il est quasi <b>universel</b>, le même chez presque tous les êtres vivants.", [LG("code REDONDANT (plusieurs codons par AA) · quasi UNIVERSEL", "bleu", { puce: "•" })]),
      E("Le codon de départ : <b>AUG</b>, qui code la méthionine. Le tableau du code est à savoir <b>lire</b>, pas à apprendre.", [POST("AUG = départ (méthionine) · UAA, UAG, UGA = stop · 64 codons", "cle")]),
      E("Exemple de lecture : UUU et UUC donnent la phénylalanine ; GCx, avec n'importe quelle 3e base, l'alanine ; UGG, le tryptophane.", [GRI(["Codon", "AA"], [["AUG", "Met (départ)"], ["UUU, UUC", "Phe"], ["GCx", "Ala"], ["UGG", "Trp"], ["UAA, UAG, UGA", "stop"]], true)], "content")
    ],
    questions: [
      qcm("a1", "Combien de codons existe-t-il ?", ["64", "20", "61", "3"], "61 codent un AA, 3 sont des stop."),
      qcm("a2", "Quel est le codon de départ de la traduction ?", ["AUG", "UAA", "UGA", "GCA"], "Il code la méthionine.")
    ],
    revision: [
      qcm("r1", "Que signifie « le code génétique est redondant » ?", ["Plusieurs codons codent le même AA", "Un codon code plusieurs AA", "Il est différent chez chaque espèce", "Il n'a pas de codon stop"], "64 codons pour 20 AA."),
      qcm("r2", "Lequel de ces codons est un codon stop ?", ["UAG", "AUG", "UUU", "GGG"], "Stop : UAA, UAG, UGA.")
    ]
  },
  {
    id: "bc-acides-nucleiques-12", fiche: F6, ficheTitre: F6T, titre: "La traduction",
    classe: [
      E("La <b>traduction</b>, dans le cytoplasme, sur le <b>ribosome</b>. L'ARNt porte un AA précis d'un côté, et un <b>anticodon</b> de l'autre, qui s'apparie au codon de l'ARNm.", [T("La traduction"), LG("ARNt : AA d'un côté · ANTICODON de l'autre (complémentaire du codon)", "bleu")]),
      E("Trois étapes. Un, l'<b>initiation</b> : l'ARNm s'associe à la petite sous-unité du ribosome ; le premier ARNt, avec la méthionine, se place sur le codon <b>AUG</b>, au site P ; la grosse sous-unité s'ajoute.", [RANG([
        { titre: "1 · Initiation", x: "ARNm + petite sous-unité · ARNt-Met sur AUG (site P) · + grosse sous-unité", c: "bleu" },
        { titre: "2 · Élongation", x: "ARNt au site A · liaison peptidique (ARNr) · le ribosome avance d'un codon", c: "vert" },
        { titre: "3 · Terminaison", x: "codon stop : pas d'ARNt · protéine libérée", c: "rouge" }
      ]), MONTRE(1)]),
      E("Deux, l'<b>élongation</b> : un 2e ARNt arrive au <b>site A</b>. La peptidyl-transférase, une activité de l'ARNr, forme la liaison peptidique. Le 1er ARNt, vide, s'en va ; le ribosome avance d'un codon. La chaîne grandit de son NH₂ vers son COOH.", [MONTRE(2)]),
      E("Trois, la <b>terminaison</b> : sur un codon stop, aucun ARNt ne correspond. La protéine est libérée, les 2 sous-unités se séparent.", [MONTRE(3), POST("Traduction : AUG (site P) → sites P et A → codon stop", "cle")]),
      E("Plusieurs ribosomes peuvent lire le même ARNm en même temps : un <b>polysome</b>. Les ribosomes libres font les protéines du cytosol ; ceux du réticulum, les protéines exportées ou membranaires.", [LG("POLYSOME : plusieurs ribosomes sur 1 ARNm · ribosomes du RE → protéines exportées", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      ordre("a1", "Remets dans l'ordre les étapes de la traduction.", ["Initiation sur le codon AUG", "Élongation : ARNt au site A, liaison peptidique", "Le ribosome avance d'un codon", "Terminaison sur un codon stop"], "La chaîne grandit du NH₂ vers le COOH."),
      qcm("a2", "Qu'est-ce qui s'apparie au codon de l'ARNm ?", ["L'anticodon de l'ARNt", "L'ARNr", "L'ADN polymérase", "Le promoteur"], "Par complémentarité des bases.")
    ],
    revision: [
      qcm("r1", "Que se passe-t-il quand le ribosome arrive sur un codon stop ?", ["Aucun ARNt ne correspond : la protéine est libérée", "Une méthionine est ajoutée", "Le ribosome recule", "L'ARNm est épissé"], "Les sous-unités se séparent."),
      qcm("r2", "Qu'est-ce qu'un polysome ?", ["Plusieurs ribosomes lisant le même ARNm", "Un ARN à plusieurs brins", "Un chromosome compacté", "Un groupe d'histones"], "La protéine est fabriquée en plusieurs exemplaires.")
    ]
  },
  {
    id: "bc-acides-nucleiques-13", fiche: F6, ficheTitre: F6T, titre: "Après la traduction",
    classe: [
      E("Après la traduction, la chaîne prend sa forme 3D, souvent avec des <b>modifications post-traductionnelles</b> : retrait de la méthionine de départ, glycosylation, phosphorylation, ponts disulfure, découpage par des protéases.", [T("Après la traduction"), LG("modifications post-traductionnelles : glycosylation, phosphorylation, ponts S–S, découpage", "bleu")]),
      E("Exemple, l'insuline : pré-pro-insuline, perte du peptide signal, pro-insuline, ponts disulfure, puis coupure du peptide C : insuline.", [EQ("pré-pro-insuline → pro-insuline → (ponts S–S, – peptide C) → insuline")]),
      E("Le <b>contrôle de l'expression des gènes</b>. Toutes les cellules ont le même ADN, mais n'expriment pas les mêmes gènes. La régulation se fait surtout au niveau de la <b>transcription</b>.", [EFF(), T("Contrôler l'expression des gènes"), LG("même ADN partout, gènes exprimés différents · régulation surtout à la TRANSCRIPTION", "noir")]),
      E("Des protéines régulatrices se fixent sur les promoteurs et activent ou inhibent le gène. L'<b>induction</b> : un signal augmente la transcription, par exemple l'insuline stimule celle de la lipoprotéine lipase. Et les hormones stéroïdes, liposolubles, traversent la membrane, se lient à un récepteur, et vont activer des gènes dans le noyau.", [LG("INDUCTION : ex. insuline → ↑ transcription de la LPL", "vert", { puce: "•" }), LG("hormones stéroïdes → récepteur intracellulaire → gènes activés", "vert", { puce: "•" }), POST("Régulation de l'expression des gènes : surtout à la transcription", "cle")], "content")
    ],
    questions: [
      qcm("a1", "À quel niveau se fait surtout le contrôle de l'expression des gènes ?", ["La transcription", "La réplication", "La dégradation des protéines", "La digestion"], "Des protéines régulatrices se fixent sur les promoteurs."),
      qcm("a2", "Lequel de ces exemples est une modification post-traductionnelle ?", ["La glycosylation", "L'épissage", "La réplication", "La transcription"], "Aussi : phosphorylation, ponts disulfure…")
    ],
    revision: [
      vf("r1", "Toutes les cellules d'un individu expriment les mêmes gènes.", false, "Faux : même ADN, mais gènes exprimés différents.")
    ]
  },
  {
    id: "bc-acides-nucleiques-14", fiche: F6, ficheTitre: F6T, titre: "Le génie génétique",
    classe: [
      E("Le <b>génie génétique</b> : une application technique de la biologie moléculaire, pour produire en grande quantité une protéine humaine pure.", [T("Le génie génétique"), LG("produire en grande quantité une protéine humaine PURE", "bleu")]),
      E("La méthode. On isole l'ARNm de la protéine. On le recopie en ADN, l'<b>ADNc</b>, par transcription inverse. On l'insère dans un <b>vecteur</b>, comme un plasmide, qu'on introduit dans une bactérie ou une levure. Elle fabrique la protéine, qu'on extrait et purifie.", [EQ("ARNm → (transcription inverse) → ADNc → vecteur (plasmide) → bactérie / levure → protéine")]),
      E("Exemples : l'insuline humaine, l'hormone de croissance, des vaccins, des enzymes.", [POST("Génie génétique : insuline humaine, hormone de croissance, vaccins", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Comment fabrique-t-on de l'insuline humaine par génie génétique ?", ["On fait fabriquer la protéine par une bactérie ou une levure qui a reçu le gène", "On l'extrait du pancréas de porc", "On la synthétise atome par atome", "On la tire de l'urine"], "Grâce à un vecteur comme un plasmide."),
      qcm("a2", "Qu'est-ce que l'ADNc ?", ["Une copie en ADN d'un ARNm, par transcription inverse", "L'ADN des chromosomes", "L'ADN des mitochondries", "Un ARN de transfert"], "On l'insère dans un vecteur.")
    ],
    revision: [
      qcm("r1", "Quel vecteur utilise-t-on souvent en génie génétique ?", ["Un plasmide", "Un ribosome", "Un nucléosome", "Une histone"], "Introduit dans une bactérie ou une levure.")
    ]
  },
  {
    id: "bc-acides-nucleiques-15", fiche: F6, ficheTitre: F6T, titre: "Les mutations",
    classe: [
      E("Une <b>mutation</b> : une modification de la séquence de l'<b>ADN</b>. Elle survient surtout lors de la réplication, une erreur de copie non réparée, ou sous l'effet d'agents <b>mutagènes</b> : UV, rayonnements, substances chimiques. Elle peut aussi être spontanée.", [T("Les mutations"), LG("modification de la séquence de l'ADN · réplication, agents mutagènes (UV…), spontanée", "noir")]),
      E("Piège : une erreur de transcription ou de traduction n'est <b>pas</b> une mutation. Elle ne touche qu'une molécule d'ARN ou de protéine.", [POST("Erreur de transcription ou de traduction ≠ mutation (ADN non touché)", "piege")], "pointe"),
      E("La plupart sont neutres ; certaines causent des maladies génétiques ou favorisent des cancers. Les types de mutations.", [EFF(), T("Les types de mutations"), GRI(["Type", "Ce qui se passe"], [
        ["Substitution", "une base remplacée par une autre (ponctuelle) · ex. drépanocytose"],
        ["Délétion / insertion", "perte / ajout de nucléotides · si pas un multiple de 3 → décalage du cadre de lecture"],
        ["Duplication", "une séquence copiée plusieurs fois"],
        ["Translocation", "un fragment déplacé ailleurs dans le génome"],
        ["Inversion", "un fragment retourné"]
      ], true)]),
      E("La <b>substitution</b> : une base remplacée par une autre, comme dans la drépanocytose, glutamate remplacé par valine. La <b>délétion</b> ou l'<b>insertion</b> : si le nombre de nucléotides n'est pas un multiple de 3, tout le <b>cadre de lecture est décalé</b>, et la protéine est souvent non fonctionnelle.", [MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4), MONTRE(5)], "reflechit"),
      E("Bravo, tu as fini les acides nucléiques !", [EFF(), T("L'essentiel"), POST("Nucléotide = base + pentose + P · purines A, G / pyrimidines C, T, U · ADN : 2 brins antiparallèles, A-T, G-C · chromatine · ARNm, ARNt, ARNr · réplication semi-conservative · transcription + épissage · traduction (AUG, stop) · mutations", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi une délétion d'un seul nucléotide est-elle souvent grave ?", ["Elle décale le cadre de lecture", "Elle ajoute un codon stop à coup sûr", "Elle détruit l'ARNt", "Elle bloque la réplication"], "Tous les codons suivants sont lus différemment."),
      vf("a2", "Une erreur de traduction est une mutation.", false, "Faux : une mutation touche l'ADN ; l'erreur de traduction ne touche qu'une protéine.")
    ],
    revision: [
      qcm("r1", "Quel type de mutation cause la drépanocytose ?", ["Une substitution", "Une délétion", "Une translocation", "Une duplication"], "Une base remplacée : Glu → Val."),
      paires("r2", "Relie chaque mutation à sa définition.", [["Substitution", "Une base remplacée"], ["Inversion", "Un fragment retourné"], ["Translocation", "Un fragment déplacé ailleurs"]], "Les mutations touchent l'ADN.")
    ]
  }
  ]
};
