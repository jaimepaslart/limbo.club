<template>
  <div class="py-12 md:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="Explorez tous les événements du Pays Basque nord et sud">
        Agenda des événements
      </SectionTitle>

      <div class="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Filters Sidebar -->
        <aside class="lg:col-span-1">
          <div class="lg:sticky lg:top-24">
            <EventFilters v-model="filters" />
          </div>
        </aside>

        <!-- Events Grid -->
        <div class="lg:col-span-3">
          <!-- Results count -->
          <div class="mb-6 flex items-center justify-between">
            <p class="text-light/60">
              <span class="font-semibold text-primary">{{ filteredEvents.length }}</span>
              {{ filteredEvents.length > 1 ? 'événements trouvés' : 'événement trouvé' }}
            </p>
          </div>

          <!-- Events list -->
          <div v-if="filteredEvents.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EventCard
              v-for="event in paginatedEvents"
              :key="event.id"
              :event="event"
            />
          </div>

          <!-- No results -->
          <div v-else class="text-center py-16">
            <svg class="w-16 h-16 mx-auto text-light/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-xl font-display font-bold text-light mb-2">
              Aucun événement trouvé
            </h3>
            <p class="text-light/60 mb-6">
              Essayez de modifier vos filtres pour découvrir plus d'événements.
            </p>
            <PrimaryButton variant="outline" @click="resetFilters">
              Réinitialiser les filtres
            </PrimaryButton>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="mt-12 flex justify-center gap-2">
            <button
              v-for="page in totalPages"
              :key="page"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-all',
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'bg-dark-light text-light/70 hover:bg-dark-lighter hover:text-light'
              ]"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventFilters } from '~/types/event'

const { filterEvents } = useEvents()

const filters = ref<EventFilters>({
  dateRange: 'upcoming'
})

const currentPage = ref(1)
const perPage = 12

const filteredEvents = computed(() => {
  return filterEvents(filters.value)
})

const totalPages = computed(() => {
  return Math.ceil(filteredEvents.value.length / perPage)
})

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return filteredEvents.value.slice(start, end)
})

const resetFilters = () => {
  filters.value = { dateRange: 'upcoming' }
  currentPage.value = 1
}

// Reset pagination when filters change
watch(filters, () => {
  currentPage.value = 1
}, { deep: true })

useHead({
  title: 'Agenda – Limbo',
  meta: [
    {
      name: 'description',
      content: 'Consultez l\'agenda complet des événements culturels du Pays Basque nord et sud.'
    }
  ]
})
</script>
