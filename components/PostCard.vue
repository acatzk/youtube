<template>
  <div>
     <a href="#" class="relative">
      <div class="flex-shrink-0 relative">
        <img class="w-full bg-gray-400 border-3 border-black overflow-hidden" :src="post.thumbnailUrl" alt="avatar">
        <div class="absolute bg-black text-white px-2 text-xs -mt-5 right-0 font-medium">7:34</div>
        <div class="absolute top-0 left-0 flex flex-row space-y-3">
          <div>
            <button></button>
          </div>
          <div></div>
        </div>
      </div>
      <div class="text-sm leading-tight flex items-start space-x-2 pt-3">
        <button class="flex-shrink-0 block">
          <img class="w-10 h-10 rounded-full border" :src="post.avatar" alt="avatar">
        </button>
        <div class="w-full mt-1">
          <span class="font-medium text-sm tracking-wide text-gray-900">
            {{ `${post.title.length >= 50 ? post.title.slice(0, 50) + '...' : post.title}` }}
          </span>
          <div class="text-sm mt-2 leading-tight">
            <a href="#" class="text-gray-700 hover:text-gray-800 flex items-center">
              <span>{{ post.channel }}</span>
              <span v-show="post.isVerified">
                <svg class="pl-1 w-4 h-4" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> 
              </span>
            </a>
            <span class="text-sm text-gray-700">{{ post.views }} &middot; {{ post.created_at }}</span>
          </div>
        </div>
        <button class="flex-shrink-0">
          <svg class="text-gray-700 h-6 h-6 fill-current" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="style-scope yt-icon"></path></svg>
        </button>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>