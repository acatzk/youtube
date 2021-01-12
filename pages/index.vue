<template>
  <div class="flex min-h-screen h-full">
    <div class="w-56 flex-none border-r bg-gray-200">
      <TheSideBar />
    </div>
    <div class="flex-1 w-full">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae excepturi nisi dolorum illum sunt, maiores animi debitis nobis quia officia vitae, provident reprehenderit, corrupti fugiat!
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Youtube'
      }
    },
    components: {
      TheSideBar: () => import('@/components/TheSideBar')
    }
  }
</script>