<template>
  <div class="py-12 md:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <SectionTitle
        align="center"
        :subtitle="t('proposeEvent.sectionTitle.subtitle')"
      >
        {{ t('proposeEvent.sectionTitle.title') }}
      </SectionTitle>

      <!-- Error Message -->
      <Transition name="fade">
        <div
          v-if="errorMessage"
          class="mt-12 bg-red-500/20 border border-red-500/50 rounded-lg p-6 text-center"
        >
          <svg class="w-16 h-16 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-2xl font-display font-bold text-light mb-2">
            {{ t('proposeEvent.error.title') }}
          </h3>
          <p class="text-light/70 mb-6">
            {{ errorMessage }}
          </p>
          <PrimaryButton variant="outline" @click="errorMessage = ''">
            {{ t('proposeEvent.error.button') }}
          </PrimaryButton>
        </div>
      </Transition>

      <!-- Success Message -->
      <Transition name="fade">
        <div
          v-if="showSuccess"
          class="mt-12 bg-primary/20 border border-primary/50 rounded-lg p-6 text-center"
        >
          <svg class="w-16 h-16 mx-auto text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-2xl font-display font-bold text-light mb-2">
            {{ t('proposeEvent.success.title') }}
          </h3>
          <p class="text-light/70 mb-6">
            {{ t('proposeEvent.success.message') }}
          </p>
          <PrimaryButton variant="outline" @click="resetForm">
            {{ t('proposeEvent.success.button') }}
          </PrimaryButton>
        </div>
      </Transition>

      <!-- Form -->
      <form v-if="!showSuccess && !errorMessage" class="mt-12 space-y-6" @submit.prevent="handleSubmit">
        <!-- Event Name -->
        <div>
          <label for="title" class="block text-sm font-medium text-light/80 mb-2">
            {{ t('proposeEvent.form.title.label') }} <span class="text-primary">*</span>
          </label>
          <input
            id="title"
            v-model="formData.title"
            type="text"
            required
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            :placeholder="t('proposeEvent.form.title.placeholder')"
          >
        </div>

        <!-- Event Type -->
        <div>
          <label for="type" class="block text-sm font-medium text-light/80 mb-2">
            {{ t('proposeEvent.form.type.label') }} <span class="text-primary">*</span>
          </label>
          <select
            id="type"
            v-model="formData.type"
            required
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">{{ t('proposeEvent.form.type.placeholder') }}</option>
            <option value="concert">{{ t('proposeEvent.form.type.concert') }}</option>
            <option value="expo">{{ t('proposeEvent.form.type.expo') }}</option>
            <option value="festival">{{ t('proposeEvent.form.type.festival') }}</option>
            <option value="cinema">{{ t('proposeEvent.form.type.cinema') }}</option>
            <option value="atelier">{{ t('proposeEvent.form.type.atelier') }}</option>
            <option value="theatre">{{ t('proposeEvent.form.type.theatre') }}</option>
            <option value="danse">{{ t('proposeEvent.form.type.danse') }}</option>
            <option value="conference">{{ t('proposeEvent.form.type.conference') }}</option>
          </select>
        </div>

        <!-- Date & Time -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="date" class="block text-sm font-medium text-light/80 mb-2">
              {{ t('proposeEvent.form.date.label') }} <span class="text-primary">*</span>
            </label>
            <input
              id="date"
              v-model="formData.date"
              type="date"
              required
              class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
          </div>
          <div>
            <label for="time" class="block text-sm font-medium text-light/80 mb-2">
              {{ t('proposeEvent.form.time.label') }}
            </label>
            <input
              id="time"
              v-model="formData.time"
              type="time"
              class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
          </div>
        </div>

        <!-- Location -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="city" class="block text-sm font-medium text-light/80 mb-2">
              {{ t('proposeEvent.form.city.label') }} <span class="text-primary">*</span>
            </label>
            <input
              id="city"
              v-model="formData.city"
              type="text"
              required
              class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              :placeholder="t('proposeEvent.form.city.placeholder')"
            >
          </div>
          <div>
            <label for="side" class="block text-sm font-medium text-light/80 mb-2">
              {{ t('proposeEvent.form.side.label') }} <span class="text-primary">*</span>
            </label>
            <select
              id="side"
              v-model="formData.side"
              required
              class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">{{ t('proposeEvent.form.side.placeholder') }}</option>
              <option value="nord">{{ t('proposeEvent.form.side.nord') }}</option>
              <option value="sud">{{ t('proposeEvent.form.side.sud') }}</option>
            </select>
          </div>
        </div>

        <!-- Venue -->
        <div>
          <label for="venue" class="block text-sm font-medium text-light/80 mb-2">
            {{ t('proposeEvent.form.venue.label') }} <span class="text-primary">*</span>
          </label>
          <input
            id="venue"
            v-model="formData.venue"
            type="text"
            required
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            :placeholder="t('proposeEvent.form.venue.placeholder')"
          >
        </div>

        <!-- URL -->
        <div>
          <label for="url" class="block text-sm font-medium text-light/80 mb-2">
            {{ t('proposeEvent.form.url.label') }}
          </label>
          <input
            id="url"
            v-model="formData.url"
            type="url"
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            :placeholder="t('proposeEvent.form.url.placeholder')"
          >
        </div>

        <!-- Description -->
        <div>
          <label for="description" class="block text-sm font-medium text-light/80 mb-2">
            {{ t('proposeEvent.form.description.label') }}
          </label>
          <textarea
            id="description"
            v-model="formData.description"
            rows="4"
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            :placeholder="t('proposeEvent.form.description.placeholder')"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-light/80 mb-2">
            {{ t('proposeEvent.form.email.label') }} <span class="text-primary">*</span>
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            :placeholder="t('proposeEvent.form.email.placeholder')"
          >
        </div>

        <!-- Submit Button -->
        <div class="pt-6">
          <PrimaryButton
            type="submit"
            size="lg"
            class="w-full"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">{{ t('proposeEvent.form.submitting') }}</span>
            <span v-else>{{ t('proposeEvent.form.submit') }}</span>
          </PrimaryButton>
        </div>

        <p class="text-sm text-light/50 text-center">
          * {{ t('proposeEvent.form.required') }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventSide, EventType } from '~/types/event'

const { t } = useI18n()

interface FormData {
  title: string
  type: EventType | ''
  date: string
  time: string
  city: string
  side: EventSide | ''
  venue: string
  url: string
  description: string
  email: string
}

const formData = ref<FormData>({
  title: '',
  type: '',
  date: '',
  time: '',
  city: '',
  side: '',
  venue: '',
  url: '',
  description: '',
  email: ''
})

const showSuccess = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    await $fetch('/api/events/submit', {
      method: 'POST',
      body: formData.value
    })

    // Show success message
    showSuccess.value = true

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error: any) {
    console.error('Erreur lors de la soumission:', error)
    errorMessage.value = error.data?.statusMessage || t('proposeEvent.error.defaultMessage')

    // Scroll to top to show error
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  formData.value = {
    title: '',
    type: '',
    date: '',
    time: '',
    city: '',
    side: '',
    venue: '',
    url: '',
    description: '',
    email: ''
  }
  showSuccess.value = false
  errorMessage.value = ''
}

useHead({
  title: t('proposeEvent.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('proposeEvent.meta.description')
    }
  ]
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
