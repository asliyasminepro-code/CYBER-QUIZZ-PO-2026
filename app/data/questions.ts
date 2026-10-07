export interface Question {
  id: number;
  topic: string;
  topicIcon: string;
  difficulty: "Très facile" | "Facile" | "Intermédiaire" | "Avancé";
  question: string;
  answers: string[];
  correctAnswer: number; // 0-indexed: 0 -> A, 1 -> B, 2 -> C, 3 -> D
  explanation: string;
  securityTip: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    topic: "Mots de passe",
    topicIcon: "KeyRound",
    difficulty: "Très facile",
    question: "Lequel de ces mots de passe est le plus sécurisé face aux cyberattaques ?",
    answers: [
      "12345678",
      "password2026",
      "M@isonBleue!47#",
      "azerty"
    ],
    correctAnswer: 2,
    explanation: "Un mot de passe robuste doit combiner au moins 12 à 14 caractères avec des majuscules, minuscules, chiffres et caractères spéciaux. Les suites comme '12345678' ou 'azerty' sont craquées en une fraction de seconde.",
    securityTip: "Utilise une phrase secrète mnémotechnique ou un gestionnaire de mots de passe (comme Bitwarden ou KeePass) !"
  },
  {
    id: 2,
    topic: "Hameçonnage (Phishing)",
    topicIcon: "Fish",
    difficulty: "Très facile",
    question: "Tu reçois un email urgent de ta banque te demandant de cliquer sur un lien pour vérifier tes identifiants sous 24h. Que fais-tu ?",
    answers: [
      "Je clique vite sur le lien pour éviter le blocage de mon compte",
      "Je réponds à l'email avec mon mot de passe pour confirmer",
      "Je transfère l'email à tous mes amis pour les prévenir sans vérifier",
      "Je ne clique pas, je vérifie l'adresse de l'expéditeur et je contacte ma banque directement"
    ],
    correctAnswer: 3,
    explanation: "C'est l'archétype du phishing ! Une banque légitime ne te demandera JAMAIS ton mot de passe ou tes codes confidentiels par email avec un sentiment d'urgence artificiel.",
    securityTip: "Ne clique jamais sur les liens d'un email d'alerte : connecte-toi toujours via l'application officielle ou en tapant l'URL toi-même."
  },
  {
    id: 3,
    topic: "Double Authentification (2FA)",
    topicIcon: "ShieldCheck",
    difficulty: "Très facile",
    question: "Pourquoi est-il fortement recommandé d'activer l'authentification à deux facteurs (2FA) sur tes comptes ?",
    answers: [
      "Pour accélérer la vitesse de connexion",
      "Car même si un pirate vole ton mot de passe, il ne peut pas accéder à ton compte sans le deuxième facteur",
      "Pour économiser la batterie de son smartphone",
      "Pour supprimer l'obligation d'avoir un mot de passe"
    ],
    correctAnswer: 1,
    explanation: "La 2FA ajoute une seconde barrière indispensable (code par application d'authentification ou clé physique). Si ton mot de passe fuite lors d'un piratage, ton compte reste protégé.",
    securityTip: "Privilégie les applications comme Google Authenticator, Aegis ou 2FAS plutôt que les SMS qui peuvent être interceptés."
  },
  {
    id: 4,
    topic: "Wi-Fi Public",
    topicIcon: "Wifi",
    difficulty: "Facile",
    question: "Tu es connecté au Wi-Fi gratuit d'un café ou d'une gare. Quel est le comportement le plus sûr ?",
    answers: [
      "Faire des achats en ligne avec ma carte bancaire sans protection",
      "Consulter des données sensibles et désactiver le pare-feu",
      "Utiliser un VPN fiable et éviter les transactions bancaires confidentielles",
      "Partager mes dossiers locaux en accès public"
    ],
    correctAnswer: 2,
    explanation: "Les réseaux Wi-Fi publics ouverts ne sont pas chiffrés. N'importe quelle personne sur le même réseau peut potentiellement intercepter ou espionner le trafic non sécurisé.",
    securityTip: "Active un VPN sur les réseaux publics ou privilégie le partage de connexion 4G/5G de ton téléphone pour les opérations sensibles."
  },
  {
    id: 5,
    topic: "Logiciels Malveillants (Malware)",
    topicIcon: "Bug",
    difficulty: "Facile",
    question: "Qu'est-ce qu'un 'Ransomware' (rançongiciel) ?",
    answers: [
      "Un logiciel qui nettoie automatiquement ton disque dur pour l'optimiser",
      "Un virus qui chiffre tes fichiers et exige une rançon financière pour les débloquer",
      "Un antivirus gratuit offert par ton système d'exploitation",
      "Un composant matériel qui accélère la carte graphique"
    ],
    correctAnswer: 1,
    explanation: "Le ransomware prend en otage tes fichiers personnels en les chiffrant avec une clé secrète, puis réclame un paiement (souvent en cryptomonnaie). Même en payant, rien ne garantit la récupération !",
    securityTip: "Fais des sauvegardes régulières sur un disque dur externe déconnecté pour ne jamais être pris au piège."
  },
  {
    id: 6,
    topic: "Ingénierie Sociale",
    topicIcon: "UserX",
    difficulty: "Intermédiaire",
    question: "Quelqu'un t'appelle en prétendant être du support informatique du club/université et te demande ton mot de passe pour une 'maintenance urgente'. Que fais-tu ?",
    answers: [
      "Je lui donne mon mot de passe pour l'aider dans son travail",
      "Je lui donne la moitié de mon mot de passe",
      "Je refuse immédiatement : aucun vrai administrateur n'a besoin de connaître ton mot de passe",
      "Je lui demande de rappeler dans 5 minutes pour lui donner"
    ],
    correctAnswer: 2,
    explanation: "C'est de l'ingénierie sociale (Social Engineering) ! Les attaquants exploitent la confiance, l'autorité ou la politesse. Les administrateurs légitimes disposent d'outils et ne te demanderont JAMAIS ton mot de passe.",
    securityTip: "Garde toujours ton mot de passe strictement confidentiel. Personne n'a le droit de te l'exiger."
  },
  {
    id: 7,
    topic: "Confidentialité & Réseaux",
    topicIcon: "Share2",
    difficulty: "Intermédiaire",
    question: "Tu viens d'obtenir ta carte d'étudiant ou ton billet d'avion. Pourquoi ne devrais-tu pas poster une photo complète sur Instagram/TikTok ?",
    answers: [
      "Parce que la photo prend trop de stockage sur ton téléphone",
      "Parce que les codes-barres / QR codes et identifiants visibles contiennent des données personnelles exploitables par des pirates",
      "Parce que l'algorithme n'aime pas les cartes en plastique",
      "Parce que la photo perd sa netteté sur les réseaux"
    ],
    correctAnswer: 1,
    explanation: "Les billets d'avion, cartes d'étudiant ou badges contiennent des codes-barres lisibles contenant ton nom complet, numéro de dossier et parfois données bancaires ou dates de naissance permettant l'usurpation d'identité.",
    securityTip: "Floute ou masque TOUTES les données personnelles et les codes-barres avant de partager une photo en ligne !"
  },
  {
    id: 8,
    topic: "Liens Suspects & URL",
    topicIcon: "Globe",
    difficulty: "Avancé",
    question: "Parmi ces adresses web, laquelle est la véritable URL officielle du site sécurisé de Google ?",
    answers: [
      "http://www.googIe.com (avec un grand 'I' majuscule à la place du 'l')",
      "https://google.security-login-update.xyz",
      "https://www.google.com/",
      "https://www.google.com.connexion-service.org"
    ],
    correctAnswer: 2,
    explanation: "Les cybercriminels utilisent le 'typosquatting' et les sous-domaines trompeurs pour imiter des sites officiels. L'important est de regarder le nom de domaine principal juste avant le premier slash (ici 'google.com').",
    securityTip: "Vérifie attentivement l'orthographe du domaine dans la barre d'adresse avant de saisir des informations."
  },
  {
    id: 9,
    topic: "Cyberharcèlement & Signalement",
    topicIcon: "MessageSquareWarning",
    difficulty: "Avancé",
    question: "Si tu es témoin ou victime de cyberharcèlement ou de chantage numérique en ligne, quel est le bon réflexe immédiat ?",
    answers: [
      "Supprimer son compte sans garder aucune trace pour tout oublier",
      "Prendre des captures d'écran (preuves), bloquer l'auteur et contacter le 3018 ou PHAROS",
      "Répondre avec des insultes pour se défendre publiquement",
      "Payer la somme réclamée pour que le harceleur s'arrête"
    ],
    correctAnswer: 1,
    explanation: "Conserver les preuves (captures d'écran horodatées, URL, identifiants) est essentiel pour toute démarche judiciaire ou disciplinaire. Des services gratuits et confidentiels comme le 3018 sont là pour t'accompagner.",
    securityTip: "Ne reste jamais seul(e) face au harcèlement en ligne : parles-en à des proches, aux responsables du club/université ou à des professionnels."
  },
  {
    id: 10,
    topic: "Hygiène Cyber & Sauvegardes",
    topicIcon: "HardDrive",
    difficulty: "Avancé",
    question: "Quelle est la 'Règle 3-2-1' recommandée par les experts en cybersécurité pour les sauvegardes de données ?",
    answers: [
      "Sauvegarder 3 fois sur la même clé USB 2 jours par semaine pendant 1 mois",
      "Avoir 3 copies de tes données, sur 2 supports différents, dont 1 copie stockée hors site (cloud ou disque externe ailleurs)",
      "Changer 3 mots de passe toutes les 2 semaines avec 1 chiffre",
      "Attendre 3 jours avant d'installer 2 mises à jour sur 1 ordinateur"
    ],
    correctAnswer: 1,
    explanation: "La règle 3-2-1 est le standard d'or de la résilience : 3 copies de données, 2 types de supports différents (ex: PC + Disque externe), 1 copie délocalisée (Cloud chiffré ou disque externe dans un autre lieu) pour résister aux incendies, vols et ransomwares.",
    securityTip: "Automatise tes sauvegardes hebdomadaires pour ne jamais perdre tes cours, projets et souvenirs précieux !"
  }
];

