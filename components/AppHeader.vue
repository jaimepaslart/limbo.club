<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md">
    <nav class="container mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-24">
        <!-- Logo -->
        <NuxtLink to="/" class="group">
          <Logo size="sm" class="transition-colors group-hover:text-primary" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-12">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="text-light/60 hover:text-light transition-colors text-sm uppercase tracking-wider font-medium"
            active-class="text-light"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-light/60 hover:text-light transition-colors"
          aria-label="Toggle menu"
        >
          <span class="text-sm uppercase tracking-wider">{{ mobileMenuOpen ? 'Fermer' : 'Menu' }}</span>
        </button>
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
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Agenda', to: '/agenda' },
  { label: 'Quiz', to: '/quiz' },
  { label: 'Proposer un événement', to: '/proposer-un-evenement' },
  { label: 'À propos', to: '/a-propos' },
]
</script>

<style scoped>
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
