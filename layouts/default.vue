<template>
  <div class="font-sans bg-gray-100 antialiased min-h-screen h-full text-gray-900">
    <TheNavBar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    components: {
      TheNavBar: () => import('@/components/TheNavBar')
    }
  }
</script>