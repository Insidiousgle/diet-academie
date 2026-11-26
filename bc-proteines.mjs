// Cours : Les protéines, structure (Sciences › Biochimie › Biochimie structurale)
// Source : fiches « Les protéines » 1 à 5.
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F1 = "Fiche 1", F1T = "Acides aminés et protéines : présentation";
const F2 = "Fiche 2", F2T = "Propriétés physico-chimiques des acides aminés";
const F3 = "Fiche 3", F3T = "Les peptides";
const F4 = "Fiche 4", F4T = "Les holoprotéines";
const F5 = "Fiche 5", F5T = "Les hétéroprotéines";

export default {
  id: "bc-proteines",
  titre: "Les protéines : structure",
  persos: {},
  carte: {
    depart: "Muscles, enzymes, hormones, anticorps, hémoglobine… Tout ça, ce sont des protéines. Comment sont-elles construites ?",
    etapes: [
      { titre: "Présentation", verbe: "Je découvre", question: "Acides aminés et protéines : à quoi ça sert ?", mots: "rôles · AA limitant · 20 AA · 9 indispensables" },
      { titre: "Propriétés des AA", verbe: "J'analyse", question: "Comment un acide aminé se comporte-t-il ?", mots: "série L · 280 nm · zwitterion · pHi · transamination" },
      { titre: "Les peptides", verbe: "J'enchaîne", question: "Comment les AA se relient-ils ?", mots: "liaison peptidique · Edman · insuline · glutathion" },
      { titre: "Les holoprotéines", verbe: "Je replie", question: "Les 4 niveaux de structure", mots: "hélice α · feuillet β · pHi · dénaturation" },
      { titre: "Les hétéroprotéines", verbe: "J'ajoute", question: "Protéine + autre chose", mots: "hème · myoglobine · hémoglobine · effet Bohr" }
    ],
    arrivee: "Tu sais décrire un acide aminé, une protéine et ses structures, et expliquer comment l'hémoglobine transporte l'O₂."
  },
  lecons: [

  /* ================= FICHE 1 ================= */
  {
    id: "bc-proteines-01", fiche: F1, ficheTitre: F1T, titre: "Les protides : qu'est-ce que c'est ?",
    classe: [
      E("On attaque les <b>protides</b> ! Avec les glucides et les lipides, c'est l'une des 3 grandes familles de macronutriments.", [T("Les protides"), LG("1 des 3 familles de macronutriments (avec glucides et lipides)", "noir")]),
      E("Ce sont des composés organiques qui contiennent toujours <b>C, H, O</b> et de l'<b>azote, N</b>, parfois du <b>soufre, S</b>. Leur brique, le monomère : l'<b>acide aminé</b>, AA. Les AA sont reliés par des liaisons peptidiques.", [EQ("Protides : C, H, O + N (± S)"), LG("monomère = ACIDE AMINÉ (AA) · reliés par des liaisons peptidiques", "bleu", { puce: "•" })]),
      E("Côté quantité : <b>55 à 85 %</b> du poids sec de l'organisme. Après l'eau, c'est son principal constituant.", [LG("55 à 85 % du poids sec → principal constituant après l'eau", "rouge", { puce: "•" })]),
      E("Les AA ont deux origines : <b>exogène</b>, l'alimentation, animale et végétale ; et <b>endogène</b>, fabriqués par le corps, pour certains seulement.", [LG("origine : EXOGÈNE (alimentation) · ENDOGÈNE (synthèse, pour certains)", "vert", { puce: "•" })]),
      E("C'est aussi la principale source d'<b>azote</b> de l'organisme : pour fabriquer les acides nucléiques, des hormones, des neurotransmetteurs. Et certains AA contrôlent des voies du métabolisme : croissance, immunité, reproduction.", [POST("Protides : C, H, O, N (± S) · 55-85 % du poids sec · principale source d'azote", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel élément chimique distingue les protides des glucides et des lipides ?", ["L'azote (N)", "Le carbone (C)", "L'oxygène (O)", "Le phosphore (P)"], "Les protides contiennent toujours de l'azote."),
      qcm("a2", "Quelle part du poids sec de l'organisme représentent les protides ?", ["55 à 85 %", "5 à 10 %", "20 à 30 %", "95 %"], "Principal constituant après l'eau.")
    ],
    revision: [
      vf("r1", "Le monomère des protéines est l'acide gras.", false, "Faux : c'est l'acide aminé.")
    ]
  },
  {
    id: "bc-proteines-02", fiche: F1, ficheTitre: F1T, titre: "Les grands rôles des protéines",
    classe: [
      E("Les protéines ont des rôles très variés. D'abord la <b>structure</b>.", [T("Les rôles des protéines"), LG("STRUCTURE : collagène (le + abondant : conjonctif, os, peau) · kératine (cheveux, ongles, poils) · muscles", "bleu", { puce: "•" })]),
      E("Le <b>collagène</b>, c'est la protéine la plus abondante de l'organisme : tissu conjonctif, os, peau. La <b>kératine</b> : les phanères, cheveux, ongles, poils. Et dans la cellule, le <b>cytosquelette</b>, actine et tubuline, qui lui donne sa forme.", [LG("cellule : CYTOSQUELETTE (actine, tubuline) → forme de la cellule", "bleu", { puce: "•" })]),
      E("Ensuite, les <b>fonctions vitales</b>.", [EFF(), T("Les fonctions vitales"), GRI(["Fonction", "Exemples"], [
        ["Catalyse", "enzymes (dont digestives)"],
        ["Transport sanguin", "albumine (AG libres, vit. liposolubles) · hémoglobine (O₂, une partie du CO₂)"],
        ["Transport membranaire", "pompe Na⁺/K⁺-ATPase · GLUT"],
        ["Médiateurs chimiques", "hormones peptidiques (insuline, glucagon)"],
        ["Récepteurs", "récepteurs hormonaux membranaires"],
        ["Défense", "immunoglobulines (anticorps), complément, CMH (HLA : le « soi »)"],
        ["Mouvement", "actine-myosine (muscles)"]
      ], true)]),
      E("Catalyse, transport, hormones, récepteurs, défense, mouvement : presque tout ce qui se passe dans le corps passe par une protéine.", [POST("Rôles : structure (collagène, cytosquelette) + fonctions (enzymes, transport, hormones, récepteurs, défense, mouvement)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle est la protéine la plus abondante de l'organisme ?", ["Le collagène", "L'hémoglobine", "L'albumine", "La kératine"], "Tissu conjonctif, os, peau."),
      paires("a2", "Relie chaque protéine à son rôle.", [["Hémoglobine", "Transport de l'O₂"], ["Immunoglobulines", "Défense (anticorps)"], ["Actine-myosine", "Mouvement"], ["Kératine", "Cheveux, ongles, poils"]], "Des rôles très variés.")
    ],
    revision: [
      qcm("r1", "Que transporte l'albumine dans le sang ?", ["Les AG libres et les vitamines liposolubles", "L'O₂", "Le glucose", "Les globules rouges"], "Principale protéine de transport du sang.")
    ]
  },
  {
    id: "bc-proteines-03", fiche: F1, ficheTitre: F1T, titre: "Pas de réserve, et des tailles différentes",
    classe: [
      E("Point important : les protéines ne sont <b>pas une réserve</b>. On ne peut pas les stocker en quantité importante. Toute carence en protides risque d'entraîner de graves dysfonctionnements.", [T("Les protéines ne sont pas une réserve"), LG("pas de stockage important → carence = graves dysfonctionnements", "rouge")], "reflechit"),
      E("Les AA peuvent servir de carburant. Mais contrairement au glycogène ou aux triglycérides, chaque protéine a une fonction précise. La <b>protéolyse</b>, la dégradation des protéines pour libérer des AA, affaiblit donc les tissus, comme le muscle.", [POST("Protéolyse = perte de tissu (muscle) → perte de fonction", "piege")]),
      E("On classe les protides selon leur <b>taille</b>. L'acide aminé est la brique. 2 à 10 AA : un <b>oligopeptide</b>. 11 à 100 : un <b>polypeptide</b>. Plus de 100 : une <b>protéine</b>.", [EFF(), T("Selon la taille"), GRI(["Protide", "Nombre d'AA"], [["Acide aminé", "1 (monomère)"], ["Oligopeptide", "2 à 10"], ["Polypeptide", "11 à 100"], ["Protéine", "plus de 100"]], true)]),
      E("Et selon la <b>composition</b>. Une <b>holoprotéine</b> n'a que des AA. Une <b>hétéroprotéine</b> a en plus une partie non protidique, le <b>groupement prosthétique</b>. On la nomme d'après lui : glucidique, glycoprotéine ; lipidique, lipoprotéine ; pigment, chromoprotéine ; ion métallique, métalloprotéine.", [LG("HOLOprotéine : uniquement des AA", "bleu", { puce: "•" }), LG("HÉTÉROprotéine : apoprotéine + groupement prosthétique (glyco-, lipo-, chromo-, métallo-)", "vert", { puce: "•" }), POST("Oligo 2-10 · poly 11-100 · protéine > 100 AA", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien d'acides aminés compte un polypeptide ?", ["11 à 100", "2 à 10", "Plus de 100", "Plus de 1 000"], "Oligopeptide 2-10 ; protéine > 100."),
      qcm("a2", "Comment appelle-t-on une protéine qui porte un pigment ?", ["Une chromoprotéine", "Une glycoprotéine", "Une holoprotéine", "Une lipoprotéine"], "Hétéroprotéine nommée d'après son groupement prosthétique.")
    ],
    revision: [
      vf("r1", "Les protéines sont une réserve d'énergie comme le glycogène.", false, "Faux : chaque protéine a une fonction ; la protéolyse affaiblit les tissus."),
      qcm("r2", "Qu'est-ce qu'une holoprotéine ?", ["Une protéine faite uniquement d'acides aminés", "Une protéine avec un groupement prosthétique", "Un peptide de moins de 10 AA", "Une protéine fibreuse"], "Hétéroprotéine = + groupement prosthétique.")
    ]
  },
  {
    id: "bc-proteines-04", fiche: F1, ficheTitre: F1T, titre: "L'acide aminé limitant",
    classe: [
      E("Notion clé en diététique : l'<b>acide aminé limitant</b>. C'est l'AA indispensable présent en quantité la plus faible, par rapport aux besoins, dans une protéine.", [T("L'acide aminé limitant"), LG("AA indispensable le plus déficitaire (par rapport aux besoins) dans une protéine", "rouge")]),
      E("Même si tous les autres sont en quantité suffisante, c'est lui qui <b>limite</b> l'utilisation de la protéine par l'organisme : croissance, réparation des tissus.", [LG("c'est LUI qui limite l'utilisation de toute la protéine", "noir", { puce: "•" })], "reflechit"),
      E("Les <b>céréales</b> sont pauvres en <b>lysine</b>. Les <b>légumineuses</b> sont pauvres en AA <b>soufrés</b>, méthionine et cystéine.", [GRI(["Aliment", "AA limitant"], [["Céréales", "lysine"], ["Légumineuses", "AA soufrés (méthionine, cystéine)"]], true)]),
      E("D'où l'intérêt d'<b>associer céréales et légumineuses</b> : riz plus lentilles, semoule plus pois chiches. Leurs AA limitants se compensent.", [POST("Céréales + légumineuses : leurs AA limitants se compensent (riz + lentilles)", "cle")], "content"),
      E("On parle de protéines « <b>complètes</b> » quand tous les AA indispensables sont en quantité suffisante : surtout les protéines animales, mais aussi le soja et le quinoa. Beaucoup de protéines végétales sont « incomplètes ».", [LG("« complètes » : surtout animales + soja, quinoa · « incomplètes » : beaucoup de végétales", "vert", { puce: "•" })])
    ],
    questions: [
      qcm("a1", "Quel est l'AA limitant des céréales ?", ["La lysine", "La méthionine", "Le tryptophane", "La leucine"], "Les légumineuses, elles, manquent d'AA soufrés."),
      qcm("a2", "Pourquoi associer riz et lentilles ?", ["Leurs AA limitants se compensent", "Pour apporter plus de glucides", "Pour éviter les AA soufrés", "Parce que le riz n'a pas de lysine… ni les lentilles"], "Céréales pauvres en lysine, légumineuses pauvres en AA soufrés.")
    ],
    revision: [
      qcm("r1", "Quels AA manquent surtout dans les légumineuses ?", ["Les AA soufrés (méthionine, cystéine)", "La lysine", "Les AA ramifiés", "L'histidine"], "D'où l'association avec les céréales."),
      vf("r2", "Le soja et le quinoa apportent des protéines « complètes ».", true, "Vrai, comme la plupart des protéines animales.")
    ]
  },
  {
    id: "bc-proteines-05", fiche: F1, ficheTitre: F1T, titre: "Classer les protéines",
    classe: [
      E("On peut classer les protéines de plusieurs façons. Selon leur <b>forme</b> : globulaires ou fibreuses.", [T("Classer les protéines"), GRI(["Forme", "Description", "Exemples"], [["Globulaires", "± sphériques, en général solubles · transport, régulation, défense, catalyse", "hémoglobine, myoglobine, albumine, insuline"], ["Fibreuses", "allongées, peu ou pas solubles · rôle mécanique, de structure", "collagène, kératine"]], true)]),
      E("Selon leur <b>fonction</b> : enzymes, avec un nom en <b>-ase</b>, amylase, lipase, protéase ; hormones, protéiques ou peptidiques, comme l'insuline ou la vasopressine, 9 AA ; transporteurs ; immunoglobulines ; récepteurs ; protéines de structure.", [EFF(), T("Selon la fonction"), LG("enzymes (-ase) · hormones (insuline ; vasopressine 9 AA ; TRH 3 AA) · transporteurs (GLUT, Hb)", "bleu", { puce: "•" }), LG("immunoglobulines (IgG, IgA) · récepteurs (RCPG) · structure (collagène, kératine, actine)", "bleu", { puce: "•" })]),
      E("Selon leur <b>origine</b> : animales, viande, poisson, laitages, œufs ; ou végétales, légumineuses, céréales, oléagineux. Et selon leur teneur en AA indispensables : complètes, comme l'œuf et le soja, ou incomplètes, comme le riz et les lentilles.", [LG("ORIGINE : animales / végétales · complètes (œuf, soja) / incomplètes (riz, lentilles)", "vert", { puce: "•" })]),
      E("Ce tableau est à comprendre, pas à apprendre mot à mot. Retiens surtout : globulaires solubles, fibreuses insolubles.", [POST("Globulaires : sphériques, solubles · fibreuses : allongées, insolubles", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Lequel de ces exemples est une protéine fibreuse ?", ["La kératine", "L'hémoglobine", "L'albumine", "L'insuline"], "Allongée, insoluble, rôle mécanique."),
      qcm("a2", "Quelle terminaison porte en général le nom d'une enzyme ?", ["-ase", "-ine", "-ose", "-ide"], "Amylase, lipase, protéase…")
    ],
    revision: [
      vf("r1", "Les protéines globulaires sont en général solubles dans l'eau.", true, "Vrai : hémoglobine, albumine, enzymes…")
    ]
  },
  {
    id: "bc-proteines-06", fiche: F1, ficheTitre: F1T, titre: "La structure d'un acide aminé",
    classe: [
      E("Zoom sur la brique : l'<b>acide aminé</b>. L'hydrolyse des protéines libère une vingtaine d'AA différents. Ils ont tous la même structure, autour d'un carbone central : le <b>carbone α</b>.", [T("Structure d'un acide aminé"), EQ("H₂N–CH(R)–COOH")]),
      E("Sur le carbone α, quatre choses : une fonction <b>acide carboxylique</b>, COOH ; une fonction <b>amine primaire</b>, NH₂, basique ; un <b>hydrogène</b> ; et un <b>radical R</b>, la chaîne latérale.", [GRI(["Sur le carbone α", "Rôle"], [["–COOH", "fonction acide carboxylique"], ["–NH₂", "fonction amine primaire (basique)"], ["–H", "un hydrogène"], ["R", "chaîne latérale, propre à chaque AA"]], true)]),
      E("Amine et acide sur le même carbone α : c'est pour ça qu'on parle d'acide <b>α-aminé</b>. Tous les AA ont la même « tête » ; seul le <b>R</b> change. C'est lui qui donne à chaque AA son nom et ses propriétés : taille, charge, affinité pour l'eau.", [POST("Seul le radical R change d'un AA à l'autre : il détermine ses propriétés", "cle")]),
      E("Trois formes de radicaux : <b>linéaire</b>, dont les ramifiés, leucine, isoleucine, valine ; <b>cyclique</b>, avec un noyau benzénique, phénylalanine, tyrosine ; et <b>hétérocyclique</b>, un cycle qui contient un autre atome que C, ici N : histidine, tryptophane, proline.", [EFF(), T("3 formes de radicaux"), LG("LINÉAIRE (dont ramifiés : Leu, Ile, Val)", "noir", { puce: "•" }), LG("CYCLIQUE (noyau benzénique : Phe, Tyr)", "noir", { puce: "•" }), LG("HÉTÉROCYCLIQUE (cycle avec un N : His, Trp, Pro)", "noir", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce qui différencie deux acides aminés ?", ["Leur radical R", "Leur fonction amine", "Leur fonction acide", "Leur carbone α"], "La « tête » est commune, seul R change."),
      qcm("a2", "Pourquoi parle-t-on d'acide α-aminé ?", ["L'amine et l'acide sont sur le même carbone α", "Il a deux fonctions amine", "Il est de la série α", "Il n'a pas de radical"], "Formule : H₂N–CH(R)–COOH.")
    ],
    revision: [
      paires("r1", "Relie chaque forme de radical à ses exemples.", [["Ramifié", "Leucine, valine"], ["Cyclique (benzénique)", "Phénylalanine, tyrosine"], ["Hétérocyclique", "Histidine, proline"]], "Trois formes de radicaux.")
    ]
  },
  {
    id: "bc-proteines-07", fiche: F1, ficheTitre: F1T, titre: "Les 20 AA et les 9 indispensables",
    classe: [
      E("Les AA <b>protéinogènes</b> sont ceux qui entrent dans les protéines. Ils s'assemblent en chaînes linéaires lors de la <b>traduction</b>, sur les <b>ribosomes</b>. Leur ordre, la séquence, est codé par l'ADN.", [T("Les acides aminés protéinogènes"), LG("assemblés lors de la TRADUCTION (ribosomes) · ordre codé par l'ADN", "bleu")]),
      E("On connaît plus de 250 AA dans la nature, mais toutes les protéines, bactériennes, végétales, animales, sont faites à partir de <b>20 AA standards</b>. Chez l'humain s'ajoute la <b>sélénocystéine</b>, la 21e. Certains AA sont modifiés après la traduction, comme l'hydroxyproline et l'hydroxylysine du collagène.", [EQ("20 AA standards (+ sélénocystéine chez l'humain)")]),
      E("Chaque AA a un nom, un code à <b>3 lettres</b>, en général les 3 premières lettres du nom, et un code à <b>1 lettre</b>.", [LG("ex. : Alanine = Ala = A · Glutamine = Gln = Q", "noir", { puce: "•" })]),
      E("L'organisme sait fabriquer <b>11</b> des 20 AA. Les <b>9</b> autres doivent être apportés par l'alimentation : ce sont les AA <b>indispensables</b>, ou essentiels.", [EFF(), T("Les 9 AA indispensables"), LG("Tryptophane · Lysine · Méthionine · Phénylalanine · Thréonine", "rouge", { taille: "grand" }), LG("Valine · Leucine · Isoleucine · Histidine", "rouge", { taille: "grand" })]),
      E("Attention : l'<b>histidine</b> est indispensable chez l'<b>adulte</b> comme chez l'enfant, selon la FAO, l'OMS et l'Anses. Pas seulement chez l'enfant.", [POST("Histidine : indispensable chez l'ADULTE aussi (FAO/OMS 2007, Anses)", "piege")], "pointe"),
      E("Et les <b>conditionnellement indispensables</b> : on les fabrique, mais pas toujours assez, en croissance ou en cas de maladie, ou à partir d'un AA indispensable. L'arginine ; la tyrosine, faite à partir de la phénylalanine ; la cystéine, faite à partir de la méthionine.", [LG("conditionnellement indispensables : arginine · tyrosine (← Phe) · cystéine (← Met)", "bleu", { puce: "•" }), POST("9 indispensables : Trp, Lys, Met, Phe, Thr, Val, Leu, Ile, His", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien d'acides aminés sont indispensables ?", ["9", "20", "11", "3"], "L'organisme en fabrique 11 sur 20."),
      qcm("a2", "Lequel de ces AA est indispensable ?", ["La lysine", "L'alanine", "La glycine", "L'acide glutamique"], "Trp, Lys, Met, Phe, Thr, Val, Leu, Ile, His.")
    ],
    revision: [
      vf("r1", "L'histidine n'est indispensable que chez l'enfant.", false, "Faux : chez l'adulte aussi (FAO/OMS 2007, Anses)."),
      qcm("r2", "À partir de quel AA l'organisme fabrique-t-il la tyrosine ?", ["La phénylalanine", "La méthionine", "Le tryptophane", "La lysine"], "La cystéine, elle, vient de la méthionine."),
      qcm("r3", "Où les AA sont-ils assemblés en protéines ?", ["Sur les ribosomes, lors de la traduction", "Dans le noyau, lors de la transcription", "Dans les lysosomes", "Dans le sang"], "La séquence est codée par l'ADN."),
      qcm("r4", "Quel AA s'ajoute aux 20 AA standards chez l'humain ?", ["La sélénocystéine", "La pyrrolysine", "L'hydroxyproline", "La taurine"], "La 21e ; la pyrrolysine n'existe que chez certaines bactéries et archées.")
    ]
  },
  {
    id: "bc-proteines-08", fiche: F1, ficheTitre: F1T, titre: "Les familles d'acides aminés",
    classe: [
      E("On classe les 20 AA en familles selon leur radical. Le rôle de chaque AA aide à le retenir.", [T("Les familles selon le radical"), GRI(["Famille", "AA", "À retenir"], [
        ["Aliphatiques (C et H)", "Gly, Ala, Val, Leu, Ile", "Gly : R = H, sans C asymétrique · Val, Leu, Ile : ramifiés"],
        ["Alcools (–OH)", "Ser, Thr", "Ser : phosphosérine des phosphoprotéines"],
        ["Soufrés (S)", "Cys, Met", "Cys : –SH → ponts disulfure ; → taurine"],
        ["Acides (2e COOH)", "Asp, Glu", "métabolisme azoté · Glu → GABA"],
        ["Amides (–CO–NH₂)", "Asn, Gln", "Gln transporte l'azote"],
        ["Basiques (2e amine)", "Lys, Arg, His", "Arg : histones, urée, créatine"],
        ["Aromatiques", "Phe, Tyr, Trp", "Tyr → catécholamines, hormones thyroïdiennes · Trp → sérotonine, B3"],
        ["Hétérocyclique", "Pro", "radical refermé sur l'amine · hydroxyproline du collagène"]
      ])]),
      E("Les <b>aliphatiques</b> : seulement C et H. La glycine, R égale H, la plus simple, sans carbone asymétrique ; elle entre dans les sels biliaires. L'alanine, R égale CH₃. Et les trois <b>ramifiés</b>, valine, leucine, isoleucine, tous indispensables.", [MONTRE(1)]),
      E("Les <b>alcools</b>, sérine et thréonine. Les <b>soufrés</b> : la cystéine, avec sa fonction thiol, SH, qui forme les <b>ponts disulfure</b> ; elle donne la taurine et la cystéamine du coenzyme A. Et la méthionine.", [MONTRE(2), MONTRE(3)]),
      E("Les <b>acides</b>, aspartate et glutamate, chargés moins à pH physiologique : rôle clé dans le métabolisme azoté. Le glutamate donne le GABA. Les <b>amides</b>, asparagine et glutamine : la glutamine transporte l'azote.", [MONTRE(4), MONTRE(5)]),
      E("Les <b>basiques</b>, lysine, arginine, histidine, chargés plus. L'arginine est abondante dans les histones et sert au cycle de l'urée et à la créatine.", [MONTRE(6)]),
      E("Les <b>aromatiques</b> : la phénylalanine donne la tyrosine, précurseur des catécholamines, dopamine, noradrénaline, adrénaline, et des hormones thyroïdiennes. Le tryptophane donne la sérotonine et la vitamine B3. Enfin la <b>proline</b>, dont le radical se referme sur l'amine.", [MONTRE(7), MONTRE(8), POST("Familles : aliphatiques, alcools, soufrés, acides, amides, basiques, aromatiques, hétérocyclique (Pro)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel AA forme les ponts disulfure ?", ["La cystéine", "La méthionine", "La sérine", "La glycine"], "Grâce à sa fonction thiol (–SH)."),
      qcm("a2", "De quel AA dérivent les catécholamines et les hormones thyroïdiennes ?", ["La tyrosine", "Le tryptophane", "L'histidine", "La glutamine"], "Elle-même issue de la phénylalanine.")
    ],
    revision: [
      paires("r1", "Relie chaque AA à ce qu'il donne.", [["Tryptophane", "Sérotonine, vitamine B3"], ["Glutamate", "GABA"], ["Cystéine", "Taurine"], ["Arginine", "Créatine, cycle de l'urée"]], "Le rôle aide à retenir l'AA."),
      qcm("r2", "Quel AA n'a pas de carbone asymétrique ?", ["La glycine", "L'alanine", "La leucine", "La proline"], "R = H."),
      paires("r3", "Relie chaque famille à ses AA.", [["Aliphatiques", "Gly, Ala, Val, Leu, Ile"], ["Aromatiques", "Phe, Tyr, Trp"], ["Basiques", "Lys, Arg, His"], ["Soufrés", "Cys, Met"]], "Classement selon le radical.")
    ]
  },
  {
    id: "bc-proteines-09", fiche: F1, ficheTitre: F1T, titre: "Radicaux et formules à connaître",
    classe: [
      E("Autre classement, selon le <b>comportement</b> du radical. Utile pour comprendre le repliement des protéines : les liaisons peptidiques n'utilisent que les fonctions du carbone α ; les radicaux restent libres.", [T("Selon le comportement du radical"), GRI(["Radical", "AA"], [["Apolaire, hydrophobe", "Ala, Val, Leu, Ile, Met, Phe, Trp, Pro"], ["Polaire non chargé, hydrophile", "Ser, Thr, Cys, Asn, Gln, Tyr"], ["Ionisé à pH physiologique", "acides (−) Asp, Glu · basiques (+) Lys, Arg, His (en partie)"]], true)]),
      E("Le caractère hydrophobe augmente avec la longueur de la chaîne carbonée.", [POST("Radical apolaire / polaire non chargé / ionisé", "cle")]),
      E("Pour le BTS, il faut savoir écrire la formule semi-développée de <b>5 AA</b> : alanine, cystéine, acide aspartique, acide glutamique, glutamine. Méthode : la tête commune, H₂N–CH–COOH, et on accroche le bon R.", [EFF(), T("5 formules à connaître"), GRI(["AA", "Radical R"], [["Alanine (Ala, A)", "–CH₃"], ["Cystéine (Cys, C)", "–CH₂–SH"], ["Acide aspartique (Asp, D)", "–CH₂–COOH"], ["Acide glutamique (Glu, E)", "–CH₂–CH₂–COOH"], ["Glutamine (Gln, Q)", "–CH₂–CH₂–CO–NH₂"]], true)]),
      E("Astuce : l'acide glutamique et la glutamine ont la même chaîne. La glutamine a juste une <b>amide</b>, CO–NH₂, à la place du COOH. L'aspartique a un CH₂ de moins que le glutamique.", [POST("Gln = Glu avec CO–NH₂ à la place du COOH · Asp = Glu avec un CH₂ de moins", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le radical de l'alanine ?", ["–CH₃", "–CH₂–SH", "–H", "–CH₂–COOH"], "Le plus simple après la glycine."),
      qcm("a2", "Quelle est la différence entre l'acide glutamique et la glutamine ?", ["La glutamine a une amide (CO–NH₂) à la place du COOH du radical", "La glutamine a un soufre", "La glutamine a un CH₂ de moins", "Aucune"], "La glutamine transporte de l'azote.")
    ],
    revision: [
      qcm("r1", "Lequel de ces AA a un radical ionisé négativement à pH physiologique ?", ["L'acide aspartique", "La lysine", "La sérine", "La leucine"], "Acides (−) : Asp, Glu."),
      qcm("r2", "Quel est le radical de la cystéine ?", ["–CH₂–SH", "–CH₃", "–CH₂–OH", "–CH₂–COOH"], "Le thiol forme les ponts disulfure."),
      qcm("r3", "Lequel de ces AA a un radical apolaire (hydrophobe) ?", ["La leucine", "La sérine", "L'acide glutamique", "La lysine"], "Apolaires : Ala, Val, Leu, Ile, Met, Phe, Trp, Pro.")
    ]
  },

  /* ================= FICHE 2 ================= */
  {
    id: "bc-proteines-10", fiche: F2, ficheTitre: F2T, titre: "L'isomérie optique : D et L",
    classe: [
      E("Les <b>stéréo-isomères</b> : des molécules avec les mêmes atomes, reliés dans le même ordre, qui ne diffèrent que par leur disposition dans l'<b>espace</b>.", [T("L'isomérie optique"), LG("même formule, même ordre · disposition dans l'ESPACE différente", "noir")]),
      E("Un <b>carbone asymétrique</b>, ou chiral, porte 4 substituants différents. Chez les AA, c'est le <b>carbone α</b> : NH₂, COOH, H et R. Tous les AA standards sont chiraux, <b>sauf la glycine</b>, dont le R est un H : deux substituants identiques.", [LG("carbone α = carbone ASYMÉTRIQUE (4 substituants différents)", "bleu", { puce: "•" }), LG("tous chiraux SAUF la glycine (R = H)", "rouge", { puce: "•" })]),
      E("Une molécule chirale n'est pas superposable à son image dans un miroir, comme une main droite et une main gauche. Les deux formes sont des <b>énantiomères</b>.", [LG("2 formes « en miroir » = ÉNANTIOMÈRES", "bleu", { puce: "•" })]),
      E("En représentation de <b>Fischer</b>, COOH en haut, R en bas : NH₂ à <b>gauche</b>, série <b>L</b> ; NH₂ à droite, série D. Et tous les AA des protéines sont de la série <b>L</b>.", [EQ("Fischer : NH₂ à GAUCHE = série L · NH₂ à droite = série D"), POST("Tous les AA des protéines sont de la série L", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel acide aminé n'a pas de carbone asymétrique ?", ["La glycine", "L'alanine", "La cystéine", "La lysine"], "Son R est un H."),
      qcm("a2", "En représentation de Fischer, où est le NH₂ d'un AA de la série L ?", ["À gauche", "À droite", "En haut", "En bas"], "NH₂ à droite = série D.")
    ],
    revision: [
      vf("r1", "Les protéines humaines contiennent des AA de la série D.", false, "Faux : uniquement des AA de la série L."),
      qcm("r2", "Comment appelle-t-on deux formes d'un AA images l'une de l'autre dans un miroir ?", ["Des énantiomères", "Des zwitterions", "Des protomères", "Des résidus"], "Non superposables, comme les deux mains.")
    ]
  },
  {
    id: "bc-proteines-11", fiche: F2, ficheTitre: F2T, titre: "D/L n'est pas dextro/lévo",
    classe: [
      E("Les énantiomères dévient la <b>lumière polarisée</b> de façon opposée. On le mesure au <b>polarimètre</b>.", [T("Dextrogyre ou lévogyre ?"), LG("mesure au POLARIMÈTRE", "noir")]),
      E("Vers la droite : <b>dextrogyre</b>, noté plus. Vers la gauche : <b>lévogyre</b>, noté moins.", [LG("vers la droite = DEXTROGYRE (+) · vers la gauche = LÉVOGYRE (−)", "bleu")]),
      E("Piège classique : D et L décrivent seulement la position du NH₂ dans la représentation de Fischer. <b>Aucun lien</b> avec le sens de déviation. La preuve : la L-alanine est dextrogyre, la L-leucine est lévogyre.", [POST("D/L ≠ dextrogyre/lévogyre : la L-alanine est dextrogyre, la L-leucine lévogyre", "piege")], "pointe")
    ],
    questions: [
      vf("a1", "Un AA de la série L est toujours lévogyre.", false, "Faux : la L-alanine est dextrogyre. D/L et (+)/(−) n'ont aucun lien."),
      qcm("a2", "Avec quel appareil mesure-t-on la déviation de la lumière polarisée ?", ["Le polarimètre", "Le spectrophotomètre", "Le pH-mètre", "Le microscope"], "Dextrogyre (+) ou lévogyre (−).")
    ],
    revision: [
      qcm("r1", "Que signifie « dextrogyre » ?", ["Qui dévie la lumière polarisée vers la droite", "Qui a le NH₂ à droite", "Qui est de la série D", "Qui absorbe les UV"], "Noté (+).")
    ]
  },
  {
    id: "bc-proteines-12", fiche: F2, ficheTitre: F2T, titre: "Solubilité et lumière",
    classe: [
      E("La <b>solubilité</b>. À l'état solide, les AA forment des cristaux. Ils sont en général <b>très solubles dans l'eau</b>, grâce à leurs fonctions COOH et NH₂ ionisées, et <b>peu solubles</b> dans les solvants organiques, éthanol, éther.", [T("La solubilité"), LG("très solubles dans l'EAU · peu dans les solvants organiques", "bleu")]),
      E("Elle dépend du radical R. Elle <b>diminue</b> quand R a plus de carbones, chaîne hydrophobe. Elle <b>augmente</b> si R porte des fonctions polaires : acide, amine, alcool. Observer la solubilité aide à identifier un AA.", [LG("solubilité ↓ si R long (hydrophobe) · ↑ si R polaire (–COOH, –NH₂, –OH)", "noir", { puce: "•" })]),
      E("La <b>lumière</b>. Le visible va de 400 à 800 nm ; les UV sont en dessous de 400. Les AA sont <b>incolores</b> : ils n'absorbent pas le visible.", [EFF(), T("Absorption de la lumière"), LG("visible : 400-800 nm · UV < 400 nm · AA INCOLORES", "noir")]),
      E("Mais les AA <b>aromatiques</b> absorbent les UV entre 260 et 280 nm : le <b>tryptophane</b>, maximum vers 280 nm ; la <b>tyrosine</b>, vers 274 ; faiblement la phénylalanine, vers 257.", [GRI(["AA aromatique", "Absorbe vers"], [["Tryptophane", "280 nm (maximum)"], ["Tyrosine", "274 nm"], ["Phénylalanine", "257 nm (faiblement)"]], true)]),
      E("Conséquence : on <b>dose les protéines à 280 nm</b> par spectrophotométrie, grâce à leur Trp et Tyr. Et la <b>fluorescence</b> : excités par les UV, le tryptophane et la tyrosine réémettent de la lumière, le Trp vers 350 nm. Ça permet de les détecter.", [POST("Dosage des protéines à 280 nm (Trp, Tyr) · fluorescence du Trp", "cle")], "content")
    ],
    questions: [
      qcm("a1", "À quelle longueur d'onde dose-t-on les protéines ?", ["280 nm", "540 nm", "400 nm", "800 nm"], "Grâce au tryptophane et à la tyrosine."),
      vf("a2", "Les acides aminés sont colorés.", false, "Faux : ils sont incolores, ils n'absorbent pas le visible.")
    ],
    revision: [
      qcm("r1", "Comment varie la solubilité d'un AA quand son radical s'allonge ?", ["Elle diminue", "Elle augmente", "Elle ne change pas", "Elle devient infinie"], "La chaîne carbonée est hydrophobe."),
      vf("r2", "Les acides aminés sont très solubles dans les solvants organiques comme l'éther.", false, "Faux : très solubles dans l'eau, peu dans les solvants organiques.")
    ]
  },
  {
    id: "bc-proteines-13", fiche: F2, ficheTitre: F2T, titre: "Un AA est amphotère",
    classe: [
      E("Un AA a deux fonctions <b>ionisables</b>. La fonction carboxylique, acide : elle peut <b>céder</b> un proton et devenir négative. C'est un acide faible : dissociation incomplète et réversible.", [T("Les propriétés ioniques"), EQ("–COOH ⇌ –COO⁻ + H⁺ (acide)")]),
      E("La fonction amine, basique : elle peut <b>capter</b> un proton et devenir positive.", [EQ("–NH₂ + H⁺ ⇌ –NH₃⁺ (base)")]),
      E("Un AA peut donc se comporter comme un acide ou comme une base selon le pH : il est <b>amphotère</b>.", [LG("AMPHOTÈRE : acide OU base selon le pH", "rouge", { taille: "grand" })]),
      E("La forme qui porte à la fois une charge plus, NH₃⁺, et une charge moins, COO⁻, a une charge nette nulle : c'est le <b>zwitterion</b>, ou amphion. En solution aqueuse, c'est la forme majoritaire autour de la neutralité.", [EQ("Zwitterion : H₃N⁺–CH(R)–COO⁻ (charge nette 0)"), POST("Zwitterion = + et − à la fois, charge nette nulle", "cle")]),
      E("Le <b>pK</b> : c'est le pH de demi-dissociation d'une fonction. pK₁ pour le COOH : quand pH égale pK₁, il y a autant de COO⁻ que de COOH. pK₂ pour l'amine. Plus pK₁ est faible, plus la fonction est acide ; plus pK₂ est élevé, plus elle est basique.", [EFF(), T("Les pK"), LG("pK = pH de DEMI-DISSOCIATION · pK₁ (COOH) · pK₂ (NH₃⁺)", "bleu"), LG("valeurs de pK : pas à connaître, seul le principe compte", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Que signifie « amphotère » ?", ["Qui peut se comporter comme un acide ou comme une base", "Qui dévie la lumière", "Qui est hydrophobe", "Qui n'a pas de charge"], "Grâce à ses fonctions COOH et NH₂."),
      qcm("a2", "Qu'est-ce qu'un zwitterion ?", ["Une forme portant une charge + et une charge −, de charge nette nulle", "Un AA sans radical", "Un AA de la série D", "Un cation"], "Forme majoritaire autour de la neutralité.")
    ],
    revision: [
      qcm("r1", "Que représente le pK d'une fonction ?", ["Le pH de demi-dissociation", "Le pH où l'AA précipite", "La masse de l'AA", "Sa longueur d'onde d'absorption"], "À pH = pK₁ : [COO⁻] = [COOH].")
    ]
  },
  {
    id: "bc-proteines-14", fiche: F2, ficheTitre: F2T, titre: "Le pH isoélectrique",
    classe: [
      E("Suivons l'alanine quand le pH monte. En milieu très acide, tout est protoné : COOH et NH₃⁺, c'est un <b>cation</b>, charge plus 1.", [T("Les formes selon le pH"), RANG([
        { titre: "Cation (+1)", x: "pH < pK₁ · H₃N⁺–CH(R)–COOH · milieu très acide", c: "bleu" },
        { titre: "Zwitterion (0)", x: "entre pK₁ et pK₂ · H₃N⁺–CH(R)–COO⁻", c: "vert" },
        { titre: "Anion (−1)", x: "pH > pK₂ · H₂N–CH(R)–COO⁻ · milieu très basique", c: "rouge" }
      ]), MONTRE(1)]),
      E("Quand le pH monte, la fonction la plus acide, le COOH, perd son H⁺ la première, au pK₁ : <b>zwitterion</b>. Puis au pK₂, le NH₃⁺ perd le sien : <b>anion</b>, charge moins 1.", [MONTRE(2), MONTRE(3)]),
      E("Le <b>pHi</b>, pH isoélectrique, c'est le pH où l'AA est sous forme de zwitterion, électriquement <b>neutre</b>. Si le radical n'est pas ionisable : pHi égale la moitié de pK₁ plus pK₂. Pour l'alanine : environ 6.", [EFF(), T("Le pH isoélectrique (pHi)"), EQ("pHi = ½ (pK₁ + pK₂) · alanine : ½ (2,34 + 9,78) ≈ 6")]),
      E("La règle à retenir : au-dessus de son pHi, une molécule est chargée <b>négativement</b> ; en dessous, <b>positivement</b>. Au pH du sang, 7,4, l'alanine est surtout en zwitterion.", [POST("pH > pHi → charge − · pH < pHi → charge +", "cle")], "reflechit"),
      E("Au labo, on fait une <b>titration</b> : on part de l'AA en milieu très acide et on ajoute de la soude. Autour de pK₁ et pK₂, le pH bouge peu : c'est l'<b>effet tampon</b>. Entre les deux, au pHi, le pH « saute ». On lit les pK aux demi-équivalents, le pHi à l'équivalence.", [EFF(), T("Titration et effet tampon"), LG("autour des pK : pH stable = EFFET TAMPON", "vert", { puce: "•" }), LG("au pHi : SAUT de pH (point d'inflexion)", "rouge", { puce: "•" }), LG("lecture : pK aux ½ équivalents (0,5 et 1,5) · pHi à 1 équivalent", "noir", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Comment calcule-t-on le pHi d'un AA à radical non ionisable ?", ["½ (pK₁ + pK₂)", "pK₁ + pK₂", "pK₂ − pK₁", "pK₁ × pK₂"], "Pour l'alanine : ≈ 6."),
      qcm("a2", "Un AA est placé dans un milieu dont le pH est supérieur à son pHi. Quelle est sa charge ?", ["Négative", "Positive", "Nulle", "Ça dépend de sa masse"], "Au-dessus du pHi : chargé −.")
    ],
    revision: [
      qcm("r1", "Sur une courbe de titration, où le pH varie-t-il peu ?", ["Autour des pK (effet tampon)", "Au pHi", "À la fin seulement", "Nulle part"], "Au pHi, au contraire, le pH saute."),
      ordre("r2", "Remets dans l'ordre les formes de l'alanine quand le pH monte.", ["Cation (+1)", "Zwitterion (0)", "Anion (−1)"], "Le COOH perd son H⁺ en premier.")
    ]
  },
  {
    id: "bc-proteines-15", fiche: F2, ficheTitre: F2T, titre: "AA à radical ionisable",
    classe: [
      E("Les AA <b>acides</b>, Asp et Glu, et <b>basiques</b>, Lys, Arg, His, ont une <b>3e fonction ionisable</b> dans leur radical, avec sa propre constante : le <b>pKR</b>.", [T("AA à radical ionisable"), LG("3e fonction ionisable dans R → pKR", "bleu")]),
      E("Le pHi se calcule alors avec les <b>deux pK qui encadrent</b> la forme neutre, le zwitterion.", [POST("pHi = moyenne des 2 pK qui encadrent la forme neutre", "cle")], "reflechit"),
      E("Exemple, l'<b>acide glutamique</b> : pHi égale la moitié de pK₁ plus pKR, environ <b>3,2</b>. C'est un AA acide, chargé moins à pH 7.", [EQ("Glu : pHi = ½ (pK₁ + pKR) ≈ 3,2 → acide, chargé − à pH 7")]),
      E("La <b>lysine</b> : pHi égale la moitié de pK₂ plus pKR, environ <b>10</b>. C'est un AA basique, chargé plus à pH 7.", [EQ("Lys : pHi = ½ (pK₂ + pKR) ≈ 10 → basique, chargé + à pH 7")]),
      E("Ces différences de charge permettent de <b>séparer</b> les AA, et les protéines, par <b>électrophorèse</b> ou chromatographie d'échange d'ions.", [LG("charges différentes → séparation : ÉLECTROPHORÈSE, échange d'ions", "vert", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quel est le pHi approximatif de l'acide glutamique ?", ["3,2", "6", "10", "7,4"], "AA acide : chargé − à pH 7."),
      qcm("a2", "À pH 7, quelle est la charge de la lysine (pHi ≈ 10) ?", ["Positive", "Négative", "Nulle", "Impossible à dire"], "pH < pHi → charge +.")
    ],
    revision: [
      qcm("r1", "Quelle technique sépare les AA selon leur charge ?", ["L'électrophorèse", "La spectrophotométrie à 280 nm", "Le polarimètre", "La centrifugation"], "Aussi la chromatographie d'échange d'ions.")
    ]
  },
  {
    id: "bc-proteines-16", fiche: F2, ficheTitre: F2T, titre: "Décarboxylation et amidification",
    classe: [
      E("Les réactions chimiques des AA. La <b>décarboxylation</b> : le COOH du carbone α part sous forme de <b>CO₂</b>, grâce à une décarboxylase propre à chaque AA. Coenzyme : la <b>vitamine B6</b>. On obtient une <b>amine</b>, dite biogène quand elle a un rôle biologique.", [T("La décarboxylation"), EQ("AA → (décarboxylase, vit. B6) → amine + CO₂")]),
      E("Les exemples à connaître.", [GRI(["AA", "Amine biogène", "Rôle"], [["Histidine", "histamine", "inflammation, allergie"], ["Glutamate", "GABA", "neurotransmetteur du système nerveux central"], ["Cystéine", "cystéamine", "entre dans le coenzyme A (CoA-SH)"]], true), LG("aussi : dopamine, sérotonine", "noir", { taille: "petit" })]),
      E("L'<b>amidification</b> : le COOH du radical fixe de l'ammoniac, et devient une <b>amide</b>, CO–NH₂.", [EFF(), T("L'amidification"), EQ("glutamate + NH₃ + ATP → glutamine + ADP + Pi (glutamine synthétase)")]),
      E("La glutamine transporte ainsi l'ammoniac de façon <b>non toxique</b>. Elle est importante pour l'uréogenèse, dans le foie, et l'ammoniogenèse, dans le rein.", [POST("Glutamine : transport NON toxique de l'ammoniac (uréogenèse, ammoniogenèse)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle amine est formée par décarboxylation de l'histidine ?", ["L'histamine", "Le GABA", "La sérotonine", "La cystéamine"], "Médiateur de l'inflammation et de l'allergie."),
      qcm("a2", "Quel est le coenzyme des décarboxylases d'AA ?", ["La vitamine B6", "La vitamine C", "La vitamine B12", "La biotine"], "Aussi celui des transaminases.")
    ],
    revision: [
      qcm("r1", "Que produit la glutamine synthétase ?", ["De la glutamine, à partir de glutamate + NH₃ + ATP", "Du GABA", "De l'urée", "Du glutamate"], "Transport non toxique de l'ammoniac.")
    ]
  },
  {
    id: "bc-proteines-17", fiche: F2, ficheTitre: F2T, titre: "Transamination et désamination",
    classe: [
      E("La <b>condensation</b>, d'abord : le COOH d'un AA plus le NH₂ du suivant donnent une liaison peptidique et de l'eau. On la verra dans les peptides.", [T("Condensation, transamination, désamination"), EQ("AA₁–COOH + H₂N–AA₂ → liaison peptidique + H₂O")]),
      E("La <b>transamination</b> : on transfère le groupement amine d'un AA vers un α-cétoacide. Enzymes : les <b>transaminases</b>, avec la vitamine B6.", [EQ("ALAT : alanine + α-cétoglutarate ⇌ pyruvate + glutamate")]),
      E("Deux transaminases à connaître : l'<b>ALAT</b>, alanine, et l'<b>ASAT</b>, aspartate. Elles sont au centre du métabolisme de l'azote, et leur dosage dans le sang sert à surveiller le <b>foie</b>.", [POST("Transaminases ALAT, ASAT (vit. B6) · dosage sanguin = surveillance du foie", "cle")]),
      E("La <b>désamination</b> : l'AA perd sa fonction amine, surtout de façon oxydative. Le glutamate, issu des transaminations, devient α-cétoglutarate plus <b>NH₄⁺</b>, grâce à la glutamate déshydrogénase.", [EFF(), T("La désamination"), EQ("glutamate → α-cétoglutarate + NH₄⁺ (glutamate déshydrogénase)")]),
      E("L'ion ammonium, NH₄⁺, est <b>toxique</b>. Il part dans le cycle de l'<b>urée</b>, dans le foie, et l'urée est excrétée dans les urines.", [LG("NH₄⁺ TOXIQUE → cycle de l'urée (foie) → urines", "rouge", { taille: "grand" })], "content")
    ],
    questions: [
      qcm("a1", "Quel est le rôle d'une transaminase ?", ["Transférer le groupement amine d'un AA vers un α-cétoacide", "Retirer le COOH d'un AA", "Relier deux AA", "Fabriquer de l'urée"], "Ex. ALAT, ASAT, avec la vitamine B6."),
      qcm("a2", "À quoi sert le dosage sanguin des transaminases ?", ["Surveiller le foie", "Mesurer la glycémie", "Doser les protéines à 280 nm", "Surveiller les reins uniquement"], "ALAT, ASAT.")
    ],
    revision: [
      qcm("r1", "Que devient le NH₄⁺ libéré par la désamination ?", ["Il entre dans le cycle de l'urée, dans le foie", "Il est stocké dans le muscle", "Il devient du glucose", "Il est expiré"], "L'urée part ensuite dans les urines.")
    ]
  },

  /* ================= FICHE 3 ================= */
  {
    id: "bc-proteines-18", fiche: F3, ficheTitre: F3T, titre: "La liaison peptidique",
    classe: [
      E("La <b>liaison peptidique</b> relie deux AA. Le COOH du carbone α d'un AA réagit avec le NH₂ du carbone α du suivant. Le OH du COOH et un H du NH₂ partent ensemble sous forme d'<b>eau</b>.", [T("La liaison peptidique"), EQ("H₂N–CH(R₁)–COOH + H₂N–CH(R₂)–COOH → H₂N–CH(R₁)–CO–NH–CH(R₂)–COOH + H₂O")]),
      E("On obtient un groupe CO–NH, une fonction <b>amide</b>. Cette réaction avec perte d'eau, c'est une <b>condensation</b>.", [LG("–CO–NH– (amide) · perte d'H₂O = CONDENSATION", "bleu", { taille: "grand" })]),
      E("Dans la cellule, la condensation se fait sur les <b>ribosomes</b>, pendant la traduction, grâce à la peptidyl-transférase. Elle demande de l'énergie : ATP, GTP.", [LG("cellule : ribosomes (traduction) · peptidyl-transférase · énergie (ATP, GTP)", "noir", { puce: "•" })]),
      E("La réaction inverse : l'<b>hydrolyse</b>, on ajoute de l'eau pour couper. Elle est catalysée par les <b>peptidases</b>, par exemple dans l'intestin grêle, pendant la digestion des protéines.", [EQ("hydrolyse (+ H₂O) : peptidases (digestion)"), POST("Condensation (– H₂O) ⇄ hydrolyse (+ H₂O, peptidases)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle fonction chimique forme la liaison peptidique ?", ["Une amide (–CO–NH–)", "Un ester", "Un éther", "Une liaison osidique"], "Entre COOH et NH₂ de deux carbones α."),
      qcm("a2", "Quelles enzymes hydrolysent les liaisons peptidiques lors de la digestion ?", ["Les peptidases", "Les lipases", "Les transaminases", "Les décarboxylases"], "Hydrolyse = ajout d'eau.")
    ],
    revision: [
      vf("r1", "La formation d'une liaison peptidique libère une molécule d'eau.", true, "Vrai : c'est une condensation.")
    ]
  },
  {
    id: "bc-proteines-19", fiche: F3, ficheTitre: F3T, titre: "Une liaison rigide et plane",
    classe: [
      E("La liaison peptidique est <b>stable, rigide et plane</b>. Pourquoi ? À cause de la <b>mésomérie</b>, ou résonance : le doublet libre de l'azote se délocalise vers l'oxygène.", [T("Stable, rigide et plane"), LG("MÉSOMÉRIE : le doublet de l'N se délocalise vers l'O", "bleu")]),
      E("Résultat : la liaison C–N a un caractère partiel de double liaison. Sa longueur, 0,132 nm, est entre celle d'une simple, 0,149, et d'une double, 0,127.", [GRI(["Liaison", "Longueur"], [["simple C–N", "0,149 nm"], ["peptidique C–N", "0,132 nm (intermédiaire)"], ["double C=N", "0,127 nm"]], true)]),
      E("Conséquences : <b>pas de libre rotation</b> autour de C–N. Les 4 atomes C, O, N, H sont dans un même plan rigide. Seules les liaisons autour du <b>carbone α</b> peuvent tourner.", [LG("pas de rotation autour de C–N · C, O, N, H dans un PLAN", "rouge", { puce: "•" }), LG("rotation possible seulement autour du carbone α", "vert", { puce: "•" })], "reflechit"),
      E("Ces contraintes décident des replis possibles de la chaîne, donc de la <b>structure secondaire</b>.", [POST("Mésomérie → liaison stable, rigide, plane · rotation seulement autour du Cα", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi la liaison peptidique est-elle rigide ?", ["La mésomérie lui donne un caractère partiel de double liaison", "Elle est très longue", "Elle contient un soufre", "Elle est ionique"], "Le doublet de l'azote se délocalise."),
      qcm("a2", "Autour de quoi la chaîne peut-elle tourner ?", ["Autour du carbone α", "Autour de la liaison C–N", "Autour de l'oxygène", "Nulle part"], "La liaison peptidique elle-même ne tourne pas.")
    ],
    revision: [
      vf("r1", "Les atomes C, O, N et H de la liaison peptidique sont dans un même plan.", true, "Vrai : liaison plane et rigide.")
    ]
  },
  {
    id: "bc-proteines-20", fiche: F3, ficheTitre: F3T, titre: "Nommer un peptide",
    classe: [
      E("Les chaînes sont <b>orientées</b> : les AA sont reliés dans un ordre précis, dicté par l'ARN messager, donc par le gène. Toutes les fonctions du carbone α sont engagées, sauf aux deux bouts.", [T("La nomenclature des peptides"), LG("ordre précis dicté par l'ARNm (donc le gène)", "noir")]),
      E("L'AA dont l'amine est libre : <b>N-terminal</b>. Celui dont le COOH est libre : <b>C-terminal</b>. Un AA engagé dans une chaîne s'appelle un <b>résidu</b>.", [LG("N-TERMINAL : NH₂ libre · C-TERMINAL : COOH libre · AA dans la chaîne = RÉSIDU", "bleu")]),
      E("On écrit toujours de <b>gauche à droite</b>, du N-terminal vers le C-terminal.", [POST("Écriture : N-terminal (gauche) → C-terminal (droite)", "cle")]),
      E("Chaque résidu prend le suffixe <b>-yl</b>, sauf le dernier, le C-terminal, qui garde son nom. Valine plus alanine plus glycine : valyl-alanyl-glycine.", [EQ("Val + Ala + Gly = valyl-alanyl-glycine"), EQ("Tyr-Gly-Gly-Phe-Leu = tyrosyl-glycyl-glycyl-phénylalanyl-leucine")]),
      E("Plus simple : les codes. Val-Glu-Phe-Ala, ou VEFA.", [LG("Val-Glu-Phe-Ala = VEFA = valyl-glutamyl-phénylalanyl-alanine", "vert")], "content")
    ],
    questions: [
      qcm("a1", "Comment s'écrit le tripeptide Val + Ala + Gly ?", ["Valyl-alanyl-glycine", "Valine-alanine-glycyl", "Glycyl-alanyl-valine", "Valyl-alanyl-glycyl"], "« -yl » partout sauf pour le C-terminal."),
      qcm("a2", "Dans quel sens écrit-on un peptide ?", ["Du N-terminal (gauche) au C-terminal (droite)", "Du C-terminal au N-terminal", "Du plus petit AA au plus gros", "Par ordre alphabétique"], "Toujours dans ce sens.")
    ],
    revision: [
      qcm("r1", "Comment appelle-t-on un AA engagé dans une chaîne peptidique ?", ["Un résidu", "Un monomère libre", "Un protomère", "Un zwitterion"], "Ex. : le 3e résidu de la chaîne.")
    ]
  },
  {
    id: "bc-proteines-21", fiche: F3, ficheTitre: F3T, titre: "Trouver la composition",
    classe: [
      E("Deux mots à distinguer. La <b>composition</b> : la nature et le nombre des AA. La <b>séquence</b> : l'ordre dans lequel ils sont enchaînés.", [T("Composition et séquence"), LG("COMPOSITION = nature + nombre · SÉQUENCE = ordre", "bleu", { taille: "grand" })]),
      E("Pour la composition, étape 1 : l'<b>hydrolyse totale</b>. Acide : HCl 6 N, 110 °C, 24 heures, en tube scellé sans air. Inconvénients : le tryptophane est détruit, la tyrosine et la sérine en partie, et la glutamine devient de l'acide glutamique, l'asparagine de l'acide aspartique.", [EFF(), T("Étape 1 : l'hydrolyse totale"), LG("ACIDE : HCl 6 N, 110 °C, 24 h, sans air · Trp détruit, Gln → Glu, Asn → Asp", "rouge", { puce: "•" })]),
      E("Alcaline, avec la soude : elle préserve le tryptophane mais détruit d'autres AA. Elle sert surtout à doser le Trp. Ou enzymatique, avec un mélange de protéases.", [LG("ALCALINE (soude) : préserve le Trp → sert à doser le Trp", "bleu", { puce: "•" }), LG("ENZYMATIQUE : mélange de protéases", "bleu", { puce: "•" })]),
      E("Étape 2 : <b>séparer et doser</b> les AA par <b>chromatographie</b>, dont la chromatographie liquide haute performance, puis détection par absorbance UV. Les AA qui n'absorbent pas les UV sont d'abord couplés à une molécule qui absorbe ou est fluorescente.", [EQ("Étape 2 : chromatographie (CLHP) → détection UV"), POST("Composition : hydrolyse (HCl 6 N, 110 °C, 24 h) puis chromatographie", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelles sont les conditions de l'hydrolyse acide totale ?", ["HCl 6 N, 110 °C, 24 h, sans air", "Soude, 37 °C, 1 h", "Eau, 100 °C, 10 min", "Pepsine, pH 2"], "En tube scellé, pour éviter les oxydations."),
      qcm("a2", "Quel AA est détruit par l'hydrolyse acide ?", ["Le tryptophane", "L'alanine", "La glycine", "La leucine"], "On le dose après hydrolyse alcaline.")
    ],
    revision: [
      vf("r1", "La séquence d'un peptide, c'est la nature et le nombre de ses AA.", false, "Faux : ça, c'est la composition. La séquence, c'est l'ordre.")
    ]
  },
  {
    id: "bc-proteines-22", fiche: F3, ficheTitre: F3T, titre: "Trouver la séquence",
    classe: [
      E("Pour la séquence, on part de l'AA <b>N-terminal</b>, le seul à avoir une amine libre.", [T("Déterminer la séquence"), LG("on part du N-terminal (seule amine libre)", "noir")]),
      E("Méthodes <b>non récurrentes</b> : elles identifient seulement le 1er AA, et le reste du peptide est détruit. La méthode de <b>Sanger</b>, avec le 2,4-dinitrofluorobenzène. La <b>dansylation</b>, avec le chlorure de dansyle : l'AA dansylé est fluorescent.", [LG("NON RÉCURRENTES (1er AA seulement) : Sanger (dinitrofluorobenzène) · dansylation (fluorescent)", "rouge", { puce: "•" })]),
      E("Méthode <b>récurrente</b> d'<b>Edman</b> : réactif <b>PITC</b>, phénylisothiocyanate. En milieu basique, il se fixe sur le NH₂ libre. En milieu acide doux, le 1er AA est détaché et identifié par chromatographie. Le reste du peptide est intact : on recommence.", [EQ("Edman : PITC se fixe sur NH₂ libre → 1er AA détaché → identifié → on recommence"), LG("jusqu'à ≈ 50 AA, en séquenceur automatique", "noir", { taille: "petit" })]),
      E("À chaque tour, on lit l'AA suivant. On obtient la séquence un AA à la fois.", [POST("Sanger, dansylation : 1er AA seulement · Edman (PITC) : récurrente", "cle")], "reflechit"),
      E("Attention à ne pas confondre la méthode de Sanger pour les protéines, années 1950, séquence de l'insuline, Nobel 1958, avec celle de séquençage de l'ADN, 1977. Aujourd'hui, on séquence surtout par spectrométrie de masse ; Edman reste utilisée pour le N-terminal.", [POST("Sanger protéines (insuline, Nobel 1958) ≠ Sanger ADN (1977)", "piege")])
    ],
    questions: [
      qcm("a1", "Quel réactif utilise la méthode d'Edman ?", ["Le PITC (phénylisothiocyanate)", "Le 2,4-dinitrofluorobenzène", "Le chlorure de dansyle", "La ninhydrine"], "Méthode récurrente."),
      qcm("a2", "Pourquoi la méthode d'Edman est-elle dite récurrente ?", ["Elle détache les AA un par un sans détruire le reste du peptide", "Elle détruit le peptide", "Elle ne donne que la composition", "Elle se fait en une seule étape"], "On peut recommencer à chaque tour.")
    ],
    revision: [
      qcm("r1", "Que permet d'identifier la méthode de Sanger sur un peptide ?", ["Seulement l'AA N-terminal", "Toute la séquence", "Le C-terminal", "La structure tertiaire"], "Méthode non récurrente.")
    ]
  },
  {
    id: "bc-proteines-23", fiche: F3, ficheTitre: F3T, titre: "L'insuline",
    classe: [
      E("L'<b>insuline</b>, importante pour le BTS. Hormone <b>hypoglycémiante</b>, fabriquée par les cellules β des îlots de Langerhans du pancréas. Première séquence de protéine déterminée, par Sanger, en 1955.", [T("L'insuline"), LG("hormone HYPOGLYCÉMIANTE · cellules β des îlots de Langerhans", "bleu")]),
      E("Deux chaînes : <b>A</b>, 21 AA, avec une glycine N-terminale, et <b>B</b>, 30 AA, avec une phénylalanine N-terminale. Reliées par <b>2 ponts disulfure</b>. Un 3e pont, à l'intérieur de la chaîne A, l'aide à se replier. Ni tryptophane ni méthionine.", [GRI(["Chaîne", "Nb d'AA", "AA N-terminal"], [["A", "21", "glycine"], ["B", "30", "phénylalanine"]], true), LG("2 ponts S–S entre A et B + 1 dans A", "rouge", { puce: "•" })]),
      E("Un pont disulfure, c'est une liaison <b>covalente</b> formée par l'oxydation de deux groupes thiol, SH, de cystéines.", [POST("Pont disulfure : covalent, entre 2 cystéines (–SH + –SH → –S–S–)", "astuce")]),
      E("Sa fabrication. Un : transcription du gène en ARNm. Deux : traduction sur les ribosomes du REG, on obtient la <b>pro-insuline</b>, une seule chaîne. Trois : dans le Golgi, une endopeptidase coupe en 2 points : insuline plus <b>peptide C</b>. Quatre : exocytose.", [EFF(), T("De la pro-insuline à l'insuline"), EQ("gène → ARNm → pro-insuline (1 chaîne) → (endopeptidase) → insuline + peptide C → exocytose")]),
      E("Insuline et peptide C sont libérés en <b>quantités égales</b> : doser le peptide C mesure ce que le pancréas produit lui-même. Et l'insuline des traitements du diabète est fabriquée par génie génétique.", [POST("Insuline : A (21) + B (30), ponts S–S · pro-insuline → insuline + peptide C (quantités égales)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien d'acides aminés comptent les chaînes A et B de l'insuline ?", ["A : 21, B : 30", "A : 30, B : 21", "A : 51, B : 0", "A : 9, B : 9"], "Reliées par 2 ponts disulfure."),
      qcm("a2", "Pourquoi dose-t-on le peptide C ?", ["Il est libéré en même quantité que l'insuline : il mesure la sécrétion du pancréas", "Il fait baisser la glycémie", "Il remplace l'insuline", "Il mesure la fonction du foie"], "Insuline et peptide C sortent en quantités égales.")
    ],
    revision: [
      ordre("r1", "Remets dans l'ordre la fabrication de l'insuline.", ["Transcription du gène en ARNm", "Traduction en pro-insuline", "Coupure : insuline + peptide C", "Exocytose"], "La maturation se fait dans le Golgi."),
      qcm("r2", "Quelles cellules fabriquent l'insuline ?", ["Les cellules β des îlots de Langerhans", "Les cellules α du pancréas", "Les hépatocytes", "Les adipocytes"], "Les cellules α font le glucagon.")
    ]
  },
  {
    id: "bc-proteines-24", fiche: F3, ficheTitre: F3T, titre: "Le glutathion",
    classe: [
      E("Le <b>glutathion</b>, noté G-SH : un tripeptide soufré, γ-glutamyl-cystéinyl-glycine.", [T("Le glutathion (G-SH)"), EQ("γGlu-Cys-Gly")]),
      E("Un « pseudo-tripeptide » : le glutamate est lié à la cystéine par le COOH de son <b>radical</b>, porté par le carbone γ, et non par celui du carbone α.", [POST("Pseudo-tripeptide : Glu lié par le COOH de son radical (carbone γ)", "piege")], "reflechit"),
      E("Chaque cellule en fabrique. Il est abondant dans le foie, les reins, les poumons, le cœur, le cerveau, les globules rouges.", [LG("fabriqué par chaque cellule · abondant : foie, reins, poumons, cœur, cerveau, hématies", "noir", { puce: "•" })]),
      E("C'est le principal <b>antioxydant</b> des cellules, grâce au <b>thiol</b> de sa cystéine. La glutathion peroxydase, qui contient du sélénium, l'utilise pour neutraliser peroxydes et radicaux libres. Ça l'oxyde. Puis la <b>glutathion réductase</b> le régénère, avec du <b>NADPH</b> venant de la voie des pentoses phosphates.", [EQ("G-SH → (peroxydase, Se) → neutralise les radicaux → G-S–S-G"), EQ("G-S–S-G → (glutathion réductase, NADPH) → G-SH")]),
      E("Dans les hématies, il maintient le fer de l'hémoglobine sous forme <b>Fe²⁺</b>, la forme qui fixe l'O₂.", [POST("Glutathion : antioxydant (–SH) · régénéré par la glutathion réductase (NADPH)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Grâce à quoi le glutathion est-il antioxydant ?", ["Au thiol (–SH) de sa cystéine", "À son fer", "À sa glycine", "À son phosphate"], "Il neutralise les peroxydes et radicaux libres."),
      qcm("a2", "Quelle enzyme régénère le glutathion oxydé ?", ["La glutathion réductase (avec du NADPH)", "La glutathion peroxydase", "La catalase", "L'insuline"], "Le NADPH vient de la voie des pentoses phosphates.")
    ],
    revision: [
      qcm("r1", "De quels AA est formé le glutathion ?", ["Glutamate, cystéine, glycine", "Glycine, alanine, valine", "Aspartate, phénylalanine", "Lysine, arginine, histidine"], "γGlu-Cys-Gly.")
    ]
  },
  {
    id: "bc-proteines-25", fiche: F3, ficheTitre: F3T, titre: "Ocytocine, ADH et aspartame",
    classe: [
      E("L'<b>ocytocine</b> et l'<b>ADH</b>, ou vasopressine : deux nonapeptides, <b>9 AA</b>, qui ne diffèrent que par 2 AA. Fabriqués par des neurones de l'hypothalamus, libérés par la post-hypophyse : ce sont des hormones.", [T("Ocytocine et ADH"), LG("2 nonapeptides (9 AA) · hypothalamus → post-hypophyse", "bleu")]),
      E("Un pont disulfure entre 2 cystéines. Et leur COOH C-terminal est <b>amidifié</b>, CO–NH₂ : ça les protège des exopeptidases et augmente leur durée de vie.", [LG("1 pont S–S · C-terminal AMIDIFIÉ → protégé des exopeptidases", "noir", { puce: "•" })]),
      E("L'<b>ocytocine</b> : contraction des muscles lisses, surtout de l'<b>utérus</b> à l'accouchement, et éjection du <b>lait</b>. L'<b>ADH</b>, hormone antidiurétique : sécrétée quand l'osmolarité du plasma monte ou quand le volume sanguin baisse. Elle fait <b>réabsorber l'eau</b> par le rein : urine concentrée, volémie et pression artérielle en hausse.", [GRI(["Hormone", "Rôle"], [["Ocytocine", "contraction de l'utérus (accouchement), éjection du lait"], ["ADH (vasopressine)", "réabsorption d'eau par le rein → urine concentrée, pression ↑"]], true)]),
      E("Enfin l'<b>aspartame</b>, E951 : un dipeptide, acide aspartique plus phénylalanine, sous forme d'ester méthylique. Son pouvoir sucrant est environ <b>200 fois</b> celui du saccharose. Il apporte 4 kcal par gramme, mais on l'utilise en quantités infimes : apport négligeable, pas cariogène, pas d'effet sur la glycémie.", [EFF(), T("L'aspartame (E951)"), EQ("Asp + Phe (ester méthylique) · ≈ 200 × le saccharose")]),
      E("Il est <b>contre-indiqué</b> en cas de <b>phénylcétonurie</b>, une maladie génétique où la phénylalanine s'accumule. D'où la mention « contient une source de phénylalanine » sur les étiquettes.", [POST("Aspartame : Asp-Phe · contre-indiqué en cas de phénylcétonurie", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Quel est le rôle de l'ADH ?", ["Faire réabsorber l'eau par le rein", "Contracter l'utérus", "Faire baisser la glycémie", "Éjecter le lait"], "Hormone antidiurétique."),
      qcm("a2", "Pourquoi l'aspartame est-il contre-indiqué en cas de phénylcétonurie ?", ["Il contient de la phénylalanine", "Il contient du sucre", "Il est très calorique", "Il contient du gluten"], "La phénylalanine s'accumule dans cette maladie.")
    ],
    revision: [
      qcm("r1", "Combien d'AA comptent l'ocytocine et l'ADH ?", ["9", "21", "3", "30"], "Deux nonapeptides."),
      vf("r2", "L'aspartame a un pouvoir sucrant environ 200 fois supérieur à celui du saccharose.", true, "Vrai, d'où des quantités infimes.")
    ]
  },

  /* ================= FICHE 4 ================= */
  {
    id: "bc-proteines-26", fiche: F4, ficheTitre: F4T, titre: "Définir et classer les protéines",
    classe: [
      E("Les <b>protéines</b> : des macromolécules de plus de 100 AA en général. Les molécules organiques les plus abondantes des cellules, souvent plus de 50 % du poids sec. Leur nom vient du grec <i>protos</i>, « premier ».", [T("Les protéines"), LG("> 100 AA · + de 50 % du poids sec des cellules · protos = « premier »", "noir")]),
      E("Elles traduisent l'information génétique : chaque gène code une protéine à rôle précis. Cinq grandes catégories de rôles : structure, régulation, transport, signalisation, et motrices, qui transforment l'énergie chimique en mouvement.", [LG("rôles : structure · régulation · transport · signalisation · motrices", "bleu", { puce: "•" })]),
      E("On les classe selon leur composition, leur forme et leur rôle.", [EFF(), T("Classification"), GRI(["Critère", "Catégories"], [
        ["Composition", "holoprotéines (AA seuls : sérumalbumine, kératine, élastine) · hétéroprotéines (+ groupement prosthétique)"],
        ["Forme", "fibreuses (allongées, insolubles, mécaniques : kératine, collagène) · globulaires (sphériques, solubles : hémoglobine, enzymes)"],
        ["Rôle", "structurelles (kératine, collagène) · fonctionnelles (enzymes, hormones, transporteurs)"]
      ], true)]),
      E("Les <b>fibreuses</b> sont souvent des hélices enroulées en super-hélice, comme la kératine α ou la triple hélice du collagène, parfois des feuillets β, comme la soie. Les <b>globulaires</b> sont solubles car leurs radicaux polaires sont à la surface et forment des liaisons H avec l'eau.", [POST("Fibreuses : allongées, insolubles · globulaires : sphériques, solubles (radicaux polaires en surface)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Pourquoi les protéines globulaires sont-elles solubles ?", ["Leurs radicaux polaires sont à la surface et se lient à l'eau", "Elles n'ont pas de radicaux", "Elles sont très petites", "Elles contiennent des lipides"], "Liaisons H avec l'eau."),
      qcm("a2", "Lequel de ces exemples est une holoprotéine ?", ["La sérumalbumine", "L'hémoglobine", "Une lipoprotéine", "Un cytochrome"], "Uniquement des AA.")
    ],
    revision: [
      vf("r1", "Le collagène est organisé en triple hélice.", true, "Vrai : 3 chaînes enroulées, fibre très résistante.")
    ]
  },
  {
    id: "bc-proteines-27", fiche: F4, ficheTitre: F4T, titre: "La structure primaire",
    classe: [
      E("Une protéine a <b>4 niveaux</b> de structure. Retiens l'idée clé : la séquence détermine tout le reste, et la forme détermine la fonction.", [T("Les 4 niveaux de structure"), RANG([
        { titre: "Primaire", x: "séquence des AA · liaisons peptidiques", c: "noir" },
        { titre: "Secondaire", x: "hélice α, feuillet β · liaisons hydrogène", c: "bleu" },
        { titre: "Tertiaire", x: "repliement 3D d'une chaîne · liaisons faibles + ponts S–S", c: "vert" },
        { titre: "Quaternaire", x: "plusieurs chaînes (protomères) · ex. hémoglobine", c: "rouge" }
      ]), MONTRE(1)]),
      E("La structure <b>primaire</b> : la composition plus la <b>séquence</b>, l'ordre des AA du N-terminal au C-terminal. Elle est déterminée par le <b>gène</b>.", [SOUL()]),
      E("La connaître permet d'identifier la protéine, de la synthétiser, de détecter une maladie génétique. Exemple : la <b>drépanocytose</b>. Dans l'hémoglobine, un seul AA change : glutamate remplacé par valine en position 6 de la chaîne β. Résultat : hématies en faucille, qui transportent mal l'O₂.", [POST("Drépanocytose : 1 seul AA changé (Glu → Val en 6 de la chaîne β)", "piege")], "reflechit"),
      E("Pour la composition : hydrolyse, chromatographie, puis coloration à la <b>ninhydrine</b>. Pour la séquence, une protéine étant longue, on la coupe d'abord en peptides avec des enzymes : la <b>trypsine</b> coupe après la lysine et l'arginine ; la chymotrypsine ailleurs. On séquence chaque morceau, puis on les remet dans l'ordre grâce à leurs chevauchements, comme un puzzle.", [EFF(), T("Déterminer la structure primaire"), LG("composition : hydrolyse → chromatographie → NINHYDRINE", "bleu", { puce: "•" }), LG("séquence : coupure (TRYPSINE : après Lys, Arg) → Edman → puzzle des chevauchements", "bleu", { puce: "•" })]),
      E("Comparer une même protéine chez plusieurs espèces révèle des séquences <b>conservées</b>, souvent essentielles à la fonction, comme le site actif des enzymes.", [LG("séquences CONSERVÉES entre espèces = souvent essentielles (site actif)", "vert", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce que la structure primaire d'une protéine ?", ["La séquence de ses AA", "Son hélice α", "Son repliement 3D", "L'association de ses chaînes"], "Déterminée par le gène."),
      qcm("a2", "Après quels AA la trypsine coupe-t-elle ?", ["Lysine et arginine", "Glycine et alanine", "Cystéine", "Proline"], "On séquence ensuite chaque morceau.")
    ],
    revision: [
      qcm("r1", "Quelle anomalie cause la drépanocytose ?", ["Glu remplacé par Val en position 6 de la chaîne β", "Absence de chaîne α", "Excès de fer", "Perte d'un pont disulfure"], "Un seul AA changé."),
      qcm("r2", "Quel réactif colore les AA lors du dosage de la composition ?", ["La ninhydrine", "Le PITC", "Le SDS", "L'urée"], "Après hydrolyse et chromatographie.")
    ]
  },
  {
    id: "bc-proteines-28", fiche: F4, ficheTitre: F4T, titre: "La structure secondaire",
    classe: [
      E("La structure <b>secondaire</b> : la forme géométrique <b>locale</b> de la chaîne. La liaison peptidique, rigide et plane, favorise les positions qui permettent des <b>liaisons hydrogène</b> entre le N–H et le C=O des liaisons peptidiques.", [T("La structure secondaire"), LG("forme LOCALE · liaisons H entre N–H et C=O des liaisons peptidiques", "bleu")]),
      E("L'<b>hélice α</b> : la chaîne s'enroule comme un ressort, 3,6 AA par tour. Les liaisons H sont dans la même chaîne, <b>parallèles à l'axe</b>, entre un AA et celui situé 4 plus loin. Les radicaux pointent vers l'extérieur. Elle est élastique.", [GRI(["", "Hélice α", "Feuillet β"], [["Forme", "ressort (3,6 AA par tour)", "portions de chaîne côte à côte, en zigzag"], ["Liaisons H", "dans la même chaîne, parallèles à l'axe (n et n + 4)", "entre les portions de chaîne"], ["Particularité", "radicaux vers l'extérieur · élastique", "parallèle (même sens) ou antiparallèle"]], true), MONTRE(1)]),
      E("Le <b>feuillet β</b> : des portions de chaîne étirées en zigzag, posées côte à côte et reliées par des liaisons H. Même sens : <b>parallèle</b>. Sens opposés : <b>antiparallèle</b>.", [MONTRE(2), MONTRE(3)]),
      E("Autres structures : la <b>triple hélice</b> du collagène, trois chaînes enroulées, une fibre très résistante ; et la <b>pelote statistique</b>, des zones sans structure définie. Plusieurs structures coexistent dans une protéine : par exemple 20 % d'hélice α, 40 % de feuillet β, le reste en pelote.", [POST("Secondaire : hélice α, feuillet β (liaisons H N–H / C=O), triple hélice, pelote", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelles liaisons stabilisent la structure secondaire ?", ["Les liaisons hydrogène entre N–H et C=O", "Les ponts disulfure", "Les liaisons peptidiques", "Les liaisons ioniques entre radicaux"], "Hélice α et feuillet β."),
      qcm("a2", "Combien d'AA par tour compte une hélice α ?", ["3,6", "10", "1", "4"], "Liaisons H entre n et n + 4.")
    ],
    revision: [
      vf("r1", "Dans un feuillet β antiparallèle, les portions de chaîne vont dans le même sens.", false, "Faux : sens opposés = antiparallèle ; même sens = parallèle.")
    ]
  },
  {
    id: "bc-proteines-29", fiche: F4, ficheTitre: F4T, titre: "La structure tertiaire",
    classe: [
      E("La structure <b>tertiaire</b> : la forme 3D définitive d'une chaîne, son repliement complet. Elle explique la forme globulaire de nombreuses protéines. C'est cette forme qui rend la protéine <b>active</b>.", [T("La structure tertiaire"), LG("repliement 3D COMPLET d'une chaîne → forme ACTIVE", "bleu")]),
      E("Elle est maintenue par les <b>radicaux</b> des AA : les fonctions du carbone α sont déjà prises dans les liaisons peptidiques.", [LG("maintenue par les RADICAUX (le Cα est déjà engagé)", "noir")]),
      E("Avec l'eau : les radicaux hydrophiles sont tournés vers l'<b>extérieur</b>, les hydrophobes cachés à l'<b>intérieur</b>, dans une poche hydrophobe.", [POST("Hydrophobes dedans, hydrophiles dehors", "cle")]),
      E("Entre AA : liaisons électrostatiques, liaisons H, interactions hydrophobes, forces de Van der Waals, et les <b>ponts disulfure</b>, covalents, entre 2 cystéines. Et l'encombrement des gros radicaux interdit certaines positions.", [LG("liaisons faibles (électrostatiques, H, hydrophobes, Van der Waals) + ponts S–S (covalents)", "vert", { puce: "•" })]),
      E("Exemple : la <b>myoglobine</b>, surtout des hélices α, sans feuillet β ni pont disulfure.", [LG("ex. myoglobine : surtout hélices α, ni feuillet β ni pont S–S", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Où se placent les radicaux hydrophobes dans une protéine globulaire ?", ["À l'intérieur, dans une poche hydrophobe", "À la surface", "Dans les liaisons peptidiques", "Ils sont éliminés"], "Les hydrophiles sont à l'extérieur."),
      qcm("a2", "Quelle liaison covalente peut stabiliser la structure tertiaire ?", ["Le pont disulfure", "La liaison hydrogène", "La liaison ionique", "La force de Van der Waals"], "Entre deux cystéines.")
    ],
    revision: [
      vf("r1", "La structure tertiaire est maintenue par les fonctions du carbone α.", false, "Faux : par les radicaux ; les fonctions du Cα sont dans les liaisons peptidiques.")
    ]
  },
  {
    id: "bc-proteines-30", fiche: F4, ficheTitre: F4T, titre: "Structure quaternaire et liaisons",
    classe: [
      E("La structure <b>quaternaire</b> : plusieurs chaînes s'associent, chacune avec ses structures primaire, secondaire et tertiaire. Seules certaines protéines l'ont : elle est <b>facultative</b>.", [T("La structure quaternaire"), LG("plusieurs chaînes (PROTOMÈRES) · FACULTATIVE", "bleu")]),
      E("On parle de protéines oligomériques ; chaque sous-unité est un <b>protomère</b>. Elles sont liées surtout par des liaisons faibles, parfois des ponts disulfure, comme dans les anticorps. La protéine n'est fonctionnelle que si cette structure est respectée.", [LG("ex. HÉMOGLOBINE : hétérotétramère (2 α + 2 β) · enzymes allostériques", "vert", { puce: "•" })]),
      E("Récapitulons les liaisons.", [EFF(), T("Les liaisons des protéines"), GRI(["Liaison", "Entre quoi", "Force", "Niveaux"], [
        ["Peptidique", "COOH (Cα) et NH₂ (Cα) suivant", "covalente", "primaire"],
        ["Pont disulfure", "–SH de 2 cystéines", "covalente", "tertiaire (parfois quaternaire)"],
        ["Hydrogène", "H lié à N ou O + doublet d'un N ou O", "faible", "2, 3, 4"],
        ["Électrostatique", "radical + et radical −", "faible", "3, 4"],
        ["Hydrophobe", "radicaux apolaires regroupés", "faible", "3, 4"],
        ["Van der Waals", "atomes très proches", "très faible", "3, 4"]
      ])]),
      E("Seules la liaison peptidique et le pont disulfure sont <b>covalentes</b>. Tout le reste est faible : la forme d'une protéine est donc fragile.", [MONTRE(1), MONTRE(2), MONTRE(3), MONTRE(4), MONTRE(5), MONTRE(6)]),
      E("Le principe fondamental : c'est la <b>conformation</b> d'une protéine qui conditionne sa <b>fonction</b>. Si la conformation est perturbée, la protéine est dénaturée et devient inactive.", [POST("Structure → fonction : conformation perturbée = protéine inactive", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien de protomères compte l'hémoglobine ?", ["4 (2 α + 2 β)", "1", "2", "8"], "C'est un hétérotétramère."),
      qcm("a2", "Lesquelles de ces liaisons sont covalentes ?", ["Liaison peptidique et pont disulfure", "Liaison H et Van der Waals", "Liaisons électrostatique et hydrophobe", "Toutes"], "Le reste est faible.")
    ],
    revision: [
      vf("r1", "Toutes les protéines ont une structure quaternaire.", false, "Faux : elle est facultative (plusieurs chaînes)."),
      paires("r2", "Relie chaque niveau à ce qui le maintient.", [["Primaire", "Liaisons peptidiques"], ["Secondaire", "Liaisons H entre N–H et C=O"], ["Tertiaire", "Liaisons faibles entre radicaux + ponts S–S"]], "Le quaternaire : surtout des liaisons faibles entre protomères.")
    ]
  },
  {
    id: "bc-proteines-31", fiche: F4, ficheTitre: F4T, titre: "La solubilité des protéines",
    classe: [
      E("La <b>solubilité</b> : la quantité maximale de protéine qui se dissout. Les protéines sont toutes insolubles dans les solvants organiques : on parle de solubilité dans l'eau. Elle dépend de la protéine : globulaires solubles, fibreuses insolubles.", [T("La solubilité"), LG("toutes insolubles dans les solvants organiques · globulaires solubles, fibreuses insolubles", "noir")]),
      E("La <b>charge</b> d'une protéine vient de ses <b>radicaux</b> ionisables, pas des liaisons peptidiques. Elle varie selon le pH. Chaque protéine a son <b>pHi</b>, où sa charge est nulle. Au-dessus, elle est chargée moins ; en dessous, plus.", [LG("pH > pHi → ANIONIQUE (−) · pH < pHi → CATIONIQUE (+)", "bleu"), LG("→ séparation par ÉLECTROPHORÈSE", "bleu", { puce: "•" })]),
      E("Les facteurs du milieu.", [EFF(), T("Facteurs du milieu"), GRI(["Facteur", "Effet"], [
        ["Force ionique faible", "effet DISSOLVANT : les ions dispersent les protéines"],
        ["Force ionique élevée", "RELARGAGE : les sels captent l'eau, les protéines précipitent"],
        ["pH", "solubilité MINIMALE au pHi (charge nulle, les molécules s'agrègent)"],
        ["Solvants organiques", "perturbent les liaisons avec l'eau → précipitation"]
      ], true)]),
      E("Retiens surtout : la solubilité est <b>minimale au pHi</b>. Les molécules ne se repoussent plus et s'agrègent. Plus on s'éloigne du pHi, plus la protéine est soluble. Et beaucoup de sel la fait précipiter : c'est le <b>relargage</b>, utilisé au labo pour séparer les protéines.", [POST("Solubilité ↓ au pHi · relargage (beaucoup de sel) · solvants organiques → précipitation", "cle")], "reflechit")
    ],
    questions: [
      qcm("a1", "À quel pH une protéine est-elle la moins soluble ?", ["À son pHi", "À pH 7 toujours", "À pH 14", "À pH 0"], "Charge nulle : les molécules s'agrègent."),
      qcm("a2", "Qu'est-ce que le relargage ?", ["La précipitation des protéines par une forte concentration de sels", "La dissolution par un peu de sel", "La dénaturation par la chaleur", "La coupure par la trypsine"], "Sert à séparer les protéines au labo.")
    ],
    revision: [
      qcm("r1", "D'où vient la charge globale d'une protéine ?", ["De ses radicaux ionisables", "De ses liaisons peptidiques", "Du carbone α", "De l'eau"], "Elle varie selon le pH.")
    ]
  },
  {
    id: "bc-proteines-32", fiche: F4, ficheTitre: F4T, titre: "La dénaturation",
    classe: [
      E("La <b>dénaturation</b> : les structures quaternaire, tertiaire et secondaire sont modifiées, <b>sans rupture de la chaîne</b>. La structure primaire reste intacte. La fonction biologique disparaît.", [T("La dénaturation"), LG("structures 2, 3, 4 détruites · PRIMAIRE INTACTE · fonction perdue", "rouge", { taille: "grand" })]),
      E("Les protéines sont fragiles : leur forme repose sur des liaisons de faible énergie.", [LG("forme = liaisons FAIBLES → fragile", "noir")]),
      E("Deux étapes. D'abord, les liaisons faibles, et parfois les ponts disulfure, se rompent : c'est <b>réversible</b>. Si on retire l'agent dénaturant, la protéine peut retrouver sa forme et son activité : c'est la <b>renaturation</b>. Ensuite, de nouvelles liaisons faibles se forment ailleurs : c'est <b>irréversible</b>.", [EQ("1 · rupture des liaisons faibles → RÉVERSIBLE (renaturation possible)"), EQ("2 · nouvelles liaisons ailleurs → IRRÉVERSIBLE")]),
      E("Les conséquences : perte de l'<b>activité</b>, la plus importante, par exemple une enzyme dont le site actif change de forme. Baisse de la <b>solubilité</b>, car les groupes hydrophobes cachés sont exposés. Et la protéine est plus sensible aux enzymes : meilleure <b>digestibilité</b>.", [EFF(), T("Les conséquences"), LG("perte de l'ACTIVITÉ (ex. site actif d'une enzyme)", "rouge", { puce: "•" }), LG("solubilité ↓ (hydrophobes exposés)", "rouge", { puce: "•" }), LG("DIGESTIBILITÉ ↑ (plus sensible aux protéases)", "vert", { puce: "•" })]),
      E("Application : la cuisson dénature les protéines, comme le blanc d'œuf qui durcit. Ça ne diminue pas leur valeur nutritionnelle, au contraire : elles sont souvent mieux digérées.", [POST("Dénaturation : primaire intacte · réversible puis irréversible · cuisson = meilleure digestibilité", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle structure reste intacte lors de la dénaturation ?", ["La structure primaire", "La structure secondaire", "La structure tertiaire", "Aucune"], "Pas de rupture des liaisons peptidiques."),
      vf("a2", "La cuisson diminue la valeur nutritionnelle des protéines.", false, "Faux : la dénaturation améliore souvent leur digestibilité.")
    ],
    revision: [
      qcm("r1", "Qu'est-ce que la renaturation ?", ["Le retour d'une protéine à sa forme et son activité après retrait de l'agent dénaturant", "La coupure de la chaîne", "La synthèse d'une nouvelle protéine", "La précipitation au pHi"], "Possible seulement à la 1re étape."),
      qcm("r2", "Quand la dénaturation devient-elle irréversible ?", ["Quand de nouvelles liaisons faibles se forment sur d'autres sites", "Dès la rupture des premières liaisons faibles", "Jamais", "Quand la chaîne est coupée"], "La 1re étape est réversible, la 2e irréversible.")
    ]
  },
  {
    id: "bc-proteines-33", fiche: F4, ficheTitre: F4T, titre: "Les agents dénaturants",
    classe: [
      E("Qu'est-ce qui dénature une protéine ? Voici les agents.", [T("Les agents dénaturants"), GRI(["Agent", "Action, exemples"], [
        ["Chaleur", "rupture des liaisons H et ioniques · souvent dès 45-60 °C · ex. blanc d'œuf qui coagule"],
        ["UV", "accélèrent la dénaturation, qui devient irréversible"],
        ["pH extrême", "perturbe les liaisons ioniques · ex. suc gastrique (pH ≈ 2)"],
        ["Urée (forte dose)", "agent chaotropique : liaisons H et hydrophobes"],
        ["Détergents (SDS)", "liaisons ioniques et hydrophobes · taches protéiques"],
        ["Réducteur (mercaptoéthanol)", "rompt les ponts disulfure"],
        ["Action mécanique", "blancs en neige, pétrissage → perte des hélices α"]
      ], true)]),
      E("La <b>chaleur</b> : les molécules vibrent et tournent plus, les liaisons H et ioniques cassent. Réversible jusqu'à un seuil propre à chaque protéine, souvent 45 à 60 °C. Les <b>UV</b> rendent la dénaturation irréversible.", [MONTRE(1), MONTRE(2)]),
      E("Le <b>pH extrême</b> : le suc gastrique, à pH 2 environ, dénature les protéines des aliments et facilite leur digestion. L'exception : la <b>pepsine</b>, l'enzyme de l'estomac, qui est active à ce pH.", [MONTRE(3), POST("Pepsine : active à pH ≈ 2, alors que ce pH dénature les autres protéines", "piege")], "reflechit"),
      E("L'<b>urée</b> et les <b>détergents</b>, comme le SDS, perturbent les liaisons faibles. Mais ils ne coupent pas les ponts disulfure : pour ça, il faut un <b>réducteur</b>, le mercaptoéthanol.", [MONTRE(4), MONTRE(5), MONTRE(6), POST("Ponts disulfure : coupés par le mercaptoéthanol, pas par l'urée ni le SDS", "astuce")]),
      E("Et l'<b>action mécanique</b> : battre des blancs en neige, pétrir, laminer. Intérêts de tout ça : la cuisson et la digestion, et la lutte contre les bactéries, avec la chaleur et l'alcool.", [MONTRE(7)], "content")
    ],
    questions: [
      qcm("a1", "Quel agent rompt les ponts disulfure ?", ["Le mercaptoéthanol (réducteur)", "L'urée", "Le SDS", "La chaleur douce"], "L'urée et le SDS ne les coupent pas."),
      qcm("a2", "Quelle enzyme reste active au pH très acide de l'estomac ?", ["La pepsine", "L'amylase salivaire", "La trypsine", "La lipase pancréatique"], "Son pH optimal est d'environ 2.")
    ],
    revision: [
      paires("r1", "Relie chaque agent à un exemple.", [["Chaleur", "Blanc d'œuf qui coagule"], ["Action mécanique", "Blancs en neige"], ["pH extrême", "Suc gastrique"]], "Dénaturation au quotidien."),
      qcm("r2", "Comment agit l'urée à forte concentration ?", ["Elle perturbe les liaisons hydrogène et hydrophobes", "Elle coupe les liaisons peptidiques", "Elle rompt les ponts disulfure", "Elle augmente le pH"], "Agent chaotropique.")
    ]
  },

  /* ================= FICHE 5 ================= */
  {
    id: "bc-proteines-34", fiche: F5, ficheTitre: F5T, titre: "Les familles d'hétéroprotéines (1)",
    classe: [
      E("Une <b>hétéroprotéine</b>, ou protéine conjuguée, c'est une <b>apoprotéine</b>, la partie protéique, plus un <b>groupement prosthétique</b>, non protéique, fortement lié et indispensable à la fonction. On les classe selon ce groupement.", [T("Les hétéroprotéines"), EQ("Hétéroprotéine = apoprotéine + groupement prosthétique")]),
      E("Les <b>métalloprotéines</b> : un ion métallique, Fe, Cu, Zn, Mg, Ca. Plus de 40 % des protéines utilisent un métal ! Exemples : ferritine, qui stocke le fer ; transferrine, qui le transporte ; anhydrase carbonique, à zinc ; céruloplasmine, à cuivre ; superoxyde dismutase.", [GRI(["Famille", "Groupement", "Exemples"], [
        ["Métalloprotéines", "ion métallique (Fe, Cu, Zn…)", "ferritine (stock de fer), transferrine (transport du fer), anhydrase carbonique (Zn)"],
        ["Chromoprotéines", "pigment coloré", "hème : hémoglobine, myoglobine, cytochromes · non porphyriniques : flavoprotéines, rhodopsine"],
        ["Phosphoprotéines", "acide phosphorique sur Ser, Thr ou Tyr", "permanent : caséine (lait) · temporaire : kinases / phosphatases"]
      ], true), MONTRE(1)]),
      E("Les <b>chromoprotéines</b> : un pigment coloré, visible à l'œil nu. Porphyriniques, avec l'<b>hème</b>, porphyrine plus fer : hémoglobine, myoglobine, cytochromes de la chaîne respiratoire, catalase. Non porphyriniques : les flavoprotéines, avec le FAD, jaunes ; la rhodopsine, avec le rétinal, pour la vision.", [MONTRE(2)]),
      E("Les <b>phosphoprotéines</b> : un acide phosphorique estérifié sur une sérine, thréonine ou tyrosine. Permanent : la caséine du lait, la vitelline du jaune d'œuf. Temporaire : phosphorylation et déphosphorylation par des kinases et des phosphatases, pour réguler des voies, comme le glycogène du foie.", [MONTRE(3), POST("Métallo- (ferritine) · chromo- (hème, flavine) · phospho- (P sur Ser/Thr/Tyr : caséine)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le groupement prosthétique d'une phosphoprotéine comme la caséine ?", ["Un acide phosphorique", "Un hème", "Un sucre", "Un ion zinc"], "Fixé sur une sérine, thréonine ou tyrosine."),
      qcm("a2", "Quelle protéine stocke le fer ?", ["La ferritine", "La transferrine", "La céruloplasmine", "La caséine"], "La transferrine le transporte.")
    ],
    revision: [
      paires("r1", "Relie chaque chromoprotéine à son pigment.", [["Hémoglobine", "Hème"], ["Rhodopsine", "Rétinal"], ["Flavoprotéine", "FAD (jaune)"]], "Porphyriniques ou non."),
      qcm("r2", "Qu'est-ce qu'un groupement prosthétique ?", ["La partie non protéique, indispensable, d'une hétéroprotéine", "Une chaîne d'AA", "Un protomère", "Un résidu N-terminal"], "Lié à l'apoprotéine.")
    ]
  },
  {
    id: "bc-proteines-35", fiche: F5, ficheTitre: F5T, titre: "Les familles d'hétéroprotéines (2)",
    classe: [
      E("Suite. Les <b>lipoprotéines</b> : des lipides associés <b>sans</b> liaison covalente. Elles transportent les lipides dans le sang.", [T("Lipo-, glyco-, nucléoprotéines"), GRI(["Lipoprotéine", "Rôle"], [["Chylomicrons", "TG alimentaires"], ["VLDL", "TG du foie"], ["LDL", "apportent le cholestérol aux cellules · en excès → athérome (« mauvais »)"], ["HDL", "retour du cholestérol au foie (« bon »)"]], true)]),
      E("Tu les as vues en détail avec les lipides.", [LG("détails : cours « Métabolisme des lipides »", "noir", { taille: "petit" })]),
      E("Les <b>glycoprotéines</b> : des chaînes courtes d'oses fixées par liaison <b>covalente</b>, dans le réticulum et le Golgi. Exemples : les protéines du plasma sauf l'albumine, l'ovalbumine, les hormones LH et FSH, les immunoglobulines, les antigènes ABO et HLA des membranes. Rôles : reconnaissance entre cellules, cicatrisation, immunité.", [EFF(), T("Glycoprotéines et nucléoprotéines"), LG("GLYCOprotéines : oses (covalent) · plasma (sauf albumine), LH, FSH, Ig, ABO, HLA", "vert", { puce: "•" })]),
      E("Les <b>nucléoprotéines</b> : des acides nucléiques. Exemple : les <b>histones</b>, des protéines basiques associées à l'ADN dans le noyau.", [LG("NUCLÉOprotéines : acides nucléiques · ex. histones + ADN", "bleu", { puce: "•" }), POST("Lipo- (chylomicrons, VLDL, LDL, HDL) · glyco- (ABO, HLA, LH/FSH) · nucléo- (histones-ADN)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Laquelle de ces protéines du plasma n'est PAS une glycoprotéine ?", ["L'albumine", "Les immunoglobulines", "La LH", "La FSH"], "Les protéines du plasma sont des glycoprotéines, sauf l'albumine."),
      qcm("a2", "Quel est le groupement prosthétique d'une nucléoprotéine ?", ["Un acide nucléique", "Un hème", "Un lipide", "Un phosphate"], "Ex. histones associées à l'ADN.")
    ],
    revision: [
      vf("r1", "Dans les lipoprotéines, lipides et protéines sont reliés par des liaisons covalentes.", false, "Faux : associés sans liaison covalente.")
    ]
  },
  {
    id: "bc-proteines-36", fiche: F5, ficheTitre: F5T, titre: "L'hème et la myoglobine",
    classe: [
      E("Deux hémoprotéines célèbres : la <b>myoglobine</b> et l'<b>hémoglobine</b>. Leur comparaison montre bien le lien structure-fonction.", [T("L'hème"), LG("myoglobine et hémoglobine : 2 HÉMOprotéines (chromoprotéines)", "noir")]),
      E("Leur groupement prosthétique : l'<b>hème</b>, un noyau porphyrique plus un ion <b>ferreux, Fe²⁺</b>. C'est le Fe²⁺ qui fixe l'O₂, de façon réversible. La porphyrine absorbe la lumière visible : couleur rouge.", [EQ("Hème = porphyrine + Fe²⁺ (fixe l'O₂, réversible)"), POST("C'est le Fe²⁺ de l'hème qui fixe l'O₂", "cle")]),
      E("La <b>myoglobine</b> : dans le cytosol des fibres musculaires striées. Une seule chaîne, un seul hème : elle n'a qu'une structure tertiaire, surtout des hélices α.", [EFF(), T("La myoglobine"), LG("muscle strié · 1 chaîne + 1 hème (structure tertiaire)", "bleu")]),
      E("Son rôle : <b>réserve d'O₂</b> dans le muscle. Elle le cède aux mitochondries en cas de manque d'O₂, pour maintenir la production d'ATP. Mais la réserve est faible : quelques secondes d'effort intense.", [LG("RÉSERVE d'O₂ du muscle (quelques secondes d'effort intense)", "vert", { taille: "grand" })], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce qui fixe l'O₂ dans l'hème ?", ["L'ion ferreux Fe²⁺", "La porphyrine", "La globine", "Le zinc"], "De façon réversible."),
      qcm("a2", "Quel est le rôle de la myoglobine ?", ["Réserve d'O₂ dans le muscle", "Transport de l'O₂ dans le sang", "Transport du CO₂", "Stockage du fer"], "1 chaîne, 1 hème.")
    ],
    revision: [
      vf("r1", "La myoglobine possède une structure quaternaire.", false, "Faux : une seule chaîne, donc une structure tertiaire.")
    ]
  },
  {
    id: "bc-proteines-37", fiche: F5, ficheTitre: F5T, titre: "L'hémoglobine",
    classe: [
      E("L'<b>hémoglobine</b> : le constituant principal des hématies, plus de 250 millions de molécules par hématie. Elle donne sa couleur rouge au sang.", [T("L'hémoglobine"), LG("plus de 250 millions de molécules par hématie · couleur rouge du sang", "rouge")]),
      E("Les hématies sont fabriquées dans la <b>moelle osseuse rouge</b>, chez l'adulte surtout dans les os plats, sous le contrôle de l'<b>EPO</b>, sécrétée par le rein. Elles ont besoin de fer, de vitamine B12 et de folates, B9.", [LG("moelle osseuse rouge (os plats) · contrôle : EPO (rein) · besoin : fer, B12, B9", "noir", { puce: "•" })]),
      E("Structure quaternaire : un <b>hétérotétramère</b>, 4 globines plus 4 hèmes. Elle fixe jusqu'à <b>4 O₂</b>. Les globines font environ 96 % de la masse, l'hème 4 %. Sans fer, pas d'hème : la carence en fer donne une anémie.", [EQ("Hb + 4 O₂ ⇌ Hb(O₂)₄"), POST("Hémoglobine : 2 α + 2 β + 4 hèmes → 4 O₂", "cle")]),
      E("Trois formes, selon les globines.", [EFF(), T("Les formes d'hémoglobine"), GRI(["Forme", "Chaînes", "Où, quand"], [["HbA (adulte)", "α₂β₂", "≈ 97 % chez l'adulte"], ["HbA2", "α₂δ₂", "2 à 3 % chez l'adulte"], ["HbF (fœtale)", "α₂γ₂", "majoritaire chez le fœtus · < 1 % chez l'adulte"]], true)]),
      E("L'<b>HbF</b> a une plus forte affinité pour l'O₂ : elle fixe mal le 2,3-DPG. Elle capte ainsi l'O₂ du sang maternel à travers le placenta. Et la <b>drépanocytose</b> : chaîne β anormale, HbS, qui polymérise quand elle perd son O₂. Hématies en faucille, anémie, petits vaisseaux bouchés.", [LG("HbF : affinité ↑ → capte l'O₂ maternel (placenta)", "vert", { puce: "•" }), LG("drépanocytose : HbS (Glu → Val en 6 de β) → hématies en faucille", "rouge", { puce: "•" })], "content")
    ],
    questions: [
      qcm("a1", "Quelles chaînes composent l'HbF, l'hémoglobine fœtale ?", ["α₂γ₂", "α₂β₂", "α₂δ₂", "β₄"], "Majoritaire chez le fœtus."),
      qcm("a2", "Pourquoi l'HbF capte-t-elle l'O₂ du sang maternel ?", ["Elle a une plus forte affinité pour l'O₂", "Elle a plus de fer", "Elle n'a pas d'hème", "Elle est plus petite"], "Elle fixe mal le 2,3-DPG.")
    ],
    revision: [
      qcm("r1", "Combien de molécules d'O₂ une hémoglobine peut-elle fixer ?", ["4", "1", "2", "8"], "Une par hème."),
      qcm("r2", "Quelle hormone, sécrétée par le rein, contrôle la fabrication des hématies ?", ["L'EPO (érythropoïétine)", "L'ADH", "L'insuline", "L'aldostérone"], "Dans la moelle osseuse rouge."),
      qcm("r3", "Quelle est la formule de l'HbA, majoritaire chez l'adulte ?", ["α₂β₂", "α₂γ₂", "α₂δ₂", "β₄"], "≈ 97 % chez l'adulte ; elle fixe 4 O₂."), vf("r4", "Dans la drépanocytose, les hématies prennent une forme de faucille.", true, "Vrai : l'HbS polymérise quand elle est désoxygénée.")
    ]
  },
  {
    id: "bc-proteines-38", fiche: F5, ficheTitre: F5T, titre: "Les courbes de saturation",
    classe: [
      E("Comparons les courbes de saturation en O₂ : la part des sites occupés selon la quantité d'O₂ disponible, la PO₂.", [T("Les courbes de saturation"), GRI(["", "Myoglobine", "Hémoglobine"], [["Courbe", "HYPERBOLE", "SIGMOÏDE (en S)"], ["Affinité", "très forte, saturée même à faible PO₂", "variable : forte aux poumons, faible aux tissus"], ["Rôle", "RÉSERVE d'O₂ du muscle", "TRANSPORT et livraison de l'O₂"]], true)]),
      E("La <b>myoglobine</b> : courbe en <b>hyperbole</b>, une seule chaîne. Elle est saturée à presque 100 % même quand il y a peu d'O₂. Elle garde l'O₂ et ne le lâche que quand la PO₂ du muscle chute très bas, vers 5 mmHg, en effort intense.", [MONTRE(1), MONTRE(2)]),
      E("L'<b>hémoglobine</b> : courbe <b>sigmoïde</b>, en S, due à la coopération entre ses 4 sous-unités. Le <b>plateau</b>, côté poumons : à 100 mmHg, saturée à plus de 97 % ; déjà 90 % à 60 mmHg, une marge de sécurité.", [MONTRE(3), LG("PLATEAU (poumons) : ≈ 100 mmHg → > 97 % · 60 mmHg → 90 %", "bleu", { puce: "•" })]),
      E("La <b>pente raide</b>, côté tissus : sous 60 mmHg, une petite baisse de PO₂ fait libérer beaucoup d'O₂. Au repos, le sang veineux, vers 40 mmHg, est encore saturé à 75 % ; à l'effort, il en cède bien plus.", [LG("PENTE (tissus) : petite baisse de PO₂ → beaucoup d'O₂ libéré", "rouge", { puce: "•" })], "reflechit"),
      E("La <b>P50</b> : la PO₂ où l'hémoglobine est à moitié saturée, environ 26 mmHg. Et 1 g d'hémoglobine fixe environ 1,34 mL d'O₂ ; elle transporte presque tout l'O₂ du sang.", [POST("Myoglobine : hyperbole · Hb : sigmoïde (plateau poumons, pente tissus) · P50 ≈ 26 mmHg", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle est la forme de la courbe de saturation de l'hémoglobine ?", ["Sigmoïde (en S)", "Hyperbolique", "Droite", "En cloche"], "Due à la coopérativité de ses 4 sous-unités."),
      qcm("a2", "Que représente la P50 ?", ["La PO₂ à laquelle l'Hb est à moitié saturée", "La saturation à 50 mmHg", "La pression artérielle moyenne", "La moitié de l'O₂ du sang"], "≈ 26 mmHg.")
    ],
    revision: [
      vf("r1", "La myoglobine libère facilement son O₂ dès que la PO₂ baisse un peu.", false, "Faux : très forte affinité ; elle ne le lâche que vers 5 mmHg (effort intense)."),
      qcm("r2", "Pourquoi la pente raide de la courbe de l'Hb est-elle utile ?", ["Une petite baisse de PO₂ dans les tissus libère beaucoup d'O₂", "Elle fixe plus d'O₂ dans les poumons", "Elle stocke l'O₂", "Elle bloque le CO₂"], "C'est la partie « tissulaire »."),
      qcm("r3", "Quelle est la forme de la courbe de saturation de la myoglobine ?", ["Une hyperbole", "Une sigmoïde", "Une droite", "Une cloche"], "Une seule chaîne : pas de coopérativité.")
    ]
  },
  {
    id: "bc-proteines-39", fiche: F5, ficheTitre: F5T, titre: "Coopérativité et effet Bohr",
    classe: [
      E("L'hémoglobine a deux conformations. <b>T</b>, tendue : la forme sans O₂, compacte, faible affinité. <b>R</b>, relâchée : la forme avec O₂, plus lâche, forte affinité.", [T("Formes T et R"), GRI(["Forme", "État", "Affinité pour l'O₂"], [["T (tendue)", "désoxygénée, compacte", "faible"], ["R (relâchée)", "oxygénée, plus lâche", "forte"]], true)]),
      E("Quand un O₂ se fixe sur un hème, les chaînes glissent et tournent : la molécule passe peu à peu de T à R, et les autres sous-unités fixent l'O₂ plus facilement. Le 1er O₂ se fixe lentement, les suivants de plus en plus vite. C'est la <b>coopérativité positive</b>.", [LG("1er O₂ → passage T → R → les suivants se fixent + facilement = COOPÉRATIVITÉ", "vert")]),
      E("L'<b>allostérie</b> : la fixation d'une molécule sur un site modifie la fixation d'une autre sur un site éloigné. L'hémoglobine est une <b>protéine allostérique</b>, comme certaines enzymes.", [POST("T (désoxy, faible affinité) ⇄ R (oxy, forte affinité) · Hb = protéine allostérique", "cle")]),
      E("Les facteurs qui <b>diminuent</b> l'affinité, et font donc libérer l'O₂ : la <b>température</b>, quand le muscle chauffe à l'effort ; le <b>CO₂ et les H⁺</b>, c'est l'<b>effet Bohr</b> ; et le <b>2,3-DPG</b>.", [EFF(), T("Ce qui fait libérer l'O₂"), GRI(["Facteur", "Effet"], [["Température ↑", "affinité ↓ → l'O₂ est libéré (muscle chaud)"], ["CO₂ ↑, H⁺ ↑ = effet Bohr", "se fixent sur la globine → O₂ libéré là où les tissus travaillent"], ["2,3-DPG ↑", "stabilise la forme T → libération facilitée · ↑ en altitude"]], true)]),
      E("L'<b>effet Bohr</b> est malin : dans les tissus actifs, le CO₂ et les H⁺ font lâcher l'O₂ ; dans les poumons, ils partent et l'O₂ se fixe. Et le <b>2,3-DPG</b>, issu de la glycolyse des hématies, augmente lors d'un séjour prolongé en <b>altitude</b> : une adaptation recherchée par les sportifs.", [POST("Affinité ↓ si température ↑, CO₂/H⁺ ↑ (effet Bohr), 2,3-DPG ↑", "cle")], "reflechit")
    ],
    questions: [
      qcm("a1", "Qu'est-ce que l'effet Bohr ?", ["CO₂ et H⁺ diminuent l'affinité de l'Hb pour l'O₂", "L'O₂ augmente la fixation du CO₂", "Le fer passe en Fe³⁺", "L'HbF capte l'O₂ maternel"], "L'O₂ est libéré là où les tissus travaillent."),
      qcm("a2", "Quelle forme de l'hémoglobine a la plus forte affinité pour l'O₂ ?", ["R (relâchée)", "T (tendue)", "Les deux pareil", "Aucune"], "T = désoxygénée, faible affinité.")
    ],
    revision: [
      qcm("r1", "Pourquoi le 2,3-DPG augmente-t-il en altitude ?", ["Pour faciliter la libération d'O₂ aux tissus", "Pour fixer plus de CO₂", "Pour détruire les hématies", "Pour augmenter la forme R"], "Il stabilise la forme T."),
      vf("r2", "L'hémoglobine est une protéine allostérique.", true, "Vrai : coopérativité entre ses 4 sous-unités."),
      qcm("r3", "Comment s'appelle la forme désoxygénée, de faible affinité, de l'hémoglobine ?", ["T (tendue)", "R (relâchée)", "HbF", "HbS"], "R = relâchée, oxygénée, forte affinité.")
    ]
  },
  {
    id: "bc-proteines-40", fiche: F5, ficheTitre: F5T, titre: "Le transport du CO₂",
    classe: [
      E("Le <b>CO₂</b> produit par les cellules voyage vers les poumons sous 3 formes.", [T("Le transport du CO₂"), GRI(["Forme", "Part"], [["Bicarbonate (HCO₃⁻)", "≈ 70 %"], ["Fixé sur la globine (carbaminohémoglobine)", "≈ 20 %"], ["Dissous dans le plasma", "≈ 7-10 %"]], true)]),
      E("Surtout en <b>bicarbonate</b>, environ 70 %. Dans les hématies, l'<b>anhydrase carbonique</b>, une métalloprotéine à zinc, accélère la réaction.", [EQ("CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺ (anhydrase carbonique, Zn)")]),
      E("Environ 20 % est fixé sur la <b>globine</b>, et non sur le fer : c'est la carbaminohémoglobine. Et un peu est dissous dans le plasma.", [POST("CO₂ fixé sur la GLOBINE, pas sur le fer", "piege")], "pointe"),
      E("Les H⁺ libérés sont pris en charge par l'hémoglobine, c'est un effet tampon, ce qui favorise la libération d'O₂ : l'effet Bohr. Dans les poumons, tout s'inverse : le CO₂ est expiré et l'Hb fixe l'O₂.", [LG("H⁺ pris par l'Hb (tampon) → O₂ libéré (effet Bohr) · poumons : tout s'inverse", "bleu", { puce: "•" })]),
      E("L'hémoglobine relie donc les deux échanges : elle prend l'O₂ et rend le CO₂ dans les poumons, et fait l'inverse dans les tissus. Bravo, tu as fini la structure des protéines !", [EFF(), T("L'essentiel de la fiche 5"), POST("Hétéroprotéine = apoprotéine + groupement prosthétique · hème = porphyrine + Fe²⁺ · myoglobine : réserve, hyperbole · Hb : 2α + 2β, 4 O₂, sigmoïde, T ⇄ R · effet Bohr · CO₂ surtout en HCO₃⁻", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Sous quelle forme le CO₂ est-il surtout transporté ?", ["En bicarbonate (HCO₃⁻)", "Fixé sur le fer de l'hème", "Dissous dans le plasma", "Dans les plaquettes"], "≈ 70 %, grâce à l'anhydrase carbonique."),
      qcm("a2", "Quelle enzyme des hématies forme le bicarbonate ?", ["L'anhydrase carbonique", "La glutathion réductase", "La catalase", "La trypsine"], "Une métalloprotéine à zinc.")
    ],
    revision: [
      vf("r1", "Le CO₂ se fixe sur le fer de l'hémoglobine.", false, "Faux : il se fixe sur la globine (carbaminohémoglobine).")
    ]
  }

  ]
};
