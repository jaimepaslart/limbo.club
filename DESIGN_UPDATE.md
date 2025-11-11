# Design Update - Style mynameismirko.it

## ✨ Changements appliqués

Le design du site Limbo a été mis à jour pour refléter l'esthétique minimaliste inspirée de **mynameismirko.it**.

### 🎨 Nouvelle direction artistique

#### Typographie
- **Titres géants** : 7xl à 9xl (72px-128px) avec `leading-[0.9]` et `tracking-tighter`
- **Labels de section** : petits, uppercase, `tracking-[0.3em]` (ex: "INTRO", "AGENDA", "QUIZ")
- **Corps de texte** : `font-light` pour plus de légèreté
- **Contrastes** : titres en `text-light`, corps en `text-light/60` ou `/50`

#### Layout
- **Sections plein écran** : `min-h-screen` avec `flex items-center`
- **Séparations subtiles** : `border-t border-white/5` entre sections
- **Espacement généreux** : `px-6 lg:px-12`, marges importantes entre éléments
- **Grilles simples** : peu de bordures, beaucoup de respiration

#### Interactions
- **Effets au survol très légers** :
  - Tags apparaissent au hover : `opacity-0 group-hover:opacity-100`
  - Titres changent de couleur : `hover:text-primary`
  - Flèches se déplacent : `group-hover:translate-x-1`
- **Liens minimalistes** : texte + flèche `→` au lieu de boutons
- **Transitions douces** : `transition-colors`, `transition-opacity duration-300`

#### Navigation
- **Header simplifié** :
  - Logo "LIMBO" plus petit
  - Navigation uppercase avec `tracking-wider`
  - Fond `bg-dark/90 backdrop-blur-md`
  - Hauteur réduite à `h-24`
  - Menu mobile en texte "Menu"/"Fermer" au lieu d'icône hamburger

### 📄 Pages mises à jour

#### 1. Homepage (`pages/index.vue`)

**Avant** : Sections standards avec titres moyens et boutons classiques

**Après** : 4 sections plein écran avec labels
- **INTRO** : Titre géant "LIMBO", texte léger, lien fléché
- **AGENDA** : Label + grille de 3 événements avec effets hover subtils
- **QUIZ** : Présentation sur plein écran avec lien
- **CONCEPT** : Grille 2 colonnes avec valeurs en liste

Caractéristiques :
- Chaque section = `min-h-screen`
- Labels uppercase en haut (INTRO, AGENDA, etc.)
- Titres énormes (`text-7xl md:text-8xl lg:text-9xl`)
- Pas de boutons flashy, juste des liens avec flèches
- Beaucoup d'espace négatif

#### 2. Header (`components/AppHeader.vue`)

**Changements** :
- Logo plus petit et sobre
- Navigation uppercase avec `space-x-12`
- Fond plus transparent avec blur
- Menu mobile en texte simple
- Hauteur augmentée à 24 (`h-24`)

#### 3. Agenda (`pages/agenda.vue`)

**Avant** : Grille de cartes avec bordures et fond coloré

**Après** : Liste épurée
- Header de page avec label "AGENDA"
- Titre géant "Tous les événements"
- Événements en liste avec séparateurs `border-b border-white/5`
- Titres d'événements en 3xl-4xl
- Tag apparaît au hover
- Pagination minimaliste (underline pour page active)

### 🎯 Principes du nouveau design

1. **Less is more** : Supprimer le superflu (bordures, fonds, ombres)
2. **Hiérarchie claire** : Labels → Gros titres → Texte léger
3. **Espacement généreux** : Beaucoup de padding, marges larges
4. **Hover subtils** : Opacité, couleur, translation légère
5. **Typographie expressive** : Jouer sur les tailles et graisses extrêmes
6. **Navigation discrète** : Ne pas distraire du contenu

### 📐 Spacing & Sizing

```css
/* Containers */
.container mx-auto px-6 lg:px-12

/* Sections */
min-h-screen py-24 border-t border-white/5

/* Titres */
text-7xl md:text-8xl lg:text-9xl (Hero)
text-5xl md:text-6xl lg:text-7xl (Sections)
text-3xl md:text-4xl (Événements)

/* Labels */
text-sm uppercase tracking-[0.3em] text-light/40

/* Corps */
text-xl md:text-2xl font-light (Intro)
text-light/50 ou /60 (Corps de texte)
```

### 🔄 Effets de transition

```css
/* Hover cards */
.group-hover:text-primary transition-colors
.group-hover:opacity-100 transition-opacity duration-300

/* Links avec flèche */
.group-hover:translate-x-1 transition-transform

/* General */
transition-all, transition-colors (200ms par défaut)
```

## 🚀 Prochaines étapes recommandées

Pour compléter le redesign, vous pourriez :

1. **Mettre à jour les pages restantes** (quiz, proposer-un-evenement, a-propos) avec la même esthétique
2. **Simplifier EventFilters.vue** avec des boutons plus épurés
3. **Retirer EventCard.vue** (ne sert plus, remplacé par du HTML inline)
4. **Ajouter animations au scroll** (fade-in progressifs)
5. **Optimiser la typographie** : tester d'autres graisses de Space Grotesk

## 📊 Résumé des modifications

| Élément | Avant | Après |
|---------|-------|-------|
| **Sections homepage** | Sections standards | 4 sections plein écran avec labels |
| **Titres** | 5xl-6xl | 7xl-9xl ultra-bold |
| **Navigation** | Colorée, bordures | Minimaliste, uppercase |
| **Boutons** | Colorés avec fond | Liens texte + flèche |
| **Event cards** | Cartes avec bordures | Liste avec séparateurs légers |
| **Hover effects** | Standards | Ultra-subtils (opacity, translate) |
| **Spacing** | Normal | Très généreux |

## 🎨 Palette confirmée

- Fond : `#000000` (noir pur)
- Texte : `#F9FAFB` (quasi-blanc)
- Accent : `#A855F7` (violet)
- Texte secondaire : `text-light/60`, `/50`, `/40`
- Bordures : `border-white/5` (très discret)

---

**Commit** : `86d6240 - Redesign with mynameismirko.it aesthetic`

**Repo GitHub** : https://github.com/jaimepaslart/limbo.club

Tous les changements sont versionnés et poussés sur GitHub !
