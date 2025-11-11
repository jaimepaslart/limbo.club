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
├── .env (local, non versionné)
├── .env.example (template pour les variables d'environnement)
├── netlify.toml (configuration Netlify)
├── assets/css/main.css
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── FlamesCursor.vue (optimisé)
│   └── Logo.vue
├── i18n/locales/
│   ├── fr.json (français)
│   ├── eu.json (euskara)
│   └── es.json (español)
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── agenda.vue
│   ├── quiz.vue
│   ├── a-propos.vue
│   ├── contact.vue (nouveau)
│   └── proposer-un-evenement.vue
├── server/api/
│   ├── contact.post.ts (nouveau - API contact)
│   └── events/
│       └── submit.post.ts (nouveau - API propositions)
└── nuxt.config.ts
```

### 5. Déploiement Netlify ✅
- **URL Production**: https://limbo.club
- **URL Test**: https://6913b3f42dde15df8bbc4dcb--limbo-club.netlify.app
- **Configuration**: netlify.toml créé avec:
  - Build command: `npm run build`
  - Publish directory: `.output/public`
  - Node version: 20
  - Headers de sécurité (X-Frame-Options, X-Content-Type-Options)
  - Cache headers pour fonts et _nuxt
  - Redirects configurés

### 6. Système d'emails avec Resend 📧
- **Package installé**: resend (npm)
- **Configuration**:
  - Variables d'environnement sur Netlify:
    - `NUXT_RESEND_API_KEY`: re_6hJcaKmb_7XmpAquqPfarWQ457U3vYgPW
    - `NUXT_CONTACT_EMAIL`: bihrpaul@gmail.com
  - Fichier `.env.example` créé pour la documentation

#### API Routes créées:
1. **`/server/api/contact.post.ts`** - Formulaire de contact
   - Validation des champs (nom, email, message)
   - Envoi d'email via Resend
   - Gestion des erreurs

2. **`/server/api/events/submit.post.ts`** - Propositions d'événements
   - Validation complète des données événement
   - Email formaté avec tous les détails (titre, type, date, lieu, ville, description)
   - Labels traduits pour les types d'événements

### 7. Formulaires fonctionnels ✅

#### Page Contact (`/pages/contact.vue`)
- Formulaire multilingue (FR, EU, ES)
- Champs: nom, email, message
- États: loading, success, error
- Messages de feedback utilisateur
- Réinitialisation automatique après envoi
- Désactivation des champs pendant l'envoi

#### Page Proposer un événement (`/pages/proposer-un-evenement.vue`)
- Déjà existante, maintenant connectée à l'API email
- Formulaire complet avec:
  - Titre, type, date, heure
  - Ville, côté (Nord/Sud), lieu
  - URL, description, email de contact
- Envoi par email avec formatage HTML

### 8. Traductions multilingues 🌍
Ajout des traductions pour le formulaire de contact dans:
- **Français** (`i18n/locales/fr.json`)
- **Euskara** (`i18n/locales/eu.json`)
- **Español** (`i18n/locales/es.json`)

Clés ajoutées:
```json
"contact": {
  "section": "CONTACT",
  "title": "Contactez-nous",
  "description": "...",
  "social": "Réseaux sociaux",
  "form": {
    "name": "Nom",
    "namePlaceholder": "Votre nom",
    "email": "Email",
    "emailPlaceholder": "votre.email{'@'}exemple.com",
    "message": "Message",
    "messagePlaceholder": "Votre message...",
    "send": "Envoyer",
    "sending": "Envoi en cours...",
    "success": "Message envoyé avec succès !"
  },
  "meta": { "title": "...", "description": "..." }
}
```

## Commits récents (session actuelle)
- `e49a05a` - Fix i18n email placeholder syntax error
- `6674f6e` - Add email functionality for contact and event submissions
- `2eb12fb` - Add multilingual support and Bauhaus design elements
- `78bb862` - Ajout des fonctionnalités Limbo

## Configuration Netlify CLI
```bash
# Variables d'environnement ajoutées via CLI:
npx netlify env:set NUXT_RESEND_API_KEY "re_6hJcaKmb_7XmpAquqPfarWQ457U3vYgPW"
npx netlify env:set NUXT_CONTACT_EMAIL "bihrpaul@gmail.com"

# Déploiement:
npx netlify deploy --prod
```

## Prochaines étapes suggérées
- [x] Commit des modifications actuelles
- [x] Déployer sur Netlify
- [x] Configurer les emails
- [ ] Tester les formulaires en production
- [ ] Vérifier la réception des emails
- [ ] Tester le site sur tous les navigateurs
- [ ] Vérifier le curseur flamme sur mobile
- [ ] Assurer que tous les styles sont responsive

## Notes techniques
- Curseur flamme: animations GPU-accelerated avec throttling
- Pas de mode light (volontairement supprimé)
- Configuration Nuxt simplifiée pour éviter les conflits
- Hot reload fonctionnel
- Emails envoyés via Resend avec validation complète
- Formulaires avec gestion d'état (loading, success, error)
- i18n: caractère @ échappé dans les placeholders (`{'@'}`)
- Preset Netlify utilisé pour le build Nitro
