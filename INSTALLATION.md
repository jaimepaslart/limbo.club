# Guide d'installation - Limbo

## ✅ Projet créé avec succès !

Votre projet Nuxt 3 pour l'agenda culturel transfrontalier Limbo est maintenant complètement configuré et versionné sur GitHub.

**Dépôt GitHub** : https://github.com/jaimepaslart/limbo.club

---

## 🚀 Démarrage rapide

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

---

## 📋 Ce qui a été créé

### ✨ Pages complètes

- **/** - Page d'accueil avec événements mis en avant
- **/agenda** - Liste des événements avec filtres avancés
- **/quiz** - Quiz de recommandation personnalisée
- **/proposer-un-evenement** - Formulaire de soumission
- **/a-propos** - Présentation du concept Limbo

### 🎨 Composants réutilisables

- `AppHeader.vue` - Navigation principale responsive
- `AppFooter.vue` - Pied de page avec liens
- `EventCard.vue` - Carte d'événement stylisée
- `EventFilters.vue` - Système de filtrage complet
- `PrimaryButton.vue` - Boutons réutilisables
- `SectionTitle.vue` - Titres de section cohérents
- `TagPill.vue` - Tags d'événements

### 🧩 Fonctionnalités

- ✅ **Filtres** : côté (Nord/Sud), type, ville, date, recherche texte
- ✅ **Quiz** : 5 questions pour recommandations personnalisées
- ✅ **Formulaire** : prêt pour connexion API backend
- ✅ **Données mockées** : 12 événements de test réalistes
- ✅ **TypeScript** : typage strict sur tout le projet
- ✅ **Responsive** : mobile-first, adapté à tous les écrans
- ✅ **SEO** : meta tags configurés sur chaque page
- ✅ **Accessibilité** : ARIA labels, focus visible, contrastes élevés

### 🎨 Design System

- **Fond** : Noir (#000000)
- **Texte** : Blanc (#F9FAFB)
- **Accent** : Violet (#A855F7)
- **Fonts** : Space Grotesk, Inter
- **Style** : Minimaliste, contemporain, influence Bauhaus

---

## 📦 Scripts disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Preview production
npm run preview

# Génération statique
npm run generate

# Type checking
npm run typecheck
```

---

## 🔧 Prochaines étapes

### 1. Tester le projet

Naviguez sur http://localhost:3000 et testez :
- La page d'accueil
- L'agenda avec les filtres
- Le quiz de recommandation
- Le formulaire de proposition
- La page à propos

### 2. Personnaliser les données

Les événements sont dans `data/events.ts`. Ajoutez vos propres événements :

```typescript
{
  id: 'mon-event',
  title: 'Mon événement',
  date: '2025-07-15',
  time: '20:00',
  city: 'Biarritz',
  side: 'nord',
  type: 'concert',
  venue: 'Lieu',
  tags: ['musique', 'soir'],
  description: 'Description...',
  price: '€€'
}
```

### 3. Connecter à une API

Le formulaire "Proposer un événement" est prêt pour une API :

Dans `pages/proposer-un-evenement.vue`, ligne ~190 :

```typescript
// TODO: Remplacer par votre endpoint
await $fetch('/api/events/submit', {
  method: 'POST',
  body: formData.value
})
```

### 4. Configurer les clés API MCP (optionnel)

Les serveurs MCP sont configurés dans `.claude/mcp_config.json` :
- Brave Search (recherche web)
- GitHub (intégration GitHub)
- Git (opérations Git locales)

Ajoutez vos clés API si vous souhaitez les activer.

---

## 📁 Structure du projet

```
limbo.club/
├── .claude/                   # Configuration Claude & agents
├── assets/css/                # Styles globaux
├── components/                # Composants Vue réutilisables
├── composables/               # Logique réutilisable (useEvents)
├── data/                      # Données mockées
├── layouts/                   # Layouts de page
├── pages/                     # Pages du site (routing automatique)
├── types/                     # Types TypeScript
├── app.vue                    # Root component
├── nuxt.config.ts            # Config Nuxt
├── tailwind.config.ts        # Config Tailwind
├── package.json              # Dépendances
└── PROJECT_README.md         # Documentation complète
```

---

## 🌐 Déploiement

### Sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Sur Netlify

```bash
# Build
npm run build

# Déployer le dossier .output/public/
```

### Génération statique

```bash
npm run generate
```

---

## 📚 Documentation

- [Documentation Nuxt 3](https://nuxt.com/docs)
- [Documentation TailwindCSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)

---

## 🎯 Résumé des commits

1. **Initial commit** - Configuration Claude Code avec serveurs MCP
2. **Add custom agents** - Agents SEO, Design, Frontend Developer
3. **Add Nuxt 3 project** - Structure complète du site

---

## ✅ Checklist de démarrage

- [ ] Installer les dépendances (`npm install`)
- [ ] Lancer le dev server (`npm run dev`)
- [ ] Tester toutes les pages
- [ ] Personnaliser les événements dans `data/events.ts`
- [ ] Modifier les couleurs/fonts si besoin dans `tailwind.config.ts`
- [ ] Ajouter vos vraies données de contact dans les pages
- [ ] Configurer un backend pour le formulaire (optionnel)
- [ ] Déployer sur Vercel/Netlify

---

## 💡 Besoin d'aide ?

- Consultez le fichier `PROJECT_README.md` pour plus de détails
- Vérifiez la documentation Nuxt : https://nuxt.com
- Utilisez les agents Claude configurés dans `.claude/agents/`

---

**Bon développement ! 🎉**
