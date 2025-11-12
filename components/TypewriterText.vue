<template>
  <span class="typewriter-text">
    {{ displayedText }}<span v-if="showCursor" class="typewriter-cursor">|</span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  text: string
  speed?: number // ms par caractère
  startDelay?: number // délai avant de démarrer
  showCursor?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  speed: 80,
  startDelay: 300,
  showCursor: true
})

const displayedText = ref('')
const currentIndex = ref(0)
let timeoutId: ReturnType<typeof setTimeout> | null = null

const typeNextCharacter = () => {
  if (currentIndex.value < props.text.length) {
    displayedText.value = props.text.slice(0, currentIndex.value + 1)
    currentIndex.value++
    timeoutId = setTimeout(typeNextCharacter, props.speed)
  }
}

onMounted(() => {
  // Démarrer l'animation après le délai
  timeoutId = setTimeout(() => {
    typeNextCharacter()
  }, props.startDelay)
})

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<style scoped>
.typewriter-text {
  display: inline-block;
}

.typewriter-cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
  opacity: 1;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
