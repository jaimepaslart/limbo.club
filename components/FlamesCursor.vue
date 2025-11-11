<template>
  <div class="pop-cursor-container">
    <!-- Curseur principal -->
    <div
      class="cursor-dot"
      :style="{
        left: `${cursorX}px`,
        top: `${cursorY}px`
      }"
    />

    <!-- Curseur extérieur avec délai -->
    <div
      class="cursor-outline"
      :style="{
        left: `${outlineX}px`,
        top: `${outlineY}px`
      }"
    />

    <!-- Trail de points colorés -->
    <div
      v-for="(trail, index) in trails"
      :key="index"
      class="cursor-trail"
      :style="{
        left: `${trail.x}px`,
        top: `${trail.y}px`,
        opacity: trail.opacity,
        background: trail.color
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Trail {
  x: number
  y: number
  opacity: number
  color: string
}

const cursorX = ref(0)
const cursorY = ref(0)
const outlineX = ref(0)
const outlineY = ref(0)
const trails = ref<Trail[]>([])
const maxTrails = 8

const colors = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
]

let animationFrame: number
let lastTrailTime = 0

const handleMouseMove = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY

  // Smooth outline follow with delay
  const ease = 0.15
  outlineX.value += (e.clientX - outlineX.value) * ease
  outlineY.value += (e.clientY - outlineY.value) * ease

  // Add trail
  const now = Date.now()
  if (now - lastTrailTime > 30) {
    if (trails.value.length >= maxTrails) {
      trails.value.shift()
    }
    trails.value.push({
      x: e.clientX,
      y: e.clientY,
      opacity: 0.8,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
    lastTrailTime = now
  }
}

const animate = () => {
  // Fade out trails
  trails.value = trails.value
    .map(trail => ({
      ...trail,
      opacity: trail.opacity * 0.92
    }))
    .filter(trail => trail.opacity > 0.05)

  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  animationFrame = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.pop-cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}

/* Curseur principal - petit point */
.cursor-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: transform 0.1s ease;
  will-change: transform;
}

/* Curseur extérieur - cercle qui suit avec délai */
.cursor-outline {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 0.2s ease, height 0.2s ease;
  will-change: transform;
}

/* Trail coloré */
.cursor-trail {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  will-change: opacity;
  transition: opacity 0.3s ease;
  box-shadow: 0 0 20px currentColor;
}

/* Hover states */
.pop-cursor-container:has(~ :hover) .cursor-dot {
  transform: translate(-50%, -50%) scale(1.5);
}

.pop-cursor-container:has(~ :hover) .cursor-outline {
  width: 60px;
  height: 60px;
}

/* Désactiver pour ceux qui préfèrent moins de mouvement */
@media (prefers-reduced-motion: reduce) {
  .cursor-trail {
    display: none;
  }

  .cursor-outline {
    transition: none;
  }
}
</style>
