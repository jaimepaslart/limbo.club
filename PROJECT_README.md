# Limbo – Agenda culturel transfrontalier

Agenda culturel du Pays Basque nord et sud, construit avec Nuxt 3, TypeScript et TailwindCSS.

## 🎯 Fonctionnalités

- **Page d'accueil** : Présentation du projet avec événements mis en avant
- **Agenda** : Liste complète des événements avec filtres avancés (côté, type, ville, date, recherche)
- **Quiz** : Recommandations personnalisées d'événements selon les préférences
- **Proposer un événement** : Formulaire de soumission (frontend only, prêt pour connexion API)
- **À propos** : Présentation du concept Limbo

## 🛠 Stack technique

- **Framework** : Nuxt 3 (v3.15+)
- **Langage** : TypeScript (mode strict)
- **Styling** : TailwindCSS
- **Fonts** : Space Grotesk, Inter (Google Fonts)
- **Rendu** : SSR + génération statique

## 📦 Installation

### Prérequis

- Node.js 18+
- npm ou yarn ou pnpm

### Étapes

1. **Cloner le dépôt**

```bash
git clone https://github.com/jaimepaslart/limbo.club.git
cd limbo.club
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🚀 Scripts disponibles

```bash
# Développement
npm run dev

# Build pour production
npm run build

# Preview du build de production
npm run preview

# Génération statique
npm run generate

# Type checking
npm run typecheck
```

## 📁 Structure du projet

```
limbo.club/
├── .claude/                    # Configuration Claude Code et agents
├── assets/
│   └── css/
│       └── main.css           # Styles Tailwind globaux
├── components/
│   ├── AppHeader.vue          # Navigation principale
│   ├── AppFooter.vue          # Pied de page
│   ├── EventCard.vue          # Carte d'événement
│   ├── EventFilters.vue       # Filtres d'événements
│   ├── PrimaryButton.vue      # Bouton réutilisable
│   ├── SectionTitle.vue       # Titre de section
│   └── TagPill.vue            # Badge/tag
├── composables/
│   └── useEvents.ts           # Logique de gestion des événements
├── data/
│   └── events.ts              # Données mockées des événements
├── layouts/
│   └── default.vue            # Layout par défaut
├── pages/
│   ├── index.vue              # Page d'accueil
│   ├── agenda.vue             # Page agenda avec filtres
│   ├── quiz.vue               # Quiz de recommandation
│   ├── proposer-un-evenement.vue  # Formulaire de proposition
│   └── a-propos.vue           # Page à propos
├── types/
│   └── event.ts               # Types TypeScript
├── app.vue                    # Root component
├── nuxt.config.ts             # Configuration Nuxt
├── tailwind.config.ts         # Configuration Tailwind
├── tsconfig.json              # Configuration TypeScript
└── package.json
```

## 🎨 Design System

### Couleurs

- **Fond** : Noir (#000000)
- **Texte** : Blanc (#F9FAFB)
- **Accent** : Violet (#A855F7)
- **Variantes** :
  - `dark` : #000000, #0A0A0A, #141414
  - `primary` : palette violette (50-900)
  - `light` : #F9FAFB, #F5F5F5

### Typographie

- **Principale** : Space Grotesk
- **Secondaire** : Inter
- Style minimaliste, contemporain, avec influence Bauhaus

### Composants

Tous les composants sont typés avec TypeScript et utilisent la composition API de Vue 3.

## 📡 Connexion API (À venir)

Le formulaire "Proposer un événement" est prêt pour être connecté à un backend :

```typescript
// Dans pages/proposer-un-evenement.vue
// TODO: Remplacer par votre endpoint API
await $fetch('/api/events/submit', {
  method: 'POST',
  body: formData.value
})
```

## 🧪 Données de test

Les événements sont actuellement chargés depuis `data/events.ts`. Cette approche permet de :
- Tester l'interface sans backend
- Valider la structure des données
- Faciliter le développement

Pour connecter à une vraie API :
1. Créer un endpoint API dans `server/api/`
2. Modifier `composables/useEvents.ts` pour utiliser `$fetch`

## 📱 Responsive Design

Le site est conçu en mobile-first et s'adapte à tous les écrans :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## ♿ Accessibilité

- Contrastes élevés (fond noir / texte blanc)
- Attributs ARIA sur les éléments interactifs
- Focus visible sur tous les éléments cliquables
- Navigation au clavier
- Balises sémantiques HTML5

## 🔧 Développement

### Ajouter un nouvel événement

Modifier `data/events.ts` :

```typescript
{
  id: 'unique-id',
  title: 'Nom de l\'événement',
  date: '2025-07-15', // Format ISO
  time: '20:00',
  city: 'Biarritz',
  side: 'nord', // ou 'sud'
  type: 'concert', // voir types disponibles
  venue: 'Nom du lieu',
  tags: ['musique', 'soir', 'club'],
  description: 'Description...',
  url: 'https://...',
  price: '€€',
  featured: true // optionnel
}
```

### Ajouter un nouveau type d'événement

1. Modifier `types/event.ts` :
```typescript
export type EventType =
  | 'concert'
  | 'expo'
  // ... ajouter votre nouveau type
  | 'nouveau-type'
```

2. Mettre à jour les filtres dans `components/EventFilters.vue`

## 🌐 Déploiement

### Vercel / Netlify (SSR)

```bash
npm run build
```

### Génération statique

```bash
npm run generate
```

Les fichiers seront générés dans `.output/public/`

## 📄 Licence

À définir

## 🤝 Contribution

Pour contribuer au projet :
1. Proposer des événements via le formulaire
2. Signaler des bugs via les issues GitHub
3. Proposer des améliorations

## 📧 Contact

- Instagram : [@limbo_agenda](https://instagram.com/limbo_agenda)
- Email : contact@limbo-agenda.eu

---

Développé avec ❤️ pour le Pays Basque transfrontalier
