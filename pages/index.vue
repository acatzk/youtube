<template>
  <div class="flex-1 flex">
    <TheSideBar />
    <div class="flex-1 overflow-y-auto bg-white">
      <div class="container mx-auto max-w-7xl py-6 px-6">

        <div class="font-semibold mb-5 text-gray-700">Recommended</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6 border-b">
          <div v-for="i in 18" :key="i">
            <PostCard />
          </div>
          <div class="py-4">
            <a href="#" class="uppercase text-sm font-medium text-gray-500 hover:text-gray-600">Show more</a>
          </div>
        </div>

        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center">
            <a href="#" class="flex-shrink-0">
              <img class="rounded-full object-cover border w-8 h-8" src="@/assets/images/avatar.jpg" alt="avatar">
            </a>
            <a class="ml-2 font-medium" href="#">Angryboy</a>
          </div>
          <a href="#">
            <div class="text-2xl font-light text-gray-600 hover:text-gray-800">&times;</div>
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6 border-b pb-6">
          <div v-for="i in 6" :key="i">
            <PostCard />
          </div>
        </div>


        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center">
            <a href="#" class="flex-shrink-0">
              <img class="rounded-full object-cover border w-8 h-8" src="@/assets/images/avatar.jpg" alt="avatar">
            </a>
            <a class="ml-2 font-medium" href="#">angrybird</a>
          </div>
          <a href="#">
            <div class="text-2xl font-light text-gray-600 hover:text-gray-800">&times;</div>
          </a>
        </div>
        <div class="pb-6">
          <a href="#" class="flex flex-col sm:flex-row">
            <div class="flex-shrink-0">
              <img class="object-cover w-full sm:w-48 h-32 transition ease-in-out duration-150 opacity-100 hover:opacity-75" src="@/assets/images/avatar.jpg" alt="">
            </div>
            <div class="flex-1 ml-0 sm:ml-4 flex flex-col">
              <div class="text-sm leading-tight pt-1">
                <a href="#">Machine Learning Tutorial for Beginners - USING JAVASCRIPT!</a>
              </div>
              <div class="text-sm mt-1 leading-tight max-w-128 w-full">
                <a href="#" class="text-gray-600 hover:text-gray-800 flex flex-col sm:flex-row items-right sm:items-center">
                  <div class="flex items-center">
                    <span>DashieGames</span>
                    <span>
                      <svg class="pl-1 w-4 h-4" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> 
                    </span>
                  </div>
                  <span class="ml-0 mt-3 sm:mt-0 sm:ml-2 text-sm text-gray-600">618k views &middot; 2 days ago</span>
                </a>
                <div class="mt-3 text-gray-600 leading-snug tracking-wide">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quisquam mollitia laboriosam porro esse, magnam et. Illum, itaque, quos odit sit aperiam ea id expedita aut officiis totam voluptas. Quibusdam.
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
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
      TheSideBar: () => import('@/components/TheSideBar'),
      PostCard: () => import('@/components/PostCard')
    }
  }
</script>