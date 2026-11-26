// Cours : Coenzymes et vitamines (Sciences › Biochimie › Enzymologie)
// Source : fiches « Les protéines » 10 (Coenzymes et vitamines hydrosolubles) et 11 (Vitamines hydrosolubles et liposolubles).
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F10 = "Fiche 10", F10T = "Coenzymes et vitamines hydrosolubles";
const F11 = "Fiche 11", F11T = "Vitamines hydrosolubles et liposolubles";

export default {
  id: "bc-vitamines",
  titre: "Coenzymes et vitamines",
  persos: {},
  carte: {
    depart: "Pourquoi les marins mouraient-ils du scorbut ? Pourquoi un patient sous AVK ne doit-il pas supprimer les épinards ? Tout est dans les vitamines.",
    etapes: [
      { titre: "Les coenzymes", verbe: "Je relie", question: "Transfert et oxydoréduction", mots: "CoA · TPP · PLP · NAD⁺ · FAD" },
      { titre: "Les vitamines B et C", verbe: "J'apprends", question: "Sources, rôles, carences, une par une", mots: "béribéri · pellagre · B9 et grossesse · B12 et végétaliens · scorbut" },
      { titre: "Hydro- ou liposolubles", verbe: "Je compare", question: "La solubilité décide de tout", mots: "absorption · stockage · toxicité · biodisponibilité" },
      { titre: "Applications", verbe: "J'applique", question: "Vitamine E, réseau antioxydant, AVK", mots: "prématuré · E ← C ← glutathion · VKOR · INR" }
    ],
    arrivee: "Tu sais relier chaque vitamine à son coenzyme et ses carences, et donner les bons conseils diététiques."
  },
  lecons: [

  /* ================= FICHE 10 ================= */
  {
    id: "bc-vitamines-01", fiche: F10, ficheTitre: F10T, titre: "Rappel : les cofacteurs",
    classe: [
      E("Petit rappel. Une enzyme hétéroprotéine, c'est une <b>apoenzyme</b>, qui porte la spécificité, plus un <b>cofacteur</b>, qui porte l'activité. Ensemble : l'<b>holoenzyme</b>, seule active.", [T("Rappel : les cofacteurs"), EQ("Apoenzyme (spécificité) + cofacteur (activité) = HOLOENZYME")]),
      E("Le cofacteur est soit un <b>ion métallique</b>, lié sans liaison covalente : on parle de métalloenzyme. Soit un <b>coenzyme</b> : une petite molécule organique, souvent dérivée d'une vitamine hydrosoluble. Il transporte des groupements, des électrons ou des protons, et il est sans cesse régénéré.", [LG("ION MÉTALLIQUE → métalloenzyme (Zn, Mg, Fe, Ca, Se)", "rouge", { puce: "•" }), LG("COENZYME : petite molécule organique, souvent issue d'une vitamine · régénéré", "vert", { puce: "•" })]),
      E("Le coenzyme peut être lié <b>faiblement</b>, comme le NAD⁺ ou le CoA, ou <b>fortement</b>, souvent par liaison covalente : c'est alors un groupement prosthétique, comme la biotine ou le lipoate.", [POST("Coenzyme faiblement lié (NAD⁺, CoA) ou fortement (groupement prosthétique : biotine)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle partie de l'enzyme porte la spécificité ?", ["L'apoenzyme", "Le coenzyme", "L'ion métallique", "Le substrat"], "Le cofacteur porte l'activité."),
      qcm("a2", "D'où viennent souvent les coenzymes ?", ["Des vitamines hydrosolubles", "Des acides gras", "Du cholestérol", "Des minéraux"], "Vitamines B et C.")
    ],
    revision: [
      vf("r1", "Un coenzyme est consommé définitivement à chaque réaction.", false, "Faux : il est sans cesse régénéré."),
      qcm("r2", "Comment appelle-t-on l'apoenzyme associée à son cofacteur ?", ["L'holoenzyme", "L'holoprotéine", "Le zymogène", "Le coenzyme"], "Seule forme active.")
    ]
  },
  {
    id: "bc-vitamines-02", fiche: F10, ficheTitre: F10T, titre: "Les coenzymes de transfert",
    classe: [
      E("Les <b>coenzymes de transfert</b> font passer un groupement chimique d'une molécule à une autre.", [T("Les coenzymes de transfert"), GRI(["Coenzyme", "Vitamine", "Ce qu'il transporte"], [
        ["Coenzyme A (CoA-SH)", "B5", "groupes acyle (thioester) : acyl-CoA, acétyl-CoA"],
        ["ATP", "—", "phosphate et énergie"],
        ["TPP (thiamine pyrophosphate)", "B1", "décarboxylations (pyruvate → acétyl-CoA)"],
        ["Phosphate de pyridoxal (PLP)", "B6", "groupes amine (transaminations)"],
        ["Biotine", "B8", "CO₂ (carboxylations)"],
        ["Tétrahydrofolate (THF)", "B9", "groupes à 1 carbone (purines, thymine)"],
        ["Cobalamines", "B12", "méthylation, isomérisation"]
      ], true)]),
      E("Le <b>coenzyme A</b>, de la B5 : il porte les groupes acyle, par une liaison thioester. C'est lui qui active les acides gras et forme l'acétyl-CoA. Le <b>TPP</b>, de la B1 : les décarboxylations, comme pyruvate vers acétyl-CoA.", [MONTRE(1), MONTRE(2), MONTRE(3)]),
      E("Le <b>PLP</b>, de la B6 : les groupes amine, pour les transaminations. La <b>biotine</b>, B8 : le CO₂, pour les carboxylations.", [MONTRE(4), MONTRE(5)]),
      E("Le <b>THF</b>, de la B9 : les groupes à un carbone, pour fabriquer les bases de l'ADN. Et les <b>cobalamines</b>, B12 : méthylation et isomérisation.", [MONTRE(6), MONTRE(7), POST("Transfert : CoA (B5), ATP, TPP (B1), PLP (B6), biotine (B8), THF (B9), B12", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Que transporte le phosphate de pyridoxal (B6) ?", ["Des groupes amine", "Du CO₂", "Des électrons", "Des groupes acyle"], "Il sert aux transaminations."),
      qcm("a2", "Quel coenzyme transporte le CO₂ des carboxylations ?", ["La biotine (B8)", "Le TPP", "Le NAD⁺", "Le THF"], "Ex. acétyl-CoA carboxylase.")
    ],
    revision: [
      paires("r1", "Relie chaque coenzyme à ce qu'il transporte.", [["Coenzyme A", "Groupes acyle"], ["THF", "Groupes à 1 carbone"], ["TPP", "Décarboxylations"]], "Coenzymes de transfert.")
    ]
  },
  {
    id: "bc-vitamines-03", fiche: F10, ficheTitre: F10T, titre: "Les coenzymes d'oxydoréduction",
    classe: [
      E("Les coenzymes d'<b>oxydoréduction</b>, aussi appelés co-substrats : ils acceptent ou donnent des électrons et des protons.", [T("Les coenzymes d'oxydoréduction"), GRI(["Coenzyme", "Vitamine", "Rôle"], [
        ["NAD⁺ / NADH,H⁺", "B3", "dégradations : glycolyse, Krebs, β-oxydation, chaîne respiratoire"],
        ["NADP⁺ / NADPH,H⁺", "B3", "synthèses (réductions) : AG, cholestérol · voie des pentoses"],
        ["FAD, FMN", "B2", "β-oxydation, succinate DH, chaîne respiratoire"],
        ["Coenzyme Q (ubiquinone)", "— (fabriqué)", "électrons dans la chaîne respiratoire"]
      ], true)]),
      E("Le <b>NAD⁺</b>, de la B3 : deux nucléotides reliés. Il sert dans les <b>dégradations</b> : glycolyse, cycle de Krebs, β-oxydation, chaîne respiratoire.", [MONTRE(1)]),
      E("Le <b>NADP⁺</b>, c'est le NAD avec un phosphate en plus. Sous sa forme réduite, NADPH, il sert aux <b>synthèses</b> : acides gras, cholestérol.", [MONTRE(2), POST("NAD⁺ → dégradations · NADPH → synthèses", "astuce")], "reflechit"),
      E("Le <b>FAD</b> et le <b>FMN</b>, de la B2 : β-oxydation, cycle de Krebs, chaîne respiratoire. Et le <b>coenzyme Q</b>, liposoluble, fabriqué par l'organisme : ce n'est pas une vitamine.", [MONTRE(3), MONTRE(4), POST("Oxydoréduction : NAD⁺, NADP⁺ (B3), FAD, FMN (B2), CoQ", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel coenzyme sert surtout aux synthèses, comme celle des acides gras ?", ["Le NADPH,H⁺", "Le NAD⁺", "Le FAD", "Le TPP"], "Le NAD⁺ sert aux dégradations."),
      vf("a2", "Le coenzyme Q est une vitamine.", false, "Faux : il est fabriqué par l'organisme.")
    ],
    revision: [
      qcm("r1", "De quelle vitamine dérivent le FAD et le FMN ?", ["La B2 (riboflavine)", "La B3", "La B1", "La C"], "Coenzymes d'oxydoréduction.")
    ]
  },
  {
    id: "bc-vitamines-04", fiche: F10, ficheTitre: F10T, titre: "Les vitamines hydrosolubles",
    classe: [
      E("Les vitamines <b>hydrosolubles</b> sont 9 : les <b>8 vitamines B</b>, B1, B2, B3, B5, B6, B8, B9, B12, et la <b>vitamine C</b>.", [T("Les vitamines hydrosolubles"), LG("9 vitamines : B1, B2, B3, B5, B6, B8, B9, B12 + C", "bleu", { taille: "grand" })]),
      E("Elles agissent comme coenzymes, ou servent à les fabriquer : indispensables au métabolisme, à l'énergie, à la synthèse de l'ADN et de l'ARN.", [LG("→ coenzymes : métabolisme, énergie, ADN/ARN", "vert", { puce: "•" })]),
      E("Elles sont <b>peu ou pas stockées</b>, sauf la <b>B9</b>, environ 3 mois dans le foie, et la <b>B12</b>, plusieurs années. Elles partent surtout dans les <b>urines</b>. Il faut donc un apport alimentaire <b>régulier</b>. La flore en fabrique certaines, mais pas assez ou de façon non absorbable.", [POST("Peu stockées (sauf B9 ≈ 3 mois, B12 plusieurs années) · urines · apports réguliers", "cle")], "reflechit"),
      E("Leur parcours habituel : dans l'aliment, elles sont souvent liées ; la digestion les libère ; l'entérocyte les absorbe ; le sang les transporte ; et la cellule les transforme en <b>coenzyme actif</b>.", [EQ("aliment (liée) → hydrolyse → absorption (forme libre) → sang → cellule : COENZYME ACTIF → urines")], "content")
    ],
    questions: [
      qcm("a1", "Combien y a-t-il de vitamines hydrosolubles ?", ["9 (8 B + C)", "4", "13", "8"], "Les liposolubles sont A, D, E, K."),
      qcm("a2", "Quelles vitamines hydrosolubles sont stockées de façon importante ?", ["B9 et B12", "B1 et C", "B2 et B3", "Aucune"], "B9 ≈ 3 mois, B12 plusieurs années.")
    ],
    revision: [
      vf("r1", "Les vitamines hydrosolubles sont surtout éliminées dans les urines.", true, "Vrai : d'où la nécessité d'apports réguliers.")
    ]
  },
  {
    id: "bc-vitamines-05", fiche: F10, ficheTitre: F10T, titre: "Fragilité et populations à risque",
    classe: [
      E("Les vitamines hydrosolubles sont <b>fragiles</b>. Elles se perdent à la cuisson, dans l'eau de cuisson et par la chaleur : B1, B9, C. À la lumière : B2, B9. À l'oxygène : C.", [T("Des vitamines fragiles"), GRI(["Ennemi", "Vitamines touchées"], [["Eau de cuisson, chaleur", "B1, B9, C"], ["Lumière", "B2, B9"], ["Oxygène", "C"]], true)]),
      E("Les conseils : cuisson <b>courte</b>, à la <b>vapeur</b> ou avec <b>peu d'eau</b>, réutiliser l'eau de cuisson, et manger des fruits et légumes crus et frais.", [POST("Cuisson courte, vapeur, peu d'eau, réutiliser l'eau de cuisson · crudités", "cle")]),
      E("Les carences sont rares en France chez l'adulte bien nourri. On les rencontre surtout en cas d'<b>alcoolisme</b>, de <b>dénutrition</b>, de régime <b>végétalien</b> pour la B12, de <b>grossesse</b> pour la B9, chez la personne <b>âgée</b>, après chirurgie digestive.", [EFF(), T("Qui est à risque ?"), LG("alcoolisme · dénutrition · végétalien (B12) · grossesse (B9) · personne âgée · chirurgie digestive", "rouge")], "reflechit")
    ],
    questions: [
      qcm("a1", "Quelle vitamine est détruite par la lumière (d'où les bouteilles de lait opaques) ?", ["La B2 (riboflavine)", "La B12", "La B3", "La B5"], "Aussi la B9."),
      qcm("a2", "Quel conseil limite les pertes de vitamines hydrosolubles ?", ["Cuire peu de temps, à la vapeur ou avec peu d'eau", "Cuire longtemps dans beaucoup d'eau", "Jeter l'eau de cuisson", "Laisser les légumes tremper"], "Et réutiliser l'eau de cuisson.")
    ],
    revision: [
      qcm("r1", "Quel régime expose surtout à une carence en B12 ?", ["Le régime végétalien", "Le régime sans gluten", "Le régime hyperprotéiné", "Le régime méditerranéen"], "La B12 est presque uniquement animale.")
    ]
  },
  {
    id: "bc-vitamines-06", fiche: F10, ficheTitre: F10T, titre: "La vitamine B1 (thiamine)",
    classe: [
      E("La <b>B1</b>, ou <b>thiamine</b>. Deux cycles reliés par un pont fragile : elle est détruite par la chaleur, et par la thiaminase des poissons crus.", [T("La vitamine B1 · thiamine"), LG("fragile : chaleur, thiaminase (poissons crus), oxydation", "rouge")]),
      E("Sources : <b>levure de bière</b>, germe de blé, céréales complètes, pain complet, légumes secs ; viandes, surtout le porc, foie, produits laitiers. Les meilleures : la levure et les céréales complètes.", [LG("levure de bière, germe de blé, céréales et pain COMPLETS, légumes secs, porc", "vert", { puce: "•" })]),
      E("Devenir : absorbée dans le jéjunum ; transformée en <b>TPP</b> dans les cellules. Son stock est très faible, quelques semaines. Et l'<b>alcool</b> diminue son absorption.", [LG("forme active : TPP · stock : quelques semaines · l'ALCOOL ↓ son absorption", "bleu", { puce: "•" })]),
      E("Rôle : décarboxylation des α-cétoacides, pyruvate vers acétyl-CoA, α-cétoglutarate vers succinyl-CoA dans Krebs. Indispensable aux <b>neurones</b>, qui dépendent du glucose.", [EQ("TPP : pyruvate → acétyl-CoA · α-cétoglutarate → succinyl-CoA")]),
      E("Carence : le <b>béribéri</b>, troubles nerveux et cardiaques. Chez l'alcoolique grave : l'encéphalopathie de <b>Gayet-Wernicke</b>.", [POST("B1 → TPP · carence : béribéri, Gayet-Wernicke (alcoolisme)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle est la forme active de la vitamine B1 ?", ["Le TPP (thiamine pyrophosphate)", "Le NAD⁺", "Le FAD", "Le PLP"], "Il sert aux décarboxylations."),
      qcm("a2", "Quelle maladie est due à une carence en B1 ?", ["Le béribéri", "La pellagre", "Le scorbut", "Le rachitisme"], "Et Gayet-Wernicke chez l'alcoolique.")
    ],
    revision: [
      qcm("r1", "Pourquoi l'alcoolisme expose-t-il à la carence en B1 ?", ["L'alcool diminue son absorption (et l'alimentation est souvent pauvre)", "L'alcool détruit le foie qui la fabrique", "L'alcool apporte de la thiaminase", "L'alcool bloque la lumière"], "Risque d'encéphalopathie de Gayet-Wernicke."),
      qcm("r2", "Quelle est la meilleure source de vitamine B1 ?", ["La levure de bière", "Le lait", "Les agrumes", "L'huile d'olive"], "Aussi les céréales complètes.")
    ]
  },
  {
    id: "bc-vitamines-07", fiche: F10, ficheTitre: F10T, titre: "La vitamine B2 (riboflavine)",
    classe: [
      E("La <b>B2</b>, ou <b>riboflavine</b> : une flavine, jaune, plus un ribitol. Stable à la chaleur et en milieu acide, mais détruite par la <b>lumière</b> et les UV. D'où le lait en bouteille opaque.", [T("La vitamine B2 · riboflavine"), LG("stable à la chaleur · détruite par la LUMIÈRE → lait en bouteille opaque", "rouge")]),
      E("Sources : produits laitiers, environ 35 % ; viande, poisson, œufs, 35 % ; fruits et légumes ; pain, céréales. Une alimentation équilibrée couvre les besoins.", [LG("produits laitiers (≈ 35 %), viande, poisson, œufs (≈ 35 %)…", "vert", { puce: "•" })]),
      E("Dans les cellules, elle devient <b>FAD</b>, environ 80 %, et FMN. Stock dans le foie, le cœur, les reins : 2 à 6 semaines.", [LG("formes actives : FAD (≈ 80 %), FMN · stock 2 à 6 semaines", "bleu", { puce: "•" })]),
      E("Rôles, avec les flavoprotéines : β-oxydation, cycle de Krebs, de succinate à fumarate, chaîne respiratoire, dégradation des purines en acide urique ; et activation de la B6.", [EQ("FAD : β-oxydation · succinate → fumarate · chaîne respiratoire")]),
      E("Carence : rare ; lésions de la peau et des muqueuses, lèvres, langue, souvent avec d'autres carences.", [POST("B2 → FAD, FMN · sensible à la lumière · carence rare (peau, muqueuses)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi vend-on le lait en bouteille opaque ?", ["Pour protéger la vitamine B2 de la lumière", "Pour garder le lait froid", "Pour protéger la B12", "Pour éviter l'oxydation des graisses seulement"], "La riboflavine est détruite par la lumière."),
      qcm("a2", "Quels sont les coenzymes formés à partir de la B2 ?", ["FAD et FMN", "NAD⁺ et NADP⁺", "TPP", "CoA"], "Coenzymes d'oxydoréduction.")
    ],
    revision: [
      vf("r1", "La vitamine B2 est détruite par la chaleur.", false, "Faux : elle est stable à la chaleur, mais détruite par la lumière.")
    ]
  },
  {
    id: "bc-vitamines-08", fiche: F10, ficheTitre: F10T, titre: "La vitamine B3 (niacine, PP)",
    classe: [
      E("La <b>B3</b>, ou <b>niacine</b>, ou vitamine <b>PP</b>. Deux formes : l'acide nicotinique et le nicotinamide. Le NAD et le NADP sont très stables.", [T("La vitamine B3 · niacine (PP)"), LG("acide nicotinique + nicotinamide · très STABLE", "noir")]),
      E("Sources : viandes, foie, poissons, céréales, pain complet. Attention : dans le <b>maïs</b> et les céréales, elle est liée et peu assimilable.", [LG("viandes, foie, poissons, céréales · MAÏS : liée, peu assimilable", "vert", { puce: "•" })]),
      E("Particularité : le corps peut la fabriquer à partir du <b>tryptophane</b>. 60 mg de Trp donnent 1 mg de niacine, avec l'aide de la B6 et de la B2. Mais c'est insuffisant.", [EQ("60 mg de tryptophane → 1 mg de niacine (B6, B2) · insuffisant"), POST("B3 : seule vitamine B qu'on peut fabriquer (à partir du Trp), mais pas assez", "astuce")], "reflechit"),
      E("Formes actives : <b>NAD⁺</b> et <b>NADP⁺</b>. Pas de stock notable. Le NAD⁺ sert dans les dégradations, avec les déshydrogénases ; le NADH dans la fermentation lactique ; le NADPH dans les synthèses et la glutathion réductase.", [LG("NAD⁺ : dégradations · NADPH : synthèses, glutathion réductase", "bleu", { puce: "•" })]),
      E("Carence : la <b>pellagre</b>, et ses « <b>3 D</b> » : <b>dermatite</b>, <b>diarrhée</b>, <b>démence</b>. PP veut dire « pellagra preventive ». Rare ; populations nourries surtout de maïs, alcoolisme.", [POST("Pellagre = 3 D : dermatite, diarrhée, démence (maïs, alcoolisme)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quels sont les « 3 D » de la pellagre ?", ["Dermatite, diarrhée, démence", "Douleur, déshydratation, diabète", "Dépression, dénutrition, décès", "Diarrhée, digestion, dermatose"], "Carence en vitamine B3."),
      qcm("a2", "À partir de quel AA l'organisme peut-il fabriquer un peu de B3 ?", ["Le tryptophane", "La lysine", "La méthionine", "La glycine"], "60 mg de Trp → 1 mg de niacine.")
    ],
    revision: [
      qcm("r1", "Pourquoi les populations nourries surtout de maïs risquent-elles la pellagre ?", ["Dans le maïs, la niacine est liée et peu assimilable", "Le maïs détruit la B3", "Le maïs n'a pas de calories", "Le maïs bloque la B12"], "Pellagre = carence en B3.")
    ]
  },
  {
    id: "bc-vitamines-09", fiche: F10, ficheTitre: F10T, titre: "Les vitamines B5 et B6",
    classe: [
      E("La <b>B5</b>, l'<b>acide pantothénique</b>. « Pantos » veut dire « partout » : elle est très répandue, foie, viande, œuf, céréales. Elle entre dans le <b>coenzyme A</b>.", [T("La vitamine B5 · acide pantothénique"), LG("« pantos » = PARTOUT · → coenzyme A (CoA-SH)", "bleu")]),
      E("Pas de stock. Le CoA porte les groupes acyle : acétyl-CoA, le carrefour, malonyl-CoA, succinyl-CoA, HMG-CoA, acyl-CoA. Carence : exceptionnelle, signe d'une dénutrition avancée.", [LG("CoA : acétyl-CoA, malonyl-CoA, HMG-CoA · carence EXCEPTIONNELLE", "vert", { puce: "•" })]),
      E("La <b>B6</b>, ou <b>pyridoxine</b> : 3 formes, pyridoxine, pyridoxal, pyridoxamine. Sources animales, foie, viande, poisson, bien absorbées ; végétales, céréales, fruits, légumes, légumineuses, moins disponibles.", [EFF(), T("La vitamine B6 · pyridoxine"), LG("3 formes · animales (bien absorbées) · végétales (moins disponibles)", "noir")]),
      E("Forme active : le <b>phosphate de pyridoxal</b>, PLP. Stock très limité, dans le muscle. C'est la vitamine du <b>métabolisme azoté</b> : transaminations, ALAT, ASAT ; décarboxylations des AA en amines, sérotonine, GABA, histamine ; tryptophane vers B3 ; synthèse de l'hème.", [EQ("B6 → PLP : transaminations · amines biogènes · Trp → B3 · hème")]),
      E("Carence : rare ; troubles digestifs, nerveux et cutanés. Et attention aux compléments : à forte dose, la B6 peut causer une neuropathie.", [POST("B5 → CoA · B6 → PLP : métabolisme azoté (transaminations)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi la B6 est-elle appelée la vitamine du métabolisme azoté ?", ["Son coenzyme (PLP) sert aux transaminations et décarboxylations des AA", "Elle contient beaucoup d'azote", "Elle fabrique l'urée", "Elle transporte l'O₂"], "ALAT, ASAT, amines biogènes."),
      qcm("a2", "Dans quel coenzyme entre la vitamine B5 ?", ["Le coenzyme A", "Le NAD⁺", "Le FAD", "La biotine"], "Pantothénique + ADP + cystéamine.")
    ],
    revision: [
      vf("r1", "La carence en vitamine B5 est fréquente.", false, "Faux : exceptionnelle, car elle est présente partout.")
    ]
  },
  {
    id: "bc-vitamines-10", fiche: F10, ficheTitre: F10T, titre: "La vitamine B8 (biotine)",
    classe: [
      E("La <b>B8</b>, la <b>biotine</b>, appelée aussi B7. Un double cycle azoté et soufré avec un COOH, qui permet sa liaison <b>covalente</b> à l'apoenzyme.", [T("La vitamine B8 · biotine"), LG("fixée de façon COVALENTE à son apoenzyme", "noir")]),
      E("Sources : foie, jaune d'œuf, champignons, légumes verts ; la flore en fait, mais pas assez. Dans l'intestin, une enzyme pancréatique, la <b>biotinidase</b>, la libère des protéines.", [LG("foie, jaune d'œuf, champignons, légumes verts · libérée par la BIOTINIDASE", "vert", { puce: "•" })]),
      E("Rôle : le transfert de CO₂, les <b>carboxylations</b>. Trois carboxylases dépendent d'elle.", [GRI(["Carboxylase", "Voie"], [["Pyruvate carboxylase", "néoglucogenèse"], ["Acétyl-CoA carboxylase", "synthèse des AG"], ["Propionyl-CoA carboxylase", "AG impairs, certains AA"]], true)]),
      E("Carence : rare. Nutrition parentérale sans vitamines ; déficit génétique en biotinidase chez l'enfant ; ou beaucoup de <b>blanc d'œuf cru</b> : l'<b>avidine</b> qu'il contient fixe la biotine. Signes : lésions de la peau, chute des cheveux, l'alopécie.", [POST("B8 : carboxylations · blanc d'œuf cru (avidine) → carence · alopécie", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Pourquoi trop de blanc d'œuf cru peut-il causer une carence en biotine ?", ["L'avidine du blanc d'œuf fixe la biotine", "Le blanc d'œuf détruit le foie", "Il contient de la thiaminase", "Il bloque la lumière"], "La cuisson détruit l'avidine."),
      qcm("a2", "À quel type de réaction sert la biotine ?", ["Les carboxylations (transfert de CO₂)", "Les transaminations", "Les hydroxylations", "Les décarboxylations"], "Ex. acétyl-CoA carboxylase.")
    ],
    revision: [
      qcm("r1", "Quel signe évoque une carence en biotine ?", ["La chute des cheveux (alopécie)", "La pellagre", "Le scorbut", "L'héméralopie"], "Avec des lésions de la peau.")
    ]
  },
  {
    id: "bc-vitamines-11", fiche: F10, ficheTitre: F10T, titre: "La vitamine B9 (folates)",
    classe: [
      E("La <b>B9</b>, l'<b>acide folique</b> ; ses dérivés s'appellent les <b>folates</b>. Sensible à la chaleur et à la lumière.", [T("La vitamine B9 · folates"), LG("sensible à la chaleur et à la lumière", "rouge")]),
      E("Sources : <b>légumes à feuilles vertes</b>, épinards, salades ; foie, lentilles, pain complet. « Folate », comme « feuille ».", [LG("légumes à FEUILLES vertes (épinards, salades), foie, lentilles, pain complet", "vert", { puce: "•" })]),
      E("Devenir : dans le foie, elle est réduite en <b>tétrahydrofolate</b>, THF, la forme active. Stock dans le foie : environ <b>3 mois</b>.", [LG("forme active : THF · stock hépatique ≈ 3 mois", "bleu", { puce: "•" })]),
      E("Rôle : le transfert de groupes à un carbone. Elle sert à fabriquer les bases puriques et la thymine, donc l'<b>ADN</b>. Donc les divisions cellulaires, et les <b>globules rouges</b>.", [EQ("THF : 1 carbone → purines, thymine → ADN → divisions, globules rouges")]),
      E("Carence, quand les apports manquent ou que les besoins augmentent, comme pendant la <b>grossesse</b> : anémie, avec des globules rouges gros et peu nombreux. Et chez le fœtus : un défaut de fermeture du <b>tube neural</b>, le spina bifida.", [EFF(), T("Carence et grossesse"), LG("ANÉMIE (globules rouges gros, peu nombreux)", "rouge", { puce: "•" }), LG("fœtus : anomalies du TUBE NEURAL (spina bifida)", "rouge", { puce: "•" })], "reflechit"),
      E("D'où la <b>supplémentation</b> : 0,4 mg par jour, à commencer <b>4 semaines avant la conception</b>, et jusqu'à 12 semaines de grossesse.", [POST("B9 : 0,4 mg/j, de 4 semaines avant la conception à 12 semaines de grossesse", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quand faut-il commencer la supplémentation en B9 ?", ["4 semaines avant la conception", "Au 6e mois de grossesse", "Après l'accouchement", "Seulement en cas d'anémie"], "Jusqu'à 12 semaines de grossesse."),
      qcm("a2", "Quelle malformation la B9 aide-t-elle à prévenir ?", ["Les anomalies de fermeture du tube neural (spina bifida)", "La fente labiale", "Les malformations cardiaques uniquement", "La surdité"], "D'où la supplémentation autour de la conception.")
    ],
    revision: [
      qcm("r1", "Quelle est la forme active de la vitamine B9 ?", ["Le tétrahydrofolate (THF)", "Le TPP", "Le PLP", "La cobalamine"], "Formée dans le foie."),
      qcm("r2", "Quels aliments sont riches en folates ?", ["Les légumes à feuilles vertes", "Les huiles", "Le sucre", "Les boissons sucrées"], "Aussi foie, lentilles, pain complet.")
    ]
  },
  {
    id: "bc-vitamines-12", fiche: F10, ficheTitre: F10T, titre: "La vitamine B12 (cobalamine)",
    classe: [
      E("La <b>B12</b>, la <b>cobalamine</b> : une grosse molécule avec un noyau corrine et un atome de <b>cobalt</b> au centre. La cyanocobalamine, c'est la forme de synthèse des compléments.", [T("La vitamine B12 · cobalamine"), LG("noyau corrine + COBALT · cyanocobalamine = forme des compléments", "noir")]),
      E("Sources : presque <b>uniquement animales</b> : viande, abats, poisson, œufs, produits laitiers. La flore en fabrique, mais dans le côlon, après le lieu d'absorption : elle n'est pas assimilée.", [POST("B12 : presque uniquement ANIMALE (celle de la flore n'est pas absorbée)", "piege")], "pointe"),
      E("Son parcours est spécial. Dans l'estomac, la pepsine et l'acide la libèrent, puis elle se fixe au <b>facteur intrinsèque</b>, une glycoprotéine de l'estomac. Le complexe est absorbé dans l'<b>iléon</b>. Stock dans le foie : <b>plusieurs années</b>.", [EQ("estomac : + FACTEUR INTRINSÈQUE → absorption dans l'ILÉON → stock foie (plusieurs années)")]),
      E("Rôles : méthylmalonyl-CoA vers succinyl-CoA ; homocystéine vers méthionine, ce qui <b>recycle les folates</b>, donc l'ADN et les globules rouges ; et le système nerveux. Elle travaille souvent avec la B9.", [LG("homocystéine → méthionine (recycle les folates) · système nerveux", "bleu", { puce: "•" })]),
      E("Carence : <b>anémie</b>, dite de Biermer s'il manque le facteur intrinsèque ; troubles <b>neurologiques</b>, neuropathie ; fatigue. À risque : les <b>végétaliens</b>, pour qui la supplémentation est indispensable ; les personnes âgées ; après une chirurgie de l'estomac ou de l'intestin. Comme le stock dure des années, la carence apparaît lentement.", [POST("B12 : facteur intrinsèque, iléon · anémie, neuropathie · végétaliens : supplémentation INDISPENSABLE", "cle")], "content")
    ],
    questions: [
      qcm("a1", "De quoi la B12 a-t-elle besoin pour être absorbée ?", ["Du facteur intrinsèque de l'estomac", "De la bile", "De la lipase pancréatique", "De la vitamine C"], "Absorption dans l'iléon."),
      qcm("a2", "Pourquoi les végétaliens doivent-ils se supplémenter en B12 ?", ["La B12 est presque uniquement d'origine animale", "Les végétaux la détruisent", "Ils n'ont pas de facteur intrinsèque", "La B12 est toxique"], "La supplémentation est indispensable.")
    ],
    revision: [
      qcm("r1", "Quel métal se trouve au centre de la vitamine B12 ?", ["Le cobalt", "Le fer", "Le zinc", "Le magnésium"], "D'où le nom cobalamine."),
      qcm("r2", "Comment s'appelle l'anémie due à l'absence de facteur intrinsèque ?", ["L'anémie de Biermer", "La drépanocytose", "Le scorbut", "La pellagre"], "Carence en B12.")
    ]
  },
  {
    id: "bc-vitamines-13", fiche: F10, ficheTitre: F10T, titre: "La vitamine C",
    classe: [
      E("La <b>vitamine C</b>, l'<b>acide ascorbique</b>. Deux formes, réduite et oxydée : elle a un fort pouvoir <b>réducteur</b>. Très sensible à la chaleur, à l'oxygène, à la lumière : c'est la plus fragile.", [T("La vitamine C · acide ascorbique"), LG("pouvoir RÉDUCTEUR · la plus FRAGILE (chaleur, O₂, lumière)", "rouge")]),
      E("Sources : surtout <b>végétales</b>. Fruits : cassis, kiwi, agrumes, fraise. Légumes : choux, épinards, poivron, persil, pomme de terre. Un peu dans le foie.", [LG("cassis, kiwi, agrumes, fraise · choux, poivron, persil, pomme de terre", "vert", { puce: "•" })]),
      E("Absorbée surtout dans l'iléon ; faible stock ; éliminée dans les urines.", [LG("faible stock · urines", "bleu", { puce: "•" })]),
      E("Ses rôles : coenzyme d'<b>hydroxylations</b> : le <b>collagène</b>, pour la solidité des tissus et la cicatrisation ; dopamine vers noradrénaline ; carnitine ; acides biliaires. Elle aide l'<b>absorption du fer</b>, en passant le Fe³⁺ en Fe²⁺. Elle est <b>antioxydante</b>, avec la vitamine E. Elle aide l'immunité.", [GRI(["Rôle", "Exemple"], [["Hydroxylations", "collagène (cicatrisation), noradrénaline, carnitine"], ["Absorption du fer", "Fe³⁺ → Fe²⁺"], ["Antioxydant", "avec la vitamine E"], ["Autres", "immunité, détoxication, limite les nitrosamines"]], true)]),
      E("Carence : fatigue, gencives abîmées, mauvaise cicatrisation, troubles osseux chez l'enfant. Forme grave : le <b>scorbut</b>.", [POST("C : réductrice · collagène, fer, antioxydant · carence : scorbut", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Comment la vitamine C aide-t-elle l'absorption du fer ?", ["Elle réduit le Fe³⁺ en Fe²⁺", "Elle transporte le fer dans le sang", "Elle stocke le fer", "Elle fabrique l'hémoglobine"], "Fer non héminique surtout."),
      qcm("a2", "Quelle protéine a besoin de la vitamine C pour être solide ?", ["Le collagène", "L'albumine", "L'insuline", "La kératine"], "Hydroxylation : cicatrisation.")
    ],
    revision: [
      qcm("r1", "Quel aliment est une excellente source de vitamine C ?", ["Le cassis", "Le beurre", "Le riz blanc", "La viande rouge"], "Aussi kiwi, agrumes, poivron, persil.")
    ]
  },

  /* ================= FICHE 11 ================= */
  {
    id: "bc-vitamines-14", fiche: F11, ficheTitre: F11T, titre: "Hydrosolubles ou liposolubles ?",
    classe: [
      E("Deux familles. Les <b>hydrosolubles</b>, les 8 B et la C : leurs molécules sont riches en groupements <b>polaires</b>, OH, NH₂, COOH, phosphates, et en atomes N, S, O : forte affinité pour l'eau.", [T("Deux familles"), LG("HYDROSOLUBLES (B, C) : groupements POLAIRES → affinité pour l'eau", "bleu")]),
      E("Les <b>liposolubles</b>, A, D, E, K : des structures peu polaires, longues chaînes carbonées, noyau dérivé du cholestérol pour la D. Elles s'insèrent dans les membranes et les graisses de réserve.", [LG("LIPOSOLUBLES (A, D, E, K) : peu polaires → membranes, graisses de réserve", "rouge")]),
      E("Une histoire pour comprendre : le <b>scorbut</b> des marins. Lors des grandes navigations, sans fruits ni légumes frais, les marins tombaient malades après 1 à 3 mois en mer : gencives qui saignent, mauvaise cicatrisation, bleus, puis décès.", [EFF(), T("Le scorbut des marins"), LG("sans fruits ni légumes frais → malades après 1 à 3 mois en mer", "noir")], "reflechit"),
      E("L'explication : la vitamine C est très hydrosoluble. <b>Pas de réserve</b> importante, l'excès part dans les urines : il faut un apport quotidien. À l'inverse, les carences en liposolubles s'installent en mois ou en années, grâce aux réserves. Sauf la vitamine K, au petit stock.", [POST("Vitamine C non stockée → scorbut après 1 à 3 mois sans apport", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi le scorbut apparaît-il en seulement 1 à 3 mois ?", ["La vitamine C n'est pas stockée", "La vitamine C est toxique", "Les marins mangeaient trop de fruits", "La vitamine C est liposoluble"], "L'excès part dans les urines."),
      qcm("a2", "Quelle vitamine liposoluble a un petit stock, renouvelé vite ?", ["La vitamine K", "La vitamine A", "La vitamine D", "La vitamine E"], "Sa carence peut apparaître en 1 à 2 semaines.")
    ],
    revision: [
      vf("r1", "Les vitamines liposolubles sont riches en groupements polaires.", false, "Faux : elles sont peu polaires (longues chaînes carbonées).")
    ]
  },
  {
    id: "bc-vitamines-15", fiche: F11, ficheTitre: F11T, titre: "Absorption, stockage, élimination",
    classe: [
      E("La solubilité décide de tout. Comparons.", [T("La solubilité décide de tout"), GRI(["", "Hydrosolubles (B, C)", "Liposolubles (A, D, E, K)"], [
        ["Absorption", "directe, transporteurs → veine porte · sans graisses", "micelles (bile, lipase) → chylomicrons → lymphe · avec un repas gras"],
        ["Transport", "libre, ou albumine, transcobalamine (B12)", "RBP (A), DBP (D), lipoprotéines (E, K)"],
        ["Stockage", "faible (sauf B12, B9)", "important : foie (A), tissu adipeux (D, E) · sauf K"],
        ["Élimination", "urinaire (l'excès part)", "lente, par la bile (l'excès s'accumule)"],
        ["Délai de carence", "quelques semaines (sauf B12, B9)", "plusieurs mois (sauf K)"]
      ], true)]),
      E("Les <b>hydrosolubles</b> : absorbées directement par des transporteurs, elles passent par la veine porte. Peu de stock, l'excès part dans les urines. La B12 est toujours liée à une protéine, et la vitamine C favorise l'absorption du fer.", [MONTRE(1), MONTRE(2)]),
      E("Les <b>liposolubles</b> suivent les graisses du repas : micelles, avec la bile et la lipase, chylomicrons, lymphe, sang. Elles sont stockées et éliminées par la bile : carence lente, mais risque d'<b>excès</b>.", [MONTRE(3), MONTRE(4), MONTRE(5), POST("Hydrosolubles : veine porte, urines, peu stockées · liposolubles : chylomicrons, lymphe, stockées", "cle")]),
      E("La conséquence pratique : tout ce qui empêche de digérer ou d'absorber les graisses, manque de bile ou de lipase, mucoviscidose, cholestase, chirurgie bariatrique, donne une <b>carence en A, D, E, K</b>. On les prend avec un repas gras.", [EFF(), T("Malabsorption des graisses"), LG("bile ↓, lipase ↓, mucoviscidose, cholestase, chirurgie bariatrique → carence en A, D, E, K", "rouge"), POST("Malabsorption des graisses → carence en A, D, E, K · prise avec un repas gras", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Pourquoi la mucoviscidose expose-t-elle à une carence en A, D, E, K ?", ["Elle gêne la digestion et l'absorption des graisses", "Elle détruit les vitamines dans le sang", "Elle empêche de manger des légumes", "Elle bloque les urines"], "Les liposolubles suivent les graisses."),
      qcm("a2", "Par quelle voie les vitamines hydrosolubles quittent-elles l'intestin ?", ["La veine porte", "La lymphe", "Les chylomicrons", "La bile"], "Les liposolubles, elles, passent par la lymphe.")
    ],
    revision: [
      qcm("r1", "Comment sont éliminées les vitamines liposolubles ?", ["Lentement, par la bile", "Rapidement, par les urines", "Par la peau", "Par les poumons"], "D'où le risque d'accumulation."),
      vf("r2", "Il vaut mieux prendre un complément de vitamine D au cours d'un repas contenant des graisses.", true, "Vrai : les liposolubles sont absorbées avec les graisses."),
      qcm("r3", "Dans quoi les vitamines liposolubles sont-elles incorporées dans l'entérocyte ?", ["Les chylomicrons", "L'albumine", "Les hématies", "La bile"], "Puis lymphe et sang."), vf("r4", "Les vitamines A, D, E, K sont mieux absorbées au cours d'un repas gras.", true, "Vrai : elles suivent la digestion des graisses.")
    ]
  },
  {
    id: "bc-vitamines-16", fiche: F11, ficheTitre: F11T, titre: "Toxicité, statut, supplémentation",
    classe: [
      E("Les <b>excès</b>. Hydrosolubles : rare, mais possible avec des compléments : la B6 donne une neuropathie, la niacine des bouffées de chaleur et une atteinte du foie, la C à forte dose des calculs d'oxalate.", [T("La toxicité des excès"), LG("hydrosolubles : rare · B6 (neuropathie), niacine (foie), C forte dose (calculs)", "bleu", { puce: "•" })]),
      E("Liposolubles : <b>risque d'accumulation</b>, surtout la <b>A</b>, toxique pour le foie et tératogène, et la <b>D</b>, hypercalcémie et calcifications. La E à forte dose : risque de saignement.", [LG("liposolubles : ACCUMULATION · A (foie, tératogène), D (hypercalcémie), E (saignement)", "rouge", { puce: "•" }), POST("Toxicité surtout pour A et D (accumulation)", "cle")]),
      E("Évaluer le <b>statut</b> : pour les hydrosolubles, des dosages sanguins, B9, B12, C, et des marqueurs, comme l'homocystéine. Les urines reflètent surtout les apports récents. Pour les liposolubles : le <b>25-OH-D</b> pour les réserves en D, le tocophérol, le rétinol, qui ne baisse que quand le foie est vide, et le temps de prothrombine pour la K.", [EFF(), T("Évaluer le statut"), GRI(["Vitamine", "Ce qu'on dose"], [["B9, B12", "dosage sanguin · homocystéine, acide méthylmalonique"], ["B1", "transcétolase des globules rouges"], ["D", "25-OH-D (réserves)"], ["A", "rétinol (baisse seulement si le foie est vide)"], ["K", "temps de prothrombine"]], true)]),
      E("La <b>supplémentation</b>. Hydrosolubles : prises régulières, fractionnées si fortes doses ; on associe B9, B12 et fer dans les anémies. Liposolubles : prises espacées et <b>surveillées</b>, calcémie, bilan du foie, au cours d'un repas gras.", [LG("hydrosolubles : régulières · liposolubles : espacées, SURVEILLÉES, avec un repas gras", "vert", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quel est le risque d'un excès de vitamine D ?", ["Hypercalcémie et calcifications", "Neuropathie", "Saignements", "Calculs d'oxalate"], "Les liposolubles s'accumulent."),
      qcm("a2", "Quel dosage reflète les réserves en vitamine D ?", ["Le 25-OH-D", "Le rétinol", "Le temps de prothrombine", "L'homocystéine"], "Forme de réserve circulante.")
    ],
    revision: [
      qcm("r1", "Quel est le risque d'un excès de B6 en compléments ?", ["Une neuropathie", "Une hypercalcémie", "Un scorbut", "Une anémie"], "Même les hydrosolubles peuvent être toxiques à forte dose.")
    ]
  },
  {
    id: "bc-vitamines-17", fiche: F11, ficheTitre: F11T, titre: "Homéostasie et biodisponibilité",
    classe: [
      E("L'<b>homéostasie vitaminique</b> : l'ensemble des mécanismes qui maintiennent les vitamines à des concentrations compatibles avec le bon fonctionnement des cellules, en réglant absorption, stockage, utilisation et élimination.", [T("Homéostasie vitaminique"), LG("absorption, stockage, utilisation, élimination → concentrations stables", "noir")]),
      E("Pour les hydrosolubles : équilibre entre apports et pertes urinaires. Pour les liposolubles : les réserves tolèrent des apports irréguliers, mais il y a un risque d'accumulation.", [LG("hydrosolubles : apports ⇄ urines · liposolubles : réserves (tolèrent l'irrégularité)", "bleu", { puce: "•" })]),
      E("La <b>biodisponibilité</b> : la part de la vitamine ingérée réellement <b>absorbée et utilisée</b>.", [EQ("Biodisponibilité = part réellement absorbée ET utilisée"), SOUL()]),
      E("Elle dépend de l'<b>aliment</b> : forme chimique, libre ou liée ; matrice ; stabilité à la conservation et à la cuisson ; présence de graisses pour les liposolubles. Et de la <b>personne</b> : statut nutritionnel, maladies digestives, âge, alcool, médicaments, comme la metformine et les IPP qui baissent la B12.", [GRI(["Dépend de…", "Exemples"], [["L'aliment", "forme libre ou liée, matrice, cuisson, graisses"], ["La personne", "statut, malabsorption, âge, alcool, médicaments (metformine, IPP ↓ B12)"]], true), POST("Biodisponibilité : dépend de l'aliment ET de la personne", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce que la biodisponibilité d'une vitamine ?", ["La part réellement absorbée et utilisée", "La quantité dans l'aliment", "La dose recommandée", "La durée de stockage"], "Elle dépend de l'aliment et de la personne."),
      qcm("a2", "Quels médicaments peuvent diminuer la vitamine B12 ?", ["La metformine et les IPP", "Les AVK", "Les statines", "L'aspirine"], "Exemple de biodisponibilité liée à la personne.")
    ],
    revision: [
      vf("r1", "Les réserves de vitamines liposolubles permettent de tolérer des apports irréguliers.", true, "Vrai, mais avec un risque d'accumulation.")
    ]
  },
  {
    id: "bc-vitamines-18", fiche: F11, ficheTitre: F11T, titre: "Structure, rôle et fragilité",
    classe: [
      E("Chaque vitamine a un groupement clé, qui explique à la fois son <b>rôle</b> et sa <b>fragilité</b>.", [T("Structure → rôle → fragilité"), GRI(["Vit.", "Groupement clé", "Rôle", "Fragile à"], [
        ["A", "chaîne polyène conjuguée", "absorbe la lumière → vision", "O₂, lumière, chaleur"],
        ["E", "chromanol (–OH phénolique)", "antioxydant membranaire", "O₂, fritures répétées"],
        ["K", "naphtoquinone", "coenzyme de carboxylation", "lumière, bases"],
        ["B2", "isoalloxazine (jaune)", "FAD, FMN : accepte 2 H", "lumière"],
        ["B3", "cycle pyridine", "NAD⁺ : accepte un hydrure", "très stable (eau)"],
        ["C", "énediol", "très réductrice, antioxydant, Fe³⁺ → Fe²⁺", "la plus fragile : O₂, chaleur, métaux"]
      ], true)]),
      E("La <b>A</b> : une chaîne polyène, des doubles liaisons alternées, qui absorbe la lumière : d'où la vision. La <b>E</b> : un noyau chromanol, avec un OH, ancré dans la membrane : antioxydant. La <b>K</b> : un noyau naphtoquinone.", [MONTRE(1), MONTRE(2), MONTRE(3)]),
      E("La <b>B2</b> : l'isoalloxazine, jaune, qui absorbe la lumière : d'où sa fragilité à la lumière. La <b>B3</b> : très stable. La <b>C</b> : un <b>énediol</b>, très réducteur, mais du coup la plus fragile.", [MONTRE(4), MONTRE(5), MONTRE(6), POST("Énediol (C, réductrice) · isoalloxazine (B2, photosensible) · chromanol (E) · polyène (A) · naphtoquinone (K)", "cle")]),
      E("Les règles pour lire une structure : les cycles azotés aromatiques échangent des électrons. Les <b>phosphates</b> ancrent le coenzyme sur l'enzyme et le gardent dans la cellule ; ils ne fournissent pas l'énergie, c'est le rôle de l'ATP. Et si on ne fabrique pas ces vitamines, c'est que nos ancêtres ont perdu les enzymes nécessaires, comme pour la vitamine C. Exceptions : la niacine, et la vitamine D.", [EFF(), T("Lire une structure"), LG("cycles azotés aromatiques → échanges d'électrons", "bleu", { puce: "•" }), LG("phosphates → ancrent le coenzyme, le gardent dans la cellule (pas d'énergie)", "bleu", { puce: "•" }), LG("non fabriquées : enzymes perdues au cours de l'évolution (sauf niacine, vit. D)", "noir", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi la vitamine C est-elle très réductrice ?", ["Grâce à son groupement énediol", "Grâce à son cobalt", "Grâce à sa chaîne polyène", "Grâce à ses phosphates"], "C'est aussi ce qui la rend fragile."),
      qcm("a2", "À quoi servent les phosphates des coenzymes (TPP, FAD, PLP…) ?", ["À les ancrer sur l'enzyme et les garder dans la cellule", "À fournir l'énergie de la réaction", "À les rendre liposolubles", "À transporter l'O₂"], "L'énergie, c'est le rôle de l'ATP.")
    ],
    revision: [
      qcm("r1", "Quelle structure de la vitamine A lui permet d'absorber la lumière ?", ["Sa chaîne polyène conjuguée", "Son noyau stérane", "Son énediol", "Son cobalt"], "D'où son rôle dans la vision.")
    ]
  },
  {
    id: "bc-vitamines-19", fiche: F11, ficheTitre: F11T, titre: "Isomères et protection des vitamines",
    classe: [
      E("Des <b>isomères</b> : même formule, activité différente. Vitamine C : seul l'acide <b>L-ascorbique</b> a l'activité vitaminique, anti-scorbut. Les formes D, comme l'acide érythorbique, l'additif E315, restent antioxydantes mais ne remplacent pas la vitamine.", [T("Isomères : même formule, activité différente"), LG("C : seul l'acide L-ascorbique est vitaminique (E315 = antioxydant, pas vitamine)", "bleu", { puce: "•" })]),
      E("Le <b>rétinal</b> : la forme active dans l'œil est le <b>11-cis-rétinal</b>, fixé à l'opsine. La lumière le transforme en tout-trans : changement de forme, signal visuel. Puis il doit redevenir 11-cis.", [LG("vision : 11-CIS-rétinal → (lumière) → tout-trans → signal", "bleu", { puce: "•" })]),
      E("La <b>vitamine E</b> : la forme naturelle, RRR-α-tocophérol, est plus active que celle de synthèse, car la protéine du foie, l'α-TTP, retient surtout les bonnes formes. Le pouvoir antioxydant chimique est pourtant le même.", [LG("E : RRR-α-tocophérol (naturelle) plus active (α-TTP)", "bleu", { puce: "•" }), POST("L-ascorbate seul vitaminique · 11-cis-rétinal actif · RRR-α-tocophérol plus actif", "cle")], "reflechit"),
      E("<b>Protéger</b> les vitamines. Hydrosolubles : elles fuient dans l'eau, craignent la chaleur et l'oxydation : cuisson courte, peu d'eau, vapeur. Liposolubles : moins de pertes dans l'eau, mais oxydation par l'O₂, la lumière et les métaux, aggravée par les fritures et le rancissement.", [EFF(), T("Protéger les vitamines"), LG("hydrosolubles : eau, chaleur, O₂ → cuisson courte, vapeur", "vert", { puce: "•" }), LG("liposolubles : O₂, lumière, métaux, fritures", "vert", { puce: "•" })]),
      E("L'industrie : emballages opaques, pour la B2 et la A ; sous vide ou sous azote ; antioxydants ajoutés, tocophérols E306 à E309, ascorbate E300 à E302 ; formes plus stables, comme le palmitate de rétinyle.", [LG("industrie : opaque, sous vide/azote, antioxydants (E300, E306…), formes estérifiées", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Quelle forme de la vitamine C est vitaminique ?", ["L'acide L-ascorbique", "L'acide D-ascorbique", "L'acide érythorbique (E315)", "Toutes"], "Les formes D restent seulement antioxydantes."),
      qcm("a2", "Quelle est la forme active du rétinal dans l'œil ?", ["Le 11-cis-rétinal", "Le tout-trans-rétinal", "Le rétinol", "L'acide rétinoïque"], "La lumière le transforme en tout-trans.")
    ],
    revision: [
      vf("r1", "La vitamine E de synthèse est aussi active que la forme naturelle RRR.", false, "Faux : la forme naturelle est plus active, car l'α-TTP du foie la retient mieux.")
    ]
  },
  {
    id: "bc-vitamines-20", fiche: F11, ficheTitre: F11T, titre: "Vitamine E et prématuré",
    classe: [
      E("Un cas clinique : le <b>prématuré</b> de faible poids peut faire une <b>anémie hémolytique</b> : ses globules rouges sont fragiles et se détruisent vite.", [T("Vitamine E et hémolyse du prématuré"), LG("prématuré → ANÉMIE HÉMOLYTIQUE (globules rouges fragiles)", "rouge")]),
      E("Les causes : peu de réserves en vitamine E, car elle passe mal le placenta et se stocke en fin de grossesse ; une absorption intestinale immature ; des membranes riches en AGPI ; et l'exposition à l'oxygène thérapeutique et au fer, qui oxydent.", [GRI(["Cause", "Pourquoi"], [["Peu de vitamine E", "passe mal le placenta, réserves en fin de grossesse"], ["Intestin immature", "absorption faible"], ["Membranes riches en AGPI", "acide arachidonique, DHA"], ["O₂ thérapeutique, fer", "pro-oxydants"]], true)]),
      E("Le mécanisme : la <b>peroxydation lipidique en chaîne</b>. Un radical arrache un H à un AGPI ; celui-ci fixe l'O₂ et devient un radical peroxyle, LOO• ; ce radical attaque l'AGPI voisin, qui devient radical à son tour. La réaction se relance seule. Résultat : membrane rompue, hémolyse.", [EFF(), T("La peroxydation en chaîne"), EQ("radical + AGPI (LH) → L• → + O₂ → LOO• → attaque LH voisin → L• … (EN CHAÎNE) → hémolyse")]),
      E("La <b>vitamine E</b>, placée dans la membrane, <b>cède un atome H</b> au radical LOO• : la chaîne est coupée. Elle devient elle-même un radical, mais stable, qui ne propage pas. Puis la vitamine C la régénère.", [EQ("LOO• + vitamine E (TOH) → LOOH + TO• (stable) → la chaîne s'ARRÊTE"), POST("Vitamine E : cède un H• → coupe la peroxydation en chaîne", "cle")], "reflechit"),
      E("Prévention : des laits pour prématurés <b>enrichis en vitamine E</b>, avec un rapport vitamine E sur AGPI adapté. Et la règle générale : plus on mange d'AGPI, oméga 3 et 6, plus il faut de vitamine E. Heureusement, les huiles riches en AGPI en contiennent souvent.", [POST("Plus d'AGPI → plus de besoins en vitamine E · laits pour prématurés enrichis", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Comment la vitamine E arrête-t-elle la peroxydation lipidique ?", ["Elle cède un atome H au radical peroxyle", "Elle détruit les AGPI", "Elle fabrique de l'O₂", "Elle fixe le fer"], "Elle devient un radical stable qui ne propage pas."),
      qcm("a2", "Pourquoi le prématuré manque-t-il de vitamine E ?", ["Elle passe mal le placenta et se stocke en fin de grossesse", "Il en reçoit trop", "Le lait maternel n'en contient pas", "Il ne fabrique pas de bile du tout"], "Et son intestin est immature.")
    ],
    revision: [
      qcm("r1", "Quel lien entre AGPI et vitamine E ?", ["Plus on consomme d'AGPI, plus il faut de vitamine E", "Les AGPI détruisent la vitamine E dans l'intestin", "Aucun lien", "Les AGPI remplacent la vitamine E"], "Les AGPI sont la cible de la peroxydation.")
    ]
  },
  {
    id: "bc-vitamines-21", fiche: F11, ficheTitre: F11T, titre: "Le réseau antioxydant",
    classe: [
      E("Les antioxydants travaillent en <b>équipe</b>, comme des relais. Chacun régénère le précédent.", [T("Le réseau antioxydant"), EQ("AGPI ← vitamine E ← vitamine C ← glutathion ← glutathion réductase (FAD, B2) ← NADPH (B3)")]),
      E("La <b>vitamine E</b>, dans la membrane, protège les AGPI. Usée, elle est régénérée par la <b>vitamine C</b>, à la frontière entre la membrane et le cytosol. La vitamine C est régénérée par le <b>glutathion</b>.", [RANG([
        { titre: "Vitamine E", x: "dans la membrane : neutralise les radicaux peroxyles", c: "rouge" },
        { titre: "Vitamine C", x: "dans l'eau : régénère la vitamine E", c: "vert" },
        { titre: "Glutathion", x: "régénère la vitamine C", c: "bleu" },
        { titre: "Glutathion réductase (FAD, B2)", x: "régénère le glutathion, avec le NADPH (B3)", c: "noir" }
      ]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E("Le glutathion est régénéré par la <b>glutathion réductase</b>, qui utilise le FAD, de la B2, et le NADPH, de la B3, venu de la voie des pentoses. Et le <b>sélénium</b> intervient dans la glutathion peroxydase, qui détruit les peroxydes. Le β-carotène complète la protection dans les lipides.", [MONTRE(4), POST("Réseau : E ← C ← glutathion ← FAD (B2) ← NADPH (B3) + sélénium", "cle")]),
      E("L'idée clé : un manque d'un seul maillon fragilise tout le réseau. Les <b>carences multiples</b> sont plus graves. Et un complément isolé à forte dose n'a pas d'intérêt démontré.", [POST("Un maillon manque → tout le réseau faiblit · complément isolé à forte dose : pas d'intérêt démontré", "piege")], "reflechit"),
      E("Autres coopérations. Le métabolisme énergétique : B1, B5, B2, B3, B8, une seule carence freine toute la chaîne. Le métabolisme à 1 carbone : B9 et B12 recyclent la méthionine ; si elles manquent, ou la B6, l'<b>homocystéine</b> monte. Le fer : la C pour l'absorption, et B9, B12, fer pour les globules rouges. Et les multivitamines n'ont pas d'effet « énergisant » démontré sans carence.", [EFF(), T("Autres coopérations"), LG("énergie : B1, B2, B3, B5, B8 · 1 carbone : B9, B12, B6 (homocystéine ↑ si carence)", "bleu", { puce: "•" }), LG("globules rouges : B9, B12, fer · multivitamines : pas d'effet « énergisant » sans carence", "bleu", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quelle vitamine régénère la vitamine E ?", ["La vitamine C", "La vitamine B12", "La vitamine K", "La vitamine D"], "À l'interface membrane-cytosol."),
      qcm("a2", "Quel oligo-élément participe au réseau antioxydant ?", ["Le sélénium (glutathion peroxydase)", "Le calcium", "Le sodium", "L'iode"], "La glutathion peroxydase détruit les peroxydes.")
    ],
    revision: [
      ordre("r1", "Remets les relais du réseau antioxydant dans l'ordre (de la membrane vers l'énergie).", ["Vitamine E", "Vitamine C", "Glutathion", "Glutathion réductase (FAD)", "NADPH"], "Chaque relais régénère le précédent."),
      qcm("r2", "Quelles carences font monter l'homocystéine ?", ["B9, B12 ou B6", "A et D", "C et E", "K"], "Métabolisme à 1 carbone.")
    ]
  },
  {
    id: "bc-vitamines-22", fiche: F11, ficheTitre: F11T, titre: "Le cycle de la vitamine K",
    classe: [
      E("La <b>vitamine K</b> est un coenzyme recyclé. Elle passe par 3 états : <b>quinone</b>, la forme des aliments ; <b>hydroquinone</b>, KH₂, la forme active ; <b>époxyde</b>, après la réaction ; puis retour.", [T("Le cycle de la vitamine K"), EQ("quinone (aliments) → hydroquinone KH₂ (ACTIVE) → époxyde (usée) → (VKOR) → retour")]),
      E("La réaction : la γ-glutamyl carboxylase ajoute un CO₂ sur des résidus <b>Glu</b>, qui deviennent <b>Gla</b>. C'est une modification post-traductionnelle : les protéines sont fabriquées sous forme de précurseurs inactifs.", [EQ("γ-glutamyl carboxylase : Glu → Gla (+ CO₂)")]),
      E("Les deux charges négatives du Gla fixent le <b>Ca²⁺</b> : la protéine s'accroche aux membranes des plaquettes, là où se déroule la coagulation.", [LG("Gla fixe le Ca²⁺ → s'accroche aux plaquettes → coagulation", "bleu", { puce: "•" })]),
      E("Les <b>protéines Gla</b> : les facteurs de coagulation <b>II</b>, la prothrombine, <b>VII</b>, <b>IX</b>, <b>X</b> ; les protéines anticoagulantes C et S ; l'ostéocalcine de l'os.", [GRI(["Protéines Gla", "Rôle"], [["Facteurs II, VII, IX, X", "coagulation"], ["Protéines C et S", "anticoagulantes"], ["Ostéocalcine, MGP", "os, vaisseaux"]], true)]),
      E("La <b>VKOR</b>, vitamine K époxyde réductase, recycle l'époxyde. Grâce à elle, la même molécule sert de nombreuses fois : les <b>besoins sont faibles</b> malgré un petit stock.", [POST("Vitamine K : Glu → Gla (II, VII, IX, X) · la VKOR recycle l'époxyde", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle enzyme recycle la vitamine K époxyde ?", ["La VKOR", "La γ-glutamyl carboxylase", "La glutathion réductase", "L'α-TTP"], "Vitamine K époxyde réductase."),
      qcm("a2", "Pourquoi les protéines Gla fixent-elles le calcium ?", ["Leurs deux charges négatives attirent le Ca²⁺", "Elles contiennent du calcium", "Elles sont liposolubles", "Elles ont un hème"], "Elles s'accrochent ainsi aux plaquettes.")
    ],
    revision: [
      paires("r1", "Relie chaque forme de la vitamine K à son état.", [["Quinone", "Forme des aliments"], ["Hydroquinone (KH₂)", "Forme active"], ["Époxyde", "Forme usée après la réaction"]], "Un cycle de recyclage."),
      qcm("r2", "Pourquoi les besoins en vitamine K sont-ils faibles ?", ["Elle est recyclée par la VKOR", "Elle est stockée des années", "Elle est fabriquée en grande quantité par le foie", "Elle n'a pas de rôle"], "Malgré un petit stock.")
    ]
  },
  {
    id: "bc-vitamines-23", fiche: F11, ficheTitre: F11T, titre: "Les AVK et les conseils diététiques",
    classe: [
      E("Les <b>AVK</b>, antivitamines K : des anticoagulants oraux. La warfarine et l'acénocoumarol, dérivés de la coumarine ; la fluindione, réservée en France depuis 2018 aux patients déjà traités.", [T("Les AVK (antivitamines K)"), LG("warfarine, acénocoumarol, fluindione", "noir")]),
      E("Leur mode d'action : ils <b>bloquent la VKOR</b>. La vitamine K reste sous forme époxyde ; plus de forme active ; les facteurs II, VII, IX, X ne sont plus carboxylés, ils ne fixent plus le calcium : la coagulation ralentit.", [EQ("AVK ⊖ VKOR → pas de KH₂ → facteurs II, VII, IX, X inactifs → coagulation ↓")]),
      E("L'effet est retardé de plusieurs jours, le temps que les facteurs déjà actifs disparaissent. On surveille par l'<b>INR</b>. L'antidote : la vitamine K à forte dose, réduite par une autre enzyme non bloquée.", [LG("effet retardé · surveillance : INR · antidote : vitamine K forte dose", "bleu", { puce: "•" })]),
      E("Le conseil diététique essentiel : <b>ne pas supprimer</b> la vitamine K ! Garder des apports <b>réguliers et stables</b> d'un jour à l'autre. Un régime pauvre en K rend l'INR instable.", [EFF(), T("Conseils diététiques sous AVK"), LG("NE PAS SUPPRIMER la vitamine K · apports RÉGULIERS et STABLES", "rouge", { taille: "grand" })], "pointe"),
      E("Les aliments riches, à <b>répartir</b>, pas à interdire : légumes verts à feuilles, choux, épinards, brocolis, laitue, persil ; huiles de colza et de soja. À signaler au médecin : un changement brusque d'alimentation, des compléments, vitamine K, vitamine E à forte dose, plantes comme le millepertuis ou le ginkgo, et l'alcool en excès.", [LG("à RÉPARTIR : choux, épinards, brocolis, laitue, persil, huiles de colza et soja", "vert", { puce: "•" }), LG("à signaler : changement de régime, compléments, millepertuis, ginkgo, alcool", "noir", { puce: "•" })]),
      E("Et attention : les anticoagulants oraux <b>directs</b>, les AOD, n'agissent pas sur la vitamine K : ces précautions ne s'appliquent pas à eux. Bravo, tu as fini les vitamines !", [POST("AVK : apports en vitamine K STABLES (pas d'interdiction) · AOD : pas concernés", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel conseil donner à un patient sous AVK ?", ["Garder des apports en vitamine K réguliers et stables", "Supprimer tous les légumes verts", "Manger beaucoup de choux un jour sur deux", "Prendre de la vitamine K en complément"], "Un régime pauvre en K rend l'INR instable."),
      qcm("a2", "Comment agissent les AVK ?", ["Ils bloquent la VKOR, qui recycle la vitamine K", "Ils détruisent les plaquettes", "Ils empêchent l'absorption des graisses", "Ils activent la γ-glutamyl carboxylase"], "Les facteurs II, VII, IX, X restent inactifs.")
    ],
    revision: [
      vf("r1", "Les précautions sur la vitamine K s'appliquent aussi aux anticoagulants oraux directs (AOD).", false, "Faux : les AOD n'agissent pas sur la vitamine K."),
      qcm("r2", "Quel examen surveille un traitement par AVK ?", ["L'INR", "La glycémie", "Le 25-OH-D", "L'ALAT"], "L'effet est retardé de plusieurs jours.")
    ]
  }
  ]
};
