<template>
  <div class="pt-32 pb-20">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- Page Header -->
      <div class="max-w-7xl mx-auto mb-20">
        <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-8">AGENDA</p>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-light mb-8 leading-tight">
          Tous les événements
        </h1>
        <p class="text-xl text-light/50 font-light max-w-2xl">
          Explorez l'agenda culturel complet du Pays Basque nord et sud
        </p>
      </div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
        <!-- Filters Sidebar -->
        <aside class="lg:col-span-1">
          <div class="lg:sticky lg:top-32">
            <p class="text-sm uppercase tracking-wider text-light/40 mb-6">Filtres</p>
            <EventFilters v-model="filters" />
          </div>
        </aside>

        <!-- Events Grid -->
        <div class="lg:col-span-3">
          <!-- Results count -->
          <div class="mb-12">
            <p class="text-light/40">
              <span class="text-light font-medium">{{ filteredEvents.length }}</span>
              {{ filteredEvents.length > 1 ? 'événements' : 'événement' }}
            </p>
          </div>

          <!-- Events list -->
          <div v-if="filteredEvents.length > 0" class="space-y-8">
            <div
              v-for="event in paginatedEvents"
              :key="event.id"
              class="group border-b border-white/5 pb-8 last:border-0"
            >
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div class="flex-1">
                  <div class="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <TagPill :label="event.type" variant="primary" />
                  </div>
                  <h3 class="text-3xl md:text-4xl font-display font-bold text-light mb-4 group-hover:text-primary transition-colors">
                    {{ event.title }}
                  </h3>
                  <div class="flex flex-wrap gap-4 text-light/40 text-sm mb-4">
                    <span>{{ formatDate(event.date) }}</span>
                    <span v-if="event.time">{{ event.time }}</span>
                    <span>{{ event.city }}</span>
                    <span>{{ event.side === 'nord' ? 'Nord' : 'Sud' }}</span>
                  </div>
                  <p v-if="event.description" class="text-light/50 leading-relaxed font-light max-w-2xl">
                    {{ event.description }}
                  </p>
                </div>
                <div v-if="event.url" class="md:ml-8">
                  <a
                    :href="event.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-light/60 hover:text-primary transition-colors"
                  >
                    <span class="mr-2">Voir l'événement</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- No results -->
          <div v-else class="py-20 text-center">
            <p class="text-2xl text-light/30 mb-4 font-light">Aucun événement trouvé</p>
            <button
              @click="resetFilters"
              class="text-light/60 hover:text-light transition-colors inline-flex items-center"
            >
              <span class="mr-2">Réinitialiser les filtres</span>
              <span>→</span>
            </button>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="mt-16 flex justify-center gap-4">
            <button
              v-for="page in totalPages"
              :key="page"
              :class="[
                'px-4 py-2 text-sm font-medium transition-colors',
                currentPage === page
                  ? 'text-light underline underline-offset-4'
                  : 'text-light/40 hover:text-light'
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

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
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
