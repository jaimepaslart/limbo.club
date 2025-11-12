<template>
  <header class="fixed top-0 left-0 right-0 header-bg backdrop-blur-md" style="z-index: 200;">
    <nav class="container mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-24">
        <!-- Logo -->
        <NuxtLink to="/" class="group">
          <Logo size="md" class="transition-colors group-hover:text-primary" />
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

        <!-- Mobile Menu Button (Burger) -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = true"
            class="burger-btn"
            aria-label="Ouvrir le menu"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-drawer"
          >
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Drawer -->
    <MobileNavDrawer
      :is-open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    />
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

/* Force pointer events on interactive elements */
:deep(button),
:deep(a),
:deep(input),
:deep(select),
:deep(textarea) {
  pointer-events: auto !important;
  position: relative;
  z-index: 1;
}

/* Bouton burger pour menu mobile */
.burger-btn {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.burger-btn:hover {
  opacity: 0.7;
}

.burger-line {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-text-muted);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.burger-btn:hover .burger-line {
  background-color: var(--color-text);
}
</style>
