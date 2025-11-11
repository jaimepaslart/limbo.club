<template>
  <div class="min-h-screen py-32">
    <div class="container mx-auto px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        <p class="text-sm uppercase tracking-[0.3em] text-light/40 mb-12 bauhaus-accent">{{ t('contact.section') }}</p>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-light mb-16 leading-tight bauhaus-title">
          {{ t('contact.title') }}
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p class="text-xl text-light/60 leading-relaxed mb-8 font-light">
              {{ t('contact.description') }}
            </p>

            <div class="space-y-6">
              <div>
                <h3 class="text-sm uppercase tracking-wider text-primary mb-2">Email</h3>
                <a href="mailto:contact@limbo.club" class="text-light/80 hover:text-primary transition-colors text-lg">
                  contact@limbo.club
                </a>
              </div>

              <div>
                <h3 class="text-sm uppercase tracking-wider text-primary mb-2">{{ t('contact.social') }}</h3>
                <div class="flex gap-4">
                  <a href="#" class="text-light/80 hover:text-primary transition-colors text-lg">
                    Instagram
                  </a>
                  <a href="#" class="text-light/80 hover:text-primary transition-colors text-lg">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bauhaus-box">
            <!-- Success Message -->
            <div v-if="success" class="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded text-green-400">
              {{ t('contact.form.success') }}
            </div>

            <!-- Error Message -->
            <div v-if="error" class="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400">
              {{ error }}
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm uppercase tracking-wider text-light/60 mb-2">
                  {{ t('contact.form.name') }}
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  id="name"
                  required
                  :disabled="loading"
                  class="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  :placeholder="t('contact.form.namePlaceholder')"
                />
              </div>

              <div>
                <label for="email" class="block text-sm uppercase tracking-wider text-light/60 mb-2">
                  Email
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                  required
                  :disabled="loading"
                  class="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  :placeholder="t('contact.form.emailPlaceholder')"
                />
              </div>

              <div>
                <label for="message" class="block text-sm uppercase tracking-wider text-light/60 mb-2">
                  {{ t('contact.form.message') }}
                </label>
                <textarea
                  v-model="formData.message"
                  id="message"
                  rows="5"
                  required
                  :disabled="loading"
                  class="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                  :placeholder="t('contact.form.messagePlaceholder')"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="w-full bg-primary hover:bg-primary/90 text-light font-medium py-3 px-6 rounded uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ loading ? t('contact.form.sending') : t('contact.form.send') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Form state
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

// Submit handler
const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''
    success.value = false

    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value
    })

    success.value = true
    // Reset form
    formData.value = {
      name: '',
      email: '',
      message: ''
    }

    // Hide success message after 5 seconds
    setTimeout(() => {
      success.value = false
    }, 5000)
  } catch (err: any) {
    error.value = err.data?.statusMessage || 'Une erreur est survenue'
  } finally {
    loading.value = false
  }
}

useHead({
  title: t('contact.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('contact.meta.description')
    }
  ]
})
</script>
