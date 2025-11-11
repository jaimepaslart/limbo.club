<template>
  <div class="bauhaus-container">
    <!-- Cercles géométriques -->
    <div class="bauhaus-circle bauhaus-circle-1"></div>
    <div class="bauhaus-circle bauhaus-circle-2"></div>
    <div class="bauhaus-circle bauhaus-circle-3"></div>

    <!-- Rectangles -->
    <div class="bauhaus-rect bauhaus-rect-1"></div>
    <div class="bauhaus-rect bauhaus-rect-2"></div>

    <!-- Lignes diagonales -->
    <div class="bauhaus-line bauhaus-line-1"></div>
    <div class="bauhaus-line bauhaus-line-2"></div>

    <!-- Grille -->
    <div class="bauhaus-grid"></div>
  </div>
</template>

<style scoped>
.bauhaus-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none !important;
  z-index: 1;
  overflow: hidden;
}

/* Cercles géométriques */
.bauhaus-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.08;
  animation: float 20s ease-in-out infinite;
}

.bauhaus-circle-1 {
  width: 400px;
  height: 400px;
  top: 10%;
  right: 5%;
  border: 3px solid #a855f7;
  animation-delay: 0s;
}

.bauhaus-circle-2 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 10%;
  background: linear-gradient(135deg, #c026d3 0%, transparent 100%);
  animation-delay: -7s;
}

.bauhaus-circle-3 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 20%;
  border: 2px solid #f5576c;
  animation-delay: -14s;
}

/* Rectangles */
.bauhaus-rect {
  position: absolute;
  opacity: 0.06;
  animation: rotate-slow 30s linear infinite;
}

.bauhaus-rect-1 {
  width: 300px;
  height: 150px;
  top: 30%;
  left: 5%;
  background: linear-gradient(45deg, #667eea 0%, transparent 100%);
  transform: rotate(-15deg);
}

.bauhaus-rect-2 {
  width: 200px;
  height: 200px;
  bottom: 15%;
  right: 10%;
  border: 3px solid #43e97b;
  transform: rotate(25deg);
  animation-delay: -15s;
}

/* Lignes diagonales */
.bauhaus-line {
  position: absolute;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, #a855f7 50%, transparent 100%);
  opacity: 0.1;
  animation: slide-vertical 15s ease-in-out infinite;
}

.bauhaus-line-1 {
  left: 25%;
  transform: rotate(-10deg);
}

.bauhaus-line-2 {
  right: 30%;
  transform: rotate(10deg);
  animation-delay: -7.5s;
}

/* Grille subtile */
.bauhaus-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
  background-size: 100px 100px;
  opacity: 0.5;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}

@keyframes rotate-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slide-vertical {
  0%, 100% {
    transform: translateY(0) rotate(-10deg);
  }
  50% {
    transform: translateY(-50px) rotate(-10deg);
  }
}

/* Désactiver pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .bauhaus-circle,
  .bauhaus-rect,
  .bauhaus-line {
    animation: none !important;
  }
}
</style>
