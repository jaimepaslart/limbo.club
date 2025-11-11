<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 text-light/60 hover:text-light transition-colors text-sm uppercase tracking-wider font-medium"
      aria-label="Change language"
    >
      <span>{{ currentLocale.code.toUpperCase() }}</span>
      <svg
        class="w-4 h-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="absolute right-0 top-full mt-2 py-2 min-w-[120px] bg-dark-light border border-white/10 rounded-lg shadow-xl"
      >
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="switchLanguage(locale.code)"
          class="w-full px-4 py-2 text-left text-sm text-light/60 hover:text-light hover:bg-white/5 transition-colors uppercase tracking-wider"
          :class="{ 'text-primary': currentLocale.code === locale.code }"
        >
          {{ locale.name }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const isMounted = ref(false)

const currentLocale = computed(() => {
  return locales.value.find(l => l.code === locale.value) || locales.value[0]
})

const availableLocales = computed(() => {
  return locales.value
})

const toggleDropdown = () => {
  if (!isMounted.value) return

  isOpen.value = !isOpen.value

  // Si on ouvre le dropdown, ajouter le listener après le prochain tick
  if (isOpen.value && process.client) {
    nextTick(() => {
      document.addEventListener('click', handleClickOutside, { once: false })
    })
  }
}

const switchLanguage = async (code: string) => {
  if (process.client) {
    document.removeEventListener('click', handleClickOutside)
  }
  await navigateTo(switchLocalePath(code))
  isOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
    if (process.client) {
      document.removeEventListener('click', handleClickOutside)
    }
  }
}

onMounted(() => {
  isMounted.value = true
})

onBeforeUnmount(() => {
  if (process.client) {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
