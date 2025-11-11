<template>
  <div class="py-12 md:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <!-- Intro -->
      <div v-if="!showResults" class="text-center mb-12">
        <SectionTitle align="center" subtitle="Réponds à quelques questions pour découvrir les événements qui te correspondent">
          Quel événement te correspond ?
        </SectionTitle>
      </div>

      <!-- Quiz Form -->
      <div v-if="!showResults" class="space-y-8">
        <!-- Question 1: Ambiance -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            1. Quelle ambiance préfères-tu ?
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              v-for="option in ambianceOptions"
              :key="option.value"
              :class="[
                'p-4 rounded-lg text-left transition-all',
                answers.ambiance === option.value
                  ? 'bg-primary text-white'
                  : 'bg-dark border border-white/20 text-light/70 hover:border-primary/50'
              ]"
              @click="answers.ambiance = option.value"
            >
              <div class="font-medium">{{ option.label }}</div>
            </button>
          </div>
        </div>

        <!-- Question 2: Moment -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            2. À quel moment de la journée ?
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              v-for="option in momentOptions"
              :key="option.value"
              :class="[
                'p-4 rounded-lg text-center transition-all',
                answers.moment === option.value
                  ? 'bg-primary text-white'
                  : 'bg-dark border border-white/20 text-light/70 hover:border-primary/50'
              ]"
              @click="answers.moment = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <!-- Question 3: Side -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            3. De quel côté ?
          </label>
          <div class="grid grid-cols-3 gap-3">
            <button
              v-for="option in sideOptions"
              :key="option.value"
              :class="[
                'p-4 rounded-lg text-center transition-all',
                answers.side === option.value
                  ? 'bg-primary text-white'
                  : 'bg-dark border border-white/20 text-light/70 hover:border-primary/50'
              ]"
              @click="answers.side = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <!-- Question 4: Budget -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            4. Budget ?
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              v-for="option in budgetOptions"
              :key="option.value"
              :class="[
                'p-4 rounded-lg text-center transition-all',
                answers.budget === option.value
                  ? 'bg-primary text-white'
                  : 'bg-dark border border-white/20 text-light/70 hover:border-primary/50'
              ]"
              @click="answers.budget = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <!-- Question 5: Event Type -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            5. Type d'événement préféré ?
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              v-for="option in eventTypeOptions"
              :key="option.value"
              :class="[
                'p-4 rounded-lg text-center transition-all',
                answers.eventType === option.value
                  ? 'bg-primary text-white'
                  : 'bg-dark border border-white/20 text-light/70 hover:border-primary/50'
              ]"
              @click="answers.eventType = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="text-center pt-6">
          <PrimaryButton
            size="lg"
            :disabled="!isFormComplete"
            @click="calculateResults"
          >
            Voir mes recommandations
          </PrimaryButton>
        </div>
      </div>

      <!-- Results -->
      <div v-else class="space-y-12">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-light mb-4">
            Voici les événements pour toi !
          </h2>
          <p class="text-lg text-light/70">
            {{ getPersonalizedMessage() }}
          </p>
        </div>

        <!-- Recommended Events -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EventCard
            v-for="event in recommendedEvents"
            :key="event.id"
            :event="event"
          />
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton variant="outline" @click="resetQuiz">
            Refaire le quiz
          </PrimaryButton>
          <PrimaryButton to="/agenda">
            Voir tous les événements
          </PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuizAnswers, EventSide, EventType, Event } from '~/types/event'

const { events, filterEvents } = useEvents()

const answers = ref<QuizAnswers>({})
const showResults = ref(false)
const recommendedEvents = ref<Event[]>([])

const ambianceOptions = [
  { label: 'Intimiste', value: 'intimiste' },
  { label: 'Club / Salle', value: 'club' },
  { label: 'Plein air', value: 'plein-air' },
  { label: 'Grande foule', value: 'populaire' },
]

const momentOptions = [
  { label: 'Matin', value: 'matin' },
  { label: 'Après-midi', value: 'après-midi' },
  { label: 'Soir', value: 'soir' },
  { label: 'Nuit', value: 'nuit' },
]

const sideOptions = [
  { label: 'Nord', value: 'nord' as EventSide },
  { label: 'Sud', value: 'sud' as EventSide },
  { label: 'Peu importe', value: 'peu-importe' },
]

const budgetOptions = [
  { label: 'Gratuit', value: 'gratuit' },
  { label: 'Abordable', value: 'abordable' },
  { label: 'Peu importe', value: 'peu-importe' },
]

const eventTypeOptions = [
  { label: 'Concert', value: 'concert' as EventType },
  { label: 'Expo', value: 'expo' as EventType },
  { label: 'Festival', value: 'festival' as EventType },
  { label: 'Atelier', value: 'atelier' as EventType },
  { label: 'Cinéma', value: 'cinema' as EventType },
  { label: 'Théâtre', value: 'theatre' as EventType },
  { label: 'Danse', value: 'danse' as EventType },
  { label: 'Conférence', value: 'conference' as EventType },
]

const isFormComplete = computed(() => {
  return !!(answers.value.ambiance &&
    answers.value.moment &&
    answers.value.side &&
    answers.value.budget &&
    answers.value.eventType)
})

const calculateResults = () => {
  // Simple matching algorithm based on tags
  const scoredEvents = events.map(event => {
    let score = 0

    // Match ambiance
    if (answers.value.ambiance && event.tags.includes(answers.value.ambiance)) {
      score += 3
    }

    // Match moment
    if (answers.value.moment && event.tags.includes(answers.value.moment)) {
      score += 2
    }

    // Match side
    if (answers.value.side !== 'peu-importe' && event.side === answers.value.side) {
      score += 2
    }

    // Match budget
    if (answers.value.budget === 'gratuit' && event.tags.includes('gratuit')) {
      score += 2
    }

    // Match event type
    if (answers.value.eventType && event.type === answers.value.eventType) {
      score += 4
    }

    return { event, score }
  })

  // Sort by score and filter upcoming events
  const now = new Date()
  recommendedEvents.value = scoredEvents
    .filter(({ event }) => new Date(event.date) >= now)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(({ event }) => event)

  showResults.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const getPersonalizedMessage = () => {
  const messages = [
    'Nous avons sélectionné ces événements spécialement pour toi.',
    'Ces événements correspondent parfaitement à tes préférences.',
    'Voici notre sélection personnalisée selon tes goûts.',
  ]
  return messages[Math.floor(Math.random() * messages.length)]
}

const resetQuiz = () => {
  answers.value = {}
  showResults.value = false
  recommendedEvents.value = []
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

useHead({
  title: 'Quiz – Quel événement te correspond ? – Limbo',
  meta: [
    {
      name: 'description',
      content: 'Réponds à notre quiz pour découvrir les événements culturels qui correspondent à tes envies.'
    }
  ]
})
</script>
