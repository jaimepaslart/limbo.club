<template>
  <div>
    <!-- Hero Section - Full Screen -->
    <section class="min-h-screen flex items-center justify-center relative">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="max-w-6xl mx-auto">
          <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-8 bauhaus-accent">{{ t('home.hero.tagline') }}</p>

          <!-- Logo animé avec dégradé -->
          <div class="mb-12 logo-container">
            <LogoSvg size="xl" color="gradient" class="logo-animated" />
          </div>

          <!-- Sous-titre avec animation typewriter -->
          <p class="text-2xl md:text-3xl lg:text-4xl text-light/60 mb-8 max-w-3xl font-light">
            <TypewriterText
              :text="t('home.hero.subtitle')"
              :speed="100"
              :start-delay="800"
              :show-cursor="false"
            />
          </p>

          <p class="text-xl md:text-2xl text-light/50 mb-4 font-light">
            {{ t('home.hero.description') }}
          </p>
          <p class="text-lg md:text-xl text-primary mb-16 font-light">
            {{ t('home.hero.location') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-6">
            <NuxtLink
              to="/agenda"
              class="group inline-flex items-center text-light text-lg hover:text-primary transition-colors"
            >
              <span class="mr-3">{{ t('common.actions.discover') }}</span>
              <span class="transform group-hover:translate-x-1 transition-transform">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Events Section - Full Screen -->
    <section class="min-h-screen flex items-center py-24 border-t border-white/5">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="max-w-7xl mx-auto">
          <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-12">{{ t('home.events.section') }}</p>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-light mb-20 leading-tight">
            {{ t('home.events.title') }}
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div
              v-for="event in featuredEvents"
              :key="event.id"
              class="group"
            >
              <NuxtLink
                :to="`/agenda`"
                class="block"
              >
                <div class="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <TagPill :label="event.type" variant="primary" />
                </div>
                <h3 class="text-2xl md:text-3xl font-display font-bold text-light mb-3 group-hover:text-primary transition-colors">
                  {{ event.title }}
                </h3>
                <p class="text-light/50 mb-2">{{ formatDate(event.date) }}</p>
                <p class="text-light/40 text-sm">{{ event.city }} · {{ event.side === 'nord' ? t('home.events.nord') : t('home.events.sud') }}</p>
              </NuxtLink>
            </div>
          </div>

          <div class="mt-20">
            <NuxtLink
              to="/agenda"
              class="group inline-flex items-center text-light text-lg hover:text-primary transition-colors"
            >
              <span class="mr-3">{{ t('common.actions.viewAll') }}</span>
              <span class="transform group-hover:translate-x-1 transition-transform">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Quiz Section - Full Screen -->
    <section class="min-h-screen flex items-center border-t border-white/5">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="max-w-4xl mx-auto">
          <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-12">{{ t('home.quiz.section') }}</p>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-light mb-12 leading-tight">
            {{ t('home.quiz.title') }}
          </h2>
          <p class="text-xl md:text-2xl text-light/50 mb-16 max-w-2xl font-light">
            {{ t('home.quiz.description') }}
          </p>
          <NuxtLink
            to="/quiz"
            class="group inline-flex items-center text-light text-lg hover:text-primary transition-colors"
          >
            <span class="mr-3">{{ t('common.actions.startQuiz') }}</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- About Section - Full Screen -->
    <section class="min-h-screen flex items-center border-t border-white/5">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="max-w-5xl mx-auto">
          <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-12">{{ t('home.about.section') }}</p>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-light mb-16 leading-tight">
            {{ t('home.about.title') }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p class="text-xl text-light/60 leading-relaxed mb-8 font-light">
                {{ t('home.about.description') }}
              </p>
              <p class="text-light/40 leading-relaxed font-light">
                {{ t('home.about.mission') }}
              </p>
            </div>
            <div class="space-y-8">
              <div>
                <p class="text-sm uppercase tracking-wider text-primary mb-2">{{ t('home.about.values.crossBorder.title') }}</p>
                <p class="text-light/50 font-light">{{ t('home.about.values.crossBorder.description') }}</p>
              </div>
              <div>
                <p class="text-sm uppercase tracking-wider text-primary mb-2">{{ t('home.about.values.accessible.title') }}</p>
                <p class="text-light/50 font-light">{{ t('home.about.values.accessible.description') }}</p>
              </div>
              <div>
                <p class="text-sm uppercase tracking-wider text-primary mb-2">{{ t('home.about.values.diversity.title') }}</p>
                <p class="text-light/50 font-light">{{ t('home.about.values.diversity.description') }}</p>
              </div>
            </div>
          </div>
          <div class="mt-16">
            <NuxtLink
              to="/a-propos"
              class="group inline-flex items-center text-light text-lg hover:text-primary transition-colors"
            >
              <span class="mr-3">{{ t('common.actions.learnMore') }}</span>
              <span class="transform group-hover:translate-x-1 transition-transform">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const { getFeaturedEvents } = useEvents()
const featuredEvents = getFeaturedEvents()

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const localeMap: { [key: string]: string } = {
    fr: 'fr-FR',
    eu: 'eu-ES',
    es: 'es-ES'
  }
  return new Intl.DateTimeFormat(localeMap[locale.value] || 'fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

useHead({
  title: t('meta.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.description')
    }
  ]
})
</script>

<style scoped>
/* Animation d'entrée du logo : morphing doux */
.logo-animated {
  animation: logoMorph 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transform-origin: center;
}

@keyframes logoMorph {
  0% {
    transform: scale(0.8) scaleY(1.2) rotate(-2deg);
    opacity: 0;
  }
  40% {
    transform: scale(1.05) scaleY(0.95) rotate(1deg);
    opacity: 1;
  }
  65% {
    transform: scale(0.98) scaleY(1.02) rotate(-0.5deg);
  }
  100% {
    transform: scale(1) scaleY(1) rotate(0deg);
    opacity: 1;
  }
}

/* Dégradé élégant violet→rose sur le logo */
.logo-gradient :deep(svg) {
  fill: url(#logoGradient);
}

/* Création du dégradé SVG */
.logo-container {
  position: relative;
}

.logo-container::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* Application du dégradé via filter pour SVG */
.logo-gradient :deep(svg path) {
  fill: url(#logo-gradient-def);
}

/* Définition du dégradé inline */
.logo-gradient :deep(svg) {
  background: linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #F59E0B 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Fallback : dégradé via fill si le SVG le supporte */
.logo-gradient {
  background: linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Désactiver les animations si reduced-motion est activé */
@media (prefers-reduced-motion: reduce) {
  .logo-animated {
    animation: none;
    transform: scale(1);
    opacity: 1;
  }
}
</style>