export interface QuizRank {
  minScore: number;
  maxScore: number;
  title: string;
  badge: string;
  badgeIcon: string;
  description: string;
  color: string;
  glowColor: string;
}

export const QUIZ_RANKS: QuizRank[] = [
  {
    minScore: 900,
    maxScore: 1000,
    title: "Cyber Expert",
    badge: "🏆",
    badgeIcon: "Trophy",
    description: "Tes réflexes cyber sont exceptionnels ! Tu es le bouclier numérique parfait pour ta promo et le CSI !",
    color: "#FF2D92",
    glowColor: "rgba(255, 45, 146, 0.6)"
  },
  {
    minScore: 700,
    maxScore: 899,
    title: "Cyber Defender",
    badge: "🛡️",
    badgeIcon: "ShieldCheck",
    description: "Tu as de très bons réflexes de sécurité ! Les pirates auront du mal à te piéger.",
    color: "#E83E8C",
    glowColor: "rgba(232, 62, 140, 0.5)"
  },
  {
    minScore: 500,
    maxScore: 699,
    title: "Cyber Apprentice",
    badge: "🔎",
    badgeIcon: "Search",
    description: "Tu as les bases essentielles, mais quelques réflexes clés méritent d'être renforcés.",
    color: "#D946EF",
    glowColor: "rgba(217, 70, 239, 0.4)"
  },
  {
    minScore: 0,
    maxScore: 499,
    title: "Cyber Rookie",
    badge: "⚠️",
    badgeIcon: "AlertTriangle",
    description: "Pas de panique ! C'est l'occasion idéale d'apprendre les bons réflexes pour protéger ta vie numérique.",
    color: "#F43F5E",
    glowColor: "rgba(244, 63, 94, 0.4)"
  }
];

export function getQuizRank(score: number): QuizRank {
  for (const rank of QUIZ_RANKS) {
    if (score >= rank.minScore && score <= rank.maxScore) {
      return rank;
    }
  }
  return QUIZ_RANKS[QUIZ_RANKS.length - 1];
}
