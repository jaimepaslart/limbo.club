# Sauvegarde Claude - Limbo.club
**Date**: 2025-11-11
**Branche**: main
**Statut**: Serveur fonctionnel ✅

## État du projet

### Modifications en cours (git status)
- `assets/css/main.css` - Modifié (nettoyé)
- `components/AppHeader.vue` - Modifié (thème supprimé)
- `layouts/default.vue` - Modifié (simplifié)
- `nuxt.config.ts` - Modifié (configuration nettoyée)
- `components/FlamesCursor.vue` - Modifié (optimisé, plus petit et moins flou)

### Derniers commits
- `78bb862` - Ajout des fonctionnalités Limbo
- `fe4088f` - Add Limbo SVG logo and integrate in header
- `9c19240` - Add design update documentation
- `86d6240` - Redesign with mynameismirko.it aesthetic
- `4434c9e` - Add installation and quick start guide

## Modifications réalisées

### 1. Optimisation du curseur flamme ✅
- **Taille réduite**: Curseur principal 60px → 30px (50% plus petit)
- **Blur minimisé**: Flammes 2-5px → 0.5-1.5px
- **Particules optimisées**:
  - Nombre max: 40 → 20
  - Taille: 18x25px → 8x12px
  - Trajectoires plus douces
- **Résultat**: Curseur plus discret, plus net, moins flou

### 2. Système de thème supprimé ⛔
Le système clair/sombre a été supprimé car il ne fonctionnait pas correctement:
- Fichiers supprimés: `ThemeToggle.vue`, `useTheme.ts`
- AppHeader simplifié (toggle retiré)
- CSS nettoyé (règles .light-mode supprimées)
- Mode sombre uniquement maintenant

### 3. Configuration nettoyée 🧹
- `nuxt.config.ts` simplifié (configurations SEO/performance problématiques retirées)
- Fichiers problématiques supprimés: utils/, plugins/, server/, app/, docs/
- Tous les fichiers de documentation des agents supprimés
- Build `.nuxt` nettoyé

### 4. Serveur fonctionnel ✅
- Serveur dev fonctionne sur http://localhost:3000/
- Aucune erreur bloquante
- Hot reload actif

## Configuration

### nuxt.config.ts (simplifié)
```typescript
- Modules: @nuxtjs/tailwindcss, @nuxt/fonts, nuxt-mcp
- Fonts: Space Grotesk et Inter (Google Fonts)
- CSS: assets/css/main.css
- Title: "Limbo – Agenda culturel transfrontalier"
- Runtime config: resendApiKey, contactEmail
- TypeScript strict mode activé
```

## Design

### Palette de couleurs (mode sombre uniquement)
- Background: #000000
- Background light: #141414
- Text: #F9FAFB
- Text muted: rgba(249, 250, 251, 0.6)
- Border: rgba(255, 255, 255, 0.1)

### Style général
- Esthétique inspirée de mynameismirko.it
- Curseur flamme personnalisé (optimisé)
- Backdrop blur sur le header
- Transitions smooth
- Typographie: Space Grotesk (display) et Inter (sans)

## Structure du projet

```
limbo.club/
├── assets/css/main.css
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── FlamesCursor.vue (optimisé)
│   └── Logo.vue
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── agenda.vue
│   ├── quiz.vue
│   ├── a-propos.vue
│   └── proposer-un-evenement.vue
└── nuxt.config.ts
```

## Prochaines étapes suggérées
- [ ] Commit des modifications actuelles
- [ ] Tester le site sur tous les navigateurs
- [ ] Vérifier le curseur flamme sur mobile
- [ ] Assurer que tous les styles sont responsive

## Notes techniques
- Curseur flamme: animations GPU-accelerated avec throttling
- Pas de mode light (volontairement supprimé)
- Configuration Nuxt simplifiée pour éviter les conflits
- Hot reload fonctionnel
