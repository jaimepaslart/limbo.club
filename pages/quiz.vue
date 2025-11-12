<template>
  <div class="py-12 md:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <!-- Intro -->
      <div v-if="!showResults" class="text-center mb-12">
        <SectionTitle align="center" :subtitle="t('quiz.intro.subtitle')">
          {{ t('quiz.intro.title') }}
        </SectionTitle>
      </div>

      <!-- Quiz Form -->
      <div v-if="!showResults" class="space-y-8">
        <!-- Question 1: Ambiance -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            {{ t('quiz.questions.q1.label') }}
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
              <div class="font-medium">{{ t(`quiz.questions.q1.options.${option.key}`) }}</div>
            </button>
          </div>
        </div>

        <!-- Question 2: Moment -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            {{ t('quiz.questions.q2.label') }}
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
              {{ t(`quiz.questions.q2.options.${option.key}`) }}
            </button>
          </div>
        </div>

        <!-- Question 3: Side -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            {{ t('quiz.questions.q3.label') }}
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
              {{ t(`quiz.questions.q3.options.${option.key}`) }}
            </button>
          </div>
        </div>

        <!-- Question 4: Budget -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            {{ t('quiz.questions.q4.label') }}
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
              {{ t(`quiz.questions.q4.options.${option.key}`) }}
            </button>
          </div>
        </div>

        <!-- Question 5: Event Type -->
        <div class="bg-dark-light border border-white/10 rounded-lg p-6">
          <label class="block text-lg font-display font-semibold text-light mb-4">
            {{ t('quiz.questions.q5.label') }}
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
              {{ t(`quiz.questions.q5.options.${option.key}`) }}
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
            {{ t('quiz.actions.submit') }}
          </PrimaryButton>
        </div>
      </div>

      <!-- Results -->
      <div v-else class="space-y-12">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-light mb-4">
            {{ t('quiz.results.title') }}
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
            {{ t('quiz.actions.reset') }}
          </PrimaryButton>
          <PrimaryButton to="/agenda">
            {{ t('quiz.actions.viewAll') }}
          </PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuizAnswers, EventSide, EventType, Event } from '~/types/event'

const { t } = useI18n()
const { events, filterEvents } = useEvents()

const answers = ref<QuizAnswers>({})
const showResults = ref(false)
const recommendedEvents = ref<Event[]>([])

const ambianceOptions = [
  { key: 'intimiste', value: 'intimiste' },
  { key: 'club', value: 'club' },
  { key: 'pleinAir', value: 'plein-air' },
  { key: 'populaire', value: 'populaire' },
]

const momentOptions = [
  { key: 'matin', value: 'matin' },
  { key: 'apresMidi', value: 'après-midi' },
  { key: 'soir', value: 'soir' },
  { key: 'nuit', value: 'nuit' },
]

const sideOptions = [
  { key: 'nord', value: 'nord' as EventSide },
  { key: 'sud', value: 'sud' as EventSide },
  { key: 'peuImporte', value: 'peu-importe' },
]

const budgetOptions = [
  { key: 'gratuit', value: 'gratuit' },
  { key: 'abordable', value: 'abordable' },
  { key: 'peuImporte', value: 'peu-importe' },
]

const eventTypeOptions = [
  { key: 'concert', value: 'concert' as EventType },
  { key: 'expo', value: 'expo' as EventType },
  { key: 'festival', value: 'festival' as EventType },
  { key: 'atelier', value: 'atelier' as EventType },
  { key: 'cinema', value: 'cinema' as EventType },
  { key: 'theatre', value: 'theatre' as EventType },
  { key: 'danse', value: 'danse' as EventType },
  { key: 'conference', value: 'conference' as EventType },
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
  const messages = t('quiz.results.messages') as string[]
  return messages[Math.floor(Math.random() * messages.length)]
}

const resetQuiz = () => {
  answers.value = {}
  showResults.value = false
  recommendedEvents.value = []
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

useHead({
  title: t('quiz.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('quiz.meta.description')
    }
  ]
})
</script>
