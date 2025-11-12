<template>
  <LogoSvg :size="size" :color="color" />
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

const { size, color } = toRefs(props)
</script>
