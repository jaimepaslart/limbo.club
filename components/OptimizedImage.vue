<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :format="format"
    :quality="quality"
    :sizes="sizes"
    :class="imageClass"
    :style="imageStyle"
    @load="onLoad"
    @error="onError"
  />
</template>

<script setup lang="ts">
/**
 * Optimized Image Component with @nuxt/image
 * - Automatic WebP/AVIF conversion
 * - Responsive sizes
 * - Lazy loading native
 * - Optimized quality
 */

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  quality?: number
  sizes?: string
  blurUp?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}

const props = withDefaults(defineProps<Props>(), {
  loading: 'lazy',
  quality: 80,
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
  objectFit: props.objectFit
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
:deep(img) {
  display: block;
  max-width: 100%;
  height: auto;
  /* GPU acceleration */
  transform: translateZ(0);
  backface-visibility: hidden;
}

.image-loading :deep(img) {
  filter: blur(10px);
  transition: filter 0.3s ease;
}

.image-loaded :deep(img) {
  filter: blur(0);
}

.will-change-auto {
  will-change: auto;
}
</style>
