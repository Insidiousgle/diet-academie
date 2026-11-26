// Cours : Métabolisme des acides aminés (Sciences › Biochimie › Métabolisme)
// Source : fiches « Les protéines » 12, 13, 14 (Métabolisme azoté).
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F12 = "Fiche 12", F12T = "Métabolisme des acides aminés et des protéines";
const F13 = "Fiche 13", F13T = "Uréogenèse : compléments";
const F14 = "Fiche 14", F14T = "Ammoniogenèse et ammoniémie";

export default {
  id: "bc-meta-proteines",
  titre: "Métabolisme des acides aminés",
  persos: {},
  carte: {
    depart: "Chaque jour, ton corps démonte et reconstruit 300 g de protéines. Que devient l'azote ? Pourquoi l'ammoniac est-il dangereux pour le cerveau ?",
    etapes: [
      { titre: "Le pool d'AA", verbe: "Je recycle", question: "Renouvellement et bilan azoté", mots: "300 g/j · pas de stock · bilan azoté" },
      { titre: "L'azote des AA", verbe: "Je sépare", question: "Transamination, désamination, transport", mots: "glutamate · GDH · glutamine · alanine" },
      { titre: "L'urée", verbe: "J'élimine", question: "Le cycle de l'urée et ses déficits", mots: "CPS I · NAG · arginine · OTC" },
      { titre: "Le squelette carboné", verbe: "Je réutilise", question: "Glucose, corps cétoniques, cas particuliers", mots: "glucoformateurs · cétoformateurs · phénylcétonurie" },
      { titre: "L'ammonium et le rein", verbe: "J'équilibre", question: "Ammoniogenèse, ammoniémie, diététique", mots: "NH₄⁺ · bicarbonates · encéphalopathie hépatique" }
    ],
    arrivee: "Tu sais suivre l'azote d'une protéine jusqu'à l'urine, et adapter les apports protéiques selon la situation."
  },
  lecons: [

  /* ================= FICHE 12 ================= */
  {
    id: "bc-meta-proteines-01", fiche: F12, ficheTitre: F12T, titre: "Le pool d'acides aminés",
    classe: [
      E("Au centre du métabolisme des protéines : le <b>pool d'acides aminés libres</b>, environ <b>70 à 100 g</b>, surtout dans le muscle. C'est un stock de passage, pas une réserve.", [T("Le pool d'acides aminés"), LG("POOL d'AA libres ≈ 70 à 100 g (surtout muscle) · stock de PASSAGE", "bleu")]),
      E("Ce qui le remplit : les protéines du repas, environ <b>80 g</b> par jour ; la dégradation des protéines du corps, la protéolyse, environ <b>300 g</b> par jour, la plus grosse entrée ; et un peu de synthèse d'AA non indispensables.", [GRI(["Entrées", "Quantité"], [["Protéines alimentaires", "≈ 80 g/j"], ["Protéolyse (protéines du corps)", "≈ 300 g/j"], ["Synthèse d'AA non indispensables", "un peu"]], true)]),
      E("Ce qui en sort : surtout la fabrication de nouvelles protéines, la protéogenèse, environ 300 g par jour. Et d'autres molécules azotées : hormones, neuromédiateurs, hème, glutathion, créatine, nucléotides, NAD⁺, CoA.", [LG("SORTIES : protéogenèse (≈ 300 g/j) · hormones, hème, créatine, nucléotides…", "vert", { puce: "•" })]),
      E("Ce qui n'est pas réutilisé est <b>démonté</b> : le squelette carboné sert d'énergie, ou fait du glucose ou des graisses ; et l'azote est éliminé, en urée par le foie, en NH₄⁺ par le rein.", [EQ("AA non réutilisés → squelette carboné (énergie, glucose, lipides) + azote (urée, NH₄⁺)"), POST("Pool ≈ 70-100 g · protéolyse ≈ protéogenèse ≈ 300 g/j", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle est la plus grosse entrée dans le pool d'acides aminés ?", ["La protéolyse des protéines du corps (≈ 300 g/j)", "Les protéines alimentaires", "La synthèse d'AA", "L'urée"], "Le corps recycle bien plus qu'il ne mange."),
      qcm("a2", "Combien pèse le pool d'acides aminés libres ?", ["Environ 70 à 100 g", "Environ 1 kg", "Environ 5 g", "Environ 300 g"], "Surtout dans le muscle.")
    ],
    revision: [
      vf("r1", "Les acides aminés en excès sont stockés comme le glucose en glycogène.", false, "Faux : ils sont utilisés ou dégradés, pas stockés.")
    ]
  },
  {
    id: "bc-meta-proteines-02", fiche: F12, ficheTitre: F12T, titre: "Renouvellement et bilan azoté",
    classe: [
      E("Les AA en excès ne sont <b>pas stockés</b> : ils sont utilisés ou dégradés. Les protéines du muscle servent de réserve « fonctionnelle », mobilisée au jeûne.", [T("Un renouvellement permanent"), LG("AA en excès : PAS de stockage · muscle = réserve « fonctionnelle »", "rouge")]),
      E("Les protéines sont sans cesse détruites et refaites. Chez l'adulte, protéolyse égale protéogenèse, environ 300 g par jour : la masse reste stable. Sur ces 300 g, environ 80 viennent de l'alimentation, et 220 sont <b>recyclés</b>. Renouvellement le plus rapide : foie, intestin, muscles, peau.", [EQ("300 g/j = 80 g alimentaires + 220 g recyclés")]),
      E("Une partie des AA est perdue chaque jour : d'où le <b>besoin quotidien</b> en protéines, avec les 9 AA indispensables.", [POST("Pertes quotidiennes → besoin QUOTIDIEN en protéines", "cle")], "reflechit"),
      E("Le <b>bilan azoté</b> : azote ingéré moins azote perdu. L'azote ingéré, c'est les protéines divisées par <b>6,25</b>, car les protéines contiennent environ 16 % d'azote. L'azote perdu : surtout l'urée urinaire.", [EFF(), T("Le bilan azoté"), EQ("Bilan azoté = N ingéré − N perdu · N ingéré ≈ protéines (g) / 6,25")]),
      E("Équilibré : l'adulte en bonne santé. <b>Positif</b> : croissance, grossesse, renutrition, prise de muscle. <b>Négatif</b> : jeûne, apports insuffisants, catabolisme, infection, brûlures, chirurgie, cancer, alitement.", [GRI(["Bilan", "Situations"], [["Équilibré", "adulte en bonne santé"], ["Positif", "croissance, grossesse, renutrition, prise de muscle"], ["Négatif", "jeûne, apports insuffisants, catabolisme, alitement"]], true)], "content")
    ],
    questions: [
      qcm("a1", "Par quel nombre divise-t-on les protéines pour obtenir l'azote ?", ["6,25", "4", "9", "16"], "Les protéines contiennent ≈ 16 % d'azote."),
      qcm("a2", "Dans quelle situation le bilan azoté est-il positif ?", ["La croissance", "Le jeûne", "Les brûlures graves", "L'alitement"], "Aussi grossesse, renutrition, prise de muscle.")
    ],
    revision: [
      qcm("r1", "Un patient brûlé a un bilan azoté…", ["Négatif", "Positif", "Équilibré", "Nul"], "Catabolisme intense."),
      qcm("r2", "Sur les 300 g de protéines refaits chaque jour, combien sont recyclés ?", ["Environ 220 g", "Environ 80 g", "Environ 300 g", "Aucun"], "80 g viennent de l'alimentation.")
    ]
  },
  {
    id: "bc-meta-proteines-03", fiche: F12, ficheTitre: F12T, titre: "La transamination",
    classe: [
      E("Pour dégrader un AA, on sépare son <b>azote</b> de son <b>squelette carboné</b>. Première étape : la <b>transamination</b>.", [T("La transamination"), LG("séparer l'AZOTE du SQUELETTE CARBONÉ", "noir")]),
      E("On transfère la fonction amine d'un AA sur la fonction cétone d'un acide α-cétonique. L'AA devient un α-cétoacide, et l'α-cétoacide devient un AA. C'est <b>réversible</b>.", [EQ("AA₁ + α-cétoacide₂ ⇌ α-cétoacide₁ + AA₂")]),
      E("Les enzymes : les <b>transaminases</b>, ou aminotransférases. Leur coenzyme : le <b>phosphate de pyridoxal</b>, de la vitamine B6, qui prend puis cède le NH₂.", [LG("TRANSAMINASES + PLP (vitamine B6)", "bleu", { taille: "grand" })]),
      E("L'accepteur est presque toujours l'<b>α-cétoglutarate</b>, qui devient <b>glutamate</b>. Le glutamate <b>collecte</b> ainsi l'azote de la plupart des AA.", [POST("α-cétoglutarate → GLUTAMATE : le collecteur d'azote", "cle")], "reflechit"),
      E("Deux exemples. L'<b>ALAT</b> : alanine plus α-cétoglutarate donnent pyruvate plus glutamate. L'<b>ASAT</b> : aspartate plus α-cétoglutarate donnent oxaloacétate plus glutamate. Presque tous les AA sont concernés, sauf la lysine et la thréonine.", [EFF(), T("Exemples"), EQ("ALAT : Ala + α-KG ⇌ pyruvate + Glu"), EQ("ASAT : Asp + α-KG ⇌ oxaloacétate + Glu"), LG("tous les AA sauf lysine et thréonine", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Quel est l'accepteur habituel de l'azote lors de la transamination ?", ["L'α-cétoglutarate, qui devient glutamate", "Le pyruvate", "L'urée", "L'acétyl-CoA"], "Le glutamate collecte l'azote."),
      qcm("a2", "Quel est le coenzyme des transaminases ?", ["Le phosphate de pyridoxal (B6)", "Le NAD⁺", "La biotine", "Le TPP"], "Il prend puis cède le NH₂.")
    ],
    revision: [
      qcm("r1", "Quels AA ne subissent pas de transamination ?", ["La lysine et la thréonine", "L'alanine et l'aspartate", "Le glutamate", "Tous en subissent"], "Exceptions à retenir."),
      vf("r2", "La transamination est irréversible.", false, "Faux : elle est réversible.")
    ]
  },
  {
    id: "bc-meta-proteines-04", fiche: F12, ficheTitre: F12T, titre: "Libérer l'azote : la désamination",
    classe: [
      E("Deuxième étape : la <b>désamination oxydative</b> du glutamate. Enzyme : la <b>glutamate déshydrogénase</b>, GDH, dans la matrice mitochondriale, surtout dans le foie et le rein.", [T("La désamination oxydative"), EQ("Glu + H₂O + NAD⁺ → α-cétoglutarate + NH₃ + NADH,H⁺ (GDH)")]),
      E("Le glutamate libère enfin l'azote sous forme de <b>NH₃</b>, toxique, et redevient α-cétoglutarate, prêt à recommencer. Transamination plus désamination : on appelle ça la <b>transdésamination</b>.", [POST("Transdésamination = transamination (→ Glu) + désamination (GDH → NH₃)", "cle")]),
      E("Il existe aussi des désaminations non oxydatives : sérine vers pyruvate, thréonine ; la cystéine ; la <b>glutaminase</b>, glutamine plus eau donne glutamate plus NH₃ ; l'asparaginase.", [LG("non oxydatives : sérine, thréonine, cystéine · GLUTAMINASE (Gln → Glu + NH₃) · asparaginase", "noir", { puce: "•" })]),
      E("Et la <b>décarboxylation</b>, avec le PLP : l'AA perd son CO₂ et devient une amine. Histidine vers histamine, glutamate vers GABA, tyrosine vers dopamine, noradrénaline, adrénaline, tryptophane vers sérotonine. Le glutamate est aussi le principal neuromédiateur excitateur du cerveau.", [EFF(), T("La décarboxylation"), GRI(["AA", "Amine"], [["Histidine", "histamine"], ["Glutamate", "GABA (inhibiteur)"], ["Tyrosine", "dopamine → noradrénaline → adrénaline"], ["Tryptophane", "sérotonine"]], true)], "content")
    ],
    questions: [
      qcm("a1", "Quelle enzyme libère le NH₃ à partir du glutamate ?", ["La glutamate déshydrogénase (GDH)", "L'ALAT", "La glutamine synthétase", "L'arginase"], "Dans la mitochondrie, avec du NAD⁺."),
      qcm("a2", "Qu'est-ce que la transdésamination ?", ["Transamination + désamination oxydative du glutamate", "La fabrication de l'urée", "Le transport de la glutamine", "La décarboxylation des AA"], "L'azote finit en NH₃.")
    ],
    revision: [
      qcm("r1", "Quelle enzyme coupe la glutamine en glutamate et NH₃ ?", ["La glutaminase", "La glutamine synthétase", "L'ASAT", "L'arginase"], "Désamination non oxydative."),
      qcm("r2", "Quelle réaction transforme l'histidine en histamine ?", ["Une décarboxylation", "Une transamination", "Une désamination", "Une hydrolyse"], "Avec le PLP (B6).")
    ]
  },
  {
    id: "bc-meta-proteines-05", fiche: F12, ficheTitre: F12T, titre: "Les enzymes du foie en clinique",
    classe: [
      E("Les transaminases servent en biologie clinique. L'<b>ALAT</b> est surtout dans le foie, dans le cytosol. Son augmentation dans le sang est le marqueur le <b>plus spécifique</b> d'une cytolyse hépatique : hépatite, stéatose.", [T("En biologie clinique"), GRI(["Dosage", "Ce qu'il indique"], [
        ["ALAT", "foie surtout → marqueur le plus SPÉCIFIQUE de cytolyse hépatique"],
        ["ASAT", "foie, cœur, muscles, hématies → moins spécifique"],
        ["γ-GT", "atteinte du foie, cholestase, alcool"],
        ["Ammoniémie", "normale < 50 µmol/L · ↑ insuffisance hépatique, déficit du cycle de l'urée"]
      ], true), MONTRE(1)]),
      E("L'<b>ASAT</b> est dans le foie, mais aussi le cœur, les muscles, les hématies : moins spécifique. Une ASAT élevée sans ALAT élevée oriente vers un muscle ou le cœur.", [MONTRE(2), POST("ASAT ↑ sans ALAT ↑ → penser muscle ou cœur", "astuce")], "reflechit"),
      E("La <b>γ-GT</b> : élevée en cas d'atteinte du foie, de cholestase, ou de consommation d'<b>alcool</b>. Et l'<b>ammoniémie</b> : normale en dessous de 50 µmol/L.", [MONTRE(3), MONTRE(4), POST("ALAT : cytolyse hépatique · γ-GT : alcool, cholestase · ammoniémie < 50 µmol/L", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le marqueur le plus spécifique d'une cytolyse hépatique ?", ["L'ALAT", "L'ASAT", "La créatine kinase", "L'amylase"], "Elle est surtout dans le foie."),
      qcm("a2", "Quel dosage augmente avec la consommation d'alcool ?", ["La γ-GT", "L'ammoniémie seulement", "L'urée", "L'ASAT uniquement"], "Aussi en cas de cholestase.")
    ],
    revision: [
      qcm("r1", "Une ASAT élevée avec une ALAT normale oriente plutôt vers…", ["Un muscle ou le cœur", "Le foie", "Le pancréas", "Le rein"], "L'ASAT est moins spécifique.")
    ]
  },
  {
    id: "bc-meta-proteines-06", fiche: F12, ficheTitre: F12T, titre: "Transporter l'ammoniac",
    classe: [
      E("On produit environ <b>1 mole de NH₃</b> par jour : catabolisme des AA, microbiote de l'intestin, glutaminase intestinale, bases azotées. Au pH du sang, il est presque entièrement en ion <b>ammonium, NH₄⁺</b>.", [T("Un produit toxique"), EQ("NH₃ + H⁺ ⇌ NH₄⁺ (pK ≈ 9,2) · ≈ 1 mol de NH₃ par jour")]),
      E("Il est <b>toxique</b> pour le cerveau dès que l'ammoniémie dépasse environ 50 µmol/L : troubles de la conscience, coma. C'est l'encéphalopathie hépatique de la cirrhose.", [LG("TOXIQUE pour le cerveau > 50 µmol/L → encéphalopathie, coma", "rouge", { taille: "grand" })], "reflechit"),
      E("Il ne circule donc pas libre. Il est fixé sur le glutamate, ce qui donne la <b>glutamine</b>, ou sur le pyruvate, ce qui donne l'<b>alanine</b>. Puis il est éliminé par le foie, en urée, et le rein, en NH₄⁺.", [EQ("NH₃ → GLUTAMINE (sur le glutamate) ou ALANINE (sur le pyruvate) → foie, rein")]),
      E("La <b>glutamine synthétase</b>, dans le muscle, le cerveau, les tissus : glutamate plus NH₃ plus ATP donnent glutamine. Non toxique, la glutamine est avec le glutamate l'AA le plus abondant du plasma. C'est aussi le carburant principal des entérocytes et des cellules immunitaires.", [EFF(), T("Glutamine et alanine"), EQ("Glu + NH₃ + ATP → glutamine (glutamine synthétase)"), LG("glutamine : AA le + abondant du plasma · carburant des entérocytes et cellules immunitaires", "vert", { puce: "•" })]),
      E("L'<b>alanine</b> : le muscle transamine son pyruvate en alanine ; le foie la retransforme en pyruvate, puis en glucose, renvoyé au muscle. C'est le <b>cycle glucose-alanine</b>, surtout au jeûne et à l'effort.", [POST("Transport de l'azote : glutamine et alanine (cycle glucose-alanine)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Sous quelles formes l'azote est-il transporté dans le sang ?", ["Glutamine et alanine", "NH₃ libre", "Urée seulement", "Acide urique"], "L'ammoniac libre est toxique."),
      qcm("a2", "À partir de quelle ammoniémie l'ammoniac devient-il toxique pour le cerveau ?", ["≈ 50 µmol/L", "≈ 5 mmol/L", "≈ 1 g/L", "≈ 500 µmol/L"], "Encéphalopathie hépatique.")
    ],
    revision: [
      qcm("r1", "Qu'est-ce que le cycle glucose-alanine ?", ["Le muscle envoie de l'alanine au foie, qui renvoie du glucose", "Le foie envoie de l'alanine au muscle", "Le rein fabrique de l'alanine", "L'intestin transforme le glucose en alanine"], "Surtout au jeûne et à l'effort."),
      qcm("r2", "Quelle enzyme fixe le NH₃ sur le glutamate pour former la glutamine ?", ["La glutamine synthétase", "La glutaminase", "La GDH", "L'ALAT"], "Elle consomme de l'ATP.")
    ]
  },
  {
    id: "bc-meta-proteines-07", fiche: F12, ficheTitre: F12T, titre: "Le cycle de l'urée",
    classe: [
      E("L'<b>uréogenèse</b> : la fabrication de l'<b>urée</b> dans le <b>foie</b>. Elle transforme l'azote en excès en une molécule non toxique, soluble, éliminée par les reins. C'est la voie <b>principale</b> d'élimination de l'azote.", [T("L'uréogenèse"), LG("FOIE · NH₃ → URÉE (non toxique, soluble) → urines · voie PRINCIPALE", "bleu")]),
      E("C'est un cycle à cheval sur deux compartiments : 2 étapes dans la <b>mitochondrie</b>, 3 dans le <b>cytosol</b>. L'ornithine et la citrulline, des AA qui n'entrent pas dans les protéines, passent la membrane par un transporteur.", [LG("2 étapes MITOCHONDRIE + 3 étapes CYTOSOL · ornithine, citrulline", "noir", { puce: "•" })]),
      E("D'où viennent les atomes de l'urée, H₂N–CO–NH₂ ? Un azote vient du <b>NH₃</b>, via le carbamyl-phosphate ; l'autre de l'<b>aspartate</b> ; et le carbone du <b>CO₂</b>.", [EQ("Urée H₂N–CO–NH₂ : 1er N ← NH₃ · 2e N ← ASPARTATE · C ← CO₂"), POST("Les 2 N de l'urée : NH₃ et aspartate", "cle")], "reflechit"),
      E("Elle s'intensifie après un repas riche en protéines, et au jeûne ou à l'effort intense, avec la protéolyse musculaire.", [LG("↑ : repas riche en protéines · jeûne, effort intense", "vert", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "D'où viennent les deux azotes de l'urée ?", ["Du NH₃ et de l'aspartate", "Du glutamate et de la glutamine", "De l'arginine et de l'ornithine", "Du CO₂"], "Le carbone vient du CO₂."),
      qcm("a2", "Où se fait l'uréogenèse ?", ["Dans le foie", "Dans le rein", "Dans le muscle", "Dans l'intestin"], "Mitochondrie puis cytosol des hépatocytes.")
    ],
    revision: [
      vf("r1", "L'urée est toxique.", false, "Faux : c'est une molécule non toxique, soluble, éliminée par les reins.")
    ]
  },
  {
    id: "bc-meta-proteines-08", fiche: F12, ficheTitre: F12T, titre: "Les 5 étapes du cycle",
    classe: [
      E("Les 5 étapes du cycle.", [T("Les 5 étapes"), GRI(["N°", "Réaction", "Enzyme", "Lieu"], [
        ["1", "NH₃ + CO₂ + 2 ATP → carbamyl-phosphate", "CPS I (activée par le NAG)", "mitochondrie"],
        ["2", "carbamyl-P + ornithine → citrulline", "OCT", "mitochondrie"],
        ["3", "citrulline + aspartate + ATP → argininosuccinate", "argininosuccinate synthétase", "cytosol"],
        ["4", "argininosuccinate → arginine + fumarate", "argininosuccinase", "cytosol"],
        ["5", "arginine + H₂O → urée + ornithine", "arginase", "cytosol"]
      ], true)]),
      E("Un : dans la mitochondrie, le NH₃ et le CO₂ forment le <b>carbamyl-phosphate</b>, grâce à la <b>CPS I</b>. C'est l'étape d'entrée, irréversible et régulée, activée par le NAG. Deux : il se fixe sur l'ornithine : <b>citrulline</b>, qui sort dans le cytosol.", [MONTRE(1), MONTRE(2)]),
      E("Trois : dans le cytosol, l'<b>aspartate</b> apporte le 2e azote : argininosuccinate. Quatre : il est coupé en <b>arginine</b> et <b>fumarate</b>. Le fumarate rejoint le cycle de Krebs.", [MONTRE(3), MONTRE(4)]),
      E("Cinq : l'<b>arginase</b> coupe l'arginine : l'<b>urée</b> part dans le sang vers le rein, et l'<b>ornithine</b> retourne dans la mitochondrie. Le cycle peut recommencer.", [MONTRE(5), POST("CPS I (+ NAG) → citrulline → argininosuccinate → arginine + fumarate → urée + ornithine", "cle")], "content")
    ],
    questions: [
      ordre("a1", "Remets dans l'ordre les molécules du cycle de l'urée.", ["Carbamyl-phosphate", "Citrulline", "Argininosuccinate", "Arginine", "Urée + ornithine"], "L'ornithine est régénérée."),
      qcm("a2", "Quelle enzyme libère l'urée ?", ["L'arginase", "La CPS I", "L'OCT", "La glutaminase"], "Elle coupe l'arginine en urée + ornithine.")
    ],
    revision: [
      qcm("r1", "Quelle est l'étape d'entrée, irréversible et régulée, du cycle de l'urée ?", ["La CPS I (carbamyl-phosphate synthétase I)", "L'arginase", "L'OCT", "L'argininosuccinase"], "Activée par le NAG."),
      qcm("r2", "Quelle molécule du cycle de l'urée rejoint le cycle de Krebs ?", ["Le fumarate", "L'urée", "La citrulline", "L'ornithine"], "Fumarate → malate → oxaloacétate.")
    ]
  },
  {
    id: "bc-meta-proteines-09", fiche: F12, ficheTitre: F12T, titre: "Bilan, Krebs et régulation",
    classe: [
      E("Le <b>bilan</b> : il coûte l'équivalent de <b>4 ATP</b> par urée, car un ATP est coupé en AMP plus PPi. C'est un cycle coûteux en énergie.", [T("Bilan et lien avec Krebs"), EQ("NH₃ + CO₂ + aspartate + 3 ATP → urée + fumarate (≈ 4 ATP)")]),
      E("Le lien avec Krebs, la « <b>bicyclette de Krebs</b> » : le fumarate devient malate, puis oxaloacétate, puis aspartate, par transamination avec le glutamate. Cet aspartate sert au tour suivant.", [EQ("fumarate → malate → oxaloacétate → (transamination) → aspartate → cycle de l'urée"), POST("« Bicyclette de Krebs » : urée et Krebs reliés par fumarate et aspartate", "astuce")]),
      E("La régulation <b>rapide</b> : la CPS I est activée de façon allostérique par le <b>NAG</b>, le N-acétylglutamate, fait à partir d'acétyl-CoA et de glutamate. Plus il y a de glutamate, donc d'AA, plus le cycle tourne.", [EFF(), T("La régulation"), LG("RAPIDE : NAG (← glutamate) ⊕ CPS I", "vert", { puce: "•" })]),
      E("La régulation <b>lente</b> : la quantité d'enzymes augmente avec une alimentation riche en protéines et au jeûne, sous l'effet du glucagon et du cortisol. Elle diminue en cas d'<b>acidose</b>, pour laisser la glutamine au rein.", [LG("LENTE : enzymes ↑ (protéines, jeûne, glucagon, cortisol) · ↓ en acidose", "vert", { puce: "•" }), POST("Urée ≈ 4 ATP · CPS I activée par le NAG", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel est l'activateur allostérique de la CPS I ?", ["Le N-acétylglutamate (NAG)", "L'urée", "L'arginase", "L'insuline"], "Fait à partir d'acétyl-CoA et de glutamate."),
      qcm("a2", "Combien coûte la synthèse d'une urée ?", ["L'équivalent de 4 ATP", "1 ATP", "Rien", "129 ATP"], "Un ATP est coupé en AMP + PPi.")
    ],
    revision: [
      vf("r1", "En cas d'acidose, le foie fabrique plus d'urée.", false, "Faux : il en fabrique moins, pour laisser la glutamine au rein.")
    ]
  },
  {
    id: "bc-meta-proteines-10", fiche: F12, ficheTitre: F12T, titre: "Quand le cycle ne suffit plus",
    classe: [
      E("L'<b>insuffisance hépatique</b>, cirrhose ou hépatite grave : l'urée n'est plus fabriquée. Le NH₃ s'accumule dans le sang : <b>encéphalopathie hépatique</b>.", [T("Quand le cycle ne suffit plus"), LG("insuffisance HÉPATIQUE → NH₃ s'accumule → ENCÉPHALOPATHIE", "rouge")]),
      E("Piège diététique : <b>pas de restriction protéique systématique</b>, car elle aggrave la dénutrition. On répartit les apports, on ajoute une collation du soir, et on agit surtout sur l'intestin, avec le lactulose.", [POST("Encéphalopathie hépatique : PAS de restriction protéique systématique", "piege")], "pointe"),
      E("Les <b>déficits héréditaires</b> d'une enzyme du cycle, comme le déficit en OCT : hyperammoniémies graves dès la naissance. Là, régime <b>pauvre en protéines</b>, contrôlé, à vie, avec des mélanges d'AA indispensables.", [LG("DÉFICIT du cycle (ex. OCT) → régime pauvre en protéines À VIE", "bleu", { puce: "•" })]),
      E("L'<b>insuffisance rénale</b> : l'urée est fabriquée, mais mal éliminée. L'urémie monte.", [LG("insuffisance RÉNALE → urée fabriquée mais mal éliminée → urémie ↑", "noir", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Faut-il restreindre les protéines dans l'encéphalopathie hépatique ?", ["Non, pas de restriction systématique (risque de dénutrition)", "Oui, les supprimer totalement", "Oui, moins de 0,3 g/kg/j", "Seulement les protéines végétales"], "On répartit les apports, collation du soir, lactulose."),
      qcm("a2", "Que se passe-t-il dans l'insuffisance rénale ?", ["L'urée est fabriquée mais mal éliminée", "L'urée n'est plus fabriquée", "L'ammoniac est transformé en glucose", "Rien"], "L'urémie augmente.")
    ],
    revision: [
      qcm("r1", "Quel régime pour un déficit héréditaire du cycle de l'urée ?", ["Pauvre en protéines, contrôlé, à vie", "Hyperprotéiné", "Sans glucides", "Normal"], "Avec des mélanges d'AA indispensables.")
    ]
  },
  {
    id: "bc-meta-proteines-11", fiche: F12, ficheTitre: F12T, titre: "Le devenir du squelette carboné",
    classe: [
      E("Une fois l'azote retiré, les 20 squelettes carbonés aboutissent à <b>7 molécules</b> du métabolisme central. Ils donnent de l'énergie, environ 10 à 15 % de l'énergie, du glucose ou des lipides.", [T("Le squelette carboné"), GRI(["Produit", "AA qui le donnent", "Type"], [
        ["pyruvate", "Ala, Ser, Gly, Cys, Thr, Trp", "glucoformateurs"],
        ["oxaloacétate", "Asp, Asn", "glucoformateurs"],
        ["α-cétoglutarate", "Glu, Gln, Pro, Arg, His", "glucoformateurs"],
        ["succinyl-CoA", "Met, Val, Ile, Thr (B12)", "glucoformateurs"],
        ["fumarate", "Phe, Tyr", "glucoformateurs"],
        ["acétyl-CoA", "Leu, Ile, Trp", "cétoformateurs"],
        ["acétoacétate", "Leu, Lys, Phe, Tyr, Trp", "cétoformateurs"]
      ], true)]),
      E("Trois groupes. Les <b>glucoformateurs</b> : ils donnent du pyruvate ou un intermédiaire de Krebs, donc du glucose. La majorité des AA ; les plus utilisés : l'alanine et la glutamine.", [EFF(), T("Trois groupes"), LG("GLUCOFORMATEURS : la majorité (surtout Ala, Gln) → glucose", "vert", { puce: "•" })]),
      E("Les <b>cétoformateurs seulement</b> : la <b>leucine</b> et la <b>lysine</b>. L'acétyl-CoA ne peut pas donner de glucose, car ses 2 carbones partent en CO₂ dans Krebs : il donne des corps cétoniques ou des acides gras.", [LG("CÉTOFORMATEURS seulement : LEUCINE, LYSINE → corps cétoniques, AG (jamais de glucose)", "rouge", { puce: "•" })], "reflechit"),
      E("Les <b>mixtes</b> : phénylalanine, tyrosine, tryptophane, isoleucine.", [LG("MIXTES : Phe, Tyr, Trp, Ile", "bleu", { puce: "•" }), POST("Leu, Lys : seulement cétoformateurs · Phe, Tyr, Trp, Ile : mixtes · les autres : glucoformateurs", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quels AA sont seulement cétoformateurs ?", ["La leucine et la lysine", "L'alanine et la glutamine", "L'aspartate et l'asparagine", "La phénylalanine et la tyrosine"], "Ils ne peuvent jamais donner de glucose."),
      qcm("a2", "Pourquoi l'acétyl-CoA ne peut-il pas donner de glucose ?", ["Ses 2 carbones partent en CO₂ dans le cycle de Krebs", "Il est trop gros", "Il est toxique", "Il n'entre pas dans la mitochondrie"], "Il donne des corps cétoniques ou des AG.")
    ],
    revision: [
      qcm("r1", "Quels AA sont les plus utilisés pour la néoglucogenèse ?", ["L'alanine et la glutamine", "La leucine et la lysine", "La phénylalanine", "Le tryptophane"], "Glucoformateurs."),
      qcm("r2", "Lequel de ces AA est mixte (gluco- et cétoformateur) ?", ["La phénylalanine", "La leucine", "L'alanine", "Le glutamate"], "Aussi Tyr, Trp, Ile.")
    ]
  },
  {
    id: "bc-meta-proteines-12", fiche: F12, ficheTitre: F12T, titre: "Repas, jeûne et AA non indispensables",
    classe: [
      E("Après un <b>repas riche en protéines</b> : les AA en excès, au-delà des besoins, sont désaminés. Leur squelette donne malate, pyruvate, acétyl-CoA : il part en lipogenèse ou en glycogène. L'azote part en urée.", [T("Après un repas, au jeûne"), LG("REPAS riche en protéines : AA en excès → lipogenèse ou glycogène · azote → urée", "vert", { puce: "•" })]),
      E("Au <b>jeûne</b> : la protéolyse musculaire libère de l'alanine et de la glutamine, qui partent en néoglucogenèse dans le foie et le rein. Les cétoformateurs donnent des corps cétoniques.", [LG("JEÛNE : protéolyse → Ala, Gln → néoglucogenèse · cétoformateurs → corps cétoniques", "rouge", { puce: "•" })]),
      E("Et la fabrication des AA <b>non indispensables</b> : le squelette vient de la glycolyse, de la voie des pentoses ou de Krebs ; l'azote vient du glutamate.", [EFF(), T("Fabriquer les AA non indispensables"), GRI(["Précurseur", "AA fabriqués"], [["α-cétoglutarate", "Glu, Gln, Pro, Arg"], ["oxaloacétate", "Asp, Asn"], ["3-phosphoglycérate", "Ser, Gly, Cys (S de la Met)"], ["pyruvate", "Ala"], ["phénylalanine", "Tyr"]], true)]),
      E("Les voies qui fabriquent les AA aromatiques et l'histidine n'existent pas chez l'homme : c'est pour ça qu'ils sont <b>indispensables</b>.", [POST("Pas de voie pour les aromatiques et l'histidine chez l'homme → indispensables", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Que deviennent les AA en excès après un repas très riche en protéines ?", ["Désaminés : squelette → lipogenèse ou glycogène, azote → urée", "Stockés tels quels dans le muscle", "Éliminés intacts dans les urines", "Transformés en vitamines"], "Il n'y a pas de stockage d'AA."),
      qcm("a2", "À partir de quel précurseur fabrique-t-on l'alanine ?", ["Le pyruvate", "L'oxaloacétate", "L'α-cétoglutarate", "Le 3-phosphoglycérate"], "Par transamination.")
    ],
    revision: [
      qcm("r1", "Que libère la protéolyse musculaire pendant le jeûne ?", ["Alanine et glutamine, pour la néoglucogenèse", "Glucose directement", "Acides gras", "Urée"], "Elles partent vers le foie et le rein.")
    ]
  },
  {
    id: "bc-meta-proteines-13", fiche: F12, ficheTitre: F12T, titre: "Phénylalanine et phénylcétonurie",
    classe: [
      E("La <b>phénylalanine</b>, indispensable, devient <b>tyrosine</b> grâce à la <b>phénylalanine hydroxylase</b>, dans le foie. Réaction irréversible, qui utilise l'O₂ et un cofacteur, la <b>BH4</b>, la tétrahydrobioptérine.", [T("Phénylalanine et tyrosine"), EQ("Phe → Tyr (phénylalanine hydroxylase, foie, O₂, BH4)")]),
      E("La tyrosine donne les catécholamines, les hormones thyroïdiennes, la mélanine. Sa dégradation donne du fumarate et de l'acétoacétate : d'où son caractère mixte.", [LG("Tyr → catécholamines, hormones thyroïdiennes, mélanine · dégradée en fumarate + acétoacétate", "noir", { puce: "•" })]),
      E("La <b>phénylcétonurie</b> : un déficit génétique en phénylalanine hydroxylase, environ 1 naissance sur 16 000. La Phe s'accumule et prend des voies anormales : le phénylpyruvate, une « phénylcétone » éliminée dans l'urine.", [EFF(), T("La phénylcétonurie"), LG("déficit en phénylalanine hydroxylase (≈ 1/16 000) → Phe ↑ → phénylpyruvate dans l'urine", "rouge")]),
      E("Toxicité pour le cerveau : troubles de la myélinisation, moins de neuromédiateurs. Sans traitement : retard psychomoteur irréversible. Et la tyrosine devient indispensable.", [POST("Phénylcétonurie : la TYROSINE devient indispensable", "piege")], "reflechit"),
      E("Le <b>dépistage néonatal</b> est systématique. Traitement diététique : régime <b>pauvre en Phe</b>, aliments pauvres en protéines, mélanges d'AA sans Phe, pas d'aspartame, dès la naissance. Indispensable dans l'enfance, recommandé à vie, et <b>impératif</b> avant et pendant la grossesse, car la Phe est toxique pour le fœtus.", [LG("dépistage néonatal · régime pauvre en Phe (pas d'aspartame) · À VIE · impératif pendant la grossesse", "vert", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quel AA devient indispensable dans la phénylcétonurie ?", ["La tyrosine", "La phénylalanine", "La leucine", "La glycine"], "Elle n'est plus fabriquée à partir de la Phe."),
      qcm("a2", "Pourquoi le régime est-il impératif pendant la grossesse ?", ["La phénylalanine est toxique pour le fœtus", "Pour faire grossir le bébé", "Pour la vitamine B9", "Il ne l'est pas"], "Le régime est recommandé à vie.")
    ],
    revision: [
      qcm("r1", "Quel est le cofacteur de la phénylalanine hydroxylase ?", ["La BH4 (tétrahydrobioptérine)", "Le PLP", "La biotine", "Le NAD⁺"], "Elle utilise aussi l'O₂.")
    ]
  },
  {
    id: "bc-meta-proteines-14", fiche: F12, ficheTitre: F12T, titre: "La leucine et les AA ramifiés",
    classe: [
      E("La <b>leucine</b>, la valine et l'isoleucine : les <b>AA à chaîne ramifiée</b>, AACR ou BCAA, indispensables. Particularité : leur dégradation commence surtout dans le <b>muscle</b>, pas dans le foie.", [T("Les AA ramifiés"), LG("Leu, Val, Ile = AACR (BCAA) · dégradés surtout dans le MUSCLE", "bleu")]),
      E("Transamination, puis décarboxylation oxydative par un complexe proche de la pyruvate déshydrogénase, avec les mêmes coenzymes : TPP, lipoate, CoA, FAD, NAD⁺.", [LG("complexe proche de la PDH : TPP, lipoate, CoA, FAD, NAD⁺", "noir", { puce: "•" })]),
      E("La leucine est purement <b>cétoformatrice</b>. La valine est glucoformatrice ; l'isoleucine, les deux. Et la leucine <b>stimule la synthèse des protéines</b> musculaires, par la voie mTOR : d'où son intérêt chez la personne âgée.", [POST("Leucine : stimule la synthèse des protéines musculaires (mTOR) → intérêt chez la personne âgée", "astuce")]),
      E("La <b>leucinose</b>, ou maladie du sirop d'érable, à cause de l'odeur des urines : un déficit génétique de ce complexe. Les AACR et leurs α-cétoacides s'accumulent : acidose, troubles neurologiques. Traitement diététique à vie : régime pauvre en AA ramifiés.", [EFF(), T("La leucinose"), LG("« maladie du sirop d'érable » · AACR s'accumulent · régime pauvre en AA ramifiés À VIE", "rouge")], "content")
    ],
    questions: [
      qcm("a1", "Où commence surtout la dégradation des AA ramifiés ?", ["Dans le muscle", "Dans le foie", "Dans le rein", "Dans l'intestin"], "Contrairement à la plupart des AA."),
      qcm("a2", "Pourquoi la leucine intéresse-t-elle chez la personne âgée ?", ["Elle stimule la synthèse des protéines musculaires", "Elle fait baisser le cholestérol", "Elle protège les os", "Elle remplace la vitamine D"], "Par la voie mTOR.")
    ],
    revision: [
      qcm("r1", "Quel autre nom porte la leucinose ?", ["La maladie du sirop d'érable", "La phénylcétonurie", "La goutte", "La fructosémie"], "À cause de l'odeur des urines.")
    ]
  },
  {
    id: "bc-meta-proteines-15", fiche: F12, ficheTitre: F12T, titre: "Synthèse et dégradation des protéines",
    classe: [
      E("La <b>protéogenèse</b> utilise les 20 AA du pool, d'origine alimentaire ou recyclés. Ils entrent dans les cellules par des transporteurs ; dans le foie, aussi par le cycle du γ-glutamyl. Puis transcription, traduction, maturation, et exocytose pour les protéines exportées. Chaque étape consomme de l'ATP.", [T("La protéogenèse"), LG("transcription → traduction → maturation → exocytose · chaque étape consomme de l'ATP", "bleu")]),
      E("La <b>protéolyse</b> intracellulaire : deux voies. La voie <b>lysosomale</b> : la protéine est englobée dans un lysosome riche en protéases, les cathepsines. Surtout dans le foie.", [EFF(), T("La protéolyse"), LG("voie LYSOSOMALE : cathepsines · surtout le foie", "vert", { puce: "•" })]),
      E("La voie <b>ubiquitine-protéasome</b>, dans le cytosol, surtout dans le muscle : les protéines âgées ou mal repliées sont marquées par une chaîne d'<b>ubiquitine</b>, une étiquette, puis découpées par le <b>protéasome</b>. Elle consomme de l'ATP. C'est la voie activée dans la <b>fonte musculaire</b> : jeûne, cancer, sepsis.", [LG("UBIQUITINE-PROTÉASOME : muscle · étiquette ubiquitine · voie de la FONTE MUSCULAIRE", "rouge", { puce: "•" }), POST("Fonte musculaire (jeûne, cancer, sepsis) : voie ubiquitine-protéasome", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle voie de protéolyse est activée dans la fonte musculaire ?", ["La voie ubiquitine-protéasome", "La voie lysosomale", "La transamination", "Le cycle de l'urée"], "Jeûne, cancer, sepsis."),
      qcm("a2", "À quoi sert l'ubiquitine ?", ["À étiqueter les protéines à détruire", "À fabriquer l'urée", "À transporter l'azote", "À digérer les aliments"], "Le protéasome les découpe ensuite.")
    ],
    revision: [
      qcm("r1", "Quelles protéases agissent dans les lysosomes ?", ["Les cathepsines", "La trypsine", "La pepsine", "Les transaminases"], "Actives en milieu acide.")
    ]
  },
  {
    id: "bc-meta-proteines-16", fiche: F12, ficheTitre: F12T, titre: "Les hormones et les protéines",
    classe: [
      E("Qui règle l'équilibre entre synthèse et dégradation ?", [T("La régulation hormonale"), GRI(["Situation ou hormone", "Effet", "Mécanisme"], [
        ["Repas · insuline", "ANABOLIQUE", "AA dans les cellules, synthèse ↑, protéolyse ↓"],
        ["Jeûne (insuline basse)", "catabolique", "la protéolyse domine → néoglucogenèse"],
        ["Cortisol", "CATABOLIQUE", "protéolyse musculaire ↑ → fonte musculaire"],
        ["Hormone de croissance, testostérone", "anabolique", "synthèse ↑ (croissance, muscle)"],
        ["Adrénaline", "discuté", "plutôt protéolyse ?"]
      ], true)]),
      E("L'<b>insuline</b>, après un repas, est <b>anabolique</b> : elle fait entrer les AA dans les cellules, stimule la synthèse, surtout musculaire, et freine la protéolyse.", [MONTRE(1)]),
      E("Au <b>jeûne</b>, la protéolyse domine : les AA partent en néoglucogenèse. Le <b>cortisol</b> est <b>catabolique</b> : il stimule la protéolyse du muscle. D'où la fonte musculaire avec le stress ou les corticoïdes au long cours.", [MONTRE(2), MONTRE(3), POST("Insuline anabolique · cortisol catabolique (corticoïdes → fonte musculaire)", "cle")], "reflechit"),
      E("L'hormone de croissance et la testostérone sont anaboliques. L'adrénaline : son rôle est encore discuté.", [MONTRE(4), MONTRE(5)], "content")
    ],
    questions: [
      qcm("a1", "Quelle hormone est catabolique pour les protéines ?", ["Le cortisol", "L'insuline", "L'hormone de croissance", "La testostérone"], "Il stimule la protéolyse musculaire."),
      qcm("a2", "Quel est l'effet de l'insuline sur les protéines ?", ["Anabolique : synthèse ↑, protéolyse ↓", "Catabolique", "Aucun", "Elle détruit les AA"], "Surtout dans le muscle.")
    ],
    revision: [
      vf("r1", "Un traitement par corticoïdes au long cours peut entraîner une fonte musculaire.", true, "Vrai : le cortisol est catabolique.")
    ]
  },
  {
    id: "bc-meta-proteines-17", fiche: F12, ficheTitre: F12T, titre: "L'acide urique et la goutte",
    classe: [
      E("L'<b>uricogenèse</b> : la dégradation des bases puriques. Les acides nucléiques, des aliments et des cellules, perdent peu à peu leurs phosphates et leurs sucres. On arrive aux bases, adénine et guanine, puis à l'hypoxanthine et la xanthine, et enfin l'<b>acide urique</b>.", [T("L'acide urique"), EQ("ADN, ARN → nucléotides → bases puriques → hypoxanthine → xanthine → ACIDE URIQUE")]),
      E("Les 2 dernières étapes sont faites par la <b>xanthine oxydase</b>, une flavoprotéine à molybdène et fer. Elle est inhibée par l'<b>allopurinol</b>, le traitement de fond de la goutte.", [LG("XANTHINE OXYDASE · inhibée par l'ALLOPURINOL (traitement de fond de la goutte)", "bleu", { puce: "•" })]),
      E("L'homme n'a pas d'<b>uricase</b> : il ne dégrade pas l'acide urique plus loin. Dans le sang, il s'associe au sodium, et part surtout dans les urines.", [POST("Pas d'uricase chez l'homme : l'acide urique est le produit final", "piege")], "reflechit"),
      E("En excès, l'hyperuricémie : la <b>goutte</b>, des cristaux d'urate de sodium dans les articulations, avec des crises inflammatoires, et des calculs rénaux. Environ 20 % seulement vient des purines alimentaires ; le reste est fabriqué par le corps. À limiter : abats, certains poissons, fruits de mer, alcool, bière, fructose en excès.", [LG("GOUTTE : cristaux d'urate (articulations), calculs · ≈ 20 % d'origine alimentaire", "rouge", { puce: "•" }), POST("Purines → acide urique (xanthine oxydase) · allopurinol · goutte", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel médicament bloque la xanthine oxydase ?", ["L'allopurinol", "L'aspirine", "Les statines", "La warfarine"], "Traitement de fond de la goutte."),
      qcm("a2", "Quelle part de l'acide urique vient des purines alimentaires ?", ["Environ 20 %", "100 %", "Environ 80 %", "Aucune"], "Le reste est endogène.")
    ],
    revision: [
      vf("r1", "L'homme possède une uricase qui dégrade l'acide urique.", false, "Faux : l'acide urique est le produit final chez l'homme.")
    ]
  },

  /* ================= FICHE 13 ================= */
  {
    id: "bc-meta-proteines-18", fiche: F13, ficheTitre: F13T, titre: "Le voyage de l'azote dans la nature",
    classe: [
      E("L'air contient environ <b>78 % d'azote</b>, N₂, presque 4 fois plus que d'oxygène. Mais ses 2 atomes sont unis par une triple liaison très solide : ni l'homme, ni les animaux, ni les plantes ne peuvent l'utiliser directement.", [T("Le cycle de l'azote"), LG("N₂ de l'air (≈ 78 %) : triple liaison → INUTILISABLE tel quel", "rouge")]),
      E("Seules certaines <b>bactéries</b> le fixent et produisent de l'ammoniac. Les plus connues, les <b>Rhizobium</b>, vivent dans les nodosités des racines des <b>légumineuses</b>. Elles donnent l'azote à la plante, qui leur donne des glucides. D'où la richesse des légumineuses en protéines !", [EQ("N₂ → (Rhizobium, nodosités des légumineuses ; engrais) → NH₄⁺"), POST("Légumineuses riches en protéines grâce aux Rhizobium", "astuce")]),
      E("D'autres bactéries transforment l'ammonium en nitrites puis <b>nitrates</b> : la nitrification. Les plantes absorbent nitrates et ammonium et fabriquent des AA. Et l'homme reçoit son azote en mangeant des protéines.", [EQ("NH₄⁺ → (nitrification) → nitrates → plantes (AA) → animaux, homme (protéines)")]),
      E("Les déchets azotés, urée, cadavres, sont retransformés en ammonium par les bactéries du sol, avec l'uréase : l'ammonification. Et une partie repart dans l'air : la dénitrification. Le cycle est bouclé.", [LG("déchets → (ammonification, uréase) → NH₄⁺ · dénitrification → N₂", "noir", { puce: "•" })]),
      E("L'idée clé : l'homme dépend <b>entièrement</b> de l'azote de ses aliments, c'est-à-dire des protéines.", [POST("L'homme ne sait pas utiliser le N₂ de l'air : il dépend des protéines alimentaires", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi les légumineuses sont-elles riches en protéines ?", ["Des bactéries (Rhizobium) de leurs racines fixent l'azote de l'air", "Elles absorbent l'urée", "Elles fabriquent des AA à partir du CO₂ seul", "Elles sont cultivées avec de la viande"], "Symbiose avec les Rhizobium."),
      vf("a2", "L'homme peut utiliser directement l'azote de l'air.", false, "Faux : il dépend de l'azote des protéines alimentaires.")
    ],
    revision: [
      qcm("r1", "Comment s'appelle la transformation de l'ammonium en nitrates ?", ["La nitrification", "La dénitrification", "L'ammonification", "La fixation"], "Faite par des bactéries du sol.")
    ]
  },
  {
    id: "bc-meta-proteines-19", fiche: F13, ficheTitre: F13T, titre: "Ammoniac, urée, acide urique",
    classe: [
      E("Le déchet azoté dépend du <b>milieu de vie</b> de l'animal.", [T("Selon le milieu de vie"), GRI(["Déchet", "Animaux", "Pourquoi"], [["Ammoniac (ammoniotéliques)", "poissons, animaux aquatiques", "dilué dans l'eau"], ["Urée (uréotéliques)", "mammifères dont l'homme, amphibiens adultes", "non toxique, soluble"], ["Acide urique (uricotéliques)", "oiseaux, reptiles, insectes", "peu soluble, éliminé presque sans eau"]], true)]),
      E("Les poissons éliminent l'<b>ammoniac</b> directement : ils le diluent dans l'eau. Les mammifères, dont l'homme, éliminent l'<b>urée</b>. Les oiseaux, les reptiles, les insectes, en milieu sec, éliminent l'<b>acide urique</b>, presque sans eau.", [MONTRE(1), MONTRE(2), MONTRE(3), POST("Ammoniac (poissons) · urée (mammifères) · acide urique (oiseaux, reptiles)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Sous quelle forme l'homme élimine-t-il surtout son azote ?", ["L'urée", "L'ammoniac", "L'acide urique", "Le N₂"], "L'homme est uréotélique."),
      qcm("a2", "Pourquoi les oiseaux éliminent-ils de l'acide urique ?", ["Il est peu soluble et s'élimine presque sans eau", "Il est très toxique", "Ils n'ont pas de foie", "Ils mangent peu de protéines"], "Adaptation aux milieux secs.")
    ],
    revision: [
      paires("r1", "Relie chaque animal à son déchet azoté.", [["Poisson", "Ammoniac"], ["Homme", "Urée"], ["Oiseau", "Acide urique"]], "Selon le milieu de vie."),
      qcm("r2", "Quels animaux éliminent directement l'ammoniac ?", ["Les poissons", "Les mammifères", "Les oiseaux", "Les reptiles"], "Ils le diluent dans l'eau.")
    ]
  },
  {
    id: "bc-meta-proteines-20", fiche: F13, ficheTitre: F13T, titre: "L'ammoniémie",
    classe: [
      E("L'ammoniac, NH₃ : un azote, trois hydrogènes, et un doublet libre qui capte un H⁺. C'est une <b>base</b>. Au pH du sang, environ <b>98 %</b> est sous forme d'ion ammonium, NH₄⁺.", [T("L'ammoniac dans le sang"), EQ("NH₃ + H⁺ ⇌ NH₄⁺ · au pH du sang : ≈ 98 % de NH₄⁺")]),
      E("Il a un rôle utile : éliminer les acides par le rein. Mais en excès, il est toxique pour le cerveau. L'<b>ammoniémie</b> normale est en dessous de <b>50 µmol/L</b> chez l'adulte.", [LG("ammoniémie normale < 50 µmol/L", "bleu", { taille: "grand" })]),
      E("L'<b>hyperammoniémie</b> : confusion, troubles psychiatriques, léthargie, vomissements, puis coma. C'est une <b>urgence</b>. Causes : insuffisance hépatique, déficit du cycle de l'urée, certains médicaments comme l'acide valproïque, hémorragie digestive.", [LG("hyperammoniémie : confusion, léthargie, vomissements, coma → URGENCE", "rouge", { puce: "•" })], "reflechit"),
      E("Le prélèvement est délicat : sang veineux sans garrot prolongé, tube transporté dans la <b>glace</b> et analysé dans les 30 minutes, car l'ammoniac augmente dans le tube. Pas de tabac avant, et éviter l'hémolyse.", [POST("Ammoniémie : sans garrot prolongé, tube dans la GLACE, analysé en 30 min, pas de tabac", "piege")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi transporte-t-on le tube d'ammoniémie dans la glace ?", ["L'ammoniac augmente dans le tube à température ambiante", "Pour éviter la coagulation", "Pour conserver le glucose", "C'est une tradition"], "Analyse dans les 30 min."),
      qcm("a2", "Au pH du sang, sous quelle forme est surtout l'ammoniac ?", ["NH₄⁺ (≈ 98 %)", "NH₃ gazeux", "Urée", "Nitrate"], "NH₃ est une base qui capte un H⁺.")
    ],
    revision: [
      qcm("r1", "Quel médicament peut faire monter l'ammoniémie ?", ["L'acide valproïque", "Le paracétamol", "La vitamine C", "L'insuline"], "Un antiépileptique.")
    ]
  },
  {
    id: "bc-meta-proteines-21", fiche: F13, ficheTitre: F13T, titre: "L'urée et son dosage",
    classe: [
      E("L'<b>urée</b> : H₂N–CO–NH₂, un carbone relié à un oxygène et à deux groupes amine. 60 g par mole, et 2 azotes, environ 47 % de sa masse.", [T("L'urée"), EQ("Urée : H₂N–CO–NH₂ · 60 g/mol · 2 N (≈ 47 % de sa masse)")]),
      E("Incolore, inodore, <b>non toxique</b>, très soluble, elle diffuse librement à travers les membranes, et elle est diurétique. Anecdote : c'est la première molécule organique synthétisée au labo, par Wöhler, en 1828.", [LG("non toxique · très soluble · diffuse librement · DIURÉTIQUE", "vert", { puce: "•" })]),
      E("On la dose grâce à l'<b>uréase</b>, une enzyme des bactéries, absente chez l'homme : urée plus eau donnent 2 NH₃ plus CO₂, et on mesure le NH₃. C'est aussi la base du test respiratoire d'Helicobacter pylori.", [EQ("Uréase (bactérienne) : urée + H₂O → 2 NH₃ + CO₂")]),
      E("Urée du plasma : <b>2,5 à 7,5 mmol/L</b> chez l'adulte, plus basse chez l'enfant et la femme enceinte. Elle est filtrée par le rein, puis en partie réabsorbée.", [POST("Urée plasmatique : 2,5 à 7,5 mmol/L · dosée par l'uréase", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle est la valeur normale de l'urée plasmatique chez l'adulte ?", ["2,5 à 7,5 mmol/L", "< 50 µmol/L", "4 à 6 g/L", "0,1 mmol/L"], "Plus basse chez l'enfant et la femme enceinte."),
      qcm("a2", "Quelle enzyme sert à doser l'urée ?", ["L'uréase", "L'arginase", "La glutaminase", "L'ALAT"], "Enzyme bactérienne, absente chez l'homme.")
    ],
    revision: [
      vf("r1", "L'urée est diurétique.", true, "Vrai : elle attire l'eau dans l'urine.")
    ]
  },
  {
    id: "bc-meta-proteines-22", fiche: F13, ficheTitre: F13T, titre: "Interpréter l'urée",
    classe: [
      E("La quantité d'urée produite reflète directement les <b>apports en protéines</b> et l'intensité du catabolisme.", [T("Interpréter l'urée"), LG("urée = reflet des APPORTS PROTÉIQUES et du catabolisme", "bleu")]),
      E("L'urée urinaire des 24 heures permet d'estimer les apports en protéines d'un patient stable : la formule de <b>Maroni</b>. Utile pour vérifier qu'un régime contrôlé en protéines est suivi, dans la maladie rénale chronique.", [EQ("Maroni : protéines (g/j) ≈ 6,25 × [azote uréique urinaire (g/24 h) + 0,031 × poids (kg)]"), POST("Formule de Maroni : estimer les apports protéiques (observance en maladie rénale)", "astuce")]),
      E("Urée sanguine <b>élevée</b> : apports protéiques élevés, catabolisme, fièvre, brûlures, corticoïdes, hémorragie digestive, déshydratation, insuffisance rénale. Urée <b>basse</b> : faibles apports, dénutrition, insuffisance hépatique sévère, grossesse, hyperhydratation.", [GRI(["Urée sanguine", "Causes"], [["Élevée", "protéines ↑, catabolisme, hémorragie digestive, déshydratation, insuffisance rénale"], ["Basse", "faibles apports, dénutrition, insuffisance hépatique, grossesse, hyperhydratation"]], true)]),
      E("Attention : seule, l'urée ne mesure pas la fonction rénale. Pour ça, on utilise la <b>créatinine</b> et le DFG.", [POST("Fonction rénale : créatinine et DFG, pas l'urée seule", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "À quoi sert la formule de Maroni ?", ["Estimer les apports en protéines à partir de l'urée urinaire", "Calculer l'IMC", "Mesurer la fonction du foie", "Doser l'ammoniac"], "Utile en maladie rénale chronique."),
      qcm("a2", "Que mesure-t-on pour évaluer la fonction rénale ?", ["La créatinine et le DFG", "L'urée seule", "L'ammoniémie", "L'ALAT"], "L'urée seule ne suffit pas.")
    ],
    revision: [
      qcm("r1", "Laquelle de ces situations fait baisser l'urée sanguine ?", ["Une dénutrition", "Une déshydratation", "Une hémorragie digestive", "Un régime hyperprotéiné"], "Aussi insuffisance hépatique sévère."),
      vf("r2", "Une déshydratation peut faire monter l'urée sanguine.", true, "Vrai, comme un catabolisme ou une insuffisance rénale.")
    ]
  },
  {
    id: "bc-meta-proteines-23", fiche: F13, ficheTitre: F13T, titre: "Régulation de l'uréogenèse",
    classe: [
      E("Rappel : le cycle de l'urée s'appelle aussi cycle de <b>Krebs-Henseleit</b>, décrit en 1932. L'ornithine est régénérée à chaque tour. Sans <b>NAG</b>, la CPS I est presque inactive.", [T("Qui accélère, qui freine ?"), GRI(["Situation", "Uréogenèse", "Pourquoi"], [
        ["Repas riche en protéines", "↑", "glutamate → NAG ⊕ CPS I ; puis plus d'enzymes"],
        ["Glucagon", "↑", "entrée des AA dans le foie, néoglucogenèse"],
        ["Cortisol (stress)", "↑", "protéolyse musculaire"],
        ["Catabolisme (infection, brûlures)", "↑", "plus d'azote à éliminer"],
        ["Insuline (repas mixte)", "↓", "favorise la synthèse des protéines"],
        ["Jeûne prolongé", "↑ puis ↓", "le cerveau passe aux corps cétoniques → muscle épargné"],
        ["Acidose", "↓", "glutamine laissée au rein"]
      ], true)]),
      E("Ce qui accélère : un repas riche en protéines, via le NAG, le glucagon, le cortisol, le catabolisme. Ce qui freine : l'insuline, qui favorise la synthèse des protéines, et l'acidose.", [MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4), MONTRE(5), MONTRE(7)]),
      E("Le <b>jeûne prolongé</b> est subtil : au début, l'uréogenèse monte, car on fait du glucose avec les AA. Puis le cerveau utilise les corps cétoniques : le muscle est <b>épargné</b> et l'urée diminue.", [MONTRE(6), POST("Uréogenèse ↑ : NAG, glucagon, cortisol, catabolisme · ↓ : insuline, jeûne prolongé (épargne), acidose", "cle")], "reflechit")
    ],
    questions: [
      qcm("a1", "Pourquoi l'uréogenèse diminue-t-elle lors d'un jeûne prolongé ?", ["Le cerveau utilise les corps cétoniques : le muscle est épargné", "Le foie s'arrête", "L'urée devient toxique", "L'insuline augmente"], "Après une hausse au début."),
      qcm("a2", "Quelle hormone diminue l'uréogenèse ?", ["L'insuline", "Le glucagon", "Le cortisol", "L'adrénaline"], "Elle favorise la synthèse des protéines.")
    ],
    revision: [
      qcm("r1", "Comment un repas riche en protéines accélère-t-il le cycle de l'urée ?", ["Plus de glutamate → plus de NAG, qui active la CPS I", "En bloquant l'arginase", "En augmentant l'insuline seulement", "En acidifiant le sang"], "Puis plus d'enzymes en quelques jours."),
      qcm("r2", "Quel est l'effet du glucagon sur l'uréogenèse ?", ["Il l'augmente", "Il la diminue", "Il l'arrête", "Aucun"], "Entrée des AA dans le foie, néoglucogenèse.")
    ]
  },
  {
    id: "bc-meta-proteines-24", fiche: F13, ficheTitre: F13T, titre: "L'arginine",
    classe: [
      E("L'<b>arginine</b> est formée dans le cycle de l'urée, mais aussitôt coupée par l'arginase du foie. Le foie n'en fournit donc pas au reste du corps.", [T("L'arginine"), LG("formée dans le cycle, mais coupée aussitôt → le FOIE n'en fournit pas", "noir")]),
      E("L'organisme la fabrique surtout par l'axe <b>intestin-rein</b> : l'intestin produit de la citrulline à partir de la glutamine, et le rein la transforme en arginine.", [EQ("intestin : glutamine → citrulline → rein : → ARGININE")]),
      E("Elle est indispensable seulement dans certaines conditions : croissance, prématuré, stress métabolique, déficits du cycle de l'urée. Non indispensable chez l'adulte en bonne santé.", [LG("indispensable SOUS CONDITIONS (croissance, prématuré, stress, déficits du cycle)", "bleu", { puce: "•" })], "reflechit"),
      E("Ses rôles : elle active la NAG synthase, donc le cycle de l'urée. Elle est le précurseur du <b>monoxyde d'azote</b>, NO, qui dilate les vaisseaux ; de la <b>créatine</b> ; et des polyamines. Sources : viandes, poissons, laitages, oléagineux, légumineuses.", [GRI(["Rôle", "Détail"], [["Active la NAG synthase", "→ cycle de l'urée"], ["Monoxyde d'azote (NO)", "vasodilatation"], ["Créatine", "réserve d'énergie du muscle"], ["Polyamines", "—"]], true), POST("Arginine : active la NAGS · axe intestin-rein · NO, créatine", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel organe fabrique l'arginine pour le reste du corps ?", ["Le rein, à partir de la citrulline de l'intestin", "Le foie", "Le muscle", "Le pancréas"], "Le foie coupe aussitôt la sienne."),
      qcm("a2", "De quelle molécule vasodilatatrice l'arginine est-elle le précurseur ?", ["Le monoxyde d'azote (NO)", "L'histamine", "La sérotonine", "L'urée"], "Aussi de la créatine.")
    ],
    revision: [
      vf("r1", "L'arginine est indispensable chez l'adulte en bonne santé.", false, "Faux : seulement dans certaines conditions (croissance, prématuré, stress, déficits du cycle).")
    ]
  },
  {
    id: "bc-meta-proteines-25", fiche: F13, ficheTitre: F13T, titre: "Les déficits du cycle de l'urée",
    classe: [
      E("Les <b>déficits du cycle de l'urée</b> : des maladies génétiques rares, environ 1 naissance sur 35 000 en tout. Plus le blocage est au début du cycle, plus l'hyperammoniémie est grave.", [T("Les déficits du cycle"), GRI(["Déficit", "Étape", "Particularités"], [
        ["NAGS", "pas d'activateur", "bien traité par l'acide carglumique"],
        ["CPS I", "1re", "parmi les plus graves, dès les 1ers jours"],
        ["OTC", "2e", "le PLUS FRÉQUENT · lié à l'X · acide orotique urinaire ↑"],
        ["Argininosuccinate synthétase", "3e", "citrulline très élevée"],
        ["Argininosuccinate lyase", "4e", "atteinte du foie possible"],
        ["Arginase", "5e", "le plus modéré : raideur des jambes · pas d'arginine"]
      ], true)]),
      E("Le plus <b>fréquent</b> : le déficit en <b>OTC</b>. Il est transmis par le chromosome X : les garçons sont gravement atteints, les femmes parfois. On trouve de l'acide orotique dans l'urine.", [MONTRE(3), POST("Déficit en OTC : le plus fréquent, lié à l'X", "cle")]),
      E("Les plus graves : CPS I, et NAGS, qui se traite bien avec l'acide carglumique, un analogue du NAG. Le plus modéré : l'arginase, avec surtout une raideur des jambes ; pas de supplément d'arginine.", [MONTRE(1), MONTRE(2), MONTRE(4), MONTRE(5), MONTRE(6)]),
      E("La forme du nouveau-né : un bébé normal à la naissance, puis refus de boire, vomissements, somnolence, coma, dès les premiers jours, quand le lait commence. Les formes tardives : troubles digestifs, refus spontané de la viande, troubles du comportement, crises déclenchées par une infection, un jeûne, un repas très protéiné.", [EFF(), T("Repérer"), LG("nouveau-né : refus de boire, vomissements, somnolence, coma dès le lait", "rouge", { puce: "•" }), LG("formes tardives : refus de la viande, troubles du comportement, crises", "rouge", { puce: "•" })], "reflechit")
    ],
    questions: [
      qcm("a1", "Quel est le déficit du cycle de l'urée le plus fréquent ?", ["Le déficit en OTC", "Le déficit en arginase", "Le déficit en CPS I", "Le déficit en NAGS"], "Transmis par le chromosome X."),
      qcm("a2", "Quel signe peut évoquer une forme tardive de déficit du cycle de l'urée ?", ["Un refus spontané de la viande", "Une envie de sucre", "Une perte de cheveux", "Une peau jaune uniquement"], "Aussi troubles du comportement, crises lors d'infections.")
    ],
    revision: [
      qcm("r1", "Quel déficit se traite bien par l'acide carglumique ?", ["Le déficit en NAGS", "Le déficit en OTC", "Le déficit en arginase", "La phénylcétonurie"], "C'est un analogue du NAG.")
    ]
  },
  {
    id: "bc-meta-proteines-26", fiche: F13, ficheTitre: F13T, titre: "Traiter les déficits du cycle",
    classe: [
      E("Le diagnostic : ammoniémie, AA du plasma, citrulline, arginine, glutamine, acide orotique urinaire, puis test génétique.", [T("Traiter les déficits du cycle"), LG("diagnostic : ammoniémie, AA plasmatiques, acide orotique, génétique", "noir")]),
      E("En <b>urgence</b> : arrêt des protéines, 24 à 48 heures au plus ; un apport énergétique élevé, glucose et lipides, pour <b>stopper le catabolisme</b> ; des médicaments qui éliminent l'azote par une autre voie, benzoate, phénylbutyrate ; dialyse si besoin.", [GRI(["Urgence", "Pourquoi"], [["Arrêt des protéines (24-48 h max)", "moins d'azote à éliminer"], ["Apport énergétique élevé", "STOPPER le catabolisme"], ["Benzoate, phénylbutyrate", "éliminer l'azote autrement"], ["Dialyse", "si besoin"]], true)]),
      E("Pourquoi beaucoup d'énergie ? Parce que si le corps manque d'énergie, il détruit ses protéines, et produit encore plus d'ammoniac.", [POST("Urgence : beaucoup d'énergie (glucose, lipides) pour stopper le catabolisme", "piege")], "reflechit"),
      E("Au long cours : régime <b>contrôlé en protéines à vie</b>, assez pour grandir, pas plus, avec des mélanges d'AA indispensables. Supplément d'arginine ou de citrulline, sauf déficit en arginase. Un <b>plan d'urgence</b> en cas de maladie. Et parfois une greffe de foie dans les formes sévères.", [LG("LONG COURS : régime contrôlé en protéines à vie + AA indispensables + arginine/citrulline + plan d'urgence", "vert"), POST("Déficits du cycle : régime contrôlé en protéines à vie", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi donne-t-on beaucoup d'énergie en urgence ?", ["Pour stopper le catabolisme qui produit de l'ammoniac", "Pour faire grossir le patient", "Pour augmenter l'urée", "Pour remplacer les vitamines"], "Glucose et lipides."),
      qcm("a2", "Combien de temps au plus arrête-t-on les protéines en urgence ?", ["24 à 48 heures", "1 semaine", "1 mois", "À vie"], "Ensuite régime contrôlé.")
    ],
    revision: [
      vf("r1", "On donne un supplément d'arginine dans le déficit en arginase.", false, "Faux : c'est l'exception ; on en donne dans les autres déficits.")
    ]
  },
  {
    id: "bc-meta-proteines-27", fiche: F13, ficheTitre: F13T, titre: "Les repères d'apports en protéines",
    classe: [
      E("Les repères d'apports en protéines. Rappel : 20 AA, dont 9 indispensables, et l'intérêt d'associer céréales et légumineuses.", [T("Repères d'apports"), GRI(["Situation", "Apport en protéines"], [
        ["Adulte en bonne santé", "0,83 g/kg/j (ANSES) · 10 à 20 % de l'énergie"],
        ["Personne âgée", "≈ 1 g/kg/j (1,2 à 1,5 si dénutrition)"],
        ["Sportif", "≈ 1,2 à 2 g/kg/j"],
        ["Apports élevés", "au-delà de ≈ 2,2 g/kg/j"],
        ["Maladie rénale chronique (non dialysée)", "contrôlés : ≈ 0,6 à 0,8 g/kg/j"],
        ["Dialyse", "besoins augmentés"]
      ], true)]),
      E("L'adulte en bonne santé : <b>0,83 g par kg et par jour</b>, selon l'ANSES, soit 10 à 20 % de l'énergie.", [MONTRE(1), POST("Adulte : 0,83 g/kg/j · âgé ≈ 1 · sportif 1,2-2 · > 2,2 = élevé", "cle")]),
      E("La personne âgée : environ 1 g par kg, et 1,2 à 1,5 en cas de dénutrition. Le sportif : 1,2 à 2 g. Au-delà de 2,2 g, on parle d'apports élevés, de régime hyperprotéiné ; l'ANSES n'a pas pu fixer de limite supérieure de sécurité.", [MONTRE(2), MONTRE(3), MONTRE(4)]),
      E("La maladie rénale chronique non dialysée : des apports <b>contrôlés</b>, 0,6 à 0,8 g selon le stade. Mais en <b>dialyse</b>, les besoins augmentent : attention au piège.", [MONTRE(5), MONTRE(6), POST("Maladie rénale : contrôlés (0,6-0,8) · en DIALYSE : besoins AUGMENTÉS", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Quelle est la référence nutritionnelle en protéines pour un adulte en bonne santé ?", ["0,83 g/kg/j", "2,2 g/kg/j", "0,3 g/kg/j", "5 g/kg/j"], "Selon l'ANSES."),
      qcm("a2", "Que deviennent les besoins en protéines en dialyse ?", ["Ils augmentent", "Ils diminuent fortement", "Ils sont nuls", "Ils ne changent pas"], "Contrairement à la maladie rénale non dialysée.")
    ],
    revision: [
      qcm("r1", "Quel apport en protéines conseille-t-on chez la personne âgée ?", ["Environ 1 g/kg/j (plus si dénutrition)", "0,5 g/kg/j", "3 g/kg/j", "Aucun"], "1,2 à 1,5 en cas de dénutrition."),
      qcm("r2", "Au-delà de quel apport parle-t-on d'apports élevés en protéines ?", ["≈ 2,2 g/kg/j", "≈ 0,83 g/kg/j", "≈ 1 g/kg/j", "≈ 0,6 g/kg/j"], "Régime hyperprotéiné.")
    ]
  },
  {
    id: "bc-meta-proteines-28", fiche: F13, ficheTitre: F13T, titre: "Les régimes hyperprotéinés",
    classe: [
      E("Ce qui se passe avec beaucoup de protéines : plus d'AA désaminés, donc plus d'<b>urée</b> à fabriquer et à éliminer. L'urée monte dans le sang et les urines, la diurèse augmente : il faut bien s'<b>hydrater</b>.", [T("Les régimes hyperprotéinés"), LG("+ de protéines → + d'urée → diurèse ↑ → bien s'HYDRATER", "bleu")]),
      E("Le rein s'adapte en filtrant plus : l'hyperfiltration. Sans danger démontré chez la personne en bonne santé, mais à éviter en cas de maladie du rein ou du foie.", [LG("hyperfiltration rénale · à éviter si maladie rénale ou hépatique", "rouge", { puce: "•" })]),
      E("Les protéines sont les nutriments les plus <b>rassasiants</b>, et ceux qui coûtent le plus d'énergie à transformer. Leur transformation en graisses est faible. Un régime riche en protéines ne fait grossir que si l'apport total dépasse les besoins.", [POST("Protéines : les plus rassasiantes · ne font grossir que si l'apport TOTAL dépasse les besoins", "astuce")]),
      E("Les régimes <b>Atkins</b> et <b>Dukan</b> : perte de poids rapide au début, surtout de l'eau et du glycogène. Le Dukan : attaque, protéines seules ; croisière, alternance ; consolidation ; puis stabilisation à vie.", [EFF(), T("Atkins, Dukan"), LG("perte rapide au début = surtout EAU et GLYCOGÈNE", "noir")]),
      E("Les risques : manque de fibres, de vitamines, de minéraux ; constipation, fatigue, malaises ; perte de masse maigre ; <b>effet yo-yo</b> ; mauvaises habitudes. À déconseiller. Mieux vaut une alimentation variée et une activité physique régulière.", [LG("risques : fibres ↓, constipation, fatigue, masse maigre ↓, EFFET YO-YO", "rouge", { puce: "•" }), POST("Dukan, Atkins : à déconseiller · préférer alimentation variée + activité physique", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi faut-il bien s'hydrater avec un régime riche en protéines ?", ["Il faut éliminer plus d'urée, ce qui augmente la diurèse", "Les protéines sont salées", "Pour digérer plus vite", "Ce n'est pas nécessaire"], "L'urée est diurétique."),
      qcm("a2", "D'où vient la perte de poids rapide au début d'un régime Dukan ?", ["Surtout de l'eau et du glycogène", "Surtout de la graisse", "Surtout des os", "Des protéines du sang"], "D'où l'effet yo-yo fréquent.")
    ],
    revision: [
      vf("r1", "Un régime riche en protéines fait grossir même si l'apport énergétique total est inférieur aux besoins.", false, "Faux : il ne fait grossir que si l'apport total dépasse les besoins.")
    ]
  },

  /* ================= FICHE 14 ================= */
  {
    id: "bc-meta-proteines-29", fiche: F14, ficheTitre: F14T, titre: "NH₃ ou NH₄⁺ ?",
    classe: [
      E("NH₃ est une base : NH₃ plus H⁺ donne NH₄⁺, l'ion <b>ammonium</b>, avec un pK d'environ 9,2. Au pH du sang, environ 98 % est sous forme NH₄⁺ ; dans une urine acide, presque tout.", [T("NH₃ ou NH₄⁺ : une question de pH"), EQ("NH₃ + H⁺ ⇌ NH₄⁺ (pK ≈ 9,2)")]),
      E("La différence capitale : <b>NH₃</b>, neutre, <b>traverse</b> facilement les membranes, dont celle du cerveau. <b>NH₄⁺</b>, chargé, ne passe que par des transporteurs : il peut être <b>piégé</b> d'un côté d'une membrane.", [LG("NH₃ (neutre) : TRAVERSE les membranes (cerveau)", "rouge", { puce: "•" }), LG("NH₄⁺ (chargé) : transporteurs seulement → peut être PIÉGÉ", "bleu", { puce: "•" }), POST("NH₃ traverse, NH₄⁺ est piégé", "cle")], "reflechit"),
      E("Origines : surtout l'intestin, avec la glutaminase et les bactéries, puis le rein et le muscle à l'effort. Le foie le détoxifie : il en consomme bien plus qu'il n'en libère. Dans le sang, il voyage en glutamine et alanine, pas en glutamate.", [LG("produit : intestin, rein, muscle · détoxifié : FOIE · transport : glutamine, alanine", "noir", { puce: "•" })]),
      E("Piège de vocabulaire : l'<b>ammoniac</b>, NH₃, est un gaz, à l'odeur piquante, irritant. L'<b>ammoniaque</b>, c'est sa solution dans l'eau, alcaline, utilisée pour le ménage. Dans le corps, l'ammoniac est une source d'azote, un substrat, pas un catalyseur.", [EFF(), T("Ammoniac ≠ ammoniaque"), GRI(["", "Ammoniac", "Ammoniaque"], [["Quoi ?", "NH₃, gaz incolore, odeur piquante, irritant", "solution de NH₃ dans l'eau, alcaline"], ["Usage", "engrais, réfrigération", "nettoyage"]], true), POST("Ammoniac (gaz NH₃) ≠ ammoniaque (solution)", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Pourquoi le NH₄⁺ peut-il être piégé d'un côté d'une membrane ?", ["Il est chargé et ne passe que par des transporteurs", "Il est trop gros", "Il est insoluble", "Il est neutre"], "NH₃, neutre, traverse facilement."),
      qcm("a2", "Qu'est-ce que l'ammoniaque ?", ["Une solution de NH₃ dans l'eau", "Le gaz NH₃", "L'ion NH₄⁺ dans le sang", "L'urée"], "Utilisée pour le nettoyage.")
    ],
    revision: [
      qcm("r1", "Quel organe détoxifie l'ammoniac ?", ["Le foie", "L'intestin", "Le muscle", "Le poumon"], "Il en consomme plus qu'il n'en libère."),
      qcm("r2", "Quel est le pK du couple NH₃ / NH₄⁺ ?", ["≈ 9,2", "≈ 7,4", "≈ 2", "≈ 4,8"], "D'où ≈ 98 % de NH₄⁺ au pH du sang.")
    ]
  },
  {
    id: "bc-meta-proteines-30", fiche: F14, ficheTitre: F14T, titre: "L'ammoniogenèse rénale",
    classe: [
      E("L'<b>ammoniogenèse</b> : la production d'ammoniac par les cellules des <b>tubules rénaux</b>, surtout proximaux, à partir de la <b>glutamine</b> du sang. À ne pas confondre avec l'ammoniac produit partout lors du catabolisme des AA.", [T("L'ammoniogenèse rénale"), LG("REIN (tubule proximal) · à partir de la GLUTAMINE", "bleu")]),
      E("Une glutamine donne <b>2 NH₄⁺</b>, par la glutaminase puis la GDH, et un α-cétoglutarate. Celui-ci, par la néoglucogenèse rénale ou l'oxydation, fournit <b>2 bicarbonates</b>, renvoyés dans le sang.", [EQ("glutamine → (glutaminase) → glutamate + NH₄⁺ → (GDH) → α-KG + NH₄⁺"), EQ("α-KG → glucose ou CO₂ + 2 HCO₃⁻ → sang")]),
      E("Le NH₄⁺ suit ensuite un trajet le long du néphron. Un : produit dans le tubule proximal. Deux : réabsorbé dans l'anse de Henle. Trois : il s'accumule dans la profondeur du rein, la médullaire.", [EFF(), T("Le trajet le long du néphron"), RANG([
        { titre: "1 · Tubule proximal", x: "production à partir de la glutamine", c: "bleu" },
        { titre: "2 · Anse de Henle", x: "NH₄⁺ réabsorbé", c: "noir" },
        { titre: "3 · Médullaire", x: "NH₃ / NH₄⁺ très concentrés", c: "noir" },
        { titre: "4 · Canal collecteur", x: "NH₃ + H⁺ → NH₄⁺, piégé dans l'urine", c: "vert" }
      ])]),
      E("Quatre : dans le canal collecteur, le NH₃ traverse la cellule, se combine à un H⁺ sécrété et redevient NH₄⁺, chargé, qui ne peut plus ressortir : il est <b>piégé dans l'urine</b>.", [MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4), POST("Glutamine → 2 NH₄⁺ + 2 HCO₃⁻ · NH₄⁺ piégé dans l'urine (canal collecteur)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien de NH₄⁺ donne une glutamine dans le rein ?", ["2", "1", "4", "0"], "Et 2 bicarbonates."),
      qcm("a2", "Où le NH₄⁺ est-il piégé dans l'urine ?", ["Dans le canal collecteur", "Dans le glomérule", "Dans le foie", "Dans la vessie"], "NH₃ + H⁺ → NH₄⁺, qui ne ressort plus.")
    ],
    revision: [
      qcm("r1", "Où a lieu surtout l'ammoniogenèse ?", ["Dans les tubules rénaux proximaux", "Dans le foie", "Dans le muscle", "Dans l'intestin"], "À partir de la glutamine."),
      qcm("r2", "Que donne une glutamine dans le tubule rénal ?", ["2 NH₄⁺ et un α-cétoglutarate (→ 2 HCO₃⁻)", "1 urée", "2 glucoses", "1 NH₄⁺ et 1 urée"], "Glutaminase puis GDH.")
    ]
  },
  {
    id: "bc-meta-proteines-31", fiche: F14, ficheTitre: F14T, titre: "L'ammonium et le pH",
    classe: [
      E("Le pH du sang est maintenu entre <b>7,35 et 7,45</b> par 3 systèmes : les tampons du sang, en secondes ; les poumons, en minutes ; et les reins, en heures à jours.", [T("Le vrai rôle de l'ammonium"), GRI(["Système", "Délai"], [["Tampons du sang (bicarbonate, protéines, phosphates)", "secondes"], ["Poumons (CO₂)", "minutes"], ["Reins", "heures à jours"]], true)]),
      E("Piège : l'ammoniac n'est <b>pas un tampon du sang</b>. Il y est en quantité infime, et son pK, 9,2, est trop loin de 7,4.", [POST("L'ammoniac n'est PAS un tampon du sang : son rôle acido-basique est RÉNAL", "piege")], "pointe"),
      E("Son rôle est <b>rénal</b> : excréter du NH₄⁺, c'est la principale façon d'éliminer les acides non volatils, tout en régénérant des bicarbonates. La règle : <b>1 NH₄⁺ excrété égale 1 HCO₃⁻ gagné</b> par le sang.", [EQ("1 NH₄⁺ excrété = 1 HCO₃⁻ gagné par le sang")]),
      E("Mais attention : si le NH₄⁺ repart vers le foie pour faire de l'urée, la synthèse d'urée consomme le bicarbonate formé. Aucun gain.", [LG("NH₄⁺ → foie → urée : le bicarbonate est consommé → AUCUN gain", "rouge", { puce: "•" })], "reflechit"),
      E("Ce qui stimule l'ammoniogenèse : l'<b>acidose</b>, qui peut la multiplier par 5 à 10 ; un apport d'acides, comme une alimentation riche en protéines animales ; l'hypokaliémie ; l'aldostérone. Ce qui la freine : l'alcalose, l'hyperkaliémie, le manque d'aldostérone, l'<b>insuffisance rénale</b>, qui donne une acidose.", [EFF(), T("Facteurs"), LG("↑ : ACIDOSE (× 5 à 10), protéines animales, hypokaliémie, aldostérone", "vert", { puce: "•" }), LG("↓ : alcalose, hyperkaliémie, insuffisance rénale (→ acidose)", "rouge", { puce: "•" }), POST("Ammoniogenèse ↑ en acidose · ↓ en insuffisance rénale", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Que gagne le sang pour chaque NH₄⁺ excrété dans l'urine ?", ["Un bicarbonate (HCO₃⁻)", "Un glucose", "Un H⁺", "Une urée"], "C'est le rôle acido-basique du rein."),
      vf("a2", "L'ammoniac est un tampon important du sang.", false, "Faux : quantité infime et pK trop loin de 7,4 ; son rôle est rénal.")
    ],
    revision: [
      qcm("r1", "Comment évolue l'ammoniogenèse en cas d'acidose ?", ["Elle augmente fortement (× 5 à 10)", "Elle s'arrête", "Elle diminue", "Elle ne change pas"], "Le foie fait alors moins d'urée."),
      qcm("r2", "Pourquoi l'insuffisance rénale chronique donne-t-elle une acidose ?", ["Le rein ne fabrique plus assez de NH₄⁺", "Le foie fait trop d'urée", "Les poumons s'arrêtent", "Le sang contient trop de bicarbonate"], "Moins de néphrons."),
      qcm("r3", "Que vaut 1 NH₄⁺ excrété dans l'urine pour le sang ?", ["1 HCO₃⁻ gagné", "1 H⁺ gagné", "1 urée perdue", "Rien"], "Sauf s'il repart au foie faire de l'urée."), qcm("r4", "Quel trouble du potassium stimule l'ammoniogenèse ?", ["L'hypokaliémie", "L'hyperkaliémie", "Aucun", "Les deux"], "Elle peut aggraver une encéphalopathie hépatique.")
    ]
  },
  {
    id: "bc-meta-proteines-32", fiche: F14, ficheTitre: F14T, titre: "Doser l'ammoniémie",
    classe: [
      E("L'<b>ammoniémie</b> : la concentration d'ammoniac, NH₃ plus NH₄⁺, dans le sang. Valeurs usuelles : sang veineux, 10 à 35 µmol/L ; artériel, 15 à 50. Seuil retenu chez l'adulte : moins de <b>50 µmol/L</b>. Plus élevée chez le nouveau-né.", [T("Doser l'ammoniémie"), LG("seuil adulte < 50 µmol/L · veineux ≈ 10-35 · artériel ≈ 15-50", "bleu")]),
      E("Conversion : 1 µmol/L égale environ 1,7 µg/dL.", [EQ("1 µmol/L ≈ 1,7 µg/dL ≈ 0,017 mg/L")]),
      E("Prélèvement veineux au pli du coude, de préférence à jeun, ou artériel. Précautions strictes : pas de garrot prolongé, tube dans la glace, analyse rapide.", [LG("précautions : pas de garrot prolongé, glace, analyse rapide", "noir", { puce: "•" })]),
      E("Indications : suspicion d'insuffisance hépatique ; confusion, troubles du comportement, coma inexpliqués ; suivi d'une encéphalopathie hépatique ; nouveau-né irritable, qui vomit, refuse de boire ou somnole. Et retiens : le résultat montre un excès, <b>pas sa cause</b>.", [POST("L'ammoniémie montre un excès, pas sa cause", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le seuil d'ammoniémie retenu chez l'adulte ?", ["< 50 µmol/L", "< 5 mmol/L", "< 7,5 mmol/L", "< 1 g/L"], "Plus élevé chez le nouveau-né."),
      qcm("a2", "Que montre un résultat d'ammoniémie élevé ?", ["Un excès d'ammoniac, mais pas sa cause", "Toujours une cirrhose", "Toujours un déficit génétique", "Une déshydratation"], "Il faut chercher la cause.")
    ],
    revision: [
      qcm("r1", "Chez quel nouveau-né peut-on demander une ammoniémie ?", ["Un bébé qui vomit, refuse de boire et somnole", "Un bébé qui grossit bien", "Un bébé qui pleure le soir", "Tous systématiquement"], "Suspicion de déficit du cycle de l'urée.")
    ]
  },
  {
    id: "bc-meta-proteines-33", fiche: F14, ficheTitre: F14T, titre: "Pourquoi l'excès est toxique",
    classe: [
      E("Le <b>NH₃</b> traverse la barrière du cerveau. Les <b>astrocytes</b>, les cellules de soutien des neurones, le fixent sur le glutamate : ça donne de la <b>glutamine</b>, qui s'accumule et attire l'eau : <b>œdème cérébral</b>.", [T("La neurotoxicité de l'ammoniac"), EQ("NH₃ → astrocytes : Glu + NH₃ → GLUTAMINE ↑ → attire l'eau → ŒDÈME CÉRÉBRAL")]),
      E("L'excès perturbe aussi le potentiel des neurones, le pH, l'énergie, car il détourne l'α-cétoglutarate du cycle de Krebs, et les neuromédiateurs. Signes : confusion, troubles psychiatriques, somnolence, convulsions, coma.", [LG("perturbe : neurones, pH, énergie (α-KG détourné de Krebs), neuromédiateurs", "rouge", { puce: "•" }), POST("Neurotoxicité : glutamine dans les astrocytes → œdème cérébral", "cle")], "reflechit"),
      E("Les causes d'hyperammoniémie.", [EFF(), T("Les causes"), GRI(["Cause", "Exemples"], [
        ["Foie", "cirrhose, hépatite grave, amanite phalloïde, insuffisance cardiaque, shunt"],
        ["Génétique", "déficits du cycle de l'urée"],
        ["Production accrue", "hémorragie digestive, constipation, effort intense, hypokaliémie, infection urinaire"],
        ["Médicaments", "acide valproïque, certaines chimiothérapies"],
        ["Syndrome de Reye", "enfant, après une infection virale · lié à l'ASPIRINE"],
        ["Faux résultats", "garrot, effort du bras, tabac, hémolyse, analyse tardive"]
      ], true)]),
      E("Le <b>syndrome de Reye</b> : rare et grave, chez l'enfant ou l'ado, pendant ou après une infection virale, grippe, varicelle. Il touche le foie et le cerveau. Il est associé à la prise d'<b>aspirine</b> : d'où l'aspirine déconseillée chez l'enfant.", [MONTRE(5), POST("Syndrome de Reye : aspirine déconseillée chez l'enfant", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Pourquoi l'ammoniac provoque-t-il un œdème cérébral ?", ["La glutamine formée dans les astrocytes attire l'eau", "Il bouche les vaisseaux", "Il détruit les os du crâne", "Il augmente la glycémie"], "Les astrocytes fixent le NH₃ sur le glutamate."),
      qcm("a2", "Pourquoi déconseille-t-on l'aspirine chez l'enfant ?", ["Risque de syndrome de Reye", "Risque de goutte", "Risque de phénylcétonurie", "Elle détruit la vitamine C"], "Surtout pendant une infection virale.")
    ],
    revision: [
      qcm("r1", "Laquelle de ces situations peut augmenter l'ammoniémie ?", ["Une hémorragie digestive", "Une alcalose légère", "Un régime riche en fibres", "Une bonne hydratation"], "Les protéines du sang sont digérées par les bactéries.")
    ]
  },
  {
    id: "bc-meta-proteines-34", fiche: F14, ficheTitre: F14T, titre: "Les valeurs basses et la maladie d'Addison",
    classe: [
      E("Une <b>ammoniémie basse</b> n'a pas de signification clinique reconnue.", [T("Les valeurs basses"), LG("ammoniémie basse : PAS de signification clinique reconnue", "noir")]),
      E("Un <b>NH₄⁺ urinaire bas</b>, en dehors d'un régime très pauvre en protéines : le rein n'élimine pas assez d'acides. À rechercher dans une acidose : insuffisance rénale chronique, acidose tubulaire distale, manque d'aldostérone. Ou simplement une alcalose.", [LG("NH₄⁺ URINAIRE bas → insuffisance rénale chronique, acidose tubulaire, manque d'aldostérone, alcalose", "rouge")]),
      E("La <b>maladie d'Addison</b> : une insuffisance surrénale primaire, rare, par destruction des corticosurrénales, le plus souvent auto-immune. Manque de cortisol et d'aldostérone : fatigue, hypotension, peau brune, hyperkaliémie, peu de NH₄⁺ urinaire.", [EFF(), T("La maladie d'Addison"), LG("corticosurrénales détruites → cortisol ↓, aldostérone ↓", "bleu"), LG("fatigue, hypotension, mélanodermie, hyperkaliémie, NH₄⁺ urinaire ↓", "bleu", { puce: "•" })]),
      E("Traitement hormonal à vie : il y a un risque de crise aiguë mortelle. À distinguer de l'insuffisance surrénale secondaire, due à l'hypophyse.", [POST("Addison : cortisol et aldostérone ↓ · traitement hormonal à vie", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Que peut révéler un NH₄⁺ urinaire bas ?", ["Que le rein n'élimine pas assez d'acides", "Un excès de protéines", "Une insuffisance hépatique", "Rien du tout"], "Insuffisance rénale, acidose tubulaire, manque d'aldostérone."),
      qcm("a2", "Quelles hormones manquent dans la maladie d'Addison ?", ["Le cortisol et l'aldostérone", "L'insuline et le glucagon", "Les hormones thyroïdiennes", "L'adrénaline seule"], "Les corticosurrénales sont détruites.")
    ],
    revision: [
      vf("r1", "Une ammoniémie basse est un signe d'alerte important.", false, "Faux : elle n'a pas de signification clinique reconnue.")
    ]
  },
  {
    id: "bc-meta-proteines-35", fiche: F14, ficheTitre: F14T, titre: "La diététique selon la cause",
    classe: [
      E("La conduite diététique <b>dépend de la cause</b>. Trois situations très différentes.", [T("Diététique : selon la cause"), GRI(["Situation", "Protéines", "Autres conseils"], [
        ["Encéphalopathie hépatique", "PAS de restriction : 1,2 à 1,5 g/kg/j", "35 kcal/kg/j, repas fractionnés, collation du soir, pas d'alcool"],
        ["Déficit du cycle de l'urée", "CONTRÔLÉES à vie + AA indispensables", "arginine/citrulline, énergie suffisante, pas de jeûne"],
        ["Insuffisance rénale chronique", "contrôlées", "plus de fruits et légumes, bicarbonate si prescrit"]
      ], true)]),
      E("L'<b>encéphalopathie hépatique</b> : pas de régime pauvre en protéines, car il aggrave la dénutrition et la fonte musculaire, et le muscle aide à éliminer l'ammoniac en glutamine. Apports : 1,2 à 1,5 g de protéines par kg, 35 kcal par kg ; repas fractionnés, <b>collation du soir</b>. Si mauvaise tolérance : protéines végétales et laitières, fibres. Éviter constipation et déshydratation ; alcool proscrit.", [MONTRE(1), POST("Encéphalopathie hépatique : 1,2-1,5 g/kg/j, collation du soir, pas d'alcool", "cle")]),
      E("Le <b>déficit du cycle de l'urée</b> : là, régime <b>contrôlé</b> en protéines à vie, calculé par le diététicien spécialisé, avec des mélanges d'AA indispensables, de l'arginine ou de la citrulline, une énergie suffisante, et pas de jeûne.", [MONTRE(2)]),
      E("L'<b>insuffisance rénale chronique</b> : le rein ne fait plus assez de NH₄⁺, d'où une acidose, qui fait fondre le muscle et l'os. Apports contrôlés en protéines, plus de fruits et légumes, qui ont une charge acide plus faible, bicarbonate si prescrit. On surveille les bicarbonates, cible au moins 22 mmol/L.", [MONTRE(3), LG("IRC : fruits et légumes (charge acide ↓) · bicarbonates ≥ 22 mmol/L", "vert", { puce: "•" })]),
      E("Bravo, tu as fini le métabolisme des acides aminés, et toute la partie protéines !", [EFF(), T("L'essentiel"), POST("Pool d'AA, pas de stock · transamination (B6) → Glu → GDH → NH₃ · transport : glutamine, alanine · urée (foie, CPS I + NAG) · NH₄⁺ (rein, pH) · ammoniémie < 50 µmol/L · diététique selon la cause", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel apport en protéines dans l'encéphalopathie hépatique ?", ["1,2 à 1,5 g/kg/j, sans restriction", "0,3 g/kg/j", "Aucune protéine", "3 g/kg/j"], "La restriction aggrave la dénutrition."),
      qcm("a2", "Pourquoi conseiller plus de fruits et légumes dans l'insuffisance rénale chronique ?", ["Ils ont une charge acide plus faible", "Ils sont riches en protéines", "Ils font baisser l'urée directement", "Ils remplacent la dialyse"], "Pour limiter l'acidose.")
    ],
    revision: [
      qcm("r1", "Dans quel cas un régime contrôlé en protéines à vie est-il indiqué ?", ["Un déficit du cycle de l'urée", "Une encéphalopathie hépatique", "Un sportif", "Une grossesse normale"], "Calculé par un diététicien spécialisé."),
      qcm("r2", "Pourquoi une collation du soir dans l'encéphalopathie hépatique ?", ["Pour limiter le catabolisme de la nuit", "Pour mieux dormir", "Pour baisser la glycémie", "Pour apporter de l'alcool"], "Le jeûne nocturne fait fondre le muscle.")
    ]
  }

  ]
};
