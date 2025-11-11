<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-light mb-6 tracking-tight animate-fade-in">
            LIMBO
          </h1>
          <p class="text-xl md:text-2xl text-light/80 mb-4 animate-slide-up">
            Agenda culturel transfrontalier
          </p>
          <p class="text-lg md:text-xl text-primary/90 mb-12 animate-slide-up">
            Pays Basque nord & sud
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <PrimaryButton to="/agenda" variant="primary" size="lg">
              Découvrir l'agenda
            </PrimaryButton>
            <PrimaryButton to="/quiz" variant="outline" size="lg">
              Quel événement pour moi ?
            </PrimaryButton>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>

    <!-- Featured Events -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Les événements phares de ce mois-ci">
          À la une
        </SectionTitle>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <EventCard
            v-for="event in featuredEvents"
            :key="event.id"
            :event="event"
          />
        </div>

        <div class="mt-12 text-center">
          <PrimaryButton to="/agenda" variant="secondary">
            Voir tous les événements
          </PrimaryButton>
        </div>
      </div>
    </section>

    <!-- Quiz CTA -->
    <section class="py-16 md:py-24 bg-dark-lighter">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-light mb-6">
            Quel événement te correspond ?
          </h2>
          <p class="text-lg text-light/70 mb-8">
            Réponds à quelques questions et découvre les événements qui matchent avec tes envies.
          </p>
          <PrimaryButton to="/quiz" variant="primary" size="lg">
            Commencer le quiz
          </PrimaryButton>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <SectionTitle align="center" subtitle="Découvrez la culture des deux côtés de la frontière">
            Le concept Limbo
          </SectionTitle>

          <div class="mt-12 space-y-6 text-light/70 text-lg leading-relaxed">
            <p>
              <span class="text-primary font-semibold">Limbo</span> est un agenda culturel transfrontalier
              qui rassemble les événements du Pays Basque nord et sud.
            </p>
            <p>
              Notre mission : faciliter la découverte culturelle au-delà des frontières,
              promouvoir les échanges entre les deux côtés et valoriser la richesse
              de l'agenda culturel basque dans sa globalité.
            </p>
            <p>
              Concerts, expositions, festivals, ateliers... Explorez l'agenda et
              laissez-vous inspirer par la diversité culturelle du Pays Basque.
            </p>
          </div>

          <div class="mt-12 text-center">
            <PrimaryButton to="/a-propos" variant="outline">
              En savoir plus
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getFeaturedEvents } = useEvents()
const featuredEvents = getFeaturedEvents()

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
