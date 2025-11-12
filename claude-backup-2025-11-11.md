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

---

## 🆕 Point de sauvegarde - 12 novembre 2025

### 9. Support multilingue des événements et formulaires 🌐

#### Événements traduits
**Commit**: `b5df7fc` - Add multilingual support for events and forms

- **Interface TranslatedText** créée dans `types/event.ts`:
  ```typescript
  export interface TranslatedText {
    fr: string
    eu: string
    es: string
  }
  ```

- **Composable `useTranslatedEvent.ts`** créé:
  - `getTranslatedText()`: récupère le texte dans la langue active
  - `getLocalizedEvent()`: retourne un événement avec title/description localisés
  - `getLocalizedEvents()`: version batch pour tableaux d'événements

- **Tous les 8 événements traduits** dans `data/events.ts`:
  - Structure: `title: { fr: "...", eu: "...", es: "..." }`
  - Traductions culturellement adaptées (Basque et Espagnol)
  - Descriptions complètes en 3 langues

- **Recherche améliorée** (`composables/useEvents.ts`):
  - Recherche dans le titre traduit
  - Recherche dans la description traduite
  - Recherche dans venue et city (non traduits)

#### Formulaires traduits

**EventFilters.vue** - Traduction complète:
- Labels des filtres (recherche, côté, type, période, ville)
- Options dynamiques en computed properties
- Bouton reset traduit

**proposer-un-evenement.vue** - Traduction complète:
- Tous les labels de champs
- Placeholders
- Messages de succès/erreur
- Boutons d'action

#### Fichiers de traduction enrichis

Ajout dans `i18n/locales/*.json` de:

1. **Section `filters`**:
   - `title`, `search`, `side`, `type`, `dateRange`, `city`, `reset`
   - Options pour chaque type d'événement
   - Options de période

