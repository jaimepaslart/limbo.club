<template>
  <div style="display: none;" aria-hidden="true">
    <!-- Prefetch critical routes on idle -->
  </div>
</template>

<script setup lang="ts">
/**
 * PrefetchLinks Component
 * Prefetches critical routes when browser is idle
 * Improves navigation performance for frequently visited pages
 */

const routes = [
  '/agenda',
  '/quiz',
  '/a-propos',
  '/proposer-un-evenement'
]

const prefetchRoute = (path: string) => {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = path
  link.as = 'document'
  document.head.appendChild(link)
}

onMounted(() => {
  // Only prefetch on good connections
  if (!('connection' in navigator)) {
    return
  }

  const connection = (navigator as any).connection
  const isSlowConnection = connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g'
  const saveData = connection?.saveData

  // Don't prefetch on slow connections or data saver mode
  if (isSlowConnection || saveData) {
    return
  }

  // Prefetch routes when browser is idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      routes.forEach((route) => {
        prefetchRoute(route)
      })
    }, { timeout: 2000 })
  } else {
    // Fallback: prefetch after 2 seconds
    setTimeout(() => {
      routes.forEach((route) => {
        prefetchRoute(route)
      })
    }, 2000)
  }
})
</script>
