// Mode cours (Céline + tableau) du cours « Enjeux de santé publique ».
// Une entrée par leçon : la liste des étapes. Fidèle aux fiches 0 à 12.
import { E, T, LG, EFF, SOUL, POST, CERC, RANG, MONTRE } from './briques.mjs';

export default {

/* ---------- FICHE 0 ---------- */
'sp-enjeux-01': [
  E('Bonjour Inès ! Moi, c\'est Céline. On démarre le cours « Enjeux de santé publique » avec une idée forte : ce qu\'on mange n\'est pas qu\'un choix personnel.', [T('Enjeux de santé publique')]),
  E('Nos comportements alimentaires sont façonnés par trois choses : l\'<b>environnement</b>, le <b>territoire</b> et la <b>position sociale</b>.', [LG('Ce qu\'on mange dépend de :', 'noir', { taille: 'petit' }), LG('l\'environnement', 'bleu', { puce: '•' }), LG('le territoire', 'bleu', { puce: '•' }), LG('la position sociale', 'bleu', { puce: '•' })]),
  E('Trois chiffres pour le prouver. Premier chiffre : <b>48 %</b> des décès avant 75 ans chez les hommes sont évitables par la <b>prévention primaire</b>. C\'est l\'INSEE qui le dit.', [EFF(), T('Le constat en 3 chiffres'), LG('48 % des décès avant 75 ans (hommes) évitables par la prévention primaire', 'rouge', { puce: '1' }), LG('source : INSEE', 'noir', { taille: 'petit', decale: true })]),
  E('Deuxième chiffre : dans le <b>Nord</b> et à <b>La Réunion</b>, les hommes vivent en moyenne <b>5 ans de moins</b> qu\'en Île-de-France.', [LG('Nord, La Réunion : − 5 ans d\'espérance de vie (hommes) vs Île-de-France', 'rouge', { puce: '2' })]),
  E('Troisième chiffre : l\'<b>obésité</b> touche <b>22,1 %</b> de la population dans les Hauts-de-France, contre <b>14,2 %</b> en Île-de-France, d\'après l\'ORS.', [LG('Obésité : 22,1 % Hauts-de-France vs 14,2 % Île-de-France', 'rouge', { puce: '3' }), LG('source : ORS', 'noir', { taille: 'petit', decale: true })]),
  E('Conclusion : le diététicien doit passer à une <b>approche populationnelle</b>. On ne regarde plus seulement le patient en face de soi, mais toute une population.', [LG('→ approche populationnelle', 'vert', { taille: 'grand' }), SOUL()]),
  E('Retiens-le comme un code : 48 – 5 – 22/14. Et voilà la ligne à savoir par cœur.', [POST('48 évitables · 5 ans perdus · 22 contre 14', 'astuce'), POST('48 % des décès évitables (hommes < 75 ans) · Nord / Réunion : − 5 ans · obésité 22,1 % HdF vs 14,2 % IdF', 'cle')], 'content')
],
'sp-enjeux-02': [
  E('Tout le cours suit un même cas concret. L\'<b>ARS des Hauts-de-France</b> pilote un <b>observatoire territorial de la nutrition</b>.', [T('Le fil rouge du cours'), LG('ARS Hauts-de-France → observatoire territorial de la nutrition', 'bleu')]),
  E('Il compare trois territoires : la <b>métropole</b>, le <b>bassin minier</b> et les <b>zones rurales</b>. Et il trouve des écarts d\'obésité, de diabète et d\'accès aux soins nutritionnels.', [LG('compare : métropole · bassin minier · zones rurales', 'noir', { puce: '→' }), LG('écarts : obésité, diabète, accès aux soins nutritionnels', 'rouge', { puce: '→' })]),
  E('Trois personnages vont revenir. <b>Isabelle Moreau</b>, sociologue, qui étudie les inégalités. <b>Mehdi</b>, qui cartographie les environnements alimentaires. Et le <b>Dr Dumont</b>, qui défend l\'universalisme proportionné.', [EFF(), T('Les personnages'), LG('Isabelle Moreau : sociologue, inégalités', 'bleu', { puce: '👩🏽‍🏫' }), LG('Mehdi : cartographie des environnements alimentaires', 'bleu', { puce: '🧑🏻‍💻' }), LG('Dr Dumont : universalisme proportionné', 'bleu', { puce: '👨🏼‍⚕️' })]),
  E('Le cours répond à 4 questions, dans un ordre logique. Regarde le tableau.', [EFF(), T('Les 4 étapes du cours'), RANG([
    { titre: '1 · Je comprends', sous: 'Qu\'est-ce que la santé publique ? (fiches 1 à 4)', x: 'Une approche collective, pas seulement individuelle', c: 'bleu' },
    { titre: '2 · Je priorise', sous: 'Quels enjeux nutritionnels en France ? (fiches 5 à 7)', x: 'Des priorités nationales (PNNS) à décliner sur le terrain', c: 'vert' },
    { titre: '3 · J\'analyse', sous: 'Pourquoi la santé n\'est pas la même partout ? (fiches 8-9)', x: 'Le milieu social et le lieu pèsent autant que les choix individuels', c: 'rouge' },
    { titre: '4 · J\'agis', sous: 'Comment agir sans stigmatiser ? (fiche 10)', x: 'Universalisme proportionné, participation citoyenne, évaluation', c: 'noir' }
  ])]),
  E('D\'abord on <b>comprend</b> les concepts…', [MONTRE(1)]),
  E('… puis on <b>priorise</b> les grands enjeux…', [MONTRE(2)]),
  E('… on <b>analyse</b> les inégalités…', [MONTRE(3)]),
  E('… et enfin on <b>agit</b>. Comprendre, prioriser, analyser, agir : c\'est le fil logique. On vérifie ?', [MONTRE(4)], 'content')
],

/* ---------- FICHE 1 ---------- */
'sp-enjeux-03': [
  E('Question de base : c\'est quoi, être en bonne santé ? Pendant longtemps, la réponse était simple : ne pas être malade.', [T('Qu\'est-ce que la santé ?')]),
  E('C\'est l\'<b>approche biomédicale</b> : la santé, c\'est l\'absence de maladie, et on agit sur les <b>symptômes</b>, avec du soin curatif.', [RANG([
    { titre: 'Approche biomédicale', sous: 'Santé = absence de maladie', x: 'On agit sur les symptômes (soin curatif)', c: 'rouge' },
    { titre: 'Approche globale', sous: 'Santé = bien-être physique, mental et social', x: 'On agit sur les déterminants (prévention)', c: 'vert' }
  ]), MONTRE(1)]),
  E('Aujourd\'hui, on a une <b>approche globale</b> : la santé, c\'est un bien-être complet, et on agit sur ses <b>déterminants</b>, par la prévention.', [MONTRE(2)]),
  E('C\'est l\'OMS qui l\'a définie en <b>1946</b> : « un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie ou d\'infirmité ».', [EFF(), T('OMS, 1946'), LG('« un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie ou d\'infirmité »', 'bleu'), POST('Physique (le corps) · mental (la tête) · social (les autres)', 'astuce')]),
  E('Si la santé est aussi sociale, alors les <b>déterminants sociaux</b> comptent : logement, éducation, revenus, cohésion sociale. Ils conditionnent nos comportements et l\'accès à un bon état nutritionnel.', [EFF(), T('Les déterminants sociaux'), LG('logement · éducation · revenus · cohésion sociale', 'bleu', { taille: 'grand' })]),
  E('Conséquence : les consultations individuelles ne peuvent pas, <b>seules</b>, résoudre l\'obésité liée à la précarité ou aux déserts alimentaires. On va voir pourquoi dans tout le cours.', [LG('Les consultations individuelles seules ne suffisent pas (précarité, déserts alimentaires)', 'rouge'), SOUL()], 'reflechit')
],
'sp-enjeux-04': [
  E('Si la santé est une affaire collective, il faut une discipline pour s\'en occuper : la <b>santé publique</b>. Sa définition de référence date de <b>1920</b>, par <b>Winslow</b>.', [T('La santé publique (Winslow, 1920)')]),
  E('« La science et l\'art de prévenir la maladie, de prolonger la vie et d\'améliorer la santé par l\'action collective organisée de la société. »', [LG('« La science et l\'art de prévenir la maladie, de prolonger la vie et d\'améliorer la santé par l\'action collective organisée de la société »', 'bleu')]),
  E('Décortiquons. Il y a <b>trois buts</b> : prévenir la maladie, prolonger la vie, améliorer la santé.', [LG('prévenir la maladie', 'vert', { puce: '1' }), LG('prolonger la vie', 'vert', { puce: '2' }), LG('améliorer la santé', 'vert', { puce: '3' })]),
  E('Et <b>un moyen</b>, c\'est le mot-clé : l\'<b>action collective organisée</b> de la société. Pas un soignant tout seul, mais toute la société organisée.', [LG('… par l\'action collective organisée', 'rouge', { taille: 'grand' }), SOUL()]),
  E('Astuce : Winslow, c\'est « 3 verbes + 1 moyen ». Et pour les dates : Winslow 1920 vient avant l\'OMS 1946.', [POST('3 verbes (prévenir, prolonger, améliorer) + 1 moyen (ensemble) · Winslow 1920 avant OMS 1946', 'astuce')], 'content')
],
'sp-enjeux-05': [
  E('La santé publique agit dans <b>6 champs d\'intervention</b>. Je te les écris un par un.', [T('Les 6 champs d\'intervention')]),
  E('1, la <b>surveillance épidémiologique</b> : collecter, analyser, interpréter les données, pour fixer les priorités et juger l\'efficacité. 2, la <b>prévention</b>, avec ses 3 niveaux.', [LG('Surveillance épidémiologique → collecter, analyser, interpréter les données', 'bleu', { puce: '1' }), LG('Prévention → 3 niveaux : primaire, secondaire, tertiaire', 'bleu', { puce: '2' })]),
  E('3, la <b>promotion de la santé</b> : donner les moyens d\'agir sur ses déterminants. 4, l\'<b>organisation des soins</b> : accessibilité et qualité des services.', [LG('Promotion de la santé → donner les moyens d\'agir sur ses déterminants', 'bleu', { puce: '3' }), LG('Organisation des soins → accessibilité et qualité des services', 'bleu', { puce: '4' })]),
  E('5, l\'<b>éducation pour la santé</b> : les compétences individuelles et collectives. Et 6, la <b>planification et l\'évaluation</b> : efficacité et adaptation aux besoins.', [LG('Éducation pour la santé → compétences individuelles et collectives', 'bleu', { puce: '5' }), LG('Planification et évaluation → efficacité, adaptation aux besoins', 'bleu', { puce: '6' })]),
  E('Pour retenir les 6 initiales, S-P-P-O-E-P : « <b>S</b>ophie <b>P</b>répare <b>P</b>our <b>O</b>scar un <b>E</b>xcellent <b>P</b>lat ».', [POST('Sophie Prépare Pour Oscar un Excellent Plat = Surveillance · Prévention · Promotion · Organisation · Éducation · Planification', 'astuce')], 'content')
],
'sp-enjeux-06': [
  E('Et toi, future diététicienne, quel est ton rôle en santé publique ? Bien plus que la consultation.', [T('Le diététicien en santé publique')]),
  E('Tu fais de l\'<b>éducation nutritionnelle</b>, de la <b>prévention</b> et de la <b>promotion de la santé</b>.', [LG('éducation nutritionnelle · prévention · promotion de la santé', 'bleu', { puce: '✓' })]),
  E('Tu <b>contribues</b> aussi aux politiques, par exemple le <b>PNNS</b>, aux <b>dépistages</b>, et à l\'<b>évaluation des actions collectives</b>.', [LG('contribue : politiques (PNNS) · dépistages · évaluation des actions collectives', 'bleu', { puce: '✓' })]),
  E('Tu gardes une <b>vision systémique</b>, qui relie trois niveaux : l\'individu, la communauté et l\'environnement.', [RANG([{ titre: 'Individu', c: 'bleu' }, { titre: 'Communauté', c: 'vert' }, { titre: 'Environnement', c: 'rouge' }]), MONTRE(1), MONTRE(2), MONTRE(3)]),
  E('Donc il te faut de <b>nouvelles compétences</b> : l\'animation de groupes, la communication communautaire et l\'évaluation d\'impact.', [EFF(), T('Nouvelles compétences'), LG('animation de groupes', 'vert', { puce: '→' }), LG('communication communautaire', 'vert', { puce: '→' }), LG('évaluation d\'impact', 'vert', { puce: '→' })]),
  E('Et voilà la ligne à savoir par cœur de la fiche 1. Relis-la avant le quiz !', [POST('OMS 1946 : bien-être physique, mental, social · Winslow 1920 : action collective organisée · 6 champs', 'cle')], 'content')
],

/* ---------- FICHE 2 ---------- */
'sp-enjeux-07': [
  E('Attention, notion piège : la <b>promotion de la santé</b>. Ce n\'est pas la même chose que la prévention.', [T('La promotion de la santé')]),
  E('Promouvoir la santé, c\'est donner aux personnes et aux communautés <b>les moyens d\'agir sur leur santé</b>, et d\'avoir un plus grand contrôle sur elle, en agissant sur ses <b>déterminants</b>.', [LG('Donner les moyens d\'agir sur sa santé et ses déterminants', 'bleu', { taille: 'grand' }), SOUL()]),
  E('Elle va <b>au-delà</b> de la prévention. Et la santé « se crée et se vit » dans les <b>milieux de vie quotidiens</b> : le quartier, l\'école, le travail.', [LG('la santé « se crée et se vit » dans les milieux de vie quotidiens', 'vert', { puce: '→' })]),
  E('Mets-les côte à côte. Prévention : <b>éviter</b> une maladie. Promotion : donner les <b>moyens d\'agir</b>.', [EFF(), T('Ne pas confondre'), RANG([
    { titre: 'Prévention', x: 'Éviter une maladie', c: 'rouge' },
    { titre: 'Promotion', x: 'Donner les moyens d\'agir sur sa santé et ses déterminants', c: 'vert' }
  ]), MONTRE(1), MONTRE(2)]),
  E('C\'est le piège d\'examen de la fiche. Mon astuce : PROmotion = je te donne le POuvoir.', [POST('Prévention = éviter une maladie ≠ promotion = donner les moyens d\'agir', 'piege'), POST('PROmotion = « je te donne le POUVOIR »', 'astuce')], 'reflechit'),
  E('En pratique, ça veut dire <b>dépasser la simple information nutritionnelle</b> pour agir sur l\'environnement alimentaire et les déterminants sociaux.', [LG('→ dépasser l\'information : agir sur l\'environnement alimentaire', 'bleu')], 'content')
],
'sp-enjeux-08': [
  E('En <b>1986</b>, la <b>Charte d\'Ottawa</b> donne la feuille de route de la promotion de la santé, en <b>5 axes</b>.', [T('Charte d\'Ottawa (1986) : 5 axes')]),
  E('Axe 1 : des <b>politiques publiques saines</b>, c\'est-à-dire intégrer la santé dans toutes les politiques.', [LG('Politiques publiques saines → la santé dans toutes les politiques', 'bleu', { puce: '1' })]),
  E('Axe 2 : des <b>environnements favorables</b>, avec des conditions de vie et de travail qui soutiennent la santé.', [LG('Environnements favorables → conditions de vie et de travail', 'bleu', { puce: '2' })]),
  E('Axe 3 : le <b>renforcement de l\'action communautaire</b> : participation citoyenne, empowerment.', [LG('Action communautaire → participation citoyenne, empowerment', 'bleu', { puce: '3' })]),
  E('Axe 4 : le <b>développement des compétences individuelles</b>, par une éducation et une information adaptées aux besoins.', [LG('Compétences individuelles → éducation et information adaptées', 'bleu', { puce: '4' })]),
  E('Axe 5 : la <b>réorientation des services de santé</b>, vers des approches préventives et promotionnelles.', [LG('Réorientation des services → vers le préventif et le promotionnel', 'bleu', { puce: '5' })]),
  E('Pour les initiales P-E-C-C-R : « <b>P</b>etit <b>E</b>stomac <b>C</b>ontent <b>C</b>roque des <b>R</b>adis ». Et voilà la ligne à savoir par cœur.', [POST('Petit Estomac Content Croque des Radis', 'astuce'), POST('Ottawa 1986 : politiques saines · environnements favorables · action communautaire · compétences individuelles · réorientation des services', 'cle')], 'content')
],
'sp-enjeux-09': [
  E('Comment appliquer Ottawa en nutrition ? Il faut une <b>approche multisectorielle</b> : travailler avec d\'autres secteurs que la santé.', [T('Ottawa en nutrition')]),
  E('Avec les <b>urbanistes</b>, on aménage des cuisines collectives. Avec la <b>restauration scolaire</b>, on fait de l\'éducation au goût. Avec les <b>associations</b>, on anime des ateliers culinaires.', [LG('urbanistes → cuisines collectives', 'bleu', { puce: '•' }), LG('restauration scolaire → éducation au goût', 'bleu', { puce: '•' }), LG('associations → ateliers culinaires', 'bleu', { puce: '•' })]),
  E('Travailler ensemble, c\'est l\'<b>intersectorialité</b>. C\'est un défi majeur… mais indispensable à l\'efficacité.', [LG('Intersectorialité : défi majeur mais indispensable', 'rouge', { taille: 'grand' }), SOUL()], 'reflechit'),
  E('Ottawa demande aussi une <b>approche participative</b> : les populations deviennent <b>actrices</b> de leur santé. Pour toi, ça veut dire savoir animer des groupes et mobiliser une communauté.', [EFF(), T('Approche participative'), LG('les populations deviennent actrices de leur santé', 'vert'), LG('→ animation de groupes, mobilisation communautaire', 'bleu')]),
  E('À retenir : la promotion de la santé agit <b>avec</b> les populations et <b>sur leur environnement</b>, pas seulement sur leurs connaissances.', [LG('AVEC les populations + SUR leur environnement', 'rouge', { taille: 'grand' }), SOUL(true)], 'content')
],

/* ---------- FICHE 3 ---------- */
'sp-enjeux-11': [
  E('Appliquons le modèle des 5 cercles à un exemple : l\'<b>obésité infantile</b>. Chaque cercle apporte sa part.', [T('L\'obésité infantile en 5 cercles'), CERC([
    { titre: 'Prédisposition génétique' },
    { titre: 'Habitudes alimentaires familiales' },
    { titre: 'Influence des pairs à l\'école' },
    { titre: 'Restauration scolaire, accès aux équipements sportifs' },
    { titre: 'Taxation des produits sucrés' }
  ])]),
  E('Cercle 1, l\'individu : une <b>prédisposition génétique</b>.', [MONTRE(1)]),
  E('Cercle 2, les modes de vie : les <b>habitudes alimentaires de la famille</b>.', [MONTRE(2)]),
  E('Cercle 3, les réseaux sociaux : l\'<b>influence des copains à l\'école</b>.', [MONTRE(3)]),
  E('Cercle 4, les conditions de vie : la <b>restauration scolaire</b> et l\'<b>accès aux équipements sportifs</b>.', [MONTRE(4)]),
  E('Cercle 5, les politiques : la <b>taxation des produits sucrés</b>.', [MONTRE(5)]),
  E('Isabelle Moreau, notre sociologue, le dit bien : promouvoir les fruits et légumes est <b>inefficace</b> là où l\'offre est <b>inexistante</b> ou <b>trop chère</b>.', [EFF(), T('Isabelle Moreau, sociologue'), LG('« Promouvoir les fruits et légumes est inefficace là où l\'offre est inexistante ou trop chère. »', 'bleu')], 'reflechit'),
  E('Donc une intervention efficace agit sur <b>plusieurs niveaux à la fois</b>, pas seulement sur les comportements individuels.', [LG('→ agir sur PLUSIEURS cercles à la fois', 'rouge', { taille: 'grand' }), SOUL()], 'content')
],

/* ---------- FICHE 4 ---------- */
'sp-enjeux-13': [
  E('On a vu les 3 niveaux de prévention. Zoom sur deux questions : pourquoi dépister, et où intervient le diététicien ?', [T('Dépister, et où agit le diététicien ?')]),
  E('<b>Pourquoi dépister ?</b> Pour permettre une <b>prise en charge précoce</b>, avant les complications métaboliques ou fonctionnelles.', [LG('Dépister = prise en charge précoce, avant les complications', 'bleu', { taille: 'grand' }), SOUL()]),
  E('<b>Où intervient le diététicien ?</b> Principalement en prévention <b>primaire</b> et <b>secondaire</b>. Et il <b>contribue</b> à la tertiaire, dans une prise en charge multidisciplinaire.', [LG('Surtout : primaire + secondaire', 'vert', { puce: '→' }), LG('Contribue au tertiaire (multidisciplinaire)', 'vert', { puce: '→' })]),
  E('Le piège classique : un <b>diabète de type 2 déjà déclaré</b>, c\'est de la prévention <b>tertiaire</b>, pas secondaire. Pose-toi la question : la maladie est-elle déjà là ?', [POST('DT2 déjà déclaré = TERTIAIRE, pas secondaire', 'piege')], 'reflechit'),
  E('Les 3 niveaux sont <b>complémentaires</b> : ils s\'articulent tout au long du parcours. Voici la ligne à savoir par cœur.', [POST('primaire : éviter (bien portants) · secondaire : dépister (précoce) · tertiaire : limiter complications et rechutes', 'cle')], 'content')
],

/* ---------- FICHE 5 ---------- */
'sp-enjeux-14': [
  E('Place au <b>PNNS</b>, le Programme National Nutrition Santé. C\'est le cadre de la politique nutritionnelle française depuis <b>2001</b>.', [T('Le PNNS'), LG('Programme National Nutrition Santé · depuis 2001', 'bleu')]),
  E('C\'est un programme <b>intersectoriel</b> : il réunit 4 ministères, la Santé, l\'Agriculture, l\'Éducation nationale et les Sports.', [LG('Santé · Agriculture · Éducation nationale · Sports', 'noir', { puce: '🏛️' })]),
  E('Il y a eu 4 versions. Regarde comme il s\'élargit à chaque fois.', [EFF(), T('Les 4 PNNS'), RANG([
    { titre: 'PNNS 1 · 2001-2005', x: 'Information et sensibilisation du grand public', c: 'bleu' },
    { titre: 'PNNS 2 · 2006-2010', x: 'Prévention ciblée sur les vulnérables + surveillance nutritionnelle', c: 'vert' },
    { titre: 'PNNS 3 · 2011-2015', x: 'Dimension socio-économique des inégalités + milieu scolaire', c: 'rouge' },
    { titre: 'PNNS 4 · 2019-2023', x: 'Approche systémique : environnement alimentaire + littératie nutritionnelle', c: 'noir' }
  ])]),
  E('PNNS 1 : on <b>informe</b> tout le monde, avec le slogan activité physique plus alimentation équilibrée.', [MONTRE(1)]),
  E('PNNS 2 : on <b>cible les populations vulnérables</b>, et on met en place la surveillance nutritionnelle.', [MONTRE(2)]),
  E('PNNS 3 : on regarde la <b>dimension socio-économique</b> des inégalités, avec des interventions à l\'école.', [MONTRE(3)]),
  E('PNNS 4 : approche <b>systémique</b>, on agit sur l\'environnement alimentaire et la littératie nutritionnelle. Du général au systémique !', [MONTRE(4), POST('1 j\'informe → 2 je cible → 3 je regarde le social → 4 je change le système', 'astuce')], 'content')
],
'sp-enjeux-15': [
  E('Le PNNS 4 a des <b>objectifs quantifiés</b>. On commence par l\'assiette.', [T('Les objectifs du PNNS 4')]),
  E('À <b>augmenter</b> : les légumineuses, les fruits à coque, les fruits et légumes.', [LG('⬆️ légumineuses · fruits à coque · fruits et légumes', 'vert', { taille: 'grand' })]),
  E('À <b>réduire</b> : la viande hors volaille, la charcuterie, le sel et les produits sucrés.', [LG('⬇️ viande hors volaille · charcuterie · sel · produits sucrés', 'rouge', { taille: 'grand' })]),
  E('Et au-delà de l\'assiette : plus d\'<b>activité physique</b> et moins de sédentarité, réduire les <b>inégalités sociales</b> d\'accès à une alimentation favorable, et améliorer la <b>composition de l\'offre</b> alimentaire.', [LG('+ activité physique, − sédentarité', 'bleu', { puce: '•' }), LG('réduire les inégalités sociales d\'accès', 'bleu', { puce: '•' }), LG('améliorer la composition de l\'offre', 'bleu', { puce: '•' })]),
  E('Sur le terrain, il faut <b>territorialiser</b> : adapter les messages aux habitudes alimentaires locales, à l\'offre commerciale et aux contraintes socio-économiques, en ciblant les plus vulnérables.', [EFF(), T('Sur le terrain'), LG('adapter aux habitudes locales · à l\'offre commerciale · aux contraintes socio-économiques', 'bleu'), LG('→ cibler les populations vulnérables', 'rouge'), SOUL()]),
  E('Mon astuce pour l\'assiette : plus de végétal, moins d\'animal transformé, de sel et de sucre.', [POST('Plus de végétal · moins d\'animal transformé, de sel et de sucre', 'astuce')], 'content')
],
'sp-enjeux-16': [
  E('À côté du PNNS, il y a la <b>Stratégie Nationale de Santé</b>, la SNS <b>2018-2022</b>.', [T('Stratégie Nationale de Santé 2018-2022')]),
  E('Pour elle, la nutrition est un <b>levier prioritaire de prévention primaire</b>, tout au long de la vie. Avec un objectif chiffré de réduction de l\'obésité, qui mobilise tous les acteurs.', [LG('nutrition = levier prioritaire de prévention primaire', 'bleu', { puce: '→' }), LG('objectif quantifié de réduction de l\'obésité', 'bleu', { puce: '→' })]),
  E('Elle intègre les <b>Objectifs de Développement Durable</b> de l\'ONU : l\'ODD 2, <b>faim zéro</b>, et l\'ODD 3, <b>bonne santé et bien-être</b>.', [RANG([{ titre: 'ODD 2', x: 'Faim zéro', c: 'vert' }, { titre: 'ODD 3', x: 'Bonne santé et bien-être', c: 'bleu' }]), MONTRE(1), MONTRE(2)]),
  E('Attention au piège : 2, c\'est faim zéro, 3, c\'est bonne santé. Pas l\'inverse ! Dans l\'ordre logique : d\'abord manger, ensuite être en bonne santé.', [POST('ODD 2 = faim zéro · ODD 3 = bonne santé (pas l\'inverse)', 'piege')], 'reflechit'),
  E('La SNS a aussi une <b>dimension environnementale</b> : circuits courts, saisonnalité, réduction du gaspillage. Et la conclusion : les priorités sont nationales, mais l\'action est <b>locale</b>, il faut <b>territorialiser</b>.', [EFF(), T('À retenir'), LG('environnement : circuits courts · saisonnalité · moins de gaspillage', 'vert'), LG('Priorités nationales, action LOCALE → territorialiser', 'rouge', { taille: 'grand' }), SOUL()]),
  E('Voici la ligne à savoir par cœur de la fiche 5.', [POST('PNNS 2001, 4 versions : 1 information · 2 vulnérables + surveillance · 3 socio-éco + école · 4 systémique + littératie · SNS 2018-2022 · ODD 2 et 3', 'cle')], 'content')
],

/* ---------- FICHE 6 ---------- */
'sp-enjeux-17': [
  E('Trois problématiques prioritaires dans cette fiche : obésité, dénutrition, TCA. On commence par l\'<b>obésité</b>.', [T('L\'obésité, une affaire de territoire')]),
  E('<b>17 %</b> des adultes sont obèses en France, selon <b>ObEpi 2020</b>. Et c\'est en hausse constante depuis 30 ans.', [LG('17 % des adultes obèses (ObEpi 2020), en hausse depuis 30 ans', 'rouge', { taille: 'grand' })]),
  E('Dans notre observatoire, ça va de <b>12 %</b> dans la métropole lilloise à <b>22 %</b> dans le bassin minier du Pas-de-Calais. Les territoires désindustrialisés cumulent chômage, précarité, offre défavorable et peu d\'espaces verts.', [LG('12 % métropole lilloise → 22 % bassin minier', 'bleu', { puce: '→' }), LG('territoires désindustrialisés : chômage, précarité, offre défavorable, peu d\'espaces verts', 'noir', { taille: 'petit', decale: true })]),
  E('Trois familles de facteurs : <b>génétiques</b>, dont l\'expression dépend de l\'environnement ; <b>comportementaux</b>, l\'alimentation, l\'activité, le stress ; <b>environnementaux</b>, les fast-foods, les équipements sportifs, l\'urbanisme, les normes sociales.', [EFF(), T('3 familles de facteurs'), LG('génétiques (expression selon l\'environnement)', 'bleu', { puce: '1' }), LG('comportementaux : alimentation, activité, stress', 'bleu', { puce: '2' }), LG('environnementaux : fast-foods, équipements sportifs, urbanisme, normes', 'bleu', { puce: '3' })]),
  E('On parle d\'<b>environnement obésogène</b> : un lieu où les choix sains sont <b>plus difficiles</b> et <b>plus coûteux</b>.', [LG('Environnement obésogène = choix sains plus difficiles et plus coûteux', 'rouge'), SOUL()]),
  E('Donc il faut dépasser la responsabilisation individuelle, agir sur les <b>déterminants structurels</b>, et éviter la <b>stigmatisation</b>.', [LG('→ agir sur les déterminants structurels, sans stigmatiser', 'vert', { taille: 'grand' })], 'content')
],
'sp-enjeux-18': [
  E('Deuxième problématique : la <b>dénutrition des personnes âgées</b>. C\'est un enjeu <b>sous-estimé</b>.', [T('La dénutrition des personnes âgées')]),
  E('D\'après la <b>HAS</b>, elle touche <b>4 à 10 %</b> des personnes âgées à domicile, et <b>15 à 40 %</b> en institution.', [LG('à domicile : 4-10 %', 'bleu', { taille: 'grand' }), LG('en institution : 15-40 %', 'rouge', { taille: 'grand' }), LG('source : HAS', 'noir', { taille: 'petit' })]),
  E('Elle coûte cher : des séjours hospitaliers <b>allongés</b>, des complications <b>post-opératoires</b>, une <b>perte d\'autonomie</b>.', [LG('Coûts : séjours allongés · complications post-opératoires · perte d\'autonomie', 'noir', { puce: '→' })]),
  E('Les facteurs de risque : <b>isolement</b>, <b>dépression</b>, polypathologies, <b>polymédication</b>, troubles de la <b>mastication</b> et de la <b>déglutition</b>.', [EFF(), T('Facteurs de risque'), LG('isolement · dépression · polypathologies · polymédication · troubles de la mastication et de la déglutition', 'rouge')]),
  E('Les actions : <b>former les aidants</b> à repérer les signes et à enrichir l\'alimentation, créer des <b>réseaux de dépistage précoce</b> avec médecins généralistes, pharmaciens, infirmiers, kinés et travailleurs sociaux, et proposer des <b>ateliers alimentaires</b>.', [T('Actions'), LG('former les aidants (signes, enrichissement)', 'vert', { puce: '✓' }), LG('réseaux de dépistage précoce (médecins, pharmaciens, infirmiers, kinés, social)', 'vert', { puce: '✓' }), LG('ateliers alimentaires', 'vert', { puce: '✓' })]),
  E('Astuce : domicile 4-10, institution 15-40. En institution, c\'est jusqu\'à 4 fois plus !', [POST('Domicile 4-10 % · institution 15-40 % (HAS)', 'astuce')], 'content')
],
'sp-enjeux-19': [
  E('Troisième problématique : les <b>troubles du comportement alimentaire</b>, les TCA. Ils sont <b>en hausse</b>, surtout chez les adolescents et les jeunes adultes.', [T('Les TCA')]),
  E('Un chiffre clé : l\'<b>anorexie mentale</b> a le <b>taux de mortalité le plus élevé</b> de tous les troubles psychiatriques.', [LG('Anorexie mentale = mortalité la plus élevée des troubles psychiatriques', 'rouge', { taille: 'grand' }), SOUL()], 'reflechit'),
  E('La <b>boulimie</b> et l\'<b>hyperphagie boulimique</b> sont plus fréquentes, mais souvent <b>non diagnostiquées</b>. Signes et conséquences : troubles dentaires, déshydratation, isolement, échec scolaire ou professionnel.', [LG('boulimie, hyperphagie boulimique : plus fréquentes, souvent non diagnostiquées', 'bleu', { puce: '→' }), LG('troubles dentaires · déshydratation · isolement · échec scolaire/pro', 'noir', { taille: 'petit', decale: true })]),
  E('Des facteurs émergents : les <b>réseaux sociaux</b> et la <b>pression esthétique</b>.', [LG('Facteurs émergents : réseaux sociaux, pression esthétique', 'rouge', { puce: '⚠' })]),
  E('La prévention commence dès l\'enfance : une relation positive à l\'alimentation et au corps, pas de messages culpabilisants, et valoriser la diversité corporelle.', [EFF(), T('Prévenir dès l\'enfance'), LG('relation positive à l\'alimentation et au corps', 'vert', { puce: '✓' }), LG('pas de messages culpabilisants', 'vert', { puce: '✓' }), LG('diversité corporelle', 'vert', { puce: '✓' })]),
  E('Et voici la ligne à savoir par cœur de toute la fiche 6.', [POST('obésité 17 % (ObEpi 2020), 12 → 22 % selon le territoire · dénutrition 4-10 % domicile / 15-40 % institution (HAS) · anorexie = mortalité psy la plus élevée', 'cle')], 'content')
],

/* ---------- FICHE 7 ---------- */
'sp-enjeux-20': [
  E('Santé humaine et santé de la planète sont liées. Premier chiffre : l\'alimentation, c\'est environ <b>25 %</b> de l\'empreinte carbone des Français, selon l\'ADEME.', [T('Alimentation durable et climat'), LG('≈ 25 % de l\'empreinte carbone des Français (ADEME)', 'rouge', { taille: 'grand' })]),
  E('Les <b>légumineuses</b> ont un double bénéfice : pour le PNNS, avec les fibres et les protéines végétales, et pour le climat, avec moins d\'émissions liées à l\'élevage.', [LG('Légumineuses = double bénéfice', 'vert', { taille: 'grand' }), LG('PNNS : fibres, protéines végétales', 'vert', { puce: '+', decale: true }), LG('climat : moins d\'émissions liées à l\'élevage', 'vert', { puce: '+', decale: true })]),
  E('La <b>viande rouge</b> : 500 grammes par semaine maximum, soit environ 70 grammes par jour. Avec un accompagnement pour éviter les carences en <b>fer</b>, <b>zinc</b> et <b>B12</b>, surtout chez les femmes en âge de procréer.', [EFF(), T('Viande rouge'), LG('≤ 500 g/semaine (≈ 70 g/jour)', 'rouge', { taille: 'grand' }), SOUL(), LG('accompagner : risque de carences en fer, zinc, B12 (femmes en âge de procréer)', 'bleu')]),
  E('Les <b>circuits courts</b> : lien producteur-consommateur, moins de transport, des produits de saison, des variétés anciennes plus riches en micronutriments.', [LG('circuits courts : lien producteur-consommateur, moins de transport, saison, variétés anciennes', 'vert', { puce: '→' })]),
  E('Les <b>5 stratégies</b> d\'une alimentation durable : protéines végétales, produits locaux et de saison, moins de gaspillage, bio et circuits courts, et sensibiliser au lien alimentation-santé-environnement.', [EFF(), T('5 stratégies durables'), LG('protéines végétales', 'vert', { puce: '1' }), LG('produits locaux et de saison', 'vert', { puce: '2' }), LG('moins de gaspillage', 'vert', { puce: '3' }), LG('bio et circuits courts', 'vert', { puce: '4' }), LG('sensibiliser au lien alimentation-santé-environnement', 'vert', { puce: '5' })]),
  E('Astuce de calcul : 500 grammes divisés par 7 jours, ça fait environ 70 grammes par jour. Retiens l\'un, tu retrouves l\'autre.', [POST('500 g ÷ 7 jours ≈ 70 g/jour', 'astuce')], 'content')
],
'sp-enjeux-21': [
  E('La <b>sécurité alimentaire</b>, ce n\'est pas seulement avoir assez à manger. C\'est l\'<b>accès physique et économique</b> à une alimentation nutritionnellement adéquate.', [T('Sécurité alimentaire'), LG('= accès physique ET économique à une alimentation adéquate', 'bleu', { taille: 'grand' }), SOUL()]),
  E('En France, l\'aide alimentaire concerne <b>8 millions</b> de personnes. Et la précarité alimentaire touche aussi les <b>classes moyennes fragilisées</b>.', [LG('8 millions de personnes à l\'aide alimentaire', 'rouge', { taille: 'grand' }), LG('touche aussi les classes moyennes fragilisées', 'noir', { puce: '→' })]),
  E('Trois dispositifs, avec leurs atouts et leurs limites.', [EFF(), T('Les dispositifs'), RANG([
    { titre: 'Épiceries sociales et solidaires', sous: 'Atout : accès digne', x: 'Limite : insuffisantes sur certains territoires, besoin de soutien institutionnel', c: 'bleu' },
    { titre: 'Chèques alimentaires', sous: 'Atout : liberté de choix', x: 'Limite : besoin d\'un accompagnement éducatif', c: 'vert' },
    { titre: 'Jardins d\'insertion', sous: 'Atout : compétences pro + légumes frais + lien social', c: 'rouge' }
  ])]),
  E('Les <b>épiceries sociales et solidaires</b> offrent un accès digne, mais elles manquent sur certains territoires.', [MONTRE(1)]),
  E('Les <b>chèques alimentaires</b> laissent la liberté de choix, mais demandent un accompagnement éducatif.', [MONTRE(2)]),
  E('Les <b>jardins d\'insertion</b> apportent des compétences professionnelles, des légumes frais et du lien social. Astuce : dignité, liberté, insertion.', [MONTRE(3), POST('Épicerie = dignité · chèque = liberté · jardin = insertion', 'astuce')], 'content')
],
'sp-enjeux-22': [
  E('La <b>littératie nutritionnelle</b>, c\'est la capacité à faire des <b>choix alimentaires éclairés</b>.', [T('La littératie nutritionnelle'), LG('= capacité à faire des choix alimentaires éclairés', 'bleu', { taille: 'grand' })]),
  E('Elle réunit des <b>connaissances</b>, le savoir, et des <b>compétences pratiques</b>, le savoir-faire. Littératie égale savoir plus savoir-faire.', [LG('littératie = savoir + savoir-faire', 'rouge', { taille: 'grand' }), SOUL()]),
  E('Concrètement : savoir lire l\'<b>étiquetage</b>, <b>planifier</b> selon son budget, <b>cuisiner</b> des produits bruts. Résultat : plus d\'autonomie, et moins d\'ultra-transformés.', [LG('lire l\'étiquetage', 'bleu', { puce: '✓' }), LG('planifier selon son budget', 'bleu', { puce: '✓' }), LG('cuisiner des produits bruts', 'bleu', { puce: '✓' }), LG('→ autonomie, moins d\'ultra-transformés', 'vert')]),
  E('Le <b>numérique</b>, les livraisons, les applis, ouvre des opportunités… mais crée un <b>risque de fracture sociale</b>.', [LG('numérique : opportunités MAIS risque de fracture sociale', 'rouge', { puce: '⚠' })], 'reflechit'),
  E('Donc tes messages doivent intégrer les dimensions <b>culturelles</b>, <b>sociales</b> et <b>économiques</b> de l\'alimentation. Et voici la ligne à savoir par cœur de la fiche 7.', [POST('≈ 25 % de l\'empreinte carbone · viande rouge ≤ 500 g/sem (~70 g/j) · 8 millions à l\'aide alimentaire · littératie = savoir + savoir-faire', 'cle')], 'content')
],

/* ---------- FICHE 8 ---------- */
'sp-enjeux-23': [
  E('Plus on descend dans l\'échelle sociale, moins la santé est bonne. Et ces inégalités viennent de <b>contraintes</b>, pas de choix libres.', [T('Le gradient social de santé')]),
  E('Le <b>gradient social</b>, c\'est une relation <b>continue et progressive</b> entre position sociale et santé, à <b>tous les niveaux</b> de l\'échelle. C\'est un effet <b>dose-réponse</b>.', [LG('relation continue et progressive position sociale ↔ santé', 'bleu'), LG('à TOUS les niveaux : effet dose-réponse', 'rouge', { taille: 'grand' }), SOUL()]),
  E('Piège d\'examen : le gradient n\'oppose pas seulement les riches et les pauvres. Chaque marche de l\'échelle compte.', [POST('Pas seulement « riches vs pauvres » : tous les niveaux de l\'échelle sociale', 'piege')], 'reflechit'),
  E('Un exemple : <b>4,2</b> portions de fruits et légumes par jour chez les cadres supérieurs, contre <b>2,1</b> dans les catégories populaires. Ce n\'est pas que le budget : il y a aussi les normes sociales et le <b>capital culturel</b>, la notion de <b>Bourdieu</b>.', [EFF(), T('Des exemples'), LG('fruits et légumes : 4,2 portions/j (cadres sup.) vs 2,1 (catégories populaires)', 'rouge'), LG('budget + normes sociales + capital culturel (Bourdieu)', 'bleu', { puce: '→' })]),
  E('L\'<b>obésité</b> est inversement proportionnelle au niveau d\'éducation : stress chronique, travail pénible, environnement défavorable, accès aux soins.', [LG('obésité inversement proportionnelle au niveau d\'éducation', 'rouge'), LG('stress chronique · travail pénible · environnement défavorable · accès aux soins', 'noir', { taille: 'petit', decale: true })]),
  E('Même en cuisine : les catégories favorisées ont plus de temps, un répertoire diversifié, des produits bruts. Les catégories populaires utilisent plus de prêts-à-consommer, faute de temps et de compétences.', [RANG([{ titre: 'Catégories favorisées', x: 'plus de temps, répertoire diversifié, produits bruts', c: 'vert' }, { titre: 'Catégories populaires', x: 'plus de prêts-à-consommer (manque de temps et de compétences)', c: 'rouge' }]), MONTRE(1), MONTRE(2)]),
  E('Conclusion : ces inégalités viennent de <b>contraintes structurelles</b>. Les comprendre évite de culpabiliser les plus vulnérables.', [POST('« Gradient » = une pente douce, pas une falaise : chaque marche compte', 'astuce')], 'content')
],
'sp-enjeux-24': [
  E('La <b>précarité alimentaire</b>, c\'est l\'impossibilité d\'accéder à une alimentation <b>suffisante</b>, <b>diversifiée</b> et <b>de qualité</b>, faute de ressources.', [T('Précarité alimentaire'), LG('impossible d\'accéder à une alimentation suffisante, diversifiée, de qualité', 'bleu')]),
  E('L\'enquête <b>INCA3</b> de l\'ANSES, en 2017, trouve <b>11 %</b> des adultes en insécurité alimentaire : <b>7 %</b> modérée et <b>4 %</b> sévère.', [LG('INCA3 (ANSES, 2017) : 11 % des adultes', 'rouge', { taille: 'grand' }), LG('= 7 % modérée + 4 % sévère', 'rouge', { decale: true }), SOUL()]),
  E('Les plus exposés : les <b>familles monoparentales</b>, les <b>étudiants</b>, les <b>chômeurs</b>.', [LG('plus exposés : familles monoparentales · étudiants · chômeurs', 'noir', { puce: '→' })]),
  E('Comment la mesurer ? Trois indicateurs.', [EFF(), T('3 indicateurs'), RANG([
    { titre: 'Recours à l\'aide alimentaire', x: 'banques alimentaires, Restos du Cœur, CCAS', c: 'bleu' },
    { titre: 'Budget alimentaire des ménages', x: 'part du revenu consacrée à l\'alimentation', c: 'vert' },
    { titre: 'Indice de privation matérielle', x: 'Eurostat', c: 'rouge' }
  ]), MONTRE(1), MONTRE(2), MONTRE(3)]),
  E('Quand c\'est aussi la <b>qualité</b> qui manque, on parle d\'<b>insécurité nutritionnelle</b>. Risque : DT2, obésité, maladies cardiovasculaires, surveillées par Santé publique France avec l\'enquête <b>Esteban</b>.', [LG('Insécurité nutritionnelle → maladies chroniques (DT2, obésité, cardiovasculaire), surveillées par Santé publique France (Esteban)', 'rouge'), SOUL()]),
  E('Astuce : INCA3, c\'est 11 égale 7 plus 4.', [POST('INCA3 : 11 = 7 (modérée) + 4 (sévère)', 'astuce')], 'content')
],
'sp-enjeux-25': [
  E('Comment font les personnes en précarité ? Elles développent des <b>stratégies d\'adaptation</b>.', [T('Les paradoxes de la précarité')]),
  E('Moins de diversité. Des aliments <b>bon marché</b>, <b>riches en calories</b> et <b>pauvres en nutriments</b>. Et parfois, <b>sauter des repas</b> pour nourrir les enfants.', [LG('moins de diversité', 'bleu', { puce: '•' }), LG('aliments bon marché, riches en calories, pauvres en nutriments', 'bleu', { puce: '•' }), LG('sauter des repas pour nourrir les enfants', 'bleu', { puce: '•' })]),
  E('D\'où des <b>paradoxes nutritionnels</b> : être en <b>surpoids</b> et avoir des <b>carences</b> en même temps. Alterner restriction et surconsommation. Vivre avec une culpabilité permanente.', [EFF(), T('Paradoxes nutritionnels'), LG('surpoids + carences en même temps', 'rouge', { taille: 'grand' }), SOUL(), LG('alternance restriction / surconsommation', 'rouge', { puce: '•' }), LG('culpabilité permanente', 'rouge', { puce: '•' })], 'reflechit'),
  E('Depuis le Covid, on parle des « <b>nouveaux précaires</b> » : travailleurs précaires, étudiants, familles monoparentales.', [LG('Post-Covid, « nouveaux précaires » : travailleurs précaires, étudiants, familles monoparentales', 'bleu')]),
  E('Et voici la ligne à savoir par cœur de toute la fiche 8.', [POST('gradient = continu, dose-réponse · 4,2 vs 2,1 portions · Bourdieu · INCA3 : 11 % des adultes (7 % modérée + 4 % sévère) · paradoxe : surpoids + carences', 'cle')], 'content')
],

/* ---------- FICHE 9 ---------- */
'sp-enjeux-26': [
  E('Là où l\'on vit détermine ce que l\'on peut acheter. Deux notions à bien distinguer : le <b>désert alimentaire</b> et le <b>food swamp</b>.', [T('Déserts alimentaires et food swamps'), RANG([
    { titre: '🏜️ Désert alimentaire', sous: 'Surtout rural (Aisne : > 15 km pour des commerces diversifiés)', x: 'Accès à une alimentation fraîche, variée, abordable limité ou inexistant → qualité nutritionnelle moindre', c: 'bleu' },
    { titre: '🍟 Food swamp', sous: 'Certains quartiers urbains', x: 'Zone saturée de fast-foods et de commerces peu diversifiés → plus d\'ultra-transformés riches en calories', c: 'rouge' }
  ])]),
  E('Le <b>désert alimentaire</b> : l\'accès à une alimentation fraîche, variée et abordable est limité ou inexistant. Surtout en <b>rural</b> : dans l\'Aisne, il faut parfois faire plus de <b>15 km</b> pour trouver des commerces diversifiés.', [MONTRE(1)]),
  E('Le <b>food swamp</b>, littéralement « marécage alimentaire » : une zone saturée de fast-foods et de commerces peu diversifiés, dans certains quartiers <b>urbains</b>. Résultat : plus d\'ultra-transformés.', [MONTRE(2), POST('Désert = il n\'y a RIEN · swamp (marécage) = il y a TROP, mais du mauvais', 'astuce')]),
  E('Le concept vient des États-Unis. En France, c\'est la désertification commerciale rurale, avec un cercle vicieux : fermetures et dépeuplement. Les marchés hebdomadaires sont parfois le seul accès aux produits frais.', [EFF(), T('En France'), LG('désertification commerciale rurale', 'bleu', { puce: '→' }), LG('cercle vicieux : fermetures ↔ dépeuplement', 'rouge', { puce: '→' }), LG('marchés hebdomadaires : parfois le seul accès au frais', 'noir', { puce: '→' })]),
  E('Le sujet est pris en compte par le PNNS 2019-2023, les <b>Contrats Locaux de Santé</b>, les CLS, et les <b>Programmes Régionaux de Santé</b> des ARS, les PRS, qui financent des actions locales.', [LG('pris en compte : PNNS 2019-2023 · CLS · PRS (ARS)', 'vert', { taille: 'grand' }), SOUL()]),
  E('Un exemple réussi : <b>Vervins</b>, dans l\'Aisne. Des livraisons solidaires associent un épicier local, une association d\'insertion et le transport à la demande. Résultat : <b>150 personnes âgées</b> moins isolées, et l\'économie locale soutenue.', [POST('Vervins (Aisne) : livraisons solidaires → 150 personnes âgées moins isolées', 'cle')], 'content')
],
'sp-enjeux-27': [
  E('L\'<b>environnement alimentaire</b>, ce sont tous les facteurs contextuels qui influencent nos choix.', [T('L\'environnement alimentaire')]),
  E('Quatre facteurs : la <b>disponibilité</b>, l\'<b>accessibilité</b>, l\'<b>acceptabilité</b> et la <b>qualité</b> de l\'offre.', [LG('disponibilité · accessibilité · acceptabilité · qualité de l\'offre', 'bleu', { taille: 'grand' })]),
  E('Exemple dans la métropole lilloise : des fast-foods dans les quartiers défavorisés, des marchés de producteurs en centre-ville, des grandes surfaces en périphérie.', [LG('quartiers défavorisés → fast-foods', 'rouge', { puce: '•' }), LG('centre-ville → marchés de producteurs', 'vert', { puce: '•' }), LG('périphérie → grandes surfaces', 'noir', { puce: '•' })]),
  E('Mehdi cartographie tout ça. Sur sa carte, il repère trois types de zones, avec une action pour chacune.', [EFF(), T('La carte de Mehdi'), RANG([
    { titre: 'Déserts alimentaires', x: '→ développement commercial', c: 'bleu' },
    { titre: 'Zones de restauration rapide', x: '→ régulation', c: 'rouge' },
    { titre: 'Territoires à atouts', x: '→ valorisation', c: 'vert' }
  ])]),
  E('Dans les déserts : du <b>développement commercial</b>.', [MONTRE(1)]),
  E('Dans les zones de restauration rapide : de la <b>régulation</b>.', [MONTRE(2)]),
  E('Et les territoires à atouts, on les <b>valorise</b>. Même la cantine diffère : cuisine sur site en zones favorisées, liaison froide et produits industriels en zones défavorisées.', [MONTRE(3), LG('Cantine : cuisine sur site (zones favorisées) vs liaison froide + industriel (zones défavorisées)', 'rouge')], 'content')
],
'sp-enjeux-28': [
  E('Dernier facteur territorial : le <b>transport et la mobilité</b>.', [T('Transport et mobilité')]),
  E('Ils touchent surtout les <b>personnes âgées</b>, les <b>familles sans véhicule</b> et les <b>zones mal desservies</b>.', [LG('personnes âgées · familles sans véhicule · zones mal desservies', 'bleu', { taille: 'grand' })]),
  E('Le CRÉDOC a mesuré l\'insuffisance alimentaire qualitative chez les 65 ans et plus : <b>36 %</b> en 2021… et <b>52 %</b> en 2023 !', [LG('CRÉDOC, 65 ans et + : 36 % (2021) → 52 % (2023)', 'rouge', { taille: 'grand' }), SOUL()], 'reflechit'),
  E('Les risques : l\'<b>isolement alimentaire</b>, la <b>dénutrition</b>, et la dépendance à l\'entourage.', [LG('risques : isolement alimentaire · dénutrition · dépendance à l\'entourage', 'rouge', { puce: '⚠' })]),
  E('Les solutions : livraisons solidaires, marchés itinérants, transport à la demande élargi aux courses. Les commandes en ligne ? Leur impact sur l\'équité reste à évaluer.', [EFF(), T('Solutions'), LG('livraisons solidaires', 'vert', { puce: '✓' }), LG('marchés itinérants', 'vert', { puce: '✓' }), LG('transport à la demande élargi aux courses', 'vert', { puce: '✓' }), LG('commandes en ligne : impact sur l\'équité à évaluer', 'noir', { puce: '?' })]),
  E('À retenir : l\'environnement influence nos choix, souvent sans qu\'on s\'en rende compte. Ne reporte pas tout sur l\'individu : améliore l\'offre locale. Voici la ligne à savoir par cœur de la fiche 9.', [POST('désert (rural, > 15 km) vs food swamp (urbain, fast-foods) · CLS, PRS · Vervins : 150 pers. âgées · CRÉDOC 36 % → 52 %', 'cle')], 'content')
],

/* ---------- FICHE 10 ---------- */
'sp-enjeux-30': [
  E('Pour réduire les inégalités, il faut agir <b>avec les habitants</b>. C\'est l\'<b>approche communautaire</b>.', [T('Agir avec les habitants')]),
  E('Les communautés participent à la <b>définition</b>, à la <b>mise en œuvre</b> et à l\'<b>évaluation</b> des actions. Résultat : elles se les <b>approprient</b>.', [LG('participer à : définir · mettre en œuvre · évaluer', 'bleu'), LG('→ appropriation', 'vert', { taille: 'grand' }), SOUL()]),
  E('Trois outils. Regarde ce que chacun apporte.', [EFF(), T('3 outils'), RANG([
    { titre: 'Groupes de parole', x: 'exprimer ses difficultés, partager ses stratégies, co-construire ; révèlent des savoir-faire locaux', c: 'bleu' },
    { titre: 'Ateliers de cuisine collaborative', x: 'lien social, confiance en soi, rapport positif à l\'alimentation', c: 'vert' },
    { titre: 'Pairs-aidants', x: 'issus des communautés : légitimité, messages adaptés aux codes culturels', c: 'rouge' }
  ])]),
  E('Les <b>groupes de parole</b> : on y exprime ses difficultés, on partage ses stratégies, on co-construit. Et ils révèlent des savoir-faire locaux.', [MONTRE(1)]),
  E('Les <b>ateliers de cuisine collaborative</b> : du lien social, de la confiance en soi, un rapport positif à l\'alimentation.', [MONTRE(2)]),
  E('Les <b>pairs-aidants</b>, issus des communautés : ils ont de la <b>légitimité</b>, et leurs messages sont adaptés aux codes culturels.', [MONTRE(3)]),
  E('Un exemple : « <b>Cuisines du monde</b> » à <b>Roubaix</b>. Des femmes migrantes et des habitants de longue date cuisinent ensemble. Résultat : <b>15 emplois</b> en insertion et <b>200 familles</b> moins isolées.', [POST('Roubaix « Cuisines du monde » : 15 emplois en insertion · 200 familles moins isolées', 'cle')], 'content')
],
'sp-enjeux-31': [
  E('Dernière stratégie : <b>évaluer l\'impact</b> d\'une action sur les inégalités.', [T('Évaluer l\'impact')]),
  E('Règle d\'or : il faut mesurer l\'<b>évolution des inégalités</b>, pas seulement les <b>résultats moyens</b>.', [LG('mesurer l\'évolution des ÉCARTS, pas seulement la moyenne', 'rouge', { taille: 'grand' }), SOUL()]),
  E('On combine deux types d\'indicateurs.', [RANG([
    { titre: 'Quantitatif', x: 'prévalences d\'obésité/dénutrition par quartier et catégorie sociale · recours à l\'aide alimentaire · changements de comportements', c: 'bleu' },
    { titre: 'Qualitatif', x: 'vécu · adaptation culturelle · durabilité', c: 'vert' }
  ]), MONTRE(1), MONTRE(2)]),
  E('L\'<b>analyse géolocalisée</b> permet de repérer des <b>micro-disparités</b> à l\'intérieur d\'un même territoire. Une moyenne qui s\'améliore peut cacher un quartier qui décroche !', [EFF(), T('Zoomer'), LG('analyse géolocalisée → micro-disparités dans un même territoire', 'bleu'), LG('une moyenne peut cacher un quartier qui décroche', 'rouge', { puce: '⚠' })], 'reflechit'),
  E('Le but : un <b>système apprenant</b>, qui s\'améliore en continu selon les résultats. Et voici la ligne à savoir par cœur de la fiche 10.', [LG('→ système apprenant', 'vert', { taille: 'grand' }), POST('universalisme proportionné : pour tous, intensité selon besoins · groupes de parole, cuisine, pairs-aidants · Roubaix : 15 emplois, 200 familles · évaluation différentielle', 'cle')], 'content')
],

/* ---------- FICHE 11 ---------- */
'sp-enjeux-32': [
  E('Fiche méthodes ! Ce sont tes « conseils pro » : <b>5 situations pratiques</b>, avec <b>4 réflexes</b> chacune. Très utile pour l\'examen.', [T('Méthodes : 5 situations, 4 réflexes')]),
  E('Situation 1 : <b>analyser les déterminants nutritionnels d\'un territoire</b>. Premier réflexe, le <b>diagnostic</b> avec des données locales : observatoire, ARS, INSEE, enquêtes.', [EFF(), T('1 · Analyser un territoire'), LG('diagnostic avec données locales (observatoire, ARS, INSEE, enquêtes)', 'bleu', { puce: '1' })]),
  E('Ensuite, <b>cartographier</b> l\'offre alimentaire et la mobilité, et <b>identifier les groupes vulnérables</b> selon l\'âge, le revenu, l\'isolement, les pratiques.', [LG('cartographier l\'offre alimentaire et la mobilité', 'bleu', { puce: '2' }), LG('identifier les groupes vulnérables (âge, revenu, isolement, pratiques)', 'bleu', { puce: '3' })]),
  E('Enfin, <b>croiser</b> le quantitatif et le qualitatif, avec des entretiens et des groupes.', [LG('croiser quantitatif et qualitatif (entretiens, groupes)', 'bleu', { puce: '4' })]),
  E('Situation 2 : <b>concevoir une intervention territoriale efficace</b>. Une approche multisectorielle, éducation, urbanisme, restauration, social. Et on <b>co-construit</b> avec les acteurs et les populations.', [EFF(), T('2 · Concevoir une intervention'), LG('approche multisectorielle (éducation, urbanisme, restauration, social)', 'vert', { puce: '1' }), LG('co-construire avec acteurs et populations', 'vert', { puce: '2' })]),
  E('Puis des <b>objectifs SMART</b> et des messages adaptés aux réalités culturelles et économiques. Et on prévoit ressources, partenariats et <b>pérennisation</b> dès le départ.', [LG('objectifs SMART, messages adaptés aux réalités culturelles et économiques', 'vert', { puce: '3' }), LG('ressources, partenariats, pérennisation DÈS LE DÉPART', 'rouge', { puce: '4' }), SOUL()], 'content')
],
'sp-enjeux-33': [
  E('Situation 3 : <b>intégrer l\'universalisme proportionné</b> dans une action.', [T('3 · Universalisme proportionné')]),
  E('Des actions universelles, plus un soutien intensifié pour les publics à risque. Avec des <b>critères locaux</b> pour calibrer l\'intensité : revenu, accès, santé.', [LG('actions universelles + soutien intensifié pour les publics à risque', 'bleu', { puce: '1' }), LG('critères locaux pour calibrer : revenu, accès, santé', 'bleu', { puce: '2' })]),
  E('On évite la stigmatisation avec des offres <b>ouvertes</b> et <b>modulables</b>. Et on fait un <b>suivi différentiel</b> de la réduction des écarts.', [LG('éviter la stigmatisation : offres ouvertes et modulables', 'bleu', { puce: '3' }), LG('suivi différentiel de la réduction des écarts', 'bleu', { puce: '4' })]),
  E('Situation 4 : <b>mesurer l\'impact</b> d\'une action de prévention. Des indicateurs quantitatifs et qualitatifs, par exemple l\'obésité ou la consommation de fruits et légumes.', [EFF(), T('4 · Mesurer l\'impact'), LG('indicateurs quantitatifs (obésité, fruits/légumes) et qualitatifs', 'vert', { puce: '1' })]),
  E('Des données <b>avant-après</b> et <b>par sous-groupes</b>. La géolocalisation, le recours à l\'aide alimentaire. Et un apprentissage continu pour ajuster.', [LG('données avant-après et par sous-groupes', 'vert', { puce: '2' }), LG('géolocalisation, recours à l\'aide alimentaire', 'vert', { puce: '3' }), LG('apprentissage continu pour ajuster', 'vert', { puce: '4' })]),
  E('Mon astuce : mesurer, c\'est comparer. Avant et après, et groupe par groupe.', [POST('Mesurer = comparer : avant / après, et groupe par groupe', 'astuce')], 'content')
],
'sp-enjeux-34': [
  E('Situation 5 : <b>prévenir et dépister la dénutrition du sujet âgé</b>.', [T('5 · Dénutrition du sujet âgé')]),
  E('Premier réflexe : <b>former</b> les aidants et les professionnels au repérage et aux outils simples. Deuxième : des <b>réseaux locaux</b>, avec médecins, infirmiers, pharmaciens, travailleurs sociaux.', [LG('former aidants et professionnels (repérage, outils simples)', 'bleu', { puce: '1' }), LG('réseaux locaux : médecins, infirmiers, pharmaciens, social', 'bleu', { puce: '2' })]),
  E('Troisième : des <b>actions concrètes</b>, livraison adaptée, enrichissement, ateliers conviviaux. Quatrième : un <b>suivi coordonné</b>, avec un relais pluridisciplinaire si besoin.', [LG('actions concrètes : livraison adaptée, enrichissement, ateliers conviviaux', 'bleu', { puce: '3' }), LG('suivi coordonné, relais pluridisciplinaire si besoin', 'bleu', { puce: '4' })]),
  E('Et toutes les situations se résument en un <b>réflexe en 4 mots</b>.', [EFF(), T('Le réflexe en 4 mots'), RANG([{ titre: '1 · Diagnostiquer', c: 'bleu' }, { titre: '2 · Co-construire', c: 'vert' }, { titre: '3 · Adapter', c: 'rouge' }, { titre: '4 · Mesurer les écarts', c: 'noir' }])]),
  E('<b>Diagnostiquer</b>…', [MONTRE(1)]),
  E('… <b>co-construire</b>…', [MONTRE(2)]),
  E('… <b>adapter</b>…', [MONTRE(3)]),
  E('… et <b>mesurer les écarts</b>. D-C-A-M : « Dans Chaque Atelier, Mesure ! »', [MONTRE(4), POST('D-C-A-M : « Dans Chaque Atelier, Mesure ! »', 'astuce')], 'content')
],

/* ---------- FICHE 12 ---------- */
'sp-enjeux-35': [
  E('Dernière ligne droite : les <b>notions clés</b> à savoir réciter. Essaie de dire la définition dans ta tête avant que je l\'écrive !', [T('Les notions clés (1/2)')]),
  E('La <b>santé</b>, selon l\'OMS en 1946… complet bien-être physique, mental et social. Et la <b>santé publique</b>, selon Winslow en 1920… prévenir, prolonger la vie, améliorer la santé par l\'action collective organisée.', [LG('Santé (OMS 1946) : complet bien-être physique, mental et social', 'bleu', { puce: '•' }), LG('Santé publique (Winslow 1920) : prévenir, prolonger, améliorer par l\'action collective organisée', 'bleu', { puce: '•' })]),
  E('La <b>promotion de la santé</b> : donner les moyens d\'agir sur sa santé et ses déterminants, Ottawa 1986. Le <b>modèle de Dahlgren et Whitehead</b> : 5 cercles de déterminants, de l\'individu aux politiques.', [LG('Promotion de la santé : moyens d\'agir sur sa santé et ses déterminants (Ottawa 1986)', 'bleu', { puce: '•' }), LG('Dahlgren-Whitehead : 5 cercles, de l\'individu aux politiques globales', 'bleu', { puce: '•' })]),
  E('La <b>prévention</b> I, II, III : éviter, dépister, limiter les complications. Le <b>PNNS</b> : cadre national de la politique nutritionnelle depuis 2001.', [LG('Prévention I / II / III : éviter / dépister / limiter les complications', 'bleu', { puce: '•' }), LG('PNNS : politique nutritionnelle depuis 2001 (PNNS 4 : 2019-2023)', 'bleu', { puce: '•' })]),
  E('Suite des notions. L\'<b>environnement obésogène</b> : les choix sains y sont plus difficiles et coûteux. Le <b>gradient social</b> : un lien continu et progressif entre position sociale et santé.', [EFF(), T('Les notions clés (2/2)'), LG('Environnement obésogène : choix sains plus difficiles et coûteux', 'vert', { puce: '•' }), LG('Gradient social : lien continu et progressif position sociale ↔ santé', 'vert', { puce: '•' })]),
  E('La <b>précarité alimentaire</b> : pas d\'accès à une alimentation suffisante, diversifiée, de qualité. <b>Désert</b> : pas d\'offre fraîche et abordable ; <b>food swamp</b> : saturation en fast-foods.', [LG('Précarité alimentaire : pas d\'accès à une alimentation suffisante, diversifiée, de qualité', 'vert', { puce: '•' }), LG('Désert / food swamp : pas d\'offre fraîche / saturation en fast-foods', 'vert', { puce: '•' })]),
  E('La <b>littératie nutritionnelle</b> : faire des choix alimentaires éclairés et les appliquer. Et l\'<b>universalisme proportionné</b> : des actions pour tous, avec une intensité adaptée aux besoins.', [LG('Littératie nutritionnelle : choix alimentaires éclairés, et les appliquer', 'vert', { puce: '•' }), LG('Universalisme proportionné : pour tous, intensité selon les besoins', 'vert', { puce: '•' })], 'content')
],
'sp-enjeux-36': [
  E('C\'est le <b>défi final</b> du cours, avec les questions « Je me teste » de ta fiche 12. Je pose la question, tu réponds dans ta tête, puis j\'écris la réponse.', [T('Je me teste !')]),
  E('Cite les 3 chiffres du contexte… 48 % des décès avant 75 ans évitables chez les hommes, moins 5 ans dans le Nord et à La Réunion, et l\'obésité à 22,1 % contre 14,2 %.', [LG('3 chiffres : 48 % · − 5 ans · 22,1 % vs 14,2 %', 'bleu', { puce: '✓' })]),
  E('Les 6 champs de la santé publique ? Surveillance, prévention, promotion, organisation des soins, éducation, planification-évaluation. Les 5 axes d\'Ottawa ? Politiques saines, environnements favorables, action communautaire, compétences individuelles, réorientation des services.', [LG('6 champs : Sophie Prépare Pour Oscar un Excellent Plat', 'bleu', { puce: '✓' }), LG('5 axes d\'Ottawa : Petit Estomac Content Croque des Radis', 'bleu', { puce: '✓' })]),
  E('Prévention primaire, secondaire, tertiaire en nutrition ? Par exemple : éducation alimentaire ; dépistage de la dénutrition ; prise en charge du DT2. Les ODD de la SNS ? Le 2, faim zéro, et le 3, bonne santé.', [LG('I : éducation alimentaire · II : dépistage · III : prise en charge DT2', 'bleu', { puce: '✓' }), LG('ODD 2 (faim zéro) + ODD 3 (bonne santé)', 'bleu', { puce: '✓' })]),
  E('Les chiffres ? Obésité adulte 17 %, dénutrition 4-10 % à domicile et 15-40 % en institution, viande rouge 500 grammes par semaine maximum.', [EFF(), T('Je me teste (suite)'), LG('obésité 17 % · dénutrition 4-10 % / 15-40 % · viande rouge ≤ 500 g/sem', 'vert', { puce: '✓' })]),
  E('Un paradoxe de la précarité ? Surpoids plus carences. Les 3 indicateurs ? Aide alimentaire, budget alimentaire, indice de privation matérielle. Désert ou food swamp ? Rien de frais, ou trop de fast-foods. Vervins : 150 personnes âgées.', [LG('paradoxe : surpoids + carences', 'vert', { puce: '✓' }), LG('3 indicateurs : aide alimentaire · budget · privation matérielle', 'vert', { puce: '✓' }), LG('désert vs food swamp · Vervins : 150 personnes âgées', 'vert', { puce: '✓' })]),
  E('L\'universalisme proportionné ? Pour tous, avec une intensité selon les besoins, comme les 3 niveaux du Dr Dumont. Et pour évaluer l\'impact : on mesure l\'évolution des <b>écarts</b>, pas seulement la moyenne. Bravo, tu as fait le tour du cours ! Place aux dernières questions.', [LG('universalisme proportionné : universel · renforcé · spécialisé', 'vert', { puce: '✓' }), LG('évaluer : l\'évolution des écarts (évaluation différentielle)', 'vert', { puce: '✓' })], 'content')
]
};
