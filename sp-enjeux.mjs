// Cours : Enjeux de santé publique (Santé publique › Promotion et éducation en SP › cours 1)
// Source : fiches 0 à 12 du dossier « 1) Enjeux de SP ».
// RÈGLE : ne jamais renommer ni supprimer un id de leçon ou de question déjà publié.
import { P, L, ESS, AST, CLE, PIEGE, DONC, IMAG, CIT, PERSO, CHIF, TAB, DUO, ETAPES, FRISE, NIV, CERCLES, RET, LIEN, qcm, vf, ordre, paires, E, T, LG, EFF, SOUL, POST, CERC, RANG, MONTRE } from './briques.mjs';
import classe from './sp-enjeux-classe.mjs';

const cours = {
  id: 'sp-enjeux',
  titre: 'Enjeux de santé publique',
  persos: {
    isabelle: { nom: 'Isabelle Moreau', role: 'sociologue', emoji: '👩🏽‍🏫' },
    mehdi: { nom: 'Mehdi', role: 'cartographe', emoji: '🧑🏻‍💻' },
    dumont: { nom: 'Dr Dumont', role: 'médecin de santé publique', emoji: '👨🏼‍⚕️' }
  },
  carte: {
    depart: '48 % des décès avant 75 ans (hommes) sont évitables ; l\'obésité va de 14,2 % (Île-de-France) à 22,1 % (Hauts-de-France). Pourquoi la santé nutritionnelle n\'est-elle pas la même partout, et comment agir collectivement ?',
    etapes: [
      { titre: 'Concepts', verbe: 'Je comprends', question: 'Qu\'est-ce que la santé publique ?', mots: 'OMS 1946 · Winslow 1920 · Ottawa : 5 axes · Dahlgren : 5 cercles · 3 niveaux de prévention' },
      { titre: 'Enjeux', verbe: 'Je priorise', question: 'Quelles priorités en France ?', mots: 'PNNS 1 → 4 · SNS · obésité 17 % · dénutrition, TCA · alimentation durable' },
      { titre: 'Inégalités', verbe: 'J\'analyse', question: 'Pourquoi des écarts ?', mots: 'gradient social · précarité : 11 % (INCA3) · déserts / food swamps · mobilité (CRÉDOC)' },
      { titre: 'Stratégies', verbe: 'J\'agis', question: 'Comment agir sans stigmatiser ?', mots: 'universalisme proportionné · participation, pairs-aidants · évaluation différentielle' }
    ],
    arrivee: 'Manger dépend aussi du territoire et du milieu social : le diététicien agit au niveau populationnel. Territorialiser, co-construire, mesurer les écarts.'
  },
  lecons: [

  /* ================= FICHE 0 ================= */
  {
    id: 'sp-enjeux-01', fiche: 'Fiche 0', ficheTitre: 'Mode d\'emploi & fil rouge',
    titre: 'Trois chiffres pour commencer',
    ecrans: [
      [
        ESS('Les comportements alimentaires ne sont pas de simples choix individuels : ils sont façonnés par <mark>l\'environnement</mark>, <mark>le territoire</mark> et <mark>la position sociale</mark>.'),
        IMAG('Deux garçons naissent le même jour : l\'un à Paris, l\'autre dans le Nord. Ils auront peut-être les mêmes goûts… mais pas les mêmes chances de vivre longtemps. Ce cours explique pourquoi, et ce que le diététicien peut y faire.')
      ],
      [
        P('Le constat de départ tient en trois chiffres :'),
        CHIF('48 %', 'des <b>décès avant 75 ans chez les hommes</b> sont évitables par des actions de <mark>prévention primaire</mark> (INSEE).'),
        CHIF('− 5 ans', 'd\'espérance de vie pour les hommes du <b>Nord</b> et de <b>La Réunion</b>, par rapport à l\'Île-de-France.'),
        CHIF('22,1 %', 'd\'<b>obésité</b> dans les Hauts-de-France, contre <b>14,2 %</b> en Île-de-France (ORS).')
      ],
      [
        P('Autrement dit : près d\'un décès précoce sur deux chez les hommes pourrait être évité <b>avant</b> que la maladie n\'apparaisse, et la santé change selon <b>l\'endroit où l\'on vit</b>.'),
        DONC('Les pratiques professionnelles doivent évoluer vers une <mark>approche populationnelle</mark> : on ne regarde plus seulement le patient en face de soi, mais toute une population.'),
        AST('« <b>48</b> évitables, <b>5</b> ans perdus, <b>22</b> contre <b>14</b>. » Récite-le comme un code : 48 – 5 – 22/14.'),
        CLE('48 % des décès évitables (hommes < 75 ans) · Nord / Réunion : − 5 ans · obésité 22,1 % HdF vs 14,2 % IdF')
      ]
    ],
    questions: [
      qcm('a1', 'Quelle part des décès avant 75 ans chez les hommes serait évitable par la prévention primaire ?', ['48 %', '18 %', '75 %', '5 %'], 'C\'est le chiffre de l\'INSEE : <b>48 %</b>, presque un sur deux.'),
      vf('a2', 'Dans le Nord et à La Réunion, les hommes vivent en moyenne 5 ans de moins qu\'en Île-de-France.', true, 'Vrai : <b>− 5 ans</b> d\'espérance de vie.')
    ],
    revision: [
      paires('r1', 'Relie chaque chiffre du constat de départ.', [
        ['Obésité Hauts-de-France', '22,1 %'], ['Obésité Île-de-France', '14,2 %'], ['Décès évitables (hommes < 75 ans)', '48 %'], ['Écart d\'espérance de vie Nord / IdF', '5 ans']
      ], '48 – 5 – 22/14 : le code du constat de départ.')
    ]
  },
  {
    id: 'sp-enjeux-02', fiche: 'Fiche 0', ficheTitre: 'Mode d\'emploi & fil rouge',
    titre: 'Le fil rouge : l\'observatoire des Hauts-de-France',
    ecrans: [
      [
        P('Tout le cours suit un même cas : l\'<b>ARS des Hauts-de-France</b> pilote un <mark>observatoire territorial de la nutrition</mark>.'),
        P('Il compare trois types de territoires — la <b>métropole</b>, le <b>bassin minier</b> et les <b>zones rurales</b> — et révèle des écarts d\'<b>obésité</b>, de <b>diabète</b> et d\'<b>accès aux soins nutritionnels</b>.'),
        P('Trois personnages vont t\'accompagner :'),
        PERSO('isabelle', 'Je suis sociologue : j\'étudie les <b>inégalités</b>.'),
        PERSO('mehdi', 'Je fais la <b>cartographie des environnements alimentaires</b> : où trouve-t-on quoi à manger ?'),
        PERSO('dumont', 'Je défends l\'<b>universalisme proportionné</b>. Patience, on en parle à la fin du cours !')
      ],
      [
        P('Le cours répond à <b>4 questions</b>, dans un ordre logique :'),
        ETAPES([
          { titre: 'Qu\'est-ce que la santé publique ?', x: 'Fiches 1 à 4 — une approche collective, pas seulement individuelle.' },
          { titre: 'Quels grands enjeux nutritionnels en France ?', x: 'Fiches 5 à 7 — des priorités nationales (PNNS) à décliner sur le terrain.' },
          { titre: 'Pourquoi la santé n\'est-elle pas la même partout ?', x: 'Fiches 8 et 9 — le milieu social et le lieu pèsent autant que les choix individuels.' },
          { titre: 'Comment agir sans stigmatiser ?', x: 'Fiche 10 — universalisme proportionné, participation citoyenne, évaluation.' }
        ]),
        AST('Le fil logique en 4 verbes : <b>je comprends</b> (concepts) → <b>je priorise</b> (enjeux) → <b>j\'analyse</b> (inégalités) → <b>j\'agis</b> (stratégies).')
      ],
      [
        P('Ta méthode de révision, d\'après tes fiches : <b>lire · cacher · réciter</b>.'),
        P('Dans Diét\'Académie, ce sont les questions qui font le « cacher-réciter » pour toi : après chaque leçon, puis dans les révisions, au moment où tu commences à oublier.'),
        DONC('Le message du cours : pour comprendre ce que mange une population, il faut regarder <b>où</b> et <b>comment</b> elle vit.')
      ]
    ],
    questions: [
      ordre('a1', 'Remets les 4 étapes du cours dans l\'ordre.', ['Je comprends (concepts)', 'Je priorise (enjeux)', 'J\'analyse (inégalités)', 'J\'agis (stratégies)'], 'Comprendre → prioriser → analyser → agir.'),
      vf('a2', 'L\'observatoire territorial de la nutrition du cours est piloté par l\'ARS des Hauts-de-France.', true, 'Vrai : c\'est le fil rouge de tout le cours.')
    ],
    revision: [
      paires('r1', 'Qui fait quoi dans le cas du cours ?', [
        ['Isabelle Moreau', 'Sociologue des inégalités'], ['Mehdi', 'Cartographie des environnements alimentaires'], ['Dr Dumont', 'Universalisme proportionné']
      ], 'Isabelle analyse, Mehdi cartographie, le Dr Dumont propose la stratégie.')
    ]
  },

  /* ================= FICHE 1 ================= */
  {
    id: 'sp-enjeux-03', fiche: 'Fiche 1', ficheTitre: 'De la santé à la santé publique',
    titre: 'La santé : bien plus que « ne pas être malade »',
    ecrans: [
      [
        ESS('On est passé d\'une vision <b>biomédicale</b> (traiter la maladie) à une approche <b>globale, collective et préventive</b>.'),
        DUO({ titre: 'Approche biomédicale', items: ['La santé = l\'<b>absence de maladie</b>', 'On agit sur les <b>symptômes</b> (soin curatif)'] },
            { titre: 'Approche globale', items: ['La santé = un <b>bien-être physique, mental et social</b>', 'On agit sur les <b>déterminants</b> (prévention)'] })
      ],
      [
        P('C\'est l\'OMS qui a posé la définition de référence, dès 1946 :'),
        CIT('un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie ou d\'infirmité', 'OMS, 1946'),
        AST('Trois mots, trois « étages » : <b>physique</b> (le corps), <b>mental</b> (la tête), <b>social</b> (les autres). L\'OMS, c\'est « le corps, la tête et les autres ».')
      ],
      [
        P('Si la santé dépend aussi du social, alors les <b>déterminants sociaux</b> comptent : <mark>logement, éducation, revenus, cohésion sociale</mark>. Ils conditionnent les comportements et l\'accès à un bon état nutritionnel.'),
        IMAG('Une patiente vit dans un quartier sans primeur, avec un petit budget et peu de temps. La meilleure consultation du monde ne changera ni son quartier, ni son budget.'),
        DONC('Les consultations individuelles ne peuvent pas, <b>seules</b>, résoudre l\'obésité liée à la précarité ou aux déserts alimentaires.')
      ]
    ],
    questions: [
      qcm('a1', 'Selon l\'OMS (1946), la santé est…', ['un état de complet bien-être physique, mental et social', 'l\'absence de maladie ou d\'infirmité', 'un bon équilibre alimentaire et sportif', 'la capacité à travailler sans arrêt maladie'], 'La définition OMS dépasse l\'absence de maladie : <b>physique, mental, social</b>.'),
      vf('a2', 'Dans l\'approche globale de la santé, on agit surtout sur les symptômes.', false, 'Faux : agir sur les symptômes, c\'est l\'approche <b>biomédicale</b>. L\'approche globale agit sur les <b>déterminants</b>.')
    ],
    revision: [
      qcm('r1', 'Lequel de ces éléments est un déterminant social de la santé cité dans le cours ?', ['Le logement', 'Le groupe sanguin', 'La taille', 'Le patrimoine génétique'], 'Les déterminants sociaux : <b>logement, éducation, revenus, cohésion sociale</b>.')
    ]
  },
  {
    id: 'sp-enjeux-04', fiche: 'Fiche 1', ficheTitre: 'De la santé à la santé publique',
    titre: 'La santé publique selon Winslow',
    ecrans: [
      [
        P('Si la santé est une affaire collective, il faut une discipline pour s\'en occuper : la <b>santé publique</b>. Sa définition classique date de <b>1920</b> :'),
        CIT('La science et l\'art de prévenir la maladie, de prolonger la vie et d\'améliorer la santé par l\'action collective organisée de la société', 'Winslow, 1920')
      ],
      [
        P('Décortiquons : <b>3 buts</b> et <b>1 moyen</b>.'),
        ETAPES([
          { n: '🛡️', titre: 'Prévenir la maladie' },
          { n: '⏳', titre: 'Prolonger la vie' },
          { n: '🌱', titre: 'Améliorer la santé' },
          { n: '🤝', titre: '… par l\'action collective organisée de la société', x: 'C\'est le mot-clé : pas un soignant seul, mais toute la société organisée.' }
        ]),
        AST('Winslow = « 3 verbes + 1 moyen » : prévenir, prolonger, améliorer… <b>ensemble</b>. Et pour les dates : Winslow (1920) vient <b>avant</b> l\'OMS (1946).')
      ]
    ],
    questions: [
      qcm('a1', 'Qui a défini la santé publique comme « la science et l\'art de prévenir la maladie, de prolonger la vie et d\'améliorer la santé par l\'action collective organisée » ?', ['Winslow, 1920', 'L\'OMS, 1946', 'La Charte d\'Ottawa, 1986', 'Dahlgren et Whitehead, 1991'], 'C\'est <b>Winslow, en 1920</b>.'),
      vf('a2', 'Pour Winslow, la santé publique repose sur l\'action collective organisée de la société.', true, 'Vrai : c\'est le cœur de sa définition.')
    ],
    revision: [
      qcm('r1', 'Selon Winslow, quels sont les trois buts de la santé publique ?', ['Prévenir la maladie, prolonger la vie, améliorer la santé', 'Soigner, guérir, rééduquer', 'Informer, dépister, traiter', 'Surveiller, punir, contrôler'], '3 verbes : <b>prévenir, prolonger, améliorer</b>.')
    ]
  },
  {
    id: 'sp-enjeux-05', fiche: 'Fiche 1', ficheTitre: 'De la santé à la santé publique',
    titre: 'Les 6 champs d\'intervention',
    ecrans: [
      [
        P('La santé publique agit dans <b>6 champs</b>. Chacun a un rôle précis :'),
        TAB(['Champ', 'Rôle'], [
          ['Surveillance épidémiologique', 'Collecter, analyser, interpréter les données → fixer les priorités, juger l\'efficacité'],
          ['Prévention', '3 niveaux : primaire, secondaire, tertiaire'],
          ['Promotion de la santé', 'Donner les moyens d\'agir sur ses déterminants'],
          ['Organisation des soins', 'Accessibilité et qualité des services'],
          ['Éducation pour la santé', 'Compétences individuelles et collectives'],
          ['Planification et évaluation', 'Efficacité et adaptation aux besoins']
        ])
      ],
      [
        AST('Une phrase pour les 6 initiales : « <b>S</b>ophie <b>P</b>répare <b>P</b>our <b>O</b>scar un <b>E</b>xcellent <b>P</b>lat ».<br>Surveillance · Prévention · Promotion · Organisation des soins · Éducation · Planification-évaluation.'),
        IMAG('Imagine la santé publique comme une cuisine collective : on <b>surveille</b> ce que mangent les gens, on <b>prévient</b> les problèmes, on <b>donne les moyens</b> de bien manger, on <b>organise</b> le service, on <b>apprend</b> à cuisiner, et on <b>planifie puis évalue</b> le menu.'),
        RET('Cache et récite : touche une carte pour vérifier.', [
          { recto: 'Surveillance épidémiologique', verso: 'Collecter, analyser, interpréter les données' },
          { recto: 'Promotion de la santé', verso: 'Donner les moyens d\'agir sur ses déterminants' },
          { recto: 'Planification et évaluation', verso: 'Efficacité et adaptation aux besoins' }
        ])
      ]
    ],
    questions: [
      paires('a1', 'Relie chaque champ à son rôle.', [
        ['Surveillance épidémiologique', 'Collecter et analyser les données'], ['Prévention', 'Primaire, secondaire, tertiaire'], ['Organisation des soins', 'Accessibilité et qualité des services']
      ], 'Sophie Prépare Pour Oscar un Excellent Plat !'),
      vf('a2', 'L\'éducation pour la santé fait partie des 6 champs d\'intervention de la santé publique.', true, 'Vrai : elle développe les <b>compétences individuelles et collectives</b>.')
    ],
    revision: [
      qcm('r1', 'Lequel n\'est PAS un des 6 champs d\'intervention de la santé publique ?', ['La recherche pharmaceutique', 'La surveillance épidémiologique', 'L\'organisation des soins', 'L\'éducation pour la santé'], 'Les 6 : surveillance, prévention, promotion, organisation des soins, éducation, planification-évaluation.'),
      paires('r2', 'Relie chaque champ à son rôle.', [
        ['Promotion de la santé', 'Donner les moyens d\'agir sur ses déterminants'], ['Éducation pour la santé', 'Compétences individuelles et collectives'], ['Planification et évaluation', 'Efficacité et adaptation aux besoins']
      ], 'Les trois derniers champs de « Sophie Prépare Pour Oscar un Excellent Plat ».')
    ]
  },
  {
    id: 'sp-enjeux-06', fiche: 'Fiche 1', ficheTitre: 'De la santé à la santé publique',
    titre: 'Le rôle du diététicien en santé publique',
    ecrans: [
      [
        P('En santé publique, le diététicien ne se limite pas à la consultation. Il fait :'),
        L(['de l\'<b>éducation nutritionnelle</b>,', 'de la <b>prévention</b>,', 'de la <b>promotion de la santé</b>.']),
        P('Il contribue aussi :'),
        L(['aux <b>politiques</b> nutritionnelles (exemple : le <b>PNNS</b>),', 'aux <b>dépistages</b>,', 'à l\'<b>évaluation des actions collectives</b>.'])
      ],
      [
        P('Il garde une <b>vision systémique</b> : il relie trois niveaux.'),
        NIV([{ titre: 'Individu', x: 'la personne' }, { titre: 'Communauté', x: 'le groupe, le quartier' }, { titre: 'Environnement', x: 'le cadre de vie' }]),
        DONC('Il faut de <b>nouvelles compétences</b> : <mark>animation de groupes</mark>, <mark>communication communautaire</mark>, <mark>évaluation d\'impact</mark>.'),
        CLE('OMS 1946 : bien-être physique, mental, social · Winslow 1920 : action collective organisée · 6 champs')
      ]
    ],
    questions: [
      qcm('a1', 'Quelles nouvelles compétences la santé publique demande-t-elle au diététicien ?', ['Animation de groupes, communication communautaire, évaluation d\'impact', 'Prescription de médicaments et actes infirmiers', 'Gestion comptable et marketing', 'Chirurgie bariatrique et suivi post-opératoire'], 'Animer, communiquer avec une communauté, mesurer l\'impact.'),
      vf('a2', 'La vision systémique du diététicien relie l\'individu, la communauté et l\'environnement.', true, 'Vrai : individu – communauté – environnement.')
    ],
    revision: [
      qcm('r1', 'À quelle politique nationale le diététicien peut-il contribuer, d\'après le cours ?', ['Le PNNS', 'Le Code de la route', 'La politique agricole commune uniquement', 'Aucune : ce n\'est pas son rôle'], 'Il contribue aux politiques nutritionnelles, comme le <b>PNNS</b>.')
    ]
  },

  /* ================= FICHE 2 ================= */
  {
    id: 'sp-enjeux-07', fiche: 'Fiche 2', ficheTitre: 'La promotion de la santé et la Charte d\'Ottawa',
    titre: 'Promouvoir la santé, ce n\'est pas seulement prévenir',
    ecrans: [
      [
        ESS('Promouvoir la santé, c\'est donner aux personnes et aux communautés <b>les moyens d\'agir sur leur santé</b>, là où elles vivent.'),
        P('La promotion de la santé va <b>au-delà de la prévention</b> : elle donne aux individus et aux communautés les moyens d\'<b>améliorer leur santé</b> et d\'avoir un <b>plus grand contrôle</b> sur elle, en agissant sur ses <mark>déterminants</mark>.'),
        P('La santé « se crée et se vit » dans les <mark>milieux de vie quotidiens</mark> : le quartier, l\'école, le travail…')
      ],
      [
        DUO({ titre: 'Prévention', items: ['<b>Éviter</b> une maladie'] }, { titre: 'Promotion', items: ['Donner les <b>moyens d\'agir</b> sur sa santé et ses déterminants'] }),
        PIEGE('Ne confonds pas <b>prévention</b> (éviter une maladie) et <b>promotion</b> (donner les moyens d\'agir sur sa santé et ses déterminants).'),
        P('En pratique : <b>dépasser la simple information nutritionnelle</b> pour agir sur l\'<b>environnement alimentaire</b> et les <b>déterminants sociaux</b>.'),
        AST('<b>Pro</b>motion = « je te donne le <b>pouvoir</b> ». Prévention = « je t\'évite le problème ».')
      ]
    ],
    questions: [
      vf('a1', 'Prévention et promotion de la santé, c\'est la même chose.', false, 'Faux, c\'est le piège d\'examen : prévenir = <b>éviter</b> une maladie ; promouvoir = donner les <b>moyens d\'agir</b>.'),
      qcm('a2', 'La promotion de la santé consiste à…', ['donner aux personnes et communautés les moyens d\'agir sur leur santé et ses déterminants', 'éviter l\'apparition d\'une maladie précise', 'dépister une maladie à un stade précoce', 'soigner les complications d\'une maladie'], 'Promouvoir = donner le pouvoir d\'agir.')
    ],
    revision: [
      qcm('r1', 'D\'après la promotion de la santé, où la santé « se crée et se vit »-elle ?', ['Dans les milieux de vie quotidiens', 'À l\'hôpital', 'Dans le cabinet du diététicien', 'Dans les laboratoires de recherche'], 'Dans les <b>milieux de vie quotidiens</b> : quartier, école, travail…')
    ]
  },
  {
    id: 'sp-enjeux-08', fiche: 'Fiche 2', ficheTitre: 'La promotion de la santé et la Charte d\'Ottawa',
    titre: 'Les 5 axes de la Charte d\'Ottawa',
    ecrans: [
      [
        P('En <b>1986</b>, la <b>Charte d\'Ottawa</b> fixe la feuille de route de la promotion de la santé en <b>5 axes</b> :'),
        ETAPES([
          { titre: 'Politiques publiques saines', x: 'Intégrer la santé dans toutes les politiques sectorielles.' },
          { titre: 'Environnements favorables', x: 'Des conditions de vie et de travail qui soutiennent la santé.' },
          { titre: 'Renforcement de l\'action communautaire', x: 'Participation citoyenne, empowerment.' },
          { titre: 'Développement des compétences individuelles', x: 'Éducation et information adaptées aux besoins.' },
          { titre: 'Réorientation des services de santé', x: 'Vers des approches préventives et promotionnelles.' }
        ])
      ],
      [
        AST('Les initiales P-E-C-C-R : « <b>P</b>etit <b>E</b>stomac <b>C</b>ontent <b>C</b>roque des <b>R</b>adis ».<br>Politiques · Environnements · Communautaire · Compétences · Réorientation.'),
        RET('Cache et récite : de quoi parle chaque axe ?', [
          { recto: 'P — Politiques publiques saines', verso: 'La santé dans toutes les politiques' },
          { recto: 'E — Environnements favorables', verso: 'Conditions de vie et de travail favorables' },
          { recto: 'C — Action communautaire', verso: 'Participation citoyenne, empowerment' },
          { recto: 'C — Compétences individuelles', verso: 'Éducation et information adaptées' },
          { recto: 'R — Réorientation des services', verso: 'Vers le préventif et le promotionnel' }
        ]),
        CLE('Ottawa 1986 : politiques saines · environnements favorables · action communautaire · compétences individuelles · réorientation des services')
      ]
    ],
    questions: [
      qcm('a1', 'En quelle année a été adoptée la Charte d\'Ottawa ?', ['1986', '1946', '1920', '2001'], '<b>1986</b>. (OMS = 1946, Winslow = 1920, PNNS = 2001.)'),
      qcm('a2', 'Lequel est l\'un des 5 axes de la Charte d\'Ottawa ?', ['Créer des environnements favorables', 'Augmenter le nombre de médecins', 'Développer les traitements médicamenteux', 'Dépister toute la population'], 'Petit Estomac Content Croque des Radis : le E = <b>environnements favorables</b>.')
    ],
    revision: [
      paires('r1', 'Relie chaque axe d\'Ottawa à ce qu\'il veut dire.', [
        ['Politiques publiques saines', 'La santé dans toutes les politiques'], ['Action communautaire', 'Participation citoyenne, empowerment'], ['Compétences individuelles', 'Éducation et information adaptées'], ['Réorientation des services', 'Vers le préventif et le promotionnel']
      ], 'P-E-C-C-R.'),
      qcm('r2', 'Quel axe manque ? Politiques publiques saines · ??? · Action communautaire · Compétences individuelles · Réorientation des services', ['Environnements favorables', 'Dépistage organisé', 'Soins curatifs', 'Surveillance épidémiologique'], 'Le E de « Petit Estomac » : <b>environnements favorables</b>.')
    ]
  },
  {
    id: 'sp-enjeux-09', fiche: 'Fiche 2', ficheTitre: 'La promotion de la santé et la Charte d\'Ottawa',
    titre: 'Ottawa en nutrition : agir à plusieurs, et avec les gens',
    ecrans: [
      [
        P('En nutrition, appliquer Ottawa demande une <b>approche multisectorielle</b> : travailler avec d\'autres secteurs que la santé.'),
        TAB(['Avec qui ?', 'Pour quoi faire ?'], [
          ['Les urbanistes', 'Aménager des cuisines collectives'],
          ['La restauration scolaire', 'Faire de l\'éducation au goût'],
          ['Les associations', 'Animer des ateliers culinaires']
        ]),
        P('Cette <mark>intersectorialité</mark> est un <b>défi majeur</b>… mais <b>indispensable</b> à l\'efficacité.')
      ],
      [
        P('Ottawa demande aussi une <b>approche participative</b> : les populations deviennent <b>actrices de leur santé</b>.'),
        P('Pour toi, cela veut dire développer tes compétences en <mark>animation de groupes</mark> et en <mark>mobilisation communautaire</mark>.'),
        DONC('La promotion de la santé agit <b>avec</b> les populations et <b>sur leur environnement</b>, pas seulement sur leurs connaissances.')
      ]
    ],
    questions: [
      paires('a1', 'Relie chaque partenaire à l\'action citée dans le cours.', [
        ['Urbanistes', 'Cuisines collectives'], ['Restauration scolaire', 'Éducation au goût'], ['Associations', 'Ateliers culinaires']
      ], 'Trois secteurs, trois actions : c\'est l\'intersectorialité.'),
      vf('a2', 'Pour la promotion de la santé, il suffit d\'améliorer les connaissances des gens.', false, 'Faux : elle agit <b>avec</b> les populations et <b>sur leur environnement</b>.')
    ],
    revision: [
      qcm('r1', 'Comment appelle-t-on le fait de travailler avec l\'urbanisme, l\'école et les associations pour la nutrition ?', ['L\'intersectorialité (approche multisectorielle)', 'Le gradient social', 'La prévention tertiaire', 'La littératie'], 'Un <b>défi majeur mais indispensable</b>.')
    ]
  },

  /* ================= FICHE 3 ================= */
  {
    id: 'sp-enjeux-10', fiche: 'Fiche 3', ficheTitre: 'Le modèle de Dahlgren et Whitehead',
    titre: 'Les 5 cercles de Dahlgren et Whitehead',
    ecrans: [
      [
        ESS('<b>5 cercles</b> de déterminants, de l\'individu aux politiques globales : agir sur un seul niveau ne suffit pas.'),
        P('<b>Dahlgren et Whitehead (1991)</b> représentent les déterminants de la santé en <b>cercles concentriques</b>. Ce modèle sert à <b>analyser un problème nutritionnel</b> et à <b>identifier les leviers d\'action</b>.'),
        CERCLES('Les 5 cercles de Dahlgren et Whitehead', [
          { titre: 'Âge, sexe, facteurs héréditaires', x: 'au centre' },
          { titre: 'Modes de vie individuels' },
          { titre: 'Réseaux sociaux et communautaires' },
          { titre: 'Conditions de vie et de travail', x: 'agriculture et production alimentaire, formation, environnement de travail, chômage, eau et hygiène, services de santé, logement' },
          { titre: 'Conditions socio-économiques, culturelles et environnementales', x: 'politiques économiques, fiscales, sociales' }
        ])
      ],
      [
        TAB(['Cercle', 'Contenu', 'À retenir'], [
          ['1 (centre)', 'Facteurs individuels : âge, sexe, patrimoine génétique', 'Non modifiables, influencent la susceptibilité'],
          ['2', 'Comportements individuels : alimentation, activité physique, tabac, alcool', 'Choix personnels influencés par l\'environnement'],
          ['3', 'Influences sociales et communautaires : réseaux sociaux, normes culturelles, capital social', 'Adoption et maintien des bons comportements'],
          ['4', 'Conditions de vie et de travail : logement, éducation, emploi, services de santé…', 'Accès aux ressources pour bien manger'],
          ['5 (externe)', 'Conditions socio-économiques, culturelles et environnementales : politiques économiques, fiscales, sociales', 'Influencent tous les niveaux ; politiques nationales et européennes']
        ])
      ],
      [
        AST('Du centre vers l\'extérieur, comme une phrase qui s\'élargit : <b>moi</b> (1) → <b>mes habitudes</b> (2) → <b>mes proches</b> (3) → <b>mon cadre de vie</b> (4) → <b>la société</b> (5).'),
        CLE('1 individu · 2 modes de vie · 3 réseaux sociaux · 4 conditions de vie et de travail · 5 conditions globales')
      ]
    ],
    classe: [
      E('Bonjour Inès ! Aujourd\'hui, un modèle qui tombe souvent à l\'examen : celui de <b>Dahlgren et Whitehead</b>, de <b>1991</b>.', [T('Dahlgren & Whitehead (1991)')]),
      E('Leur idée : ta santé dépend de <b>déterminants</b>, rangés en <b>cercles concentriques</b>, comme les couches d\'un oignon. On part de toi, au centre… jusqu\'à la société tout entière.', [LG('Les déterminants de la santé en 5 cercles', 'bleu', { taille: 'petit' }), CERC([
        { titre: 'Âge, sexe, hérédité', x: 'non modifiables' },
        { titre: 'Modes de vie individuels', x: 'alimentation, activité physique, tabac, alcool' },
        { titre: 'Réseaux sociaux et communautaires', x: 'normes culturelles, capital social' },
        { titre: 'Conditions de vie et de travail', x: 'logement, éducation, emploi, services de santé…' },
        { titre: 'Conditions socio-économiques, culturelles, environnementales', x: 'politiques économiques, fiscales, sociales' }
      ])]),
      E('Au centre, cercle 1 : <b>toi</b>. Ton âge, ton sexe, ton patrimoine génétique. Ça, on ne peut <b>pas</b> le modifier… mais ça influence ta fragilité face aux maladies.', [MONTRE(1)]),
      E('Cercle 2 : tes <b>modes de vie</b>. Ce que tu manges, ton activité physique, le tabac, l\'alcool. Ce sont des choix personnels… mais influencés par ce qu\'il y a autour de toi.', [MONTRE(2)]),
      E('Cercle 3 : tes <b>réseaux sociaux et communautaires</b>. Ta famille, tes amis, les normes de ton milieu. Ce sont eux qui t\'aident à adopter et à <b>garder</b> de bonnes habitudes… ou pas.', [MONTRE(3)]),
      E('Cercle 4 : tes <b>conditions de vie et de travail</b>. Logement, éducation, emploi, services de santé… Bref : ton <b>accès aux ressources</b> pour bien manger.', [MONTRE(4)]),
      E('Et le cercle 5, tout autour : les conditions <b>socio-économiques, culturelles et environnementales</b>. Les politiques économiques, fiscales, sociales, nationales et européennes. Elles influencent <b>tous</b> les autres cercles.', [MONTRE(5)]),
      E('À quoi ça sert, concrètement ? À <b>analyser un problème nutritionnel</b>, et à trouver les <b>leviers d\'action</b>. Et le message clé : agir sur un seul cercle ne suffit pas.', [EFF(), T('À quoi ça sert ?'), LG('Analyser un problème nutritionnel', 'noir', { puce: '→' }), LG('Identifier les leviers d\'action', 'noir', { puce: '→' }), LG('Agir sur UN seul niveau ne suffit pas !', 'rouge', { taille: 'grand' }), SOUL()]),
      E('Mon astuce pour l\'ordre : ça s\'élargit comme une phrase. <b>Moi</b>, <b>mes habitudes</b>, <b>mes proches</b>, <b>mon cadre de vie</b>, <b>la société</b>.', [POST('moi → mes habitudes → mes proches → mon cadre de vie → la société', 'astuce')]),
      E('Et voilà la ligne de ta fiche à savoir par cœur. Lis-la bien, je t\'interroge juste après !', [POST('1 individu · 2 modes de vie · 3 réseaux sociaux · 4 conditions de vie et de travail · 5 conditions globales', 'cle')], 'content')
    ],
    questions: [
      ordre('a1', 'Remets les cercles dans l\'ordre, du centre vers l\'extérieur.', ['Âge, sexe, hérédité', 'Modes de vie individuels', 'Réseaux sociaux et communautaires', 'Conditions de vie et de travail', 'Conditions socio-économiques, culturelles, environnementales'], 'Moi → mes habitudes → mes proches → mon cadre de vie → la société.'),
      vf('a2', 'Les facteurs du cercle central (âge, sexe, génétique) sont modifiables.', false, 'Faux : ils sont <b>non modifiables</b>, mais influencent la susceptibilité.')
    ],
    revision: [
      qcm('r1', 'Dans quel cercle de Dahlgren et Whitehead se trouve le logement ?', ['Cercle 4 : conditions de vie et de travail', 'Cercle 2 : modes de vie individuels', 'Cercle 3 : réseaux sociaux', 'Cercle 1 : facteurs individuels'], 'Le logement fait partie des <b>conditions de vie et de travail</b> (cercle 4).'),
      ordre('r2', 'Remets ces repères dans l\'ordre chronologique.', ['Winslow : définition de la santé publique (1920)', 'OMS : définition de la santé (1946)', 'Charte d\'Ottawa (1986)', 'Modèle de Dahlgren et Whitehead (1991)', 'Lancement du PNNS (2001)'], '1920 → 1946 → 1986 → 1991 → 2001.')
    ]
  },
  {
    id: 'sp-enjeux-11', fiche: 'Fiche 3', ficheTitre: 'Le modèle de Dahlgren et Whitehead',
    titre: 'L\'obésité infantile, cercle par cercle',
    ecrans: [
      [
        P('Appliquons le modèle à un exemple : l\'<b>obésité infantile</b>. Chaque cercle apporte sa part :'),
        ETAPES([
          { n: '1', titre: 'Prédisposition génétique' },
          { n: '2', titre: 'Habitudes alimentaires familiales' },
          { n: '3', titre: 'Influence des pairs à l\'école' },
          { n: '4', titre: 'Restauration scolaire et accès aux équipements sportifs' },
          { n: '5', titre: 'Taxation des produits sucrés' }
        ])
      ],
      [
        PERSO('isabelle', 'Promouvoir les fruits et légumes est <b>inefficace</b> là où l\'offre est <b>inexistante</b> ou <b>trop chère</b>.'),
        IMAG('Dire « mange des fruits » à un enfant dont le quartier n\'a pas de primeur, c\'est agir sur le cercle 2 en oubliant le cercle 4.'),
        DONC('Une intervention efficace agit sur <b>plusieurs niveaux à la fois</b>, pas seulement sur les comportements individuels.')
      ]
    ],
    questions: [
      qcm('a1', 'Dans l\'exemple de l\'obésité infantile, la taxation des produits sucrés correspond à quel cercle ?', ['Cercle 5 : conditions socio-économiques (politiques)', 'Cercle 2 : modes de vie', 'Cercle 3 : réseaux sociaux', 'Cercle 1 : facteurs individuels'], 'Une taxe = une <b>politique fiscale</b> → cercle 5.'),
      vf('a2', 'Une intervention efficace agit sur plusieurs niveaux à la fois.', true, 'Vrai : agir sur un seul cercle ne suffit pas.')
    ],
    revision: [
      paires('r1', 'Obésité infantile : relie chaque facteur à son cercle.', [
        ['Prédisposition génétique', 'Cercle 1'], ['Habitudes alimentaires familiales', 'Cercle 2'], ['Influence des pairs à l\'école', 'Cercle 3'], ['Restauration scolaire, équipements sportifs', 'Cercle 4'], ['Taxation des produits sucrés', 'Cercle 5']
      ], 'Moi → mes habitudes → mes proches → mon cadre de vie → la société.'),
      qcm('r2', 'Selon Isabelle Moreau, pourquoi promouvoir les fruits et légumes peut-il être inefficace ?', ['Parce que l\'offre est inexistante ou trop chère dans certains territoires', 'Parce que les fruits et légumes sont peu utiles', 'Parce que les gens connaissent déjà les messages', 'Parce que les écoles refusent d\'en servir'], 'On ne peut pas choisir ce qui n\'est pas disponible ou trop cher.')
    ]
  },

  /* ================= FICHE 4 ================= */
  {
    id: 'sp-enjeux-12', fiche: 'Fiche 4', ficheTitre: 'Les 3 niveaux de prévention',
    titre: 'Primaire, secondaire, tertiaire',
    ecrans: [
      [
        ESS('<b>Primaire</b> = éviter, <b>secondaire</b> = dépister, <b>tertiaire</b> = limiter les complications.'),
        P('Cette classification organise les interventions selon le <b>stade d\'évolution</b> du problème de santé. Elle guide la définition des <b>objectifs</b> et l\'<b>évaluation</b>.'),
        NIV([
          { titre: '1 · Primaire : ÉVITER', x: 'avant que la maladie n\'apparaisse' },
          { titre: '2 · Secondaire : DÉPISTER', x: 'quand le trouble débute' },
          { titre: '3 · Tertiaire : LIMITER', x: 'quand la maladie est installée' }
        ], 'egale')
      ],
      [
        TAB(['Niveau', 'Objectif', 'Pour qui ?', 'Exemples en nutrition'], [
          ['Primaire', 'Éviter l\'apparition en agissant sur les facteurs de risque', 'Population en bonne santé', 'Éducation alimentaire en population générale, promotion de l\'allaitement maternel, environnement alimentaire des collectivités'],
          ['Secondaire', 'Dépister précocement pour limiter l\'évolution', 'Personnes à risque, trouble débutant', 'Dépistage du surpoids/obésité, de la dénutrition du sujet âgé, des carences'],
          ['Tertiaire', 'Limiter les complications, prévenir les rechutes, améliorer la qualité de vie', 'Personnes malades', 'Prise en charge du DT2, des maladies cardiovasculaires, des TCA']
        ]),
        AST('<b>Avant</b> la maladie (primaire) · <b>au début</b> (secondaire) · <b>après</b>, quand elle est là (tertiaire). É-D-L : Éviter, Dépister, Limiter.')
      ]
    ],
    classe: [
      E('On attaque un grand classique : les <b>3 niveaux de prévention</b>. En une phrase : primaire, on <b>évite</b> ; secondaire, on <b>dépiste</b> ; tertiaire, on <b>limite</b> les complications.', [T('Les 3 niveaux de prévention')]),
      E('On les classe selon le <b>stade d\'évolution</b> du problème de santé : avant qu\'il n\'apparaisse, quand il débute, ou quand la maladie est installée. Et ce classement guide les <b>objectifs</b> et l\'<b>évaluation</b> d\'une action.', [LG('Classés selon le stade du problème de santé', 'noir', { taille: 'petit' }), RANG([
        { titre: '1 · Primaire = ÉVITER', sous: 'Pour : la population en bonne santé', x: 'Agir sur les facteurs de risque. Ex. : éducation alimentaire en population générale, allaitement maternel, environnement alimentaire des collectivités', c: 'vert' },
        { titre: '2 · Secondaire = DÉPISTER', sous: 'Pour : les personnes à risque, trouble débutant', x: 'Dépister tôt pour limiter l\'évolution. Ex. : surpoids/obésité, dénutrition du sujet âgé, carences', c: 'bleu' },
        { titre: '3 · Tertiaire = LIMITER', sous: 'Pour : les personnes malades', x: 'Limiter les complications, prévenir les rechutes, améliorer la qualité de vie. Ex. : DT2, maladies cardiovasculaires, TCA', c: 'rouge' }
      ])]),
      E('Niveau 1, la prévention <b>primaire</b> : on veut <b>éviter</b> que le problème apparaisse, chez des gens en bonne santé. Par exemple l\'éducation alimentaire pour tous, la promotion de l\'allaitement maternel, ou l\'environnement alimentaire des collectivités.', [MONTRE(1)]),
      E('Niveau 2, la prévention <b>secondaire</b> : on <b>dépiste tôt</b>, chez des personnes à risque ou avec un trouble qui débute. Le surpoids, la dénutrition du sujet âgé, les carences.', [MONTRE(2)]),
      E('Pourquoi dépister ? Pour une <b>prise en charge précoce</b>, avant les complications métaboliques ou fonctionnelles.', [], 'reflechit'),
      E('Niveau 3, la prévention <b>tertiaire</b> : la maladie est là. On <b>limite les complications</b>, on prévient les <b>rechutes</b> et on améliore la <b>qualité de vie</b>. Diabète de type 2, maladies cardiovasculaires, TCA.', [MONTRE(3)]),
      E('Mon astuce : É-D-L. <b>Avant</b> la maladie, on Évite. <b>Au début</b>, on Dépiste. <b>Après</b>, quand elle est là, on Limite.', [POST('É-D-L : Éviter (avant) · Dépister (au début) · Limiter (quand elle est là)', 'astuce')]),
      E('Et toi, diététicienne, tu interviens <b>surtout en primaire et en secondaire</b>. Tu <b>contribues</b> aussi au tertiaire, dans une prise en charge <b>multidisciplinaire</b>.', [EFF(), T('Et la diététicienne ?'), LG('Surtout : primaire + secondaire', 'vert', { taille: 'grand' }), SOUL(), LG('Contribue au tertiaire (prise en charge multidisciplinaire)', 'bleu')]),
      E('Attention au piège préféré des examinateurs ! Un <b>diabète de type 2 déjà déclaré</b>, c\'est de la prévention <b>tertiaire</b>, pas secondaire. Pose-toi juste la question : est-ce que la maladie est déjà là ?', [POST('DT2 déjà déclaré = TERTIAIRE (pas secondaire)', 'piege')], 'reflechit'),
      E('Les 3 niveaux sont <b>complémentaires</b> : ils s\'enchaînent tout au long du parcours. On vérifie que c\'est bien rentré ?', [POST('primaire : éviter (bien portants) · secondaire : dépister (précoce) · tertiaire : limiter complications et rechutes', 'cle')], 'content')
    ],
    questions: [
      paires('a1', 'Relie chaque niveau de prévention à son objectif.', [
        ['Primaire', 'Éviter'], ['Secondaire', 'Dépister'], ['Tertiaire', 'Limiter les complications']
      ], 'É-D-L : Éviter, Dépister, Limiter.'),
      qcm('a2', 'Dépister la dénutrition du sujet âgé relève de la prévention…', ['secondaire', 'primaire', 'tertiaire', 'quaternaire'], 'Dépister = <b>secondaire</b>.')
    ],
    revision: [
      qcm('r1', 'La promotion de l\'allaitement maternel relève de la prévention…', ['primaire', 'secondaire', 'tertiaire', 'curative'], 'On agit avant tout problème, en population en bonne santé : <b>primaire</b>.'),
      qcm('r2', 'La prise en charge nutritionnelle d\'un TCA relève de la prévention…', ['tertiaire', 'primaire', 'secondaire', 'universelle'], 'La personne est malade : on limite les complications et les rechutes → <b>tertiaire</b>.')
    ]
  },
  {
    id: 'sp-enjeux-13', fiche: 'Fiche 4', ficheTitre: 'Les 3 niveaux de prévention',
    titre: 'Pourquoi dépister, et où agit le diététicien ?',
    ecrans: [
      [
        P('<b>Pourquoi dépister ?</b> Le dépistage permet une <mark>prise en charge précoce</mark>, <b>avant</b> les complications métaboliques ou fonctionnelles.'),
        P('<b>Où intervient le diététicien ?</b> Principalement en prévention <b>primaire</b> et <b>secondaire</b>. Il <b>contribue</b> aussi à la prévention tertiaire, dans la <b>prise en charge multidisciplinaire</b>.')
      ],
      [
        PIEGE('Prendre en charge un <b>diabète de type 2 déjà déclaré</b> = prévention <b>tertiaire</b>, pas secondaire.'),
        AST('Pose-toi une seule question : « la maladie est-elle <b>déjà là</b> ? » Si oui → tertiaire.'),
        DONC('Les 3 niveaux sont <b>complémentaires</b> : ils s\'articulent tout au long du parcours.'),
        CLE('primaire : éviter (bien portants) · secondaire : dépister (précoce) · tertiaire : limiter complications et rechutes')
      ]
    ],
    questions: [
      vf('a1', 'Prendre en charge un diabète de type 2 déjà déclaré, c\'est de la prévention secondaire.', false, 'Faux : la maladie est déjà là → prévention <b>tertiaire</b>.'),
      qcm('a2', 'Le diététicien intervient principalement en prévention…', ['primaire et secondaire', 'tertiaire uniquement', 'secondaire uniquement', 'aucune : il soigne seulement'], 'Surtout <b>primaire et secondaire</b>, et il contribue à la tertiaire (multidisciplinaire).')
    ],
    revision: [
      qcm('r1', 'À quoi sert le dépistage ?', ['À prendre en charge tôt, avant les complications métaboliques ou fonctionnelles', 'À éviter l\'apparition des facteurs de risque', 'À prévenir les rechutes d\'une maladie installée', 'À remplacer la consultation'], 'Prise en charge <b>précoce</b>.')
    ]
  },

  /* ================= FICHE 5 ================= */
  {
    id: 'sp-enjeux-14', fiche: 'Fiche 5', ficheTitre: 'PNNS et Stratégie nationale de santé',
    titre: 'Le PNNS : 4 versions depuis 2001',
    ecrans: [
      [
        ESS('Le PNNS est le cadre de la politique nutritionnelle française depuis <b>2001</b> ; ses messages doivent être <b>adaptés au territoire</b>.'),
        P('<b>PNNS</b> = Programme National Nutrition Santé. Lancé en <b>2001</b>, il en est à sa <b>4e version (2019-2023)</b>.'),
        P('C\'est un programme <mark>intersectoriel</mark> : il réunit les ministères de la <b>Santé</b>, de l\'<b>Agriculture</b>, de l\'<b>Éducation nationale</b> et des <b>Sports</b>.')
      ],
      [
        FRISE([
          { date: '1', titre: 'PNNS 1 · 2001-2005', x: 'Information et sensibilisation du grand public (slogan activité physique + alimentation équilibrée).' },
          { date: '2', titre: 'PNNS 2 · 2006-2010', x: 'Prévention ciblée sur les populations vulnérables, surveillance nutritionnelle.' },
          { date: '3', titre: 'PNNS 3 · 2011-2015', x: 'Dimension socio-économique des inégalités, interventions en milieu scolaire.' },
          { date: '4', titre: 'PNNS 4 · 2019-2023', x: 'Approche systémique : environnement alimentaire, littératie nutritionnelle.' }
        ]),
        AST('Le PNNS s\'élargit à chaque version : <b>1</b> j\'informe tout le monde → <b>2</b> je cible les vulnérables (et je surveille) → <b>3</b> je regarde le social (et l\'école) → <b>4</b> je change tout le système (environnement + littératie).')
      ]
    ],
    questions: [
      qcm('a1', 'En quelle année le PNNS a-t-il été lancé ?', ['2001', '1986', '2011', '2019'], '<b>2001</b>. La 4e version couvre 2019-2023.'),
      ordre('a2', 'Remets les priorités des PNNS dans l\'ordre (1 → 4).', ['Informer et sensibiliser le grand public', 'Cibler les populations vulnérables, surveiller', 'Inégalités socio-économiques, milieu scolaire', 'Approche systémique : environnement, littératie'], 'Du général au systémique.')
    ],
    revision: [
      paires('r1', 'Relie chaque PNNS à sa priorité.', [
        ['PNNS 1', 'Information du grand public'], ['PNNS 2', 'Populations vulnérables + surveillance'], ['PNNS 3', 'Socio-économique + école'], ['PNNS 4', 'Systémique + littératie']
      ], '1 informe, 2 cible, 3 regarde le social, 4 change le système.'),
      qcm('r2', 'Quels ministères le PNNS réunit-il ?', ['Santé, Agriculture, Éducation nationale, Sports', 'Santé, Intérieur, Justice, Défense', 'Santé uniquement', 'Économie, Culture, Transports, Logement'], 'Un programme <b>intersectoriel</b> à 4 ministères.')
    ]
  },
  {
    id: 'sp-enjeux-15', fiche: 'Fiche 5', ficheTitre: 'PNNS et Stratégie nationale de santé',
    titre: 'Les objectifs du PNNS 4, sur le terrain',
    ecrans: [
      [
        P('Le PNNS 4 fixe des <b>objectifs quantifiés</b>. Côté assiette :'),
        DUO({ titre: '⬆️ Augmenter', items: ['Légumineuses', 'Fruits à coque', 'Fruits et légumes'] }, { titre: '⬇️ Réduire', items: ['Viande hors volaille', 'Charcuterie', 'Sel', 'Produits sucrés'] }),
        P('Et au-delà de l\'assiette :'),
        L(['développer l\'<b>activité physique</b>, réduire la <b>sédentarité</b> ;', 'réduire les <b>inégalités sociales</b> d\'accès à une alimentation favorable à la santé ;', 'améliorer la <b>composition nutritionnelle de l\'offre</b> alimentaire.'])
      ],
      [
        P('<b>Mise en œuvre territoriale</b> : les messages doivent être adaptés :'),
        L(['aux <b>habitudes alimentaires locales</b>,', 'à l\'<b>offre commerciale</b>,', 'aux <b>contraintes socio-économiques</b>,'], ),
        P('… en ciblant les <mark>populations vulnérables</mark>.'),
        AST('Côté assiette : <b>plus de végétal</b> (légumineuses, fruits à coque, fruits et légumes), <b>moins d\'animal transformé, de sel et de sucre</b>.')
      ]
    ],
    questions: [
      qcm('a1', 'Le PNNS 4 vise à augmenter la consommation de…', ['légumineuses, fruits à coque, fruits et légumes', 'viande hors volaille et charcuterie', 'produits sucrés', 'sel'], 'Plus de végétal !'),
      vf('a2', 'Le PNNS 4 veut réduire la charcuterie et le sel.', true, 'Vrai : réduire viande hors volaille, charcuterie, sel, produits sucrés.')
    ],
    revision: [
      qcm('r1', 'Lequel de ces aliments le PNNS 4 veut-il faire RÉDUIRE ?', ['La viande hors volaille', 'Les légumineuses', 'Les fruits à coque', 'Les fruits et légumes'], 'À réduire : viande hors volaille, charcuterie, sel, produits sucrés.'),
      qcm('r2', 'Pour décliner le PNNS sur un territoire, à quoi faut-il adapter les messages ?', ['Aux habitudes alimentaires locales, à l\'offre commerciale et aux contraintes socio-économiques', 'Uniquement à l\'âge du public', 'Aux goûts personnels du diététicien', 'À rien : le message national suffit'], 'Habitudes locales, offre commerciale, contraintes socio-économiques.')
    ]
  },
  {
    id: 'sp-enjeux-16', fiche: 'Fiche 5', ficheTitre: 'PNNS et Stratégie nationale de santé',
    titre: 'La Stratégie nationale de santé et les ODD',
    ecrans: [
      [
        P('La <b>Stratégie Nationale de Santé (SNS) 2018-2022</b> donne une place forte à la nutrition :'),
        L(['la nutrition = <mark>levier prioritaire de prévention primaire</mark>, tout au long de la vie ;', 'un <b>objectif quantifié de réduction de l\'obésité</b> → mobiliser tous les acteurs.']),
        P('Elle intègre les <b>Objectifs de Développement Durable (ODD)</b> de l\'ONU :'),
        DUO({ titre: 'ODD 2', items: ['<b>Faim zéro</b>'] }, { titre: 'ODD 3', items: ['<b>Bonne santé et bien-être</b>'] })
      ],
      [
        PIEGE('ODD : l\'objectif <b>2 = faim zéro</b>, l\'objectif <b>3 = bonne santé et bien-être</b> (pas l\'inverse).'),
        AST('Dans l\'ordre logique : d\'abord <b>manger</b> (2 : faim zéro), ensuite être <b>en bonne santé</b> (3).'),
        P('La SNS a aussi une <b>dimension environnementale</b> : concilier bénéfices nutritionnels et impact environnemental → <b>circuits courts</b>, <b>saisonnalité</b>, <b>réduction du gaspillage</b>.'),
        DONC('Les priorités sont <b>nationales</b>, mais l\'action est <b>locale</b> : il faut <mark>territorialiser</mark>.'),
        CLE('PNNS 2001, 4 versions : 1 information · 2 vulnérables + surveillance · 3 socio-éco + école · 4 systémique + littératie · SNS 2018-2022 · ODD 2 et 3')
      ]
    ],
    questions: [
      qcm('a1', 'L\'ODD 2, c\'est…', ['faim zéro', 'bonne santé et bien-être', 'éducation de qualité', 'lutte contre le changement climatique'], 'Piège classique : <b>2 = faim zéro</b>, 3 = bonne santé.'),
      vf('a2', 'La SNS 2018-2022 fait de la nutrition un levier prioritaire de prévention primaire.', true, 'Vrai, tout au long de la vie.')
    ],
    revision: [
      qcm('r1', 'Complète : « Les priorités sont nationales, mais l\'action est… »', ['locale : il faut territorialiser', 'européenne : il faut harmoniser', 'individuelle : il faut responsabiliser', 'hospitalière : il faut soigner'], 'Territorialiser = adapter au terrain.'),
      qcm('r2', 'Quelle période couvre la Stratégie Nationale de Santé étudiée dans le cours ?', ['2018-2022', '2001-2005', '2019-2023', '2011-2015'], 'SNS <b>2018-2022</b> (ne la confonds pas avec le PNNS 4 : 2019-2023).')
    ]
  },

  /* ================= FICHE 6 ================= */
  {
    id: 'sp-enjeux-17', fiche: 'Fiche 6', ficheTitre: 'Obésité, dénutrition, TCA',
    titre: 'L\'obésité : une affaire de territoire',
    ecrans: [
      [
        ESS('Trois problématiques prioritaires — obésité, dénutrition, TCA — qui demandent toutes d\'agir sur les <b>déterminants</b>, pas seulement sur l\'individu.'),
        CHIF('17 %', 'des adultes sont obèses en France (<b>ObEpi 2020</b>), un chiffre <b>en hausse constante depuis 30 ans</b>.'),
        CHIF('12 → 22 %', 'Dans l\'observatoire : de 12 % (<b>métropole lilloise</b>) à 22 % (<b>bassin minier du Pas-de-Calais</b>).'),
        P('Les territoires <b>désindustrialisés</b> cumulent chômage, précarité, offre alimentaire défavorable et peu d\'espaces verts.')
      ],
      [
        P('Trois familles de facteurs :'),
        TAB(['Facteurs', 'Exemples'], [
          ['Génétiques', 'Leur expression dépend de l\'environnement'],
          ['Comportementaux', 'Alimentation, activité, stress'],
          ['Environnementaux', 'Fast-foods, équipements sportifs, urbanisme, normes sociales']
        ]),
        P('On parle d\'<mark>environnements « obésogènes »</mark> : des lieux où les choix sains sont <b>plus difficiles</b> et <b>plus coûteux</b>.'),
        DONC('Il faut dépasser la <b>responsabilisation individuelle</b> pour agir sur les <b>déterminants structurels</b>, et éviter la <b>stigmatisation</b>.')
      ]
    ],
    questions: [
      qcm('a1', 'Quelle part des adultes est obèse en France selon ObEpi 2020 ?', ['17 %', '7 %', '27 %', '47 %'], '<b>17 %</b>, en hausse depuis 30 ans.'),
      vf('a2', 'Dans un environnement obésogène, les choix sains sont plus faciles et moins chers.', false, 'Faux : c\'est l\'inverse, ils sont <b>plus difficiles et plus coûteux</b>.')
    ],
    revision: [
      qcm('r1', 'Dans l\'observatoire du cours, comment varie l\'obésité selon le territoire ?', ['De 12 % (métropole lilloise) à 22 % (bassin minier)', 'De 5 % à 10 %', 'De 22 % (métropole lilloise) à 12 % (bassin minier)', 'Elle est la même partout'], 'De <b>12 à 22 %</b> : le bassin minier, territoire désindustrialisé, est le plus touché.')
    ]
  },
  {
    id: 'sp-enjeux-18', fiche: 'Fiche 6', ficheTitre: 'Obésité, dénutrition, TCA',
    titre: 'La dénutrition des personnes âgées',
    ecrans: [
      [
        P('C\'est un <b>enjeu sous-estimé</b>. D\'après la <b>HAS</b>, la dénutrition touche :'),
        CHIF('4-10 %', 'des personnes âgées <b>à domicile</b>'),
        CHIF('15-40 %', 'des personnes âgées <b>en institution</b>'),
        P('Ses <b>coûts</b> : séjours hospitaliers <b>allongés</b>, complications <b>post-opératoires</b>, <b>perte d\'autonomie</b>.')
      ],
      [
        P('<b>Facteurs de risque</b> : <mark>isolement</mark>, <mark>dépression</mark>, polypathologies, <mark>polymédication</mark>, troubles de la <b>mastication</b> et de la <b>déglutition</b>.'),
        P('<b>Actions</b> :'),
        L(['<b>former les aidants</b> : repérer les signes, enrichir l\'alimentation ;', '<b>réseaux de dépistage précoce</b> avec médecins généralistes, pharmaciens, infirmiers, kinés, travailleurs sociaux ;', '<b>ateliers alimentaires</b>.']),
        AST('Domicile <b>4-10</b>, institution <b>15-40</b> : en institution, c\'est jusqu\'à 4 fois plus.'),
        LIEN('La dénutrition côté Sciences', 'Les mécanismes dans le corps, avec ta future leçon de Sciences')
      ]
    ],
    questions: [
      paires('a1', 'Relie chaque lieu de vie à la fréquence de la dénutrition (HAS).', [
        ['À domicile', '4 à 10 %'], ['En institution', '15 à 40 %']
      ], 'Domicile 4-10, institution 15-40.'),
      qcm('a2', 'Lequel est un facteur de risque de dénutrition chez la personne âgée ?', ['L\'isolement', 'La pratique d\'un sport', 'Une alimentation enrichie', 'Une bonne dentition'], 'Isolement, dépression, polypathologies, polymédication, troubles de la mastication/déglutition.')
    ],
    revision: [
      qcm('r1', 'Quelles sont les conséquences (coûts) de la dénutrition citées dans le cours ?', ['Séjours hospitaliers allongés, complications post-opératoires, perte d\'autonomie', 'Prise de poids rapide et hypertension', 'Aucune conséquence notable', 'Uniquement de la fatigue passagère'], 'Un enjeu <b>sous-estimé</b> mais coûteux.'),
      qcm('r2', 'Quelle action contre la dénutrition le cours propose-t-il ?', ['Former les aidants et créer des réseaux de dépistage précoce', 'Interdire les plats préparés en EHPAD', 'Attendre l\'hospitalisation pour agir', 'Prescrire systématiquement des compléments à tous'], 'Former les aidants, réseaux de dépistage, ateliers alimentaires.')
    ]
  },
  {
    id: 'sp-enjeux-19', fiche: 'Fiche 6', ficheTitre: 'Obésité, dénutrition, TCA',
    titre: 'Les troubles du comportement alimentaire',
    ecrans: [
      [
        P('Les <b>TCA</b> sont <b>en hausse</b>, surtout chez les <b>adolescents</b> et les <b>jeunes adultes</b>.'),
        CHIF('⚠️', 'L\'<b>anorexie mentale</b> a le <b>taux de mortalité le plus élevé</b> de tous les troubles psychiatriques.'),
        P('La <b>boulimie</b> et l\'<b>hyperphagie boulimique</b> sont <b>plus fréquentes</b> mais souvent <b>non diagnostiquées</b>. Signes et conséquences : troubles dentaires, déshydratation, isolement, échec scolaire ou professionnel.')
      ],
      [
        P('<b>Facteurs émergents</b> : les <mark>réseaux sociaux</mark> et la <mark>pression esthétique</mark>.'),
        P('<b>Prévention dès l\'enfance</b> :'),
        L(['une relation <b>positive</b> à l\'alimentation et au corps ;', '<b>pas de messages culpabilisants</b> ;', 'valoriser la <b>diversité corporelle</b>.']),
        CLE('obésité 17 % (ObEpi 2020), 12 → 22 % selon le territoire · dénutrition 4-10 % domicile / 15-40 % institution (HAS) · anorexie = mortalité psy la plus élevée')
      ]
    ],
    questions: [
      qcm('a1', 'Quel trouble psychiatrique a le taux de mortalité le plus élevé ?', ['L\'anorexie mentale', 'La boulimie', 'L\'hyperphagie boulimique', 'La dépression saisonnière'], 'L\'<b>anorexie mentale</b>.'),
      vf('a2', 'Pour prévenir les TCA, on évite les messages culpabilisants.', true, 'Vrai : relation positive à l\'alimentation et au corps, diversité corporelle.')
    ],
    revision: [
      qcm('r1', 'Quels facteurs émergents des TCA le cours cite-t-il ?', ['Les réseaux sociaux et la pression esthétique', 'Le manque de sommeil et le café', 'Les repas à la cantine', 'Le sport en club'], 'Réseaux sociaux + pression esthétique.'),
      vf('r2', 'La boulimie et l\'hyperphagie boulimique sont rares et presque toujours diagnostiquées.', false, 'Faux : elles sont <b>plus fréquentes</b> que l\'anorexie, mais <b>souvent non diagnostiquées</b>.')
    ]
  },

  /* ================= FICHE 7 ================= */
  {
    id: 'sp-enjeux-20', fiche: 'Fiche 7', ficheTitre: 'Alimentation durable, sécurité alimentaire, littératie',
    titre: 'Alimentation durable et climat',
    ecrans: [
      [
        ESS('Santé humaine et santé de la planète sont liées ; bien manger suppose aussi d\'avoir accès aux aliments et de savoir les utiliser.'),
        CHIF('≈ 25 %', 'de l\'<b>empreinte carbone</b> des Français vient de l\'alimentation (<b>ADEME</b>).'),
        P('Les <b>légumineuses</b> ont un <mark>double bénéfice</mark> : pour le <b>PNNS</b> (fibres, protéines végétales) et pour le <b>climat</b> (moins d\'émissions liées à l\'élevage).')
      ],
      [
        CHIF('500 g', 'de <b>viande rouge par semaine maximum</b> (≈ <b>70 g/jour</b>).'),
        P('Avec un <b>accompagnement</b> pour éviter les carences en <b>fer</b>, <b>zinc</b> et <b>vitamine B12</b>, surtout chez les <b>femmes en âge de procréer</b>.'),
        P('<b>Circuits courts</b> : lien producteur-consommateur, moins de transport, produits de saison, variétés anciennes plus riches en micronutriments.'),
        LIEN('Fer, zinc et B12 côté Sciences', 'Pourquoi ces carences ? Ta future leçon de biochimie')
      ],
      [
        P('Les <b>5 stratégies</b> d\'une alimentation durable :'),
        ETAPES([
          { titre: 'Protéines végétales' },
          { titre: 'Produits locaux et de saison' },
          { titre: 'Moins de gaspillage' },
          { titre: 'Bio et circuits courts' },
          { titre: 'Sensibiliser au lien alimentation-santé-environnement' }
        ]),
        AST('500 g par semaine ÷ 7 jours ≈ 70 g par jour : retiens l\'un, tu retrouves l\'autre.')
      ]
    ],
    questions: [
      qcm('a1', 'Quelle part de l\'empreinte carbone des Français vient de l\'alimentation (ADEME) ?', ['Environ 25 %', 'Environ 5 %', 'Environ 50 %', 'Environ 75 %'], 'Environ <b>un quart</b>.'),
      qcm('a2', 'Quel est le repère maximum pour la viande rouge ?', ['500 g par semaine (≈ 70 g/jour)', '500 g par jour', '70 g par semaine', '1 kg par semaine'], '<b>500 g/semaine</b>, soit environ 70 g/jour.')
    ],
    revision: [
      qcm('r1', 'Pourquoi les légumineuses ont-elles un « double bénéfice » ?', ['Bonnes pour la santé (fibres, protéines végétales) et pour le climat (moins d\'émissions liées à l\'élevage)', 'Elles sont bon marché et se conservent longtemps', 'Elles remplacent les fruits et légumes', 'Elles contiennent beaucoup de vitamine B12'], 'Santé + climat.'),
      qcm('r2', 'Si on réduit la viande rouge, quelles carences faut-il surveiller ?', ['Fer, zinc, vitamine B12', 'Vitamine C, fibres, potassium', 'Sodium, sucres, lipides', 'Calcium uniquement'], 'Fer, zinc, B12, surtout chez les femmes en âge de procréer.')
    ]
  },
  {
    id: 'sp-enjeux-21', fiche: 'Fiche 7', ficheTitre: 'Alimentation durable, sécurité alimentaire, littératie',
    titre: 'Sécurité alimentaire et aide alimentaire',
    ecrans: [
      [
        P('La <b>sécurité alimentaire</b>, ce n\'est pas seulement la <b>quantité</b> disponible : c\'est l\'<mark>accès physique et économique</mark> à une alimentation <b>nutritionnellement adéquate</b>.'),
        CHIF('8 millions', 'de personnes concernées par l\'<b>aide alimentaire</b> en France.'),
        P('La précarité alimentaire touche aussi les <b>classes moyennes fragilisées</b>.')
      ],
      [
        TAB(['Dispositif', 'Atout', 'Limite'], [
          ['Épiceries sociales et solidaires', 'Accès digne', 'Insuffisantes sur certains territoires, besoin de soutien institutionnel'],
          ['Chèques alimentaires', 'Liberté de choix', 'Besoin d\'un accompagnement éducatif'],
          ['Jardins d\'insertion', 'Compétences pro + légumes frais + lien social', '']
        ]),
        AST('Épicerie = <b>dignité</b> · chèque = <b>liberté</b> · jardin = <b>insertion</b> (compétences, légumes, lien).')
      ]
    ],
    questions: [
      vf('a1', 'La sécurité alimentaire, c\'est seulement avoir assez de nourriture disponible.', false, 'Faux : c\'est aussi l\'<b>accès physique et économique</b> à une alimentation adéquate.'),
      qcm('a2', 'Combien de personnes sont concernées par l\'aide alimentaire en France ?', ['8 millions', '800 000', '80 millions', '18 millions'], '<b>8 millions</b>.')
    ],
    revision: [
      paires('r1', 'Relie chaque dispositif à son atout.', [
        ['Épiceries sociales et solidaires', 'Accès digne'], ['Chèques alimentaires', 'Liberté de choix'], ['Jardins d\'insertion', 'Compétences pro, légumes frais, lien social']
      ], 'Dignité, liberté, insertion.'),
      qcm('r2', 'Quelle limite des chèques alimentaires le cours cite-t-il ?', ['Le besoin d\'un accompagnement éducatif', 'Leur coût trop élevé pour l\'État', 'Ils sont refusés partout', 'Ils sont réservés aux étudiants'], 'La liberté de choix demande un <b>accompagnement éducatif</b>.')
    ]
  },
  {
    id: 'sp-enjeux-22', fiche: 'Fiche 7', ficheTitre: 'Alimentation durable, sécurité alimentaire, littératie',
    titre: 'La littératie nutritionnelle',
    ecrans: [
      [
        P('La <b>littératie nutritionnelle</b>, c\'est la <mark>capacité à faire des choix alimentaires éclairés</mark>.'),
        P('Elle réunit des <b>connaissances</b> (savoir) et des <b>compétences pratiques</b> (savoir-faire) :'),
        L(['lire l\'<b>étiquetage</b> ;', '<b>planifier</b> selon son budget ;', '<b>cuisiner</b> des produits bruts.']),
        P('Résultat : plus d\'<b>autonomie</b>, moins d\'<b>ultra-transformés</b>.')
      ],
      [
        P('Le <b>numérique</b> (livraisons, applis) ouvre des <b>opportunités</b>… mais crée un <b>risque de fracture sociale</b>.'),
        DONC('Tes messages doivent intégrer les dimensions <b>culturelles</b>, <b>sociales</b> et <b>économiques</b> de l\'alimentation.'),
        CLE('≈ 25 % de l\'empreinte carbone · viande rouge ≤ 500 g/sem (~70 g/j) · 8 millions à l\'aide alimentaire · littératie = savoir + savoir-faire'),
        LIEN('Cours « Littératie en santé »', 'Tout un cours y est consacré en Santé publique', 'pratique')
      ]
    ],
    questions: [
      qcm('a1', 'La littératie nutritionnelle, c\'est…', ['savoir + savoir-faire pour faire des choix alimentaires éclairés', 'connaître par cœur les tables de composition', 'suivre un régime prescrit', 'savoir lire et écrire'], 'Littératie = <b>savoir + savoir-faire</b>.'),
      vf('a2', 'Le numérique (livraisons, applis) peut créer un risque de fracture sociale.', true, 'Vrai : des opportunités, mais un risque de fracture.')
    ],
    revision: [
      qcm('r1', 'Laquelle est une compétence pratique de la littératie nutritionnelle ?', ['Lire l\'étiquetage', 'Calculer son IMC', 'Connaître l\'histoire du PNNS', 'Réciter les ODD'], 'Lire l\'étiquetage, planifier selon son budget, cuisiner des produits bruts.')
    ]
  },

  /* ================= FICHE 8 ================= */
  {
    id: 'sp-enjeux-23', fiche: 'Fiche 8', ficheTitre: 'Gradient social et précarité alimentaire',
    titre: 'Le gradient social de santé',
    ecrans: [
      [
        ESS('Plus on descend dans l\'échelle sociale, moins la santé est bonne : ces inégalités viennent de <b>contraintes</b>, pas de choix libres.'),
        P('Le <b>gradient social de santé</b>, c\'est une relation <mark>continue et progressive</mark> entre position sociale et état de santé, à <b>tous les niveaux</b> de la hiérarchie : un <b>effet dose-réponse</b>.'),
        NIV([
          { titre: 'Position sociale la plus haute', x: 'meilleure santé' },
          { titre: 'Un peu plus bas…', x: 'un peu moins bonne' },
          { titre: 'Encore plus bas…', x: 'encore moins bonne' },
          { titre: 'Position la plus basse', x: 'santé la moins bonne' }
        ]),
        PIEGE('Le gradient social n\'oppose pas seulement « riches » et « pauvres » : il concerne <b>tous les niveaux</b> de l\'échelle sociale.')
      ],
      [
        CHIF('4,2 vs 2,1', 'portions de fruits et légumes par jour : <b>cadres supérieurs</b> contre <b>catégories populaires</b>.'),
        P('Ce n\'est pas seulement une question de <b>budget</b> : jouent aussi les <b>normes sociales</b> et le <mark>capital culturel</mark> (<b>Bourdieu</b>).'),
        P('L\'<b>obésité</b> est <b>inversement proportionnelle</b> au niveau d\'éducation, à cause du stress chronique, du travail pénible, d\'un environnement défavorable et de l\'accès aux soins.')
      ],
      [
        DUO({ titre: 'Catégories populaires', items: ['Plus de prêts à consommer', 'Manque de temps et de compétences'] }, { titre: 'Catégories favorisées', items: ['Plus de temps', 'Répertoire diversifié', 'Produits bruts'] }, 'Les pratiques culinaires diffèrent aussi :'),
        DONC('Ces inégalités résultent de <b>contraintes structurelles</b> : les comprendre évite de <b>culpabiliser</b> les plus vulnérables.'),
        AST('« Gradient » = une pente douce, pas une falaise : chaque marche de l\'échelle sociale compte.')
      ]
    ],
    questions: [
      vf('a1', 'Le gradient social de santé oppose seulement les riches et les pauvres.', false, 'Faux, c\'est le piège : il concerne <b>tous les niveaux</b> de l\'échelle sociale (dose-réponse).'),
      qcm('a2', 'Combien de portions de fruits et légumes par jour : cadres supérieurs vs catégories populaires ?', ['4,2 vs 2,1', '5 vs 1', '2,1 vs 4,2', '3 vs 3'], '<b>4,2 contre 2,1</b> : deux fois plus.')
    ],
    revision: [
      qcm('r1', 'Quel sociologue est associé à la notion de capital culturel dans le cours ?', ['Bourdieu', 'Winslow', 'Dahlgren', 'Whitehead'], '<b>Bourdieu</b> : capital culturel.'),
      qcm('r2', 'Comment évolue l\'obésité avec le niveau d\'éducation ?', ['Elle est inversement proportionnelle : plus le niveau d\'éducation est bas, plus l\'obésité est fréquente', 'Elle augmente avec le niveau d\'éducation', 'Elle ne dépend pas du niveau d\'éducation', 'Elle ne touche que les diplômés'], 'Stress chronique, travail pénible, environnement défavorable, accès aux soins.')
    ]
  },
  {
    id: 'sp-enjeux-24', fiche: 'Fiche 8', ficheTitre: 'Gradient social et précarité alimentaire',
    titre: 'Précarité et insécurité alimentaires',
    ecrans: [
      [
        P('La <b>précarité alimentaire</b>, c\'est l\'<mark>impossibilité d\'accéder à une alimentation suffisante, diversifiée et de qualité</mark>, faute de ressources.'),
        CHIF('11 %', 'des adultes en <b>insécurité alimentaire</b> selon <b>INCA3 (ANSES, 2017)</b> : <b>7 % modérée</b> + <b>4 % sévère</b>, avec de fortes disparités.'),
        P('Les plus exposés : <b>familles monoparentales</b>, <b>étudiants</b>, <b>chômeurs</b>.')
      ],
      [
        P('Comment la mesurer ? Trois indicateurs :'),
        TAB(['Indicateur', 'Exemple'], [
          ['Recours à l\'aide alimentaire', 'Banques alimentaires, Restos du Cœur, CCAS'],
          ['Budget alimentaire des ménages', 'Part du revenu consacrée à l\'alimentation'],
          ['Indice de privation matérielle', 'Eurostat']
        ]),
        P('Quand c\'est la <b>qualité</b> aussi qui est insuffisante, on parle d\'<mark>insécurité nutritionnelle</mark> → risque de maladies chroniques (DT2, obésité, cardiovasculaire), surveillées par <b>Santé publique France</b> (enquête <b>Esteban</b>).'),
        AST('INCA3 : <b>11 = 7 + 4</b> (modérée + sévère).')
      ]
    ],
    questions: [
      qcm('a1', 'Selon INCA3 (ANSES, 2017), quelle part des adultes est en insécurité alimentaire ?', ['11 % (7 % modérée + 4 % sévère)', '4 % (dont 11 % sévère)', '25 %', '50 %'], '<b>11 % = 7 + 4</b>.'),
      paires('a2', 'Relie chaque indicateur de précarité alimentaire à son exemple.', [
        ['Recours à l\'aide alimentaire', 'Restos du Cœur, CCAS'], ['Budget alimentaire des ménages', 'Part du revenu pour l\'alimentation'], ['Indice de privation matérielle', 'Eurostat']
      ], 'Les 3 indicateurs de la précarité alimentaire.')
    ],
    revision: [
      qcm('r1', 'Qui est le plus exposé à l\'insécurité alimentaire d\'après le cours ?', ['Familles monoparentales, étudiants, chômeurs', 'Cadres supérieurs', 'Retraités aisés', 'Agriculteurs uniquement'], 'Familles monoparentales, étudiants, chômeurs.'),
      qcm('r2', 'Quelle enquête de Santé publique France surveille les maladies chroniques liées à l\'insécurité nutritionnelle ?', ['Esteban', 'INCA3', 'ObEpi', 'CRÉDOC'], '<b>Esteban</b> (Santé publique France). INCA3 est une enquête de l\'ANSES.')
    ]
  },
  {
    id: 'sp-enjeux-25', fiche: 'Fiche 8', ficheTitre: 'Gradient social et précarité alimentaire',
    titre: 'Les paradoxes nutritionnels de la précarité',
    ecrans: [
      [
        P('Face au manque de ressources, les personnes développent des <b>stratégies d\'adaptation</b> :'),
        L(['moins de <b>diversité</b> ;', 'des aliments <b>bon marché</b>, <b>riches en calories</b> et <b>pauvres en nutriments</b> ;', '<b>sauter des repas</b> pour nourrir les enfants.']),
        IMAG('Une mère seule saute son déjeuner pour que ses enfants aient un vrai goûter, puis grignote le soir des produits pas chers et très caloriques. Elle prend du poids… tout en manquant de nutriments.')
      ],
      [
        P('D\'où des <mark>paradoxes nutritionnels</mark> :'),
        L(['<b>surpoids + carences</b> en même temps ;', 'alternance <b>restriction / surconsommation</b> ;', '<b>culpabilité</b> permanente.']),
        P('Depuis le Covid, on parle des « <b>nouveaux précaires</b> » : travailleurs précaires, étudiants, familles monoparentales.'),
        CLE('gradient = continu, dose-réponse · 4,2 vs 2,1 portions · Bourdieu · INCA3 : 11 % des adultes (7 % modérée + 4 % sévère) · paradoxe : surpoids + carences')
      ]
    ],
    questions: [
      vf('a1', 'Une personne en précarité peut être à la fois en surpoids et carencée.', true, 'Vrai : c\'est le <b>paradoxe nutritionnel</b>.'),
      qcm('a2', 'Qui sont les « nouveaux précaires » post-Covid ?', ['Travailleurs précaires, étudiants, familles monoparentales', 'Cadres supérieurs', 'Retraités propriétaires', 'Fonctionnaires titulaires'], 'Travailleurs précaires, étudiants, familles monoparentales.')
    ],
    revision: [
      qcm('r1', 'Quelle stratégie d\'adaptation est typique de la précarité alimentaire ?', ['Choisir des aliments bon marché, riches en calories et pauvres en nutriments', 'Acheter plus de produits bio', 'Diversifier davantage son alimentation', 'Cuisiner plus de produits bruts'], 'C\'est ce qui mène au paradoxe surpoids + carences.')
    ]
  },

  /* ================= FICHE 9 ================= */
  {
    id: 'sp-enjeux-26', fiche: 'Fiche 9', ficheTitre: 'Disparités territoriales et environnement alimentaire',
    titre: 'Déserts alimentaires et food swamps',
    ecrans: [
      [
        ESS('Là où l\'on vit détermine ce que l\'on peut acheter : déserts alimentaires, food swamps, mobilité.'),
        TAB(['', 'Définition', 'Où ?', 'Effet'], [
          ['🏜️ Désert alimentaire', 'Accès à une alimentation fraîche, variée, abordable limité ou inexistant', 'Surtout rural (Aisne : > 15 km pour des commerces diversifiés)', 'Approvisionnement difficile, qualité nutritionnelle moindre'],
          ['🍟 Food swamp', 'Zone saturée de fast-foods et de commerces peu diversifiés', 'Certains quartiers urbains', 'Plus d\'ultra-transformés riches en calories']
        ]),
        AST('<b>Désert</b> = il n\'y a <b>rien</b>. <b>Swamp</b> (« marécage ») = il y a <b>trop</b>… mais du mauvais.')
      ],
      [
        P('Le concept est né aux <b>États-Unis</b>. En France : <b>désertification commerciale rurale</b>, avec un cercle vicieux <b>fermetures ↔ dépeuplement</b>. Les <b>marchés hebdomadaires</b> sont parfois le seul accès aux produits frais.'),
        P('Le sujet est pris en compte par le <b>PNNS 2019-2023</b>, les <mark>Contrats Locaux de Santé (CLS)</mark> et les <mark>Programmes Régionaux de Santé (PRS, ARS)</mark>, qui financent des actions locales.'),
        IMAG('<b>Vervins (Aisne)</b> : des <b>livraisons solidaires</b> associent un épicier local, une association d\'insertion et le transport à la demande → l\'isolement alimentaire est réduit pour <b>150 personnes âgées</b>, et l\'économie locale est soutenue.')
      ]
    ],
    questions: [
      paires('a1', 'Relie chaque notion à sa description.', [
        ['Désert alimentaire', 'Peu ou pas d\'offre fraîche et abordable'], ['Food swamp', 'Saturation en fast-foods']
      ], 'Désert = rien ; swamp = trop de mauvais.'),
      qcm('a2', 'À Vervins (Aisne), combien de personnes âgées ont vu leur isolement alimentaire réduit grâce aux livraisons solidaires ?', ['150', '15', '1 500', '50'], '<b>150</b> personnes âgées.')
    ],
    revision: [
      qcm('r1', 'Que signifie le sigle CLS ?', ['Contrat Local de Santé', 'Comité de Lutte Sanitaire', 'Centre Local de Soins', 'Conseil Libre de Santé'], 'Les <b>CLS</b> et les <b>PRS</b> (ARS) financent des actions locales.'),
      qcm('r2', 'Où trouve-t-on surtout les déserts alimentaires en France ?', ['En zone rurale (ex. Aisne : > 15 km pour des commerces diversifiés)', 'Dans les centres-villes', 'Près des universités', 'Dans les zones commerciales'], 'Surtout en <b>rural</b>. Les food swamps, eux, sont urbains.')
    ]
  },
  {
    id: 'sp-enjeux-27', fiche: 'Fiche 9', ficheTitre: 'Disparités territoriales et environnement alimentaire',
    titre: 'L\'environnement alimentaire',
    ecrans: [
      [
        P('L\'<b>environnement alimentaire</b>, ce sont <b>tous les facteurs contextuels</b> qui influencent les choix :'),
        ETAPES([{ titre: 'Disponibilité' }, { titre: 'Accessibilité' }, { titre: 'Acceptabilité' }, { titre: 'Qualité de l\'offre' }]),
        P('Exemple dans la <b>métropole lilloise</b> : fast-foods dans les quartiers défavorisés, marchés de producteurs en centre-ville, grandes surfaces en périphérie.')
      ],
      [
        PERSO('mehdi', 'Sur ma carte, je repère trois types de zones, et pour chacune une action :'),
        TAB(['Zone repérée', 'Action'], [
          ['Déserts alimentaires', 'Développement commercial'],
          ['Zones de restauration rapide', 'Régulation'],
          ['Territoires à atouts', 'Valorisation']
        ]),
        P('Même la <b>restauration scolaire</b> diffère : <b>cuisine sur site</b> en zones favorisées, <b>liaison froide et produits industriels</b> en zones défavorisées.')
      ]
    ],
    questions: [
      paires('a1', 'Carte de Mehdi : relie chaque zone à l\'action proposée.', [
        ['Désert alimentaire', 'Développement commercial'], ['Zone de restauration rapide', 'Régulation'], ['Territoire à atouts', 'Valorisation']
      ], 'Développer, réguler, valoriser.'),
      vf('a2', 'La disponibilité, l\'accessibilité, l\'acceptabilité et la qualité de l\'offre font partie de l\'environnement alimentaire.', true, 'Vrai : ce sont les facteurs contextuels qui influencent les choix.')
    ],
    revision: [
      qcm('r1', 'En zones défavorisées, comment fonctionne souvent la restauration scolaire, d\'après le cours ?', ['Liaison froide et produits industriels', 'Cuisine sur site avec produits bruts', 'Repas bio locaux', 'Pas de restauration scolaire'], 'Cuisine sur site en zones favorisées, liaison froide en zones défavorisées.')
    ]
  },
  {
    id: 'sp-enjeux-28', fiche: 'Fiche 9', ficheTitre: 'Disparités territoriales et environnement alimentaire',
    titre: 'Transport, mobilité et isolement alimentaire',
    ecrans: [
      [
        P('Les problèmes de <b>transport et de mobilité</b> touchent surtout :'),
        L(['les <b>personnes âgées</b>,', 'les <b>familles sans véhicule</b>,', 'les <b>zones mal desservies</b>.']),
        CHIF('36 → 52 %', 'des 65 ans et + en <b>insuffisance alimentaire qualitative</b> : 36 % en <b>2021</b>, 52 % en <b>2023</b> (<b>CRÉDOC</b>).'),
        P('Risques : <b>isolement alimentaire</b>, <b>dénutrition</b>, dépendance à l\'entourage.')
      ],
      [
        P('<b>Solutions</b> :'),
        L(['<b>livraisons solidaires</b> ;', '<b>marchés itinérants</b> ;', '<b>transport à la demande</b> élargi aux courses.']),
        P('Les <b>commandes en ligne</b> ? Leur impact sur l\'<b>équité</b> reste à évaluer.'),
        DONC('L\'environnement influence les choix, souvent <b>inconsciemment</b> : ne pas reporter toute la responsabilité sur l\'individu, <b>améliorer l\'offre locale</b>.'),
        CLE('désert (rural, > 15 km) vs food swamp (urbain, fast-foods) · CLS, PRS · Vervins : 150 pers. âgées · CRÉDOC 36 % → 52 %')
      ]
    ],
    questions: [
      qcm('a1', 'D\'après le CRÉDOC, quelle part des 65 ans et + était en insuffisance alimentaire qualitative ?', ['36 % en 2021, puis 52 % en 2023', '52 % en 2021, puis 36 % en 2023', '11 % en 2017', '17 % en 2020'], '<b>36 % → 52 %</b> : une forte hausse en deux ans.'),
      qcm('a2', 'Laquelle est une solution aux problèmes de mobilité alimentaire ?', ['Les marchés itinérants', 'Fermer les petits commerces', 'Supprimer le transport à la demande', 'Construire des fast-foods'], 'Livraisons solidaires, marchés itinérants, transport à la demande.')
    ],
    revision: [
      vf('r1', 'Les problèmes de mobilité alimentaire touchent surtout les personnes âgées, les familles sans véhicule et les zones mal desservies.', true, 'Vrai.')
    ]
  },

  /* ================= FICHE 10 ================= */
  {
    id: 'sp-enjeux-29', fiche: 'Fiche 10', ficheTitre: 'Réduire les inégalités : les stratégies',
    titre: 'L\'universalisme proportionné',
    ecrans: [
      [
        ESS('Agir <b>pour tous</b>, mais <b>plus fort là où les besoins sont plus grands</b> — avec les populations, et en mesurant les écarts.'),
        P('L\'<b>universalisme proportionné</b> : des actions <b>universelles</b> dont l\'<b>intensité</b> est <mark>proportionnelle aux besoins</mark> de chaque groupe.'),
        P('Double avantage : on <b>évite la stigmatisation</b> et on <b>concentre les moyens</b> là où ils servent le plus.'),
        AST('Imagine un robinet ouvert pour tout le monde, dont le débit augmente là où la soif est plus grande.')
      ],
      [
        PERSO('dumont', 'Dans notre région, j\'organise l\'action en trois niveaux :'),
        NIV([
          { titre: 'Universel · toute la population', x: 'Information générale (médias locaux, professionnels de santé)' },
          { titre: 'Renforcé · populations précaires', x: 'Ateliers collectifs + suivi individualisé' },
          { titre: 'Spécialisé · grande vulnérabilité', x: 'Interventions spécialisées, coordination médico-sociale' }
        ], 'egale'),
        PIEGE('Cibler <b>uniquement</b> les plus pauvres stigmatise ; l\'universalisme proportionné garde une <b>offre ouverte à tous</b>.')
      ],
      [
        P('La <b>mise en œuvre</b>, en 5 étapes :'),
        ETAPES([
          { titre: 'Diagnostic territorial précis' },
          { titre: 'Objectifs quantifiés de réduction des écarts' },
          { titre: 'Interventions adaptées à chaque groupe' },
          { titre: 'Évaluation différentielle' },
          { titre: 'Coordination des acteurs' }
        ]),
        DONC('Objectif : <b>réduire les écarts</b> ET <b>améliorer la moyenne</b>.')
      ]
    ],
    classe: [
      E('Dernière grande stratégie du cours, celle que défend le <b>Dr Dumont</b> : l\'<b>universalisme proportionné</b>. Le nom fait peur, mais l\'idée est simple.', [T('L\'universalisme proportionné')]),
      E('Deux mots, deux idées. <b>Universalisme</b> : on agit pour <b>tout le monde</b>. <b>Proportionné</b> : l\'<b>intensité</b> de l\'action dépend des <b>besoins</b> de chaque groupe.', [LG('Universalisme = pour TOUS', 'bleu', { taille: 'grand' }), LG('Proportionné = intensité selon les BESOINS', 'rouge', { taille: 'grand' }), SOUL()]),
      E('Imagine un robinet ouvert pour tout le monde, dont le débit augmente là où la soif est plus grande. Résultat : on <b>évite la stigmatisation</b>, et on <b>concentre les moyens</b> là où ils servent le plus.', [LG('→ pas de stigmatisation', 'vert', { puce: '✓' }), LG('→ moyens concentrés là où ils servent le plus', 'vert', { puce: '✓' })]),
      E('Le Dr Dumont l\'organise en <b>trois niveaux</b>. Regarde bien qui est visé, et ce qu\'on fait à chaque niveau.', [EFF(), T('Les 3 niveaux du Dr Dumont'), RANG([
        { titre: 'Universel', sous: 'Toute la population', x: 'Information générale : médias locaux, professionnels de santé', c: 'vert' },
        { titre: 'Renforcé', sous: 'Populations précaires', x: 'Ateliers collectifs + suivi individualisé', c: 'bleu' },
        { titre: 'Spécialisé', sous: 'Grande vulnérabilité', x: 'Interventions spécialisées, coordination médico-sociale', c: 'rouge' }
      ])]),
      E('Niveau <b>universel</b> : toute la population reçoit une information générale, par les médias locaux et les professionnels de santé.', [MONTRE(1)]),
      E('Niveau <b>renforcé</b> : pour les populations précaires, on ajoute des <b>ateliers collectifs</b> et un <b>suivi individualisé</b>.', [MONTRE(2)]),
      E('Niveau <b>spécialisé</b> : pour la grande vulnérabilité, des interventions spécialisées et une <b>coordination médico-sociale</b>.', [MONTRE(3)]),
      E('Le piège : croire qu\'il vaut mieux cibler <b>seulement</b> les plus pauvres. Non ! Ça <b>stigmatise</b>. L\'universalisme proportionné garde une offre <b>ouverte à tous</b>.', [POST('Cibler UNIQUEMENT les plus pauvres = stigmatiser. L\'offre reste ouverte à tous.', 'piege')], 'reflechit'),
      E('Comment on le met en œuvre ? En <b>5 étapes</b> : un diagnostic territorial précis, des objectifs chiffrés de réduction des écarts, des interventions adaptées à chaque groupe, une évaluation différentielle, et la coordination des acteurs.', [EFF(), T('La mise en œuvre'), LG('Diagnostic territorial précis', 'noir', { puce: '1' }), LG('Objectifs quantifiés de réduction des écarts', 'noir', { puce: '2' }), LG('Interventions adaptées à chaque groupe', 'noir', { puce: '3' }), LG('Évaluation différentielle', 'noir', { puce: '4' }), LG('Coordination des acteurs', 'noir', { puce: '5' })]),
      E('Et l\'objectif final, c\'est les deux à la fois : <b>réduire les écarts</b> ET <b>améliorer la moyenne</b>. À toi de jouer !', [LG('But : réduire les écarts ET améliorer la moyenne', 'rouge', { taille: 'grand' }), SOUL(true)], 'content')
    ],
    questions: [
      qcm('a1', 'L\'universalisme proportionné, c\'est…', ['des actions pour tous, dont l\'intensité s\'adapte aux besoins de chaque groupe', 'des actions réservées aux plus pauvres', 'la même action, identique pour tout le monde', 'des actions uniquement à l\'hôpital'], 'Pour tous, avec une intensité <b>proportionnelle aux besoins</b>.'),
      paires('a2', 'Les 3 niveaux du Dr Dumont : relie chaque niveau à son public.', [
        ['Universel', 'Toute la population'], ['Renforcé', 'Populations précaires'], ['Spécialisé', 'Grande vulnérabilité']
      ], 'Universel → renforcé → spécialisé.')
    ],
    revision: [
      vf('r1', 'Cibler uniquement les plus pauvres est la meilleure façon d\'éviter la stigmatisation.', false, 'Faux : cibler uniquement les plus pauvres <b>stigmatise</b>. L\'universalisme proportionné garde une offre ouverte à tous.'),
      paires('r2', 'Les 3 niveaux du Dr Dumont : relie chaque niveau à son action.', [
        ['Universel', 'Information générale'], ['Renforcé', 'Ateliers collectifs + suivi individualisé'], ['Spécialisé', 'Coordination médico-sociale']
      ], 'Plus le besoin est grand, plus l\'action est intense.')
    ]
  },
  {
    id: 'sp-enjeux-30', fiche: 'Fiche 10', ficheTitre: 'Réduire les inégalités : les stratégies',
    titre: 'Agir avec les habitants',
    ecrans: [
      [
        P('L\'<b>approche communautaire</b> fait participer les communautés à la <b>définition</b>, la <b>mise en œuvre</b> et l\'<b>évaluation</b> des actions → elles se les <mark>approprient</mark>.'),
        TAB(['Outil', 'Ce qu\'il apporte'], [
          ['Groupes de parole', 'Exprimer ses difficultés, partager ses stratégies, co-construire ; révèlent des savoir-faire locaux'],
          ['Ateliers de cuisine collaborative', 'Lien social, confiance en soi, rapport positif à l\'alimentation'],
          ['Pairs-aidants issus des communautés', 'Légitimité, messages adaptés aux codes culturels']
        ])
      ],
      [
        IMAG('« <b>Cuisines du monde</b> » à <b>Roubaix</b> : des femmes migrantes et des habitants de longue date cuisinent ensemble.'),
        CHIF('15', '<b>emplois</b> en insertion créés'),
        CHIF('200', '<b>familles</b> moins isolées'),
        P('Et aussi : une restauration diversifiée et abordable, de l\'éducation nutritionnelle, du lien social.'),
        AST('Roubaix : <b>15</b> emplois, <b>200</b> familles — « 15 cuisiniers pour 200 familles ».')
      ]
    ],
    questions: [
      qcm('a1', 'Quel est l\'atout principal des pairs-aidants issus des communautés ?', ['Leur légitimité et des messages adaptés aux codes culturels', 'Leur diplôme médical', 'Leur capacité à prescrire', 'Leur neutralité totale vis-à-vis du groupe'], 'Légitimité + codes culturels.'),
      qcm('a2', 'Le projet « Cuisines du monde » à Roubaix, c\'est…', ['15 emplois en insertion et 200 familles moins isolées', '150 personnes âgées livrées', '200 emplois et 15 familles', 'Un fast-food solidaire'], '<b>15 emplois, 200 familles</b>. (150 personnes âgées, c\'est Vervins.)')
    ],
    revision: [
      qcm('r1', 'À quoi servent les groupes de parole dans l\'approche communautaire ?', ['Exprimer ses difficultés, partager ses stratégies, co-construire', 'Contrôler les comportements des habitants', 'Remplacer les consultations individuelles', 'Distribuer de l\'aide alimentaire'], 'Ils révèlent aussi des <b>savoir-faire locaux</b>.')
    ]
  },
  {
    id: 'sp-enjeux-31', fiche: 'Fiche 10', ficheTitre: 'Réduire les inégalités : les stratégies',
    titre: 'Évaluer l\'impact sur les inégalités',
    ecrans: [
      [
        P('Pour évaluer une action contre les inégalités, il faut mesurer l\'<mark>évolution des inégalités</mark>, pas seulement les <b>résultats moyens</b>.'),
        DUO({ titre: 'Quantitatif', items: ['Prévalences d\'obésité/dénutrition par quartier et catégorie sociale', 'Recours à l\'aide alimentaire', 'Changements de comportements'] }, { titre: 'Qualitatif', items: ['Vécu', 'Adaptation culturelle', 'Durabilité'] })
      ],
      [
        P('L\'<b>analyse géolocalisée</b> permet de repérer des <mark>micro-disparités</mark> au sein d\'un même territoire.'),
        IMAG('Une moyenne régionale qui s\'améliore peut cacher un quartier qui décroche. Seule une évaluation <b>différentielle</b> (par groupe, par quartier) le montre.'),
        DONC('Viser un <b>système apprenant</b>, qui s\'améliore en continu selon les résultats.'),
        CLE('universalisme proportionné : pour tous, intensité selon besoins · groupes de parole, cuisine, pairs-aidants · Roubaix : 15 emplois, 200 familles · évaluation différentielle')
      ]
    ],
    questions: [
      vf('a1', 'Pour évaluer une action sur les inégalités, il suffit de regarder les résultats moyens.', false, 'Faux : il faut mesurer l\'<b>évolution des écarts</b>.'),
      qcm('a2', 'Que permet l\'analyse géolocalisée ?', ['Repérer des micro-disparités au sein d\'un même territoire', 'Calculer l\'IMC des habitants', 'Remplacer les entretiens', 'Supprimer les inégalités'], 'Elle zoome sur les écarts à l\'intérieur d\'un territoire.')
    ],
    revision: [
      qcm('r2', 'Qu\'est-ce qu\'une évaluation différentielle ?', ['Mesurer les résultats groupe par groupe (quartier, catégorie sociale) pour suivre l\'évolution des écarts', 'Comparer deux diététiciens entre eux', 'Évaluer uniquement la moyenne de la population', 'Évaluer l\'action une seule fois, à la fin'], 'On regarde si les <b>écarts</b> se réduisent, pas seulement la moyenne.'),
      qcm('r1', 'Lequel est un indicateur QUALITATIF de l\'évaluation ?', ['Le vécu des habitants', 'La prévalence de l\'obésité par quartier', 'Le recours à l\'aide alimentaire', 'Le nombre de portions de fruits et légumes'], 'Qualitatif : vécu, adaptation culturelle, durabilité.')
    ]
  },

  /* ================= FICHE 11 ================= */
  {
    id: 'sp-enjeux-32', fiche: 'Fiche 11', ficheTitre: 'Méthodes (« conseils pro »)',
    titre: 'Méthodes : analyser un territoire, concevoir une intervention',
    ecrans: [
      [
        ESS('<b>5 situations pratiques</b>, <b>4 réflexes</b> chacune. Ce sont tes « conseils pro » pour l\'examen et le terrain.'),
        P('<b>Situation 1 — Analyser les déterminants nutritionnels d\'un territoire</b>'),
        ETAPES([
          { titre: 'Faire un diagnostic avec des données locales', x: 'Observatoire, ARS, INSEE, enquêtes.' },
          { titre: 'Cartographier l\'offre alimentaire et la mobilité' },
          { titre: 'Identifier les groupes vulnérables', x: 'Âge, revenu, isolement, pratiques.' },
          { titre: 'Croiser quantitatif et qualitatif', x: 'Entretiens, groupes.' }
        ])
      ],
      [
        P('<b>Situation 2 — Concevoir une intervention territoriale efficace</b>'),
        ETAPES([
          { titre: 'Approche multisectorielle', x: 'Éducation, urbanisme, restauration, social.' },
          { titre: 'Co-construire avec acteurs et populations' },
          { titre: 'Objectifs SMART, messages adaptés', x: 'Aux réalités culturelles et économiques.' },
          { titre: 'Prévoir ressources, partenariats, pérennisation dès le départ' }
        ]),
        LIEN('Cours « Démarche de projet »', 'Les objectifs SMART y sont détaillés', 'pratique')
      ]
    ],
    questions: [
      qcm('a1', 'Pour analyser les déterminants nutritionnels d\'un territoire, quel est le premier réflexe ?', ['Faire un diagnostic avec des données locales (observatoire, ARS, INSEE, enquêtes)', 'Lancer tout de suite une campagne d\'affichage', 'Recevoir chaque habitant en consultation', 'Copier une action d\'une autre région'], 'Toujours commencer par <b>diagnostiquer</b>.'),
      vf('a2', 'Une intervention territoriale efficace se co-construit avec les acteurs et les populations.', true, 'Vrai : co-construire est l\'un des 4 réflexes.')
    ],
    revision: [
      qcm('r1', 'Quand faut-il penser aux ressources, aux partenariats et à la pérennisation d\'une intervention ?', ['Dès le départ', 'Une fois l\'action terminée', 'Seulement si l\'action réussit', 'Jamais : ce n\'est pas le rôle du diététicien'], 'Dès la conception.')
    ]
  },
  {
    id: 'sp-enjeux-33', fiche: 'Fiche 11', ficheTitre: 'Méthodes (« conseils pro »)',
    titre: 'Méthodes : universalisme proportionné et mesure d\'impact',
    ecrans: [
      [
        P('<b>Situation 3 — Intégrer l\'universalisme proportionné</b>'),
        ETAPES([
          { titre: 'Actions universelles + soutien intensifié pour les publics à risque' },
          { titre: 'Critères locaux pour calibrer l\'intensité', x: 'Revenu, accès, santé.' },
          { titre: 'Éviter la stigmatisation', x: 'Offres ouvertes et modulables.' },
          { titre: 'Suivi différentiel de la réduction des écarts' }
        ])
      ],
      [
        P('<b>Situation 4 — Mesurer l\'impact d\'une action de prévention</b>'),
        ETAPES([
          { titre: 'Indicateurs quantitatifs et qualitatifs', x: 'Obésité, fruits/légumes…' },
          { titre: 'Données avant-après et par sous-groupes' },
          { titre: 'Géolocalisation, recours à l\'aide alimentaire' },
          { titre: 'Apprentissage continu pour ajuster' }
        ]),
        AST('Mesurer, c\'est comparer : <b>avant / après</b>, et <b>groupe par groupe</b>.')
      ]
    ],
    questions: [
      qcm('a1', 'Comment éviter la stigmatisation en appliquant l\'universalisme proportionné ?', ['Avec des offres ouvertes et modulables', 'En réservant l\'offre aux plus précaires', 'En demandant un justificatif de revenus', 'En ne communiquant pas sur l\'action'], 'Offres <b>ouvertes</b> et <b>modulables</b>.'),
      vf('a2', 'Pour mesurer l\'impact d\'une action, on compare des données avant-après et par sous-groupes.', true, 'Vrai.')
    ],
    revision: [
      qcm('r1', 'Quels critères locaux servent à calibrer l\'intensité d\'une action ?', ['Revenu, accès, santé', 'Couleur de cheveux, taille, âge', 'Uniquement le code postal', 'Le choix du diététicien'], 'Revenu, accès, santé.')
    ]
  },
  {
    id: 'sp-enjeux-34', fiche: 'Fiche 11', ficheTitre: 'Méthodes (« conseils pro »)',
    titre: 'Méthodes : dénutrition du sujet âgé, et le réflexe en 4 mots',
    ecrans: [
      [
        P('<b>Situation 5 — Prévenir et dépister la dénutrition du sujet âgé</b>'),
        ETAPES([
          { titre: 'Former aidants et professionnels', x: 'Au repérage et aux outils simples.' },
          { titre: 'Réseaux locaux', x: 'Médecins, infirmiers, pharmaciens, social.' },
          { titre: 'Actions concrètes', x: 'Livraison adaptée, enrichissement, ateliers conviviaux.' },
          { titre: 'Suivi coordonné', x: 'Relais pluridisciplinaire si besoin.' }
        ]),
        LIEN('Revoir : la dénutrition des personnes âgées', 'Les chiffres HAS et les facteurs de risque', 'pratique', 'sp-enjeux-18')
      ],
      [
        P('Toutes les situations se résument en <b>un réflexe en 4 mots</b> :'),
        NIV([{ titre: '1. Diagnostiquer' }, { titre: '2. Co-construire' }, { titre: '3. Adapter' }, { titre: '4. Mesurer les écarts' }], 'egale'),
        DONC('Toujours : <b>diagnostiquer</b>, <b>co-construire</b>, <b>adapter</b>, <b>mesurer les écarts</b>.'),
        AST('D-C-A-M : « <b>D</b>ans <b>C</b>haque <b>A</b>telier, <b>M</b>esure ! »')
      ]
    ],
    questions: [
      ordre('a1', 'Remets le réflexe méthodologique dans l\'ordre.', ['Diagnostiquer', 'Co-construire', 'Adapter', 'Mesurer les écarts'], 'D-C-A-M : Dans Chaque Atelier, Mesure !'),
      qcm('a2', 'Laquelle est une action concrète contre la dénutrition du sujet âgé citée dans les méthodes ?', ['La livraison adaptée', 'La suppression des collations', 'Le jeûne thérapeutique', 'Les régimes restrictifs'], 'Livraison adaptée, enrichissement, ateliers conviviaux.')
    ],
    revision: [
      qcm('r1', 'Qui fait partie des réseaux locaux de repérage de la dénutrition ?', ['Médecins, infirmiers, pharmaciens, travailleurs sociaux', 'Uniquement les diététiciens', 'Les commerçants seulement', 'Personne : c\'est le rôle de la famille'], 'Un travail en <b>réseau</b>, pluridisciplinaire.')
    ]
  },

  /* ================= FICHE 12 ================= */
  {
    id: 'sp-enjeux-35', fiche: 'Fiche 12', ficheTitre: 'Notions clés & Je me teste',
    titre: 'Les 12 notions à savoir réciter',
    ecrans: [
      [
        P('Voici les <b>définitions à connaître par cœur</b>. Lis la notion, essaie de la réciter dans ta tête, puis touche la carte pour vérifier.'),
        RET('', [
          { recto: 'Santé (OMS 1946)', verso: 'Complet bien-être physique, mental et social, pas seulement absence de maladie' },
          { recto: 'Santé publique (Winslow 1920)', verso: 'Prévenir, prolonger la vie, améliorer la santé par l\'action collective organisée' },
          { recto: 'Promotion de la santé', verso: 'Donner les moyens d\'agir sur sa santé et ses déterminants (Ottawa 1986)' },
          { recto: 'Modèle Dahlgren-Whitehead', verso: 'Déterminants en 5 cercles, de l\'individu aux politiques globales' },
          { recto: 'Prévention I / II / III', verso: 'Éviter / dépister / limiter les complications' },
          { recto: 'PNNS', verso: 'Cadre national de la politique nutritionnelle depuis 2001 (PNNS 4 : 2019-2023)' }
        ])
      ],
      [
        RET('La suite :', [
          { recto: 'Environnement obésogène', verso: 'Environnement où les choix sains sont plus difficiles et coûteux' },
          { recto: 'Gradient social de santé', verso: 'Lien continu et progressif entre position sociale et santé' },
          { recto: 'Précarité alimentaire', verso: 'Impossibilité d\'accéder à une alimentation suffisante, diversifiée, de qualité' },
          { recto: 'Désert alimentaire / food swamp', verso: 'Pas d\'offre fraîche et abordable / saturation en fast-foods' },
          { recto: 'Littératie nutritionnelle', verso: 'Capacité à faire des choix alimentaires éclairés et à les appliquer' },
          { recto: 'Universalisme proportionné', verso: 'Actions pour tous, intensité adaptée aux besoins des groupes' }
        ])
      ]
    ],
    questions: [
      paires('a1', 'Relie chaque notion à sa définition.', [
        ['Environnement obésogène', 'Choix sains plus difficiles et coûteux'], ['Gradient social', 'Lien continu position sociale-santé'], ['Littératie nutritionnelle', 'Faire des choix alimentaires éclairés']
      ], 'Trois notions clés de la fiche 12.'),
      vf('a2', 'La promotion de la santé, c\'est donner les moyens d\'agir sur sa santé et ses déterminants.', true, 'Vrai (Charte d\'Ottawa, 1986).')
    ],
    revision: [
      paires('r1', 'Relie chaque notion à sa définition.', [
        ['Précarité alimentaire', 'Pas d\'accès à une alimentation suffisante, diversifiée, de qualité'], ['Universalisme proportionné', 'Pour tous, intensité selon les besoins'], ['Dahlgren-Whitehead', 'Déterminants en 5 cercles']
      ], 'Notions clés de la fiche 12.')
    ]
  },
  {
    id: 'sp-enjeux-36', fiche: 'Fiche 12', ficheTitre: 'Notions clés & Je me teste',
    titre: 'Je me teste : le défi du cours',
    ecrans: [
      [
        P('Dernière étape : les questions « <b>Je me teste</b> » de ta fiche 12. Réponds dans ta tête (ou à voix haute !), puis touche pour vérifier.'),
        RET('', [
          { recto: 'Cite les 3 chiffres du contexte.', verso: '48 % des décès avant 75 ans (hommes) évitables · Nord/Réunion : − 5 ans · obésité 22,1 % HdF vs 14,2 % IdF' },
          { recto: 'Définition de la santé (OMS) et de la santé publique (Winslow) ?', verso: 'OMS 1946 : complet bien-être physique, mental, social · Winslow 1920 : prévenir, prolonger la vie, améliorer la santé par l\'action collective organisée' },
          { recto: 'Les 6 champs d\'intervention de la santé publique ?', verso: 'Surveillance épidémiologique · prévention · promotion · organisation des soins · éducation pour la santé · planification et évaluation' },
          { recto: 'Les 5 axes de la Charte d\'Ottawa ?', verso: 'Politiques publiques saines · environnements favorables · action communautaire · compétences individuelles · réorientation des services' },
          { recto: 'Les 5 cercles de Dahlgren et Whitehead, avec l\'obésité infantile ?', verso: '1 génétique · 2 habitudes familiales · 3 pairs à l\'école · 4 restauration scolaire, équipements sportifs · 5 taxation des produits sucrés' },
          { recto: 'Un exemple nutritionnel de prévention primaire, secondaire, tertiaire ?', verso: 'I : éducation alimentaire, allaitement · II : dépistage surpoids, dénutrition, carences · III : prise en charge DT2, maladies cardiovasculaires, TCA' },
          { recto: 'La priorité de chaque PNNS ? 3 objectifs du PNNS 4 ?', verso: '1 information · 2 vulnérables + surveillance · 3 socio-éco + école · 4 systémique + littératie. PNNS 4 : + légumineuses, fruits à coque, F&L ; − viande hors volaille, charcuterie, sel, sucre ; + activité physique…' }
        ])
      ],
      [
        RET('La suite :', [
          { recto: 'Quels ODD la Stratégie Nationale de Santé intègre-t-elle ?', verso: 'ODD 2 (faim zéro) et ODD 3 (bonne santé et bien-être)' },
          { recto: 'Chiffres : obésité adulte, dénutrition domicile/institution, viande rouge ?', verso: 'Obésité 17 % (ObEpi 2020) · dénutrition 4-10 % domicile, 15-40 % institution (HAS) · viande rouge ≤ 500 g/semaine (≈ 70 g/j)' },
          { recto: 'Qu\'est-ce qu\'un paradoxe nutritionnel de la précarité ?', verso: 'Surpoids + carences en même temps (aussi : alternance restriction/surconsommation, culpabilité)' },
          { recto: 'Les 3 indicateurs de la précarité alimentaire ?', verso: 'Recours à l\'aide alimentaire · budget alimentaire des ménages · indice de privation matérielle (Eurostat)' },
          { recto: 'Désert alimentaire vs food swamp ? L\'exemple de Vervins ?', verso: 'Désert : pas d\'offre fraîche (rural) · swamp : saturation en fast-foods (urbain). Vervins : livraisons solidaires, 150 personnes âgées' },
          { recto: 'L\'universalisme proportionné avec l\'exemple du Dr Dumont ?', verso: 'Pour tous, intensité selon les besoins : universel (information) · renforcé (ateliers + suivi) · spécialisé (coordination médico-sociale)' },
          { recto: 'Comment évaluer l\'impact d\'une action sur les inégalités ?', verso: 'Mesurer l\'évolution des écarts (pas seulement la moyenne) : quanti par quartier/catégorie + quali, analyse géolocalisée, évaluation différentielle' }
        ])
      ]
    ],
    questions: [
      qcm('a1', 'Défi : laquelle de ces associations est FAUSSE ?', ['ODD 2 = bonne santé et bien-être', 'Ottawa = 1986', 'Winslow = 1920', 'INCA3 = 11 % en insécurité alimentaire'], 'ODD 2 = <b>faim zéro</b> ; c\'est l\'ODD 3 qui correspond à la bonne santé.'),
      qcm('a2', 'Défi : un dépistage de la dénutrition en EHPAD relève de la prévention…', ['secondaire', 'primaire', 'tertiaire', 'promotionnelle'], 'Dépister = secondaire.')
    ],
    revision: [
      qcm('r1', 'Défi : quelle enquête donne 11 % d\'adultes en insécurité alimentaire ?', ['INCA3 (ANSES, 2017)', 'ObEpi 2020', 'CRÉDOC 2023', 'Esteban'], 'INCA3. ObEpi = obésité 17 % ; CRÉDOC = 36 → 52 % des 65 ans et +.'),
      qcm('r2', 'Défi : qu\'est-ce qui distingue l\'universalisme proportionné d\'un ciblage des plus pauvres ?', ['Il garde une offre ouverte à tous, avec une intensité selon les besoins', 'Il coûte moins cher', 'Il ne concerne que l\'hôpital', 'Il n\'a pas besoin d\'évaluation'], 'Ouvert à tous → pas de stigmatisation.')
    ]
  }

  ]
};

// Le mode cours (Céline au tableau) de chaque leçon est dans sp-enjeux-classe.mjs
for (const l of cours.lecons) if (!l.classe && classe[l.id]) l.classe = classe[l.id];
export default cours;
