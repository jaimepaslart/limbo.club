<template>
  <header class="fixed top-0 left-0 right-0 z-50 header-bg backdrop-blur-md">
    <nav class="container mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-24">
        <!-- Logo -->
        <NuxtLink to="/" class="group">
          <Logo size="sm" class="transition-colors group-hover:text-primary" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="text-light/60 hover:text-light transition-colors text-sm uppercase tracking-wider font-medium"
            active-class="text-light"
          >
            {{ item.label }}
          </NuxtLink>
          <LanguageSwitcher />
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-light/60 hover:text-light transition-colors"
            aria-label="Toggle menu"
          >
            <span class="text-sm uppercase tracking-wider">{{ mobileMenuOpen ? 'Fermer' : 'Menu' }}</span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide-fade">
        <div
          v-if="mobileMenuOpen"
          class="md:hidden py-8 border-t border-white/5"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="block py-4 text-light/60 hover:text-light transition-colors text-lg uppercase tracking-wider font-medium"
            active-class="text-light"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="pt-4 mt-4 border-t border-white/5">
            <LanguageSwitcher />
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()
const mobileMenuOpen = ref(false)

const navItems = computed(() => [
  { label: t('common.nav.agenda'), to: '/agenda' },
  { label: t('common.nav.quiz'), to: '/quiz' },
  { label: t('common.nav.proposeEvent'), to: '/proposer-un-evenement' },
  { label: t('common.nav.about'), to: '/a-propos' },
])
</script>

<style scoped>
.header-bg {
  background-color: rgba(0, 0, 0, 0.9);
  transition: background-color 0.3s ease;
}

:global(.light-mode) .header-bg {
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
