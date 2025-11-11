<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :decoding="decoding"
    :class="imageClass"
    :style="imageStyle"
    @load="onLoad"
    @error="onError"
  />
</template>

<script setup lang="ts">
/**
 * Optimized Image Component
 * - Native lazy loading
 * - Async decoding for better performance
 * - Optional blur-up effect
 * - Responsive sizing
 */

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  blurUp?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}

const props = withDefaults(defineProps<Props>(), {
  loading: 'lazy',
  decoding: 'async',
  blurUp: false,
  objectFit: 'cover'
})

const emit = defineEmits<{
  load: []
  error: []
}>()

const isLoaded = ref(false)

const imageClass = computed(() => ({
  'image-loading': !isLoaded.value && props.blurUp,
  'image-loaded': isLoaded.value && props.blurUp,
  'will-change-auto': true
}))

const imageStyle = computed(() => ({
  objectFit: props.objectFit,
  ...(props.width && { width: `${props.width}px` }),
  ...(props.height && { height: `${props.height}px` })
}))

const onLoad = () => {
  isLoaded.value = true
  emit('load')
}

const onError = () => {
  emit('error')
}
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
  /* GPU acceleration */
  transform: translateZ(0);
  backface-visibility: hidden;
}

.image-loading {
  filter: blur(10px);
  transition: filter 0.3s ease;
}

.image-loaded {
  filter: blur(0);
}

.will-change-auto {
  will-change: auto;
}

/* Prevent layout shift */
img[width][height] {
  aspect-ratio: attr(width) / attr(height);
}
</style>
