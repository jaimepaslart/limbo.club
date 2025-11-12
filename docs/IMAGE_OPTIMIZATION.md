# Optimisation des Images

## Configuration

Le projet utilise `@nuxt/image` pour l'optimisation automatique des images.

### Formats supportés
- **WebP** : Format moderne avec meilleure compression (30% plus léger)
- **AVIF** : Format next-gen avec compression supérieure (50% plus léger)
- **JPEG/PNG** : Formats fallback pour anciens navigateurs

### Qualité
- Par défaut : **80%** (bon équilibre qualité/poids)
- Configurable par image si besoin

## Utilisation

### Option 1 : Composant OptimizedImage (recommandé)

```vue
<template>
  <OptimizedImage
    src="/images/mon-image.jpg"
    alt="Description de l'image"
    width="800"
    height="600"
    :blur-up="true"
    sizes="sm:100vw md:50vw lg:800px"
  />
</template>
```

**Propriétés disponibles :**
- `src` : Chemin de l'image (requis)
- `alt` : Texte alternatif (requis)
- `width` / `height` : Dimensions (optionnel mais recommandé)
- `loading` : `'lazy'` (défaut) ou `'eager'`
- `format` : `'webp'`, `'avif'`, `'jpeg'`, `'png'`
- `quality` : 1-100 (défaut: 80)
- `sizes` : Responsive sizes
- `blur-up` : Effet blur pendant le chargement
- `object-fit` : `'cover'`, `'contain'`, etc.

### Option 2 : NuxtImg direct

```vue
<template>
  <NuxtImg
    src="/images/mon-image.jpg"
    alt="Description"
    width="800"
    height="600"
    loading="lazy"
    format="webp"
  />
</template>
```

### Option 3 : Images externes

```vue
<NuxtImg
  src="https://example.com/image.jpg"
  alt="Image externe"
  provider="none"
/>
```

## Lazy Loading des Composants

Les composants lourds (animations, SVG complexes) peuvent être lazy loaded :

```vue
<!-- Au lieu de : -->
<BauhausShapes />

<!-- Utilisez : -->
<LazyBauhausShapes />
```

Le préfixe `Lazy` charge le composant seulement quand il est visible à l'écran.

## Performance Tips

### 1. Toujours spécifier width & height
Évite le Layout Shift (CLS)

```vue
<OptimizedImage
  src="/image.jpg"
  alt="..."
  width="800"
  height="600"
/>
```

### 2. Utiliser sizes pour le responsive
```vue
<OptimizedImage
  src="/hero.jpg"
  alt="..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
/>
```

### 3. Lazy load les images below the fold
```vue
<OptimizedImage
  src="/image.jpg"
  alt="..."
  loading="lazy"
/>
```

### 4. Eager load les images critiques (hero)
```vue
<OptimizedImage
  src="/hero.jpg"
  alt="..."
  loading="eager"
/>
```

## Checklist d'optimisation

- [ ] Remplacer `<img>` par `<OptimizedImage>` ou `<NuxtImg>`
- [ ] Ajouter `width` et `height` sur toutes les images
- [ ] Configurer `sizes` pour images responsive
- [ ] Lazy load images below the fold
- [ ] Eager load images above the fold
- [ ] Activer `blur-up` pour meilleure UX
- [ ] Compresser images sources (TinyPNG, Squoosh)
- [ ] Utiliser AVIF/WebP quand possible

## Résultats attendus

- **Réduction de 30-50%** du poids des images
- **LCP amélioré** (Largest Contentful Paint)
- **CLS réduit** (Cumulative Layout Shift)
- **Score Lighthouse** : 90+ pour Performance
