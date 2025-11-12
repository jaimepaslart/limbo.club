<template>
  <!--
    Menu mobile de type drawer (rideau latéral)
    - S'ouvre depuis la droite
    - Overlay assombri avec fermeture au clic
    - Fermeture avec Esc
    - Bloque le scroll du body quand ouvert
  -->
  <Teleport to="body">
    <Transition name="drawer">
      <div
        v-if="isOpen"
        class="mobile-drawer-container"
        role="dialog"
        aria-modal="true"
        :aria-label="t('common.nav.mobileMenu')"
      >
        <!-- Overlay : fond assombri -->
        <div
          class="drawer-overlay"
          @click="close"
          aria-hidden="true"
        />

        <!-- Panneau drawer : contenu du menu -->
        <div
          ref="drawerPanel"
          class="drawer-panel"
          @click.stop
        >
          <!-- Header du drawer avec bouton fermer -->
          <div class="drawer-header">
            <NuxtLink
              to="/"
              @click="close"
              class="drawer-logo"
            >
              <Logo size="sm" />
            </NuxtLink>

            <button
              @click="close"
              class="drawer-close-btn"
              :aria-label="t('common.actions.close')"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <!-- Navigation principale -->
          <nav class="drawer-nav">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="drawer-nav-item"
              active-class="drawer-nav-item-active"
              @click="close"
            >
              {{ item.label }}
            </NuxtLink>

            <!-- Language switcher dans la navigation -->
            <div class="drawer-language-section">
              <div class="drawer-divider" />
              <p class="drawer-language-label">{{ t('common.nav.language') }}</p>
              <LanguageSwitcher />
            </div>
          </nav>

          <!-- Spacer pour pousser le contenu vers le haut -->
          <div class="drawer-spacer"></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()
const drawerPanel = ref<HTMLElement | null>(null)

// Items de navigation (identiques à AppHeader)
const navItems = computed(() => [
  { label: t('common.nav.agenda'), to: '/agenda' },
  { label: t('common.nav.quiz'), to: '/quiz' },
  { label: t('common.nav.proposeEvent'), to: '/proposer-un-evenement' },
  { label: t('common.nav.about'), to: '/a-propos' },
])

/**
 * Ferme le drawer en émettant l'événement close
 */
const close = () => {
  emit('close')
}

/**
 * Gère la fermeture au clavier (touche Escape)
 */
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    close()
  }
}

/**
 * Bloque/débloque le scroll du body selon l'état ouvert/fermé
 * Évite que l'utilisateur ne scrolle la page derrière le menu
 */
watch(() => props.isOpen, (isOpen) => {
  if (typeof window === 'undefined') return

  if (isOpen) {
    // Bloque le scroll
    document.body.style.overflow = 'hidden'
    // Focus sur le panneau pour l'accessibilité
    nextTick(() => {
      drawerPanel.value?.focus()
    })
  } else {
    // Rétablit le scroll
    document.body.style.overflow = ''
  }
})

// Ajout du listener clavier au montage du composant
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

// Nettoyage du listener au démontage
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  // S'assure que le scroll est rétabli
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Container principal : overlay + panneau */
.mobile-drawer-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

/* Overlay assombri */
.drawer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  cursor: pointer;
}

/* Panneau drawer : menu latéral */
.drawer-panel {
  position: relative;
  width: 85%;
  max-width: 400px;
  height: 100%;
  background-color: var(--color-bg);
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  outline: none;
}

/* Header du drawer */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
}

.drawer-logo {
  transition: opacity 0.2s;
}

.drawer-logo:hover {
  opacity: 0.7;
}

.drawer-close-btn {
  color: var(--color-text-muted);
  padding: 0.5rem;
  transition: color 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drawer-close-btn:hover {
  color: var(--color-text);
}

/* Navigation */
.drawer-nav {
  flex-shrink: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.drawer-nav-item {
  display: block;
  padding: 1rem;
  color: var(--color-text-muted);
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.2s;
  border-radius: 8px;
}

.drawer-nav-item:hover {
  color: var(--color-text);
  background-color: rgba(168, 85, 247, 0.1);
  transform: translateX(4px);
}

.drawer-nav-item-active {
  color: var(--color-primary);
  background-color: rgba(168, 85, 247, 0.15);
}

/* Section langue dans la navigation */
.drawer-language-section {
  margin-top: 1rem;
  padding-top: 0;
}

.drawer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 1.5rem;
}

.drawer-language-label {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  margin-bottom: 1rem;
  padding-left: 0.25rem;
}

/* Spacer pour remplir l'espace restant */
.drawer-spacer {
  flex: 1;
}

/* Transitions d'apparition/disparition du drawer */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active .drawer-panel,
.drawer-leave-active .drawer-panel {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .drawer-panel,
.drawer-leave-to .drawer-panel {
  transform: translateX(100%);
}

/* Responsive : sur desktop, cache le drawer (fallback) */
@media (min-width: 768px) {
  .mobile-drawer-container {
    display: none;
  }
}
</style>
