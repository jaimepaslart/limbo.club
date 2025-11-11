<template>
  <div class="flames-cursor-container">
    <!-- Curseur principal en forme de flamme -->
    <div
      class="main-flame-cursor"
      :style="{
        left: `${cursorX}px`,
        top: `${cursorY}px`
      }"
    >
      <div class="flame-shape flame-inner"></div>
      <div class="flame-shape flame-middle"></div>
      <div class="flame-shape flame-outer"></div>
    </div>

    <!-- Particules de flammes -->
    <div
      v-for="(particle, index) in particles"
      :key="index"
      class="flame-particle"
      :class="`flame-color-${particle.color}`"
      :style="{
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        opacity: particle.opacity,
        transform: `scale(${particle.scale}) rotate(${particle.rotation}deg)`,
        animationDelay: `${particle.delay}ms`
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Particle {
  x: number
  y: number
  opacity: number
  scale: number
  delay: number
  color: number
  rotation: number
  velocityX: number
  velocityY: number
}

const particles = ref<Particle[]>([])
const maxParticles = 40
const cursorX = ref(0)
const cursorY = ref(0)
let mouseX = 0
let mouseY = 0
let animationFrame: number

const createParticle = (x: number, y: number): Particle => {
  return {
    x: x + (Math.random() - 0.5) * 20,
    y: y + (Math.random() - 0.5) * 20,
    opacity: 0.9,
    scale: Math.random() * 1.2 + 0.8,
    delay: Math.random() * 100,
    color: Math.floor(Math.random() * 3),
    rotation: Math.random() * 360,
    velocityX: (Math.random() - 0.5) * 2,
    velocityY: -Math.random() * 3 - 1
  }
}

const updateParticles = () => {
  particles.value = particles.value.map(particle => ({
    ...particle,
    opacity: particle.opacity * 0.93,
    y: particle.y + particle.velocityY,
    x: particle.x + particle.velocityX,
    scale: particle.scale * 0.96,
    rotation: particle.rotation + 2,
    velocityY: particle.velocityY - 0.1
  })).filter(particle => particle.opacity > 0.01)
}

const addParticle = () => {
  if (particles.value.length < maxParticles) {
    particles.value.push(createParticle(mouseX, mouseY))
  }
}

const handleMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX
  mouseY = e.clientY
  cursorX.value = e.clientX
  cursorY.value = e.clientY

  // Ajouter plus de particules pour un effet plus dense
  if (Math.random() > 0.3) {
    addParticle()
  }
}

const animate = () => {
  updateParticles()
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  animate()
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.flames-cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

/* Curseur principal en forme de flamme */
.main-flame-cursor {
  position: absolute;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: cursor-pulse 1s ease-in-out infinite;
}

.flame-shape {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: flame-dance 0.3s ease-in-out infinite alternate;
}

.flame-inner {
  width: 20px;
  height: 30px;
  background: linear-gradient(to top,
    #ffff00 0%,
    #ffd700 30%,
    #ffa500 60%,
    rgba(255, 140, 0, 0.9) 100%);
  filter: blur(2px);
  box-shadow: 0 0 20px #ffaa00, 0 0 30px #ff6600;
  z-index: 3;
}

.flame-middle {
  width: 30px;
  height: 40px;
  background: linear-gradient(to top,
    #ffa500 0%,
    #ff8c00 40%,
    #ff6347 70%,
    rgba(220, 20, 60, 0.7) 100%);
  filter: blur(3px);
  z-index: 2;
  animation-delay: 0.1s;
}

.flame-outer {
  width: 40px;
  height: 50px;
  background: linear-gradient(to top,
    rgba(255, 107, 0, 0.6) 0%,
    rgba(220, 20, 60, 0.5) 50%,
    rgba(139, 0, 0, 0.3) 100%);
  filter: blur(5px);
  z-index: 1;
  animation-delay: 0.2s;
}

@keyframes flame-dance {
  0% {
    transform: translateX(-50%) scaleY(1) scaleX(1);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  }
  100% {
    transform: translateX(-50%) scaleY(1.1) scaleX(0.95);
    border-radius: 45% 55% 50% 50% / 55% 65% 35% 45%;
  }
}

@keyframes cursor-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
  }
}

/* Particules de flammes avec formes organiques */
.flame-particle {
  position: absolute;
  width: 18px;
  height: 25px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: flame-rise 0.5s ease-in-out infinite alternate;
  transform-origin: center bottom;
  will-change: transform, opacity;
  filter: blur(2px);
}

.flame-color-0 {
  background: radial-gradient(ellipse at center bottom,
    #ffff00 0%,
    #ffd700 30%,
    #ffa500 60%,
    rgba(255, 140, 0, 0.5) 80%,
    transparent 100%);
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.9), 0 0 25px rgba(255, 165, 0, 0.5);
}

.flame-color-1 {
  background: radial-gradient(ellipse at center bottom,
    #ffa500 0%,
    #ff8c00 30%,
    #ff6347 60%,
    rgba(220, 20, 60, 0.5) 80%,
    transparent 100%);
  box-shadow: 0 0 15px rgba(255, 140, 0, 0.9), 0 0 25px rgba(255, 69, 0, 0.5);
}

.flame-color-2 {
  background: radial-gradient(ellipse at center bottom,
    #ff6b00 0%,
    #ff4500 30%,
    #dc143c 60%,
    rgba(139, 0, 0, 0.5) 80%,
    transparent 100%);
  box-shadow: 0 0 15px rgba(255, 69, 0, 0.9), 0 0 25px rgba(220, 20, 60, 0.5);
}

@keyframes flame-rise {
  0% {
    filter: blur(1px) brightness(1.2);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  }
  50% {
    border-radius: 45% 55% 50% 50% / 55% 65% 35% 45%;
  }
  100% {
    filter: blur(3px) brightness(1);
    border-radius: 55% 45% 50% 50% / 65% 55% 45% 35%;
  }
}

/* Désactiver pour ceux qui préfèrent moins de mouvement */
@media (prefers-reduced-motion: reduce) {
  .flame-particle,
  .main-flame-cursor {
    display: none;
  }
}
</style>
