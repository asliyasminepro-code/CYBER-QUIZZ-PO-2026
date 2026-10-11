// ─────────────────────────────────────────────────────────────────────────────
// CYBER PINK — Centralized Question Bank
// Each category has 25 questions → real rotation across multiple play-throughs.
// IDs are globally unique stable integers. Never use array index as an ID.
// ─────────────────────────────────────────────────────────────────────────────

export type CategoryId =
  | "cybersecurity-starter"
  | "network-challenge"
  | "hackers-mindset"
  | "tech-mix";

export type DifficultyLevel =
  | "Très facile"
  | "Facile"
  | "Intermédiaire"
  | "Avancé";

export interface Question {
  id: number;
  categoryId: CategoryId;
  topic: string;
  topicIcon: string;
  difficulty: DifficultyLevel;
  question: string;
  answers: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  securityTip: string;
}

export interface QuizCategory {
  id: CategoryId;
  title: string;
  shortDescription: string;
  difficultyLabel: "Débutant" | "Intermédiaire" | "Mixte";
  accentColor: string;
  glowColor: string;
  icon: string;
  questions: Question[];
}

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY 1 — Cybersecurity Starter (IDs 1-25)
// ─────────────────────────────────────────────────────────────────────────────
const CYBERSECURITY_QUESTIONS: Question[] = [
  {
    id: 1, categoryId: "cybersecurity-starter",
    topic: "Mots de passe", topicIcon: "KeyRound", difficulty: "Très facile",
    question: "Lequel de ces mots de passe offre la meilleure résistance face à une attaque par force brute ?",
    answers: ["Admin2026!", "1234567890", "Velo#Rouge$Pistache92!", "azertyuiop"],
    correctAnswer: 2,
    explanation: "Une phrase de passe longue avec majuscules, chiffres et symboles génère une entropie très élevée, rendant les attaques par force brute quasi impossibles.",
    securityTip: "Adopte les phrases de passe ou utilise un gestionnaire sécurisé comme Bitwarden ou KeePass !"
  },
  {
    id: 2, categoryId: "cybersecurity-starter",
    topic: "Phishing", topicIcon: "Fish", difficulty: "Très facile",
    question: "Tu reçois un SMS 'Colis en attente, cliquez sur bit.ly/urgent-livraison'. Que fais-tu ?",
    answers: ["Je clique immédiatement", "J'ignore et vérifie sur le site officiel du transporteur", "Je transfère le lien à mes contacts", "Je réponds avec mon adresse"],
    correctAnswer: 1,
    explanation: "Le smishing (phishing par SMS) exploite l'urgence. Ne clique jamais sur des liens raccourcis suspects.",
    securityTip: "Les transporteurs légitimes ne demandent jamais de régler des frais imprévus via un simple lien SMS."
  },
  {
    id: 3, categoryId: "cybersecurity-starter",
    topic: "2FA / MFA", topicIcon: "ShieldCheck", difficulty: "Très facile",
    question: "Quelle méthode 2FA est la plus robuste contre le SIM swapping ?",
    answers: ["Code par SMS", "Appel vocal automatique", "Clé matérielle FIDO2/U2F (ex: YubiKey)", "Question secrète sur le premier animal de compagnie"],
    correctAnswer: 2,
    explanation: "Les clés FIDO2/WebAuthn sont liées cryptographiquement au domaine, immunisant contre le phishing et l'interception SMS.",
    securityTip: "Sans clé physique, préfère une appli d'authentification (2FAS, Aegis) plutôt que les SMS."
  },
  {
    id: 4, categoryId: "cybersecurity-starter",
    topic: "Mises à jour", topicIcon: "RefreshCw", difficulty: "Facile",
    question: "Pourquoi est-il crucial d'installer rapidement les mises à jour de sécurité ?",
    answers: ["Pour changer l'apparence des icônes", "Pour combler des failles exploitables par des cybercriminels", "Pour vider automatiquement la corbeille", "Pour libérer de l'espace disque"],
    correctAnswer: 1,
    explanation: "Dès qu'une vulnérabilité est publiée, les pirates scannent le web pour cibler les machines non patchées.",
    securityTip: "Active les mises à jour automatiques sur tous tes appareils (Windows, macOS, iOS, Android, navigateurs)."
  },
  {
    id: 5, categoryId: "cybersecurity-starter",
    topic: "Sauvegardes", topicIcon: "HardDrive", difficulty: "Facile",
    question: "Que préconise la règle '3-2-1' en cybersécurité pour les sauvegardes ?",
    answers: ["3 sauvegardes par jour sur le même PC", "3 copies sur 2 supports différents dont 1 hors site", "3 mots de passe distincts par mois", "3 clés USB branchées en permanence"],
    correctAnswer: 1,
    explanation: "La règle 3-2-1 garantit qu'une copie intacte reste récupérable même en cas de ransomware, vol ou incendie.",
    securityTip: "Déconnecte ton disque de sauvegarde après chaque copie pour le protéger des ransomwares."
  },
  {
    id: 6, categoryId: "cybersecurity-starter",
    topic: "Wi-Fi Public", topicIcon: "Wifi", difficulty: "Facile",
    question: "Quel risque principal présente un Wi-Fi public ouvert ?",
    answers: ["Il épuise le forfait téléphonique", "Des attaquants peuvent intercepter le trafic ou créer un faux point d'accès (Evil Twin)", "La batterie se décharge deux fois plus vite", "L'écran devient visible par tous"],
    correctAnswer: 1,
    explanation: "Sur un Wi-Fi ouvert, le trafic non chiffré peut être capturé (sniffing), et de faux points d'accès peuvent détourner les connexions.",
    securityTip: "Utilise un VPN de confiance ou le partage de connexion 4G/5G lors de tes déplacements."
  },
  {
    id: 7, categoryId: "cybersecurity-starter",
    topic: "Pièces jointes", topicIcon: "AlertTriangle", difficulty: "Facile",
    question: "Un email contient un fichier 'Facture.pdf.exe'. Quel est le danger ?",
    answers: ["Le fichier modifie la police d'écriture par défaut", "La double extension masque un exécutable malveillant", "Le fichier consomme 10% de bande passante en plus", "Le fichier est un format protégé par le CSI"],
    correctAnswer: 1,
    explanation: "L'extension finale réelle .exe révèle un programme exécutable — la première extension .pdf est un leurre.",
    securityTip: "Affiche toujours les extensions de fichiers dans l'explorateur Windows et n'active jamais les macros reçues par email."
  },
  {
    id: 8, categoryId: "cybersecurity-starter",
    topic: "Compte compromis", topicIcon: "UserX", difficulty: "Facile",
    question: "Ton email figure dans une fuite de données (Have I Been Pwned). Première action ?",
    answers: ["Éteindre l'ordinateur 48h", "Changer le mot de passe sur ce site et tous les autres où il était réutilisé", "Créer un compte chez l'attaquant pour le surveiller", "Publier tes identifiants en ligne pour demander de l'aide"],
    correctAnswer: 1,
    explanation: "Les cybercriminels font du 'Credential Stuffing' : ils testent automatiquement les identifiants volés sur des centaines de plateformes.",
    securityTip: "Utilise toujours un mot de passe unique par service pour limiter l'impact d'une fuite."
  },
  {
    id: 9, categoryId: "cybersecurity-starter",
    topic: "Antivirus", topicIcon: "ShieldCheck", difficulty: "Facile",
    question: "Quel est le rôle principal d'un antivirus / EDR moderne ?",
    answers: ["Réparer les composants matériels défectueux", "Détecter, bloquer et neutraliser les menaces en temps réel", "Remplacer le Wi-Fi par de la fibre", "Supprimer les fichiers de plus d'un an"],
    correctAnswer: 1,
    explanation: "Un antivirus moderne combine analyse par signatures, heuristique et comportementale pour neutraliser les menaces.",
    securityTip: "Maintiens Microsoft Defender actif et à jour, et effectue des analyses régulières."
  },
  {
    id: 10, categoryId: "cybersecurity-starter",
    topic: "Ingénierie sociale", topicIcon: "UserX", difficulty: "Intermédiaire",
    question: "Quelqu'un appelle en se prétendant du support informatique et demande ton mot de passe pour une 'maintenance urgente'. Que fais-tu ?",
    answers: ["Je lui donne mon mot de passe", "Je lui donne la moitié du mot de passe", "Je refuse : aucun vrai administrateur n'a besoin de ton mot de passe", "Je rappelle dans 5 minutes pour lui donner"],
    correctAnswer: 2,
    explanation: "C'est de l'ingénierie sociale. Les administrateurs légitimes disposent d'outils et ne demanderont jamais ton mot de passe.",
    securityTip: "Garde toujours ton mot de passe strictement confidentiel. Personne n'a le droit de te l'exiger."
  },
  {
    id: 11, categoryId: "cybersecurity-starter",
    topic: "Ransomware", topicIcon: "Bug", difficulty: "Facile",
    question: "Qu'est-ce qu'un ransomware (rançongiciel) ?",
    answers: ["Un logiciel qui nettoie le disque dur automatiquement", "Un virus qui chiffre tes fichiers et exige une rançon pour les débloquer", "Un antivirus gratuit fourni par l'OS", "Un composant matériel pour accélérer le GPU"],
    correctAnswer: 1,
    explanation: "Le ransomware prend tes fichiers en otage via chiffrement et réclame un paiement, souvent en cryptomonnaie. Même en payant, rien ne garantit la récupération.",
    securityTip: "Fais des sauvegardes régulières sur un disque déconnecté pour ne jamais être à la merci d'un ransomware."
  },
  {
    id: 12, categoryId: "cybersecurity-starter",
    topic: "HTTPS", topicIcon: "Lock", difficulty: "Facile",
    question: "Un site affiche un cadenas HTTPS. Cela signifie-t-il que le site est forcément fiable ?",
    answers: ["Oui, HTTPS garantit que le site est légal et honnête", "Non, HTTPS chiffre le transport mais ne garantit pas l'honnêteté du propriétaire", "Oui, Google vérifie l'identité du propriétaire pour chaque HTTPS", "Non, HTTPS est uniquement décoratif"],
    correctAnswer: 1,
    explanation: "HTTPS chiffre la communication entre ton navigateur et le serveur, mais un site frauduleux peut aussi avoir un certificat HTTPS valide.",
    securityTip: "Vérifie l'URL complète, pas seulement le cadenas ! 'paypal.com.scam.xyz' peut avoir HTTPS."
  },
  {
    id: 13, categoryId: "cybersecurity-starter",
    topic: "Données personnelles", topicIcon: "Share2", difficulty: "Intermédiaire",
    question: "Pourquoi ne faut-il pas publier une photo de ton billet d'avion sur les réseaux sociaux ?",
    answers: ["La photo prend trop de place en mémoire", "Le code-barre/QR code contient tes données personnelles exploitables", "L'algorithme n'aime pas les billets", "La photo perd sa qualité sur Instagram"],
    correctAnswer: 1,
    explanation: "Les billets contiennent des codes-barres avec ton nom, numéro de dossier et parfois des données bancaires — facilement exploitables pour l'usurpation d'identité.",
    securityTip: "Floute ou masque TOUS les codes-barres et données personnelles avant de partager une photo en ligne !"
  },
  {
    id: 14, categoryId: "cybersecurity-starter",
    topic: "Cyberharcèlement", topicIcon: "MessageSquareWarning", difficulty: "Facile",
    question: "Tu es victime de cyberharcèlement. Quel est le bon réflexe immédiat ?",
    answers: ["Supprimer ton compte sans garder de traces", "Prendre des captures d'écran, bloquer l'auteur et contacter le 3018 ou PHAROS", "Répondre avec des insultes pour te défendre", "Payer la somme réclamée pour que ça s'arrête"],
    correctAnswer: 1,
    explanation: "Conserver les preuves est essentiel pour toute démarche judiciaire. Le 3018 est un service gratuit et confidentiel d'aide aux victimes.",
    securityTip: "Ne reste jamais seul(e) face au harcèlement en ligne : parles-en à des proches ou à des professionnels."
  },
  {
    id: 15, categoryId: "cybersecurity-starter",
    topic: "URL suspectes", topicIcon: "Globe", difficulty: "Intermédiaire",
    question: "Quelle URL est la vraie URL officielle de Google ?",
    answers: ["http://www.googIe.com (I majuscule)", "https://google.security-login.xyz", "https://www.google.com/", "https://www.google.com.connexion-service.org"],
    correctAnswer: 2,
    explanation: "Le 'typosquatting' utilise des caractères similaires ou des sous-domaines trompeurs. Le vrai domaine est juste avant le premier slash : 'google.com'.",
    securityTip: "Vérifie attentivement le domaine principal dans la barre d'adresse avant de saisir des informations sensibles."
  },
  {
    id: 16, categoryId: "cybersecurity-starter",
    topic: "Mots de passe", topicIcon: "KeyRound", difficulty: "Très facile",
    question: "Combien de temps faut-il approximativement pour craquer le mot de passe '123456' par force brute ?",
    answers: ["Plusieurs années", "Quelques mois", "Quelques heures", "Moins d'une seconde"],
    correctAnswer: 3,
    explanation: "Les mots de passe simples et communs comme '123456' figurent dans toutes les listes de dictionnaire — ils sont craqués quasi instantanément.",
    securityTip: "Utilise un minimum de 12 caractères mêlant lettres, chiffres et symboles. Les gestionnaires de mots de passe facilitent ça."
  },
  {
    id: 17, categoryId: "cybersecurity-starter",
    topic: "VPN", topicIcon: "Wifi", difficulty: "Intermédiaire",
    question: "Que fait concrètement un VPN (Virtual Private Network) quand tu l'actives ?",
    answers: ["Il double la vitesse de ta connexion internet", "Il chiffre ton trafic et masque ton adresse IP réelle auprès des sites visités", "Il supprime définitivement toutes les publicités", "Il empêche les virus d'infecter ton PC"],
    correctAnswer: 1,
    explanation: "Un VPN crée un tunnel chiffré vers un serveur distant, masquant ton IP et protégeant ton trafic des regards extérieurs, notamment sur les Wi-Fi publics.",
    securityTip: "Choisis un VPN avec une politique 'no-log' vérifiée indépendamment (ex: Mullvad, ProtonVPN)."
  },
  {
    id: 18, categoryId: "cybersecurity-starter",
    topic: "Réseaux sociaux", topicIcon: "Share2", difficulty: "Facile",
    question: "Quel danger représente l'oversharing (surpartage) de données personnelles sur les réseaux sociaux ?",
    answers: ["Aucun, les réseaux sociaux garantissent la confidentialité", "Il permet aux attaquants de deviner tes mots de passe ou réponses secrètes et te cibler par spear-phishing", "Il ralentit uniquement les performances du réseau", "Il consomme plus de données mobiles"],
    correctAnswer: 1,
    explanation: "Les informations partagées (date de naissance, ville, préférences) sont exploitées pour personnaliser des attaques (spear-phishing) ou deviner des questions de sécurité.",
    securityTip: "Réfléchis avant de publier : qui peut voir cette info et comment pourrait-elle être utilisée contre toi ?"
  },
  {
    id: 19, categoryId: "cybersecurity-starter",
    topic: "Chiffrement", topicIcon: "Lock", difficulty: "Intermédiaire",
    question: "Qu'est-ce que le chiffrement de bout en bout (E2E) dans une messagerie comme Signal ?",
    answers: ["Seuls les serveurs de l'application peuvent lire les messages", "Seuls l'expéditeur et le destinataire peuvent déchiffrer les messages", "L'application chiffre uniquement les pièces jointes", "Le chiffrement s'applique uniquement pendant le transfert Wi-Fi"],
    correctAnswer: 1,
    explanation: "Avec le chiffrement E2E, les clés de déchiffrement restent uniquement sur les appareils des utilisateurs. Même l'opérateur du service ne peut pas lire les messages.",
    securityTip: "Utilise Signal ou WhatsApp (E2E activé) pour les communications sensibles plutôt que les SMS classiques non chiffrés."
  },
  {
    id: 20, categoryId: "cybersecurity-starter",
    topic: "Zero-Day", topicIcon: "AlertTriangle", difficulty: "Avancé",
    question: "Qu'est-ce qu'une vulnérabilité Zero-Day ?",
    answers: ["Une faille qui ne fonctionne que le premier jour du mois", "Une faille connue et exploitable pour laquelle aucun correctif n'existe encore", "Un logiciel gratuit sans aucun bug", "Un virus qui s'auto-détruit en 24h"],
    correctAnswer: 1,
    explanation: "Zero-Day signifie que l'éditeur a 'zéro jour' pour réagir car la faille est déjà exploitée avant qu'un patch existe.",
    securityTip: "Adopte une défense en profondeur (isolation, segmentation, EDR) pour mitiger les risques Zero-Day."
  },
  {
    id: 21, categoryId: "cybersecurity-starter",
    topic: "Sécurité mobile", topicIcon: "ShieldCheck", difficulty: "Facile",
    question: "Quelle bonne pratique est essentielle pour sécuriser un smartphone ?",
    answers: ["Installer des applis uniquement depuis n'importe quel APK trouvé en ligne", "Activer le verrouillage par code/biométrie, mettre à jour l'OS et n'installer que depuis les stores officiels", "Désactiver toutes les notifications pour éviter les informations", "Retirer la SIM quand on n'utilise pas le téléphone"],
    correctAnswer: 1,
    explanation: "Les APK non officiels contiennent fréquemment des malwares. Le verrouillage et les mises à jour sont les bases incontournables.",
    securityTip: "Vérifie les permissions demandées par chaque appli : une lampe de poche n'a pas besoin d'accéder à tes contacts !"
  },
  {
    id: 22, categoryId: "cybersecurity-starter",
    topic: "Authentification", topicIcon: "KeyRound", difficulty: "Facile",
    question: "Qu'est-ce qu'un gestionnaire de mots de passe comme Bitwarden ou KeePass ?",
    answers: ["Un programme qui envoie tes mots de passe par email à un serveur distant", "Un outil qui génère, stocke et auto-remplit des mots de passe forts et uniques pour chaque site", "Un antivirus spécialisé dans la détection de chevaux de Troie", "Un programme qui remplace tous tes mots de passe par '1234'"],
    correctAnswer: 1,
    explanation: "Un gestionnaire de mots de passe chiffre et stocke localement (ou dans un cloud sécurisé) des mots de passe forts et uniques, protégés par un seul mot de passe maître.",
    securityTip: "Bitwarden est open source, audité et gratuit. Tu n'as aucune excuse pour réutiliser le même mot de passe partout !"
  },
  {
    id: 23, categoryId: "cybersecurity-starter",
    topic: "Données personnelles", topicIcon: "UserX", difficulty: "Intermédiaire",
    question: "Qu'est-ce que le RGPD (Règlement Général sur la Protection des Données) en France/Europe ?",
    answers: ["Un règlement qui interdit l'utilisation des cookies sur tous les sites", "Un cadre légal qui protège les données personnelles des citoyens européens et impose des obligations aux organisations", "Un logiciel antivirus obligatoire pour les entreprises françaises", "Un protocole réseau pour sécuriser les transferts de fichiers"],
    correctAnswer: 1,
    explanation: "Le RGPD donne aux individus des droits sur leurs données (accès, rectification, suppression) et impose aux entreprises des obligations de traitement responsable.",
    securityTip: "Tu as le droit de demander à toute entreprise de supprimer les données personnelles qu'elle détient sur toi (droit à l'oubli)."
  },
  {
    id: 24, categoryId: "cybersecurity-starter",
    topic: "Hameçonnage", topicIcon: "Fish", difficulty: "Facile",
    question: "Quelle est la caractéristique typique d'un email de phishing ?",
    answers: ["Il provient toujours d'un serveur en Russie visible dans l'objet", "Il crée un sentiment d'urgence artificiel, demande des informations confidentielles et contient souvent des fautes", "Il est toujours envoyé un vendredi à 17h", "Il contient obligatoirement une image attachée en PNG"],
    correctAnswer: 1,
    explanation: "Les emails de phishing exploitent la peur et l'urgence ('Votre compte sera supprimé !') pour pousser à agir sans réfléchir et à divulguer des informations sensibles.",
    securityTip: "Prends le temps de souffler 30 secondes avant de répondre à tout email 'urgent'. Les vraies urgences permettent toujours la vérification."
  },
  {
    id: 25, categoryId: "cybersecurity-starter",
    topic: "Réseaux sociaux", topicIcon: "Globe", difficulty: "Intermédiaire",
    question: "Qu'est-ce que l'usurpation d'identité numérique ?",
    answers: ["Créer un deuxième compte sur un réseau social avec son vrai nom", "Utiliser frauduleusement l'identité d'une personne réelle pour des actes illégaux ou nuire à sa réputation", "Acheter un nom de domaine similaire à celui d'une célébrité", "Changer son pseudo sur un forum en ligne"],
    correctAnswer: 1,
    explanation: "L'usurpation d'identité numérique consiste à se faire passer pour quelqu'un d'autre (faux profils, utilisation des données volées) à des fins malveillantes.",
    securityTip: "Active les alertes Google sur ton propre nom pour être averti si quelqu'un tente d'usurper ton identité en ligne."
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY 2 — Network Challenge (IDs 101-125)
// ─────────────────────────────────────────────────────────────────────────────
const NETWORK_QUESTIONS: Question[] = [
  {
    id: 101, categoryId: "network-challenge",
    topic: "Réseau local (LAN)", topicIcon: "Network", difficulty: "Facile",
    question: "Qu'est-ce qu'un LAN (Local Area Network) ?",
    answers: ["Un réseau mondial reliant tous les continents", "Un réseau interconnectant des appareils dans une zone géographique restreinte (bureau, domicile)", "Un protocole de streaming vidéo HD", "Une antenne satellite militaire"],
    correctAnswer: 1,
    explanation: "Un LAN permet le partage de ressources entre appareils proches, via Ethernet ou Wi-Fi.",
    securityTip: "Segmente ton LAN avec des VLANs pour isoler les équipements sensibles des accès invités."
  },
  {
    id: 102, categoryId: "network-challenge",
    topic: "DNS", topicIcon: "Globe", difficulty: "Facile",
    question: "Quel est le rôle du DNS (Domain Name System) ?",
    answers: ["Compresser les images d'un site web", "Traduire les noms de domaine (ex: google.com) en adresses IP numériques", "Chiffrer les disques durs à distance", "Attribuer une licence logicielle à chaque machine"],
    correctAnswer: 1,
    explanation: "Le DNS est l'annuaire d'Internet : il fait correspondre des noms mémorables à des adresses IP routables.",
    securityTip: "Utilise DNS-over-HTTPS (DoH) ou DNS-over-TLS (DoT) pour empêcher l'espionnage de tes requêtes DNS."
  },
  {
    id: 103, categoryId: "network-challenge",
    topic: "DHCP", topicIcon: "Server", difficulty: "Facile",
    question: "Quel protocole attribue automatiquement une adresse IP à un appareil se connectant à un réseau ?",
    answers: ["HTTP", "DHCP (Dynamic Host Configuration Protocol)", "SMTP", "SSH"],
    correctAnswer: 1,
    explanation: "Le DHCP automatise la configuration réseau grâce au cycle DORA (Discover, Offer, Request, Acknowledge).",
    securityTip: "Surveille les serveurs DHCP non autorisés (Rogue DHCP) qui peuvent distribuer de fausses passerelles."
  },
  {
    id: 104, categoryId: "network-challenge",
    topic: "Adresses IP", topicIcon: "Binary", difficulty: "Facile",
    question: "Laquelle de ces adresses est une adresse IP privée (RFC 1918) non routable sur Internet ?",
    answers: ["8.8.8.8", "1.1.1.1", "192.168.1.50", "142.250.190.46"],
    correctAnswer: 2,
    explanation: "Les plages privées (192.168.x.x, 172.16.x.x, 10.x.x.x) ne sont pas routées sur Internet — elles utilisent NAT pour sortir.",
    securityTip: "Les adresses privées protègent tes machines internes des scans directs depuis Internet."
  },
  {
    id: 105, categoryId: "network-challenge",
    topic: "HTTPS & TLS", topicIcon: "Lock", difficulty: "Intermédiaire",
    question: "Quelle garantie principale apporte le protocole HTTPS (via TLS) par rapport à HTTP ?",
    answers: ["Le site est garanti sans virus", "Le trafic est chiffré et le serveur authentifié", "Le site se charge deux fois plus vite", "L'historique de navigation n'est pas enregistré"],
    correctAnswer: 1,
    explanation: "HTTPS chiffre les échanges via TLS, empêchant l'interception ou la falsification des données en transit.",
    securityTip: "HTTPS ne garantit pas la bonne foi du propriétaire du site — un site frauduleux peut aussi avoir un cadenas !"
  },
  {
    id: 106, categoryId: "network-challenge",
    topic: "Switch vs Routeur", topicIcon: "Network", difficulty: "Intermédiaire",
    question: "Quelle est la différence fondamentale entre un switch (L2) et un routeur (L3) ?",
    answers: ["Le switch est sans fil, le routeur utilise la fibre", "Le switch route selon les adresses MAC, le routeur selon les adresses IP entre réseaux différents", "Le switch génère des emails, le routeur héberge des bases de données", "Ils sont identiques — ce sont deux termes pour le même appareil"],
    correctAnswer: 1,
    explanation: "Le switch travaille au niveau liaison (L2) avec les MAC, le routeur au niveau réseau (L3) avec les IP pour interconnecter des sous-réseaux.",
    securityTip: "Active le 'Port Security' sur les switchs managés pour limiter les adresses MAC autorisées par port."
  },
  {
    id: 107, categoryId: "network-challenge",
    topic: "TCP Three-Way Handshake", topicIcon: "Activity", difficulty: "Intermédiaire",
    question: "Comment s'appelle le mécanisme d'établissement de connexion TCP ?",
    answers: ["Le TCP Round-Robin", "Le Three-Way Handshake (SYN, SYN-ACK, ACK)", "Le DNS Ping-Pong", "Le Token Ring Handshake"],
    correctAnswer: 1,
    explanation: "Le Three-Way Handshake garantit que les deux hôtes sont prêts avant tout échange de données (SYN → SYN-ACK → ACK).",
    securityTip: "Les attaques SYN Flood exploitent ce mécanisme en envoyant des SYN sans jamais confirmer, saturant les ressources du serveur."
  },
  {
    id: 108, categoryId: "network-challenge",
    topic: "CIDR / Sous-réseaux", topicIcon: "Binary", difficulty: "Intermédiaire",
    question: "Un réseau /24 (masque 255.255.255.0) offre combien d'adresses hôtes utilisables ?",
    answers: ["256", "254", "128", "512"],
    correctAnswer: 1,
    explanation: "Un /24 donne 256 adresses, moins 2 réservées (réseau .0 et broadcast .255) = 254 adresses hôtes.",
    securityTip: "Dimensionne précisément tes sous-réseaux pour limiter la taille des domaines de broadcast et réduire la surface d'attaque."
  },
  {
    id: 109, categoryId: "network-challenge",
    topic: "Pare-feu", topicIcon: "ShieldCheck", difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un pare-feu à inspection d'état (Stateful Firewall) ?",
    answers: ["Un pare-feu qui éteint les serveurs en cas de surchauffe", "Un pare-feu qui mémorise l'état des connexions actives pour distinguer les retours légitimes des tentatives d'intrusion", "Un pare-feu qui bloque absolument tout le trafic", "Un pare-feu qui ne fonctionne que sur secteur"],
    correctAnswer: 1,
    explanation: "Un pare-feu stateful suit la table des états TCP/UDP, distinguant un paquet de retour légitime d'une tentative d'intrusion spontanée.",
    securityTip: "Applique la règle 'Deny All by default' : bloque tout et n'ouvre que les ports strictement nécessaires."
  },
  {
    id: 110, categoryId: "network-challenge",
    topic: "ICMP / Ping", topicIcon: "Radio", difficulty: "Facile",
    question: "Quel protocole utilise la commande 'ping' pour tester la connectivité réseau ?",
    answers: ["ICMP (Internet Control Message Protocol)", "FTP", "POP3", "BGP"],
    correctAnswer: 0,
    explanation: "Ping envoie des messages ICMP Echo Request et attend des ICMP Echo Reply pour calculer la latence et détecter les pertes.",
    securityTip: "Traceroute utilise aussi ICMP avec la décrémentation du TTL pour cartographier les routeurs intermédiaires."
  },
  {
    id: 111, categoryId: "network-challenge",
    topic: "Modèle OSI", topicIcon: "Layers", difficulty: "Intermédiaire",
    question: "Le modèle OSI contient combien de couches, et à quelle couche opère le protocole HTTP ?",
    answers: ["4 couches — couche 2", "5 couches — couche 4", "7 couches — couche 7 (Application)", "7 couches — couche 4 (Transport)"],
    correctAnswer: 2,
    explanation: "Le modèle OSI compte 7 couches : Physique, Liaison, Réseau, Transport, Session, Présentation, Application. HTTP opère à la couche 7.",
    securityTip: "Comprendre le modèle OSI permet d'identifier exactement à quelle couche une attaque ou une vulnérabilité opère."
  },
  {
    id: 112, categoryId: "network-challenge",
    topic: "TCP vs UDP", topicIcon: "Activity", difficulty: "Intermédiaire",
    question: "Quelle est la principale différence entre TCP et UDP ?",
    answers: ["TCP est sans fil, UDP utilise Ethernet", "TCP est orienté connexion avec garantie de livraison ; UDP est sans connexion et sans garantie — plus rapide", "UDP chiffre automatiquement les données, TCP ne le fait pas", "TCP n'existe que sur les réseaux locaux"],
    correctAnswer: 1,
    explanation: "TCP assure fiabilité et ordre des paquets (ideal pour le web, email). UDP privilégie la vitesse au détriment de la fiabilité (vidéo en streaming, DNS, jeux).",
    securityTip: "DNS utilise UDP (port 53) pour la rapidité, mais bascule sur TCP pour les réponses longues (>512 octets)."
  },
  {
    id: 113, categoryId: "network-challenge",
    topic: "Adresses MAC", topicIcon: "Network", difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une adresse MAC (Media Access Control) ?",
    answers: ["Un protocole de sécurité pour les systèmes Apple Mac", "Un identifiant physique unique de 48 bits gravé dans la carte réseau", "Une adresse de messagerie institutionnelle", "Un code PIN utilisé pour accéder au réseau Wi-Fi"],
    correctAnswer: 1,
    explanation: "L'adresse MAC est un identifiant matériel unique (ex: AA:BB:CC:DD:EE:FF) utilisé pour les communications à l'intérieur d'un réseau local (couche 2).",
    securityTip: "Le MAC spoofing permet de falsifier cette adresse — c'est pourquoi la sécurité ne doit pas reposer uniquement sur le filtrage MAC."
  },
  {
    id: 114, categoryId: "network-challenge",
    topic: "NAT", topicIcon: "Server", difficulty: "Intermédiaire",
    question: "Quel est le rôle du NAT (Network Address Translation) dans un routeur domestique ?",
    answers: ["Il chiffre toutes les communications sortantes", "Il permet à plusieurs appareils du réseau local de partager une seule adresse IP publique", "Il filtre les sites web inappropriés pour les enfants", "Il attribue des noms de domaine aux appareils locaux"],
    correctAnswer: 1,
    explanation: "Le NAT traduit les adresses IP privées en adresse publique unique pour que plusieurs appareils domestiques puissent accéder à Internet simultanément.",
    securityTip: "Le NAT offre une protection passive en cachant les IP internes, mais ne remplace pas un vrai pare-feu."
  },
  {
    id: 115, categoryId: "network-challenge",
    topic: "Port réseau", topicIcon: "Lock", difficulty: "Facile",
    question: "Sur quel port standard le protocole HTTPS écoute-t-il par défaut ?",
    answers: ["Port 80", "Port 21", "Port 443", "Port 8080"],
    correctAnswer: 2,
    explanation: "HTTPS utilise le port 443 (TCP). HTTP utilise le port 80. FTP utilise 21. Le port 8080 est souvent un HTTP alternatif pour le développement.",
    securityTip: "Connaitre les ports standards est essentiel pour configurer correctement les règles de pare-feu et analyser le trafic réseau."
  },
  {
    id: 116, categoryId: "network-challenge",
    topic: "VPN", topicIcon: "ShieldCheck", difficulty: "Intermédiaire",
    question: "Quel protocole VPN est largement reconnu pour sa sécurité et ses performances modernes ?",
    answers: ["PPTP (Point-to-Point Tunneling Protocol)", "WireGuard", "Telnet", "FTP-SSL"],
    correctAnswer: 1,
    explanation: "WireGuard est un protocole VPN moderne avec un code minimaliste (~4000 lignes), des performances élevées et une cryptographie moderne (ChaCha20, Curve25519).",
    securityTip: "Évite PPTP qui utilise des algorithmes cryptographiques obsolètes et cassés — préfère WireGuard ou OpenVPN."
  },
  {
    id: 117, categoryId: "network-challenge",
    topic: "BGP", topicIcon: "Globe", difficulty: "Avancé",
    question: "Qu'est-ce que le protocole BGP (Border Gateway Protocol) ?",
    answers: ["Un protocole pour attribuer dynamiquement des IPs dans un LAN", "Le protocole de routage inter-domaines qui échange des routes entre systèmes autonomes (AS) sur Internet", "Un protocole de chiffrement pour les emails", "Un protocole d'authentification biométrique"],
    correctAnswer: 1,
    explanation: "BGP est le protocole qui ciment Internet en permettant aux opérateurs (AS) d'échanger des informations de routage et de trouver les chemins optimaux entre réseaux.",
    securityTip: "Le BGP hijacking (détournement de routes) est une attaque réelle — RPKI (Resource Public Key Infrastructure) aide à le prévenir."
  },
  {
    id: 118, categoryId: "network-challenge",
    topic: "Wireshark", topicIcon: "Activity", difficulty: "Intermédiaire",
    question: "À quoi sert l'outil Wireshark dans le contexte réseau ?",
    answers: ["À nettoyer les câbles Ethernet de la poussière", "À capturer et analyser les paquets réseau circulant sur une interface", "À générer des mots de passe Wi-Fi sécurisés automatiquement", "À configurer les règles de pare-feu en mode graphique"],
    correctAnswer: 1,
    explanation: "Wireshark est un analyseur de protocoles (packet sniffer) qui permet de capturer, visualiser et analyser le trafic réseau en temps réel ou depuis un fichier .pcap.",
    securityTip: "Utilise Wireshark uniquement sur des réseaux pour lesquels tu as une autorisation explicite — capturer le trafic d'autrui est illégal."
  },
  {
    id: 119, categoryId: "network-challenge",
    topic: "IPv4 vs IPv6", topicIcon: "Binary", difficulty: "Intermédiaire",
    question: "Pourquoi IPv6 a-t-il été développé pour remplacer progressivement IPv4 ?",
    answers: ["IPv4 était trop lent pour les connexions fibre optique", "L'espace d'adressage IPv4 (4,3 milliards d'adresses) s'est avéré insuffisant face à la croissance d'Internet et des objets connectés", "IPv6 chiffre automatiquement tout le trafic", "IPv4 ne supporte pas le Wi-Fi"],
    correctAnswer: 1,
    explanation: "IPv4 offre ~4,3 milliards d'adresses, épuisées depuis 2011. IPv6 avec 128 bits offre 3,4×10³⁸ adresses, suffisant pour des décennies.",
    securityTip: "Assure-toi que ton pare-feu gère correctement IPv6 — beaucoup d'administrateurs sécurisent IPv4 mais oublient de configurer les règles IPv6."
  },
  {
    id: 120, categoryId: "network-challenge",
    topic: "VLAN", topicIcon: "Network", difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un VLAN (Virtual Local Area Network) ?",
    answers: ["Un réseau privé virtuel chiffré similaire à un VPN", "Une segmentation logique d'un réseau physique permettant d'isoler les groupes d'appareils", "Un protocole de compression des données réseau", "Un logiciel de gestion de bande passante pour les jeux en ligne"],
    correctAnswer: 1,
    explanation: "Un VLAN crée des segments réseau logiques isolés sur la même infrastructure physique, améliorant la sécurité et réduisant les domaines de broadcast.",
    securityTip: "Utilise des VLANs distincts pour les serveurs, les postes employés, le Wi-Fi invité et les équipements IoT."
  },
  {
    id: 121, categoryId: "network-challenge",
    topic: "Modèle OSI", topicIcon: "Layers", difficulty: "Intermédiaire",
    question: "À quelle couche du modèle OSI opère un switch Ethernet standard ?",
    answers: ["Couche 1 (Physique)", "Couche 2 (Liaison de données)", "Couche 3 (Réseau)", "Couche 4 (Transport)"],
    correctAnswer: 1,
    explanation: "Un switch standard opère à la couche 2 en utilisant les adresses MAC pour transférer les trames à l'intérieur d'un même réseau local.",
    securityTip: "Les switchs 'Layer 3' (L3) intègrent des fonctions de routage IP en plus du bridging L2."
  },
  {
    id: 122, categoryId: "network-challenge",
    topic: "Attaque Man-in-the-Middle", topicIcon: "AlertTriangle", difficulty: "Intermédiaire",
    question: "En quoi consiste une attaque Man-in-the-Middle (MITM) ?",
    answers: ["Un attaquant intercepte et peut modifier les communications entre deux parties qui se croient en communication directe", "Un administrateur surveille légalement le trafic réseau", "Un serveur central relaye les messages dans une messagerie instantanée", "Un routeur redirige automatiquement le trafic vers un serveur de sauvegarde"],
    correctAnswer: 0,
    explanation: "Dans une MITM, l'attaquant se positionne entre les deux parties pour espionner, modifier ou injecter du contenu sans que les victimes le sachent.",
    securityTip: "HTTPS et HSTS (HTTP Strict Transport Security) protègent efficacement contre de nombreuses attaques MITM."
  },
  {
    id: 123, categoryId: "network-challenge",
    topic: "DNS over HTTPS", topicIcon: "Lock", difficulty: "Avancé",
    question: "Quel avantage principal offre le protocole DoH (DNS over HTTPS) par rapport au DNS classique ?",
    answers: ["Il résout les noms DNS 10 fois plus vite", "Il chiffre les requêtes DNS dans du HTTPS, empêchant les tiers (FAI, attaquants) d'espionner les sites que tu consultes", "Il remplace complètement les serveurs DNS traditionnels", "Il ajoute une couche d'authentification biométrique"],
    correctAnswer: 1,
    explanation: "Le DNS classique envoie les requêtes en clair (port 53 UDP). DoH les envoie chiffrées via HTTPS (port 443), les rendant invisibles aux intermédiaires.",
    securityTip: "Configure DoH dans ton navigateur (Firefox, Chrome) ou directement dans ton système d'exploitation pour une protection maximale."
  },
  {
    id: 124, categoryId: "network-challenge",
    topic: "Protocole SMTP", topicIcon: "Server", difficulty: "Intermédiaire",
    question: "Quel protocole standard est utilisé pour l'envoi d'emails entre serveurs de messagerie ?",
    answers: ["IMAP (Internet Message Access Protocol)", "POP3 (Post Office Protocol)", "SMTP (Simple Mail Transfer Protocol)", "FTP (File Transfer Protocol)"],
    correctAnswer: 2,
    explanation: "SMTP (port 25, 465 pour SSL, 587 pour STARTTLS) est le protocole d'envoi des emails. IMAP et POP3 sont utilisés pour la réception.",
    securityTip: "L'absence de SPF, DKIM et DMARC sur un domaine permet facilement de forger des emails en se faisant passer pour cette organisation."
  },
  {
    id: 125, categoryId: "network-challenge",
    topic: "Analyse réseau", topicIcon: "Activity", difficulty: "Avancé",
    question: "Qu'est-ce que Nmap et à quoi sert-il ?",
    answers: ["Un générateur de cartes topographiques pour les câbles sous-marins", "Un scanner réseau open source permettant de découvrir les hôtes, ports ouverts et services actifs sur un réseau", "Un protocole de synchronisation d'horloge réseau", "Un pare-feu applicatif pour les serveurs web"],
    correctAnswer: 1,
    explanation: "Nmap (Network Mapper) est l'outil de référence pour la reconnaissance réseau — il identifie les hôtes actifs, les ports ouverts, les services et les systèmes d'exploitation.",
    securityTip: "Utilise Nmap uniquement sur des réseaux pour lesquels tu as une autorisation — l'utilisation non autorisée est illégale dans la plupart des pays."
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY 3 — Hacker's Mindset (IDs 201-225)
// ─────────────────────────────────────────────────────────────────────────────
const HACKERS_QUESTIONS: Question[] = [
  {
    id: 201, categoryId: "hackers-mindset",
    topic: "Injection SQL", topicIcon: "Database", difficulty: "Intermédiaire",
    question: "Quelle méthode élimine définitivement les vulnérabilités d'injection SQL dans une app web ?",
    answers: ["Concaténer directement les variables utilisateur dans la chaîne SQL", "Utiliser des requêtes préparées avec des paramètres (Prepared Statements)", "Cacher le code SQL dans un fichier CSS externe", "Remplacer la base SQL par un fichier texte sans mot de passe"],
    correctAnswer: 1,
    explanation: "Les requêtes paramétrées séparent strictement le code SQL des données, empêchant l'interpréteur d'exécuter des instructions malveillantes injectées.",
    securityTip: "Ne fais jamais confiance aux entrées utilisateurs : valide, nettoie et paramètre systématiquement chaque variable !"
  },
  {
    id: 202, categoryId: "hackers-mindset",
    topic: "Buffer Overflow", topicIcon: "Terminal", difficulty: "Avancé",
    question: "Qu'est-ce qu'une vulnérabilité Buffer Overflow en C/C++ ?",
    answers: ["Un écran qui clignote à cause de la carte graphique", "L'écriture de données au-delà des limites allouées d'un bloc mémoire, pouvant écraser le pointeur de retour", "Un disque qui manque d'espace pour un PDF", "Une surcharge Wi-Fi par trop d'utilisateurs"],
    correctAnswer: 1,
    explanation: "En dépassant la taille du tampon sans contrôle, un attaquant peut écraser l'adresse de retour (RIP/EIP) et détourner le flux d'exécution du programme.",
    securityTip: "Utilise Rust, Go ou Python (mémoire gérée), ou compile avec Stack Canaries, ASLR et DEP/NX activés."
  },
  {
    id: 203, categoryId: "hackers-mindset",
    topic: "Moindre privilège", topicIcon: "ShieldCheck", difficulty: "Facile",
    question: "Que stipule le principe du 'Moindre Privilège' (Least Privilege) ?",
    answers: ["Chaque utilisateur, service ou processus ne doit avoir que les droits strictement nécessaires à sa tâche", "Tous les membres d'une équipe partagent le compte root", "Les ordinateurs fonctionnent à 50% de leur puissance", "Les développeurs ne touchent pas au clavier"],
    correctAnswer: 0,
    explanation: "Limiter les privilèges au minimum réduit drastiquement l'impact et la propagation si un compte ou service est compromis.",
    securityTip: "N'utilise jamais ton compte admin/root pour les tâches quotidiennes ou la navigation web !"
  },
  {
    id: 204, categoryId: "hackers-mindset",
    topic: "Pentest éthique", topicIcon: "Bug", difficulty: "Intermédiaire",
    question: "Qu'est-ce qui distingue légalement un pentest (White Hat) d'une cyberattaque criminelle ?",
    answers: ["L'utilisation d'un terminal à fond noir", "L'autorisation écrite et le périmètre formellement défini par le propriétaire du système", "Ne pas demander d'argent après avoir effacé des données", "Utiliser Linux sans navigateur web"],
    correctAnswer: 1,
    explanation: "Sans autorisation légale préalable signée, toute intrusion ou test de vulnérabilité est un délit pénal, même si l'intention est 'bienveillante'.",
    securityTip: "Participe aux bug bounties légaux (YesWeHack, HackerOne) ou aux plateformes d'entraînement (Root-Me, Hack The Box)."
  },
  {
    id: 205, categoryId: "hackers-mindset",
    topic: "Chiffrement vs Hachage", topicIcon: "KeyRound", difficulty: "Intermédiaire",
    question: "Quelle est la différence fondamentale entre chiffrement (Encryption) et hachage (Hashing) ?",
    answers: ["Le chiffrement s'applique aux images, le hachage aux fichiers audio", "Le chiffrement est réversible avec une clé ; le hachage est une fonction à sens unique irréversible", "Le chiffrement est gratuit, le hachage est payant", "Ils sont parfaitement synonymes"],
    correctAnswer: 1,
    explanation: "Le chiffrement (AES, RSA) permet de retrouver le texte original avec une clé. Le hachage (SHA-256) produit une empreinte fixe non réversible.",
    securityTip: "On chiffre des données à relire plus tard ; on hache des mots de passe pour ne jamais les stocker en clair !"
  },
  {
    id: 206, categoryId: "hackers-mindset",
    topic: "Stockage mots de passe", topicIcon: "Lock", difficulty: "Intermédiaire",
    question: "Quel mécanisme est recommandé par l'OWASP pour stocker les mots de passe en base de données ?",
    answers: ["MD5 simple sans traitement", "Chiffrement symétrique avec clé dans le code source", "Fonction de dérivation lente avec sel unique par utilisateur (Argon2id, bcrypt, PBKDF2)", "Encodage Base64 pour masquer le texte"],
    correctAnswer: 2,
    explanation: "Argon2 et bcrypt intègrent un sel aléatoire contre les rainbow tables et un coût de calcul réglable qui ralentit drastiquement les attaques GPU.",
    securityTip: "L'encodage Base64 N'EST PAS du chiffrement — il se décode instantanément en un clic !"
  },
  {
    id: 207, categoryId: "hackers-mindset",
    topic: "DDoS", topicIcon: "Zap", difficulty: "Facile",
    question: "Qu'est-ce qui caractérise une attaque DDoS (Distributed Denial of Service) ?",
    answers: ["Le vol physique des disques durs d'un datacenter", "Un service est submergé sous un trafic massif généré simultanément par de multiples machines compromises (Botnet)", "L'effacement discret d'une ligne de code", "L'installation d'une fausse mise à jour graphique"],
    correctAnswer: 1,
    explanation: "Un botnet de machines zombies réparties mondialement sature la bande passante ou les ressources serveur pour rendre le service indisponible.",
    securityTip: "Utilise des solutions de mitigation DDoS (Cloudflare, Akamai) et des CDN pour absorber les pics de trafic illégitimes."
  },
  {
    id: 208, categoryId: "hackers-mindset",
    topic: "XSS", topicIcon: "Code2", difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une attaque XSS (Cross-Site Scripting) ?",
    answers: ["Un attaquant injette du code CSS malveillant dans une feuille de style", "Un attaquant injecte des scripts malveillants dans des pages web vues par d'autres utilisateurs", "Un cross-serveur qui partage des fichiers illégaux", "Une technique pour accélérer le chargement des scripts JavaScript"],
    correctAnswer: 1,
    explanation: "XSS permet d'exécuter du JavaScript malveillant dans le navigateur d'une victime via une application web vulnérable, potentiellement volant des cookies de session.",
    securityTip: "Échappe systématiquement toutes les entrées affichées dans le HTML avec des fonctions comme encodeURIComponent() ou des bibliothèques dédiées."
  },
  {
    id: 209, categoryId: "hackers-mindset",
    topic: "Cryptographie RSA", topicIcon: "KeyRound", difficulty: "Avancé",
    question: "Sur quel principe mathématique repose la sécurité de RSA (Rivest-Shamir-Adleman) ?",
    answers: ["La difficulté de trier de grands tableaux de nombres aléatoires", "La difficulté de factoriser le produit de deux très grands nombres premiers", "La difficulté de résoudre des équations différentielles ordinaires", "La difficulté de deviner un mot de passe long"],
    correctAnswer: 1,
    explanation: "RSA repose sur la difficulté computationnelle de factoriser un entier N = p × q (produit de deux grands premiers). Multiplier est facile ; factoriser est (actuellement) très difficile.",
    securityTip: "RSA-1024 bits est considéré insuffisant aujourd'hui — utilise au minimum RSA-2048, ou préfère les courbes elliptiques (ECDSA/EdDSA) pour de meilleures performances."
  },
  {
    id: 210, categoryId: "hackers-mindset",
    topic: "Divulgation responsable", topicIcon: "Users", difficulty: "Intermédiaire",
    question: "Qu'est-ce que la divulgation responsable coordonnée (CVD - Coordinated Vulnerability Disclosure) ?",
    answers: ["Vendre la faille au plus offrant sur le Dark Web", "Signaler confidentiellement la faille à l'éditeur et lui laisser un délai pour publier un correctif avant communication publique", "Publier immédiatement le code d'exploitation pour faire le buzz", "Garder la faille secrète pour s'en servir personnellement"],
    correctAnswer: 1,
    explanation: "La divulgation coordonnée protège les utilisateurs en permettant de déployer un correctif avant que des cybercriminels n'exploitent la faille publiquement.",
    securityTip: "Vérifie le fichier security.txt (domaine/.well-known/security.txt) pour trouver le contact sécurité officiel d'un site."
  },
  {
    id: 211, categoryId: "hackers-mindset",
    topic: "CTF / Base64", topicIcon: "Terminal", difficulty: "Intermédiaire",
    question: "Dans un CTF (Capture The Flag), tu trouves la chaîne 'Q1NJX2N5YmVycGluaw=='. Que représente-t-elle et quel outil utilises-tu ?",
    answers: ["Un hash SHA-256 à déchiffrer avec hashcat", "Un texte encodé en Base64 — décodable avec la commande 'base64 -d' ou un outil en ligne", "Un fichier binaire compilé ELF", "Un token JWT à décoder avec jwt.io"],
    correctAnswer: 1,
    explanation: "Le '==' de fin est le padding caractéristique du Base64. La commande 'echo Q1NJX2N5YmVycGluaw== | base64 -d' révèle le texte original.",
    securityTip: "Base64 est un encodage, pas un chiffrement ! Ne l'utilise jamais pour 'sécuriser' des données sensibles."
  },
  {
    id: 212, categoryId: "hackers-mindset",
    topic: "Analyse de risques", topicIcon: "Sliders", difficulty: "Intermédiaire",
    question: "Comment calcule-t-on traditionnellement le niveau de risque en cybersécurité (méthode EBIOS RM, ISO 27005) ?",
    answers: ["Risque = Vraisemblance × Gravité de l'impact", "Risque = Nombre d'ordinateurs ÷ Nombre de switches", "Risque = Prix du serveur × Vitesse RAM", "Risque = Âge de l'admin + Lignes de code"],
    correctAnswer: 0,
    explanation: "Le niveau de risque combine la probabilité qu'une menace exploite une vulnérabilité et l'ampleur des conséquences (financières, opérationnelles, réputationnelles).",
    securityTip: "Cartographie les actifs critiques de ton organisation pour prioriser les investissements sécurité là où l'impact serait le plus dévastateur."
  },
  {
    id: 213, categoryId: "hackers-mindset",
    topic: "OWASP Top 10", topicIcon: "AlertTriangle", difficulty: "Intermédiaire",
    question: "Quel type d'attaque figure en première position de l'OWASP Top 10 (2021) des risques web les plus critiques ?",
    answers: ["XSS (Cross-Site Scripting)", "Broken Access Control (Contrôle d'accès défaillant)", "Injection SQL uniquement", "Malware et virus informatiques"],
    correctAnswer: 1,
    explanation: "En 2021, 'Broken Access Control' est passé en tête : 94% des applications testées présentaient ce type de vulnérabilité permettant l'accès non autorisé à des ressources.",
    securityTip: "Implémente le principe du moindre privilège dans toute ton application et vérifie les autorisations côté serveur, jamais seulement côté client."
  },
  {
    id: 214, categoryId: "hackers-mindset",
    topic: "Hash / Empreintes", topicIcon: "KeyRound", difficulty: "Intermédiaire",
    question: "Pourquoi les algorithmes MD5 et SHA-1 sont-ils considérés insuffisants pour des usages cryptographiques ?",
    answers: ["Ils sont trop lents pour les serveurs modernes", "Des collisions (deux inputs différents produisant le même hash) ont été trouvées, compromettant leur intégrité", "Ils ne fonctionnent que sur les systèmes Windows XP", "Ils produisent des hashes trop longs pour être stockés"],
    correctAnswer: 1,
    explanation: "Des chercheurs ont démontré des attaques par collisions pratiques contre MD5 (depuis 2004) et SHA-1 (SHAttered, 2017). Utilise SHA-256 ou SHA-3 à la place.",
    securityTip: "Pour la vérification d'intégrité de fichiers, utilise SHA-256 ou SHA-512. Pour les mots de passe, utilise Argon2 ou bcrypt."
  },
  {
    id: 215, categoryId: "hackers-mindset",
    topic: "Social Engineering", topicIcon: "UserX", difficulty: "Facile",
    question: "Qu'est-ce que le 'pretexting' dans le contexte de l'ingénierie sociale ?",
    answers: ["Envoyer un email avec un pré-texte en objet", "Créer un scénario fictif crédible pour manipuler une victime et lui soutirer des informations", "Un outil de hacking pour les tests de pénétration", "Une technique de chiffrement des messages textes"],
    correctAnswer: 1,
    explanation: "Le pretexting consiste à construire un scénario inventé (se faire passer pour un collègue, un technicien, etc.) pour gagner la confiance et obtenir des informations sensibles.",
    securityTip: "Vérifie toujours l'identité d'une personne par un canal différent (appel officiel, email institutionnel) avant de partager des informations sensibles."
  },
  {
    id: 216, categoryId: "hackers-mindset",
    topic: "CVE", topicIcon: "AlertTriangle", difficulty: "Intermédiaire",
    question: "Que signifie CVE dans le contexte de la cybersécurité ?",
    answers: ["Cyber Vulnerability Encryption", "Common Vulnerabilities and Exposures — un système d'identification standardisé des failles de sécurité connues", "Critical Virus Eradication Protocol", "Certified Vulnerability Expert"],
    correctAnswer: 1,
    explanation: "Le système CVE attribue un identifiant unique (ex: CVE-2021-44228 pour Log4Shell) à chaque vulnérabilité connue, facilitant la communication et le suivi des correctifs.",
    securityTip: "Abonne-toi aux alertes CVE sur le NVD (National Vulnerability Database) pour les logiciels que tu utilises en production."
  },
  {
    id: 217, categoryId: "hackers-mindset",
    topic: "CSRF", topicIcon: "Globe", difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une attaque CSRF (Cross-Site Request Forgery) ?",
    answers: ["Un script qui vole le CSS d'un site concurrent", "Un attaquant force le navigateur d'une victime authentifiée à exécuter des actions non souhaitées sur un site web", "Une attaque qui forge de faux certificats SSL", "Un script qui remplace les images d'un site par d'autres"],
    correctAnswer: 1,
    explanation: "CSRF exploite le fait que le navigateur envoie automatiquement les cookies d'un site. L'attaquant fait exécuter une requête à la victime sans qu'elle le sache.",
    securityTip: "Les tokens CSRF anti-forgery et la politique SameSite des cookies sont les défenses principales contre les attaques CSRF."
  },
  {
    id: 218, categoryId: "hackers-mindset",
    topic: "Reverse Engineering", topicIcon: "Terminal", difficulty: "Avancé",
    question: "Dans quel contexte un analyste en cybersécurité pratique-t-il le reverse engineering (rétro-ingénierie) ?",
    answers: ["Pour concevoir un site web plus rapidement en partant d'un modèle existant", "Pour analyser un binaire malveillant (malware) sans avoir accès au code source, et comprendre son fonctionnement", "Pour convertir du code Python en JavaScript automatiquement", "Pour réparer des imprimantes réseau défectueuses"],
    correctAnswer: 1,
    explanation: "Le reverse engineering de malware consiste à désassembler/décompiler un exécutable pour comprendre ses capacités, son infrastructure C2 et produire des règles de détection.",
    securityTip: "Outils courants : Ghidra (NSA, gratuit), IDA Pro, x64dbg pour le débogage dynamique, et les sandboxes (Cuckoo, Any.run) pour l'analyse comportementale."
  },
  {
    id: 219, categoryId: "hackers-mindset",
    topic: "SSRF", topicIcon: "Server", difficulty: "Avancé",
    question: "Qu'est-ce qu'une vulnérabilité SSRF (Server-Side Request Forgery) ?",
    answers: ["Un attaquant force le serveur à effectuer des requêtes HTTP vers des ressources internes ou externes non prévues", "Un script qui simule des requêtes utilisateur pour tester les performances", "Un pare-feu qui filtre les formulaires HTML", "Une requête envoyée depuis un mobile en roaming"],
    correctAnswer: 0,
    explanation: "SSRF permet d'utiliser le serveur comme relais pour accéder à des métadonnées cloud (ex: AWS IMDSv1), des services internes ou des ressources normalement inaccessibles.",
    securityTip: "La vulnérabilité Log4Shell (CVE-2021-44228) utilisait entre autres des techniques SSRF via JNDI lookups."
  },
  {
    id: 220, categoryId: "hackers-mindset",
    topic: "Cryptographie symétrique", topicIcon: "Lock", difficulty: "Intermédiaire",
    question: "Quel algorithme de chiffrement symétrique est actuellement le standard recommandé par le NIST pour chiffrer des données sensibles ?",
    answers: ["DES (Data Encryption Standard)", "3DES (Triple DES)", "AES-256 (Advanced Encryption Standard)", "RC4 (Rivest Cipher 4)"],
    correctAnswer: 2,
    explanation: "AES-256 est le standard de chiffrement symétrique recommandé depuis 2001 par le NIST. DES et 3DES sont obsolètes. RC4 est cassé.",
    securityTip: "Utilise AES-256-GCM qui combine chiffrement et authentification (AEAD) pour éviter les attaques par oracle de padding."
  },
  {
    id: 221, categoryId: "hackers-mindset",
    topic: "Linux / CTF", topicIcon: "Terminal", difficulty: "Intermédiaire",
    question: "Quelle commande Linux permet de voir les droits d'un fichier et à qui il appartient ?",
    answers: ["cat /etc/permissions", "ls -la nom_du_fichier", "chmod --list", "rights -show nom_du_fichier"],
    correctAnswer: 1,
    explanation: "'ls -la' affiche les permissions (rwxrwxrwx), le propriétaire et le groupe pour chaque fichier — indispensable lors d'un audit de sécurité ou d'un CTF.",
    securityTip: "Un fichier avec le bit SUID (chmod +s) s'exécute avec les privilèges de son propriétaire — une cible classique dans les CTF de privilege escalation."
  },
  {
    id: 222, categoryId: "hackers-mindset",
    topic: "Pentesting", topicIcon: "Bug", difficulty: "Intermédiaire",
    question: "Quelle phase du pentesting correspond à la collecte d'informations sur la cible avant toute tentative d'exploitation ?",
    answers: ["Exploitation", "Rapport final", "Reconnaissance (OSINT)", "Nettoyage des traces"],
    correctAnswer: 2,
    explanation: "La reconnaissance est la première phase — elle consiste à collecter passivement (OSINT) ou activement des informations sur la cible (DNS, IP, technologies, employés).",
    securityTip: "Outils OSINT courants : Shodan, theHarvester, Maltego, LinkedIn, et Google Dorking avec des opérateurs avancés."
  },
  {
    id: 223, categoryId: "hackers-mindset",
    topic: "Clé publique / privée", topicIcon: "KeyRound", difficulty: "Intermédiaire",
    question: "En cryptographie asymétrique, comment envoie-t-on un message chiffré à quelqu'un ?",
    answers: ["On chiffre avec sa propre clé privée et on déchiffre avec sa clé publique", "On chiffre avec la clé PUBLIQUE du destinataire et il déchiffre avec sa clé PRIVÉE", "On partage la même clé symétrique chiffrée en MD5", "On envoie d'abord la clé privée du destinataire par email sécurisé"],
    correctAnswer: 1,
    explanation: "En cryptographie asymétrique, le destinataire publie sa clé publique. L'émetteur chiffre avec cette clé publique et seul le destinataire peut déchiffrer avec sa clé privée secrète.",
    securityTip: "La signature numérique fonctionne dans l'autre sens : tu signes avec ta clé PRIVÉE et n'importe qui vérifie avec ta clé PUBLIQUE."
  },
  {
    id: 224, categoryId: "hackers-mindset",
    topic: "Audit de sécurité", topicIcon: "ShieldCheck", difficulty: "Intermédiaire",
    question: "Quelle est la différence entre un audit de sécurité et un test d'intrusion (pentest) ?",
    answers: ["Il n'y a aucune différence, ce sont des synonymes", "L'audit évalue la conformité et l'état général de la sécurité selon un référentiel ; le pentest simule activement des attaques pour trouver des vulnérabilités exploitables", "L'audit est illégal sans autorisation judiciaire", "Le pentest est réservé aux forces de l'ordre"],
    correctAnswer: 1,
    explanation: "Un audit vérifie la conformité à des normes (ISO 27001, CIS) et l'état général des mesures de sécurité. Un pentest va plus loin en testant activement l'exploitabilité des failles.",
    securityTip: "Combine audits réguliers (conformité) et pentests périodiques (exploitation réelle) pour une évaluation de sécurité complète."
  },
  {
    id: 225, categoryId: "hackers-mindset",
    topic: "Forensique numérique", topicIcon: "Database", difficulty: "Avancé",
    question: "Qu'est-ce que la forensique numérique (Digital Forensics) ?",
    answers: ["La conception de systèmes de surveillance biométrique", "La collecte, préservation, analyse et présentation de preuves numériques dans un cadre légal", "La programmation de virus à des fins éducatives", "L'optimisation des performances des bases de données"],
    correctAnswer: 1,
    explanation: "La forensique numérique identifie, collecte et analyse des preuves depuis des appareils numériques dans le respect de la chaîne de custody, pour des procédures judiciaires.",
    securityTip: "Outils courants : Autopsy, The Sleuth Kit, Volatility (mémoire vive), Wireshark (réseau), FTK — et toujours travailler sur une copie pour préserver les originaux."
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY 4 — Tech Mix (IDs 301-325)
// ─────────────────────────────────────────────────────────────────────────────
const TECH_MIX_QUESTIONS: Question[] = [
  {
    id: 301, categoryId: "tech-mix",
    topic: "HTML sémantique", topicIcon: "Code2", difficulty: "Facile",
    question: "Pourquoi utiliser des balises HTML5 sémantiques (<main>, <nav>, <article>, <header>) plutôt que des <div> génériques ?",
    answers: ["Les <div> empêchent le navigateur d'afficher des couleurs", "Pour améliorer l'accessibilité, le SEO et la lisibilité du code", "Les balises sémantiques augmentent automatiquement la bande passante", "HTML5 ne supporte plus la balise <div>"],
    correctAnswer: 1,
    explanation: "Les balises sémantiques structurent le document avec du sens pour les lecteurs d'écran (a11y), les moteurs de recherche et les développeurs.",
    securityTip: "Utilise <button> pour les actions cliquables et <a> pour la navigation afin de préserver la navigation clavier native."
  },
  {
    id: 302, categoryId: "tech-mix",
    topic: "CSS Flexbox", topicIcon: "Layout", difficulty: "Facile",
    question: "En CSS Flexbox, quelle propriété centre un élément à la fois horizontalement ET verticalement dans son conteneur ?",
    answers: ["display: block; float: center;", "display: flex; justify-content: center; align-items: center;", "margin: auto-center; vertical-align: middle;", "position: static; text-align: middle;"],
    correctAnswer: 1,
    explanation: "Flexbox simplifie l'alignement : `justify-content` contrôle l'axe principal, `align-items` l'axe secondaire.",
    securityTip: "CSS Grid et Flexbox permettent des interfaces adaptatives sans surcharger le DOM de scripts JavaScript inutiles."
  },
  {
    id: 303, categoryId: "tech-mix",
    topic: "API REST / HTTP", topicIcon: "Server", difficulty: "Facile",
    question: "Dans une API REST, quel code HTTP signifie que la ressource demandée est introuvable ?",
    answers: ["200 OK", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently"],
    correctAnswer: 1,
    explanation: "2xx = succès, 3xx = redirection, 4xx = erreur client (404 introuvable, 401 non authentifié, 403 interdit), 5xx = erreur serveur.",
    securityTip: "Ne révèle jamais de stack traces ou d'infos système sensibles dans tes réponses d'erreur 500."
  },
  {
    id: 304, categoryId: "tech-mix",
    topic: "Machine Learning", topicIcon: "Bot", difficulty: "Intermédiaire",
    question: "Qu'est-ce que le phénomène de 'Surapprentissage' (Overfitting) en Machine Learning ?",
    answers: ["Un modèle qui s'entraîne à 10 fois la vitesse normale", "Un modèle qui apprend les données d'entraînement par cœur (bruit inclus) et ne généralise pas sur de nouvelles données", "Un algorithme qui consomme 100% de la RAM dès le démarrage", "Une IA qui refuse de répondre aux développeurs"],
    correctAnswer: 1,
    explanation: "L'overfitting se produit quand le modèle capture les détails spécifiques au jeu d'entraînement plutôt que les motifs généralisables.",
    securityTip: "Sépare toujours tes données en ensembles d'entraînement (Train), validation (Val) et test (Test) distincts."
  },
  {
    id: 305, categoryId: "tech-mix",
    topic: "Faux Positifs", topicIcon: "AlertCircle", difficulty: "Intermédiaire",
    question: "Dans un système de détection d'intrusions (IDS/SIEM), qu'est-ce qu'un 'Faux Positif' ?",
    answers: ["Une attaque réelle non détectée par le système", "Une alerte déclenchée à tort alors que l'activité était en réalité légitime", "Un serveur qui redémarre sans raison", "Une mise à jour installée avec succès"],
    correctAnswer: 1,
    explanation: "Un faux positif est une fausse alarme. Un faux négatif (attaque non détectée) est souvent plus dangereux pour la sécurité.",
    securityTip: "Calibre régulièrement les règles de ton SIEM pour éviter la 'fatigue d'alerte' (Alert Fatigue) chez les analystes SOC."
  },
  {
    id: 306, categoryId: "tech-mix",
    topic: "Systèmes embarqués", topicIcon: "Cpu", difficulty: "Intermédiaire",
    question: "Quelle est la caractéristique primordiale d'un RTOS (Real-Time Operating System) embarqué ?",
    answers: ["La plus belle interface graphique du marché", "La garantie d'exécuter les tâches critiques dans des délais strictement prédictibles et déterministes", "Il n'utilise aucune horloge matérielle", "Il ne fonctionne qu'avec des écrans tactiles 4K"],
    correctAnswer: 1,
    explanation: "Dans un RTOS (FreeRTOS, Zephyr), le déterminisme temporel prime : rater une échéance (deadline) peut compromettre la sécurité physique.",
    securityTip: "Gère rigoureusement les priorités de tâches pour éviter les inversions de priorité (Priority Inversion)."
  },
  {
    id: 307, categoryId: "tech-mix",
    topic: "IoT / MQTT", topicIcon: "Radio", difficulty: "Facile",
    question: "Quel protocole léger est le standard pour la communication entre capteurs IoT à faible bande passante ?",
    answers: ["MQTT (Message Queuing Telemetry Transport)", "FTP", "BGP", "IMAP"],
    correctAnswer: 0,
    explanation: "MQTT est conçu pour être compact, économe en énergie et fiable même sur des réseaux instables ou avec des microcontrôleurs limités.",
    securityTip: "Active l'authentification et TLS (port 8883) sur tes brokers MQTT pour empêcher l'espionnage des données capteurs."
  },
  {
    id: 308, categoryId: "tech-mix",
    topic: "Microcontrôleurs", topicIcon: "Cpu", difficulty: "Intermédiaire",
    question: "Qu'est-ce qui distingue principalement un microcontrôleur (STM32, Arduino) d'un microprocesseur (Intel Core) ?",
    answers: ["Le microcontrôleur ne sait exécuter que du JavaScript", "Le microcontrôleur intègre CPU, mémoire Flash/RAM et périphériques (GPIO, ADC, UART) sur une seule puce", "Le microcontrôleur nécessite 64 Go de RAM externe", "Le microcontrôleur ne fonctionne que dans le vide"],
    correctAnswer: 1,
    explanation: "Un MCU (SoC) est un système complet autonome ultra compact à faible consommation, parfait pour piloter capteurs et actionneurs.",
    securityTip: "Active la protection en lecture (RDP - Readout Protection) sur tes STM32 pour empêcher l'extraction frauduleuse du firmware via JTAG/SWD."
  },
  {
    id: 309, categoryId: "tech-mix",
    topic: "Accessibilité (a11y)", topicIcon: "Sparkles", difficulty: "Facile",
    question: "Quelle bonne pratique WCAG garantit que les personnes malvoyantes ou daltoniennes peuvent utiliser ton interface web ?",
    answers: ["Écrire tous les textes en taille 8px avec des couleurs pastels", "Ne jamais transmettre une information uniquement par la couleur et respecter un ratio de contraste d'au moins 4.5:1 pour le texte normal", "Désactiver la navigation clavier et exiger une souris", "Supprimer tous les textes descriptifs et les attributs alt"],
    correctAnswer: 1,
    explanation: "L'accessibilité WCAG impose des contrastes lisibles, des descriptions textuelles pour les médias, et des indicateurs complémentaires à la couleur seule.",
    securityTip: "Une interface claire et contrastée réduit aussi les erreurs de manipulation lors de configurations de sécurité critiques."
  },
  {
    id: 310, categoryId: "tech-mix",
    topic: "Sécurité IoT", topicIcon: "ShieldCheck", difficulty: "Facile",
    question: "Quelle est la vulnérabilité la plus répandue dans les botnets comme Mirai ciblant les appareils IoT ?",
    answers: ["L'utilisation d'identifiants et mots de passe par défaut (admin/admin) jamais modifiés", "L'absence d'écran tactile sur l'objet connecté", "La présence d'un câble Ethernet noir plutôt que bleu", "L'utilisation d'une batterie trop puissante"],
    correctAnswer: 0,
    explanation: "Des millions d'objets IoT déployés avec des credentials par défaut connus permettent à des vers automatisés de les asservir dans des botnets géants.",
    securityTip: "Change impérativement les mots de passe par défaut, désactive Telnet/UPnP non sécurisé et isole les IoT sur un VLAN dédié !"
  },
  {
    id: 311, categoryId: "tech-mix",
    topic: "React / JavaScript", topicIcon: "Code2", difficulty: "Intermédiaire",
    question: "Dans React, à quoi sert le hook 'useState' ?",
    answers: ["À effectuer des requêtes HTTP vers une API", "À déclarer et gérer l'état local d'un composant fonctionnel, déclenchant un re-rendu quand la valeur change", "À chiffrer les données stockées dans le composant", "À créer une animation CSS automatiquement"],
    correctAnswer: 1,
    explanation: "useState retourne une valeur d'état et une fonction setter. Appeler le setter avec une nouvelle valeur déclenche un re-rendu du composant.",
    securityTip: "Ne stocke jamais des informations sensibles (tokens, mots de passe) dans l'état React — il est accessible via les DevTools."
  },
  {
    id: 312, categoryId: "tech-mix",
    topic: "Réseaux de neurones", topicIcon: "Bot", difficulty: "Intermédiaire",
    question: "Qu'est-ce que la rétropropagation (Backpropagation) dans l'entraînement d'un réseau de neurones ?",
    answers: ["Le processus qui inverse l'ordre des couches du réseau", "L'algorithme qui calcule les gradients de l'erreur par rapport aux poids et propage cette information vers les couches précédentes pour les ajuster", "Un mécanisme de protection contre les attaques adversariales", "La phase d'évaluation sur les données de test"],
    correctAnswer: 1,
    explanation: "La backpropagation utilise la règle de la chaîne pour calculer les gradients couche par couche depuis la sortie vers l'entrée, permettant la descente de gradient.",
    securityTip: "Les attaques adversariales ajoutent des perturbations imperceptibles à l'entrée pour tromper les réseaux de neurones — un domaine actif de recherche."
  },
  {
    id: 313, categoryId: "tech-mix",
    topic: "GPIO embarqué", topicIcon: "Cpu", difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une broche GPIO (General Purpose Input/Output) sur un microcontrôleur ?",
    answers: ["Une entrée d'alimentation haute tension pour les moteurs", "Une broche programmable pouvant fonctionner en entrée (lire un signal) ou en sortie (piloter un composant)", "Un bus de communication série exclusivement dédié au débogage", "Un fusible de protection contre les courts-circuits"],
    correctAnswer: 1,
    explanation: "Les GPIO sont les broches polyvalentes d'un MCU — configurées en entrée pour lire des capteurs (bouton, thermistance) ou en sortie pour piloter des LEDs, moteurs, etc.",
    securityTip: "Protège toujours les GPIO avec des résistances appropriées pour éviter les courts-circuits et les dommages matériels irréversibles."
  },
  {
    id: 314, categoryId: "tech-mix",
    topic: "Intelligence artificielle", topicIcon: "Bot", difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un Transformeur (Transformer) en Deep Learning et quel en est le mécanisme central ?",
    answers: ["Un convertisseur de tension électrique dans les cartes graphiques IA", "Une architecture de réseau de neurones basée sur le mécanisme d'Attention (Self-Attention) qui traite les séquences en parallèle", "Un algorithme de tri optimisé pour les grandes bases de données", "Un système de fichiers distribué pour le stockage des données d'entraînement"],
    correctAnswer: 1,
    explanation: "Le Transformer (Vaswani et al., 2017) révolutionne le NLP et l'IA grâce à l'auto-attention qui pondère l'importance de chaque élément par rapport aux autres dans la séquence.",
    securityTip: "Les LLMs (GPT, Gemini, Claude) sont tous basés sur l'architecture Transformer — comprendre ses bases aide à mieux utiliser et auditer ces modèles."
  },
  {
    id: 315, categoryId: "tech-mix",
    topic: "Figma / UI Design", topicIcon: "Layout", difficulty: "Facile",
    question: "Dans Figma, qu'est-ce qu'un 'Component' (Composant) et quel avantage offre-t-il ?",
    answers: ["Un plugin payant pour exporter des images", "Un élément réutilisable dont les 'Instances' partagent les modifications appliquées au composant maître", "Une page dédiée aux annotations de conception", "Un outil de vérification de l'accessibilité des couleurs"],
    correctAnswer: 1,
    explanation: "Les composants Figma permettent la cohérence du design system : modifier le maître propage automatiquement les changements à toutes les instances.",
    securityTip: "Organise tes composants en bibliothèques partagées pour maintenir la cohérence visuelle dans toute ton équipe."
  },
  {
    id: 316, categoryId: "tech-mix",
    topic: "TypeScript", topicIcon: "Code2", difficulty: "Intermédiaire",
    question: "Quel avantage principal TypeScript apporte-t-il par rapport à JavaScript pur ?",
    answers: ["TypeScript s'exécute 3 fois plus vite que JavaScript dans le navigateur", "TypeScript ajoute un typage statique optionnel qui détecte les erreurs à la compilation avant l'exécution", "TypeScript remplace totalement Node.js", "TypeScript chiffre automatiquement les variables"],
    correctAnswer: 1,
    explanation: "Le typage statique de TypeScript permet de détecter des catégories entières d'erreurs (mauvais types, propriétés inexistantes) avant même d'exécuter le code.",
    securityTip: "Utilise les types stricts (strict: true dans tsconfig) pour maximiser la détection d'erreurs et éviter les accès undefined non gérés."
  },
  {
    id: 317, categoryId: "tech-mix",
    topic: "ADC embarqué", topicIcon: "Cpu", difficulty: "Avancé",
    question: "Un ADC 12 bits alimente une tension de 1.65V sur une référence de 3.3V. Quelle valeur numérique lit-on ?",
    answers: ["1024", "2048", "4095", "512"],
    correctAnswer: 1,
    explanation: "Un ADC 12 bits donne 2¹² = 4096 niveaux (0 à 4095). 1.65V / 3.3V = 0.5 × 4096 = 2048. La valeur lue est donc 2048.",
    securityTip: "Vérifie toujours la tension de référence de ton ADC — une référence instable génère des mesures erratiques et des bugs difficiles à diagnostiquer."
  },
  {
    id: 318, categoryId: "tech-mix",
    topic: "Modèles de couleurs", topicIcon: "Layout", difficulty: "Facile",
    question: "Quelle est la différence entre les modèles de couleurs RVB (RGB) et CMJN (CMYK) en design ?",
    answers: ["Aucune, les deux sont identiques et interchangeables", "RGB est additif et utilisé pour les écrans ; CMJN est soustractif et utilisé pour l'impression", "RGB s'utilise pour l'impression 3D, CMJN pour les sites web", "RGB utilise 5 couleurs primaires, CMJN en utilise 8"],
    correctAnswer: 1,
    explanation: "RGB additionne les lumières (rouge + vert + bleu = blanc). CMJN soustrait des pigments d'encre sur papier blanc (Cyan + Magenta + Jaune + Noir).",
    securityTip: "Toujours convertir en CMJN avant d'envoyer un fichier à l'imprimerie — les couleurs RGB peuvent sembler vives sur écran mais ternes une fois imprimées."
  },
  {
    id: 319, categoryId: "tech-mix",
    topic: "HTTP/2", topicIcon: "Server", difficulty: "Avancé",
    question: "Quelle amélioration majeure HTTP/2 apporte par rapport à HTTP/1.1 pour les performances web ?",
    answers: ["HTTP/2 nécessite obligatoirement un certificat TLS payant", "HTTP/2 permet le multiplexage (plusieurs requêtes parallèles sur une seule connexion TCP), éliminant le problème de Head-of-Line Blocking", "HTTP/2 supprime le support des cookies pour améliorer la sécurité", "HTTP/2 compresse uniquement les images PNG"],
    correctAnswer: 1,
    explanation: "HTTP/1.1 ne peut envoyer qu'une requête à la fois par connexion. HTTP/2 multiplex plusieurs flux sur une seule connexion TCP, réduisant drastiquement la latence.",
    securityTip: "HTTP/2 est activé automatiquement par la plupart des serveurs modernes (Nginx, Caddy) avec HTTPS — une raison de plus d'utiliser TLS."
  },
  {
    id: 320, categoryId: "tech-mix",
    topic: "GAN / IA générative", topicIcon: "Bot", difficulty: "Avancé",
    question: "Comment fonctionne un réseau GAN (Generative Adversarial Network) ?",
    answers: ["Un réseau de neurones entraîné sur des données labellisées pour classifier des images", "Un générateur crée de fausses données et un discriminateur les distingue des vraies — les deux s'améliorent mutuellement", "Un algorithme de tri génétique inspiré de l'évolution naturelle", "Un système de consensus distribué pour les blockchains"],
    correctAnswer: 1,
    explanation: "Dans un GAN, le générateur (G) tente de créer des données indiscernables des vraies ; le discriminateur (D) tente de les détecter. L'adversité mutuelle améliore les deux réseaux.",
    securityTip: "Les GANs sont à la base des deepfakes — une raison de développer des détecteurs robustes et d'éduquer le public à la méfiance visuelle."
  },
  {
    id: 321, categoryId: "tech-mix",
    topic: "I2C / SPI embarqué", topicIcon: "Cpu", difficulty: "Intermédiaire",
    question: "Quelle est la principale différence entre les bus de communication I²C et SPI dans les systèmes embarqués ?",
    answers: ["I²C est sans fil, SPI utilise des câbles cuivre", "I²C utilise 2 fils (SDA + SCL) et supporte plusieurs maîtres et esclaves via adressage ; SPI utilise 4+ fils avec chip select et est plus rapide", "SPI est exclusif aux microcontrôleurs Atmel, I²C aux ARM", "Il n'y a aucune différence fonctionnelle entre les deux"],
    correctAnswer: 1,
    explanation: "I²C est idéal pour connecter plusieurs capteurs lents (accéléromètre, RTC) avec peu de fils. SPI convient aux périphériques rapides (écrans, Flash SPI, capteurs haute fréquence).",
    securityTip: "Protège les bus I²C/SPI dans les produits embarqués : un attaquant avec accès physique peut sniffer ces communications pour extraire des secrets."
  },
  {
    id: 322, categoryId: "tech-mix",
    topic: "Next.js / React", topicIcon: "Code2", difficulty: "Intermédiaire",
    question: "Quelle est la différence entre le rendu côté serveur (SSR) et la génération statique (SSG) dans Next.js ?",
    answers: ["SSR génère les pages à la compilation ; SSG les génère à chaque requête sur le serveur", "SSR génère les pages à chaque requête côté serveur ; SSG génère les pages à la compilation pour être servies statiquement", "Il n'y a aucune différence de performance entre les deux", "SSG nécessite une base de données, SSR fonctionne sans"],
    correctAnswer: 1,
    explanation: "SSR offre des données toujours fraîches mais charge le serveur à chaque requête. SSG est ultra-rapide (pages pré-générées en CDN) mais moins adapté aux données très dynamiques.",
    securityTip: "Avec SSR, attention aux fuites d'informations côté serveur — ne transmets jamais de variables d'environnement secrètes dans les props envoyées au client."
  },
  {
    id: 323, categoryId: "tech-mix",
    topic: "Interruptions embarquées", topicIcon: "Cpu", difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une interruption matérielle (Hardware Interrupt) dans un microcontrôleur ?",
    answers: ["Un bouton d'arrêt d'urgence physique sur le PCB", "Un signal qui interrompt l'exécution du programme principal pour exécuter une routine de service prioritaire (ISR)", "Un outil de débogage pour suspendre le programme depuis un ordinateur", "Un filtre électronique pour éviter les parasites sur les broches GPIO"],
    correctAnswer: 1,
    explanation: "Les interruptions permettent au MCU de réagir instantanément à des événements externes (bouton, fin de conversion ADC, réception UART) sans polling continu.",
    securityTip: "Garde les ISR (Interrupt Service Routines) aussi courtes que possible — les traitements longs doivent être déférés dans la boucle principale."
  },
  {
    id: 324, categoryId: "tech-mix",
    topic: "Design System", topicIcon: "Layout", difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un Design System dans le contexte du développement produit ?",
    answers: ["Un logiciel de gestion de projet pour les équipes de design", "Un ensemble de composants UI réutilisables, de tokens (couleurs, typo, espacement) et de directives qui garantissent la cohérence visuelle d'un produit", "Un protocole de versioning pour les fichiers Photoshop", "Un système d'exploitation dédié aux designers graphiques"],
    correctAnswer: 1,
    explanation: "Un Design System centralise les décisions visuelles et interactives (Storybook, Figma Libraries) pour que toutes les équipes (design, dev) travaillent avec les mêmes composants.",
    securityTip: "Inclure des composants d'accessibilité (boutons, formulaires, modales) par défaut dans le Design System garantit que toute l'app respecte les WCAG dès le départ."
  },
  {
    id: 325, categoryId: "tech-mix",
    topic: "Modèles de diffusion (IA)", topicIcon: "Bot", difficulty: "Avancé",
    question: "Comment fonctionnent les modèles de diffusion (Diffusion Models) comme Stable Diffusion pour générer des images ?",
    answers: ["Ils copient des images existantes de leur base de données d'entraînement", "Ils apprennent à débruiter progressivement du bruit aléatoire pour reconstruire une image cohérente guidée par un prompt", "Ils combinent plusieurs photos réelles par collage numérique automatique", "Ils utilisent des GANs inverses pour compresser les images sources"],
    correctAnswer: 1,
    explanation: "Les modèles de diffusion ajoutent progressivement du bruit à des images (forward process), puis apprennent à inverser ce processus (reverse diffusion) pour générer des images à partir de bruit pur.",
    securityTip: "Les images générées par IA peuvent être utilisées pour créer de fausses preuves — des outils de détection (watermarking, C2PA) émergent pour tracer l'origine des médias."
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ASSEMBLED CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────
export const QUIZ_CATEGORIES: QuizCategory[] = [
  {
    id: "cybersecurity-starter",
    title: "Cybersecurity Starter",
    shortDescription: "Maîtrise les bases essentielles de l'hygiène numérique, des mots de passe et de la protection personnelle.",
    difficultyLabel: "Débutant",
    accentColor: "#FF2D92",
    glowColor: "rgba(255, 45, 146, 0.5)",
    icon: "ShieldCheck",
    questions: CYBERSECURITY_QUESTIONS
  },
  {
    id: "network-challenge",
    title: "Network Challenge",
    shortDescription: "Plonge au cœur des protocoles, de l'adressage IP, du routage et de l'architecture des réseaux informatiques.",
    difficultyLabel: "Intermédiaire",
    accentColor: "#E83E8C",
    glowColor: "rgba(232, 62, 140, 0.5)",
    icon: "Network",
    questions: NETWORK_QUESTIONS
  },
  {
    id: "hackers-mindset",
    title: "Hacker's Mindset",
    shortDescription: "Comprends les vecteurs d'attaque, la cryptographie et les principes du hacking éthique et défensif.",
    difficultyLabel: "Intermédiaire",
    accentColor: "#FF6BB5",
    glowColor: "rgba(255, 107, 181, 0.5)",
    icon: "Bug",
    questions: HACKERS_QUESTIONS
  },
  {
    id: "tech-mix",
    title: "Tech Mix",
    shortDescription: "Explore les technologies modernes : développement web, IA générative, systèmes embarqués, IoT et UI/UX.",
    difficultyLabel: "Mixte",
    accentColor: "#FFD6E8",
    glowColor: "rgba(255, 214, 232, 0.4)",
    icon: "Cpu",
    questions: TECH_MIX_QUESTIONS
  }
];

// Helper
export function getCategoryById(id: string): QuizCategory {
  return QUIZ_CATEGORIES.find(c => c.id === id) || QUIZ_CATEGORIES[0];
}

// ─────────────────────────────────────────────────────────────────────────────
// RANKS
// ─────────────────────────────────────────────────────────────────────────────
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
    minScore: 900, maxScore: 1000,
    title: "Cyber Expert", badge: "🏆", badgeIcon: "Trophy",
    description: "Tes réflexes cyber sont exceptionnels ! Tu es le bouclier numérique parfait pour ta promo et le CSI !",
    color: "#FF2D92", glowColor: "rgba(255, 45, 146, 0.6)"
  },
  {
    minScore: 700, maxScore: 899,
    title: "Cyber Defender", badge: "🛡️", badgeIcon: "ShieldCheck",
    description: "Tu as de très bons réflexes de sécurité ! Les pirates auront du mal à te piéger.",
    color: "#E83E8C", glowColor: "rgba(232, 62, 140, 0.5)"
  },
  {
    minScore: 500, maxScore: 699,
    title: "Cyber Apprentice", badge: "🔎", badgeIcon: "Search",
    description: "Tu as les bases essentielles, mais quelques réflexes clés méritent d'être renforcés.",
    color: "#D946EF", glowColor: "rgba(217, 70, 239, 0.4)"
  },
  {
    minScore: 0, maxScore: 499,
    title: "Cyber Rookie", badge: "⚠️", badgeIcon: "AlertTriangle",
    description: "Pas de panique ! C'est l'occasion idéale d'apprendre les bons réflexes pour protéger ta vie numérique.",
    color: "#F43F5E", glowColor: "rgba(244, 63, 94, 0.4)"
  }
];

export function getQuizRank(score: number): QuizRank {
  for (const rank of QUIZ_RANKS) {
    if (score >= rank.minScore && score <= rank.maxScore) return rank;
  }
  return QUIZ_RANKS[QUIZ_RANKS.length - 1];
}
