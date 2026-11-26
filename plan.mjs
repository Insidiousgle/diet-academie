// Plan de tout le BTS : univers → matières → sections → cours.
// "src" = nom du fichier source du cours (fichier .mjs à côté de celui-ci). Sans "src", le cours est affiché « bientôt ».
// Ne jamais changer un id de cours publié.
export default {
  univers: [
    {
      id: 'pratique', titre: 'Pratique', emoji: '🍅',
      sous: 'Santé publique, démarche de soin, bilans… le métier sur le terrain',
      matieres: [
        {
          id: 'sante-publique', titre: 'Santé publique', emoji: '🏘️',
          sections: [
            { titre: 'Promotion et éducation en santé publique', cours: [
              { id: 'sp-enjeux', titre: 'Enjeux de santé publique', emoji: '🗺️', src: 'sp-enjeux' },
              { id: 'sp-cadre', titre: 'Cadre réglementaire des interventions en santé publique', emoji: '⚖️' },
              { id: 'sp-fondamentaux', titre: 'Fondamentaux de la promotion et de la prévention', emoji: '🛡️' },
              { id: 'sp-psycho', titre: 'Éléments de psychologie sociale', emoji: '🧠' },
              { id: 'sp-pratiques', titre: 'Pratiques et comportements alimentaires', emoji: '🍽️' },
              { id: 'sp-litteratie', titre: 'Littératie en santé', emoji: '📖' },
              { id: 'sp-communication', titre: 'Techniques de communication en santé publique', emoji: '📣' },
              { id: 'sp-posture', titre: 'Posture professionnelle et communication interdisciplinaire', emoji: '🤝' },
              { id: 'sp-outils-pedago', titre: 'Choix et conception d\'outils pédagogiques', emoji: '🎲' },
              { id: 'sp-projet', titre: 'Démarche de projet', emoji: '🧭' },
              { id: 'sp-programme', titre: 'Élaboration d\'un programme de prévention', emoji: '📋' },
              { id: 'sp-evaluation', titre: 'Évaluation des projets de prévention', emoji: '📊' }
            ] },
            { titre: 'Activités de recherche', cours: [
              { id: 'sp-recherche-initiation', titre: 'Initiation à la recherche', emoji: '🔬' },
              { id: 'sp-recueil', titre: 'Méthodes et outils de recueil de données', emoji: '📝' },
              { id: 'sp-analyse', titre: 'Traitement, analyse et communication des résultats', emoji: '📈' }
            ] },
            { titre: 'Veille scientifique, professionnelle et réglementaire', cours: [
              { id: 'sp-veille-sci', titre: 'Recherche documentaire et veille scientifique', emoji: '🔎' },
              { id: 'sp-veille-regl', titre: 'Veille réglementaire et évolutions professionnelles', emoji: '📜' }
            ] },
            { titre: 'Règles de cybersécurité', cours: [
              { id: 'sp-identite-num', titre: 'Gestion de l\'identité numérique', emoji: '🪪' },
              { id: 'sp-bonnes-pratiques-num', titre: 'Bonnes pratiques du numérique en santé', emoji: '🔐' }
            ] }
          ]
        },
        {
          id: 'demarche-soin', titre: 'Démarche de soin', emoji: '🩺',
          sections: [
            { titre: 'Amélioration continue', cours: [
              { id: 'ds-organisation', titre: 'Organisation des structures de soin', emoji: '🏥' },
              { id: 'ds-acteurs', titre: 'Acteurs du système de santé et du social', emoji: '👥' },
              { id: 'ds-ethique', titre: 'Éthique, déontologie, cadre réglementaire', emoji: '⚖️' },
              { id: 'ds-communication', titre: 'Communication ciblée en soin nutritionnel', emoji: '💬' },
              { id: 'ds-ebp', titre: 'Pratique fondée sur les preuves', emoji: '🧪' },
              { id: 'ds-lecture-critique', titre: 'Lecture critique et recherche de données probantes', emoji: '📚' },
              { id: 'ds-evaluation-pratiques', titre: 'Évaluation et amélioration des pratiques professionnelles', emoji: '✅' }
            ] },
            { titre: 'Numérique et télésanté', cours: [
              { id: 'ds-cadre-numerique', titre: 'Cadre réglementaire du numérique en santé', emoji: '📜' },
              { id: 'ds-outils-numeriques', titre: 'Outils numériques au service du diététicien', emoji: '💻' },
              { id: 'ds-teleconsultation', titre: 'Organisation d\'une téléconsultation en diététique', emoji: '🎥' },
              { id: 'ds-telesante', titre: 'Télésanté : cadre et enjeux', emoji: '📡' },
              { id: 'ds-risques-numerique', titre: 'Risques, limites et responsabilités dans le numérique', emoji: '⚠️' },
              { id: 'ds-services-socles', titre: 'Outils et services socles en santé', emoji: '🧱' }
            ] }
          ]
        }
      ]
    },
    {
      id: 'sciences', titre: 'Sciences', emoji: '🧪',
      sous: 'Biochimie, physiologie, physiopathologie… ce qui se passe dans le corps',
      matieres: [
        {
          id: 'biochimie', titre: 'Biochimie', emoji: '⚗️',
          sections: [
            { titre: 'Biochimie structurale', cours: [
              { id: 'bc-chimie', titre: 'Rappels de chimie, eau et minéraux', emoji: '⚛️', src: 'bc-chimie' },
              { id: 'bc-glucides', titre: 'Les glucides : structure', emoji: '🍞', src: 'bc-glucides' }
            ] },
            { titre: 'Métabolisme', cours: [
              { id: 'bc-meta-glucides-1', titre: 'Métabolisme des glucides (1) : digestion et glycolyse', emoji: '🔥', src: 'bc-meta-glucides-1' },
              { id: 'bc-meta-glucides-2', titre: 'Métabolisme des glucides (2) : Krebs et autres voies', emoji: '🔄', src: 'bc-meta-glucides-2' }
            ] }
          ]
        },
        { id: 'physiologie', titre: 'Physiologie', emoji: '🫀', sections: [] },
        { id: 'physiopathologie', titre: 'Physiopathologie', emoji: '🩻', sections: [] }
      ]
    }
  ]
};
