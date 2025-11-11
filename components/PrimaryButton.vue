<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false
})

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/20',
    secondary: 'bg-white/10 text-light hover:bg-white/20',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }

  return `${base} ${sizes[props.size]} ${variants[props.variant]}`
})
</script>
