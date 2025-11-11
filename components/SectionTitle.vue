<template>
  <div :class="containerClasses">
    <h2 :class="titleClasses">
      <slot />
    </h2>
    <p v-if="subtitle" class="mt-4 text-light/60 text-lg max-w-3xl">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  subtitle?: string
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left',
  size: 'md'
})

const containerClasses = computed(() => {
  return props.align === 'center' ? 'text-center' : 'text-left'
})

const titleClasses = computed(() => {
  const base = 'font-display font-bold text-light tracking-tight'

  const sizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl lg:text-5xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl'
  }

  return `${base} ${sizes[props.size]}`
})
</script>
