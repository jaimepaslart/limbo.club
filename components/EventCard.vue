<template>
  <article
    class="bg-dark-light border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
  >
    <div class="p-6">
      <!-- Type badge & Side -->
      <div class="flex items-center justify-between mb-3">
        <TagPill :label="event.type" variant="primary" />
        <span class="text-xs text-light/50 uppercase tracking-wider">
          {{ event.side === 'nord' ? 'Nord' : 'Sud' }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-display font-bold text-light mb-2 group-hover:text-primary transition-colors">
        {{ localizedEvent.title }}
      </h3>

      <!-- Date & Time -->
      <div class="flex items-center text-light/60 text-sm mb-3">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{{ formatDate(event.date) }}</span>
        <span v-if="event.time" class="ml-2">• {{ event.time }}</span>
      </div>

      <!-- Location -->
      <div class="flex items-center text-light/60 text-sm mb-4">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{{ event.venue }}, {{ event.city }}</span>
      </div>

      <!-- Description -->
      <p v-if="localizedEvent.description" class="text-light/70 text-sm mb-4 line-clamp-2">
        {{ localizedEvent.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <TagPill
          v-for="tag in event.tags.slice(0, 3)"
          :key="tag"
          :label="tag"
          variant="secondary"
        />
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-4 border-t border-white/10">
        <span v-if="event.price" class="text-sm font-semibold text-primary">
          {{ event.price }}
        </span>
        <a
          v-if="event.url"
          :href="event.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-light/60 hover:text-primary transition-colors flex items-center"
        >
          {{ t('common.actions.learnMore') }}
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Event } from '~/types/event'

interface Props {
  event: Event
}

const props = defineProps<Props>()

const { t } = useI18n()
const { getLocalizedEvent } = useTranslatedEvent()

const localizedEvent = computed(() => getLocalizedEvent(props.event))

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}
</script>
