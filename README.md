# 🎀 CYBER PINK — Le Cyber Quiz du CSI (Octobre Rose 2026)

**CYBER PINK** est une application web interactive de sensibilisation à la cybersécurité, spécialement conçue pour les étudiants et visiteurs à l'occasion de la campagne **Octobre Rose**.

---

## 🌟 Identité Visuelle & Thématique

- **Cybersécurité & Gaming** : Ambiance dark cyber navy (`#0B1020`), cartes glassmorphism (`#151B32`), micro-interactions, particules cyber et effets néon.
- **Octobre Rose** : Ruban rose animé SVG, touches lumineuses rose cyber (`#E83E8C`, `#FF2D92`, `#FFD6E8`).
- **Esprit Club Étudiant CSI** : Conçu par et pour le **Club Scientifique Informatique (CSI)**.

---

## 🎮 Fonctionnalités Clés

1. **Page d'Accueil Immersive (Landing Page)** :
   - Titre percutant avec typographie moderne et ruban rose central animé.
   - Particules dynamiques Canvas et icônes flottantes (Shield, Lock, Terminal, Wifi, Fingerprint, etc.).
   - CTA animé « **COMMENCER LE QUIZ** ».

2. **Quiz Interactif (10 Questions Clés)** :
   - Barre de progression animée avec score en direct et thématique par question.
   - 10 thèmes accessibles : Mots de passe, Phishing, 2FA, Wi-Fi public, Ransomware, Ingénierie sociale, Confidentialité réseaux sociaux, Liens suspects, Cyberharcèlement (3018), et la Règle 3-2-1 de sauvegarde.
   - 4 choix interactifs par question (A, B, C, D) avec verrouillage instantané.

3. **Feedback Visuel & Sonore Dynamique** :
   - Réponse correcte : Lueur émeraude/rose, confettis, son carillon montant, message « Bien joué ! 🔐 +100 PTS ».
   - Réponse incorrecte : Animation de secousse (*shake*), révélation de la bonne réponse, encadré explicatif et astuce cyber CSI.
   - Moteur audio synthétisé Web Audio API (aucun MP3 externe requis, zéro latence), commutable via le bouton 🔊 / 🔇 (désactivé par défaut).

4. **Écran de Résultats & Système de Titres** :
   - Jauge circulaire animée de score (*Circular Progress Ring*).
   - Compteur de score animé (0 à 1000 PTS).
   - Rangs et Badges :
     - 🏆 **Cyber Expert** (900 – 1000 pts)
     - 🛡️ **Cyber Defender** (700 – 899 pts)
     - 🔎 **Cyber Apprentice** (500 – 699 pts)
     - ⚠️ **Cyber Rookie** (0 – 499 pts)
   - Statistiques : Bonnes réponses, erreurs, pourcentage de précision.
   - Boutons d'action :
     - **REJOUER** (réinitialisation complète sans rechargement de page)
     - **VOIR LES BONNES RÉPONSES** (modal récapitulatif détaillé)
     - **PARTAGER MON SCORE** (Web Share API ou copie dans le presse-papier)

5. **Message Engagé Octobre Rose** :
   - Encadré de sensibilisation élégant rappelant l'engagement du CSI.

---

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ ou supérieur
- npm, pnpm ou yarn

### Installation et Lancement
```bash
# Se placer dans le répertoire du projet
cd cyber-quizz-po-2026

# Installer les dépendances (si ce n'est pas déjà fait)
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 📁 Architecture des Fichiers

```
cyber-quizz-po-2026/
├── app/
│   ├── components/
│   │   ├── AnimatedBackground.tsx   # Toile de particules et icônes cyber flottantes
│   │   ├── AnswerButton.tsx         # Bouton de réponse avec états (succès, erreur, focus)
│   │   ├── AnswersReviewModal.tsx   # Modal de révision des 10 questions avec astuces
│   │   ├── Header.tsx               # En-tête compact CSI x CYBER PINK
│   │   ├── LandingPage.tsx          # Écran d'accueil avec hero & CTA
│   │   ├── OctoberRoseRibbon.tsx    # Composant Ruban Rose SVG animé
│   │   ├── ProgressBar.tsx          # Barre de progression et métadonnées
│   │   ├── QuestionCard.tsx         # Carte de question & explications
│   │   ├── QuizPage.tsx             # Gestion d'état du quiz
│   │   ├── ResultPage.tsx           # Écran final avec compteur et rang
│   │   └── SoundToggle.tsx          # Sélecteur Audio ON/OFF
│   ├── data/
│   │   └── questions.ts             # Base de données typée des 10 questions & rangs
│   ├── utils/
│   │   ├── confetti.ts              # Effets de confettis personnalisés
│   │   └── sound.ts                 # Synthétiseur audio Web Audio API
│   ├── globals.css                  # Design tokens, keyframes & styles globaux
│   ├── layout.tsx                   # Métadonnées, SEO & polices (Outfit & JetBrains Mono)
│   └── page.tsx                     # Route principale & transitions de vues
```

---

## 🎗️ Crédits

Conçu pour le **CSI (Club Scientifique Informatique)** — Événement Octobre Rose 2026.