2. **Section `proposeEvent`**:
   - `sectionTitle` (titre + sous-titre)
   - `form` (tous les champs + labels + placeholders)
   - `success` (messages de confirmation)
   - `error` (messages d'erreur)
   - `meta` (SEO)

#### Favicon ajouté

- **Fichier**: `public/favicon.svg` (copie du logo Limbo)
- **Configuration**: `nuxt.config.ts` (link rel="icon")
- Type: image/svg+xml

#### Correctif i18n

- **Problème**: Symbole `@` dans placeholders email provoquait erreur vue-i18n
- **Solution**: Échappement avec `{'@'}` dans tous les fichiers de langue
  - `fr.json`: `votre{'@'}email.com`
  - `eu.json`: `zure{'@'}emaila.eus`
  - `es.json`: `tu{'@'}email.com`

### Fichiers modifiés (14 fichiers)

#### Nouveaux fichiers:
- `composables/useTranslatedEvent.ts` (helper de traduction)
- `public/favicon.svg` (favicon Limbo)

#### Fichiers modifiés:
- `types/event.ts` (ajout TranslatedText et Locale)
- `data/events.ts` (8 événements traduits en FR/EU/ES)
- `composables/useEvents.ts` (recherche multilingue)
- `components/EventCard.vue` (utilise getLocalizedEvent)
- `components/EventFilters.vue` (100% traduit)
- `pages/index.vue` (affiche événements traduits)
- `pages/agenda.vue` (affiche événements traduits)
- `pages/proposer-un-evenement.vue` (100% traduit)
- `i18n/locales/fr.json` (+110 lignes)
- `i18n/locales/eu.json` (+110 lignes)
- `i18n/locales/es.json` (+110 lignes)
- `nuxt.config.ts` (favicon link)

### État actuel

**Branche**: main (1 commit en avance sur origin)
**Commit**: `b5df7fc`
**Serveur**: ✅ Fonctionne sur http://localhost:3000
**Build**: ✅ Sans erreurs

### Statistiques du commit
- 629 insertions (+)
- 102 suppressions (-)
- 14 fichiers modifiés
- 2 fichiers créés

### À faire
- [x] Push vers origin/main ✅
- [x] Déployer sur Netlify ✅
- [x] Tester les traductions en production (FR/EU/ES) ✅
- [x] Vérifier le favicon sur tous les navigateurs ✅
- [x] Tester le changement de langue avec les événements ✅

---

## 10. Animation Typewriter (Section Hero)
**Date**: 2025-11-12
**Commit**: En cours
**État**: Fonctionnel ✅

### Contexte

Sur la page d'accueil, le texte "Expo · Party · Lecture · Design" était statique. L'objectif était d'ajouter une animation "machine à écrire" minimaliste avec une cadence humaine.

### Implémentation

#### 1. Composant TypewriterText.vue

**Fichier**: `components/TypewriterText.vue`

**Fonctionnalités**:
- ✅ Écriture lettre par lettre avec délai aléatoire (40-120ms)
- ✅ Pauses intelligentes sur les séparateurs (·, espaces, ponctuation) - 300ms
- ✅ Boucle infinie : efface puis réécrit automatiquement
- ✅ Curseur clignotant animé (530ms)
- ✅ SSR-friendly : animation uniquement côté client (`onMounted`)
- ✅ Nettoyage automatique des timers (`onUnmounted`)

**Props disponibles**:
```typescript
interface Props {
  text: string          // Le texte à animer
  minDelay?: number     // Délai min entre caractères (défaut: 40ms)
  maxDelay?: number     // Délai max entre caractères (défaut: 120ms)
  pauseDelay?: number   // Pause après séparateurs (défaut: 300ms)
  endPause?: number     // Pause avant de boucler (défaut: 2000ms)
  loop?: boolean        // Active la boucle (défaut: true)
  eraseSpeed?: number   // Vitesse d'effacement (défaut: 30ms)
  showCursor?: boolean  // Affiche le curseur (défaut: true)
}
```

**Logique principale**:

1. **`getRandomDelay()`** : Génère un délai aléatoire entre min/max pour simuler frappe humaine
2. **`needsPause()`** : Détecte les caractères nécessitant une pause (regex `/[\s·,;.!?]/`)
3. **`typeText()`** : Animation d'écriture caractère par caractère
   - Ajoute chaque caractère à `displayedText`
   - Applique délai aléatoire ou pause selon le caractère
   - À la fin : pause puis lance `eraseText()` si `loop=true`
4. **`eraseText()`** : Animation d'effacement
   - Retire le dernier caractère de `displayedText`
   - Après effacement complet : relance `typeText()`
5. **`startCursorBlink()`** : Animation du curseur (toggle toutes les 530ms)

**Cycle d'animation**:
```
Écriture (40-120ms/char + 300ms aux séparateurs)
  ↓
Pause finale (2000ms)
  ↓
Effacement (30ms/char)
  ↓
Pause courte (500ms)
  ↓
Recommence ↻
```

#### 2. Intégration dans index.vue

**Fichier**: `pages/index.vue` (lignes 13-24)

**Avant**:
```vue
<p class="text-2xl md:text-3xl lg:text-4xl text-light/60 mb-8 max-w-3xl font-light">
  {{ t('home.hero.subtitle') }}
</p>
```

**Après**:
```vue
<p class="text-2xl md:text-3xl lg:text-4xl text-light/60 mb-8 max-w-3xl font-light">
  <TypewriterText
    :text="t('home.hero.subtitle')"
    :min-delay="40"
    :max-delay="120"
    :pause-delay="300"
    :end-pause="2000"
    :loop="true"
    :erase-speed="30"
    :show-cursor="true"
  />
</p>
```

### Détails techniques

#### Animation du curseur (CSS)
```css
.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
```

#### Gestion des timers
- **`timeoutId`** : Contrôle l'écriture/effacement caractère par caractère
- **`cursorIntervalId`** : Contrôle le clignotement du curseur
- Tous les timers sont nettoyés dans `onUnmounted()` pour éviter les fuites mémoire

#### SSR-friendly
L'animation démarre uniquement dans `onMounted()`, évitant les erreurs SSR liées à `setTimeout`/`setInterval`.

### Comportement visuel

**Texte animé**: "Expo · Party · Lecture · Design"

**Timeline**:
1. **Écriture** : ~5-6 secondes
   - "E" → "Ex" → "Exp" → "Expo" [pause 300ms] → "·" [pause 300ms] → "P"...
2. **Pause finale** : 2 secondes (texte complet visible)
3. **Effacement** : ~1 seconde (30ms × 33 caractères)
4. **Pause courte** : 0.5 seconde
5. **Recommence** : Boucle infinie

### Multilinguisme

Le composant fonctionne avec le système i18n :
- **FR** : "Expo · Party · Lecture · Design"
- **EU** : (traduction basque de home.hero.subtitle)
- **ES** : (traduction espagnole de home.hero.subtitle)

L'animation s'adapte automatiquement à la longueur du texte traduit.

### Personnalisation

**Animation plus rapide** :
```vue
:min-delay="20"
:max-delay="60"
:pause-delay="150"
```

**Sans boucle** (écriture unique) :
```vue
:loop="false"
```

**Sans curseur** :
```vue
:show-cursor="false"
```

**Pause plus longue** :
```vue
:end-pause="5000"
```

### Fichiers modifiés (2 fichiers)

- `components/TypewriterText.vue` (153 lignes) - Créé/remplacé
- `pages/index.vue` (lignes 13-24) - Modifié

### État actuel

**Branche**: main
**Serveur**: ✅ Fonctionne sur http://localhost:3000
**Animation**: ✅ Fonctionnelle en local
**Compatibilité**: ✅ SSR-friendly, pas d'erreurs

### Prochaines étapes

- [ ] Tester l'animation sur différents navigateurs
- [ ] Vérifier les performances (pas de lag avec l'animation)
- [ ] Optionnel : Ajuster les timings selon le rendu visuel souhaité
- [ ] Commit et déploiement sur production
