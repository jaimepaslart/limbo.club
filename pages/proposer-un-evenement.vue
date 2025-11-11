<template>
  <div class="py-12 md:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <SectionTitle
        align="center"
        subtitle="Partagez votre événement avec la communauté Limbo"
      >
        Proposer un événement
      </SectionTitle>

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
            Merci pour votre proposition !
          </h3>
          <p class="text-light/70 mb-6">
            Nous avons bien reçu votre événement. Notre équipe va l'examiner et le publier prochainement.
          </p>
          <PrimaryButton variant="outline" @click="resetForm">
            Proposer un autre événement
          </PrimaryButton>
        </div>
      </Transition>

      <!-- Form -->
      <form v-if="!showSuccess" class="mt-12 space-y-6" @submit.prevent="handleSubmit">
        <!-- Event Name -->
        <div>
          <label for="title" class="block text-sm font-medium text-light/80 mb-2">
            Nom de l'événement <span class="text-primary">*</span>
          </label>
          <input
            id="title"
            v-model="formData.title"
            type="text"
            required
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Ex: Concert de jazz au Kursaal"
          >
        </div>

        <!-- Event Type -->
        <div>
          <label for="type" class="block text-sm font-medium text-light/80 mb-2">
            Type d'événement <span class="text-primary">*</span>
          </label>
          <select
            id="type"
            v-model="formData.type"
            required
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Sélectionnez un type</option>
            <option value="concert">Concert</option>
            <option value="expo">Exposition</option>
            <option value="festival">Festival</option>
            <option value="cinema">Cinéma</option>
            <option value="atelier">Atelier</option>
            <option value="theatre">Théâtre</option>
            <option value="danse">Danse</option>
            <option value="conference">Conférence</option>
          </select>
        </div>

        <!-- Date & Time -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="date" class="block text-sm font-medium text-light/80 mb-2">
              Date <span class="text-primary">*</span>
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
              Heure
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
              Ville <span class="text-primary">*</span>
            </label>
            <input
              id="city"
              v-model="formData.city"
              type="text"
              required
              class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Ex: Biarritz"
            >
          </div>
          <div>
            <label for="side" class="block text-sm font-medium text-light/80 mb-2">
              Côté <span class="text-primary">*</span>
            </label>
            <select
              id="side"
              v-model="formData.side"
              required
              class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Sélectionnez</option>
              <option value="nord">Pays Basque Nord</option>
              <option value="sud">Pays Basque Sud</option>
            </select>
          </div>
        </div>

        <!-- Venue -->
        <div>
          <label for="venue" class="block text-sm font-medium text-light/80 mb-2">
            Lieu (nom du lieu) <span class="text-primary">*</span>
          </label>
          <input
            id="venue"
            v-model="formData.venue"
            type="text"
            required
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Ex: Atabal, Victoria Eugenia, Musée Basque..."
          >
        </div>

        <!-- URL -->
        <div>
          <label for="url" class="block text-sm font-medium text-light/80 mb-2">
            Site web / Instagram
          </label>
          <input
            id="url"
            v-model="formData.url"
            type="url"
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="https://..."
          >
        </div>

        <!-- Description -->
        <div>
          <label for="description" class="block text-sm font-medium text-light/80 mb-2">
            Description courte
          </label>
          <textarea
            id="description"
            v-model="formData.description"
            rows="4"
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="Décrivez brièvement votre événement..."
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-light/80 mb-2">
            Email de contact <span class="text-primary">*</span>
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full bg-dark-light border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="votre@email.com"
          >
        </div>

        <!-- Submit Button -->
        <div class="pt-6">
          <PrimaryButton
            type="submit"
            size="lg"
            class="w-full"
          >
            Envoyer ma proposition
          </PrimaryButton>
        </div>

        <p class="text-sm text-light/50 text-center">
          * Champs obligatoires
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventSide, EventType } from '~/types/event'

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

const handleSubmit = () => {
  // TODO: Connect to API when backend is ready
  // For now, just log the data and show success message

  console.log('Event submission:', formData.value)

  // Show success message
  showSuccess.value = true

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // TODO: Send data to backend API
  // Example:
  // await $fetch('/api/events/submit', {
  //   method: 'POST',
  //   body: formData.value
  // })
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
}

useHead({
  title: 'Proposer un événement – Limbo',
  meta: [
    {
      name: 'description',
      content: 'Partagez votre événement culturel avec la communauté Limbo.'
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
