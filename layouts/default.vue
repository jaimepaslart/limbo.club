<template>
  <div class="min-h-screen flex flex-col limbo-flames-bg relative">
    <!-- Fond de flammes abstraites -->
    <div class="limbo-flames-overlay"></div>

    <!-- Formes Bauhaus -->
    <BauhausShapes />

    <AppHeader />
    <main class="flex-1 pt-20 relative z-10">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.limbo-flames-bg {
  position: relative;
  overflow-x: hidden;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.limbo-flames-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(192, 38, 211, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 60%);
  background-size: 200% 200%, 200% 200%, 150% 150%;
  filter: blur(80px);
  animation: limbo-flames 20s ease-in-out infinite;
  transition: opacity 0.3s ease, background 0.3s ease;
}
</style>
