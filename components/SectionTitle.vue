<template>
  <div :class="containerClasses">
    <h2 :class="titleClasses" class="flame-underline relative inline-block">
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

<style scoped>
.flame-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(168, 85, 247, 0.8) 20%,
    rgba(192, 38, 211, 0.9) 50%,
    rgba(168, 85, 247, 0.8) 80%,
    transparent 100%);
  filter: blur(2px);
  animation: flame-pulse 3s ease-in-out infinite;
  transform-origin: center;
}
</style>
