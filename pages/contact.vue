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
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-sm uppercase tracking-wider text-light/60 mb-2">
                  {{ t('contact.form.name') }}
                </label>
                <input
                  type="text"
                  id="name"
                  class="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                  :placeholder="t('contact.form.namePlaceholder')"
                />
              </div>

              <div>
                <label for="email" class="block text-sm uppercase tracking-wider text-light/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                  :placeholder="t('contact.form.emailPlaceholder')"
                />
              </div>

              <div>
                <label for="message" class="block text-sm uppercase tracking-wider text-light/60 mb-2">
                  {{ t('contact.form.message') }}
                </label>
                <textarea
                  id="message"
                  rows="5"
                  class="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors resize-none"
                  :placeholder="t('contact.form.messagePlaceholder')"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-primary hover:bg-primary/90 text-light font-medium py-3 px-6 rounded uppercase tracking-wider transition-colors"
              >
                {{ t('contact.form.send') }}
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
