<template>
  <span :class="pillClasses">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  label: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'secondary'
})

const pillClasses = computed(() => {
  const base = 'inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide'

  if (props.variant === 'primary') {
    return `${base} bg-primary/20 text-primary border border-primary/30`
  }

  return `${base} bg-white/5 text-light/70 border border-white/10`
})
</script>
