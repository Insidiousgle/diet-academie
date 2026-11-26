// Cours : Les lipides, structure (Sciences › Biochimie › Biochimie structurale)
// Source : fiches « Les lipides » 1 à 5.
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, RANG, MONTRE, GRI, EQ } from './briques.mjs';

const F1 = "Fiche 1", F1T = "Introduction aux lipides";
const F2 = "Fiche 2", F2T = "Les acides gras";
const F3 = "Fiche 3", F3T = "Glycérides, stérides et cérides";
const F4 = "Fiche 4", F4T = "Les lipides complexes";
const F5 = "Fiche 5", F5T = "Les dérivés lipidiques";

export default {
  id: "bc-lipides",
  titre: "Les lipides : structure",
  persos: {},
  carte: {
    depart: "Huile, beurre, cholestérol, membranes, hormones, vitamines… Tout ça, ce sont des lipides. Comment s'y retrouver ?",
    etapes: [
      { titre: "Introduction", verbe: "Je classe", question: "Qu'est-ce qu'un lipide, à quoi ça sert ?", mots: "hydrophobe · 9 kcal/g · simples / complexes · saponification" },
      { titre: "Les acides gras", verbe: "Je décode", question: "Comment lire (18:2 n-6) ?", mots: "notations Δ et ω · saturés / insaturés · cis / trans · indices" },
      { titre: "Glycérides, stérides, cérides", verbe: "J'assemble", question: "Glycérol, cholestérol, alcool gras + AG", mots: "TG · cholestérol · lipoprotéines · sels biliaires · cires" },
      { titre: "Lipides complexes", verbe: "Je construis", question: "Les briques des membranes", mots: "phospholipides · phospholipases · céramide · jeûne" },
      { titre: "Dérivés lipidiques", verbe: "Je dérive", question: "Stéroïdes et vitamines A, D, E, K", mots: "hormones stéroïdes · rétinol · calcitriol · antioxydant · coagulation" }
    ],
    arrivee: "Tu sais reconnaître chaque famille de lipides, lire un acide gras, et expliquer leurs rôles dans le corps et dans l'assiette."
  },
  lecons: [

  /* ================= FICHE 1 ================= */
  {
    id: "bc-lipides-01", fiche: F1, ficheTitre: F1T, titre: "Qu'est-ce qu'un lipide ?",
    classe: [
      E("On attaque les <b>lipides</b> ! Première surprise : il n'y a <b>pas de définition unique</b>. On les reconnaît surtout à leur comportement face à l'eau.", [T("Qu'est-ce qu'un lipide ?"), LG("pas de définition unique → on les définit par leur comportement", "noir")], "reflechit"),
      E("Les lipides sont <b>hydrophobes</b> : insolubles dans l'eau, mais solubles dans les <b>solvants organiques</b>, comme l'éther, le chloroforme ou l'acétone.", [LG("HYDROPHOBES : insolubles dans l'eau", "bleu", { taille: "grand" }), LG("solubles dans les solvants organiques (éther, chloroforme, acétone…)", "bleu", { puce: "•" }), SOUL()]),
      E("Du coup, c'est une famille très <b>hétérogène</b> chimiquement. Mais la plupart contiennent au moins un <b>acide gras</b> : c'est leur élément de base.", [LG("famille chimiquement très hétérogène", "noir", { puce: "•" }), LG("la plupart contiennent au moins un ACIDE GRAS = élément de base", "vert", { puce: "•" })]),
      E("Et le chiffre à retenir : <b>1 gramme de lipides = 9 kcal</b>. C'est plus du double des glucides et des protéines, qui apportent 4 kcal par gramme.", [EQ("1 g de lipides = 9 kcal"), LG("contre 4 kcal/g pour les glucides et les protéines", "noir", { taille: "petit" }), POST("Lipides : hydrophobes · 9 kcal/g (glucides, protéines : 4)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Combien de kcal apporte 1 g de lipides ?", ["9 kcal", "4 kcal", "7 kcal", "17 kcal"], "9 kcal, contre 4 pour les glucides et les protéines."),
      vf("a2", "Les lipides sont solubles dans l'eau mais insolubles dans le chloroforme.", false, "Faux : c'est l'inverse. Hydrophobes, ils sont insolubles dans l'eau et solubles dans les solvants organiques.")
    ],
    revision: [
      qcm("r1", "Qu'est-ce qui définit surtout les lipides ?", ["Leur comportement hydrophobe", "Leur nombre pair de carbones", "La présence d'azote", "Leur goût sucré"], "Pas de définition chimique unique : on les reconnaît à leur insolubilité dans l'eau.")
    ]
  },
  {
    id: "bc-lipides-02", fiche: F1, ficheTitre: F1T, titre: "Les rôles des lipides",
    classe: [
      E("À quoi servent les lipides ? Trois grands rôles dans l'organisme.", [T("Les rôles des lipides"), RANG([
        { titre: "Réserve d'énergie", x: "triglycérides des adipocytes · lipolyse → AG → β-oxydation → beaucoup d'ATP · isolant thermique, protège les organes", c: "rouge" },
        { titre: "Structure", x: "phospholipides, sphingolipides, cholestérol → membranes (délimitent, compartimentent, fluidité) · céramides : barrière de la peau", c: "bleu" },
        { titre: "Activité biologique", x: "hormones stéroïdes (cortisol, œstrogènes, testostérone) · eicosanoïdes (inflammation, coagulation, pression artérielle, immunité)", c: "vert" }
      ])]),
      E("Un : la <b>réserve d'énergie</b>. Ce sont les <b>triglycérides</b> du tissu adipeux, dans les adipocytes. Quand on en a besoin : lipolyse, puis acides gras, puis β-oxydation, et beaucoup d'ATP. Le tissu adipeux isole aussi du froid et protège les organes.", [MONTRE(1)]),
      E("Deux : la <b>structure</b>. Les phospholipides, les sphingolipides et le cholestérol construisent les <b>membranes</b> : ils délimitent la cellule, la compartimentent et assurent sa fluidité. Les <b>céramides</b>, eux, forment la barrière de la peau.", [MONTRE(2)]),
      E("Trois : l'<b>activité biologique</b>. Les hormones stéroïdes, comme le cortisol, les œstrogènes ou la testostérone. Et les <b>eicosanoïdes</b> : prostaglandines, thromboxanes, leucotriènes, qui jouent sur l'inflammation, la coagulation, la pression artérielle et l'immunité.", [MONTRE(3), POST("Réserve = TG · Structure = phospholipides · Activité = stéroïdes, eicosanoïdes", "cle")], "content")
    ],
    questions: [
      paires("a1", "Relie chaque rôle à ses lipides.", [["Réserve d'énergie", "Triglycérides des adipocytes"], ["Structure des membranes", "Phospholipides et cholestérol"], ["Activité biologique", "Hormones stéroïdes, eicosanoïdes"]], "Réserve (TG), structure (phospholipides), activité biologique (stéroïdes, eicosanoïdes)."),
      qcm("a2", "Quels lipides forment la barrière de la peau ?", ["Les céramides", "Les triglycérides", "Les eicosanoïdes", "Les cérides"], "Les céramides : environ la moitié des lipides de la couche superficielle de la peau.")
    ],
    revision: [
      qcm("r1", "Que deviennent les triglycérides du tissu adipeux quand l'organisme a besoin d'énergie ?", ["Lipolyse → acides gras → β-oxydation → ATP", "Ils sont transformés en glucose en totalité", "Ils sont éliminés dans la bile", "Ils deviennent des phospholipides"], "Lipolyse, puis β-oxydation des acides gras : beaucoup d'ATP.")
    ]
  },
  {
    id: "bc-lipides-03", fiche: F1, ficheTitre: F1T, titre: "Les rôles nutritionnels",
    classe: [
      E("En plus de leurs rôles dans le corps, les lipides de l'<b>alimentation</b> ont deux rôles nutritionnels bien distincts.", [T("Les rôles nutritionnels"), LG("1 · absorption des vitamines liposolubles A, D, E, K", "bleu", { puce: "•" })]),
      E("Premier rôle : ils permettent d'<b>absorber les vitamines liposolubles</b>, A, D, E et K. Pas de graisses dans le repas, et ces vitamines passent mal.", [SOUL()]),
      E("Deuxième rôle : ils apportent les <b>acides gras indispensables</b>, ceux que l'organisme ne sait pas fabriquer.", [LG("2 · apport des ACIDES GRAS INDISPENSABLES", "rouge", { puce: "•" })]),
      E("Il y en a trois à connaître : l'acide <b>linoléique</b>, un oméga 6 ; l'acide <b>α-linolénique</b>, un oméga 3 ; et le <b>DHA</b>, un oméga 3 que l'on fabrique, mais en trop faible quantité.", [GRI(["Acide gras", "Famille", "Remarque"], [["Linoléique", "oméga 6", "non fabriqué"], ["α-linolénique", "oméga 3", "non fabriqué"], ["DHA", "oméga 3", "fabriqué en trop faible quantité"]]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E("Retiens bien ce trio, il reviendra souvent.", [POST("AG indispensables : linoléique (ω6), α-linolénique (ω3), DHA (ω3)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Lequel de ces acides gras est indispensable et de la famille oméga 6 ?", ["L'acide linoléique", "L'acide α-linolénique", "L'acide oléique", "L'acide palmitique"], "Linoléique = ω6 ; α-linolénique = ω3."),
      vf("a2", "Les lipides alimentaires permettent l'absorption des vitamines A, D, E et K.", true, "Vrai : ce sont les vitamines liposolubles.")
    ],
    revision: [
      qcm("r1", "Pourquoi le DHA est-il compté parmi les acides gras indispensables ?", ["On le fabrique, mais en trop faible quantité", "On ne sait pas du tout le fabriquer", "Il est le seul oméga 9", "Il apporte plus de 9 kcal/g"], "Le DHA (ω3) est fabriqué, mais en quantité insuffisante.")
    ]
  },
  {
    id: "bc-lipides-04", fiche: F1, ficheTitre: F1T, titre: "La classification des lipides",
    classe: [
      E("Comment classer une famille aussi variée ? Selon leur <b>composition</b>. Trois groupes.", [T("La classification"), RANG([
        { titre: "Lipides simples (homolipides)", x: "C, H, O uniquement · acides gras, glycérides, stérides, cérides", c: "bleu" },
        { titre: "Lipides complexes (hétérolipides)", x: "C, H, O + P, N, parfois S · glycérophospholipides, sphingolipides", c: "vert" },
        { titre: "Composés à caractère lipidique", x: "PAS d'acide gras, mais hydrophobes · stéroïdes, vitamines liposolubles, terpènes", c: "rouge" }
      ])]),
      E("Les <b>lipides simples</b>, ou homolipides, ne contiennent que <b>C, H et O</b>. On y trouve les acides gras, et des molécules faites d'un alcool plus des acides gras.", [MONTRE(1), GRI(["Lipide simple", "Composition"], [["Acide gras", "élément de base"], ["Glycéride", "glycérol + AG"], ["Stéride", "stérol + AG"], ["Céride", "alcool gras + AG"]], true)]),
      E("Les <b>lipides complexes</b>, ou hétérolipides : en plus de C, H, O, ils contiennent du <b>phosphore</b>, de l'<b>azote</b>, parfois du <b>soufre</b>. Deux familles : les glycérophospholipides, glycérol plus 2 AG plus un phosphate ; et les sphingolipides, sphingosine plus un AG.", [EFF(), MONTRE(2), LG("glycérophospholipides = glycérol + 2 AG + P", "vert", { puce: "•" }), LG("sphingolipides = sphingosine + AG", "vert", { puce: "•" })]),
      E("Enfin les <b>composés à caractère lipidique</b> : ils n'ont <b>aucun acide gras</b>, mais ils sont hydrophobes, donc « apparentés » aux lipides. Ce sont les stéroïdes, comme le cholestérol libre, les vitamines liposolubles A, D, E, K, et les terpènes, comme les caroténoïdes.", [EFF(), MONTRE(3), LG("stéroïdes (cholestérol libre…) · vitamines A, D, E, K · terpènes (caroténoïdes)", "rouge", { puce: "•" })]),
      E("Le moyen de s'en souvenir : simples, juste C, H, O ; complexes, on ajoute P et N ; apparentés, pas d'acide gras du tout.", [POST("Simples : C, H, O · Complexes : + P, N (S) · Caractère lipidique : sans AG", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce qui distingue les lipides complexes des lipides simples ?", ["Ils contiennent aussi du P, du N, parfois du S", "Ils n'ont pas d'acide gras", "Ils sont solubles dans l'eau", "Ils n'ont que du C, H et O"], "Complexes = hétérolipides : C, H, O + P, N (parfois S)."),
      paires("a2", "Relie chaque lipide simple à sa composition.", [["Glycéride", "Glycérol + AG"], ["Stéride", "Stérol + AG"], ["Céride", "Alcool gras + AG"]], "Les trois lipides simples formés d'un alcool et d'acides gras.")
    ],
    revision: [
      qcm("r1", "Dans quel groupe classe-t-on les vitamines liposolubles ?", ["Composés à caractère lipidique", "Lipides simples", "Lipides complexes", "Glycérides"], "Pas d'acide gras, mais hydrophobes : composés à caractère lipidique."),
      vf("r2", "Un sphingolipide est un lipide simple.", false, "Faux : c'est un lipide complexe (sphingosine, qui contient de l'azote, + AG).")
    ]
  },
  {
    id: "bc-lipides-05", fiche: F1, ficheTitre: F1T, titre: "La saponification",
    classe: [
      E("Une réaction qui permet de classer les lipides : la <b>saponification</b>. C'est l'hydrolyse d'une liaison <b>ester</b> en milieu <b>basique</b>, avec de la soude ou de la potasse.", [T("La saponification"), EQ("ester (ex. triglycéride) + base → savon (sel d'AG) + alcool (glycérol)")]),
      E("On obtient un <b>savon</b>, c'est-à-dire un sel d'acide gras, et un alcool. Avec un triglycéride, l'alcool, c'est le glycérol.", [SOUL()]),
      E("Qui est saponifiable ? Tous les lipides qui contiennent des acides gras reliés par une liaison ester, ou amide pour les sphingolipides : glycérides, stérides, cérides, glycérophospholipides, sphingolipides.", [LG("SAPONIFIABLES : glycérides, stérides, cérides, glycérophospholipides, sphingolipides", "vert", { puce: "✓" })]),
      E("Insaponifiables : ceux qui n'ont pas d'acide gras lié. Les stéroïdes, les terpènes, et les prostaglandines.", [LG("INSAPONIFIABLES : stéroïdes, terpènes, prostaglandines", "rouge", { puce: "✗" })]),
      E("Piège ! Un acide gras <b>libre</b> plus une base, ce n'est pas une saponification : il n'y a pas d'ester à casser. C'est une simple <b>neutralisation</b>.", [POST("AG libre + base = simple NEUTRALISATION, pas une saponification", "piege")], "reflechit"),
      E("Autre piège : <b>stéride</b> et <b>stéroïde</b>. Le cholestérol libre est un stéroïde : insaponifiable. Le cholestérol estérifié, cholestérol plus acide gras, est un stéride : saponifiable. C'est sa forme de stockage et de transport. Et un céride, ou cire, c'est un alcool gras à longue chaîne plus un acide gras.", [EFF(), T("Ne pas confondre"), GRI(["Molécule", "Famille", "Saponifiable ?"], [["Cholestérol libre", "stéroïde", "non"], ["Cholestérol estérifié (+ AG)", "stéride", "oui (stockage, transport)"], ["Céride (cire)", "alcool gras + AG", "oui"]]), MONTRE(1), MONTRE(2), MONTRE(3)], "pointe")
    ],
    questions: [
      qcm("a1", "Que donne la saponification d'un triglycéride ?", ["Du savon (sels d'AG) et du glycérol", "Du cholestérol et de l'eau", "Un acyl-CoA", "Un phospholipide"], "Ester + base → savon + alcool (ici le glycérol)."),
      vf("a2", "Le cholestérol libre est saponifiable.", false, "Faux : c'est un stéroïde, sans acide gras. C'est le cholestérol ESTÉRIFIÉ (stéride) qui est saponifiable.")
    ],
    revision: [
      qcm("r1", "Que se passe-t-il quand on met un acide gras libre avec une base ?", ["Une simple neutralisation", "Une saponification", "Une estérification", "Une hydrogénation"], "Pas d'ester à hydrolyser : c'est une neutralisation."),
      paires("r2", "Stéride ou stéroïde ?", [["Cholestérol libre", "Stéroïde, insaponifiable"], ["Cholestérol + acide gras", "Stéride, saponifiable"]], "Stéride = stérol estérifié par un AG.")
    ]
  },
  {
    id: "bc-lipides-06", fiche: F1, ficheTitre: F1T, titre: "Les grandes familles",
    classe: [
      E("Faisons le tour des grandes familles, avec leur structure.", [T("Les grandes familles"), GRI(["Famille", "Structure", "Rôles, exemples"], [
        ["Acides gras", "COOH (hydrophile) + chaîne carbonée (hydrophobe)", "saturés, mono-, polyinsaturés"],
        ["Triglycérides", "glycérol + 3 AG (liaisons ester)", "les plus abondants · réserve du tissu adipeux"],
        ["Phospholipides", "tête polaire (phosphate + alcool) + 2 AG → amphiphiles", "membranes"],
        ["Stéroïdes", "noyau stérane : 4 cycles (A, B, C à 6 C ; D à 5 C)", "cholestérol, hormones, acides biliaires, vit. D"],
        ["Céramides", "sphingosine + AG (liaison amide)", "≈ 50 % des lipides de la surface de la peau"],
        ["Eicosanoïdes", "dérivés d'AG polyinsaturés à 20 C", "prostaglandines, thromboxanes, leucotriènes"]
      ])]),
      E("Les <b>acides gras</b> : une tête COOH hydrophile et une chaîne hydrophobe. Saturés, 0 double liaison, plutôt solides : beurre, viandes, coco, palme. Mono-insaturés, une double liaison : olive, arachide. Polyinsaturés, au moins deux : tournesol, soja, lin, poissons gras.", [MONTRE(1)]),
      E("Les <b>triglycérides</b> : glycérol plus trois AG, par des liaisons ester. Ce sont les lipides les plus abondants, dans les aliments comme dans le corps.", [MONTRE(2)]),
      E("Les <b>phospholipides</b> : une tête polaire, phosphate plus alcool, et deux AG, souvent un saturé et un insaturé. Selon l'alcool : phosphatidylcholine, ou <b>lécithine</b>, la plus abondante ; puis -éthanolamine, -sérine et -inositol.", [MONTRE(3)]),
      E("Les <b>stéroïdes</b> : le noyau <b>stérane</b>, quatre cycles. A, B et C ont 6 carbones, D en a 5. On y trouve le cholestérol, les hormones stéroïdes, les acides biliaires et la vitamine D.", [MONTRE(4), SOUL()]),
      E("Les <b>céramides</b> : sphingosine plus un AG par une liaison amide. Peu abondants libres dans les membranes, mais environ <b>50 %</b> des lipides de la couche superficielle de la peau. Et les <b>eicosanoïdes</b>, faits à partir d'AG polyinsaturés à 20 carbones, l'arachidonique, un ω6, ou l'EPA, un ω3, par les enzymes COX et LOX.", [MONTRE(5), MONTRE(6), POST("Eicosanoïdes : AG à 20 C (arachidonique ω6, EPA ω3) + enzymes COX / LOX", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Combien de cycles compte le noyau stérane ?", ["4 (A, B, C à 6 C ; D à 5 C)", "3, tous à 6 C", "6", "1 seul cycle à 5 C"], "Quatre cycles : A, B, C à 6 carbones et D à 5."),
      qcm("a2", "Quel est le phospholipide le plus abondant ?", ["La phosphatidylcholine (lécithine)", "La phosphatidylsérine", "Le phosphatidylinositol", "La sphingomyéline"], "La phosphatidylcholine, aussi appelée lécithine.")
    ],
    revision: [
      qcm("r1", "À partir de quoi sont fabriqués les eicosanoïdes ?", ["D'AG polyinsaturés à 20 C (arachidonique, EPA)", "Du cholestérol", "Du glycérol", "Des céramides"], "Eicosa = 20 : acide arachidonique (ω6) ou EPA (ω3), via COX et LOX."),
      paires("r2", "Relie chaque huile ou graisse à son type d'AG dominant.", [["Beurre, coco, palme", "Saturés"], ["Huile d'olive, arachide", "Mono-insaturés"], ["Tournesol, lin, poissons gras", "Polyinsaturés"]], "Saturés plutôt solides ; insaturés plutôt liquides.")
    ]
  },
  {
    id: "bc-lipides-07", fiche: F1, ficheTitre: F1T, titre: "Les lipides dans l'eau",
    classe: [
      E("Que font les lipides <b>amphiphiles</b> quand on les met dans l'eau ? Rappel : amphiphile, c'est une tête qui aime l'eau et une queue qui la fuit.", [T("Les lipides dans l'eau"), LG("tête HYDROPHILE (côté eau) + queue HYDROPHOBE", "bleu")]),
      E("Les molécules à <b>une seule chaîne</b>, comme les savons et les sels biliaires, forment des <b>micelles</b> : des petites sphères, têtes dehors, chaînes cachées au centre.", [LG("MICELLE : molécules à 1 chaîne (savons, sels biliaires)", "vert", { puce: "•" })]),
      E("Les <b>phospholipides</b>, avec leurs <b>deux chaînes</b>, forment des <b>bicouches</b> : deux rangées dos à dos. C'est la base des membranes.", [LG("BICOUCHE : phospholipides (2 chaînes) → membranes", "vert", { puce: "•" })]),
      E("Et si une bicouche se referme sur elle-même autour d'un peu d'eau, on obtient un <b>liposome</b>.", [LG("LIPOSOME : bicouche refermée autour d'eau", "vert", { puce: "•" })]),
      E("Le piège classique : les phospholipides forment des bicouches, <b>pas</b> des micelles.", [POST("Phospholipides → BICOUCHES (pas des micelles) · Micelles → savons, sels biliaires", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Quelle structure forment les phospholipides dans l'eau ?", ["Des bicouches", "Des micelles", "Des cristaux", "Des gouttelettes de TG"], "Avec leurs 2 chaînes, ils forment des bicouches (et des liposomes)."),
      qcm("a2", "Quelles molécules forment des micelles ?", ["Les savons et les sels biliaires", "Les triglycérides", "Le cholestérol estérifié", "Les phospholipides"], "Des molécules amphiphiles à une seule chaîne.")
    ],
    revision: [
      vf("r1", "Un liposome est une bicouche refermée autour d'un peu d'eau.", true, "Vrai.")
    ]
  },

  /* ================= FICHE 2 ================= */
  {
    id: "bc-lipides-08", fiche: F2, ficheTitre: F2T, titre: "Qu'est-ce qu'un acide gras ?",
    classe: [
      E("Zoom sur l'élément de base : l'<b>acide gras</b>, abrégé AG.", [T("Qu'est-ce qu'un acide gras ?"), EQ("AG = fonction carboxylique COOH + chaîne carbonée")]),
      E("Un AG a un seul groupement fonctionnel : la fonction <b>carboxylique COOH</b>, la tête hydrophile. Et une chaîne carbonée plus ou moins longue, qu'on appelle chaîne <b>aliphatique</b>, hydrophobe.", [LG("COOH : tête HYDROPHILE", "bleu", { puce: "•" }), LG("chaîne aliphatique : HYDROPHOBE", "rouge", { puce: "•" })]),
      E("Ils appartiennent à la famille des acides carboxyliques, avec deux points communs : un <b>nombre pair</b> de carbones, sauf rares exceptions, et une chaîne <b>linéaire</b>, non ramifiée.", [LG("nombre PAIR de carbones", "vert", { puce: "✓" }), LG("chaîne LINÉAIRE (non ramifiée)", "vert", { puce: "✓" }), SOUL()]),
      E("Ils diffèrent par le nombre de carbones et par la présence ou non de doubles liaisons, les insaturations. On en connaît plus d'une centaine, et on utilise surtout leurs noms usuels.", [LG("ils diffèrent par : nb de C · doubles liaisons (insaturations)", "noir", { taille: "petit" })]),
      E("Exemple : l'acide <b>palmitique</b>. Formule condensée : H₃C, puis 14 CH₂, puis COOH. En écriture topologique, chaque angle représente un carbone avec ses hydrogènes. Le carbone du COOH, c'est le C1.", [EQ("Acide palmitique : H₃C–(CH₂)₁₄–COOH"), POST("Le carbone du COOH = C1", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Quelles sont les deux caractéristiques communes des acides gras ?", ["Nombre pair de C et chaîne linéaire", "Nombre impair de C et chaîne ramifiée", "Deux fonctions COOH", "Un cycle à 6 carbones"], "Nombre pair de carbones (sauf rares exceptions), chaîne non ramifiée."),
      vf("a2", "Dans un acide gras, la chaîne carbonée est la partie hydrophile.", false, "Faux : la chaîne est hydrophobe ; c'est le COOH qui est hydrophile.")
    ],
    revision: [
      qcm("r1", "En écriture topologique, que représente chaque angle ?", ["Un carbone et ses hydrogènes", "Une double liaison", "Un oxygène", "Une liaison ester"], "Chaque angle = 1 carbone (et ses H).")
    ]
  },
  {
    id: "bc-lipides-09", fiche: F2, ficheTitre: F2T, titre: "Les notations des acides gras",
    classe: [
      E("Comment écrire un AG en abrégé ? Première notation : <b>nombre de carbones : nombre de doubles liaisons</b>.", [T("Les notations"), EQ("(16:0) = 16 C, 0 double liaison → acide palmitique")]),
      E("Pour situer les doubles liaisons, deux façons de compter. Le <b>Δ</b>, delta : on compte depuis le <b>COOH</b>, qui est le C1. (16:1 Δ9) : la double liaison est entre le C9 et le C10. C'est l'acide palmitoléique.", [LG("Δ : on compte depuis le COOH (C1)", "rouge", { taille: "grand" }), LG("(16:1 Δ9) → double liaison entre C9 et C10", "rouge", { puce: "•" })]),
      E("Le <b>n</b> ou <b>ω</b>, oméga : on compte depuis l'autre bout, le <b>CH₃</b>. Pour passer de l'un à l'autre : <b>n moins x égale la position Δ</b>. (16:1 n-7) : 16 moins 7 égale 9. On retombe sur Δ9.", [LG("n ou ω : on compte depuis le CH₃", "bleu", { taille: "grand" }), EQ("n − x = position Δ · (16:1 n-7) : 16 − 7 = 9 → Δ9")]),
      E("Et s'il y a plusieurs doubles liaisons ? Le n ou ω donne la première côté CH₃, et les autres sont espacées de <b>3 carbones</b>.", [POST("Doubles liaisons espacées de 3 carbones", "cle")], "reflechit"),
      E("Exemple : l'acide <b>linoléique</b>, (18:2 n-6). 18 moins 6 égale 12. Puis 12 moins 3 égale 9. Donc Δ9,12. Les deux écritures désignent la même molécule.", [EFF(), T("Exemple : l'acide linoléique"), EQ("(18:2 n-6) : 18 − 6 = 12 ; 12 − 3 = 9"), EQ("→ (18:2 Δ9,12)"), SOUL(true)], "pointe")
    ],
    questions: [
      qcm("a1", "Que signifie (16:0) ?", ["16 carbones, 0 double liaison", "16 doubles liaisons", "Une double liaison en position 16", "16 carbones, chaîne ramifiée"], "Nombre de C : nombre de doubles liaisons. C'est l'acide palmitique."),
      qcm("a2", "Un AG (18:1 n-9) : en quelle position Δ est sa double liaison ?", ["Δ9", "Δ7", "Δ11", "Δ18"], "n − x = Δ : 18 − 9 = 9.")
    ],
    revision: [
      qcm("r1", "Depuis quelle extrémité compte-t-on la notation Δ ?", ["Depuis le COOH (C1)", "Depuis le CH₃", "Depuis le milieu de la chaîne", "Depuis la première double liaison"], "Δ : depuis le COOH ; n / ω : depuis le CH₃."),
      qcm("r2", "L'acide linoléique (18:2 n-6) s'écrit aussi :", ["(18:2 Δ9,12)", "(18:2 Δ6,9)", "(18:2 Δ12,15)", "(18:2 Δ6,12)"], "18 − 6 = 12, puis 12 − 3 = 9 : Δ9,12.")
    ]
  },
  {
    id: "bc-lipides-10", fiche: F2, ficheTitre: F2T, titre: "Longueur de chaîne et AG saturés",
    classe: [
      E("On classe d'abord les AG selon la <b>longueur de leur chaîne</b>.", [T("Selon la longueur"), GRI(["Chaîne", "Nb de C", "Dans l'eau"], [["Courte", "< 6 C", "plutôt soluble"], ["Moyenne", "6 à 10 C", "plutôt soluble"], ["Longue", "≥ 12 C", "totalement insoluble"]], true)]),
      E("Un cas particulier : les AG <b>volatils</b>, de 2 à 4 carbones. Ils passent facilement à l'état gazeux et sont hydrosolubles. Trois à connaître : l'acétique, l'odeur du vinaigre ; le propionique, celle des fromages affinés ; le butyrique, celle du beurre.", [GRI(["AG volatil", "Notation", "On le sent dans"], [["acétique (éthanoïque)", "2:0", "le vinaigre"], ["propionique (propanoïque)", "3:0", "les fromages affinés"], ["butyrique (butanoïque)", "4:0", "le beurre"]]), MONTRE(1), MONTRE(2), MONTRE(3)]),
      E("Les AG volatils sont aussi produits par le <b>microbiote du côlon</b>, puis absorbés pour fournir de l'énergie.", [POST("AG volatils (2 à 4 C) : aussi produits par le microbiote du côlon → énergie", "astuce")]),
      E("Maintenant, les AG <b>saturés</b> : aucune double liaison, chaque carbone porte le maximum d'hydrogènes. Formule brute CₙH₂ₙO₂. Seule la fonction COOH est réactive. Ils sont plutôt solides à température ambiante, comme la graisse de coco.", [EFF(), T("Les AG saturés"), EQ("CₙH₂ₙO₂ · CH₃–(CH₂)ₙ₋₂–COOH"), LG("0 double liaison · seul le COOH réagit · plutôt solides", "noir", { puce: "•" })]),
      E("Les saturés à connaître. Le plus important : le <b>palmitique</b>, 16:0. C'est la forme sous laquelle notre organisme fabrique ses acides gras.", [GRI(["AG saturé", "Notation", "Sources"], [["laurique", "12:0", "laurier, huile de coprah"], ["myristique", "14:0", "muscade, viandes"], ["palmitique", "16:0", "graisses animales, palme · forme fabriquée par l'organisme"], ["stéarique", "18:0", "graisses animales"], ["arachidique", "20:0", "arachide"]], true), POST("Palmitique 16:0 = l'AG que l'organisme fabrique", "cle")], "content")
    ],
    questions: [
      paires("a1", "Relie chaque AG volatil à sa source.", [["Acétique (2:0)", "Vinaigre"], ["Propionique (3:0)", "Fromages affinés"], ["Butyrique (4:0)", "Beurre"]], "Les 3 AG volatils, de 2 à 4 carbones."),
      qcm("a2", "Sous quelle forme l'organisme fabrique-t-il ses acides gras ?", ["Acide palmitique (16:0)", "Acide stéarique (18:0)", "Acide oléique (18:1)", "Acide butyrique (4:0)"], "Le palmitique, 16:0.")
    ],
    revision: [
      qcm("r1", "À partir de combien de carbones un AG est-il dit « à longue chaîne » ?", ["12 C", "4 C", "6 C", "20 C"], "Longue chaîne ≥ 12 C : totalement insoluble dans l'eau."),
      qcm("r2", "Quel est l'AG saturé stéarique ?", ["18:0", "16:0", "12:0", "20:0"], "Stéarique = 18:0, graisses animales.")
    ]
  },
  {
    id: "bc-lipides-11", fiche: F2, ficheTitre: F2T, titre: "AG insaturés et familles oméga",
    classe: [
      E("Les AG <b>insaturés</b> ont au moins une double liaison. <b>Mono</b>-insaturé : une seule. <b>Poly</b>-insaturé : au moins deux.", [T("Les AG insaturés"), LG("MONO-insaturé : 1 double liaison · POLY-insaturé : ≥ 2", "bleu")]),
      E("Voici ceux à connaître, avec leurs notations et leurs sources.", [GRI(["AG", "Notation", "Sources"], [
        ["palmitoléique", "16:1 n-7", "poissons marins · tissu adipeux, foie"],
        ["oléique", "18:1 n-9", "huile d'olive · principal mono de l'organisme"],
        ["linoléique (LA)", "18:2 n-6", "tournesol, maïs, soja"],
        ["α-linolénique (ALA)", "18:3 n-3", "colza, soja, lin, noix"],
        ["arachidonique", "20:4 n-6", "viandes"],
        ["EPA", "20:5 n-3", "graisses de poissons"],
        ["DHA", "22:6 n-3", "poissons gras"]
      ])]),
      E("L'<b>oléique</b>, 18:1 n-9 : c'est l'huile d'olive, et le principal AG mono-insaturé de notre organisme.", [MONTRE(1), MONTRE(2)]),
      E("Le <b>linoléique</b>, 18:2 n-6 : tournesol, maïs, soja. Piège : son nom vient du lin, mais l'huile de lin est surtout riche en <b>α-linolénique</b>, 18:3 n-3, qu'on trouve aussi dans le colza, le soja et les noix.", [MONTRE(3), MONTRE(4), POST("Linoléique : nom tiré du lin, mais l'huile de lin = surtout α-linolénique", "piege")], "reflechit"),
      E("Puis les grands : arachidonique 20:4 n-6, dans les viandes ; <b>EPA</b>, 20:5 n-3 ; et <b>DHA</b>, 22:6 n-3, dans les poissons gras.", [MONTRE(5), MONTRE(6), MONTRE(7)]),
      E("Ils se rangent en <b>familles oméga</b>. ω9 : l'oléique, que l'on sait fabriquer. ω6 : linoléique, qui donne l'arachidonique. ω3 : α-linolénique, qui donne l'EPA, puis le DHA.", [EFF(), T("Les familles oméga"), EQ("ω9 : oléique (fabriqué par l'organisme)"), EQ("ω6 : linoléique → arachidonique"), EQ("ω3 : α-linolénique → EPA → DHA")]),
      E("Le linoléique et l'α-linolénique ne peuvent pas être fabriqués par l'organisme : seuls les végétaux en sont capables. Ce sont les AG <b>indispensables</b>. L'Anses y ajoute le DHA, fabriqué en trop faible quantité.", [POST("AG indispensables : linoléique + α-linolénique (+ DHA pour l'Anses)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle est la notation de l'acide oléique ?", ["18:1 n-9", "18:2 n-6", "18:3 n-3", "16:1 n-7"], "Oléique = 18:1 n-9, l'huile d'olive."),
      ordre("a2", "Remets dans l'ordre la famille ω3.", ["Acide α-linolénique", "EPA", "DHA"], "ω3 : α-linolénique → EPA → DHA.")
    ],
    revision: [
      paires("r1", "Relie chaque AG à sa notation.", [["Linoléique", "18:2 n-6"], ["α-linolénique", "18:3 n-3"], ["EPA", "20:5 n-3"], ["DHA", "22:6 n-3"]], "À connaître par cœur."),
      qcm("r2", "Quel AG de la famille ω6 est fabriqué à partir du linoléique ?", ["L'acide arachidonique", "L'EPA", "L'acide oléique", "Le DHA"], "ω6 : linoléique → arachidonique (20:4 n-6)."),
      vf("r3", "L'huile de lin est surtout riche en acide linoléique.", false, "Faux : malgré le nom, elle est surtout riche en acide α-linolénique (ω3).")
    ]
  },
  {
    id: "bc-lipides-12", fiche: F2, ficheTitre: F2T, titre: "Cis, trans et AG trans",
    classe: [
      E("Une double liaison peut avoir deux formes : <b>cis</b> ou <b>trans</b>. C'est l'isomérie <b>géométrique</b> : la double liaison est au même endroit, mais la chaîne n'a pas la même forme.", [T("Cis ou trans ?"), LG("isomérie GÉOMÉTRIQUE : même position, forme différente", "noir")]),
      E("<b>Cis</b> : les deux morceaux de chaîne sont du <b>même côté</b>. La chaîne est <b>coudée</b>. C'est le cas de la plupart des AG naturels, comme l'acide oléique.", [LG("CIS : même côté → chaîne COUDÉE (la plupart des AG naturels, ex. oléique)", "vert", { puce: "•" })]),
      E("<b>Trans</b> : les deux morceaux sont de <b>part et d'autre</b>. La chaîne est <b>droite</b>, comme un saturé. Exemple : l'acide élaïdique, le trans de l'oléique.", [LG("TRANS : de part et d'autre → chaîne DROITE (ex. acide élaïdique)", "rouge", { puce: "•" })]),
      E("Ne pas confondre avec l'isomérie de <b>position</b> : là, c'est la double liaison qui est placée ailleurs, par exemple Δ9 ou Δ11.", [POST("Cis/trans = géométrique ≠ isomérie de POSITION (Δ9 / Δ11)", "piege")], "reflechit"),
      E("Les <b>AG trans</b>, ou AGT, ont deux origines. Naturelle : les bactéries du rumen des ruminants, vache, chèvre, brebis, hydrogènent les AG ; on en trouve dans le lait, les produits laitiers, un peu dans les viandes.", [EFF(), T("Les acides gras trans (AGT)"), LG("NATURELLE : bactéries du rumen → lait, produits laitiers, un peu les viandes", "bleu", { puce: "•" })]),
      E("Technologique, et c'est la principale : l'<b>hydrogénation partielle</b> des huiles végétales. Margarines, biscuiterie, viennoiserie, confiserie.", [LG("TECHNOLOGIQUE (principale) : hydrogénation partielle des huiles → margarines, biscuits, viennoiseries, confiserie", "rouge", { puce: "•" })]),
      E("Consommer des AGT augmente le <b>risque cardiovasculaire</b>, surtout les AGT industriels, car les apports sont plus importants. Dans l'Union européenne, ils sont limités à <b>2 g pour 100 g de matières grasses</b> depuis 2021.", [POST("AGT : ↑ risque cardiovasculaire (surtout industriels) · UE : max 2 g / 100 g de MG depuis 2021", "cle")], "content")
    ],
    questions: [
      qcm("a1", "À quoi ressemble la chaîne d'un AG trans ?", ["Elle est droite, comme un saturé", "Elle est coudée", "Elle est ramifiée", "Elle forme un cycle"], "Trans : morceaux de part et d'autre → chaîne droite."),
      qcm("a2", "Quelle est l'origine principale des AG trans ?", ["L'hydrogénation partielle des huiles végétales", "Les bactéries du rumen", "La cuisson à l'eau", "Le microbiote du côlon"], "Origine technologique : margarines, biscuiterie, viennoiserie…")
    ],
    revision: [
      vf("r1", "La plupart des acides gras naturels sont de forme cis.", true, "Vrai : chaîne coudée."),
      qcm("r2", "Quelle est la limite européenne des AG trans depuis 2021 ?", ["2 g pour 100 g de matières grasses", "10 g pour 100 g d'aliment", "0,5 g par jour", "Aucune limite"], "2 g / 100 g de matières grasses."),
      qcm("r3", "Quel risque est associé à la consommation d'AG trans ?", ["Un risque cardiovasculaire accru", "Une carence en vitamine K", "Une baisse de la vision de nuit", "Aucun risque connu"], "Surtout pour les AGT industriels, car les apports sont plus importants.")
    ]
  },
  {
    id: "bc-lipides-13", fiche: F2, ficheTitre: F2T, titre: "Solubilité et absorption des AG",
    classe: [
      E("Les propriétés physiques maintenant. Un AG est une molécule <b>bipolaire</b>, ou amphiphile.", [T("Une molécule amphiphile"), LG("pôle HYDROPHILE : COOH → R–COO⁻ au pH du corps (≈ 7,4)", "bleu", { puce: "•" }), LG("pôle HYDROPHOBE : la chaîne, apolaire même avec des doubles liaisons", "rouge", { puce: "•" })]),
      E("Le pôle hydrophile, c'est la fonction carboxylique. Au pH du corps, environ 7,4, elle est sous forme d'anion, R–COO⁻, ce qui renforce son attraction pour l'eau. Le pôle hydrophobe, c'est la chaîne, apolaire même avec des doubles liaisons.", [SOUL()]),
      E("Conséquence sur l'<b>absorption</b>. Chaîne <b>courte ou moyenne</b> : le pôle hydrophile l'emporte, l'AG est soluble. Il entre dans l'entérocyte par simple diffusion, passe libre dans le plasma, et part par la <b>veine porte</b>.", [EFF(), T("Absorption selon la longueur"), LG("COURTS / MOYENS (< 12 C) : solubles → diffusion → sang → VEINE PORTE", "vert", { puce: "•" })]),
      E("Chaîne <b>longue</b> : insoluble. Il faut d'abord les <b>sels biliaires</b> pour émulsionner, afin que les lipases pancréatiques agissent. Puis les AG partent dans des <b>chylomicrons</b>, par la <b>lymphe</b>. Dans le sang, ils voyagent avec les lipoprotéines ou l'albumine.", [LG("LONGS (≥ 12 C) : insolubles → sels biliaires → CHYLOMICRONS → LYMPHE", "rouge", { puce: "•" }), POST("AG courts : veine porte · AG longs : chylomicrons, lymphe", "cle")]),
      E("Dernier détail : leur <b>densité</b> est inférieure à celle de l'eau. C'est pour ça que l'huile remonte à la surface d'une vinaigrette pas émulsionnée.", [LG("densité < eau → l'huile remonte (vinaigrette)", "noir", { taille: "petit" })], "content")
    ],
    questions: [
      qcm("a1", "Comment les AG à longue chaîne quittent-ils l'intestin ?", ["Dans des chylomicrons, par la lymphe", "Libres, par la veine porte", "Dans la bile", "Par simple diffusion vers le côlon"], "Longs : insolubles → chylomicrons → lymphe."),
      vf("a2", "Au pH du corps, la fonction carboxylique d'un AG est surtout sous forme R–COO⁻.", true, "Vrai : forme anion, plus attirée par l'eau.")
    ],
    revision: [
      qcm("r1", "Par quelle voie partent les AG à chaîne courte absorbés ?", ["La veine porte", "La lymphe", "Le canal cholédoque", "Les chylomicrons"], "Solubles : diffusion, sang, veine porte.")
    ]
  },
  {
    id: "bc-lipides-14", fiche: F2, ficheTitre: F2T, titre: "Point de fusion et micelles",
    classe: [
      E("Le <b>point de fusion</b>, c'est la température à laquelle un AG passe de l'état solide, molécules ordonnées, à l'état liquide, molécules qui bougent au hasard.", [T("Le point de fusion"), LG("solide (ordonné) → liquide (désordonné)", "noir")]),
      E("Règle 1 : il <b>augmente avec la longueur</b> de la chaîne. Plus la chaîne est longue, plus il y a de zones de contact entre chaînes alignées : ce sont les forces de <b>Van der Waals</b>. Il faut plus d'énergie pour les séparer.", [LG("↑ avec la LONGUEUR (plus de forces de Van der Waals)", "rouge", { puce: "1" })]),
      E("Règle 2 : il <b>diminue avec les doubles liaisons</b>. Chaque double liaison cis coude la chaîne, donc moins de contacts.", [LG("↓ avec les DOUBLES LIAISONS (chaînes coudées, moins de contacts)", "bleu", { puce: "2" }), SOUL()]),
      E("Quelques valeurs pour comprendre, pas pour apprendre par cœur.", [GRI(["AG", "Fusion"], [["butyrique 4:0", "−6,5 °C"], ["palmitique 16:0", "+63 °C"], ["stéarique 18:0", "+70 °C"], ["oléique 18:1", "+13,5 °C"], ["linoléique 18:2", "−5 °C"]], true)]),
      E("D'où la règle pratique : les graisses animales, riches en saturés, sont <b>solides</b> ; les huiles végétales, riches en insaturés, sont <b>liquides</b> à température ambiante.", [POST("Saturés → solides (graisses animales) · insaturés → liquides (huiles)", "cle")], "content"),
      E("Enfin, dans l'eau, les AG forment des films à la surface, et des <b>micelles</b> : têtes vers l'eau, chaînes cachées au centre. Une micelle peut emprisonner des substances hydrophobes : c'est l'<b>action détergente</b> des savons. Elle stabilise une émulsion huile dans eau, H/E, ou eau dans huile, E/H.", [EFF(), T("Micelles et action détergente"), LG("micelle : COO⁻ vers l'eau, chaînes au centre", "bleu", { puce: "•" }), LG("emprisonne l'hydrophobe → ACTION DÉTERGENTE (savons)", "vert", { puce: "•" }), LG("stabilise une émulsion H/E ou E/H", "noir", { puce: "•" })])
    ],
    questions: [
      qcm("a1", "Comment varie le point de fusion quand on ajoute des doubles liaisons ?", ["Il diminue", "Il augmente", "Il ne change pas", "Il double"], "Chaînes coudées → moins de contacts → fusion plus basse."),
      qcm("a2", "Pourquoi l'acide stéarique (18:0) fond-il plus haut que le palmitique (16:0) ?", ["Sa chaîne est plus longue : plus de forces de Van der Waals", "Il a une double liaison de plus", "Il est trans", "Il est plus soluble dans l'eau"], "Plus long = plus de contacts entre chaînes.")
    ],
    revision: [
      qcm("r1", "Comment s'organise une micelle d'acides gras dans l'eau ?", ["Têtes COO⁻ vers l'eau, chaînes au centre", "Chaînes vers l'eau, têtes au centre", "En bicouche", "En cristal"], "C'est ce qui permet l'action détergente."),
      vf("r2", "Les huiles végétales sont liquides car elles sont riches en AG insaturés.", true, "Vrai : chaînes coudées, point de fusion bas.")
    ]
  },
  {
    id: "bc-lipides-15", fiche: F2, ficheTitre: F2T, titre: "Les réactions de la fonction COOH",
    classe: [
      E("Les propriétés chimiques, côté tête : la fonction <b>carboxylique</b>. C'est un <b>acide faible</b> : elle cède un proton, mais la dissociation est partielle.", [T("La fonction carboxylique"), EQ("R–COOH ⇌ R–COO⁻ + H⁺"), LG("au pH du corps (7,3 à 7,4) : la forme anion domine", "noir", { taille: "petit" })]),
      E("Réaction 1 : la <b>neutralisation</b> par une base. On obtient un savon plus de l'eau.", [EQ("R–COOH + KOH → R–COO⁻K⁺ + H₂O (savon)")]),
      E("Réaction 2 : l'<b>estérification</b> avec un alcool. On forme une liaison <b>ester</b> et de l'eau. La réaction inverse, c'est l'hydrolyse. C'est comme ça que les AG sont stockés avec le glycérol, en triglycérides.", [EQ("R–COOH + HO–R' ⇌ R–CO–O–R' + H₂O (ester)"), LG("→ stockage des AG avec le glycérol (TG, tissu adipeux)", "vert", { puce: "•" })]),
      E("Au laboratoire aussi : on transforme les AG d'un corps gras en esters, plus volatils, pour les séparer et les analyser par <b>chromatographie en phase gazeuse</b>.", [LG("labo : AG → esters volatils → chromatographie en phase gazeuse", "noir", { puce: "•" })]),
      E("Réaction 3 : avec le <b>coenzyme A</b>. On obtient un <b>acyl-CoA</b>, par une liaison <b>thioester</b>, riche en énergie. C'est l'activation des AG avant leur utilisation, la β-oxydation.", [EQ("AG + CoA-SH → acyl-CoA (liaison thioester)"), POST("COOH : neutralisation (savon) · estérification (TG) · acyl-CoA (activation)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le rôle de la formation d'acyl-CoA ?", ["Activer l'AG avant la β-oxydation", "Stocker l'AG dans le tissu adipeux", "Le transformer en savon", "Le rendre trans"], "Liaison thioester riche en énergie : activation."),
      qcm("a2", "Quelle réaction permet de stocker les AG avec le glycérol ?", ["L'estérification", "La neutralisation", "L'hydrogénation", "La peroxydation"], "AG + alcool → ester + eau.")
    ],
    revision: [
      qcm("r1", "Qu'obtient-on en faisant réagir un AG avec de la potasse (KOH) ?", ["Un savon et de l'eau", "Un ester et de l'eau", "Un acyl-CoA", "Du glycérol"], "Neutralisation : R–COO⁻K⁺ + H₂O.")
    ]
  },
  {
    id: "bc-lipides-16", fiche: F2, ficheTitre: F2T, titre: "Les réactions de la chaîne",
    classe: [
      E("Côté chaîne maintenant. Si elle est <b>saturée</b>, elle est très peu réactive : elle est juste hydrophobe. Ce sont les <b>doubles liaisons</b> qui réagissent.", [T("La chaîne carbonée"), LG("saturée : très peu réactive · doubles liaisons : RÉACTIVES", "noir")]),
      E("Réaction d'<b>addition</b> : avec un catalyseur, la double liaison s'ouvre et chaque carbone fixe un atome. Par exemple de l'iode, I₂, ou de l'hydrogène : c'est l'<b>hydrogénation</b>.", [LG("ADDITION : la double liaison s'ouvre, chaque C fixe un atome (iode I₂, ou H = hydrogénation)", "bleu", { puce: "•" })]),
      E("<b>Oxydation</b>, ou peroxydation, par les <b>radicaux libres</b> : des molécules à nombre impair d'électrons, très réactives, toxiques pour les cellules. Elles altèrent les AG insaturés des membranes et les fragilisent.", [LG("PEROXYDATION par les radicaux libres → AG insaturés des membranes fragilisés", "rouge", { puce: "•" })]),
      E("Au contact de l'oxygène, les lipides des aliments s'altèrent aussi : c'est le <b>rancissement</b>.", [LG("au contact de l'O₂ : RANCISSEMENT des aliments", "rouge", { puce: "•" })]),
      E("Le <b>stress oxydatif</b> : on produit des radicaux libres en permanence, par la respiration mitochondriale et pour se défendre contre les microbes. Quand ils débordent les défenses antioxydantes, ils abîment lipides, protéines et ADN.", [EFF(), T("Le stress oxydatif"), LG("radicaux libres produits en permanence (mitochondries, défense antimicrobienne)", "noir", { puce: "•" }), LG("débordent les défenses antioxydantes → lipides, protéines, ADN abîmés", "rouge", { puce: "•" })]),
      E("Ce qui favorise ce débordement : maladie, vieillissement, tabac, pollution, et une alimentation déséquilibrée, riche en viande rouge, graisses saturées et sucres raffinés.", [POST("Facteurs : maladie, vieillissement, tabac, pollution, alimentation riche en viande rouge, graisses saturées, sucres raffinés", "astuce")], "reflechit")
    ],
    questions: [
      qcm("a1", "Comment appelle-t-on l'altération des lipides alimentaires au contact de l'oxygène ?", ["Le rancissement", "La saponification", "L'hydrogénation", "L'estérification"], "Oxydation des doubles liaisons à l'air."),
      qcm("a2", "Qu'est-ce qu'un radical libre ?", ["Une molécule à nombre impair d'électrons, très réactive", "Un AG sans double liaison", "Un AG libre dans le plasma", "Une vitamine antioxydante"], "Très réactif, il attaque notamment les AG insaturés.")
    ],
    revision: [
      vf("r1", "Une chaîne d'AG saturée est très réactive.", false, "Faux : elle est très peu réactive. Ce sont les doubles liaisons qui réagissent."),
      qcm("r2", "Que fixe une double liaison lors de l'hydrogénation ?", ["De l'hydrogène", "De l'iode", "De l'oxygène", "Un phosphate"], "Réaction d'addition : un H sur chaque carbone.")
    ]
  },
  {
    id: "bc-lipides-17", fiche: F2, ficheTitre: F2T, titre: "Les indices des corps gras",
    classe: [
      E("Au laboratoire, on caractérise un corps gras par trois <b>indices</b>.", [T("Les indices"), GRI(["Indice", "Définition", "Ce qu'il nous dit"], [
        ["Indice d'acide", "mg de KOH pour neutraliser les AG libres de 1 g de corps gras", "beaucoup d'AG libres = corps gras dégradé (hydrolysé)"],
        ["Indice de saponification (Is)", "mg de KOH pour saponifier 1 g de corps gras", "AG longs → Is faible · beurre 226, saindoux 196, olive 186"],
        ["Indice d'iode (Ii)", "g d'iode fixés par 100 g de lipides", "↑ avec les insaturations · olive ≈ 95, tournesol ≈ 132"]
      ])]),
      E("L'<b>indice d'acide</b> mesure les AG <b>libres</b>. S'il y en a beaucoup, c'est que le corps gras a été hydrolysé : il est <b>dégradé</b>.", [MONTRE(1)]),
      E("L'<b>indice de saponification</b> : plus les AG sont <b>longs</b>, plus il est <b>faible</b>, car il y a moins de molécules par gramme. Le beurre, riche en AG courts : 226. L'huile d'olive : 186. C'est un critère de qualité.", [MONTRE(2), POST("Is ↓ quand les AG sont LONGS (moins de molécules par gramme)", "piege")], "reflechit"),
      E("L'<b>indice d'iode</b> : l'iode se fixe sur les doubles liaisons. Donc plus il y a d'<b>insaturations</b>, plus il est élevé. Oléique 89,9 ; linoléique 181 ; huile d'olive environ 95 ; tournesol environ 132. Il permet de vérifier la pureté d'une matière grasse.", [MONTRE(3), POST("Ii ↑ avec le nombre de doubles liaisons", "cle")], "content")
    ],
    questions: [
      qcm("a1", "L'huile de tournesol a un indice d'iode plus élevé que l'huile d'olive. Pourquoi ?", ["Elle est plus riche en AG insaturés", "Ses AG sont plus courts", "Elle contient plus d'AG libres", "Elle est plus saturée"], "L'iode se fixe sur les doubles liaisons."),
      qcm("a2", "Que signifie un indice d'acide élevé ?", ["Le corps gras est dégradé (beaucoup d'AG libres)", "Le corps gras est très insaturé", "Ses AG sont très longs", "Il est riche en cholestérol"], "Beaucoup d'AG libres = corps gras hydrolysé.")
    ],
    revision: [
      qcm("r1", "Le beurre a un indice de saponification plus élevé (226) que l'huile d'olive (186). Pourquoi ?", ["Ses AG sont plus courts", "Ses AG sont plus longs", "Il est plus insaturé", "Il contient de l'iode"], "Is ↓ quand les AG sont longs ; le beurre est riche en AG courts."),
      paires("r2", "Relie chaque indice à ce qu'il mesure.", [["Indice d'acide", "Les AG libres"], ["Indice de saponification", "La longueur des AG"], ["Indice d'iode", "Les doubles liaisons"]], "Trois indices, trois informations.")
    ]
  },
  {
    id: "bc-lipides-18", fiche: F2, ficheTitre: F2T, titre: "Séparer et analyser les lipides",
    classe: [
      E("Au labo, pour séparer, analyser ou purifier les constituants d'un mélange, on utilise la <b>chromatographie</b>.", [T("La chromatographie"), LG("phase STATIONNAIRE (poudre fine, solide poreux) + phase MOBILE (liquide ou gaz)", "bleu")]),
      E("Le principe : l'échantillon est entraîné par la phase <b>mobile</b> sur une phase <b>stationnaire</b>. Les molécules peu retenues sortent vite, c'est l'<b>élution</b>. Les molécules très retenues sortent lentement. Et voilà la séparation.", [LG("peu retenues → sortent vite (élution) · très retenues → lentement", "noir", { puce: "•" })]),
      E("La chromatographie en <b>phase gazeuse</b>, la CPG : pour des molécules petites, volatiles, non ionisées, résistant à 150-250 °C. Idéale pour les AG, sous forme d'esters. Pour les molécules non volatiles : phase liquide.", [POST("CPG : idéale pour les AG (sous forme d'esters)", "cle")]),
      E("On classe aussi les chromatographies selon ce qui sépare les molécules.", [EFF(), T("Les types de chromatographie"), GRI(["Type", "Ce qui sépare"], [["Adsorption", "fixation plus ou moins forte à la surface d'un solide"], ["Partage", "solubilité dans le liquide qui imprègne le support"], ["Échange d'ions", "la charge (résine + ou −)"], ["Exclusion (gel)", "la taille : les grosses sortent en premier"], ["Affinité", "liaison spécifique à un ligand (ex. purifier un anticorps)"]], true)]),
      E("Pour séparer une fraction soluble d'une fraction insoluble : la <b>décantation</b>, par gravité. La <b>centrifugation</b>, en g : paillasse 3 000 à 4 000 g, moyenne vitesse 10 000 à 40 000 g, ultracentrifugeuse 100 000 à 350 000 g ; on obtient un surnageant et un culot. La <b>filtration</b>, et l'<b>ultrafiltration</b>, accélérée par une pression ou la force centrifuge, surtout pour concentrer un échantillon.", [EFF(), T("Soluble / insoluble"), LG("DÉCANTATION : gravité", "noir", { puce: "•" }), LG("CENTRIFUGATION : surnageant + culot (3 000 à 350 000 g)", "noir", { puce: "•" }), LG("FILTRATION · ULTRAFILTRATION (pression → concentrer)", "noir", { puce: "•" })])
    ],
    questions: [
      qcm("a1", "Quelle chromatographie est idéale pour analyser les AG (sous forme d'esters) ?", ["En phase gazeuse (CPG)", "D'affinité", "D'échange d'ions", "D'exclusion"], "Les esters d'AG sont petits et volatils."),
      qcm("a2", "En chromatographie d'exclusion, quelles molécules sortent en premier ?", ["Les plus grosses", "Les plus petites", "Les plus chargées", "Les plus hydrophobes"], "Exclues des pores, les grosses passent vite ; les petites sont ralenties.")
    ],
    revision: [
      qcm("r1", "Après une centrifugation, qu'obtient-on ?", ["Un surnageant et un culot", "Un ester et de l'eau", "Une micelle", "Un filtrat seul"], "Le culot au fond, le surnageant au-dessus.")
    ]
  },
  {
    id: "bc-lipides-19", fiche: F2, ficheTitre: F2T, titre: "Lipides et santé",
    classe: [
      E("Pour finir les acides gras : un mot sur la <b>santé</b>. Les lipides apportent 9 kcal par gramme : les aliments les plus gras sont les plus caloriques.", [T("Lipides et santé"), LG("9 kcal/g → aliments gras = les plus caloriques", "rouge", { puce: "•" })]),
      E("Ils renforcent le goût et l'onctuosité : c'est la <b>palatabilité</b>. Leur consommation a doublé en un siècle en France.", [LG("goût + onctuosité = PALATABILITÉ · consommation × 2 en un siècle", "noir", { puce: "•" })]),
      E("Aujourd'hui, environ <b>37 %</b> de l'apport énergétique en moyenne, pour une recommandation Anses de <b>35 à 40 %</b>. Mais environ 43 % des adultes dépassent 40 %.", [EQ("≈ 37 % de l'apport · Anses : 35 à 40 % · ≈ 43 % des adultes > 40 %"), SOUL()]),
      E("En excès, ils favorisent les maladies cardiovasculaires, le diabète, le surpoids et l'obésité. Bien choisis, ils ont un effet protecteur.", [POST("Lipides : 35 à 40 % de l'apport énergétique (Anses) · bien choisis = protecteurs", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle part de l'apport énergétique l'Anses recommande-t-elle pour les lipides ?", ["35 à 40 %", "10 à 15 %", "50 à 55 %", "20 à 25 %"], "Recommandation Anses : 35 à 40 %."),
      vf("a2", "La consommation de lipides en France a baissé de moitié en un siècle.", false, "Faux : elle a doublé.")
    ],
    revision: [
      qcm("r1", "Que désigne la palatabilité ?", ["Le goût et l'onctuosité apportés aux aliments", "La digestibilité des lipides", "Leur densité", "Leur point de fusion"], "Les lipides rendent les aliments plus agréables en bouche.")
    ]
  },

  /* ================= FICHE 3 ================= */
  {
    id: "bc-lipides-20", fiche: F3, ficheTitre: F3T, titre: "Les glycérides",
    classe: [
      E("Petit rappel : « lipos », c'est « graisse » en grec. Les lipides sont des réserves d'énergie, et un excès de glucides peut même être converti en lipides et stocké dans les adipocytes. On passe aux <b>glycérides</b>.", [T("Les glycérides"), EQ("Glycérides = acylglycérols = esters d'AG et de glycérol")]),
      E("Le <b>glycérol</b> est un alcool à <b>3 carbones</b>, chacun portant une fonction alcool. Donc trois endroits où accrocher un acide gras.", [LG("glycérol : alcool à 3 C, 3 fonctions –OH → 3 sites d'estérification", "bleu", { puce: "•" })]),
      E("Selon le nombre d'AG fixés, on a trois glycérides.", [GRI(["Glycéride", "Composition"], [["Monoglycéride", "glycérol + 1 AG"], ["Diglycéride", "glycérol + 2 AG"], ["Triglycéride (TG, triacylglycérol)", "glycérol + 3 AG"]], true)]),
      E("Chaque AG est relié au glycérol par une <b>liaison ester</b>, avec perte d'une molécule d'eau.", [LG("chaque AG ↔ glycérol : liaison ESTER (– 1 H₂O)", "vert"), POST("Glycérides = glycérol + 1, 2 ou 3 AG (esters)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce qu'un triglycéride ?", ["Glycérol + 3 acides gras", "Cholestérol + 3 acides gras", "3 glycérols + 1 acide gras", "Glycérol + 2 AG + phosphate"], "Aussi appelé triacylglycérol."),
      qcm("a2", "Par quelle liaison un AG est-il relié au glycérol ?", ["Une liaison ester", "Une liaison amide", "Une liaison osidique", "Une liaison peptidique"], "Avec perte d'une molécule d'eau.")
    ],
    revision: [
      vf("r1", "Le glycérol est un alcool à 3 carbones.", true, "Vrai : 3 fonctions alcool, donc jusqu'à 3 AG.")
    ]
  },
  {
    id: "bc-lipides-21", fiche: F3, ficheTitre: F3T, titre: "Nommer un glycéride",
    classe: [
      E("Comment on nomme un glycéride ? L'AG estérifié prend la terminaison <b>-yl</b>, c'est celle de ton cours : palmityl. Ou <b>-oyl</b>, c'est l'officielle : palmitoyl. Le terme générique, c'est « acyl ».", [T("Nommer un glycéride"), LG("AG estérifié : -YL (cours : palmityl) ou -OYL (officiel : palmitoyl) · terme générique : acyl", "bleu")]),
      E("Puis on cite l'autre molécule : palmityl-glycérol.", [EQ("palmityl-glycérol")]),
      E("Si les AG sont <b>identiques</b>, on met un préfixe : distéaryl glycérol. S'ils sont <b>différents</b>, on les cite avec leur position : 1-palmityl-2-oléyl glycérol.", [LG("AG identiques : préfixe → distéaryl glycérol", "noir", { puce: "•" }), LG("AG différents : on les cite avec leur position → 1-palmityl-2-oléyl glycérol", "noir", { puce: "•" })]),
      E("Un TG <b>homogène</b>, avec trois AG identiques, prend la terminaison <b>-ine</b> : le tripalmitylglycérol s'appelle la <b>palmitine</b>. Un TG <b>hétérogène</b> a des AG différents.", [LG("TG HOMOGÈNE (AG identiques) : -INE → tripalmitylglycérol = palmitine", "vert", { taille: "grand" }), LG("TG HÉTÉROGÈNE : AG différents", "noir", { puce: "•" }), POST("AG estérifié : -yl / -oyl · TG homogène : -ine", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Comment s'appelle le tripalmitylglycérol ?", ["La palmitine", "La palmitoléine", "Le palmitate", "La stéarine"], "TG homogène : terminaison -ine."),
      qcm("a2", "Quelle terminaison prend un AG estérifié dans la nomenclature officielle ?", ["-oyl", "-ine", "-ate", "-ose"], "-oyl (officiel, ex. palmitoyl) ; -yl dans ton cours (palmityl).")
    ],
    revision: [
      vf("r1", "Un triglycéride hétérogène porte trois acides gras identiques.", false, "Faux : c'est le TG homogène. Hétérogène = AG différents.")
    ]
  },
  {
    id: "bc-lipides-22", fiche: F3, ficheTitre: F3T, titre: "Les triglycérides : rôles",
    classe: [
      E("Dans un TG, toutes les fonctions alcool du glycérol sont estérifiées. Résultat : les TG sont <b>totalement hydrophobes</b>, apolaires, insolubles dans l'eau.", [T("Les triglycérides"), LG("toutes les –OH estérifiées → TOTALEMENT HYDROPHOBES", "rouge", { taille: "grand" })]),
      E("C'est essentiellement sous forme de TG que les AG sont présents dans l'<b>alimentation</b>, <b>stockés</b> dans le tissu adipeux, et <b>transportés</b> dans le sang et la lymphe, dans les lipoprotéines.", [LG("sous forme de TG, les AG sont : dans l'ALIMENTATION · STOCKÉS · TRANSPORTÉS (lipoprotéines)", "bleu", { puce: "•" })]),
      E("Deux tissus adipeux. Le <b>blanc</b> : réserve d'énergie, il libère des AG pour tout l'organisme, et isolant thermique. Le <b>brun</b> : il produit de la chaleur, c'est la thermogenèse.", [GRI(["Tissu adipeux", "Rôle"], [["Blanc", "réserve d'énergie (AG pour tout l'organisme) + isolant thermique"], ["Brun", "thermogenèse (production de chaleur)"]], true), POST("Adipeux blanc : réserve, isolant · brun : chaleur", "cle")]),
      E("Les TG sont hydrolysés par des <b>lipases</b> : pancréatiques pour ceux de l'alimentation, et la lipase <b>hormono-sensible</b> dans le tissu adipeux.", [LG("hydrolyse par les LIPASES : pancréatiques (aliments) · hormono-sensible (tissu adipeux)", "vert", { puce: "•" })]),
      E("Et en excès ? L'<b>hypertriglycéridémie</b> favorise l'athérosclérose, les cardiopathies ischémiques et les AVC. Elle est souvent associée au diabète. Au-delà de <b>10 g/L</b>, risque de <b>pancréatite aiguë</b>.", [POST("Hypertriglycéridémie : athérosclérose, AVC (souvent + diabète) · > 10 g/L : pancréatite aiguë", "piege")], "reflechit")
    ],
    questions: [
      qcm("a1", "Quel est le rôle du tissu adipeux brun ?", ["Produire de la chaleur (thermogenèse)", "Stocker le glycogène", "Fabriquer la bile", "Produire des hormones stéroïdes"], "Blanc : réserve et isolant ; brun : chaleur."),
      qcm("a2", "Quelle lipase hydrolyse les TG dans le tissu adipeux ?", ["La lipase hormono-sensible", "La lipase pancréatique", "La phospholipase C", "La LCAT"], "Les lipases pancréatiques, elles, agissent sur les TG alimentaires.")
    ],
    revision: [
      qcm("r1", "Au-delà de quelle triglycéridémie y a-t-il un risque de pancréatite aiguë ?", ["10 g/L", "1 g/L", "2 g/L", "50 g/L"], "> 10 g/L."),
      vf("r2", "Les triglycérides sont amphiphiles.", false, "Faux : toutes leurs fonctions alcool sont estérifiées, ils sont totalement hydrophobes.")
    ]
  },
  {
    id: "bc-lipides-23", fiche: F3, ficheTitre: F3T, titre: "Le cholestérol",
    classe: [
      E("Les <b>stéroïdes</b> ont le noyau stérane, quatre cycles A, B, C, D. Pas d'AG, mais hydrophobes. Les principaux : les stérols, dont le cholestérol, les hormones stéroïdes, les sels biliaires et la vitamine D.", [T("Le cholestérol"), LG("stéroïdes : noyau stérane (A, B, C, D) · pas d'AG, hydrophobes", "noir")]),
      E("Le <b>cholestérol</b> est un <b>alcool</b> de la famille des stérols. Formule brute C₂₇H₄₅OH. Trois repères sur le noyau stérane.", [EQ("Cholestérol : C₂₇H₄₅OH"), GRI(["Repère", "Où ?"], [["Fonction alcool –OH (hydrophile)", "cycle A"], ["Double liaison", "cycle B"], ["Chaîne latérale", "cycle D"]], true)]),
      E("Le OH est un petit pôle <b>hydrophile</b>, mais l'énorme squelette est hydrophobe. Donc insoluble dans l'eau, mais <b>amphiphile</b>. Dans la membrane, le squelette est enfoui parmi les queues des phospholipides, et le OH est tourné vers l'eau.", [LG("OH hydrophile + gros squelette hydrophobe → AMPHIPHILE", "bleu", { puce: "•" }), LG("membrane : squelette enfoui, OH vers le milieu aqueux", "bleu", { puce: "•" })]),
      E("Ses rôles : constituant <b>indispensable des membranes</b>, il joue sur leur fluidité. <b>Précurseur</b> des hormones stéroïdes, de la vitamine D et des sels biliaires. Et constituant essentiel de la <b>bile</b>.", [EFF(), T("Rôles du cholestérol"), LG("constituant indispensable des membranes (fluidité)", "vert", { puce: "✓" }), LG("précurseur : hormones stéroïdes, vitamine D, sels biliaires", "vert", { puce: "✓" }), LG("constituant essentiel de la bile", "vert", { puce: "✓" })]),
      E("Piège : le cholestérol ne fournit <b>pas d'énergie</b>. L'organisme ne sait pas le transformer en acétyl-CoA, sauf éventuellement sa chaîne latérale.", [POST("Le cholestérol ne fournit PAS d'énergie (pas transformé en acétyl-CoA)", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Sur quel cycle du cholestérol se trouve la fonction alcool ?", ["Le cycle A", "Le cycle B", "Le cycle D", "La chaîne latérale"], "OH (A), double liaison (B), chaîne latérale (D)."),
      vf("a2", "Le cholestérol est une source d'énergie pour l'organisme.", false, "Faux : on ne sait pas le transformer en acétyl-CoA.")
    ],
    revision: [
      paires("r1", "Relie chaque repère du cholestérol à son cycle.", [["Fonction alcool", "Cycle A"], ["Double liaison", "Cycle B"], ["Chaîne latérale", "Cycle D"]], "À connaître."),
      qcm("r2", "De quoi le cholestérol est-il le précurseur ?", ["Hormones stéroïdes, vitamine D, sels biliaires", "Glycogène", "Acides gras indispensables", "Phospholipides"], "Trois dérivés majeurs.")
    ]
  },
  {
    id: "bc-lipides-24", fiche: F3, ficheTitre: F3T, titre: "Les stérides",
    classe: [
      E("Un <b>stéride</b>, c'est l'ester d'un acide gras et d'un <b>stérol</b>, surtout le cholestérol. Le OH du cholestérol est estérifié par le COOH d'un AG.", [T("Les stérides"), EQ("Stéride = cholestérol (OH) + AG (COOH) → ester")]),
      E("Conséquence : le petit pôle hydrophile disparaît. La molécule devient <b>totalement hydrophobe</b>.", [LG("le OH disparaît → TOTALEMENT HYDROPHOBE", "rouge")]),
      E("Dans l'<b>alimentation</b>, le cholestérol est surtout <b>libre</b> : seulement 10 à 15 % estérifié. On le trouve uniquement dans les produits <b>animaux</b> : jaune d'œuf, abats, beurre, crème fraîche.", [EFF(), T("Où trouve-t-on le cholestérol estérifié ?"), LG("ALIMENTATION : surtout LIBRE (10 à 15 % estérifié) · produits animaux seulement", "bleu", { puce: "•" })]),
      E("Le <b>stockage</b> se fait sous forme estérifiée, en petite quantité, dans le foie et les cellules stéroïdogènes, celles qui fabriquent les hormones stéroïdes. Le <b>transport</b>, estérifié lui aussi, au cœur des lipoprotéines, LDL et HDL.", [LG("STOCKAGE : estérifié (foie, cellules stéroïdogènes)", "vert", { puce: "•" }), LG("TRANSPORT : estérifié, au cœur des lipoprotéines (LDL, HDL)", "vert", { puce: "•" })]),
      E("En excès : complications cardiovasculaires, avec les plaques d'athérome.", [POST("Stéride = cholestérol + AG · aliments : surtout libre · stockage et transport : estérifié", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Sous quelle forme le cholestérol est-il surtout présent dans les aliments ?", ["Libre (10 à 15 % seulement estérifié)", "Estérifié à 90 %", "Sous forme de sels biliaires", "Sous forme de vitamine D"], "Surtout libre, uniquement dans les produits animaux."),
      qcm("a2", "Sous quelle forme le cholestérol est-il transporté dans les lipoprotéines ?", ["Estérifié (stéride)", "Libre", "En sels biliaires", "Lié à l'albumine"], "Au cœur des LDL et HDL.")
    ],
    revision: [
      vf("r1", "On trouve du cholestérol dans l'huile d'olive.", false, "Faux : uniquement dans les produits animaux (jaune d'œuf, abats, beurre, crème).")
    ]
  },
  {
    id: "bc-lipides-25", fiche: F3, ficheTitre: F3T, titre: "Le transport du cholestérol",
    classe: [
      E("Suivons le cholestérol. Il arrive de l'alimentation, surtout libre. Dans l'<b>entérocyte</b>, il est <b>estérifié</b> et emballé dans les <b>chylomicrons</b>, qui partent par la lymphe puis le sang. Leurs restes sont captés par le foie.", [T("Le transport du cholestérol"), EQ("aliments → entérocyte (estérification) → chylomicrons → lymphe → sang"), LG("restes de chylomicrons → captés par le foie", "noir", { taille: "petit" })]),
      E("Dans l'<b>hépatocyte</b>, il est hydrolysé en cholestérol libre. Ensuite, deux chemins : la <b>bile</b>, en micelles avec des phospholipides ; ou il est réestérifié, pour être stocké en gouttelettes ou envoyé dans les <b>VLDL</b>.", [LG("FOIE : → bile (micelles) ou réestérifié → stockage / VLDL", "bleu", { puce: "•" })]),
      E("Les <b>VLDL</b>, ce sont les lipoprotéines qui transportent les lipides <b>endogènes</b>, fabriqués par le foie. Assemblées dans le RE et le Golgi, environ 50 nm. Elles contiennent surtout des TG.", [EFF(), T("Les VLDL"), GRI(["Constituant", "Part"], [["Triglycérides", "60 %"], ["Phospholipides", "15 %"], ["Cholestérol estérifié", "5 %"], ["Cholestérol libre", "10 %"], ["Apoprotéines (apo B100, apo C)", "10 %"]], true)]),
      E("La <b>lipoprotéine lipase</b>, la LPL, leur fait perdre des AG et l'apo C : elles deviennent des <b>IDL</b>. Puis la lipase hépatique les transforme en <b>LDL</b>, riches en cholestérol, qui l'apportent aux tissus. Demi-vie des VLDL : environ 4 heures.", [EQ("VLDL → (LPL) → IDL → (lipase hépatique) → LDL → tissus")]),
      E("Et le retour ? Les <b>HDL</b> récupèrent le cholestérol libre en excès des cellules. La <b>LCAT</b>, lécithine-cholestérol acyltransférase, l'estérifie dans le plasma, puis il retourne au foie.", [EQ("HDL : cholestérol en excès → LCAT (estérifie) → retour au FOIE"), POST("VLDL → IDL → LDL → tissus · HDL → foie", "cle")], "content"),
      E("À noter : la synthèse des AG et du cholestérol est surtout hépatique, quand l'acétyl-CoA abonde, après les repas.", [LG("synthèse AG + cholestérol : surtout le foie, en période post-prandiale", "noir", { taille: "petit" })])
    ],
    questions: [
      ordre("a1", "Remets dans l'ordre la transformation des lipoprotéines.", ["VLDL", "IDL", "LDL"], "La LPL puis la lipase hépatique les font évoluer."),
      qcm("a2", "Quel est le rôle des HDL ?", ["Ramener le cholestérol en excès vers le foie", "Apporter le cholestérol aux tissus", "Transporter les TG alimentaires", "Fabriquer la bile"], "Les HDL font le retour vers le foie.")
    ],
    revision: [
      qcm("r1", "Quelle enzyme estérifie le cholestérol des HDL dans le plasma ?", ["La LCAT", "La LPL", "La lipase hormono-sensible", "La 7α-hydroxylase"], "Lécithine-cholestérol acyltransférase."),
      qcm("r2", "Quel est le constituant principal des VLDL ?", ["Les triglycérides (60 %)", "Le cholestérol estérifié", "Les apoprotéines", "Les phospholipides"], "Les VLDL transportent surtout des TG endogènes.")
    ]
  },
  {
    id: "bc-lipides-26", fiche: F3, ficheTitre: F3T, titre: "Les sels biliaires",
    classe: [
      E("Comment se débarrasser du cholestérol ? <b>Seul le foie</b> l'élimine, par la <b>bile</b>. Une partie part telle quelle, libre : réabsorbée en partie dans l'intestin grêle, le reste devient du <b>coprostanol</b> grâce à la flore du côlon, dans les fèces.", [T("Éliminer le cholestérol"), LG("seul le FOIE l'élimine, par la BILE", "rouge", { taille: "grand" }), LG("libre : en partie réabsorbé · le reste → coprostanol (flore du côlon) → fèces", "noir", { puce: "•" })]),
      E("L'autre partie est transformée en <b>sels biliaires</b>. Étape 1 : cholestérol vers <b>acides biliaires primaires</b>, surtout l'acide cholique, et le chénodésoxycholique.", [EFF(), T("Fabriquer les sels biliaires"), LG("1 · cholestérol → acides biliaires PRIMAIRES (cholique, chénodésoxycholique)", "bleu")]),
      E("Que change-t-on ? On coupe 3 carbones de la chaîne latérale, qui donnent du propionyl-CoA pour le cycle de Krebs. La chaîne se termine par un COOH. La double liaison du cycle B est saturée. Et il y a 3 fonctions alcool. Résultat : moins hydrophobe, <b>amphiphile</b>.", [LG("– 3 C de la chaîne (→ propionyl-CoA) · chaîne terminée par COOH · cycle B saturé · 3 –OH → amphiphile", "noir", { taille: "petit", decale: true })]),
      E("L'enzyme clé : la <b>cholestérol 7α-hydroxylase</b>. Elle est inhibée quand les acides biliaires s'accumulent dans l'hépatocyte : c'est une rétro-inhibition.", [POST("Enzyme clé : cholestérol 7α-hydroxylase (rétro-inhibée par les acides biliaires)", "cle")]),
      E("Étape 2 : <b>conjugaison</b> par une liaison amide, avec la <b>glycine</b>, environ deux tiers, ou la <b>taurine</b>, un tiers. On obtient les acides glycocholique et taurocholique. Étape 3 : dans la bile, alcaline et riche en Na⁺, ils deviennent des sels : <b>glycocholate</b> et <b>taurocholate de sodium</b>.", [LG("2 · conjugaison (amide) : glycine (≈ 2/3) ou taurine (≈ 1/3)", "bleu"), LG("3 · bile (pH alcalin, Na⁺) → glycocholate et taurocholate de sodium", "bleu")]),
      E("Leur rôle : dans l'intestin grêle, ils <b>émulsionnent</b> les lipides, pour que les lipases pancréatiques puissent agir, et facilitent l'absorption. Et les fabriquer, c'est aussi une voie d'<b>élimination</b> du cholestérol.", [POST("Sels biliaires : émulsion des lipides + voie d'élimination du cholestérol", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel organe élimine le cholestérol ?", ["Le foie, par la bile", "Le rein, par l'urine", "Le poumon", "La peau"], "Seul le foie élimine le cholestérol."),
      qcm("a2", "Quelle est l'enzyme clé de la synthèse des acides biliaires ?", ["La cholestérol 7α-hydroxylase", "La LCAT", "La lipase pancréatique", "La HMG-CoA lyase"], "Rétro-inhibée par les acides biliaires.")
    ],
    revision: [
      qcm("r1", "Avec quoi les acides biliaires sont-ils conjugués ?", ["La glycine ou la taurine", "Le glucose", "Le phosphate", "La choline"], "Glycine ≈ 2/3, taurine ≈ 1/3."),
      qcm("r2", "Quel est le rôle des sels biliaires dans l'intestin ?", ["Émulsionner les lipides", "Hydrolyser les TG", "Absorber le glucose", "Fabriquer les chylomicrons"], "L'émulsion permet aux lipases pancréatiques d'agir.")
    ]
  },
  {
    id: "bc-lipides-27", fiche: F3, ficheTitre: F3T, titre: "Le cycle entéro-hépatique",
    classe: [
      E("Les sels biliaires ne sont pas perdus après un seul passage. Ils font une boucle : le <b>cycle entéro-hépatique</b>.", [T("Le cycle entéro-hépatique"), EQ("foie → bile → intestin grêle (émulsion) → iléon → veine porte → foie")]),
      E("Le foie les envoie dans la bile, ils émulsionnent les lipides dans l'intestin grêle, puis ils sont réabsorbés dans l'<b>iléon</b>, à environ <b>95 %</b>, et reviennent au foie par la veine porte.", [LG("≈ 95 % RÉABSORBÉS dans l'iléon → veine porte → foie", "vert", { taille: "grand" })]),
      E("Les 5 % restants, environ 500 mg par jour, arrivent dans le gros intestin. Là, la flore les déconjugue et leur retire un OH, la 7α-déshydroxylation : ce sont les acides biliaires <b>secondaires</b>, éliminés dans les fèces.", [LG("≈ 5 % (≈ 500 mg/j) → gros intestin → acides biliaires SECONDAIRES → fèces", "rouge", { puce: "•" })]),
      E("Conclusion : ce cycle <b>recycle</b> les sels biliaires, mais il <b>limite l'élimination</b> du cholestérol.", [POST("Cycle entéro-hépatique : 95 % recyclés → limite l'élimination du cholestérol", "cle")], "reflechit")
    ],
    questions: [
      qcm("a1", "Quelle part des sels biliaires est réabsorbée dans l'iléon ?", ["Environ 95 %", "Environ 50 %", "Environ 5 %", "100 %"], "Seuls ≈ 5 % partent vers le gros intestin."),
      qcm("a2", "Que forme la flore du gros intestin à partir des sels biliaires ?", ["Des acides biliaires secondaires", "Des acides biliaires primaires", "Du cholestérol", "Des chylomicrons"], "Déconjugaison + 7α-déshydroxylation.")
    ],
    revision: [
      vf("r1", "Le cycle entéro-hépatique facilite l'élimination du cholestérol.", false, "Faux : il recycle les sels biliaires, donc il LIMITE l'élimination du cholestérol.")
    ]
  },
  {
    id: "bc-lipides-28", fiche: F3, ficheTitre: F3T, titre: "Les cérides",
    classe: [
      E("Dernier lipide simple : les <b>cérides</b>, les cires. Ce sont des monoesters d'un acide gras et d'un <b>alcool gras</b>, c'est-à-dire un alcool à longue chaîne.", [T("Les cérides (cires)"), EQ("AG + alcool gras → céride + H₂O")]),
      E("On les trouve dans les cires végétales, la cuticule des feuilles et des fruits, et dans les cires d'insectes. Exemples : le palmitate de cétyle, le blanc de baleine ; la cire d'abeille ; les esters de rétinol du plasma ; des glycocérides végétaux ou bactériens.", [LG("cires végétales (cuticule des feuilles, des fruits) · cires d'insectes", "vert", { puce: "•" }), LG("ex. : palmitate de cétyle (blanc de baleine), cire d'abeille, esters de rétinol", "vert", { puce: "•" })]),
      E("Leurs propriétés : très apolaires, solubles dans les solvants organiques chauds, solides à température ambiante, avec un point de fusion souvent élevé.", [LG("très hydrophobes · solides · point de fusion élevé", "noir", { puce: "•" })]),
      E("Et ils sont difficiles à hydrolyser : chez l'homme, on ne peut guère les dégrader ailleurs que dans les <b>peroxysomes du foie</b>.", [POST("Cérides = AG + alcool gras · très difficiles à dégrader (peroxysomes du foie)", "cle")], "content"),
      E("Résumé de la fiche 3 : glycérides, glycérol plus 1, 2 ou 3 AG ; TG hydrophobes ; cholestérol et stérides ; VLDL vers LDL vers tissus, HDL vers foie ; sels biliaires recyclés à 95 %.", [EFF(), T("L'essentiel de la fiche 3"), POST("Glycérides = glycérol + 1, 2, 3 AG · TG hydrophobes · -yl/-oyl, -ine · adipeux blanc/brun · cholestérol OH (A), double liaison (B), chaîne (D) · stéride = cholestérol + AG · VLDL → IDL → LDL ; HDL → foie · sels biliaires 95 % recyclés · céride = AG + alcool gras", "cle")], "content")
    ],
    questions: [
      qcm("a1", "De quoi est formé un céride ?", ["Un acide gras + un alcool gras", "Du glycérol + 3 AG", "Du cholestérol + un AG", "De la sphingosine + un AG"], "Un monoester d'AG et d'alcool à longue chaîne."),
      vf("a2", "Les cérides sont facilement digérés par l'homme.", false, "Faux : ils sont très difficiles à hydrolyser (seulement dans les peroxysomes du foie).")
    ],
    revision: [
      qcm("r1", "Lequel de ces exemples est un céride ?", ["La cire d'abeille", "La lécithine", "La palmitine", "Le cortisol"], "Aussi : palmitate de cétyle, esters de rétinol.")
    ]
  },

  /* ================= FICHE 4 ================= */
  {
    id: "bc-lipides-29", fiche: F4, ficheTitre: F4T, titre: "Les glycérophospholipides",
    classe: [
      E("Rappel : les « matières grasses », ou corps gras, comme les huiles, le beurre, la margarine ou le saindoux, se caractérisent par leur composition en AG. Place aux lipides <b>complexes</b> : C, H, O, plus P et N, parfois S. D'abord, les <b>glycérophospholipides</b>, qu'on appelle classiquement phospholipides.", [T("Les glycérophospholipides"), LG("lipides complexes : C, H, O + P, N (parfois S)", "noir")]),
      E("Leur base : un <b>glycérol</b>. Deux fonctions alcool sont estérifiées par <b>2 acides gras</b>. La troisième est estérifiée par un <b>acide phosphorique</b>.", [LG("glycérol : 2 –OH + 2 AG · 3e –OH + acide phosphorique", "bleu")]),
      E("Cet ensemble s'appelle l'<b>acide phosphatidique</b>, ou diacylglycérol phosphate. C'est la molécule commune à tous les glycérophospholipides.", [EQ("glycérol + 2 AG + phosphate = ACIDE PHOSPHATIDIQUE"), SOUL()]),
      E("Ensuite, le phosphate est substitué par une molécule portant une fonction <b>alcool</b>. C'est la nature de cet alcool qui définit le glycérophospholipide. Les formules ne sont pas exigées au BTS.", [EQ("Glycérophospholipide = acide phosphatidique + alcool"), POST("Formules non exigées au BTS", "astuce")]),
      E("Ce sont des molécules <b>amphiphiles</b>. Le pôle hydrophile, c'est le phosphate et sa substitution ; à pH physiologique ces têtes sont ionisées, ce qui renforce le caractère hydrophile. Le pôle hydrophobe, ce sont les chaînes des AG.", [EFF(), T("Des molécules amphiphiles"), LG("tête : phosphate + alcool, ionisée → HYDROPHILE", "bleu", { puce: "•" }), LG("queues : 2 chaînes d'AG → HYDROPHOBES", "rouge", { puce: "•" })]),
      E("Les charges : la phosphatidyl-choline et la -éthanolamine portent une charge plus et une charge moins, charge nette nulle. La phosphatidyl-sérine et le -inositol ont une charge nette <b>négative</b>. Dans l'eau, ils forment des <b>bicouches</b> et des liposomes, pas des micelles.", [LG("choline, éthanolamine : + et − → charge nette NULLE", "noir", { puce: "•" }), LG("sérine, inositol : charge nette NÉGATIVE", "noir", { puce: "•" }), POST("Dans l'eau : bicouches, pas micelles", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Quelle molécule est commune à tous les glycérophospholipides ?", ["L'acide phosphatidique", "La sphingosine", "Le céramide", "La choline"], "Glycérol + 2 AG + phosphate."),
      qcm("a2", "Qu'est-ce qui définit un glycérophospholipide particulier ?", ["L'alcool qui substitue le phosphate", "Le nombre de glycérols", "La présence de cholestérol", "La longueur du glycérol"], "Choline, éthanolamine, sérine, inositol…")
    ],
    revision: [
      qcm("r1", "Quels glycérophospholipides ont une charge nette négative ?", ["Phosphatidyl-sérine et -inositol", "Phosphatidyl-choline et -éthanolamine", "Tous", "Aucun"], "Choline et éthanolamine : charge nette nulle.")
    ]
  },
  {
    id: "bc-lipides-30", fiche: F4, ficheTitre: F4T, titre: "Les différents phospholipides",
    classe: [
      E("Les quatre glycérophospholipides à connaître, selon l'alcool fixé.", [T("Les différents phospholipides"), GRI(["Alcool", "Glycérophospholipide", "Où, à quoi ?"], [
        ["choline", "phosphatidyl-choline = LÉCITHINE", "la plupart des membranes · jaune d'œuf"],
        ["éthanolamine", "phosphatidyl-éthanolamine", "« céphalines » · abondantes dans le cerveau"],
        ["sérine", "phosphatidyl-sérine", "« céphalines »"],
        ["inositol", "phosphatidyl-inositol", "face cytosolique · signalisation (IP3)"]
      ])]),
      E("Avec la <b>choline</b> : la phosphatidylcholine, la <b>lécithine</b>. Dans la plupart des membranes plasmiques ; dans l'alimentation, le jaune d'œuf. Attention, « lécithine » désigne parfois l'ensemble des glycérophospholipides.", [MONTRE(1)]),
      E("Avec l'<b>éthanolamine</b> et la <b>sérine</b> : ce sont les <b>céphalines</b>, un terme ancien. Elles sont abondantes dans le cerveau.", [MONTRE(2), MONTRE(3)]),
      E("Avec l'<b>inositol</b> : le phosphatidylinositol, sur la face cytosolique de la membrane. Lui, il sert à transmettre un signal hormonal.", [MONTRE(4), POST("Choline : lécithine · éthanolamine, sérine : céphalines", "cle")]),
      E("Comment ? Il est d'abord phosphorylé en <b>PIP2</b>. Une hormone se fixe sur son récepteur, ce qui active une <b>phospholipase C</b>. Elle libère l'<b>IP3</b>, l'inositol triphosphate : un <b>second messager</b>.", [EFF(), T("Le phosphatidylinositol, messager"), EQ("PI → PIP2 → (phospholipase C, activée par un récepteur hormonal) → IP3")]),
      E("L'IP3 se fixe sur des récepteurs du réticulum endoplasmique, couplés à des canaux calciques. Le <b>calcium</b> est libéré dans le cytosol. Exemple : la contraction des muscles lisses.", [EQ("IP3 → récepteurs du RE → Ca²⁺ libéré dans le cytosol → ex. contraction des muscles lisses"), POST("Phosphatidylinositol → IP3 → Ca²⁺ (second messager)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel autre nom porte la phosphatidylcholine ?", ["La lécithine", "La céphaline", "La sphingomyéline", "Le ganglioside"], "Présente dans la plupart des membranes, et le jaune d'œuf."),
      ordre("a2", "Remets dans l'ordre la voie du phosphatidylinositol.", ["Phosphatidylinositol phosphorylé en PIP2", "Phospholipase C activée par un récepteur hormonal", "Libération d'IP3", "Ca²⁺ libéré par le réticulum endoplasmique"], "L'IP3 est un second messager.")
    ],
    revision: [
      paires("r1", "Relie chaque alcool à son phospholipide.", [["Choline", "Lécithine"], ["Éthanolamine", "Céphaline (cerveau)"], ["Inositol", "Signalisation par l'IP3"]], "Choline : lécithine ; éthanolamine, sérine : céphalines."),
      qcm("r2", "Que provoque l'IP3 dans la cellule ?", ["La libération de Ca²⁺ dans le cytosol", "La synthèse de cholestérol", "La β-oxydation", "La formation de micelles"], "Il agit sur les récepteurs du réticulum endoplasmique.")
    ]
  },
  {
    id: "bc-lipides-31", fiche: F4, ficheTitre: F4T, titre: "Membrane et phospholipases",
    classe: [
      E("Les glycérophospholipides forment l'<b>architecture</b> de la membrane plasmique, avec d'autres molécules amphiphiles : glycolipides, sphingomyéline, cholestérol. Une double couche très stable.", [T("La membrane plasmique"), LG("glycérophospholipides + glycolipides, sphingomyéline, cholestérol → double couche stable", "bleu")]),
      E("Son rôle de départ : séparer le milieu extracellulaire, le liquide interstitiel, du milieu intracellulaire, le cytoplasme. Les deux sont aqueux. Pour être stable, la membrane doit être une <b>bicouche</b> : queues hydrophobes face à face, têtes au contact de l'eau.", [LG("sépare 2 milieux AQUEUX → bicouche : queues face à face, têtes vers l'eau", "noir", { puce: "•" })]),
      E("Et elle est <b>fluide</b> : les lipides se déplacent latéralement dans leur couche. Par contre, passer d'une couche à l'autre, c'est rare.", [LG("FLUIDE : déplacement latéral facile · passage d'une couche à l'autre : rare", "vert", { puce: "•" }), POST("Amphiphiles → bicouche fluide (membranes)", "cle")]),
      E("Les <b>phospholipases</b> sont les enzymes qui coupent les phospholipides. Chacune coupe à un endroit précis.", [EFF(), T("Les phospholipases"), GRI(["Phospholipase", "Coupe…", "Libère"], [
        ["A1", "l'AG en position 1 (sn-1)", "un acide gras"],
        ["A2", "l'AG en position 2 (sn-2)", "un acide gras"],
        ["B", "les 2 AG (A1 + A2)", "deux acides gras"],
        ["C", "avant le phosphate", "tête phosphorylée (ex. IP3) + diacylglycérol"],
        ["D", "après le phosphate", "tête seule (ex. choline) + acide phosphatidique"]
      ], true)]),
      E("Le moyen de s'en souvenir : A1, A2 et B coupent les <b>acides gras</b> ; C et D coupent la <b>tête</b>.", [POST("Phospholipases A1, A2, B → AG · C, D → tête", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Que libère la phospholipase C ?", ["La tête phosphorylée (ex. IP3) + un diacylglycérol", "Les deux acides gras", "La choline seule + l'acide phosphatidique", "Le glycérol"], "Elle coupe AVANT le phosphate."),
      vf("a2", "Dans une membrane, les lipides passent facilement d'une couche à l'autre.", false, "Faux : ils bougent latéralement, mais le passage d'une couche à l'autre est rare.")
    ],
    revision: [
      paires("r1", "Relie chaque phospholipase à ce qu'elle coupe.", [["A2", "L'AG en position 2"], ["B", "Les deux AG"], ["D", "Après le phosphate (tête seule)"]], "A1, A2, B : AG ; C, D : tête.")
    ]
  },
  {
    id: "bc-lipides-32", fiche: F4, ficheTitre: F4T, titre: "Les sphingolipides",
    classe: [
      E("Deuxième famille de lipides complexes : les <b>sphingolipides</b>. Leur base n'est pas le glycérol, mais la <b>sphingosine</b> : un alcool aminé à longue chaîne, avec une fonction amine NH₂ et une fonction alcool primaire.", [T("Les sphingolipides"), LG("SPHINGOSINE : alcool aminé à longue chaîne (NH₂ + alcool primaire)", "bleu")]),
      E("Un acide gras se fixe sur la fonction amine, par une <b>liaison amide</b>. On obtient le <b>céramide</b>.", [EQ("sphingosine + AG (liaison AMIDE) = CÉRAMIDE"), SOUL(true)]),
      E("Les céramides sont assez rares sous cette forme : ils sont substitués sur leur fonction alcool primaire. Ce qui donne deux grandes familles.", [EFF(), T("Les dérivés du céramide"), GRI(["Dérivé", "Composition", "Où ?"], [
        ["Sphingomyéline", "céramide + phosphate + choline", "membranes · surtout gaine de myéline"],
        ["Galactocérébroside", "céramide + galactose", "tissu nerveux"],
        ["Ganglioside", "céramide + plusieurs oses dont l'acide sialique", "tissu nerveux"]
      ])]),
      E("La <b>sphingomyéline</b> : céramide plus phosphate plus choline. Amphiphile, elle est dans les membranes, surtout dans la <b>gaine de myéline</b> qui protège l'axone des neurones : cellules de Schwann dans les nerfs, oligodendrocytes dans le cerveau.", [MONTRE(1)]),
      E("Les <b>sphingoglycolipides</b> : céramide plus un ou plusieurs oses. Avec le galactose : un galactocérébroside. Avec plusieurs oses dont l'<b>acide sialique</b> : un <b>ganglioside</b>. Abondants dans le tissu nerveux.", [MONTRE(2), MONTRE(3), POST("Céramide = sphingosine + AG (amide) · sphingomyéline (myéline) · gangliosides (acide sialique)", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Qu'est-ce qu'un céramide ?", ["Sphingosine + acide gras (liaison amide)", "Glycérol + 2 AG + phosphate", "Cholestérol + AG", "Alcool gras + AG"], "La base de tous les sphingolipides."),
      qcm("a2", "Où trouve-t-on surtout la sphingomyéline ?", ["Dans la gaine de myéline", "Dans le tissu adipeux", "Dans la bile", "Dans les chylomicrons"], "Elle protège l'axone des neurones myélinisés.")
    ],
    revision: [
      qcm("r1", "Quel ose caractérise les gangliosides ?", ["L'acide sialique", "Le fructose", "Le ribose", "Le saccharose"], "Céramide + plusieurs oses dont l'acide sialique."),
      vf("r2", "Dans un sphingolipide, l'AG est lié par une liaison ester.", false, "Faux : par une liaison AMIDE, sur la fonction amine de la sphingosine.")
    ]
  },
  {
    id: "bc-lipides-33", fiche: F4, ficheTitre: F4T, titre: "Rôles des sphingolipides",
    classe: [
      E("À quoi servent les sphingoglycolipides ? Les <b>gangliosides</b> participent à la transduction du signal et au système immunitaire. Ils servent aussi de <b>récepteurs</b> : par exemple, le site de fixation du virus de la grippe.", [T("Rôles des sphingoglycolipides"), LG("gangliosides : signal cellulaire, immunité · récepteurs (ex. virus de la grippe)", "bleu", { puce: "•" })]),
      E("Sur la face externe de la membrane, ils servent à la <b>reconnaissance cellulaire</b> : ce sont des antigènes de surface. Ce qui les rend reconnaissables, c'est la partie <b>glucidique</b> ; la partie lipidique sert juste d'ancrage. Exemple : les marqueurs des groupes sanguins A, B, O sur les hématies.", [LG("face externe : RECONNAISSANCE = antigènes de surface", "vert", { puce: "•" }), LG("partie glucidique = immunogène · partie lipidique = ancrage · ex. groupes A, B, O", "vert", { puce: "•" })]),
      E("Les sphingolipides sont abondants dans le cerveau, mais présents dans tous les tissus animaux.", [LG("abondants dans le cerveau, présents dans tous les tissus animaux", "noir", { taille: "petit" })]),
      E("Côté pathologies : les <b>dyslipoïdoses</b>, ou sphingolipidoses. Ce sont des maladies congénitales : il manque une enzyme de dégradation, donc les sphingolipides <b>s'accumulent</b>. Exemples : maladie de Gaucher, de Niemann-Pick avec la sphingomyéline, de Tay-Sachs avec les gangliosides.", [EFF(), T("Les sphingolipidoses"), LG("maladies congénitales : déficit d'une enzyme de dégradation → ACCUMULATION", "rouge"), GRI(["Maladie", "Ce qui s'accumule"], [["Gaucher", "sphingolipides"], ["Niemann-Pick", "sphingomyéline"], ["Tay-Sachs", "gangliosides"]], true)], "reflechit")
    ],
    questions: [
      qcm("a1", "Dans un antigène de surface, quelle partie est reconnue par le système immunitaire ?", ["La partie glucidique", "La partie lipidique", "Le phosphate", "Le glycérol"], "La partie lipidique sert d'ancrage."),
      qcm("a2", "Qu'est-ce qu'une sphingolipidose ?", ["Une maladie congénitale où des sphingolipides s'accumulent", "Une carence en acides gras", "Un excès de cholestérol LDL", "Une infection de la gaine de myéline"], "Déficit d'une enzyme de dégradation.")
    ],
    revision: [
      paires("r1", "Relie chaque maladie à ce qui s'accumule.", [["Niemann-Pick", "Sphingomyéline"], ["Tay-Sachs", "Gangliosides"]], "Deux sphingolipidoses classiques.")
    ]
  },
  {
    id: "bc-lipides-34", fiche: F4, ficheTitre: F4T, titre: "Fabriquer TG et phospholipides",
    classe: [
      E("Complément : comment fabrique-t-on les TG et les phospholipides ? Surtout dans le <b>foie</b>, le <b>tissu adipeux</b> et les <b>entérocytes</b>. Il faut deux choses : des AG activés, les acyl-CoA, et un glycérol phosphorylé.", [T("La biosynthèse des TG et des PL"), LG("foie, tissu adipeux, entérocytes · besoin : acyl-CoA + glycérol 3-phosphate", "noir")]),
      E("Le glycérol 3-phosphate vient surtout de la <b>glycolyse</b> : le DHAP est réduit en glycérol 3-phosphate. Ou du glycérol du plasma, grâce à la <b>glycérol kinase</b>, mais seulement dans le foie.", [LG("source principale : glycolyse → DHAP → (réduction) → glycérol 3-phosphate", "bleu", { puce: "•" }), LG("ou glycérol plasmatique → (glycérol kinase) → seulement dans le FOIE", "bleu", { puce: "•" })]),
      E("Piège : l'adipocyte n'a <b>pas de glycérol kinase</b>. Il ne peut pas réutiliser le glycérol : il dépend du glucose.", [POST("Adipocyte : PAS de glycérol kinase → il a besoin du glucose", "piege")], "pointe"),
      E("Deux acyltransférases fixent 2 AG : on obtient l'<b>acide phosphatidique</b>. C'est le <b>carrefour</b>.", [EQ("glycérol 3-P + 2 acyl-CoA → ACIDE PHOSPHATIDIQUE (carrefour)")]),
      E("Vers les <b>TG</b> : une phosphatase retire le phosphate, puis une acyltransférase fixe le 3e AG. Vers les <b>glycérophospholipides</b> : activation par le CTP, puis ajout de la tête, par exemple l'inositol.", [LG("→ TG : phosphatase (– P) puis + 1 acyl-CoA", "vert", { puce: "•" }), LG("→ glycérophospholipides : activation par le CTP puis ajout de la tête", "vert", { puce: "•" })]),
      E("Qui stimule le stockage ? L'abondance d'AG, après un repas, et l'<b>insuline</b>, surtout dans le tissu adipeux. Elle augmente la synthèse de la <b>LPL</b>, donc plus d'AG pour les adipocytes. Et elle fait migrer les <b>GLUT4</b> vers la membrane : plus de glucose, donc plus de glycérol 3-phosphate.", [EFF(), T("Régulation : l'insuline"), LG("↑ synthèse de la LPL → plus d'AG pour les adipocytes", "vert", { puce: "✓" }), LG("↑ GLUT4 à la membrane → plus de glucose → plus de glycérol 3-P", "vert", { puce: "✓" }), POST("Acide phosphatidique → TG ou PL · insuline ↑ stockage", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle molécule est le carrefour entre la synthèse des TG et celle des phospholipides ?", ["L'acide phosphatidique", "Le cholestérol", "Le céramide", "L'acétyl-CoA"], "Glycérol 3-P + 2 acyl-CoA."),
      vf("a2", "L'adipocyte peut réutiliser le glycérol du plasma grâce à sa glycérol kinase.", false, "Faux : l'adipocyte n'a pas de glycérol kinase ; seul le foie en a.")
    ],
    revision: [
      qcm("r1", "Comment l'insuline augmente-t-elle le glycérol 3-phosphate dans l'adipocyte ?", ["En faisant migrer les GLUT4 vers la membrane", "En activant la glycérol kinase", "En inhibant la glycolyse", "En stimulant la lipolyse"], "Plus de glucose entrant → plus de glycérol 3-P."),
      qcm("r2", "D'où vient surtout le glycérol 3-phosphate ?", ["De la glycolyse (DHAP réduit)", "Du cholestérol", "Des acides aminés", "Des corps cétoniques"], "DHAP → glycérol 3-phosphate.")
    ]
  },
  {
    id: "bc-lipides-35", fiche: F4, ficheTitre: F4T, titre: "Après le repas, pendant le jeûne",
    classe: [
      E("Complément : comparons l'état <b>post-prandial</b>, après le repas, et l'état de <b>jeûne</b>.", [T("Post-prandial / jeûne"), GRI(["", "Après le repas", "Jeûne"], [
        ["Hormones", "insuline/glucagon ↑ → anabolisme", "insuline/glucagon ↓ (+ catécholamines, cortisol) → catabolisme"],
        ["Lipides", "chylomicrons · LPL : muscle → ATP, adipocyte → TG", "lipolyse : AG libres (albumine) → β-oxydation · glycérol → foie"],
        ["Foie", "synthèse (TG, VLDL)", "néoglucogenèse · acétyl-CoA s'accumule → cétogenèse"],
        ["Corps cétoniques", "presque pas produits", "nouveau substrat (cerveau en jeûne prolongé)"],
        ["Protéines", "synthèse", "protéolyse musculaire, puis épargne"]
      ])]),
      E("Après le repas : hyperglycémie, donc le rapport <b>insuline sur glucagon augmente</b>. C'est l'anabolisme. Les lipides arrivent en chylomicrons. La LPL les distribue : le muscle brûle les AG pour faire de l'ATP, les adipocytes les mettent en réserve en TG. Le foie fabrique des TG et des VLDL.", [MONTRE(1), MONTRE(2), MONTRE(3)]),
      E("Pendant le jeûne : le rapport insuline sur glucagon baisse, renforcé par les catécholamines et le cortisol. C'est le catabolisme. <b>Lipolyse</b> : les AG libres voyagent sur l'albumine et sont β-oxydés. Ils ne font pas de glucose, mais ils <b>épargnent</b> le glucose pour les cellules qui en dépendent. Le <b>glycérol</b>, lui, va au foie pour la néoglucogenèse.", [POST("Jeûne : AG → pas de glucose, mais glucose ÉPARGNÉ · glycérol → glucose", "cle")], "reflechit"),
      E("Dans le foie à jeun : le glycogène s'épuise, donc néoglucogenèse, à partir du lactate, du glycérol et des acides aminés. L'oxaloacétate se raréfie, l'acétyl-CoA s'accumule, et il ne peut pas faire de glucose. Il part en <b>cétogenèse</b>.", [EQ("oxaloacétate ↓ + acétyl-CoA ↑ → CÉTOGENÈSE")]),
      E("Les <b>corps cétoniques</b> : après le repas, presque pas produits, car l'insuline freine la lipolyse. À jeun, c'est un nouveau carburant pour les muscles, le cœur, et surtout le <b>cerveau</b> en jeûne prolongé. Mais <b>jamais</b> pour le foie lui-même.", [MONTRE(4), POST("Corps cétoniques : jamais utilisés par le foie lui-même", "piege")]),
      E("Les protéines : à jeun, la protéolyse musculaire fournit des acides aminés pour la néoglucogenèse. Importante les premiers jours, elle diminue quand les corps cétoniques prennent le relais : c'est l'<b>épargne musculaire</b>.", [MONTRE(5)], "content")
    ],
    questions: [
      qcm("a1", "Pendant le jeûne, que devient le glycérol libéré par la lipolyse ?", ["Il va au foie pour la néoglucogenèse", "Il est β-oxydé", "Il devient un corps cétonique", "Il est stocké dans l'adipocyte"], "Glycérol → glucose dans le foie."),
      vf("a2", "Le foie utilise les corps cétoniques qu'il fabrique.", false, "Faux : il les fabrique mais ne les utilise jamais.")
    ],
    revision: [
      qcm("r1", "Pourquoi l'acétyl-CoA s'accumule-t-il dans le foie à jeun ?", ["L'oxaloacétate se raréfie (parti en néoglucogenèse)", "L'insuline est élevée", "La lipolyse est freinée", "Le glycogène est plein"], "Il part alors en cétogenèse."),
      qcm("r2", "Quel organe utilise surtout les corps cétoniques en jeûne prolongé ?", ["Le cerveau", "Le foie", "Les hématies", "Le pancréas"], "Ce qui permet l'épargne musculaire.")
    ]
  },

  /* ================= FICHE 5 ================= */
  {
    id: "bc-lipides-36", fiche: F5, ficheTitre: F5T, titre: "La famille des stéroïdes",
    classe: [
      E("Dernière fiche : les <b>dérivés lipidiques</b>. Pas d'acide gras, mais hydrophobes, donc classés avec les lipides. D'abord, les <b>stéroïdes</b>.", [T("La famille des stéroïdes"), LG("pas d'AG · hydrophobes · NOYAU STÉRANE : 4 cycles A, B, C, D", "bleu", { taille: "grand" })]),
      E("Quatre représentants : les <b>stérols</b>, dont le principal est le cholestérol ; les <b>hormones stéroïdes</b> ; les <b>sels biliaires</b> ; et la <b>vitamine D</b>.", [RANG([
        { titre: "Cholestérol", x: "stérol à 27 C · la « molécule mère »", c: "noir" },
        { titre: "Hormones stéroïdes", x: "gonades, placenta, surrénales · fabriquées depuis le cholestérol", c: "vert" },
        { titre: "Sels biliaires", x: "foie → bile · fabriqués depuis le cholestérol", c: "vert" },
        { titre: "Vitamine D3", x: "depuis le 7-déhydrocholestérol + UVB · sécostéroïde", c: "rouge" }
      ]), MONTRE(1)]),
      E("Le cholestérol est la <b>molécule mère</b>. Les hormones stéroïdes, les sels biliaires et les esters de cholestérol en dérivent. Ils gardent tous le squelette à 4 cycles.", [MONTRE(2), MONTRE(3)]),
      E("La vitamine D3 est à part. Elle ne vient <b>pas</b> du cholestérol lui-même, mais de son dernier précurseur : le <b>7-déhydrocholestérol</b>. Dans la peau, les <b>UVB</b> ouvrent son cycle B.", [MONTRE(4), EQ("7-déhydrocholestérol + UVB (peau) → ouverture du cycle B → vitamine D3")], "reflechit"),
      E("C'est pour ça qu'on l'appelle un <b>sécostéroïde</b> : un stéroïde ouvert. Tous ont le noyau stérane complet, sauf elle.", [POST("Vit. D3 : vient du 7-déhydrocholestérol (pas du cholestérol) → sécostéroïde (cycle B ouvert)", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "De quoi la vitamine D3 est-elle fabriquée ?", ["Du 7-déhydrocholestérol, sous l'action des UVB", "Du cholestérol directement", "Des sels biliaires", "Du β-carotène"], "Le dernier précurseur du cholestérol, pas le cholestérol lui-même."),
      qcm("a2", "Pourquoi dit-on que la vitamine D est un sécostéroïde ?", ["Son cycle B est ouvert", "Elle n'a pas de cycle", "Elle a 5 cycles", "Elle contient un acide gras"], "Sécostéroïde = stéroïde ouvert.")
    ],
    revision: [
      qcm("r1", "Quels sont les quatre représentants des stéroïdes ?", ["Stérols, hormones stéroïdes, sels biliaires, vitamine D", "AG, TG, phospholipides, cérides", "Vitamines A, D, E, K", "Céramides, gangliosides, sphingomyéline, cérébrosides"], "Tous ont le noyau stérane (cycle B ouvert pour la vit. D).")
    ]
  },
  {
    id: "bc-lipides-37", fiche: F5, ficheTitre: F5T, titre: "Le cholestérol dans la membrane",
    classe: [
      E("Revenons au cholestérol, et à sa place dans la <b>membrane</b>. Rappel : un OH sur le cycle A, petit pôle hydrophile ; un gros squelette hydrophobe. Il est insoluble dans l'eau, mais faiblement amphiphile.", [T("Le cholestérol dans la membrane"), LG("OH (cycle A) : petit pôle hydrophile · squelette : hydrophobe → faiblement amphiphile", "noir")]),
      E("Imagine une membrane vue en coupe : deux rangées de phospholipides, têtes vers l'eau, queues vers le centre. Le cholestérol se <b>glisse</b> entre les phospholipides.", [LG("se glisse ENTRE les phospholipides", "bleu", { puce: "•" })]),
      E("Son orientation est imposée : sa petite tête <b>OH</b> se place près des têtes, <b>côté eau</b>. Son noyau rigide et sa chaîne se logent parmi les queues, dans la <b>zone hydrophobe</b>.", [LG("OH → côté AQUEUX, près des têtes", "bleu", { puce: "•" }), LG("noyau + chaîne → dans la ZONE HYDROPHOBE", "rouge", { puce: "•" }), SOUL()]),
      E("Son rôle : il règle la <b>fluidité</b>. Il rigidifie la membrane quand il fait chaud, et l'empêche de se figer quand il fait froid. C'est l'un de ses rôles indispensables.", [POST("Cholestérol membranaire : squelette dans la zone hydrophobe, OH côté aqueux · règle la fluidité", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Dans la membrane, où se place le OH du cholestérol ?", ["Côté aqueux, près des têtes des phospholipides", "Au centre de la bicouche", "Dans le cytosol, détaché", "Entre deux cellules"], "Le squelette, lui, est enfoui dans la zone hydrophobe."),
      qcm("a2", "Quel est l'effet du cholestérol sur la membrane quand il fait chaud ?", ["Il la rigidifie", "Il la dissout", "Il la rend perméable à tout", "Aucun effet"], "Et quand il fait froid, il l'empêche de se figer.")
    ],
    revision: [
      vf("r1", "Le cholestérol empêche la membrane de se figer quand il fait froid.", true, "Vrai : il règle la fluidité dans les deux sens.")
    ]
  },
  {
    id: "bc-lipides-38", fiche: F5, ficheTitre: F5T, titre: "Les hormones stéroïdes",
    classe: [
      E("Les <b>hormones stéroïdes</b> : cinq classes à connaître, avec un exemple chacune.", [T("Les hormones stéroïdes"), GRI(["Classe (exemple)", "Lieu", "Principaux rôles"], [
        ["Glucocorticoïdes (cortisol)", "corticosurrénale", "néoglucogenèse → hyperglycémiant · stimule la lipolyse"],
        ["Minéralocorticoïdes (aldostérone)", "corticosurrénale", "rein : réabsorbe Na⁺, excrète K⁺ → volémie et pression ↑"],
        ["Progestagènes (progestérone)", "ovaire, placenta", "cycle ovarien, muqueuse utérine, maintien de la grossesse"],
        ["Androgènes (testostérone)", "testicule (+ surrénale)", "spermatogenèse, caractères sexuels masculins"],
        ["Œstrogènes (œstradiol)", "ovaire, placenta", "follicules (ovogenèse), muqueuse utérine, caractères féminins"]
      ])]),
      E("Le <b>cortisol</b>, un glucocorticoïde de la corticosurrénale : il stimule la néoglucogenèse, c'est une hormone <b>hyperglycémiante</b>. Il stimule aussi la lipolyse.", [MONTRE(1)]),
      E("L'<b>aldostérone</b>, un minéralocorticoïde : au niveau du rein, elle fait réabsorber le sodium et excréter le potassium. Résultat : la volémie et la pression artérielle augmentent.", [MONTRE(2)]),
      E("La <b>progestérone</b> : cycle ovarien, muqueuse utérine, maintien de la grossesse. La <b>testostérone</b> : spermatogenèse et caractères masculins. L'<b>œstradiol</b> : croissance des follicules, muqueuse utérine, caractères féminins.", [MONTRE(3), MONTRE(4), MONTRE(5)]),
      E("Qui fabrique quoi ? Les <b>gonades</b>, ovaires et testicules, et le <b>placenta</b> : progestagènes, œstrogènes, androgènes. Les <b>corticosurrénales</b> : glucocorticoïdes, minéralocorticoïdes, et certains androgènes.", [POST("Gonades + placenta : sexuelles · corticosurrénales : cortisol, aldostérone, quelques androgènes", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle hormone stéroïde fait réabsorber le Na⁺ par le rein ?", ["L'aldostérone", "Le cortisol", "La progestérone", "L'œstradiol"], "Minéralocorticoïde : volémie et pression artérielle ↑."),
      qcm("a2", "Pourquoi dit-on que le cortisol est hyperglycémiant ?", ["Il stimule la néoglucogenèse", "Il stimule la glycolyse", "Il bloque la lipolyse", "Il stocke le glycogène"], "Il fait fabriquer du glucose.")
    ],
    revision: [
      paires("r1", "Relie chaque hormone à sa classe.", [["Cortisol", "Glucocorticoïde"], ["Aldostérone", "Minéralocorticoïde"], ["Progestérone", "Progestagène"], ["Testostérone", "Androgène"]], "Cinq classes avec les œstrogènes."),
      qcm("r2", "Où sont produits les glucocorticoïdes ?", ["Dans la corticosurrénale", "Dans les ovaires", "Dans le placenta", "Dans le foie"], "Corticosurrénale : glucocorticoïdes, minéralocorticoïdes, quelques androgènes.")
    ]
  },
  {
    id: "bc-lipides-39", fiche: F5, ficheTitre: F5T, titre: "Synthèse et action des hormones stéroïdes",
    classe: [
      E("Toutes les hormones stéroïdes sont fabriquées à partir du <b>cholestérol</b> : hydroxylations, oxydations, et modification de la chaîne latérale. Les enzymes sont dans la <b>mitochondrie</b> et le <b>réticulum endoplasmique lisse</b>.", [T("Une cascade de fabrication"), LG("cholestérol → hydroxylations, oxydations, chaîne latérale modifiée · enzymes : mitochondrie + RE lisse", "noir")]),
      E("Première étape : dans la mitochondrie, on coupe la chaîne latérale. Le cholestérol devient la <b>prégnénolone</b>, puis la <b>progestérone</b>.", [EQ("Cholestérol → (mitochondrie) → prégnénolone → progestagènes (progestérone)")]),
      E("Ensuite, trois branches : les <b>glucocorticoïdes</b>, comme le cortisol ; les <b>minéralocorticoïdes</b>, comme l'aldostérone ; et les <b>androgènes</b>, comme la testostérone. Et les androgènes sont transformés en <b>œstrogènes</b> par l'<b>aromatase</b>.", [EQ("→ cortisol · → aldostérone · → testostérone → (aromatase) → œstradiol"), POST("Cholestérol → prégnénolone → progestagènes → cortisol, aldostérone, androgènes → œstrogènes", "cle")]),
      E("L'idée clé : ce sont les <b>enzymes</b> présentes dans chaque glande qui décident de l'hormone produite.", [LG("les ENZYMES de chaque glande décident de l'hormone produite", "vert", { taille: "grand" })], "pointe"),
      E("Comment agissent-elles ? Elles sont <b>hydrophobes</b>, contrairement aux hormones protéiques. Elles voyagent dans le sang sur des protéines, et <b>traversent la membrane</b>.", [EFF(), T("Le mode d'action"), LG("HYDROPHOBES → transportées par des protéines · TRAVERSENT la membrane", "bleu", { puce: "•" })]),
      E("Leur récepteur est <b>intracellulaire</b> : dans le cytoplasme pour le cortisol, l'aldostérone et les androgènes ; surtout dans le noyau pour les œstrogènes et la progestérone. Le complexe hormone-récepteur se fixe sur l'<b>ADN</b>, et déclenche la <b>transcription</b> de gènes.", [EQ("hormone + récepteur intracellulaire → fixation sur l'ADN → transcription de gènes"), POST("Hormones stéroïdes : récepteur intracellulaire → ADN → transcription", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quelle enzyme transforme les androgènes en œstrogènes ?", ["L'aromatase", "La LCAT", "La 7α-hydroxylase", "La phospholipase C"], "Testostérone → œstradiol."),
      qcm("a2", "Où se trouve le récepteur des hormones stéroïdes ?", ["À l'intérieur de la cellule (cytoplasme ou noyau)", "Sur la membrane plasmique uniquement", "Dans le plasma", "Dans la bile"], "Elles traversent la membrane, puis agissent sur l'ADN.")
    ],
    revision: [
      ordre("r1", "Remets la cascade dans l'ordre.", ["Cholestérol", "Prégnénolone", "Progestérone", "Testostérone", "Œstradiol"], "Coupure de la chaîne (mitochondrie), puis aromatase pour finir."),
      vf("r2", "Les hormones stéroïdes ne peuvent pas traverser la membrane plasmique.", false, "Faux : hydrophobes, elles la traversent ; leur récepteur est intracellulaire.")
    ]
  },
  {
    id: "bc-lipides-40", fiche: F5, ficheTitre: F5T, titre: "Les vitamines liposolubles",
    classe: [
      E("Passons aux <b>vitamines</b>. Une vitamine, c'est une molécule organique <b>sans valeur énergétique</b>, 0 kcal, indispensable, que l'organisme ne sait pas fabriquer, ou en quantité insuffisante. Il faut donc l'apporter par l'alimentation, en très petites quantités.", [T("Les vitamines liposolubles"), LG("vitamine : 0 kcal · indispensable · pas (assez) fabriquée → apport alimentaire, en très petites quantités", "noir")]),
      E("Les <b>liposolubles</b> sont quatre : <b>A, D, E, K</b>. Insolubles dans l'eau, elles sont digérées et absorbées <b>comme les lipides</b> : avec les sels biliaires et la lipase pancréatique.", [LG("A, D, E, K : absorbées COMME LES LIPIDES (sels biliaires + lipase pancréatique)", "bleu", { taille: "grand" })]),
      E("Elles sont transportées par les <b>chylomicrons</b>, dans la lymphe, puis par les lipoprotéines.", [LG("transport : chylomicrons (lymphe) → lipoprotéines", "bleu", { puce: "•" })]),
      E("Et contrairement à beaucoup d'autres, elles peuvent être <b>stockées</b>. D'où un risque de <b>surdosage</b>.", [POST("Vitamines A, D, E, K : 0 kcal, absorbées comme les lipides (chylomicrons), stockables → risque de surdosage", "cle")], "reflechit")
    ],
    questions: [
      qcm("a1", "Pourquoi les vitamines liposolubles peuvent-elles être en surdosage ?", ["Elles peuvent être stockées", "Elles apportent beaucoup de kcal", "Elles sont fabriquées en excès par le foie", "Elles sont éliminées très vite"], "Stockables → risque de surdosage."),
      qcm("a2", "Comment sont transportées les vitamines liposolubles après absorption ?", ["Par les chylomicrons, dans la lymphe", "Libres dans la veine porte", "Par l'hémoglobine", "Dans la bile"], "Comme les lipides.")
    ],
    revision: [
      vf("r1", "Les vitamines apportent de l'énergie à l'organisme.", false, "Faux : 0 kcal.")
    ]
  },
  {
    id: "bc-lipides-41", fiche: F5, ficheTitre: F5T, titre: "La vitamine A : formes et sources",
    classe: [
      E("La <b>vitamine A</b>. Sa molécule de base : le <b>rétinol</b>, un cycle carboné plus une chaîne terminée par une fonction alcool primaire. C'est donc un <b>alcool</b>.", [T("La vitamine A"), EQ("Rétinol = cycle + chaîne + –CH₂OH (alcool)")]),
      E("« Vitamine A » regroupe le rétinol, ses formes actives, le rétinal et les acides rétinoïques, et les <b>caroténoïdes provitaminiques</b> : β-carotène, α-carotène, β-cryptoxanthine.", [LG("vitamine A = rétinol + formes actives (rétinal, acide rétinoïque) + caroténoïdes provitaminiques", "noir", { taille: "petit" })]),
      E("Deux sources. <b>Animale</b> : huile de foie de poisson, foie, beurre, œuf. Sous forme estérifiée, surtout avec l'acide palmitique : le palmityl-rétinol. <b>Végétale</b> : carotte, épinard, melon. Sous forme de provitamine A, surtout le <b>β-carotène</b>.", [GRI(["Source", "Aliments", "Forme"], [["Animale", "huile de foie de poisson, foie, beurre, œuf", "esters de rétinol (palmityl-rétinol)"], ["Végétale", "carotte, épinard, melon", "provitamine A (surtout β-carotène)"]], true)]),
      E("Toutes deux convergent vers le rétinol. Ensuite, deux formes actives. Le <b>rétinal</b>, un aldéhyde, réversible : il sert à la <b>vision</b>. L'<b>acide rétinoïque</b>, irréversible : il agit sur la <b>croissance</b> et la différenciation.", [EFF(), T("Les formes de la vitamine A"), EQ("β-carotène / esters → RÉTINOL (alcool)"), EQ("rétinol ⇌ RÉTINAL (aldéhyde) → vision (+ opsine = rhodopsine)"), EQ("rétinal → ACIDE RÉTINOÏQUE (irréversible) → croissance, différenciation")]),
      E("Application : le β-carotène n'est transformé qu'en fonction des besoins, donc peu de risque d'excès. Le rétinol préformé en excès, foie ou compléments, est <b>toxique</b>, notamment pendant la grossesse.", [POST("β-carotène : converti selon les besoins · rétinol en excès (foie, compléments) : toxique, surtout grossesse", "piege")], "pointe")
    ],
    questions: [
      qcm("a1", "Quelle forme de la vitamine A sert à la vision ?", ["Le rétinal", "L'acide rétinoïque", "Le palmityl-rétinol", "Le β-carotène"], "Rétinal + opsine = rhodopsine."),
      qcm("a2", "Sous quelle forme trouve-t-on la vitamine A dans les végétaux ?", ["Provitamine A, surtout le β-carotène", "Rétinol libre", "Acide rétinoïque", "Rétinal"], "Carotte, épinard, melon…")
    ],
    revision: [
      vf("r1", "La transformation du rétinal en acide rétinoïque est réversible.", false, "Faux : rétinol ⇌ rétinal est réversible, mais rétinal → acide rétinoïque est irréversible."),
      qcm("r2", "Pourquoi le β-carotène présente-t-il peu de risque d'excès ?", ["Il n'est converti en rétinol qu'en fonction des besoins", "Il n'est pas absorbé", "Il est éliminé dans les urines", "Il n'a aucune activité"], "Le rétinol préformé, lui, peut être toxique en excès.")
    ]
  },
  {
    id: "bc-lipides-42", fiche: F5, ficheTitre: F5T, titre: "La vitamine A dans le corps",
    classe: [
      E("Le parcours de la vitamine A. <b>Digestion et absorption</b> dans l'intestin grêle, avec les sels biliaires et la lipase pancréatique. On absorbe 70 à 90 % du rétinol, mais de 5 à 65 % seulement du β-carotène, selon l'aliment, la cuisson et les graisses du repas.", [T("Le devenir de la vitamine A"), LG("absorption : rétinol 70 à 90 % · β-carotène ≈ 5 à 65 % (aliment, cuisson, graisses)", "bleu", { puce: "•" })]),
      E("Le β-carotène est en grande partie converti en rétinol dans l'entérocyte, le reste dans le foie. Dans l'entérocyte, le rétinol est réestérifié, puis : chylomicrons, lymphe, sang, foie.", [EQ("entérocyte : réestérifié → chylomicrons → lymphe → sang → foie")]),
      E("Le <b>foie</b> la stocke, en esters de rétinol : plusieurs <b>mois</b> d'autonomie, exceptionnel pour une vitamine. Pour la distribuer aux tissus : une protéine de transport spécifique, la <b>RBP</b>, retinol binding protein, faite par le foie et le tissu adipeux. Élimination : selles, via la bile, et urines.", [LG("STOCK dans le foie : plusieurs mois (exceptionnel)", "vert", { puce: "•" }), LG("transport vers les tissus : RBP (retinol binding protein)", "vert", { puce: "•" })]),
      E("Ses rôles. La <b>vision</b>, surtout crépusculaire : le rétinal s'associe à l'<b>opsine</b> pour former la <b>rhodopsine</b>, la chromoprotéine photosensible des bâtonnets de la rétine.", [EFF(), T("Rôles et risques"), EQ("rétinal + opsine = RHODOPSINE (bâtonnets, vision de nuit)")]),
      E("L'<b>acide rétinoïque</b> : croissance et différenciation cellulaire, cicatrisation, croissance du fœtus. Et le <b>β-carotène</b> est antioxydant : il neutralise des radicaux libres.", [LG("acide rétinoïque : croissance, différenciation, cicatrisation, fœtus", "vert", { puce: "•" }), LG("β-carotène : antioxydant", "vert", { puce: "•" })]),
      E("Carence : d'abord une baisse de la vision de nuit, l'<b>héméralopie</b>. Surdosage, avec le rétinol préformé : troubles digestifs, neurologiques, atteinte du foie ; et chez la femme enceinte, risque de <b>malformations</b> du fœtus. On dit que la vitamine A est <b>tératogène</b>.", [POST("Vit. A : stock foie, RBP · rhodopsine · carence : héméralopie · excès : tératogène", "piege")], "reflechit")
    ],
    questions: [
      qcm("a1", "Quel est le premier signe d'une carence en vitamine A ?", ["L'héméralopie (baisse de la vision de nuit)", "Le rachitisme", "Des saignements", "Une hémolyse"], "La rhodopsine manque."),
      qcm("a2", "Quelle protéine transporte le rétinol du foie vers les tissus ?", ["La RBP", "La DBP", "L'albumine", "L'α-TTP"], "Retinol binding protein.")
    ],
    revision: [
      vf("r1", "Un excès de rétinol chez la femme enceinte expose à des malformations du fœtus.", true, "Vrai : la vitamine A est tératogène."),
      qcm("r2", "Qu'est-ce que la rhodopsine ?", ["Rétinal + opsine, dans les bâtonnets de la rétine", "Une forme de stockage dans le foie", "L'acide rétinoïque lié à l'ADN", "Une provitamine A"], "Chromoprotéine photosensible.")
    ]
  },
  {
    id: "bc-lipides-43", fiche: F5, ficheTitre: F5T, titre: "La vitamine D : origine et activation",
    classe: [
      E("La <b>vitamine D</b>, ou calciférol. Un sécostéroïde, avec deux origines.", [T("La vitamine D"), LG("sécostéroïde · 2 origines", "noir")]),
      E("<b>Endogène</b>, la source principale : dans la peau, les <b>UVB</b> ouvrent le cycle B du 7-déhydrocholestérol, c'est une réaction photochimique. On obtient la prévitamine D3, puis la vitamine D3 avec la chaleur. Ça dépend donc de l'exposition au soleil.", [LG("ENDOGÈNE (principale) : peau + UVB → 7-DHC → prévitamine D3 → vitamine D3", "rouge", { puce: "•" })]),
      E("<b>Exogène</b> : la <b>D3</b>, cholécalciférol, dans les aliments animaux, poissons gras, foie, jaune d'œuf. Et la <b>D2</b>, ergocalciférol, qui vient de l'ergostérol des champignons et levures, en petites quantités.", [LG("EXOGÈNE : D3 = cholécalciférol (poissons gras, foie, œuf) · D2 = ergocalciférol (champignons)", "bleu", { puce: "•" })]),
      E("Mais attention : la vitamine D fabriquée ou avalée est <b>inactive</b>. Il faut deux activations.", [EFF(), T("Deux étapes d'activation"), LG("vitamine D fabriquée ou avalée = INACTIVE", "rouge", { taille: "grand" })], "pointe"),
      E("Étape 1, dans le <b>foie</b> : hydroxylation sur le carbone 25. On obtient le <b>25(OH)D</b>, le calcidiol. C'est la forme de réserve, qui circule, transportée par la <b>DBP</b>. C'est elle qu'on <b>dose</b> pour savoir si quelqu'un manque de vitamine D.", [EQ("FOIE : 25-hydroxylation → 25(OH)D = calcidiol (réserve, circulante, DOSÉE)")]),
      E("Étape 2, dans le <b>rein</b> : hydroxylation en 1α. On obtient le <b>1,25(OH)₂D</b>, le <b>calcitriol</b> : la forme <b>active</b>, une véritable hormone. Cette étape est stimulée par la <b>PTH</b>, quand le calcium baisse.", [EQ("REIN : 1α-hydroxylation → 1,25(OH)₂D = CALCITRIOL (forme active) · ⊕ PTH"), POST("Foie → 25(OH)D (dosé) · rein → calcitriol (actif, ⊕ PTH)", "cle")]),
      E("Ces hydroxylations sont faites par des enzymes à <b>cytochrome P450</b>, et non par la vitamine C. Et en cas d'insuffisance rénale, l'activation est impossible : on donne alors directement la forme active.", [POST("Hydroxylations : cytochrome P450 (pas la vitamine C) · insuffisance rénale → on donne la forme active", "astuce")], "content")
    ],
    questions: [
      qcm("a1", "Quelle forme de vitamine D dose-t-on pour évaluer le statut d'une personne ?", ["Le 25(OH)D (calcidiol)", "Le calcitriol", "La vitamine D3", "Le 7-déhydrocholestérol"], "Forme de réserve, circulante."),
      qcm("a2", "Où se fait l'activation finale en calcitriol ?", ["Dans le rein", "Dans le foie", "Dans la peau", "Dans l'intestin"], "1α-hydroxylation rénale, stimulée par la PTH.")
    ],
    revision: [
      ordre("r1", "Remets dans l'ordre le trajet de la vitamine D.", ["Peau : 7-déhydrocholestérol + UVB", "Vitamine D3", "Foie : 25(OH)D", "Rein : calcitriol"], "Deux sources, deux activations."),
      qcm("r2", "D'où vient la vitamine D2 ?", ["De l'ergostérol des champignons et levures", "Des poissons gras", "De la peau", "Du cholestérol"], "D2 = ergocalciférol.")
    ]
  },
  {
    id: "bc-lipides-44", fiche: F5, ficheTitre: F5T, titre: "La vitamine D : rôles et risques",
    classe: [
      E("Le rôle global du calcitriol : <b>augmenter la calcémie et la phosphatémie</b>, pour permettre la minéralisation de l'os. Il agit sur trois cibles.", [T("Rôles du calcitriol"), RANG([
        { titre: "Intestin", x: "↑ absorption du calcium et du phosphore par les entérocytes", c: "bleu" },
        { titre: "Os", x: "ostéoclastes (résorption) et surtout ostéoblastes (formation) → remaniement, minéralisation", c: "vert" },
        { titre: "Rein", x: "↑ réabsorption du calcium et du phosphore (effet moins marqué)", c: "rouge" }
      ])]),
      E("L'<b>intestin</b> : il augmente l'absorption du calcium et du phosphore.", [MONTRE(1)]),
      E("L'<b>os</b> : il agit sur les ostéoclastes, qui résorbent, et surtout sur les ostéoblastes, qui forment l'os. Remaniement osseux et minéralisation du cartilage de croissance.", [MONTRE(2)]),
      E("Le <b>rein</b> : il augmente la réabsorption du calcium et du phosphore, avec un effet moins marqué. Il travaille en <b>synergie</b> avec la PTH, elle aussi hypercalcémiante.", [MONTRE(3), POST("Calcitriol : Ca et P ↑ (intestin, os, rein) · synergie avec la PTH", "cle")]),
      E("D'autres rôles : transport du calcium vers le placenta pour le squelette du fœtus, teneur du lait en calcium. Et un lien avec la vitamine C, cofacteur de la synthèse du collagène, la trame de l'os.", [LG("aussi : calcium du placenta (squelette fœtal), du lait · vit. C : collagène (trame de l'os)", "noir", { taille: "petit" })]),
      E("Carence : <b>rachitisme</b> chez l'enfant, <b>ostéomalacie</b> chez l'adulte. Ceux qui sont exposés : peu de soleil, en hiver, peau couverte, personne âgée, et peu de poissons gras. Surdosage : <b>hypercalcémie</b>, avec troubles nerveux et digestifs et des dépôts de calcium, surtout dans le rein.", [EFF(), T("Carence et surdosage"), LG("CARENCE : rachitisme (enfant), ostéomalacie (adulte)", "rouge", { puce: "•" }), LG("SURDOSAGE : hypercalcémie → troubles nerveux, digestifs, dépôts calciques (rein)", "rouge", { puce: "•" })], "reflechit")
    ],
    questions: [
      qcm("a1", "Comment appelle-t-on la carence en vitamine D chez l'enfant ?", ["Le rachitisme", "L'ostéomalacie", "L'héméralopie", "Le scorbut"], "Chez l'adulte : ostéomalacie."),
      qcm("a2", "Quel est le risque d'un surdosage en vitamine D ?", ["L'hypercalcémie", "L'hypocalcémie", "Des saignements", "Une baisse de la vision de nuit"], "Avec des dépôts calciques, surtout dans le rein.")
    ],
    revision: [
      qcm("r1", "Quelle hormone agit en synergie avec le calcitriol ?", ["La parathormone (PTH)", "L'insuline", "Le glucagon", "L'aldostérone"], "Elle aussi est hypercalcémiante et stimule la production de calcitriol.")
    ]
  },
  {
    id: "bc-lipides-45", fiche: F5, ficheTitre: F5T, titre: "La vitamine E",
    classe: [
      E("La <b>vitamine E</b>. C'est le nom commun de 4 tocophérols et 4 tocotriénols, α, β, γ, δ. La plus active : l'<b>α-tocophérol</b>.", [T("La vitamine E"), LG("4 tocophérols + 4 tocotriénols · la plus active : α-TOCOPHÉROL", "noir")]),
      E("Structure : un <b>phénol</b>, un cycle aromatique portant un OH, plus une longue chaîne latérale. Donc très hydrophobe. Sources : germe de céréales, huiles de tournesol, d'arachide, sous forme libre. Les esters, comme l'acétate de tocophérol, sont dans les compléments et aliments enrichis.", [LG("phénol + longue chaîne → très hydrophobe", "noir", { puce: "•" }), LG("sources : germe de céréales, huiles (tournesol, arachide…)", "vert", { puce: "•" })]),
      E("Parcours : absorbée surtout dans le jéjunum, puis chylomicrons, lymphe, canal thoracique, sang, foie. Le foie sélectionne l'α-tocophérol grâce à la protéine <b>α-TTP</b>, et le redistribue par les LDL et HDL. Stockage : tissu adipeux, foie, surrénales. Élimination : surtout les fèces, via la bile.", [LG("foie : sélectionne l'α-tocophérol (α-TTP) → LDL, HDL · stock : tissu adipeux, foie, surrénales", "bleu", { puce: "•" })]),
      E("Son rôle : <b>antioxydant</b>. Elle neutralise les radicaux libres, qui attaquent les lipides membranaires, surtout les AG insaturés à cause de leurs doubles liaisons, mais aussi les protéines et les acides nucléiques.", [EFF(), T("Un antioxydant"), LG("neutralise les RADICAUX LIBRES (attaquent les AG insaturés → peroxydation)", "rouge")]),
      E("Elle stabilise les membranes : plaquettes, hématies, ce qui limite l'hémolyse. Et elle limite l'oxydation des <b>LDL</b> : les LDL oxydées sont les plus athérogènes.", [LG("stabilise les membranes (plaquettes, hématies → moins d'hémolyse)", "vert", { puce: "✓" }), LG("limite l'oxydation des LDL (les plus athérogènes)", "vert", { puce: "✓" })]),
      E("Elle travaille en <b>synergie avec la vitamine C</b>, qui la régénère après qu'elle a neutralisé un radical.", [POST("Vit. E antioxydante (membranes, LDL), régénérée par la vit. C", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le rôle principal de la vitamine E ?", ["Antioxydant", "Antihémorragique", "Vision de nuit", "Absorption du calcium"], "Elle neutralise les radicaux libres."),
      qcm("a2", "Quelle vitamine régénère la vitamine E ?", ["La vitamine C", "La vitamine K", "La vitamine A", "La vitamine D"], "Synergie E + C.")
    ],
    revision: [
      qcm("r1", "Quelle est la forme la plus active de la vitamine E ?", ["L'α-tocophérol", "Le δ-tocotriénol", "L'acétate de tocophérol", "Le rétinol"], "Sélectionnée par le foie grâce à l'α-TTP."),
      vf("r2", "La vitamine E limite l'oxydation des LDL.", true, "Vrai : les LDL oxydées sont les plus athérogènes.")
    ]
  },
  {
    id: "bc-lipides-46", fiche: F5, ficheTitre: F5T, titre: "La vitamine K",
    classe: [
      E("Dernière vitamine : la <b>vitamine K</b>. Plusieurs molécules, deux formes principales.", [T("La vitamine K"), GRI(["Forme", "Nom", "Sources"], [["K1", "phylloquinone", "végétaux verts (chou, épinard, persil…)"], ["K2", "ménaquinones", "foie, viande, jaune d'œuf, aliments fermentés (fromages)"]], true)]),
      E("Il y a aussi une source endogène : la <b>flore intestinale</b> en fabrique, en forme K2, mais sa contribution aux besoins est limitée. Parcours : chylomicrons, foie, avec un stockage limité, puis les tissus par les LDL.", [LG("flore intestinale : fabrique de la K2, contribution limitée", "noir", { puce: "•" })]),
      E("Sa biochimie : c'est le cofacteur d'une <b>carboxylase</b>. Elle ajoute un groupe carboxyle sur l'acide glutamique de certaines protéines : <b>Glu devient Gla</b>. Ces protéines fixent alors mieux le calcium et deviennent actives.", [EQ("carboxylase (cofacteur : vit. K) : Glu → Gla → fixe le Ca²⁺ → protéine ACTIVE")]),
      E("Son rôle principal : <b>antihémorragique</b>. Elle est indispensable à des facteurs de coagulation : la prothrombine, facteur II ; la proconvertine, VII ; et les facteurs IX et X. Elle active aussi l'ostéocalcine, dans l'os.", [LG("ANTIHÉMORRAGIQUE : facteurs II (prothrombine), VII, IX, X · aussi ostéocalcine (os)", "rouge", { taille: "grand" })]),
      E("Carence : risque de <b>saignements</b>. C'est pour ça qu'on donne de la vitamine K au nouveau-né.", [POST("Vit. K : Glu → Gla, coagulation (II, VII, IX, X) · vitamine K donnée au nouveau-né", "cle")], "pointe"),
      E("Bravo, tu as fini la structure des lipides ! Le résumé de la fiche 5.", [EFF(), T("L'essentiel de la fiche 5"), POST("Stéroïdes : noyau stérane · cholestérol → hormones, sels biliaires ; vit. D3 ← 7-DHC + UVB · hormones : récepteur intracellulaire → ADN · vit. A, D, E, K : 0 kcal, stockables · A : rhodopsine, tératogène · D : calcidiol (foie), calcitriol (rein, ⊕ PTH) · E : antioxydant · K : coagulation", "cle")], "content")
    ],
    questions: [
      qcm("a1", "Quel est le rôle principal de la vitamine K ?", ["Antihémorragique (coagulation)", "Antioxydant", "Vision", "Minéralisation osseuse via le calcitriol"], "Facteurs II, VII, IX et X."),
      qcm("a2", "Quelle transformation la vitamine K permet-elle sur certaines protéines ?", ["Glu → Gla (carboxylation)", "Hydroxylation en 25", "Estérification du cholestérol", "Coupure de la chaîne latérale"], "Les protéines fixent alors mieux le Ca²⁺.")
    ],
    revision: [
      qcm("r1", "Pourquoi donne-t-on de la vitamine K au nouveau-né ?", ["Pour prévenir les saignements", "Pour sa vision", "Pour sa croissance osseuse", "Comme antioxydant"], "Une carence expose aux hémorragies."),
      paires("r2", "Relie chaque vitamine K à sa source.", [["K1 (phylloquinone)", "Végétaux verts"], ["K2 (ménaquinones)", "Aliments animaux, fermentés, flore"]], "Deux formes principales.")
    ]
  }

  ]
};
