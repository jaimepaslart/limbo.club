<template>
  <img
    src="/images/logo-limbo.svg"
    alt="Limbo"
    :class="classes"
  >
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'light' | 'primary'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'light'
})

const classes = computed(() => {
  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16'
  }

  const colors = {
    light: 'text-light',
    primary: 'text-primary'
  }

  return `${sizes[props.size]} w-auto ${colors[props.color]}`
})
</script>
