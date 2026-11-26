// Cours : Métabolisme des lipides (Sciences › Biochimie › Métabolisme)
// Source : fiches « Métabolisme des lipides » 1 à 5 (numérotation des fiches).
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F1 = "Fiche 1", F1T = "Les lipoprotéines";
const F2 = "Fiche 2", F2T = "Lipolyse, β-oxydation et lipogenèse";
const F3 = "Fiche 3", F3T = "Cétogenèse et cétolyse";
const F4 = "Fiche 4", F4T = "Biosynthèse des acides gras";
const F5 = "Fiche 5", F5T = "Le métabolisme du cholestérol";

export default {
  id: "bc-meta-lipides",
  titre: "Métabolisme des lipides",
  persos: {},
  carte: {
    depart: "Les graisses du repas voyagent, se stockent, se brûlent, se fabriquent… Comment le corps gère-t-il tout ça ?",
    etapes: [
      { titre: "Les lipoprotéines", verbe: "Je transporte", question: "Comment des graisses circulent dans un sang fait d'eau ?", mots: "chylomicrons · VLDL, LDL, HDL · apoprotéines · athérome" },
      { titre: "Lipolyse, β-oxydation", verbe: "Je brûle", question: "Comment on tire de l'énergie des graisses ?", mots: "lipase HS · carnitine · hélice de Lynen · 129 ATP · malonyl-CoA" },
      { titre: "Corps cétoniques", verbe: "Je dépanne", question: "Que mange le cerveau pendant un jeûne ?", mots: "acétoacétate · HMG-CoA · cétolyse · acidocétose" },
      { titre: "Biosynthèse des AG", verbe: "Je fabrique", question: "Comment le sucre en trop devient du gras ?", mots: "navette citrate · malonyl-CoA · hélice de Wakil · désaturases" },
      { titre: "Le cholestérol", verbe: "Je régule", question: "D'où vient le cholestérol, comment le contrôler ?", mots: "HMG-CoA réductase · statines · ACAT, LCAT · bile" }
    ],
    arrivee: "Tu sais suivre une graisse du repas jusqu'à l'ATP, expliquer le jeûne, la lipogenèse et le cholestérol sanguin."
  },
  lecons: [

  /* ================= FICHE 1 ================= */
  {
    id: "bc-meta-lipides-01", fiche: F1, ficheTitre: F1T, titre: "Pourquoi des lipoprotéines ?",
    classe: [
      E("Problème de départ : le sang, c'est de l'eau, et les lipides sont hydrophobes. Ils ne peuvent pas circuler librement dans le sang ou la lymphe. Il leur faut des <b>protéines de transport</b>.", [T("Pourquoi des lipoprotéines ?"), LG("lipides hydrophobes → besoin de PROTÉINES DE TRANSPORT", "rouge")], "reflechit"),
      E("Deux solutions. L'<b>albumine</b>, la principale protéine de transport du sang, transporte les <b>acides gras libres</b>, surtout pendant la lipolyse du tissu adipeux.", [LG("ALBUMINE : acides gras LIBRES (lipolyse)", "bleu", { puce: "•" })]),
      E("Les <b>lipoprotéines</b> transportent la grande majorité des lipides : TG, phospholipides, cholestérol, vitamines liposolubles, associés à des <b>apoprotéines</b>. Elles sont formées par le foie et l'intestin grêle. Certaines sont délétères, d'autres protectrices pour le cœur.", [LG("LIPOPROTÉINES : TG, PL, cholestérol, vit. A, D, E, K + apoprotéines (foie, intestin)", "bleu", { puce: "•" })]),
      E("Leur structure : une petite bille. Au <b>cœur</b>, ce qui fuit l'eau : triglycérides et cholestérol estérifié, parfois les vitamines A, D, E, K. En <b>surface</b>, ce qui a une partie amie de l'eau : phospholipides, cholestérol libre et apoprotéines.", [EFF(), T("Structure d'une lipoprotéine"), GRI(["Zone", "Contenu"], [["Cœur hydrophobe", "triglycérides, cholestérol estérifié (parfois vit. A, D, E, K)"], ["Surface polaire", "phospholipides, cholestérol libre, apoprotéines"]], true)]),
      E("Pas de liaison covalente entre tout ça : c'est un emballage. Diamètre : de 10 nm pour les HDL à 1 000 nm pour un chylomicron.", [POST("Lipoprotéine = lipides + apoprotéines, sans liaison covalente · AG libres : albumine", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qui transporte les acides gras libres dans le sang ?", ["L'albumine", "Les HDL", "Les chylomicrons", "L'hémoglobine"], "Surtout lors de la lipolyse du tissu adipeux."),
      qcm("a2", "Que trouve-t-on au cœur d'une lipoprotéine ?", ["Triglycérides et cholestérol estérifié", "Phospholipides et apoprotéines", "Cholestérol libre", "De l'eau"], "Le cœur est hydrophobe.")
    ],
    revision: [
      vf("r1", "Dans une lipoprotéine, lipides et apoprotéines sont reliés par des liaisons covalentes.", false, "Faux : pas de liaison covalente."),
      paires("r2", "Cœur ou surface ?", [["Triglycérides", "Cœur hydrophobe"], ["Phospholipides", "Surface polaire"], ["Cholestérol estérifié", "Au cœur, avec les TG"], ["Cholestérol libre", "En surface, avec les PL"]], "Le cholestérol libre est en surface, l'estérifié au cœur.")
    ]
  },
  {
    id: "bc-meta-lipides-02", fiche: F1, ficheTitre: F1T, titre: "Les cinq classes",
    classe: [
      E("On classe les lipoprotéines selon leur <b>densité</b>, qui dépend du rapport lipides sur protéines. Plus il y a de lipides, plus la densité est <b>faible</b>.", [T("Cinq classes selon la densité"), LG("plus de lipides → densité plus FAIBLE (et taille plus grande)", "rouge")]),
      E("Du moins dense au plus dense : chylomicrons, VLDL, very low density, IDL, intermediate, LDL, low, et HDL, high density lipoproteins. La taille diminue dans le même ordre.", [EQ("chylomicrons < VLDL < IDL < LDL < HDL"), SOUL()]),
      E("Le chylomicron, très gros, est très riche en TG. Les HDL, petites, sont riches en protéines.", [LG("chylomicron : très gros, très riche en TG · HDL : petites, riches en protéines", "noir", { puce: "•" }), POST("Densité ↑ quand les lipides ↓ : chylo < VLDL < IDL < LDL < HDL", "cle")], "content")
    ],
    questions: [
      ordre("a1", "Range les lipoprotéines de la moins dense à la plus dense.", ["Chylomicrons", "VLDL", "IDL", "LDL", "HDL"], "Densité ↑ quand les lipides ↓."),
      qcm("a2", "Pourquoi les HDL sont-elles les plus denses ?", ["Elles contiennent le plus de protéines et le moins de lipides", "Elles contiennent le plus de TG", "Elles sont les plus grosses", "Elles n'ont pas d'apoprotéines"], "Densité élevée = peu de lipides.")
    ],
    revision: [
      qcm("r1", "Que signifie VLDL ?", ["Very low density lipoproteins", "Very large digestive lipids", "Vitamin lipid-dependent lipoproteins", "Very long chain lipids"], "Lipoprotéines de très basse densité.")
    ]
  },
  {
    id: "bc-meta-lipides-03", fiche: F1, ficheTitre: F1T, titre: "Les apoprotéines",
    classe: [
      E("Les <b>apoprotéines</b> sont des protéines amphiphiles. Elles ont un rôle de <b>structure</b>, et un rôle <b>métabolique</b> : activer des enzymes, se faire reconnaître par les récepteurs des cellules. Ce sont les « étiquettes » de la particule.", [T("Les apoprotéines"), GRI(["Apo", "Où ?", "Rôle"], [
        ["A (A1)", "surtout HDL (+ chylomicrons natifs)", "active la LCAT"],
        ["B48", "chylomicrons et restes", "structure · faite par l'entérocyte"],
        ["B100", "VLDL, IDL, LDL", "faite par le foie · reconnue par le récepteur des LDL"],
        ["C (C2)", "chylomicrons, VLDL", "active la LPL"],
        ["E", "restes de chylomicrons, IDL", "reconnaissance par le foie · retour au foie"]
      ])]),
      E("L'apo <b>A</b> active la <b>LCAT</b>, une enzyme du plasma fabriquée par le foie : elle estérifie le cholestérol libre en excès, avec un AG pris à une lécithine, et le fait entrer au cœur des HDL, qui le ramènent au foie.", [MONTRE(1)]),
      E("L'apo <b>B48</b> : structure des chylomicrons, fabriquée par l'entérocyte. Le chiffre indique la masse de la protéine. L'apo <b>B100</b>, fabriquée par l'hépatocyte, est reconnue par le <b>récepteur des LDL</b> : c'est ce qui permet l'endocytose des LDL.", [MONTRE(2), MONTRE(3)]),
      E("L'apo <b>C</b> active la <b>lipoprotéine lipase</b>, la LPL, qui hydrolyse les TG des lipoprotéines. L'apo <b>E</b> : reconnaissance par les récepteurs du <b>foie</b>.", [MONTRE(4), MONTRE(5), POST("Apo A → LCAT · B48 : chylo · B100 → récepteur LDL · C → LPL · E → foie", "cle")]),
      E("Et la LPL, où est-elle ? Produite surtout par le muscle et le tissu adipeux, aussi le cœur et le placenta. Elle se fixe sur la face interne des cellules endothéliales des <b>capillaires</b> de ces tissus.", [LG("LPL : produite par muscle, tissu adipeux (cœur, placenta) · fixée sur l'endothélium des capillaires", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      paires("a1", "Relie chaque apoprotéine à son rôle.", [["Apo A", "Active la LCAT"], ["Apo B100", "Reconnue par le récepteur des LDL"], ["Apo C", "Active la LPL"], ["Apo E", "Reconnaissance par le foie"]], "Les étiquettes des lipoprotéines."),
      qcm("a2", "Quelle apoprotéine est fabriquée par l'entérocyte pour les chylomicrons ?", ["Apo B48", "Apo B100", "Apo A", "Apo E"], "B100 est fabriquée par le foie.")
    ],
    revision: [
      qcm("r1", "Où la lipoprotéine lipase (LPL) est-elle fixée ?", ["Sur la face interne des capillaires du muscle et du tissu adipeux", "Dans le foie uniquement", "Dans la lumière intestinale", "Dans les HDL"], "Elle agit sur les lipoprotéines qui passent dans ces capillaires.")
    ]
  },
  {
    id: "bc-meta-lipides-04", fiche: F1, ficheTitre: F1T, titre: "La naissance des chylomicrons",
    classe: [
      E("Les <b>chylomicrons</b> transportent les lipides <b>exogènes</b>, ceux du repas, surtout des TG. Ils sont formés uniquement dans l'<b>intestin grêle</b>, après un repas : plus le repas est gras, plus il y en a.", [T("Les chylomicrons"), LG("lipides EXOGÈNES (repas) · formés dans l'INTESTIN GRÊLE · état post-prandial", "bleu")]),
      E("D'abord, la digestion. La <b>bile</b> : les sels biliaires émulsionnent les graisses en fines gouttelettes. Attention, ce n'est <b>pas</b> une hydrolyse.", [EQ("1 · bile : émulsion en gouttelettes (PAS une hydrolyse)"), POST("Émulsion ≠ hydrolyse", "piege")], "pointe"),
      E("Puis le <b>suc pancréatique</b> : lipase pancréatique, phospholipase, cholestérol-estérase. On obtient des AG, des monoglycérides, du cholestérol, du glycérol, regroupés en <b>micelles</b> avec les sels biliaires.", [EQ("2 · suc pancréatique (lipase, phospholipase, cholestérol-estérase) → AG, monoglycérides, cholestérol → micelles")]),
      E("Absorption par la membrane apicale, surtout par diffusion. Le cholestérol, lui, utilise un transporteur, <b>NPC1L1</b>. Dans l'entérocyte, les AG sont pris en charge par la <b>FABP</b>, puis réestérifiés en TG dans le réticulum lisse. Les apoprotéines sont faites dans le réticulum rugueux. Le Golgi emballe, et exocytose.", [EQ("3 · entérocyte : FABP → REL (réestérification en TG) · RER (apo B48, A) → Golgi → exocytose")]),
      E("Raccourci : les AG à chaîne <b>courte et moyenne</b>, du beurre, du lait, de l'huile de coco, passent directement dans le sang de la <b>veine porte</b>, vers le foie.", [LG("AG courts et moyens → directement VEINE PORTE → foie", "vert", { puce: "•" })], "content")
    ],
    questions: [
      vf("a1", "Les sels biliaires hydrolysent les triglycérides.", false, "Faux : ils les émulsionnent. L'hydrolyse est faite par la lipase pancréatique."),
      qcm("a2", "Où les AG sont-ils réestérifiés en TG dans l'entérocyte ?", ["Dans le réticulum endoplasmique lisse", "Dans la mitochondrie", "Dans le noyau", "Dans la lumière intestinale"], "REL : réestérification ; RER : apoprotéines.")
    ],
    revision: [
      qcm("r1", "Quel transporteur fait entrer le cholestérol dans l'entérocyte ?", ["NPC1L1", "GLUT4", "FABP", "La carnitine"], "Les AG, eux, entrent surtout par diffusion."),
      qcm("r2", "Où partent les AG à chaîne courte et moyenne absorbés ?", ["Dans la veine porte, vers le foie", "Dans les chylomicrons", "Dans la lymphe", "Dans les HDL"], "Ils évitent les chylomicrons.")
    ]
  },
  {
    id: "bc-meta-lipides-05", fiche: F1, ficheTitre: F1T, titre: "Le voyage des chylomicrons",
    classe: [
      E("Composition d'un chylomicron : proche de celle du repas. Surtout des triglycérides.", [T("Composition et trajet"), GRI(["Constituant", "Part"], [["Triglycérides", "90 %"], ["Phospholipides", "5 %"], ["Apoprotéines", "2 %"], ["Cholestérol estérifié", "2 %"], ["Cholestérol libre", "1 %"]], true)]),
      E("Ils sont <b>trop gros</b> pour les capillaires sanguins. Ils passent dans les <b>chylifères</b>, les capillaires lymphatiques, puis le canal thoracique, puis la veine subclavière gauche.", [EQ("chylifères (lymphe) → canal thoracique → veine subclavière gauche")]),
      E("Conséquence importante : les lipides absorbés <b>évitent le foie</b>. Ils vont d'abord aux muscles et au tissu adipeux.", [POST("Chylomicrons : 90 % TG · lymphe · ils ÉVITENT le foie", "cle")], "reflechit"),
      E("Ils transportent aussi les vitamines liposolubles A, D, E, K vers les tissus : adipeux, musculaire, conjonctif, peau.", [LG("transportent aussi les vit. A, D, E, K vers les tissus", "noir", { puce: "•" })]),
      E("Application : si les graisses sont mal absorbées, par manque de bile ou de lipase, on peut utiliser des huiles à <b>TCM</b>, triglycérides à chaîne moyenne. Elles sont absorbées sans micelles ni chylomicrons.", [POST("Malabsorption : huiles à TCM (chaîne moyenne), absorbées sans micelles ni chylomicrons", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi les chylomicrons passent-ils par la lymphe ?", ["Ils sont trop gros pour les capillaires sanguins", "Ils sont solubles dans l'eau", "Le foie les refuse", "Ils n'ont pas d'apoprotéines"], "Chylifères → canal thoracique → veine subclavière gauche."),
      qcm("a2", "Quelle est la part de triglycérides dans un chylomicron ?", ["90 %", "60 %", "10 %", "5 %"], "Composition proche de celle du repas.")
    ],
    revision: [
      qcm("r1", "Pourquoi utilise-t-on des huiles à TCM en cas de malabsorption des graisses ?", ["Elles sont absorbées sans micelles ni chylomicrons", "Elles n'apportent pas de calories", "Elles contiennent de la bile", "Elles sont riches en cholestérol"], "Les AG moyens passent directement par la veine porte.")
    ]
  },
  {
    id: "bc-meta-lipides-06", fiche: F1, ficheTitre: F1T, titre: "La fin des chylomicrons",
    classe: [
      E("Les chylomicrons <b>natifs</b> portent l'apo A et l'apo B48. Dans le sang, ils font des échanges avec les HDL : ils reçoivent les apo <b>C</b> et <b>E</b>, et donnent l'apo A.", [T("Le catabolisme des chylomicrons"), EQ("chylomicron natif (A, B48) ⇄ HDL → reçoit C et E, donne A")]),
      E("La <b>LPL</b>, activée par l'apo C, hydrolyse leurs TG. Les AG sont captés par le <b>muscle</b>, pour l'énergie, ou par le <b>tissu adipeux</b>, réestérifiés et mis en réserve. Le glycérol reste dans le sang et est récupéré par le foie.", [LG("LPL (apo C) : TG → AG → muscle (ATP) ou tissu adipeux (réserve) · glycérol → foie", "vert", { puce: "•" })]),
      E("Ils perdent l'apo C et rétrécissent : de 1 000 à 75 nm. Il ne reste que les apo B48 et E : ce sont les <b>restes de chylomicrons</b>. Le foie les capte grâce à ses récepteurs de l'apo E et B, et les digère dans ses lysosomes.", [LG("→ RESTES (75 nm, apo B48 + E) → captés par le FOIE → lysosomes", "bleu", { puce: "•" })]),
      E("Leur demi-vie est brève, environ <b>1 heure</b> : on n'en trouve qu'après un repas.", [POST("Chylomicrons : demi-vie ≈ 1 h · restes → foie", "cle")]),
      E("Régulation de la LPL. Dans le <b>tissu adipeux</b>, sa synthèse est stimulée par l'<b>insuline</b> : stockage. Dans le <b>muscle</b>, strié et cardiaque, elle est <b>indépendante</b> de l'insuline et répond aux besoins en énergie.", [EFF(), T("La LPL selon le tissu"), GRI(["Tissu", "LPL", "But"], [["Tissu adipeux", "stimulée par l'INSULINE", "stockage (lipogenèse)"], ["Muscle (strié, cœur)", "indépendante de l'insuline", "énergie (β-oxydation)"]], true), POST("LPL : insulino-dépendante dans le tissu adipeux, pas dans le muscle", "piege")], "reflechit"),
      E("Et si la LPL manque, par un déficit génétique rare ? Les chylomicrons s'accumulent : hyperchylomicronémie, donc hypertriglycéridémie, autrefois dite de type I.", [LG("déficit génétique en LPL → hyperchylomicronémie → hypertriglycéridémie (type I)", "rouge", { taille: "petit" })])
    ],
    questions: [
      qcm("a1", "Quelle apoprotéine active la LPL sur les chylomicrons ?", ["L'apo C", "L'apo A", "L'apo B48", "L'apo E"], "Reçue des HDL."),
      qcm("a2", "Dans quel tissu la LPL est-elle stimulée par l'insuline ?", ["Le tissu adipeux", "Le muscle cardiaque", "Le muscle strié", "Aucun"], "Dans le muscle, elle est indépendante de l'insuline.")
    ],
    revision: [
      qcm("r1", "Que deviennent les restes de chylomicrons ?", ["Ils sont captés par le foie", "Ils deviennent des HDL", "Ils sont éliminés dans l'urine", "Ils retournent dans la lymphe"], "Grâce aux récepteurs de l'apo E et B."),
      qcm("r2", "Quelle est la demi-vie des chylomicrons ?", ["Environ 1 heure", "Environ 4 heures", "Plusieurs jours", "Plusieurs semaines"], "Ils ne sont présents qu'après un repas.")
    ]
  },
  {
    id: "bc-meta-lipides-07", fiche: F1, ficheTitre: F1T, titre: "VLDL, IDL, LDL",
    classe: [
      E("La voie <b>endogène</b> : les lipides fabriqués par le foie. Le foie exporte ses TG dans les <b>VLDL</b>, environ 50 nm, par exocytose dans les capillaires sinusoïdes.", [T("La voie endogène"), LG("VLDL : faites par le FOIE · transport des lipides ENDOGÈNES (surtout TG)", "bleu")]),
      E("Elles portent l'apo B100, et l'apo C reçue des HDL. Composition : 60 % de TG. Elles régulent les TG sanguins. Demi-vie : environ 4 heures.", [GRI(["", "VLDL", "LDL"], [["Origine", "foie", "dégradation des VLDL (via les IDL)"], ["TG", "60 %", "10 %"], ["Cholestérol estérifié", "5 %", "35 %"], ["Apo", "B100 + C", "B100 seule"], ["Demi-vie", "≈ 4 h", "plusieurs jours"]], true)]),
      E("La LPL, avec l'apo C, leur retire des AG : elles deviennent des <b>IDL</b>, moins riches en TG, plus riches en cholestérol. Une partie est captée par le foie ; le reste passe par la <b>lipase hépatique</b> et devient des <b>LDL</b>.", [EQ("VLDL → (LPL) → IDL → (lipase hépatique) → LDL")]),
      E("Chaque étape rend la particule plus petite et plus riche en cholestérol. Les LDL <b>distribuent le cholestérol</b> aux tissus : leur apo B100 est reconnue par un récepteur, puis endocytose et digestion lysosomale.", [LG("LDL : distribuent le cholestérol · récepteur de l'apo B100 → endocytose", "vert", { puce: "•" })]),
      E("Ces récepteurs sont nombreux dans les surrénales, les gonades, et surtout le <b>foie</b>, qui capte la majorité des LDL.", [POST("VLDL (foie, 60 % TG) → IDL → LDL (35 % chol. estérifié, plusieurs jours)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le rôle principal des LDL ?", ["Distribuer le cholestérol aux tissus", "Ramener le cholestérol au foie", "Transporter les TG du repas", "Transporter les AG libres"], "Elles sont reconnues par le récepteur de l'apo B100."),
      qcm("a2", "Quel organe capte la majorité des LDL ?", ["Le foie", "Le muscle", "Le tissu adipeux", "Le cerveau"], "Récepteurs nombreux aussi dans les surrénales et les gonades.")
    ],
    revision: [
      qcm("r1", "Quelle enzyme transforme les IDL en LDL ?", ["La lipase hépatique", "La LPL", "La LCAT", "La lipase hormono-sensible"], "La LPL agit avant, sur les VLDL."),
      qcm("r2", "Quelle est la part de TG dans les VLDL ?", ["60 %", "90 %", "10 %", "5 %"], "Elles transportent surtout les TG endogènes.")
    ]
  },
  {
    id: "bc-meta-lipides-08", fiche: F1, ficheTitre: F1T, titre: "HDL et transport inverse",
    classe: [
      E("Les <b>HDL</b> sont faites par le foie, et un peu l'intestin. Au départ, elles sont en forme de disque, riches en phospholipides et en apoprotéines.", [T("Les HDL"), LG("faites par le foie (et l'intestin) · d'abord DISCOÏDES, riches en PL et apo", "bleu")]),
      E("Leur rôle : le <b>transport inverse</b> du cholestérol. Elles captent le cholestérol en excès des tissus et le ramènent au <b>foie</b>, qui l'élimine par la bile.", [EQ("tissus (cholestérol en excès) → HDL → FOIE → bile")]),
      E("Comment ? Leur apo A active la <b>LCAT</b>. Elle estérifie le cholestérol libre pris aux chylomicrons, aux LDL et aux membranes. Le cholestérol estérifié file au cœur des HDL, qui deviennent <b>sphériques</b>. Puis elles sont captées par le foie.", [LG("apo A → LCAT : estérifie le cholestérol → cœur des HDL → sphériques → captées par le foie", "vert", { puce: "•" })]),
      E("Composition : 5 % de TG, 30 % de phospholipides, 20 % de cholestérol, et 45 % d'apoprotéines. Bonus : elles sont anti-inflammatoires et limitent l'oxydation des LDL.", [GRI(["HDL", "Part"], [["TG", "5 %"], ["Phospholipides", "30 %"], ["Cholestérol", "20 %"], ["Apoprotéines", "45 %"]], true), POST("HDL : transport inverse du cholestérol vers le foie (LCAT)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'appelle-t-on le transport inverse du cholestérol ?", ["Le retour du cholestérol des tissus vers le foie par les HDL", "La livraison du cholestérol aux tissus par les LDL", "L'absorption intestinale du cholestérol", "La synthèse du cholestérol"], "Le foie l'élimine ensuite par la bile."),
      qcm("a2", "Quelle enzyme, activée par l'apo A, estérifie le cholestérol des HDL ?", ["La LCAT", "La LPL", "L'ACAT", "La lipase hépatique"], "Lécithine-cholestérol acyltransférase.")
    ],
    revision: [
      vf("r1", "Les HDL limitent l'oxydation des LDL.", true, "Vrai, et elles sont anti-inflammatoires.")
    ]
  },
  {
    id: "bc-meta-lipides-09", fiche: F1, ficheTitre: F1T, titre: "Lipoprotéines et cœur",
    classe: [
      E("« Bon » et « mauvais » cholestérol : ce sont des appellations <b>abusives</b>. C'est le même cholestérol ; seule la lipoprotéine qui le transporte change.", [T("« Bon » et « mauvais » cholestérol"), LG("même cholestérol : seule la LIPOPROTÉINE change", "noir")], "reflechit"),
      E("Les <b>LDL</b>, le « mauvais » : riches en cholestérol, athérogènes, à limiter. Les <b>HDL</b>, le « bon » : elles ramènent le cholestérol au foie, à favoriser.", [LG("LDL (« mauvais ») : cholestérol « aller », athérogènes → à LIMITER", "rouge", { puce: "•" }), LG("HDL (« bon ») : cholestérol « retour » → à FAVORISER", "vert", { puce: "•" })]),
      E("Comment les LDL s'accumulent ? <b>Rétrocontrôle</b> : quand le cholestérol monte dans l'hépatocyte, il inhibe l'HMG-CoA réductase et la synthèse des récepteurs de l'apo B. Le foie se protège, mais il capte <b>moins de LDL</b>, qui restent dans le sang. Même effet en cas de déficit génétique des récepteurs.", [EFF(), T("De l'excès de LDL à l'athérome"), EQ("cholestérol ↑ dans l'hépatocyte → récepteurs LDL ↓ → LDL s'accumulent dans le sang")]),
      E("Puis l'<b>athérome</b>. Les LDL en excès s'oxydent. Elles sont captées par les <b>macrophages</b>, sans rétrocontrôle. Les macrophages se gorgent et deviennent des <b>cellules spumeuses</b> dans la paroi des artères : plaques d'athérome, athérosclérose.", [EQ("LDL oxydées → macrophages → cellules spumeuses → plaques d'athérome")]),
      E("Et un excès de VLDL, donc de triglycérides, vient souvent d'un excès de sucres, d'alcool et d'énergie.", [POST("LDL oxydés → macrophages → cellules spumeuses → athérome · excès de VLDL : sucres, alcool", "cle")], "content")
    ],
    questions: [
      ordre("a1", "Remets dans l'ordre la formation de l'athérome.", ["LDL en excès oxydées", "Captées par les macrophages", "Cellules spumeuses dans la paroi", "Plaque d'athérome"], "Les macrophages n'ont pas de rétrocontrôle."),
      vf("a2", "Le cholestérol des HDL est chimiquement différent de celui des LDL.", false, "Faux : c'est le même cholestérol ; seule la lipoprotéine change.")
    ],
    revision: [
      qcm("r1", "D'où vient souvent un excès de VLDL (triglycérides) ?", ["D'un excès de sucres, d'alcool et d'énergie", "D'un manque de protéines", "D'un excès de fibres", "D'un manque de soleil"], "Le foie transforme l'excès en TG.")
    ]
  },

  /* ================= FICHE 2 ================= */
  {
    id: "bc-meta-lipides-10", fiche: F2, ficheTitre: F2T, titre: "La lipolyse",
    classe: [
      E("Vue d'ensemble : les graisses du repas arrivent aux muscles et au tissu adipeux, le principal lieu de stockage. Besoin d'énergie ? <b>Lipolyse</b>, puis <b>β-oxydation</b>. Trop d'apports ? <b>Lipogenèse</b> et mise en réserve.", [T("La lipolyse"), LG("besoin d'énergie → LIPOLYSE → β-OXYDATION · excès → LIPOGENÈSE", "noir")]),
      E("La lipolyse, c'est l'<b>hydrolyse des TG</b> stockés dans l'adipocyte, en glycérol plus 3 AG libres. Elle a lieu pendant le jeûne, d'autant plus qu'il est long, l'effort et le stress.", [EQ("TG → glycérol + 3 AG (adipocyte)")]),
      E("Les AG partent un par un. La <b>lipase hormono-sensible</b>, la lipase HS, est l'enzyme clé : TG vers diglycéride plus un AG. Puis d'autres lipases : monoglycéride, puis glycérol.", [LG("lipase HS (enzyme CLÉ) : TG → diglycéride + AG", "rouge", { puce: "1" }), LG("autres lipases : → monoglycéride + AG → glycérol + AG", "noir", { puce: "2" })]),
      E("Les <b>AG</b> passent dans le sang, accrochés à l'<b>albumine</b>, vers les muscles, le cœur et le foie, qui les brûlent par β-oxydation.", [LG("AG → sang (albumine) → muscles, cœur, foie → β-oxydation", "bleu", { puce: "•" })]),
      E("Le <b>glycérol</b> est capté par le foie, le seul à avoir la glycérol kinase, qui en fait du glucose par néoglucogenèse. C'est la seule partie d'un TG qui peut redevenir du glucose.", [LG("glycérol → FOIE (glycérol kinase) → néoglucogenèse", "vert", { puce: "•" }), POST("Glycérol = seule partie d'un TG qui peut redevenir du glucose", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Quelle est l'enzyme clé de la lipolyse ?", ["La lipase hormono-sensible", "La lipase pancréatique", "La LPL", "L'acétyl-CoA carboxylase"], "C'est elle que règlent les hormones."),
      qcm("a2", "Quelle partie d'un triglycéride peut redevenir du glucose ?", ["Le glycérol", "Les acides gras", "Les deux", "Aucune"], "Par la néoglucogenèse dans le foie.")
    ],
    revision: [
      qcm("r1", "Comment voyagent les AG libérés par la lipolyse ?", ["Liés à l'albumine", "Dans les chylomicrons", "Dans les HDL", "Libres dans la lymphe"], "Vers les muscles, le cœur, le foie.")
    ]
  },
  {
    id: "bc-meta-lipides-11", fiche: F2, ficheTitre: F2T, titre: "Les hormones de la lipolyse",
    classe: [
      E("Qui allume la lipolyse ? Le <b>glucagon</b>, en cas d'hypoglycémie ou de jeûne, et l'<b>adrénaline</b>, de la médullosurrénale, à l'effort ou en cas de stress.", [T("La régulation hormonale"), LG("ALLUMENT : glucagon (jeûne) · adrénaline (effort, stress)", "vert")]),
      E("Le mécanisme : récepteur, adénylate cyclase, <b>AMPc</b>, kinase. La lipase HS est <b>phosphorylée</b> : elle devient active.", [EQ("glucagon, adrénaline → AMPc → kinase → lipase HS PHOSPHORYLÉE = ACTIVE")]),
      E("Le <b>cortisol</b> et les <b>hormones thyroïdiennes</b> favorisent aussi la lipolyse, mais plus lentement : ils augmentent la synthèse de la lipase HS, en agissant sur les gènes. Jeûne prolongé, thermogenèse.", [LG("cortisol, T3/T4 : ↑ synthèse de la lipase HS (lent, sur les gènes)", "vert", { puce: "•" })]),
      E("Qui l'éteint ? L'<b>insuline</b>, après un repas. Elle active une <b>phosphatase</b>, qui retire le phosphate : la lipase HS est inactive. Les graisses restent stockées.", [EQ("insuline → phosphatase → lipase HS DÉPHOSPHORYLÉE = INACTIVE"), POST("Glucagon, adrénaline → AMPc → lipase HS active · insuline l'inhibe", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Sous quelle forme la lipase hormono-sensible est-elle active ?", ["Phosphorylée", "Déphosphorylée", "Liée à l'insuline", "Liée à l'albumine"], "Glucagon, adrénaline → AMPc → kinase → phosphorylation."),
      qcm("a2", "Quelle hormone inhibe la lipolyse ?", ["L'insuline", "Le glucagon", "L'adrénaline", "Le cortisol"], "Via une phosphatase.")
    ],
    revision: [
      qcm("r1", "Comment le cortisol favorise-t-il la lipolyse ?", ["Il augmente la synthèse de la lipase HS (action lente)", "Il phosphoryle directement la lipase", "Il active la LPL", "Il bloque l'insuline au pancréas"], "Action sur les gènes, comme les hormones thyroïdiennes.")
    ]
  },
  {
    id: "bc-meta-lipides-12", fiche: F2, ficheTitre: F2T, titre: "Activer l'acide gras",
    classe: [
      E("La <b>β-oxydation</b> : la dégradation des AG dans la <b>matrice mitochondriale</b>, par oxydation du carbone β, le C3. La chaîne est coupée <b>2 carbones par 2 carbones</b>, libérés en acétyl-CoA.", [T("La β-oxydation"), LG("matrice mitochondriale · oxydation du Cβ (C3) · coupe 2 C par 2 C → ACÉTYL-CoA", "bleu")]),
      E("Trois étapes : l'activation, le transfert dans la mitochondrie, et l'oxydation, l'hélice de Lynen.", [RANG([
        { titre: "1 · Activation", x: "AG → acyl-CoA (coût : 2 ATP)", c: "rouge" },
        { titre: "2 · Transfert", x: "navette de la carnitine (CAT I, translocase, CAT II)", c: "bleu" },
        { titre: "3 · Hélice de Lynen", x: "4 réactions répétées : −2 C par tour", c: "vert" }
      ])]),
      E("Étape 1, l'<b>activation</b>, sur la membrane externe de la mitochondrie, côté cytosol. Enzyme : l'<b>acyl-CoA synthétase</b>, ou thiokinase. En deux temps : AG plus ATP donne acyl-AMP plus PPi ; puis acyl-AMP plus CoA donne acyl-CoA plus AMP.", [MONTRE(1), EQ("AG + CoA-SH + ATP → acyl-CoA + AMP + PPi")]),
      E("Le PPi est aussitôt hydrolysé en 2 Pi : la réaction devient irréversible. Et l'ATP est devenu de l'AMP : on a dépensé l'équivalent de <b>2 ATP</b>.", [POST("Activation : ATP → AMP = coût de 2 ATP", "piege")], "reflechit")
    ],
    questions: [
      qcm("a1", "Combien coûte l'activation d'un acide gras ?", ["2 ATP (ATP → AMP)", "1 ATP", "7 ATP", "Rien"], "L'ATP devient AMP + PPi, aussitôt hydrolysé."),
      qcm("a2", "Où a lieu la β-oxydation ?", ["Dans la matrice mitochondriale", "Dans le cytosol", "Dans le réticulum endoplasmique", "Dans le noyau"], "Les AG doivent donc y entrer.")
    ],
    revision: [
      qcm("r1", "Quelle enzyme active l'acide gras en acyl-CoA ?", ["L'acyl-CoA synthétase (thiokinase)", "La CAT I", "La thiolase", "L'ACC"], "Sur la membrane externe, côté cytosol.")
    ]
  },
  {
    id: "bc-meta-lipides-13", fiche: F2, ficheTitre: F2T, titre: "La navette de la carnitine",
    classe: [
      E("Problème : l'acyl-CoA à longue chaîne ne traverse pas la membrane <b>interne</b> de la mitochondrie. Il n'a pas de transporteur.", [T("La navette de la carnitine"), LG("l'acyl-CoA long ne traverse PAS la membrane interne", "rouge")], "reflechit"),
      E("Solution : la <b>carnitine</b> sert de navette. La <b>CAT I</b>, sur la membrane externe, échange le CoA contre la carnitine : on a un acyl-carnitine.", [EQ("1 · CAT I (membrane externe) : acyl-CoA → acyl-carnitine")]),
      E("Une <b>translocase</b> lui fait passer la membrane interne. Puis la <b>CAT II</b>, dans la matrice, remet un CoA : on retrouve l'acyl-CoA. La carnitine repart chercher un autre AG.", [EQ("2 · translocase (membrane interne)"), EQ("3 · CAT II (matrice) : acyl-carnitine → acyl-CoA")]),
      E("La <b>CAT I</b> est le point de contrôle : elle est bloquée par le <b>malonyl-CoA</b>, produit quand on fabrique des graisses. Comme ça, on ne brûle pas les AG qu'on est en train de fabriquer.", [POST("CAT I = point de contrôle, inhibée par le malonyl-CoA", "cle")]),
      E("Application : la carnitine est fabriquée par le corps, et apportée par la viande. Les compléments de carnitine ne font pas « brûler les graisses » chez une personne en bonne santé.", [POST("Compléments de carnitine : pas d'effet « brûle-graisse » chez la personne en bonne santé", "astuce")], "content")
    ],
    questions: [
      ordre("a1", "Remets dans l'ordre l'entrée d'un AG long dans la mitochondrie.", ["Activation en acyl-CoA", "CAT I : acyl-carnitine", "Translocase : passage de la membrane interne", "CAT II : acyl-CoA dans la matrice"], "La carnitine sert de navette."),
      qcm("a2", "Quelle molécule inhibe la CAT I ?", ["Le malonyl-CoA", "L'acétyl-CoA", "La carnitine", "L'insuline directement"], "On ne brûle pas les AG qu'on fabrique.")
    ],
    revision: [
      vf("r1", "Les compléments de carnitine font brûler les graisses chez une personne en bonne santé.", false, "Faux : le corps en fabrique, et la viande en apporte.")
    ]
  },
  {
    id: "bc-meta-lipides-14", fiche: F2, ficheTitre: F2T, titre: "L'hélice de Lynen",
    classe: [
      E("Dans la matrice, l'acyl-CoA entre dans l'<b>hélice de Lynen</b> : un cycle de <b>4 réactions</b>, répété.", [T("L'hélice de Lynen"), GRI(["Réaction", "Enzyme", "Produit"], [
        ["1 · Oxydation", "acyl-CoA déshydrogénase", "FADH₂ · double liaison C2-C3"],
        ["2 · Hydratation", "énoyl-CoA hydratase", "+ H₂O → β-hydroxyacyl-CoA"],
        ["3 · Oxydation", "β-hydroxyacyl-CoA déshydrogénase", "NADH,H⁺ · cétone sur le Cβ"],
        ["4 · Thiolyse", "β-cétothiolase (+ CoA-SH)", "acétyl-CoA + acyl-CoA raccourci de 2 C"]
      ], true)]),
      E("Un : une <b>oxydation</b> qui produit un <b>FADH₂</b> et crée une double liaison entre le C2 et le C3.", [MONTRE(1)]),
      E("Deux : une <b>hydratation</b>, on ajoute de l'eau. Trois : une deuxième <b>oxydation</b>, qui produit un <b>NADH,H⁺</b> et met une cétone sur le carbone β.", [MONTRE(2), MONTRE(3)]),
      E("Quatre : la <b>thiolyse</b>. Un CoA coupe la chaîne : on libère un <b>acétyl-CoA</b>, et il reste un acyl-CoA raccourci de 2 carbones, qui repart pour un tour.", [MONTRE(4), POST("Lynen : oxydation (FADH₂), hydratation, oxydation (NADH), thiolyse", "cle")]),
      E("Chaque tour donne donc : 1 FADH₂, 1 NADH,H⁺, 1 acétyl-CoA. Les FADH₂ et NADH vont à la chaîne respiratoire ; l'acétyl-CoA va au cycle de Krebs.", [EFF(), T("Chaque tour"), EQ("1 tour = 1 FADH₂ + 1 NADH,H⁺ + 1 acétyl-CoA (chaîne – 2 C)"), LG("FADH₂, NADH → chaîne respiratoire · acétyl-CoA → cycle de Krebs", "bleu", { puce: "•" })], "content")
    ],
    questions: [
      ordre("a1", "Remets dans l'ordre les 4 réactions de l'hélice de Lynen.", ["Oxydation (FADH₂)", "Hydratation", "Oxydation (NADH,H⁺)", "Thiolyse"], "Puis on recommence avec un acyl-CoA raccourci de 2 C."),
      qcm("a2", "Que produit un tour d'hélice de Lynen ?", ["1 FADH₂ + 1 NADH,H⁺ + 1 acétyl-CoA", "2 ATP", "1 malonyl-CoA", "1 glucose"], "Et un acyl-CoA raccourci de 2 carbones.")
    ],
    revision: [
      qcm("r1", "Quelle réaction de l'hélice de Lynen libère l'acétyl-CoA ?", ["La thiolyse", "L'hydratation", "La première oxydation", "La deuxième oxydation"], "La β-cétothiolase coupe avec un CoA-SH.")
    ]
  },
  {
    id: "bc-meta-lipides-15", fiche: F2, ficheTitre: F2T, titre: "Le bilan : 129 ATP",
    classe: [
      E("Calculons pour l'acide <b>palmitique</b>, 16 carbones. Pour un AG pair à n carbones : (n moins 2) sur 2 tours. Ici, (16 − 2) / 2 = <b>7 tours</b>. Le dernier tour coupe le butyryl-CoA, 4 C, en 2 acétyl-CoA : on obtient <b>8 acétyl-CoA</b>.", [T("Bilan de l'acide palmitique"), EQ("(16 − 2) / 2 = 7 tours → 8 acétyl-CoA + 7 FADH₂ + 7 NADH,H⁺")]),
      E("On convertit en ATP avec les valeurs classiques : 2 par FADH₂, 3 par NADH, 12 par acétyl-CoA. Sans oublier les 2 ATP de l'activation.", [GRI(["Étape", "Produit", "ATP"], [["Activation", "ATP → AMP", "− 2"], ["1re oxydation", "7 FADH₂ × 2", "+ 14"], ["2e oxydation", "7 NADH,H⁺ × 3", "+ 21"], ["Krebs", "8 acétyl-CoA × 12", "+ 96"], ["TOTAL", "", "129 ATP"]], true)]),
      E("Attention : ce sont les valeurs classiques, comme les 38 ATP du glucose. Avec les valeurs récentes, 2,5, 1,5 et 10, on trouve 106 ATP. Ne mélange jamais les deux systèmes.", [POST("Palmitique : 129 ATP (valeurs classiques) · 106 (valeurs récentes) · ne pas mélanger", "piege")], "reflechit"),
      E("Pourquoi c'est rentable ? 129 sur 16, environ <b>8 ATP par carbone</b>, contre 38 sur 6, environ 6, pour le glucose. Les carbones des AG sont moins oxydés au départ.", [EFF(), T("Les intérêts"), LG("≈ 8 ATP par carbone (glucose ≈ 6) : AG moins oxydés → plus rentables", "vert", { puce: "•" })]),
      E("Autre intérêt : l'<b>eau métabolique</b>, 145 H₂O par acide palmitique. La bosse du chameau, c'est une réserve de graisse, mais aussi une réserve d'eau !", [LG("eau métabolique : 145 H₂O par palmitique (bosse du chameau)", "bleu", { puce: "•" })]),
      E("Limite : la β-oxydation a besoin d'<b>oxygène</b>. Sans O₂, la chaîne respiratoire se bloque, FAD et NAD⁺ ne sont plus régénérés, le cycle de Krebs s'arrête. En effort intense, anaérobie, seule la glycolyse fournit de l'ATP.", [POST("β-oxydation : besoin d'O₂ · en anaérobie, seule la glycolyse fournit de l'ATP", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien de tours d'hélice de Lynen pour l'acide palmitique (C16) ?", ["7", "8", "16", "14"], "(16 − 2) / 2 = 7 tours, qui donnent 8 acétyl-CoA."),
      qcm("a2", "Quel est le bilan classique de la β-oxydation complète de l'acide palmitique ?", ["129 ATP", "38 ATP", "106 ATP en valeurs classiques", "7 ATP"], "Valeurs classiques ; 106 avec les valeurs récentes.")
    ],
    revision: [
      qcm("r1", "Pourquoi les AG sont-ils plus rentables que le glucose par carbone ?", ["Leurs carbones sont moins oxydés", "Ils sont plus solubles", "Ils n'ont pas besoin d'O₂", "Ils produisent du NADPH"], "≈ 8 ATP par carbone contre ≈ 6."),
      vf("r2", "La β-oxydation peut fonctionner sans oxygène.", false, "Faux : sans O₂, FAD et NAD⁺ ne sont plus régénérés.")
    ]
  },
  {
    id: "bc-meta-lipides-16", fiche: F2, ficheTitre: F2T, titre: "Les cas particuliers",
    classe: [
      E("Deux cas particuliers. D'abord, les AG <b>insaturés</b>. Leurs doubles liaisons cis sont mal placées pour l'hydratase.", [T("AG insaturés"), LG("doubles liaisons cis mal placées pour l'hydratase", "noir")]),
      E("Une <b>isomérase</b> déplace la double liaison, de cis-Δ3 à trans-Δ2, sans la supprimer. Elle remplace la première oxydation : un FADH₂ en moins, donc <b>2 ATP de moins</b> par double liaison. L'acide palmitoléique donne donc 127 ATP.", [LG("ISOMÉRASE (cis-Δ3 → trans-Δ2) remplace la 1re oxydation → − 1 FADH₂ = − 2 ATP", "bleu", { puce: "•" }), EQ("palmitoléique (16:1) : 129 − 2 = 127 ATP")]),
      E("Pour les polyinsaturés, une <b>réductase</b>, qui utilise du NADPH, supprime en plus une double liaison.", [LG("polyinsaturés : + une RÉDUCTASE (NADPH)", "bleu", { puce: "•" })]),
      E("Ensuite, les AG à nombre <b>impair</b> de carbones. β-oxydation normale jusqu'à un <b>propionyl-CoA</b>, 3 carbones.", [EFF(), T("AG à nombre impair de C"), EQ("β-oxydation → … → propionyl-CoA (3 C)")]),
      E("Puis : propionyl-CoA carboxylase, avec la <b>biotine</b>, vitamine B8 : méthylmalonyl-CoA. Une épimérase, puis la méthylmalonyl-CoA mutase, avec la <b>vitamine B12</b>, donnent du <b>succinyl-CoA</b>, 4 carbones, qui entre dans le cycle de Krebs.", [EQ("propionyl-CoA → (carboxylase, biotine B8) → méthylmalonyl-CoA → (mutase, vit. B12) → succinyl-CoA → Krebs"), POST("AG impairs : propionyl-CoA → succinyl-CoA (biotine B8, vitamine B12)", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Combien d'ATP donne l'acide palmitoléique (16:1) ?", ["127 ATP", "129 ATP", "131 ATP", "106 ATP"], "Une double liaison = un FADH₂ en moins = − 2 ATP."),
      qcm("a2", "Que devient le propionyl-CoA issu d'un AG impair ?", ["Du succinyl-CoA, qui entre dans le cycle de Krebs", "Un corps cétonique", "Du malonyl-CoA", "Du cholestérol"], "Avec la biotine (B8) et la vitamine B12.")
    ],
    revision: [
      qcm("r1", "Quelle vitamine est le cofacteur de la méthylmalonyl-CoA mutase ?", ["La vitamine B12", "La vitamine C", "La vitamine K", "La vitamine D"], "La biotine (B8), elle, sert à la carboxylase.")
    ]
  },
  {
    id: "bc-meta-lipides-17", fiche: F2, ficheTitre: F2T, titre: "Le malonyl-CoA, interrupteur",
    classe: [
      E("Dégradation et synthèse des AG sont <b>antagonistes</b> et liées. Un seul interrupteur : le <b>malonyl-CoA</b>, produit par l'acétyl-CoA carboxylase, l'<b>ACC</b>.", [T("Un interrupteur : le malonyl-CoA"), LG("ACC → MALONYL-CoA : matière première de la synthèse ET frein de la CAT I", "rouge")]),
      E("Après un repas : l'<b>insuline</b> active l'ACC par déphosphorylation. Le malonyl-CoA monte. Il sert à fabriquer des AG, et il bloque la CAT I : la β-oxydation s'arrête.", [EQ("REPAS : insuline → ACC active → malonyl-CoA ↑ → synthèse ON, CAT I bloquée → β-oxydation OFF")]),
      E("Au jeûne ou à l'effort : le <b>glucagon</b>, qui agit surtout sur le foie, ou l'<b>adrénaline</b>, surtout sur le muscle : AMPc, kinase, l'ACC est inactivée. Le malonyl-CoA baisse, la CAT I se libère, les AG sont brûlés. Et ces hormones stimulent aussi la lipolyse, qui fournit les AG.", [EQ("JEÛNE, EFFORT : glucagon, adrénaline → ACC inactive → malonyl-CoA ↓ → β-oxydation ON")]),
      E("L'idée clé : on ne fabrique pas et on ne brûle pas les AG en même temps. Pas de cycle inutile.", [POST("Malonyl-CoA inhibe la CAT I : synthèse ON = dégradation OFF", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Après un repas, pourquoi la β-oxydation s'arrête-t-elle ?", ["Le malonyl-CoA augmente et bloque la CAT I", "La carnitine disparaît", "L'insuline détruit les mitochondries", "Les AG manquent"], "L'insuline active l'ACC."),
      qcm("a2", "Quel est l'effet du glucagon sur l'acétyl-CoA carboxylase ?", ["Il l'inactive (phosphorylation)", "Il l'active", "Il n'a aucun effet", "Il la transforme en CAT I"], "Le malonyl-CoA baisse, la β-oxydation reprend.")
    ],
    revision: [
      vf("r1", "On peut fabriquer et brûler des acides gras en même temps dans la même cellule.", false, "Faux : le malonyl-CoA sert d'interrupteur.")
    ]
  },
  {
    id: "bc-meta-lipides-18", fiche: F2, ficheTitre: F2T, titre: "La lipogenèse en bref",
    classe: [
      E("La <b>lipogenèse</b> : fabriquer des lipides, AG, TG, phospholipides, cholestérol, à partir de molécules non lipidiques, surtout les glucides. On met l'énergie en réserve quand les apports dépassent les besoins. Surtout dans le <b>foie</b>, aussi le tissu adipeux, dans le <b>cytosol</b>. Hormone : l'<b>insuline</b>.", [T("La lipogenèse"), LG("glucides en excès → lipides · foie (tissu adipeux) · CYTOSOL · insuline", "noir")]),
      E("Il faut de l'ATP, du pouvoir réducteur, le NADPH,H⁺, et un précurseur : l'acétyl-CoA, surtout issu du glucose.", [LG("besoins : ATP + NADPH,H⁺ + ACÉTYL-CoA (surtout du glucose)", "bleu", { puce: "•" })]),
      E("Trois temps. Un : l'acétyl-CoA sort de la mitochondrie déguisé en <b>citrate</b>. Deux : l'ACC le transforme en <b>malonyl-CoA</b>, le donneur de 2 C. Trois : l'<b>AG synthase</b> assemble jusqu'au <b>palmitate</b>, 16 C, en 7 tours.", [EQ("citrate → acétyl-CoA → (ACC) → malonyl-CoA → (AG synthase, 7 tours) → palmitate"), POST("8 acétyl-CoA + 7 ATP + 14 NADPH → palmitate", "cle")]),
      E("Ensuite on fabrique les TG : glycérol-3-P, du glucose ou du glycérol dans le foie seulement, plus 2 acyl-CoA : acide phosphatidique. Une phosphatase retire le phosphate, un 3e AG s'ajoute : triglycéride. Ou on ajoute une tête : phospholipide.", [EFF(), T("TG, phospholipides, cholestérol"), EQ("glycérol-3-P + 2 acyl-CoA → acide phosphatidique → TG (ou phospholipides)")]),
      E("Et le début du cholestérol : acétyl-CoA, HMG-CoA, puis l'<b>HMG-CoA réductase</b>, l'étape clé, cible des statines. On verra tout ça en détail dans les fiches 4 et 5.", [EQ("acétyl-CoA → HMG-CoA → (HMG-CoA réductase) → mévalonate → … → cholestérol"), LG("chez l'humain, cette voie reste assez faible, sauf gros excès d'énergie", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Dans quel compartiment se fait la synthèse des acides gras ?", ["Le cytosol", "La matrice mitochondriale", "Le noyau", "Le lysosome"], "Contrairement à la β-oxydation."),
      qcm("a2", "Quel est le donneur de 2 carbones dans la synthèse des AG ?", ["Le malonyl-CoA", "Le propionyl-CoA", "Le glycérol", "Le citrate"], "Formé par l'acétyl-CoA carboxylase.")
    ],
    revision: [
      qcm("r1", "Sous quelle forme l'acétyl-CoA sort-il de la mitochondrie ?", ["Citrate", "Malonyl-CoA", "Acyl-carnitine", "Pyruvate"], "Acétyl-CoA + oxaloacétate = citrate."),
      qcm("r2", "Quel est le bilan de la synthèse d'un palmitate ?", ["8 acétyl-CoA + 7 ATP + 14 NADPH", "8 acétyl-CoA + 129 ATP", "7 acétyl-CoA + 14 ATP + 7 NADPH", "16 acétyl-CoA + 7 ATP"], "7 tours d'AG synthase ; stimulée par l'insuline.")
    ]
  },
  {
    id: "bc-meta-lipides-19", fiche: F2, ficheTitre: F2T, titre: "L'insuline dans l'adipocyte",
    classe: [
      E("Après un repas : hyperglycémie, les cellules β du pancréas libèrent l'<b>insuline</b>. Dans l'adipocyte, dont la gouttelette de graisse occupe environ 80 % du volume, elle pousse au stockage sur tous les fronts.", [T("L'insuline stimule la lipogenèse"), RANG([
        { titre: "Plus d'AG", x: "↑ synthèse et exocytose de la LPL → AG pris aux chylomicrons et VLDL", c: "vert" },
        { titre: "Plus de glucose", x: "GLUT4 recrutés à la membrane · glycolyse ↑ → acétyl-CoA et DHAP (→ glycérol-3-P)", c: "vert" },
        { titre: "Plus de synthèse", x: "active l'ACC · β-oxydation inhibée · voie des pentoses ↑ (NADPH)", c: "vert" },
        { titre: "Plus de stockage", x: "↑ estérification · lipase HS inhibée (pas de lipolyse)", c: "vert" }
      ])]),
      E("Un : elle stimule la <b>LPL</b>, donc plus d'AG pris aux lipoprotéines. Deux : elle recrute les <b>GLUT4</b> et stimule la glycolyse, donc plus d'acétyl-CoA et de glycérol-3-P.", [MONTRE(1), MONTRE(2)]),
      E("Trois : elle active l'<b>ACC</b>, inhibe la β-oxydation et favorise la voie des pentoses phosphates, qui fournit le NADPH. Quatre : elle stimule l'estérification et <b>inhibe la lipase HS</b>.", [MONTRE(3), MONTRE(4)]),
      E("Conclusion : un excès de <b>glucose</b>, et de <b>fructose</b>, favorise la synthèse des lipides. Il fournit tout : acétyl-CoA, NADPH et glycérol-3-P.", [POST("Excès de glucose / fructose → acétyl-CoA + NADPH + glycérol-3-P → lipides", "cle")], "reflechit"),
      E("Et un rétrocontrôle : les TG accumulés font produire de la <b>leptine</b>, qui freine l'appétit en diminuant le neuropeptide Y de l'hypothalamus, qui stimule la faim. Un dérèglement de ce rétrocontrôle peut favoriser l'obésité.", [EFF(), T("La leptine"), EQ("TG stockés → LEPTINE → neuropeptide Y ↓ → appétit ↓"), LG("dérèglement → peut favoriser l'obésité", "rouge", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quel est l'effet de la leptine ?", ["Elle freine l'appétit", "Elle stimule la faim", "Elle active la lipolyse", "Elle bloque l'insuline"], "Elle diminue le neuropeptide Y hypothalamique."),
      qcm("a2", "Comment l'insuline augmente-t-elle les AG disponibles pour l'adipocyte ?", ["Elle stimule la synthèse de la LPL", "Elle active la lipase HS", "Elle bloque les GLUT4", "Elle inhibe l'ACC"], "La LPL prend les AG aux chylomicrons et VLDL.")
    ],
    revision: [
      vf("r1", "Un excès de fructose favorise la synthèse des lipides.", true, "Vrai, comme le glucose : il fournit acétyl-CoA, NADPH et glycérol-3-P.")
    ]
  },
  {
    id: "bc-meta-lipides-20", fiche: F2, ficheTitre: F2T, titre: "Dégradation contre synthèse",
    classe: [
      E("Comparons les deux voies. Ce n'est <b>pas</b> l'inverse exact l'une de l'autre : ce sont des voies distinctes, régulées en sens opposé.", [T("β-oxydation / lipogenèse"), GRI(["", "β-oxydation", "Lipogenèse"], [
        ["Lieu", "matrice mitochondriale", "cytosol (élongation, désaturation : RE)"],
        ["Unité de 2 C", "libérée en acétyl-CoA", "apportée par le malonyl-CoA"],
        ["Coenzymes", "FAD, NAD⁺ (réduits)", "NADPH,H⁺ (oxydé)"],
        ["Porteur de l'acyl", "CoA (+ carnitine pour entrer)", "ACP de l'AG synthase"],
        ["Énergie", "produit de l'ATP (129 pour C16)", "consomme de l'ATP (7 pour C16)"],
        ["Hormones", "jeûne, effort : glucagon, adrénaline", "post-prandial : insuline"],
        ["Contrôle", "CAT I (inhibée par le malonyl-CoA)", "acétyl-CoA carboxylase"]
      ])]),
      E("Le lieu : la mitochondrie pour brûler, le cytosol pour fabriquer. L'unité de 2 carbones : libérée en acétyl-CoA d'un côté, apportée par le malonyl-CoA de l'autre.", [MONTRE(1), MONTRE(2)]),
      E("Les coenzymes : FAD et NAD⁺ qui se réduisent quand on brûle ; NADPH qui s'oxyde quand on fabrique. Le porteur : le CoA d'un côté, l'ACP de l'AG synthase de l'autre.", [MONTRE(3), MONTRE(4)]),
      E("L'énergie : 129 ATP produits contre 7 ATP consommés pour 16 carbones. Les hormones et les points de contrôle sont opposés.", [MONTRE(5), MONTRE(6), MONTRE(7), POST("Pas l'inverse exact : lieux, coenzymes, porteurs et contrôles différents", "piege")], "content")
    ],
    questions: [
      qcm("a1", "Quel coenzyme est utilisé par la synthèse des AG ?", ["NADPH,H⁺", "FAD", "NAD⁺", "Coenzyme Q"], "FAD et NAD⁺ servent à la β-oxydation."),
      vf("a2", "La lipogenèse est exactement l'inverse de la β-oxydation.", false, "Faux : lieu, coenzymes, porteur et enzymes sont différents.")
    ],
    revision: [
      paires("r1", "β-oxydation ou lipogenèse ?", [["Matrice mitochondriale", "Lieu de la β-oxydation"], ["Cytosol", "Lieu de la lipogenèse"], ["ACP de l'AG synthase", "Porteur de la lipogenèse"], ["CAT I", "Point de contrôle de la β-oxydation"]], "Deux voies distinctes.")
    ]
  },

  /* ================= FICHE 3 ================= */
  {
    id: "bc-meta-lipides-21", fiche: F3, ficheTitre: F3T, titre: "Les corps cétoniques",
    classe: [
      E("Les <b>corps cétoniques</b> : un carburant de secours, fabriqué par le foie à partir des acides gras, et de certains acides aminés, quand le <b>glucose manque</b>.", [T("Les corps cétoniques"), LG("carburant de SUBSTITUTION fait par le foie (AG, certains acides aminés) quand le glucose manque", "bleu")]),
      E("Il y en a trois. L'<b>acétoacétate</b>, le premier formé. Le <b>β-hydroxybutyrate</b>, ou BHB, le plus abondant dans le sang. Et l'<b>acétone</b>, formée spontanément : un simple déchet, éliminé dans les urines et l'air expiré. Elle donne une haleine « pomme verte ».", [GRI(["Corps cétonique", "Particularité"], [["Acétoacétate", "le 1er formé"], ["β-hydroxybutyrate (BHB)", "le plus abondant dans le sang"], ["Acétone", "déchet spontané · urines, haleine « pomme verte »"]], true)]),
      E("Ce ne sont <b>pas</b> des lipides : ce sont de petites molécules solubles dans le sang, qui traversent les membranes par simple diffusion. L'acétoacétate et le BHB sont des <b>acides faibles</b>. Et ne les confonds pas avec les acides α-cétoniques.", [POST("Corps cétoniques : PAS des lipides · solubles · acétoacétate et BHB = acides faibles", "piege")], "pointe"),
      E("À quoi servent-ils ? Nourrir le <b>cerveau</b> pendant le jeûne. Au jeûne, le glycogène du foie s'épuise en moins de 24 heures. Ensuite : néoglucogenèse, lipolyse, et corps cétoniques.", [EFF(), T("Nourrir le cerveau"), EQ("jeûne : glycogène hépatique épuisé (< 24 h) → néoglucogenèse + lipolyse → corps cétoniques")]),
      E("Les <b>hématies</b>, sans mitochondries, ne peuvent utiliser que le glucose. Le <b>cerveau</b>, 2 % du poids mais environ 20 % de l'énergie, sans réserve de glycogène : après plusieurs jours de jeûne ou de régime cétogène, <b>60 à 70 %</b> de son énergie vient des corps cétoniques. On épargne ainsi le glucose et les protéines musculaires.", [LG("hématies (sans mitochondries) : glucose SEUL", "rouge", { puce: "•" }), LG("cerveau en jeûne prolongé : 60 à 70 % de son énergie = corps cétoniques", "vert", { puce: "•" }), POST("Cerveau : jusqu'à 60-70 % de son énergie en jeûne prolongé · hématies : glucose seul", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le corps cétonique le plus abondant dans le sang ?", ["Le β-hydroxybutyrate", "L'acétoacétate", "L'acétone", "L'acétyl-CoA"], "L'acétoacétate est le premier formé."),
      qcm("a2", "Quelles cellules ne peuvent utiliser que le glucose ?", ["Les hématies", "Les neurones", "Les cellules musculaires", "Les hépatocytes"], "Elles n'ont pas de mitochondries.")
    ],
    revision: [
      vf("r1", "Les corps cétoniques sont des lipides.", false, "Faux : petites molécules solubles dans le sang."),
      qcm("r2", "Quelle part de son énergie le cerveau peut-il tirer des corps cétoniques en jeûne prolongé ?", ["60 à 70 %", "100 %", "5 %", "20 %"], "Ce qui épargne le glucose et les muscles.")
    ]
  },
  {
    id: "bc-meta-lipides-22", fiche: F3, ficheTitre: F3T, titre: "Pourquoi la cétogenèse ?",
    classe: [
      E("La <b>cétogenèse</b> est typiquement <b>hépatique</b> : seul le foie libère des corps cétoniques dans le sang. Elle a lieu dans la <b>matrice mitochondriale</b>.", [T("La cétogenèse"), LG("FOIE SEUL · matrice mitochondriale", "rouge", { taille: "grand" })]),
      E("Quand ? Jeûne prolongé, régime pauvre en glucides, effort prolongé, diabète non traité.", [LG("jeûne prolongé · régime pauvre en glucides · effort prolongé · diabète non traité", "noir", { puce: "•" })]),
      E("Pourquoi l'acétyl-CoA s'accumule-t-il ? Au jeûne, le foie fait deux choses en même temps : la β-oxydation, qui produit beaucoup d'acétyl-CoA, et la <b>néoglucogenèse</b>, qui consomme l'<b>oxaloacétate</b>, détourné vers le cytosol pour faire du glucose.", [EFF(), T("Pourquoi l'acétyl-CoA s'accumule"), LG("β-oxydation → beaucoup d'ACÉTYL-CoA", "bleu", { puce: "1" }), LG("néoglucogenèse → consomme l'OXALOACÉTATE", "bleu", { puce: "2" })], "reflechit"),
      E("Or l'acétyl-CoA a besoin de l'oxaloacétate pour entrer dans le cycle de Krebs, sous forme de citrate. Sans lui, l'acétyl-CoA s'accumule dans la mitochondrie, et part en cétogenèse.", [EQ("oxaloacétate ↓ → Krebs ralenti → acétyl-CoA s'accumule → CÉTOGENÈSE"), POST("Cause : néoglucogenèse → oxaloacétate ↓ → acétyl-CoA s'accumule", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi l'acétyl-CoA s'accumule-t-il dans le foie à jeun ?", ["La néoglucogenèse consomme l'oxaloacétate", "L'insuline est trop haute", "La β-oxydation est arrêtée", "Le glycogène est plein"], "Sans oxaloacétate, pas d'entrée dans le cycle de Krebs."),
      qcm("a2", "Où se fait la cétogenèse ?", ["Dans la matrice mitochondriale du foie", "Dans le cytosol du muscle", "Dans le cerveau", "Dans le tissu adipeux"], "Seul le foie libère des corps cétoniques.")
    ],
    revision: [
      qcm("r1", "Dans quelle situation la cétogenèse augmente-t-elle ?", ["Un régime pauvre en glucides", "Un repas riche en glucides", "Une perfusion de glucose", "Une forte sécrétion d'insuline"], "Aussi : jeûne prolongé, effort prolongé, diabète non traité.")
    ]
  },
  {
    id: "bc-meta-lipides-23", fiche: F3, ficheTitre: F3T, titre: "Les étapes de la cétogenèse",
    classe: [
      E("Les étapes, dans la mitochondrie de l'hépatocyte. Étape 1 : <b>2 acétyl-CoA</b> donnent l'acétoacétyl-CoA, grâce à la <b>thiolase</b>. Réversible.", [T("Les étapes"), EQ("1 · 2 acétyl-CoA → acétoacétyl-CoA (thiolase)")]),
      E("Étape 2 : on ajoute <b>1 acétyl-CoA</b> : on obtient le <b>HMG-CoA</b>, par l'HMG-CoA synthase. Réversible aussi. Ces deux étapes sont communes avec la synthèse du cholestérol, mais elle, elle se fait dans le cytosol.", [EQ("2 · + 1 acétyl-CoA → HMG-CoA (HMG-CoA synthase)"), POST("Étapes 1 et 2 communes avec la synthèse du cholestérol (qui, elle, se fait dans le cytosol)", "astuce")]),
      E("Étape 3 : l'<b>HMG-CoA lyase</b> retire un acétyl-CoA. On obtient l'<b>acétoacétate</b>, le premier corps cétonique. Cette étape est <b>irréversible</b> et propre à la cétogenèse.", [EQ("3 · HMG-CoA → acétoacétate + acétyl-CoA (HMG-CoA LYASE, irréversible)"), SOUL(true)]),
      E("Étape 4 : l'acétoacétate est réduit en <b>β-hydroxybutyrate</b>, par la β-hydroxybutyrate déshydrogénase, qui consomme un NADH,H⁺ : d'autant plus que le rapport NADH sur NAD⁺ est élevé. Ou bien il perd spontanément un CO₂, surtout dans le sang : c'est l'<b>acétone</b>.", [EQ("4 · acétoacétate → β-hydroxybutyrate (consomme NADH,H⁺)"), EQ("     ou → acétone + CO₂ (spontané)")]),
      E("Le résumé : 2 acétyl-CoA, acétoacétyl-CoA, HMG-CoA, puis l'HMG-CoA lyase, et l'acétoacétate.", [POST("2 acétyl-CoA → acétoacétyl-CoA → HMG-CoA → (HMG-CoA lyase) → acétoacétate", "cle")], "content")
    ],
    questions: [
      ordre("a1", "Remets dans l'ordre la cétogenèse.", ["2 acétyl-CoA", "Acétoacétyl-CoA", "HMG-CoA", "Acétoacétate"], "La thiolase, l'HMG-CoA synthase, puis l'HMG-CoA lyase."),
      qcm("a2", "Quelle enzyme irréversible est propre à la cétogenèse ?", ["L'HMG-CoA lyase", "L'HMG-CoA réductase", "La thiolase", "L'HMG-CoA synthase"], "La réductase, elle, est propre au cholestérol.")
    ],
    revision: [
      qcm("r1", "Comment se forme l'acétone ?", ["Spontanément, par perte d'un CO₂ de l'acétoacétate", "Par l'HMG-CoA lyase", "Par réduction du BHB", "Dans le cerveau"], "C'est un déchet."),
      vf("r2", "La réduction de l'acétoacétate en β-hydroxybutyrate consomme un NADH,H⁺.", true, "Vrai : d'autant plus que le rapport NADH/NAD⁺ est élevé.")
    ]
  },
  {
    id: "bc-meta-lipides-24", fiche: F3, ficheTitre: F3T, titre: "La cétolyse",
    classe: [
      E("La <b>cétolyse</b> : la dégradation des corps cétoniques pour produire de l'ATP, dans les mitochondries des tissus <b>périphériques</b>. Ils y entrent par simple diffusion.", [T("La cétolyse"), LG("dégradation des corps cétoniques → ATP · mitochondries des tissus périphériques", "bleu")]),
      E("Qui les utilise ? Jeûne court, peu de corps cétoniques : surtout les <b>muscles squelettiques</b> et le <b>cœur</b>. Jeûne prolongé : la concentration monte et atteint un seuil qui permet au <b>cerveau</b> de les utiliser. Le rein, un peu.", [LG("jeûne court : muscles, cœur · jeûne prolongé : + CERVEAU · rein : un peu", "vert", { puce: "•" })]),
      E("Et <b>jamais le foie</b>. Il n'a pas l'enzyme, la <b>succinyl-CoA transférase</b>. Et ce serait absurde : c'est justement son excès d'acétyl-CoA qui déclenche la cétogenèse.", [POST("JAMAIS le foie : pas de succinyl-CoA transférase", "piege")], "pointe"),
      E("Les étapes. Le β-hydroxybutyrate redevient acétoacétate, en produisant un NADH,H⁺. Puis la <b>succinyl-CoA transférase</b> active l'acétoacétate en acétoacétyl-CoA, en prenant le CoA d'un succinyl-CoA. Enfin la thiolase coupe : <b>2 acétyl-CoA</b>, qui vont dans le cycle de Krebs.", [EFF(), T("Les étapes"), EQ("BHB → acétoacétate (+ NADH,H⁺)"), EQ("acétoacétate + succinyl-CoA → acétoacétyl-CoA + succinate"), EQ("acétoacétyl-CoA → (thiolase) → 2 acétyl-CoA → Krebs")]),
      E("Prendre le CoA du succinyl-CoA, c'est « détourner » une étape du cycle de Krebs : on perd l'équivalent d'1 ATP, le GTP non produit. Dans ces tissus, pas de néoglucogenèse : l'oxaloacétate est disponible, l'acétyl-CoA entre normalement dans Krebs.", [LG("coût : 1 GTP non produit · oxaloacétate disponible → Krebs normal", "noir", { taille: "petit" }), POST("Acétoacétate + succinyl-CoA → acétoacétyl-CoA → 2 acétyl-CoA → Krebs", "cle")]),
      E("L'idée clé : les corps cétoniques sont une façon pour le foie de <b>transporter l'énergie des graisses</b> sous une forme soluble, utilisable même par le cerveau.", [LG("corps cétoniques = énergie des graisses, version SOLUBLE, exportée par le foie", "vert", { taille: "grand" })], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi le foie n'utilise-t-il jamais les corps cétoniques ?", ["Il n'a pas la succinyl-CoA transférase", "Il n'a pas de mitochondries", "Les corps cétoniques n'y entrent pas", "Il n'a pas de thiolase"], "Et c'est son excès d'acétyl-CoA qui déclenche la cétogenèse."),
      qcm("a2", "Quels tissus utilisent les corps cétoniques lors d'un jeûne court ?", ["Surtout les muscles squelettiques et le cœur", "Le foie", "Les hématies", "Le cerveau uniquement"], "Le cerveau s'y met en jeûne prolongé.")
    ],
    revision: [
      qcm("r1", "Combien d'acétyl-CoA donne un acétoacétyl-CoA lors de la cétolyse ?", ["2", "1", "3", "8"], "Par la thiolase, puis cycle de Krebs.")
    ]
  },
  {
    id: "bc-meta-lipides-25", fiche: F3, ficheTitre: F3T, titre: "Régulation et acétyl-CoA",
    classe: [
      E("Cétogenèse et cétolyse ne sont pas antagonistes : elles se font <b>en même temps</b>, dans des organes différents. Ce qu'on régule, c'est la cétogenèse.", [T("La régulation"), LG("cétogenèse (foie) et cétolyse (tissus) : SIMULTANÉES, organes différents", "noir")]),
      E("Dans le <b>foie</b> : l'oxaloacétate est fabriqué à partir du pyruvate, par la pyruvate carboxylase. Au jeûne, ce pyruvate vient du lactate et de l'alanine. Moins de lactate et d'alanine, donc moins d'oxaloacétate, donc plus de cétogenèse.", [LG("FOIE : lactate, alanine ↓ → oxaloacétate ↓ → cétogenèse ↑", "bleu", { puce: "•" })]),
      E("Dans le <b>tissu adipeux</b> : le glucagon, en hypoglycémie, l'adrénaline et le cortisol, en cas de stress ou de maladie, augmentent la lipolyse, donc la cétogenèse.", [LG("TISSU ADIPEUX : glucagon, adrénaline, cortisol → lipolyse ↑ → cétogenèse ↑", "bleu", { puce: "•" })]),
      E("L'<b>insuline</b>, elle, inhibe la lipolyse : c'est le facteur <b>anticétogène</b>. Et la cétolyse ne dépend que de la quantité de corps cétoniques dans le sang : les hormones n'agissent sur elle qu'indirectement.", [POST("Glucagon, adrénaline, cortisol ↑ · insuline = facteur ANTICÉTOGÈNE", "cle")], "reflechit"),
      E("Rappel utile : d'où vient l'<b>acétyl-CoA</b> ? C'est la molécule carrefour du métabolisme. Cinq sources.", [EFF(), T("D'où vient l'acétyl-CoA ?"), LG("β-oxydation des AG (mitochondrie)", "vert", { puce: "•" }), LG("glycolyse → pyruvate → acétyl-CoA (pyruvate déshydrogénase)", "vert", { puce: "•" }), LG("catabolisme de certains acides aminés", "vert", { puce: "•" }), LG("alcool : éthanol → acétaldéhyde → acétate (foie) → acétyl-CoA", "vert", { puce: "•" }), LG("cétolyse : corps cétoniques → acétyl-CoA", "vert", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quelle hormone est le facteur anticétogène ?", ["L'insuline", "Le glucagon", "L'adrénaline", "Le cortisol"], "Elle inhibe la lipolyse."),
      vf("a2", "La cétogenèse et la cétolyse ne peuvent pas avoir lieu en même temps.", false, "Faux : elles sont simultanées, dans des organes différents.")
    ],
    revision: [
      qcm("r1", "Laquelle de ces molécules n'est PAS une source d'acétyl-CoA ?", ["Le glycérol directement", "La β-oxydation des AG", "L'éthanol", "Les corps cétoniques"], "Sources : β-oxydation, pyruvate, certains acides aminés, alcool, cétolyse.")
    ]
  },
  {
    id: "bc-meta-lipides-26", fiche: F3, ficheTitre: F3T, titre: "Le régime cétogène",
    classe: [
      E("Le <b>régime cétogène</b> : très pauvre en glucides, il oblige l'organisme à produire des corps cétoniques. On l'utilise pour la perte de poids, et dans certaines maladies neurologiques, comme l'<b>épilepsie</b>.", [T("Le régime cétogène"), LG("très pauvre en glucides → corps cétoniques · perte de poids, épilepsie", "bleu")]),
      E("Mais il a des risques. Un déséquilibre électrolytique, avec une perte d'eau rapide : crampes, fatigue, vertiges. Des carences en vitamines et minéraux.", [LG("déséquilibre électrolytique (perte d'eau) : crampes, fatigue, vertiges", "rouge", { puce: "•" }), LG("carences en vitamines et minéraux", "rouge", { puce: "•" })]),
      E("Des troubles digestifs : constipation, par manque de fibres, nausées, vomissements, douleurs. Et chez certains, le LDL-cholestérol monte, donc risque cardiovasculaire.", [LG("troubles digestifs : constipation (manque de fibres), nausées…", "rouge", { puce: "•" }), LG("LDL-cholestérol ↑ chez certains → risque cardiovasculaire", "rouge", { puce: "•" })]),
      E("Prudence en cas de maladie du foie, du pancréas, de la thyroïde, ou d'antécédents de troubles du comportement alimentaire. Et jamais sans l'avis d'un diététicien ou d'un médecin. C'est ton futur métier !", [POST("Régime cétogène : jamais sans l'avis d'un diététicien ou d'un médecin", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Dans quelle maladie neurologique utilise-t-on le régime cétogène ?", ["L'épilepsie", "La maladie de Parkinson", "La migraine", "La sclérose en plaques"], "Aussi pour la perte de poids."),
      qcm("a2", "Pourquoi le régime cétogène peut-il constiper ?", ["Par manque de fibres", "Par excès de glucides", "Par excès d'eau", "Par manque de lipides"], "Il est très pauvre en aliments glucidiques riches en fibres.")
    ],
    revision: [
      qcm("r1", "Lequel de ces risques est lié au régime cétogène ?", ["Une hausse du LDL-cholestérol chez certains", "Une hyperglycémie permanente", "Un excès de fibres", "Une carence en lipides"], "D'où un risque cardiovasculaire.")
    ]
  },
  {
    id: "bc-meta-lipides-27", fiche: F3, ficheTitre: F3T, titre: "L'acidocétose",
    classe: [
      E("Les corps cétoniques, sauf l'acétone, sont des acides faibles. S'ils augmentent fortement, le sang s'<b>acidifie</b> : c'est l'<b>acidocétose</b>.", [T("L'acidocétose"), EQ("corps cétoniques (acides) ↑↑ → sang acide = ACIDOCÉTOSE")]),
      E("L'<b>acidocétose diabétique</b>, l'ACD : une complication grave, surtout du diabète de <b>type 1</b>, plus rarement du type 2. Sans insuline, les cellules n'utilisent plus le glucose, et rien ne freine la lipolyse. Résultat : corps cétoniques en excès, et hyperglycémie.", [LG("ACD : surtout DIABÈTE DE TYPE 1 · pas d'insuline → lipolyse non freinée → corps cétoniques ↑↑ + hyperglycémie", "rouge")], "reflechit"),
      E("Les signes : <b>polydipsie</b>, une soif intense ; <b>polyurie</b> ; une respiration rapide et profonde ; une <b>haleine fruitée</b>, l'acétone ; une confusion.", [LG("soif intense · polyurie · respiration rapide et profonde · haleine fruitée · confusion", "noir", { puce: "•" })]),
      E("Le risque : déshydratation sévère, déséquilibres électrolytiques, coma, décès. C'est une <b>urgence</b>. Dépistage : bandelette urinaire, ou lecteur de cétonémie dans le sang.", [LG("risque : déshydratation, coma, décès → URGENCE · dépistage : bandelette urinaire, cétonémie", "rouge", { puce: "•" })]),
      E("À ne pas confondre avec la <b>cétose de jeûne</b> : là, l'insuline, même basse, freine encore la lipolyse. La glycémie reste basse, et le pH reste normal.", [POST("Cétose de jeûne ≠ acidocétose : glycémie basse, pH normal (l'insuline freine encore)", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Quel est un signe typique d'acidocétose diabétique ?", ["Une haleine fruitée", "Une hypoglycémie", "Une bradycardie", "Une absence de soif"], "Due à l'acétone ; aussi soif, polyurie, respiration rapide."),
      qcm("a2", "Qu'est-ce qui distingue la cétose de jeûne de l'acidocétose ?", ["Glycémie basse et pH normal", "Glycémie très haute", "Absence de corps cétoniques", "pH très acide"], "L'insuline, même basse, freine la lipolyse.")
    ],
    revision: [
      qcm("r1", "L'acidocétose diabétique est surtout une complication du…", ["Diabète de type 1", "Diabète gestationnel", "Jeûne de 24 h", "Régime riche en glucides"], "Plus rarement du type 2.")
    ]
  },

  /* ================= FICHE 4 ================= */
  {
    id: "bc-meta-lipides-28", fiche: F4, ficheTitre: F4T, titre: "La lipogenèse : où, quand ?",
    classe: [
      E("La <b>lipogenèse</b> en détail : la synthèse des AG par l'organisme, dite <b>de novo</b>. Voie présente partout, mais surtout dans le <b>foie</b> et le <b>tissu adipeux</b>, et dans la glande mammaire pendant l'allaitement. Elle a lieu dans le <b>cytosol</b>.", [T("La biosynthèse des AG"), LG("de novo · surtout FOIE, TISSU ADIPEUX (+ glande mammaire) · CYTOSOL", "bleu")]),
      E("Ce qu'il faut : un précurseur, l'<b>acétyl-CoA</b>, surtout issu des glucides, glucose, et fructose en excès, par glycolyse puis décarboxylation du pyruvate ; aussi de certains acides aminés et de l'alcool. Plus de l'<b>ATP</b> et du <b>NADPH,H⁺</b>.", [GRI(["Besoin", "D'où ?"], [["Acétyl-CoA", "surtout glucides (glucose, fructose en excès) · certains acides aminés · alcool"], ["ATP", "énergie"], ["NADPH,H⁺", "réductions (comme pour le cholestérol)"]], true)]),
      E("Quand ? Quand les apports dépassent les besoins : période <b>post-prandiale</b>, phase anabolique. Les AG formés servent de réserve, en TG, de constituants des membranes, de précurseurs de molécules de signalisation, et à la lactation et au développement de l'embryon.", [LG("après le repas (anabolisme) → réserve, membranes, signalisation, lactation", "vert", { puce: "•" })]),
      E("Un problème : l'acétyl-CoA est formé dans la <b>mitochondrie</b>, et ses membranes lui sont imperméables. Il doit passer par une <b>navette</b>.", [POST("Acétyl-CoA : formé dans la mitochondrie, ne traverse pas → navette", "piege")], "reflechit"),
      E("Un dérèglement de cette voie favorise le diabète de type 2, l'obésité et les maladies cardiovasculaires. Et l'organisme dépend aussi des AG apportés par l'alimentation.", [LG("dérèglement → diabète de type 2, obésité, maladies cardiovasculaires", "rouge", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Quel coenzyme réduit est indispensable à la synthèse des AG ?", ["Le NADPH,H⁺", "Le FADH₂", "Le NADH,H⁺ seul", "Le coenzyme Q"], "Comme pour la synthèse du cholestérol."),
      qcm("a2", "D'où vient surtout l'acétyl-CoA utilisé pour la lipogenèse ?", ["Des glucides", "Du cholestérol", "Des corps cétoniques", "Des vitamines"], "Glycolyse puis décarboxylation du pyruvate.")
    ],
    revision: [
      vf("r1", "La lipogenèse s'active surtout pendant le jeûne.", false, "Faux : après le repas, quand les apports dépassent les besoins.")
    ]
  },
  {
    id: "bc-meta-lipides-29", fiche: F4, ficheTitre: F4T, titre: "La navette citrate-malate-pyruvate",
    classe: [
      E("La <b>navette citrate-malate-pyruvate</b> fait sortir l'acétyl-CoA. L'idée : il voyage <b>déguisé en citrate</b>.", [T("La navette citrate-malate-pyruvate"), LG("l'acétyl-CoA sort DÉGUISÉ EN CITRATE", "bleu", { taille: "grand" })]),
      E("Dans la matrice : le pyruvate donne de l'oxaloacétate, par la pyruvate carboxylase, avec la biotine B8 et 1 ATP. Puis la citrate synthase, la 1re étape du cycle de Krebs : oxaloacétate plus acétyl-CoA donnent du <b>citrate</b>. Quand il est abondant, il sort par une translocase.", [EQ("MATRICE : oxaloacétate + acétyl-CoA → CITRATE (citrate synthase) → sort (translocase)")]),
      E("Dans le cytosol : l'<b>ATP citrate lyase</b> recoupe le citrate, avec un CoA et un ATP : on récupère l'<b>acétyl-CoA</b> et l'oxaloacétate.", [EQ("CYTOSOL : citrate + CoA + ATP → ACÉTYL-CoA + oxaloacétate (ATP citrate lyase)")]),
      E("Le retour : l'oxaloacétate devient du malate, puis l'<b>enzyme malique</b> le transforme en pyruvate et CO₂, en produisant du <b>NADPH</b>. Le pyruvate rentre dans la mitochondrie : la navette recommence.", [EQ("oxaloacétate → malate → (enzyme malique) → pyruvate + CO₂ + NADPH,H⁺")]),
      E("Double intérêt : elle sort les briques, l'acétyl-CoA, et fournit du NADPH. Mais seulement environ la <b>moitié</b> du NADPH : le reste vient de la <b>voie des pentoses phosphates</b>. Raison de plus pour laquelle un excès de glucose favorise les lipides. Le détail n'est pas exigé : retiens le schéma et son double intérêt.", [POST("Navette : acétyl-CoA + NADPH dans le cytosol · NADPH : enzyme malique (≈ ½) + voie des pentoses phosphates", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Sous quelle forme l'acétyl-CoA traverse-t-il la membrane mitochondriale ?", ["Citrate", "Malate", "Acétyl-carnitine", "Malonyl-CoA"], "Acétyl-CoA + oxaloacétate = citrate."),
      qcm("a2", "D'où vient le reste du NADPH (environ la moitié) nécessaire à la lipogenèse ?", ["De la voie des pentoses phosphates", "De la β-oxydation", "Du cycle de Krebs", "De la cétogenèse"], "L'enzyme malique fournit l'autre moitié.")
    ],
    revision: [
      qcm("r1", "Quelle enzyme libère l'acétyl-CoA du citrate dans le cytosol ?", ["L'ATP citrate lyase", "La citrate synthase", "L'enzyme malique", "La pyruvate carboxylase"], "Elle consomme un ATP."),
      qcm("r2", "Quelle enzyme de la navette produit du NADPH ?", ["L'enzyme malique", "La citrate synthase", "La translocase", "L'ATP citrate lyase"], "Malate → pyruvate + CO₂ + NADPH.")
    ]
  },
  {
    id: "bc-meta-lipides-30", fiche: F4, ficheTitre: F4T, titre: "Le malonyl-CoA et l'ACC",
    classe: [
      E("Première étape de la synthèse : former le <b>malonyl-CoA</b>.", [T("La formation du malonyl-CoA"), EQ("Acétyl-CoA + CO₂ (bicarbonate) + ATP → Malonyl-CoA + ADP + Pi")]),
      E("L'enzyme : l'<b>acétyl-CoA carboxylase</b>, l'<b>ACC</b>. Son cofacteur : la <b>biotine</b>, la vitamine B8.", [LG("enzyme : ACÉTYL-CoA CARBOXYLASE (ACC) · cofacteur : biotine (B8)", "rouge", { taille: "grand" })]),
      E("Cette réaction est <b>irréversible</b> et engage la synthèse : c'est l'<b>étape clé</b>, très régulée.", [POST("ACC (biotine) : acétyl-CoA → malonyl-CoA, irréversible, étape clé", "cle")]),
      E("Remarque : le CO₂ est un réactif, et l'énergie vient de l'ATP. Mais ce CO₂ ne restera pas : il sera relâché dès l'étape suivante.", [LG("le CO₂ fixé ici sera relâché à la condensation suivante", "noir", { taille: "petit" })], "reflechit")
    ],
    questions: [
      qcm("a1", "Quel est le cofacteur de l'acétyl-CoA carboxylase ?", ["La biotine (vitamine B8)", "La vitamine B12", "La vitamine K", "La vitamine C"], "Comme la pyruvate carboxylase."),
      qcm("a2", "Quelle est l'étape clé de la synthèse des AG ?", ["Acétyl-CoA → malonyl-CoA (ACC)", "Citrate → acétyl-CoA", "Palmitate → stéarate", "Malate → pyruvate"], "Irréversible et très régulée.")
    ],
    revision: [
      vf("r1", "La formation du malonyl-CoA est réversible.", false, "Faux : elle est irréversible et engage la synthèse.")
    ]
  },
  {
    id: "bc-meta-lipides-31", fiche: F4, ficheTitre: F4T, titre: "L'hélice de Wakil",
    classe: [
      E("Ensuite, l'<b>acide gras synthase</b> : un complexe multienzymatique du cytosol, une enzyme « couteau suisse ». Elle a un domaine <b>ACP</b>, acyl carrier protein : la chaîne en construction reste fixée sur l'enzyme, par des liaisons thioester, pas sur le CoA.", [T("L'acide gras synthase"), LG("complexe multienzymatique du cytosol · domaine ACP : la chaîne reste fixée sur l'enzyme", "bleu")]),
      E("Amorçage : on fixe un acétyl et un malonyl sur l'enzyme. Puis l'<b>hélice de Wakil</b> : 4 réactions répétées.", [GRI(["Réaction", "Ce qui se passe"], [["1 · Condensation", "+ 2 C du malonyl, − CO₂"], ["2 · Réduction", "NADPH → NADP⁺"], ["3 · Déshydratation", "− H₂O"], ["4 · Réduction", "NADPH → NADP⁺"]], true)]),
      E("La condensation ajoute 2 carbones du malonyl, qui perd son CO₂. Deux réductions, chacune consomme un NADPH. Une déshydratation retire de l'eau. Le détail des réactions n'est pas à connaître.", [POST("Wakil : condensation, réduction, déshydratation, réduction", "cle")]),
      E("À chaque tour, + 2 carbones : C4, C6, C8… jusqu'à <b>C16</b>, en <b>7 tours</b> au maximum. Puis la palmityl thioestérase libère l'<b>acide palmitique</b>. L'enzyme s'arrête à 16 carbones.", [EQ("C4 → C6 → … → C16 (7 tours) → palmityl thioestérase → acide palmitique")]),
      E("Le bilan : 8 acétyl-CoA, dont 7 deviennent malonyl-CoA, plus 7 ATP, plus 14 NADPH. Pourquoi 14 ? 2 réductions fois 7 tours. Pourquoi 7 ATP ? 7 malonyl-CoA formés.", [EFF(), T("Le bilan"), EQ("8 acétyl-CoA + 7 ATP + 14 NADPH,H⁺ → acide palmitique + 8 CoA-SH + 7 ADP + 7 Pi + 14 NADP⁺ + 6 H₂O"), LG("14 NADPH = 2 réductions × 7 tours · 7 ATP = 7 malonyl-CoA", "noir", { taille: "petit" })]),
      E("À retenir : c'est le miroir de la β-oxydation, qui coupe par 2 carbones, mais dans un autre lieu, le cytosol, avec d'autres enzymes et d'autres cofacteurs : NADPH au lieu de NAD⁺ et FAD.", [POST("7 tours → palmitate : 8 acétyl-CoA + 7 ATP + 14 NADPH", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien de NADPH,H⁺ faut-il pour fabriquer un acide palmitique ?", ["14", "7", "8", "16"], "2 réductions × 7 tours."),
      qcm("a2", "Sur quoi la chaîne en construction reste-t-elle fixée ?", ["Sur le domaine ACP de l'acide gras synthase", "Sur le coenzyme A", "Sur la carnitine", "Sur l'albumine"], "ACP = acyl carrier protein.")
    ],
    revision: [
      ordre("r1", "Remets dans l'ordre les 4 réactions de l'hélice de Wakil.", ["Condensation", "Réduction", "Déshydratation", "Deuxième réduction"], "Chaque tour ajoute 2 carbones."),
      qcm("r2", "À combien de carbones l'acide gras synthase s'arrête-t-elle ?", ["16", "18", "20", "12"], "Les chaînes plus longues sont faites ensuite par les élongases.")
    ]
  },
  {
    id: "bc-meta-lipides-32", fiche: F4, ficheTitre: F4T, titre: "Élongases et désaturases",
    classe: [
      E("Après le palmitate, on peut l'allonger ou y ajouter des doubles liaisons. Les <b>élongases</b> allongent la chaîne au-delà de C16, 2 carbones par 2, avec le malonyl-CoA et le NADPH. Surtout dans le réticulum lisse, un peu dans la mitochondrie. Exemple : palmitique vers stéarique, 18:0.", [T("Élongation et désaturation"), LG("ÉLONGASES : + 2 C (malonyl-CoA, NADPH) · surtout RE lisse · ex. palmitique → stéarique", "bleu", { puce: "•" })]),
      E("Les <b>désaturases</b>, dans le RE, créent les doubles liaisons. On les nomme par la position Δ, en comptant depuis le COOH : Δ9, Δ6, Δ5 désaturases.", [LG("DÉSATURASES (RE) : créent les doubles liaisons · Δ9, Δ6, Δ5", "vert", { puce: "•" }), EQ("AG saturé + NADH,H⁺ + O₂ → AG insaturé + NAD⁺ + 2 H₂O")]),
      E("Voici ce que le corps sait faire à partir du palmitique.", [GRI(["Départ", "Enzyme", "Arrivée"], [["Palmitique 16:0", "élongase", "Stéarique 18:0"], ["Palmitique 16:0", "Δ9 désaturase", "Palmitoléique 16:1 (n-7)"], ["Stéarique 18:0", "Δ9 désaturase", "Oléique 18:1 (n-9)"], ["Oléique", "élongases", "Nervonique 24:1 (n-9)"]], true)]),
      E("La limite humaine : nos désaturases ne savent <b>pas</b> placer une double liaison <b>au-delà de Δ9</b>, en positions 12 et 15. On ne peut donc pas fabriquer les familles oméga 6 et oméga 3.", [POST("Homme : pas de double liaison au-delà de Δ9 → linoléique et α-linolénique INDISPENSABLES", "piege")], "pointe"),
      E("Conclusion : l'acide <b>linoléique</b>, 18:2 n-6, et l'acide <b>α-linolénique</b>, 18:3 n-3, doivent être apportés par l'alimentation. Ce sont les AG indispensables. Le corps sait faire les saturés et les mono-insaturés oméga 9, comme l'oléique de l'huile d'olive.", [LG("le corps sait faire : saturés + mono-insaturés ω9 (oléique)", "vert", { puce: "✓" }), LG("le corps ne sait pas faire : ω6, ω3 → apport alimentaire", "rouge", { puce: "✗" })], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi l'acide linoléique est-il indispensable ?", ["Nos désaturases ne placent pas de double liaison au-delà de Δ9", "Il est trop long pour l'AG synthase", "Il n'existe que dans la viande", "Il est détruit par le foie"], "Il a une double liaison en Δ12."),
      qcm("a2", "Quel acide gras le corps fabrique-t-il à partir du stéarique, grâce à la Δ9 désaturase ?", ["L'acide oléique", "L'acide linoléique", "L'acide α-linolénique", "Le DHA"], "Oléique 18:1 n-9.")
    ],
    revision: [
      qcm("r1", "Où agissent surtout les élongases ?", ["Dans le réticulum endoplasmique lisse", "Dans le noyau", "Dans le lysosome", "Dans la lumière intestinale"], "Un peu aussi dans la mitochondrie.")
    ]
  },
  {
    id: "bc-meta-lipides-33", fiche: F4, ficheTitre: F4T, titre: "Des oméga aux eicosanoïdes",
    classe: [
      E("Rappel : les AG insaturés ont une ou plusieurs doubles liaisons. Une double liaison est rigide ; en cis, elle coude la chaîne, ce qui change la fluidité et le point de fusion. Sources : huiles d'olive, de tournesol, de colza, fruits à coque, poissons gras.", [T("AG indispensables et eicosanoïdes"), LG("double liaison cis → chaîne coudée → fluidité ↑, point de fusion ↓", "noir")]),
      E("À partir des deux AG indispensables apportés par l'alimentation, le corps fabrique, <b>lentement</b>, avec désaturases et élongases : l'acide <b>arachidonique</b> côté oméga 6 ; l'<b>EPA</b> puis le <b>DHA</b> côté oméga 3.", [EQ("linoléique 18:2 n-6 → acide arachidonique 20:4 n-6"), EQ("α-linolénique 18:3 n-3 → EPA 20:5 n-3 → DHA 22:6 n-3")]),
      E("Application : la conversion de l'α-linolénique en EPA et DHA est <b>faible</b>. D'où l'intérêt des poissons gras, en plus des huiles de colza et de noix.", [POST("Conversion α-linolénique → EPA-DHA faible → intérêt des poissons gras", "astuce")], "reflechit"),
      E("Ces AG polyinsaturés entrent dans les phospholipides des membranes, comme le DHA des neurones. Et les AG à 20 carbones donnent les <b>eicosanoïdes</b>.", [EFF(), T("Les eicosanoïdes (20 C)"), GRI(["Eicosanoïde", "Rôle"], [["Prostaglandines", "contraction des muscles lisses (ex. utérus) · vasodilatation"], ["Prostacycline", "antiagrégant plaquettaire"], ["Leucotriènes", "migration des leucocytes, inflammation"]], true)])
    ],
    questions: [
      qcm("a1", "Quel AG le corps fabrique-t-il à partir de l'acide linoléique ?", ["L'acide arachidonique", "L'EPA", "Le DHA", "L'acide oléique"], "Famille oméga 6."),
      qcm("a2", "Pourquoi recommande-t-on les poissons gras pour l'EPA et le DHA ?", ["La conversion de l'α-linolénique en EPA-DHA est faible", "Le corps ne fabrique aucun oméga 3", "Ils n'ont pas de cholestérol", "Ils sont riches en AG trans"], "Le corps en fait, mais lentement et peu.")
    ],
    revision: [
      paires("r1", "Relie chaque eicosanoïde à son rôle.", [["Prostaglandines", "Contraction des muscles lisses"], ["Prostacycline", "Antiagrégant plaquettaire"], ["Leucotriènes", "Migration des leucocytes, inflammation"]], "Dérivés des AG à 20 carbones.")
    ]
  },
  {
    id: "bc-meta-lipides-34", fiche: F4, ficheTitre: F4T, titre: "Réguler la lipogenèse",
    classe: [
      E("Deux enzymes à réguler. D'abord l'enzyme clé : l'<b>acétyl-CoA carboxylase</b>.", [T("La régulation"), GRI(["", "Activée par", "Freinée par"], [
        ["ACC (court terme)", "citrate (allostérique) · insuline → phosphatase → forme déphosphorylée active", "palmitoyl-CoA (rétro-inhibition) · glucagon, adrénaline → phosphorylation → inactive"],
        ["ACC (long terme)", "insuline, glucose, oxystérols (transcription du gène)", ""],
        ["AG synthase", "insuline, alimentation riche en glucides, oxystérols · sucres phosphorylés", "jeûne, alimentation pauvre en glucides"]
      ])]),
      E("À court terme, l'ACC est activée par le <b>citrate</b>, de façon allostérique. Logique : du citrate dans le cytosol, c'est le signe d'un excès de substrats. Et par l'<b>insuline</b>, via une phosphatase : la forme déphosphorylée est active. À long terme, l'insuline, le glucose et les oxystérols augmentent la fabrication de l'enzyme.", [MONTRE(1), MONTRE(2)]),
      E("Elle est freinée par son produit final, le <b>palmitoyl-CoA</b> : rétro-inhibition. Et par le <b>glucagon</b> et l'<b>adrénaline</b>, au jeûne et à l'effort : phosphorylation, forme inactive.", [POST("ACC : + citrate, insuline · − palmitoyl-CoA, glucagon, adrénaline", "cle")]),
      E("L'<b>AG synthase</b>, elle, est surtout réglée à long terme : l'insuline, une alimentation riche en glucides et les oxystérols l'augmentent. À court terme, des sucres phosphorylés de la glycolyse, comme le fructose-1,6-bisphosphate, la stimulent : une alimentation trop sucrée favorise la lipogenèse.", [MONTRE(3)], "reflechit"),
      E("L'insuline, sécrétée par les cellules β des îlots de Langerhans, a un rôle <b>lipogénique et antilipolytique</b>. Et le malonyl-CoA inhibe la CAT I : quand on fabrique des AG, on ne les brûle pas. Dans le diabète de type 2, les cellules résistent à l'insuline : le glucose entre mal, d'où l'hyperglycémie.", [EFF(), T("L'insuline"), LG("insuline : LIPOGÉNIQUE et ANTILIPOLYTIQUE", "vert", { taille: "grand" }), LG("malonyl-CoA → CAT I bloquée → pas de β-oxydation pendant la synthèse", "noir", { puce: "•" }), LG("diabète de type 2 : résistance à l'insuline → hyperglycémie", "rouge", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quel activateur allostérique stimule l'acétyl-CoA carboxylase ?", ["Le citrate", "Le palmitoyl-CoA", "Le glucagon", "L'AMPc"], "Signe d'un excès de substrats dans le cytosol."),
      qcm("a2", "Quel produit final freine l'ACC par rétro-inhibition ?", ["Le palmitoyl-CoA", "Le citrate", "L'acétyl-CoA", "Le glucose"], "Le produit freine sa propre voie.")
    ],
    revision: [
      vf("r1", "Une alimentation riche en glucides augmente la quantité d'acide gras synthase.", true, "Vrai : régulation à long terme, avec l'insuline et les oxystérols."),
      qcm("r2", "Sous quelle forme l'ACC est-elle active ?", ["Déphosphorylée", "Phosphorylée", "Liée au glucagon", "Liée à la carnitine"], "L'insuline active une phosphatase.")
    ]
  },
  {
    id: "bc-meta-lipides-35", fiche: F4, ficheTitre: F4T, titre: "Le transport des acides gras",
    classe: [
      E("Comment voyagent les AG ? Selon leur forme.", [T("Le transport des AG"), GRI(["Forme", "Qui ?", "Transport"], [["AG libres (non estérifiés)", "AG courts et moyens absorbés · AG longs de la lipolyse", "albumine"], ["AG estérifiés (TG, PL, esters de cholestérol)", "surtout AG longs", "lipoprotéines"]], true)]),
      E("Les AG <b>libres</b> sont liés à l'<b>albumine</b>. C'est le cas des AG courts et moyens absorbés, par la veine porte, et des AG longs libérés par la lipolyse.", [MONTRE(1)]),
      E("Les AG <b>estérifiés</b>, surtout à longue chaîne, sont lipophiles : ils voyagent dans les lipoprotéines. Chylomicrons pour les lipides alimentaires, VLDL pour ceux du foie. Les LDL et HDL transportent surtout le cholestérol.", [MONTRE(2)]),
      E("Dans l'intestin : les TG alimentaires ne sont pas absorbés tels quels. Émulsion par les sels biliaires, puis lipase pancréatique : AG plus <b>2-monoglycéride</b>. Les AG courts entrent directement, les autres utilisent des transporteurs.", [EFF(), T("Dans l'entérocyte"), EQ("TG → (lipase pancréatique) → AG + 2-monoglycéride (MAG)")]),
      E("L'entérocyte ne stocke pas. Il reconstruit les TG à partir du <b>monoglycéride</b>, et non du glycérol-3-P comme le foie et le tissu adipeux. MAG plus acyl-CoA donne un diglycéride, par la MGAT ; plus un acyl-CoA donne un triglycéride, par la DGAT.", [EQ("MAG + acyl-CoA → DAG (MGAT) · DAG + acyl-CoA → TG (DGAT)"), POST("Entérocyte : TG refaits à partir du MONOGLYCÉRIDE (pas du glycérol-3-P)", "piege")], "pointe"),
      E("Puis export dans les chylomicrons : cœur de TG, monocouche de phospholipides, cholestérol libre, apo B48. Les moins denses et les plus gros. Direction les chylifères, la lymphe, puis le sang.", [LG("→ chylomicrons (apo B48) → chylifères → lymphe → sang", "bleu", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "À partir de quoi l'entérocyte reconstruit-il les triglycérides ?", ["Du 2-monoglycéride", "Du glycérol-3-phosphate", "Du cholestérol", "Du glycogène"], "MGAT puis DGAT."),
      qcm("a2", "Comment voyagent les AG libérés par la lipolyse ?", ["Liés à l'albumine", "Dans les chylomicrons", "Dans les HDL", "Dans la bile"], "AG libres = albumine.")
    ],
    revision: [
      qcm("r1", "Quelle apoprotéine porte les chylomicrons formés par l'entérocyte ?", ["L'apo B48", "L'apo B100", "L'apo A", "L'apo E"], "Fabriquée par l'entérocyte.")
    ]
  },

  /* ================= FICHE 5 ================= */
  {
    id: "bc-meta-lipides-36", fiche: F5, ficheTitre: F5T, titre: "Le cholestérol : deux origines",
    classe: [
      E("Rappel : le cholestérol est un stéroïde, avec le noyau stérane à 4 cycles. C'est un alcool apparenté aux lipides, insoluble dans l'eau : il circule dans les lipoprotéines, libre ou estérifié, surtout dans les LDL et HDL.", [T("Le cholestérol"), LG("stéroïde (noyau stérane) · alcool · circule dans les lipoprotéines (LDL, HDL)", "noir")]),
      E("Ses rôles : constituant des membranes, pour leur fluidité et leur stabilité ; composant essentiel de la myéline. Précurseur des hormones stéroïdes, de la vitamine D et des acides biliaires. En excès, surtout les LDL : athérosclérose, infarctus, AVC.", [LG("membranes, myéline · précurseur : hormones stéroïdes, vit. D, acides biliaires", "vert", { puce: "•" }), LG("excès (LDL) → athérosclérose → infarctus, AVC", "rouge", { puce: "•" })]),
      E("Deux origines. <b>Endogène</b>, environ <b>80 %</b> : fabriqué par l'organisme, environ <b>800 mg par jour</b>. Presque toutes les cellules en sont capables, mais le <b>foie</b> reste le principal producteur. <b>Exogène</b>, alimentaire : en moyenne environ <b>200 mg par jour</b>, venant des produits animaux.", [EFF(), T("Deux origines"), GRI(["Origine", "Part", "Quantité"], [["Endogène (surtout le foie)", "≈ 80 %", "≈ 800 mg/j"], ["Exogène (produits animaux)", "≈ 20 %", "≈ 200 mg/j"]], true), POST("Cholestérol : ≈ 80 % endogène (≈ 800 mg/j, surtout le foie) · ≈ 200 mg/j alimentaire", "cle")]),
      E("Les tissus qui le fabriquent : le <b>foie</b>, le principal, qui règle aussi le cholestérol du sang ; l'intestin ; la peau, pour la vitamine D ; les surrénales, pour le cortisol et l'aldostérone ; et les gonades, pour la testostérone et les œstrogènes.", [LG("foie (principal) · intestin · peau (vit. D) · surrénales · gonades", "bleu", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quelle part du cholestérol de l'organisme est d'origine endogène ?", ["Environ 80 %", "Environ 20 %", "Environ 50 %", "100 %"], "≈ 800 mg/j fabriqués, contre ≈ 200 mg/j apportés."),
      qcm("a2", "Quel est le principal organe producteur de cholestérol ?", ["Le foie", "Le cerveau", "Le muscle", "Le rein"], "Il règle aussi le cholestérol sanguin.")
    ],
    revision: [
      qcm("r1", "Combien de cholestérol apporte en moyenne l'alimentation par jour ?", ["Environ 200 mg", "Environ 800 mg", "Environ 2 g", "Environ 20 mg"], "Uniquement par les produits animaux.")
    ]
  },
  {
    id: "bc-meta-lipides-37", fiche: F5, ficheTitre: F5T, titre: "Fabriquer le cholestérol",
    classe: [
      E("La biosynthèse part de l'<b>acétyl-CoA</b>, surtout issu des glucides, et des AG. Formé dans la mitochondrie, il sort par la navette citrate-malate-pyruvate, qui fournit aussi du NADPH. Le début se fait dans le <b>cytosol</b>, la suite dans la membrane du <b>réticulum lisse</b>.", [T("La biosynthèse du cholestérol"), LG("acétyl-CoA + NADPH,H⁺ · CYTOSOL puis membrane du RE LISSE", "bleu")]),
      E("Étape 1 : 2 acétyl-CoA donnent l'acétoacétyl-CoA, par la thiolase ; plus 1 acétyl-CoA donnent le <b>HMG-CoA</b>, par l'HMG-CoA synthase. C'est le même début que la cétogenèse, mais dans le cytosol.", [EQ("1 · 2 acétyl-CoA → acétoacétyl-CoA → (+ 1 acétyl-CoA) → HMG-CoA"), LG("même début que la cétogenèse, mais dans le CYTOSOL", "noir", { taille: "petit" })]),
      E("Étape 2, l'étape clé : l'<b>HMG-CoA réductase</b> transforme le HMG-CoA en <b>mévalonate</b>, 6 carbones, avec 2 NADPH. Elle est irréversible, elle règle la vitesse de toute la voie, et c'est elle que bloquent les <b>statines</b>.", [EQ("2 · HMG-CoA → MÉVALONATE (6 C) · HMG-CoA RÉDUCTASE (2 NADPH)"), SOUL(true)]),
      E("Étape 3 : le mévalonate devient l'<b>IPP</b>, isopentényl pyrophosphate, 5 carbones, avec 3 ATP et une décarboxylation. Étape 4 : 6 IPP s'assemblent : géranyl 10 C, farnésyl 15 C, et 2 farnésyl font le <b>squalène</b>, 30 C.", [EQ("3 · mévalonate → IPP (5 C) · 4 · 6 IPP → géranyl (10 C) → farnésyl (15 C) → SQUALÈNE (30 C)")]),
      E("Étape 5 : le squalène se referme en cycles, c'est le <b>lanostérol</b>, 30 C. Puis il perd 3 carbones et gagne la double liaison du cycle B : <b>cholestérol</b>, 27 C. Le détail après le mévalonate n'est pas exigé : retiens l'enchaînement et le nombre de carbones.", [EQ("5 · squalène → LANOSTÉROL (30 C) → − 3 CH₃ → CHOLESTÉROL (27 C)"), POST("Acétyl-CoA → HMG-CoA → mévalonate → IPP → squalène → lanostérol → cholestérol", "cle")], "content")
    ],
    questions: [
      ordre("a1", "Remets dans l'ordre la synthèse du cholestérol.", ["HMG-CoA", "Mévalonate", "IPP", "Squalène", "Lanostérol", "Cholestérol"], "On part de l'acétyl-CoA."),
      qcm("a2", "Combien de carbones a le squalène ?", ["30", "27", "15", "6"], "2 farnésyl (15 C) ; le cholestérol, lui, en a 27.")
    ],
    revision: [
      qcm("r1", "Où commence la synthèse du cholestérol ?", ["Dans le cytosol", "Dans la matrice mitochondriale", "Dans le noyau", "Dans le lysosome"], "Puis elle continue dans la membrane du RE lisse."),
      qcm("r2", "Combien de carbones a l'IPP ?", ["5", "6", "10", "30"], "Isopentényl pyrophosphate, unité de 5 C.")
    ]
  },
  {
    id: "bc-meta-lipides-38", fiche: F5, ficheTitre: F5T, titre: "La réductase et les statines",
    classe: [
      E("Zoom sur l'<b>HMG-CoA réductase</b>. Elle est dans la membrane du réticulum lisse. Elle est irréversible. C'est le <b>point de régulation</b> de toute la voie.", [T("L'HMG-CoA réductase"), LG("membrane du RE lisse · IRRÉVERSIBLE · POINT DE RÉGULATION", "rouge", { taille: "grand" })]),
      E("C'est aussi la <b>cible des statines</b>, les médicaments qui font baisser le cholestérol.", [POST("HMG-CoA réductase : étape clé, cible des statines", "cle")]),
      E("Le bilan : 6 mévalonates, soit <b>18 acétyl-CoA</b>, et <b>18 ATP</b> par cholestérol, plus beaucoup de NADPH. C'est une synthèse très coûteuse, d'où un contrôle serré.", [EQ("Bilan : 18 acétyl-CoA + 18 ATP (+ NADPH,H⁺) → 1 cholestérol"), LG("très coûteuse → contrôle SERRÉ", "noir", { puce: "•" })], "reflechit"),
      E("Comment agissent les statines ? Elles bloquent la réductase : le cholestérol baisse dans l'hépatocyte. Le foie « manque » de cholestérol, alors il fabrique plus de <b>récepteurs aux LDL</b>. Il capte plus de LDL, et le LDL-cholestérol du sang <b>baisse</b>.", [EFF(), T("Comment agissent les statines"), EQ("statines → réductase bloquée → cholestérol ↓ dans l'hépatocyte → récepteurs LDL ↑ → LDL sanguin ↓")], "content")
    ],
    questions: [
      qcm("a1", "Quelle enzyme les statines bloquent-elles ?", ["L'HMG-CoA réductase", "L'HMG-CoA lyase", "L'ACAT", "La LCAT"], "L'étape clé de la synthèse du cholestérol."),
      qcm("a2", "Pourquoi les statines font-elles baisser le LDL sanguin ?", ["Le foie fabrique plus de récepteurs aux LDL et en capte plus", "Elles détruisent les LDL dans le sang", "Elles bloquent l'absorption intestinale des graisses", "Elles augmentent la LPL"], "Le foie « manque » de cholestérol.")
    ],
    revision: [
      qcm("r1", "Combien d'acétyl-CoA faut-il pour fabriquer un cholestérol ?", ["18", "8", "27", "6"], "Et 18 ATP : synthèse très coûteuse.")
    ]
  },
  {
    id: "bc-meta-lipides-39", fiche: F5, ficheTitre: F5T, titre: "Estérifier le cholestérol",
    classe: [
      E("Le cholestérol <b>estérifié</b> : cholestérol plus un acide gras, sur sa fonction alcool. Il devient totalement hydrophobe. C'est la forme de <b>stockage</b> dans les cellules, et de <b>transport</b> au cœur des lipoprotéines.", [T("L'estérification du cholestérol"), EQ("cholestérol (OH) + AG → cholestérol estérifié (totalement hydrophobe)")]),
      E("Elle <b>protège</b> la cellule d'un excès de cholestérol libre, qui est toxique et favorise l'athérome. C'est une réaction facultative et réversible.", [LG("protège la cellule d'un excès de cholestérol LIBRE (toxique) · réversible", "vert", { puce: "•" })]),
      E("Trois enzymes à ne pas confondre.", [EFF(), T("Trois enzymes"), GRI(["Enzyme", "Lieu", "Action"], [
        ["ACAT (acyl-CoA : cholestérol acyltransférase)", "dans les cellules : hépatocytes, cellules stéroïdogènes", "cholestérol + acyl-CoA → ester → stockage en gouttelettes"],
        ["LCAT (lécithine-cholestérol acyltransférase)", "plasma, dans les HDL", "prend un AG à une lécithine → transport inverse vers le foie"],
        ["Cholestérol estérase", "intestin (suc pancréatique), cellules", "action INVERSE : ester → cholestérol libre + AG"]
      ])]),
      E("L'<b>ACAT</b>, dans les cellules : elle estérifie avec un acyl-CoA, donc l'AG doit d'abord être activé. Pour stocker en gouttelettes.", [MONTRE(1)]),
      E("La <b>LCAT</b>, dans le plasma, sur les HDL : elle prend l'AG à une lécithine. Elle estérifie le cholestérol récupéré des tissus, pour le transport inverse vers le foie.", [MONTRE(2)]),
      E("Et la <b>cholestérol estérase</b> fait l'inverse : elle hydrolyse l'ester en cholestérol libre plus AG. Dans l'intestin et dans les cellules.", [MONTRE(3), POST("ACAT (cellules) et LCAT (HDL) estérifient · la cholestérol estérase hydrolyse", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle enzyme estérifie le cholestérol dans les cellules, pour le stockage ?", ["L'ACAT", "La LCAT", "La cholestérol estérase", "L'HMG-CoA réductase"], "Avec un acyl-CoA."),
      qcm("a2", "Quelle enzyme hydrolyse le cholestérol estérifié ?", ["La cholestérol estérase", "L'ACAT", "La LCAT", "La LPL"], "Action inverse : cholestérol libre + AG.")
    ],
    revision: [
      paires("r1", "Relie chaque enzyme à son lieu.", [["ACAT", "Dans les cellules"], ["LCAT", "Dans les HDL, dans le plasma"], ["Cholestérol estérase", "Intestin et cellules"]], "Deux estérifient, une hydrolyse."),
      vf("r2", "Le cholestérol libre en excès est toxique pour la cellule.", true, "Vrai : l'estérification la protège.")
    ]
  },
  {
    id: "bc-meta-lipides-40", fiche: F5, ficheTitre: F5T, titre: "Le rétrocontrôle par le cholestérol",
    classe: [
      E("Un <b>rétrocontrôle</b>, ou rétro-inhibition : le produit final d'une voie inhibe une étape antérieure, pour éviter la surproduction. Exemple : quand la glycémie redescend, l'insuline s'arrête, ce qui évite l'hypoglycémie.", [T("Le rétrocontrôle"), LG("le PRODUIT FINAL freine sa propre source (régulation négative)", "noir")]),
      E("Que fait une cellule qui a <b>trop de cholestérol</b> ? Trois réponses.", [RANG([
        { titre: "Elle fabrique moins", x: "HMG-CoA réductase ↓ : moins produite, détruite plus vite", c: "rouge" },
        { titre: "Elle stocke le surplus", x: "ACAT ↑ : estérification en gouttelettes", c: "vert" },
        { titre: "Elle capte moins", x: "récepteurs aux LDL ↓ : moins de LDL captées", c: "bleu" }
      ])]),
      E("Un : elle <b>fabrique moins</b>. Le cholestérol, et les dérivés du mévalonate, IPP, farnésyl, freinent la réductase : elle est moins fabriquée et dégradée plus vite. Quand le cholestérol baisse, elle est stabilisée et la synthèse reprend.", [MONTRE(1)]),
      E("Deux : elle <b>stocke</b> : l'ACAT est stimulée. Trois : elle <b>capte moins</b> : moins de récepteurs aux LDL.", [MONTRE(2), MONTRE(3), POST("Cholestérol ↑ : réductase ↓, ACAT ↑, récepteurs LDL ↓", "cle")]),
      E("La conséquence pour le sang : si le foie capte moins de LDL, elles restent dans le sang, et le LDL-cholestérol monte. Une alimentation très riche en graisses saturées a un effet de ce type.", [EFF(), T("La conséquence pour le sang"), EQ("foie : récepteurs LDL ↓ → LDL restent dans le sang → LDL-cholestérol ↑")], "reflechit"),
      E("Mais attention : le cholestérol <b>alimentaire</b> influence peu le cholestérol du sang chez la plupart des gens, car la fabrication s'ajuste. Ton cours et ton livre parlent de régulation « allostérique » : retiens-la comme une « rétro-inhibition par le cholestérol ».", [POST("Cholestérol alimentaire : peu d'effet sur le sang chez la plupart des gens (la synthèse s'ajuste)", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Que fait la cellule quand son cholestérol augmente ?", ["Elle diminue la réductase et ses récepteurs LDL, et augmente l'ACAT", "Elle augmente la réductase", "Elle fabrique plus de récepteurs LDL", "Elle bloque l'ACAT"], "Elle fabrique moins, stocke et capte moins."),
      vf("a2", "Chez la plupart des gens, le cholestérol alimentaire a un grand effet sur le cholestérol sanguin.", false, "Faux : la fabrication s'ajuste.")
    ],
    revision: [
      qcm("r1", "Pourquoi le LDL-cholestérol sanguin monte-t-il quand le foie est surchargé en cholestérol ?", ["Le foie fabrique moins de récepteurs aux LDL", "Le foie fabrique plus de LDL", "Les HDL disparaissent", "La LPL est bloquée"], "Les LDL restent dans le sang.")
    ]
  },
  {
    id: "bc-meta-lipides-41", fiche: F5, ficheTitre: F5T, titre: "Les hormones et le cholestérol",
    classe: [
      E("Les hormones règlent aussi l'HMG-CoA réductase.", [T("La régulation hormonale"), GRI(["Hormone", "Action", "Effet"], [
        ["Insuline (repas)", "active la réductase par DÉPHOSPHORYLATION + ↑ son gène", "synthèse ↑"],
        ["Glucagon (jeûne)", "inhibe la réductase par PHOSPHORYLATION (AMPc → kinase)", "synthèse ↓"],
        ["T3, T4 (thyroïde)", "↑ réductase et récepteurs aux LDL", "hypothyroïdie → hypercholestérolémie"],
        ["Glucocorticoïdes", "effet variable", "selon l'hormone et le tissu"]
      ])]),
      E("L'<b>insuline</b>, après un repas : elle active la réductase par <b>déphosphorylation</b>, grâce à une phosphatase, un effet rapide. Et elle augmente l'expression de son gène. La synthèse augmente.", [MONTRE(1)]),
      E("Le <b>glucagon</b>, au jeûne : AMPc, protéine kinase, la réductase est <b>phosphorylée</b> : inhibée. La synthèse baisse. Même logique que pour l'ACC !", [MONTRE(2), POST("Insuline active (déphosphorylation) · glucagon inhibe (phosphorylation)", "cle")], "reflechit"),
      E("Les <b>hormones thyroïdiennes</b>, T3 et T4, augmentent la réductase et les récepteurs aux LDL. D'où une <b>hypercholestérolémie</b> fréquente en cas d'<b>hypothyroïdie</b> : moins de récepteurs, plus de LDL dans le sang. Les glucocorticoïdes, eux, ont un effet variable.", [MONTRE(3), MONTRE(4), POST("Hypothyroïdie → hypercholestérolémie fréquente", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Comment le glucagon agit-il sur l'HMG-CoA réductase ?", ["Il l'inhibe par phosphorylation", "Il l'active par déphosphorylation", "Il augmente son gène", "Il n'a aucun effet"], "AMPc → protéine kinase."),
      qcm("a2", "Pourquoi l'hypothyroïdie s'accompagne-t-elle souvent d'une hypercholestérolémie ?", ["Moins de T3/T4 → moins de récepteurs aux LDL", "Trop de T3/T4 → trop de synthèse", "La thyroïde fabrique du cholestérol", "Les HDL augmentent"], "Les LDL restent dans le sang.")
    ],
    revision: [
      vf("r1", "L'insuline active l'HMG-CoA réductase.", true, "Vrai : par déphosphorylation, et en augmentant son gène.")
    ]
  },
  {
    id: "bc-meta-lipides-42", fiche: F5, ficheTitre: F5T, titre: "Assiette, sport et cholestérol",
    classe: [
      E("Côté diététique : qu'est-ce qui fait bouger le cholestérol sanguin ? Ce qui <b>augmente</b> le LDL-cholestérol : les AG <b>saturés</b>, viande rouge, produits laitiers entiers, certains produits transformés, et les AG <b>trans</b>.", [T("Alimentation et cholestérol"), LG("LDL ↑ : AG SATURÉS (viande rouge, laitiers entiers, produits transformés) + AG TRANS", "rouge", { puce: "↑" })]),
      E("Ce qui le <b>diminue</b> : remplacer les AG saturés par des AG <b>insaturés</b>, huiles d'olive, de colza, de noix. Et les <b>fibres solubles</b>, avoine, légumineuses, fruits, légumes, qui piègent surtout les acides biliaires.", [LG("LDL ↓ : remplacer saturés par INSATURÉS (olive, colza, noix)", "vert", { puce: "↓" }), LG("LDL ↓ : FIBRES SOLUBLES (avoine, légumineuses, fruits, légumes) : piègent les acides biliaires", "vert", { puce: "↓" })]),
      E("Les <b>oméga 3</b> des poissons gras, saumon, sardine, maquereau, EPA et DHA : ils font surtout baisser les <b>triglycérides</b>. Intérêt cardiovasculaire.", [LG("oméga 3 (poissons gras : EPA, DHA) : surtout TG ↓", "bleu", { puce: "•" })]),
      E("Et l'<b>activité physique</b> régulière : un complément essentiel. Elle augmente les HDL et fait baisser les triglycérides.", [LG("activité physique : HDL ↑, TG ↓", "bleu", { puce: "•" })]),
      E("Le résumé : une alimentation riche en fibres et en AG insaturés, pauvre en saturés et en trans, améliore nettement le profil lipidique.", [POST("AG saturés et trans ↑ LDL · AG insaturés, fibres solubles ↓ LDL · oméga 3 ↓ TG · sport ↑ HDL", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Lesquels de ces aliments font baisser le LDL-cholestérol ?", ["Les fibres solubles (avoine, légumineuses)", "La viande rouge", "Les produits laitiers entiers", "Les produits riches en AG trans"], "Elles piègent les acides biliaires."),
      qcm("a2", "Quel est l'effet principal des oméga 3 des poissons gras ?", ["Faire baisser les triglycérides", "Augmenter le LDL", "Faire baisser les HDL", "Augmenter la synthèse de cholestérol"], "EPA et DHA.")
    ],
    revision: [
      qcm("r1", "Quel est l'effet d'une activité physique régulière sur le profil lipidique ?", ["HDL ↑ et triglycérides ↓", "LDL ↑", "HDL ↓", "Triglycérides ↑"], "Un complément essentiel de l'alimentation."),
      vf("r2", "Les AG saturés font augmenter le LDL-cholestérol.", true, "Vrai, comme les AG trans. Les remplacer par des insaturés le fait baisser.")
    ]
  },
  {
    id: "bc-meta-lipides-43", fiche: F5, ficheTitre: F5T, titre: "Éliminer le cholestérol",
    classe: [
      E("L'organisme ne sait pas transformer le cholestérol en acétyl-CoA : il ne fournit <b>pas d'énergie</b>. Et <b>seul le foie</b> l'élimine, toujours par la <b>bile</b>, sous deux formes d'importance comparable.", [T("Éliminer le cholestérol"), LG("pas d'énergie · SEUL LE FOIE l'élimine · par la BILE, sous 2 formes", "rouge", { taille: "grand" })]),
      E("Forme 1 : le cholestérol <b>libre</b>, sécrété dans la bile, stockée dans la vésicule biliaire et libérée dans l'intestin grêle pendant la digestion. Une partie est réabsorbée et revient au foie. Le reste passe dans le gros intestin, où la flore le transforme en <b>coprostanol</b>, dans les fèces.", [LG("1 · cholestérol LIBRE dans la bile → en partie réabsorbé · reste → coprostanol (fèces)", "bleu", { puce: "•" })]),
      E("Forme 2 : les <b>acides biliaires</b>, la principale voie de dégradation du cholestérol. Coupure de 3 carbones de la chaîne latérale, qui donnent du propionyl-CoA ; chaîne terminée par un COOH ; 3 fonctions alcool : des molécules amphiphiles. Surtout l'acide cholique.", [LG("2 · ACIDES BILIAIRES (principale voie de catabolisme) : − 3 C, COOH, 3 –OH → amphiphiles", "bleu", { puce: "•" })]),
      E("L'enzyme clé : la <b>7α-hydroxylase</b>, ou CYP7A1, l'étape limitante, inhibée par les acides biliaires : rétro-inhibition.", [POST("7α-hydroxylase (CYP7A1) : étape limitante, rétro-inhibée par les acides biliaires", "cle")]),
      E("Puis conjugaison avec la glycine, deux tiers, ou la taurine, un tiers ; dans la bile, ils deviennent des sels biliaires, glyco- et taurocholate de sodium, qui émulsionnent les lipides. Le cycle entéro-hépatique en réabsorbe environ 95 % dans l'iléon : il recycle, mais limite l'élimination du cholestérol. Les 5 % restants, environ 500 mg par jour, donnent des acides biliaires secondaires, dans les fèces.", [EFF(), T("Des acides biliaires aux sels biliaires"), EQ("acides biliaires → conjugués (glycine 2/3, taurine 1/3) → sels biliaires (bile)"), EQ("cycle entéro-hépatique : ≈ 95 % réabsorbés (iléon) · ≈ 5 % (≈ 500 mg/j) → fèces")]),
      E("Bravo, tu as fini le métabolisme des lipides ! Le résumé de la fiche 5.", [EFF(), T("L'essentiel de la fiche 5"), POST("≈ 80 % endogène · cytosol puis RE · HMG-CoA → mévalonate → IPP → squalène → lanostérol → cholestérol · réductase = cible des statines · ACAT, LCAT, estérase · rétrocontrôle · insuline +, glucagon − · saturés ↑ LDL, fibres ↓ · bile : cholestérol libre + acides biliaires (7α-hydroxylase)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle est la principale voie de dégradation du cholestérol ?", ["Sa transformation en acides biliaires", "Sa β-oxydation", "Son élimination par le rein", "Sa transformation en glucose"], "Il ne fournit pas d'énergie."),
      qcm("a2", "Quelle enzyme est l'étape limitante de la synthèse des acides biliaires ?", ["La 7α-hydroxylase (CYP7A1)", "L'HMG-CoA réductase", "La LCAT", "L'ACAT"], "Rétro-inhibée par les acides biliaires.")
    ],
    revision: [
      qcm("r1", "Sous quelles formes le foie élimine-t-il le cholestérol ?", ["Cholestérol libre et acides biliaires, dans la bile", "Corps cétoniques", "Urée", "Acétyl-CoA"], "Deux formes d'importance comparable."),
      qcm("r2", "Que devient le cholestérol libre qui atteint le gros intestin ?", ["Du coprostanol (flore), dans les fèces", "Du glucose", "Des sels biliaires primaires", "Des corps cétoniques"], "Transformé par la flore du côlon.")
    ]
  }

  ]
};
