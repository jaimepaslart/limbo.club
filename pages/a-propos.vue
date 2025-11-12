<template>
  <div class="py-12 md:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <SectionTitle
          align="center"
          :subtitle="t('about.sectionTitle.subtitle')"
        >
          {{ t('about.sectionTitle.title') }}
        </SectionTitle>
      </div>

      <!-- Main Content -->
      <div class="max-w-4xl mx-auto space-y-16">
        <!-- Mission -->
        <section>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-light mb-6">
            {{ t('about.mission.title') }}
          </h3>
          <div class="space-y-4 text-light/70 text-lg leading-relaxed">
            <p>
              <span class="text-primary font-semibold">Limbo</span> {{ t('about.mission.text1').replace('Limbo ', '') }}
            </p>
            <p>
              {{ t('about.mission.text2') }}
            </p>
            <p>
              {{ t('about.mission.text3') }}
            </p>
          </div>
        </section>

        <!-- How it works -->
        <section class="bg-dark-lighter border border-white/10 rounded-lg p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-light mb-8">
            {{ t('about.howItWorks.title') }}
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 class="font-display font-bold text-light mb-2">{{ t('about.howItWorks.step1.title') }}</h4>
              <p class="text-light/60 text-sm">
                {{ t('about.howItWorks.step1.description') }}
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 class="font-display font-bold text-light mb-2">{{ t('about.howItWorks.step2.title') }}</h4>
              <p class="text-light/60 text-sm">
                {{ t('about.howItWorks.step2.description') }}
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h4 class="font-display font-bold text-light mb-2">{{ t('about.howItWorks.step3.title') }}</h4>
              <p class="text-light/60 text-sm">
                {{ t('about.howItWorks.step3.description') }}
              </p>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-light mb-6">
            {{ t('about.values.title') }}
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-dark-light border border-white/10 rounded-lg p-6">
              <h4 class="font-display font-bold text-primary mb-3">
                {{ t('about.values.crossBorder.title') }}
              </h4>
              <p class="text-light/70">
                {{ t('about.values.crossBorder.description') }}
              </p>
            </div>

            <div class="bg-dark-light border border-white/10 rounded-lg p-6">
              <h4 class="font-display font-bold text-primary mb-3">
                {{ t('about.values.accessible.title') }}
              </h4>
              <p class="text-light/70">
                {{ t('about.values.accessible.description') }}
              </p>
            </div>

            <div class="bg-dark-light border border-white/10 rounded-lg p-6">
              <h4 class="font-display font-bold text-primary mb-3">
                {{ t('about.values.diversity.title') }}
              </h4>
              <p class="text-light/70">
                {{ t('about.values.diversity.description') }}
              </p>
            </div>

            <div class="bg-dark-light border border-white/10 rounded-lg p-6">
              <h4 class="font-display font-bold text-primary mb-3">
                {{ t('about.values.community.title') }}
              </h4>
              <p class="text-light/70">
                {{ t('about.values.community.description') }}
              </p>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section class="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-light mb-4">
            {{ t('about.contactSection.title') }}
          </h3>
          <p class="text-light/70 mb-8 max-w-2xl mx-auto">
            {{ t('about.contactSection.description') }}
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
              {{ t('about.contactSection.instagram') }}
            </a>

            <a
              href="mailto:contact@limbo-agenda.eu"
              class="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-light rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ t('about.contactSection.contactButton') }}
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('about.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('about.meta.description')
    }
  ]
})
</script>
