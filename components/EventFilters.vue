<template>
  <div class="bg-dark-light border border-white/10 rounded-lg p-6">
    <h3 class="text-lg font-display font-bold text-light mb-6">Filtrer les événements</h3>

    <div class="space-y-6">
      <!-- Search -->
      <div>
        <label for="search" class="block text-sm font-medium text-light/80 mb-2">
          Rechercher
        </label>
        <input
          id="search"
          v-model="localFilters.search"
          type="text"
          placeholder="Titre, lieu, ville..."
          class="w-full bg-dark border border-white/20 rounded-lg px-4 py-2.5 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
      </div>

      <!-- Side -->
      <div>
        <label class="block text-sm font-medium text-light/80 mb-2">
          Côté
        </label>
        <div class="flex gap-3">
          <button
            v-for="option in sideOptions"
            :key="option.value"
            :class="[
              'flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all',
              localFilters.side === option.value
                ? 'bg-primary text-white'
                : 'bg-dark border border-white/20 text-light/70 hover:border-primary/50'
            ]"
            @click="toggleFilter('side', option.value)"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <!-- Type -->
      <div>
        <label class="block text-sm font-medium text-light/80 mb-2">
          Type d'événement
        </label>
        <select
          v-model="localFilters.type"
          class="w-full bg-dark border border-white/20 rounded-lg px-4 py-2.5 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option :value="undefined">Tous les types</option>
          <option v-for="type in eventTypes" :key="type.value" :value="type.value">
            {{ type.label }}
          </option>
        </select>
      </div>

      <!-- Date Range -->
      <div>
        <label class="block text-sm font-medium text-light/80 mb-2">
          Période
        </label>
        <select
          v-model="localFilters.dateRange"
          class="w-full bg-dark border border-white/20 rounded-lg px-4 py-2.5 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option :value="undefined">Toutes les dates</option>
          <option value="upcoming">À venir</option>
          <option value="weekend">Ce week-end</option>
          <option value="month">Ce mois-ci</option>
        </select>
      </div>

      <!-- City -->
      <div>
        <label for="city" class="block text-sm font-medium text-light/80 mb-2">
          Ville
        </label>
        <input
          id="city"
          v-model="localFilters.city"
          type="text"
          placeholder="Filtrer par ville..."
          class="w-full bg-dark border border-white/20 rounded-lg px-4 py-2.5 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
      </div>

      <!-- Reset -->
      <button
        class="w-full px-4 py-2.5 bg-white/5 hover:bg-white/10 text-light/70 hover:text-light rounded-lg text-sm font-medium transition-colors"
        @click="resetFilters"
      >
        Réinitialiser les filtres
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventFilters, EventSide, EventType } from '~/types/event'

interface Props {
  modelValue: EventFilters
}

interface Emits {
  (e: 'update:modelValue', value: EventFilters): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const localFilters = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const sideOptions = [
  { label: 'Tous', value: undefined },
  { label: 'Nord', value: 'nord' as EventSide },
  { label: 'Sud', value: 'sud' as EventSide },
]

const eventTypes = [
  { label: 'Concert', value: 'concert' as EventType },
  { label: 'Exposition', value: 'expo' as EventType },
  { label: 'Festival', value: 'festival' as EventType },
  { label: 'Cinéma', value: 'cinema' as EventType },
  { label: 'Atelier', value: 'atelier' as EventType },
  { label: 'Théâtre', value: 'theatre' as EventType },
  { label: 'Danse', value: 'danse' as EventType },
  { label: 'Conférence', value: 'conference' as EventType },
]

const toggleFilter = (key: keyof EventFilters, value: any) => {
  localFilters.value = {
    ...localFilters.value,
    [key]: localFilters.value[key] === value ? undefined : value
  }
}

const resetFilters = () => {
  localFilters.value = {}
}
</script>
