<template>
  <div class="bg-dark-light border border-white/10 rounded-lg p-6">
    <h3 class="text-lg font-display font-bold text-light mb-6">{{ t('filters.title') }}</h3>

    <div class="space-y-6">
      <!-- Search -->
      <div>
        <label for="search" class="block text-sm font-medium text-light/80 mb-2">
          {{ t('filters.search.label') }}
        </label>
        <input
          id="search"
          v-model="localFilters.search"
          type="text"
          :placeholder="t('filters.search.placeholder')"
          class="w-full bg-dark border border-white/20 rounded-lg px-4 py-2.5 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
      </div>

      <!-- Side -->
      <div>
        <label class="block text-sm font-medium text-light/80 mb-2">
          {{ t('filters.side.label') }}
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
          {{ t('filters.type.label') }}
        </label>
        <select
          v-model="localFilters.type"
          class="w-full bg-dark border border-white/20 rounded-lg px-4 py-2.5 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option :value="undefined">{{ t('filters.type.all') }}</option>
          <option v-for="type in eventTypes" :key="type.value" :value="type.value">
            {{ type.label }}
          </option>
        </select>
      </div>

      <!-- Date Range -->
      <div>
        <label class="block text-sm font-medium text-light/80 mb-2">
          {{ t('filters.dateRange.label') }}
        </label>
        <select
          v-model="localFilters.dateRange"
          class="w-full bg-dark border border-white/20 rounded-lg px-4 py-2.5 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option :value="undefined">{{ t('filters.dateRange.all') }}</option>
          <option value="upcoming">{{ t('filters.dateRange.upcoming') }}</option>
          <option value="weekend">{{ t('filters.dateRange.weekend') }}</option>
          <option value="month">{{ t('filters.dateRange.month') }}</option>
        </select>
      </div>

      <!-- City -->
      <div>
        <label for="city" class="block text-sm font-medium text-light/80 mb-2">
          {{ t('filters.city.label') }}
        </label>
        <input
          id="city"
          v-model="localFilters.city"
          type="text"
          :placeholder="t('filters.city.placeholder')"
          class="w-full bg-dark border border-white/20 rounded-lg px-4 py-2.5 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
      </div>

      <!-- Reset -->
      <button
        class="w-full px-4 py-2.5 bg-white/5 hover:bg-white/10 text-light/70 hover:text-light rounded-lg text-sm font-medium transition-colors"
        @click="resetFilters"
      >
        {{ t('filters.reset') }}
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
const { t } = useI18n()

const localFilters = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const sideOptions = computed(() => [
  { label: t('filters.side.all'), value: undefined },
  { label: t('filters.side.nord'), value: 'nord' as EventSide },
  { label: t('filters.side.sud'), value: 'sud' as EventSide },
])

const eventTypes = computed(() => [
  { label: t('filters.type.concert'), value: 'concert' as EventType },
  { label: t('filters.type.expo'), value: 'expo' as EventType },
  { label: t('filters.type.festival'), value: 'festival' as EventType },
  { label: t('filters.type.cinema'), value: 'cinema' as EventType },
  { label: t('filters.type.atelier'), value: 'atelier' as EventType },
  { label: t('filters.type.theatre'), value: 'theatre' as EventType },
  { label: t('filters.type.danse'), value: 'danse' as EventType },
  { label: t('filters.type.conference'), value: 'conference' as EventType },
])

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
