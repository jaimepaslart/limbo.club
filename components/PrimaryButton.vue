<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    class="flame-button"
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
  const base = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden'

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

<style scoped>
.flame-button {
  position: relative;
}

.flame-button::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(135deg,
    rgba(168, 85, 247, 0.6) 0%,
    rgba(192, 38, 211, 0.5) 50%,
    rgba(168, 85, 247, 0.6) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.flame-button:hover::before {
  opacity: 0.8;
  animation: flame-glow 2s ease-in-out infinite;
}

.flame-button:hover {
  animation: ember-rise 2s ease-in-out infinite;
}

.flame-button:active {
  transform: scale(0.98);
}
</style>
