<template>
  <div>
    <!-- Hero Section - Full Screen -->
    <section class="min-h-screen flex items-center justify-center relative">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="max-w-6xl mx-auto">
          <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-8">INTRO</p>
          <h1 class="text-7xl md:text-8xl lg:text-9xl font-display font-bold text-light mb-12 leading-[0.9] tracking-tighter">
            LIMBO
          </h1>
          <p class="text-2xl md:text-3xl lg:text-4xl text-light/60 mb-16 max-w-3xl font-light">
            Agenda culturel transfrontalier<br />
            <span class="text-primary">Pays Basque nord & sud</span>
          </p>
          <div class="flex flex-col sm:flex-row gap-6">
            <NuxtLink
              to="/agenda"
              class="group inline-flex items-center text-light text-lg hover:text-primary transition-colors"
            >
              <span class="mr-3">Découvrir l'agenda</span>
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
          <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-12">AGENDA</p>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-light mb-20 leading-tight">
            À la une
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
                <p class="text-light/40 text-sm">{{ event.city }} · {{ event.side === 'nord' ? 'Nord' : 'Sud' }}</p>
              </NuxtLink>
            </div>
          </div>

          <div class="mt-20">
            <NuxtLink
              to="/agenda"
              class="group inline-flex items-center text-light text-lg hover:text-primary transition-colors"
            >
              <span class="mr-3">Voir tous les événements</span>
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
          <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-12">QUIZ</p>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-light mb-12 leading-tight">
            Quel événement<br />te correspond ?
          </h2>
          <p class="text-xl md:text-2xl text-light/50 mb-16 max-w-2xl font-light">
            Quelques questions pour découvrir les événements qui matchent avec tes envies.
          </p>
          <NuxtLink
            to="/quiz"
            class="group inline-flex items-center text-light text-lg hover:text-primary transition-colors"
          >
            <span class="mr-3">Commencer le quiz</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- About Section - Full Screen -->
    <section class="min-h-screen flex items-center border-t border-white/5">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="max-w-5xl mx-auto">
          <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-12">CONCEPT</p>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-light mb-16 leading-tight">
            Le concept<br />Limbo
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p class="text-xl text-light/60 leading-relaxed mb-8 font-light">
                Un agenda culturel qui rassemble les événements du Pays Basque nord et sud.
              </p>
              <p class="text-light/40 leading-relaxed font-light">
                Notre mission : faciliter la découverte culturelle au-delà des frontières.
              </p>
            </div>
            <div class="space-y-8">
              <div>
                <p class="text-sm uppercase tracking-wider text-primary mb-2">Transfrontalier</p>
                <p class="text-light/50 font-light">Un pont culturel entre deux territoires</p>
              </div>
              <div>
                <p class="text-sm uppercase tracking-wider text-primary mb-2">Accessible</p>
                <p class="text-light/50 font-light">Gratuit et ouvert à tous</p>
              </div>
              <div>
                <p class="text-sm uppercase tracking-wider text-primary mb-2">Diversité</p>
                <p class="text-light/50 font-light">De grandes scènes aux initiatives locales</p>
              </div>
            </div>
          </div>
          <div class="mt-16">
            <NuxtLink
              to="/a-propos"
              class="group inline-flex items-center text-light text-lg hover:text-primary transition-colors"
            >
              <span class="mr-3">En savoir plus</span>
              <span class="transform group-hover:translate-x-1 transition-transform">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getFeaturedEvents } = useEvents()
const featuredEvents = getFeaturedEvents()

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

useHead({
  title: 'Limbo – Agenda culturel transfrontalier Pays Basque nord & sud',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les événements culturels du Pays Basque nord et sud. Concerts, expositions, festivals et plus encore.'
    }
  ]
})
</script>
