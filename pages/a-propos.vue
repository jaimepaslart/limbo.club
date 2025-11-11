<template>
  <div class="py-12 md:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <SectionTitle
          align="center"
          subtitle="Un pont culturel entre deux territoires"
        >
          Le concept Limbo
        </SectionTitle>
      </div>

      <!-- Main Content -->
      <div class="max-w-4xl mx-auto space-y-16">
        <!-- Mission -->
        <section>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-light mb-6">
            Notre mission
          </h3>
          <div class="space-y-4 text-light/70 text-lg leading-relaxed">
            <p>
              <span class="text-primary font-semibold">Limbo</span> est né d'une conviction simple :
              la frontière entre le Pays Basque nord et sud ne devrait pas être un obstacle
              à la découverte culturelle.
            </p>
            <p>
              Notre agenda transfrontalier rassemble concerts, expositions, festivals,
              projections, ateliers et conférences des deux côtés de la Bidassoa.
              Que vous soyez à Biarritz, Bilbao, Bayonne ou Donostia, découvrez
              l'effervescence culturelle d'un territoire unique.
            </p>
            <p>
              Nous valorisons autant les grandes manifestations que les rendez-vous
              plus intimistes, portés par des artistes locaux, des associations
              ou des lieux indépendants.
            </p>
          </div>
        </section>

        <!-- How it works -->
        <section class="bg-dark-lighter border border-white/10 rounded-lg p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-light mb-8">
            Comment ça marche ?
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 class="font-display font-bold text-light mb-2">1. Explorez</h4>
              <p class="text-light/60 text-sm">
                Parcourez l'agenda complet ou utilisez nos filtres pour trouver
                ce qui vous correspond.
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 class="font-display font-bold text-light mb-2">2. Sélectionnez</h4>
              <p class="text-light/60 text-sm">
                Repérez les événements qui vous intéressent. Faites notre quiz
                pour des suggestions personnalisées.
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h4 class="font-display font-bold text-light mb-2">3. Partagez</h4>
              <p class="text-light/60 text-sm">
                Vous organisez un événement ? Proposez-le pour qu'il apparaisse
                sur Limbo.
              </p>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-light mb-6">
            Nos valeurs
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-dark-light border border-white/10 rounded-lg p-6">
              <h4 class="font-display font-bold text-primary mb-3">
                Transfrontalier
              </h4>
              <p class="text-light/70">
                Nous croyons en un Pays Basque sans frontière culturelle,
                où chacun peut librement découvrir l'offre des deux côtés.
              </p>
            </div>

            <div class="bg-dark-light border border-white/10 rounded-lg p-6">
              <h4 class="font-display font-bold text-primary mb-3">
                Accessible
              </h4>
              <p class="text-light/70">
                Notre plateforme est gratuite et ouverte à tous : organisateurs,
                artistes et public.
              </p>
            </div>

            <div class="bg-dark-light border border-white/10 rounded-lg p-6">
              <h4 class="font-display font-bold text-primary mb-3">
                Diversité
              </h4>
              <p class="text-light/70">
                Nous mettons en lumière tous les types d'événements, des grandes
                scènes aux initiatives locales.
              </p>
            </div>

            <div class="bg-dark-light border border-white/10 rounded-lg p-6">
              <h4 class="font-display font-bold text-primary mb-3">
                Communauté
              </h4>
              <p class="text-light/70">
                Limbo est un projet collaboratif qui grandit grâce aux contributions
                de la communauté culturelle basque.
              </p>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section class="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-light mb-4">
            Restons en contact
          </h3>
          <p class="text-light/70 mb-8 max-w-2xl mx-auto">
            Suivez-nous sur Instagram pour ne rien manquer de l'actualité culturelle
            transfrontalière, ou contactez-nous pour toute question.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/limbo_agenda"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @limbo_agenda
            </a>

            <a
              href="mailto:contact@limbo-agenda.eu"
              class="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-light rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Nous contacter
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'À propos – Limbo',
  meta: [
    {
      name: 'description',
      content: 'Découvrez le projet Limbo, agenda culturel transfrontalier du Pays Basque nord et sud.'
    }
  ]
})
</script>
