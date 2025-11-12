<template>
  <span class="typewriter-text">{{ displayedText }}<span v-if="showCursor" class="cursor">|</span></span>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  text: string
  minDelay?: number      // Délai minimum entre chaque caractère (ms)
  maxDelay?: number      // Délai maximum entre chaque caractère (ms)
  pauseDelay?: number    // Pause après chaque mot/séparateur (ms)
  endPause?: number      // Pause à la fin avant de boucler (ms)
  loop?: boolean         // Active la boucle d'animation
  eraseSpeed?: number    // Vitesse d'effacement (ms par caractère)
  showCursor?: boolean   // Affiche le curseur clignotant
}

const props = withDefaults(defineProps<Props>(), {
  minDelay: 40,
  maxDelay: 120,
  pauseDelay: 300,
  endPause: 2000,
  loop: true,
  eraseSpeed: 30,
  showCursor: true
})

const displayedText = ref('')
const showCursor = ref(true)
let timeoutId: NodeJS.Timeout | null = null
let cursorIntervalId: NodeJS.Timeout | null = null

/**
 * Génère un délai aléatoire entre minDelay et maxDelay
 * pour simuler une frappe humaine
 */
const getRandomDelay = (): number => {
  return Math.floor(Math.random() * (props.maxDelay - props.minDelay + 1)) + props.minDelay
}

/**
 * Vérifie si un caractère nécessite une pause
 * (espaces, séparateurs comme ·, ponctuation)
 */
const needsPause = (char: string): boolean => {
  return /[\s·,;.!?]/.test(char)
}

/**
 * Animation d'écriture lettre par lettre
 */
const typeText = async (): Promise<void> => {
  const fullText = props.text
  let currentIndex = 0

  const writeNextChar = () => {
    if (currentIndex < fullText.length) {
      // Ajoute le caractère suivant
      displayedText.value += fullText[currentIndex]
      const currentChar = fullText[currentIndex]
      currentIndex++

      // Détermine le délai : pause plus longue si c'est un séparateur/espace
      const delay = needsPause(currentChar)
        ? props.pauseDelay
        : getRandomDelay()

      // Programme le prochain caractère
      timeoutId = setTimeout(writeNextChar, delay)
    } else {
      // Fin de l'écriture
      if (props.loop) {
        // Pause à la fin, puis efface et recommence
        timeoutId = setTimeout(eraseText, props.endPause)
      }
    }
  }

  writeNextChar()
}

/**
 * Animation d'effacement pour la boucle
 */
const eraseText = (): void => {
  const eraseNextChar = () => {
    if (displayedText.value.length > 0) {
      // Retire le dernier caractère
      displayedText.value = displayedText.value.slice(0, -1)
      timeoutId = setTimeout(eraseNextChar, props.eraseSpeed)
    } else {
      // Redémarre l'écriture après l'effacement
      timeoutId = setTimeout(typeText, 500)
    }
  }

  eraseNextChar()
}

/**
 * Animation du curseur clignotant
 */
const startCursorBlink = (): void => {
  if (props.showCursor) {
    cursorIntervalId = setInterval(() => {
      showCursor.value = !showCursor.value
    }, 530) // Clignote toutes les 530ms
  }
}

/**
 * Initialisation côté client uniquement (SSR-friendly)
 */
onMounted(() => {
  startCursorBlink()
  typeText()
})

/**
 * Nettoyage des timers à la destruction du composant
 */
onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  if (cursorIntervalId) {
    clearInterval(cursorIntervalId)
  }
})
</script>

<style scoped>
.typewriter-text {
  display: inline-block;
}

.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>
