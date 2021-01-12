<template>
  <div class="overflow-y-auto">
    <div class="mt-3">
      <ul class="pb-3 border-b border-gray-300">
        <li v-for="(link, i) in links" :key="i" @click.prevent="setLink = link.title" >
          <a  href="#" class="flex items-center space-x-5 hover:bg-gray-300 py-2 transition ease-in-out duration-150">
            <span class="ml-6" v-html="link.icon" :class="`${link.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
            <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-3">
      <span class="pl-6 uppercase text-gray-600 text-xs tracking-wide font-medium">library</span>
      <ul class="pt-2 pb-3 border-b border-gray-300 overflow-y-auto">
        <li v-for="(link, i) in links" :key="i" @click.prevent="setLink = link.title" >
          <a  href="#" class="flex items-center space-x-5 hover:bg-gray-300 py-2 transition ease-in-out duration-150">
            <span class="pl-6" v-html="link.icon" :class="`${link.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
            <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-3">
      <span class="pl-6 uppercase text-gray-600 text-xs tracking-wide font-medium">library</span>
      <ul class="pt-2 pb-3 border-b border-gray-300 overflow-y-auto">
        <li v-for="(link, i) in links" :key="i" @click.prevent="setLink = link.title" >
          <a  href="#" class="flex items-center space-x-5 hover:bg-gray-300 py-2 transition ease-in-out duration-150">
            <span class="pl-6" v-html="link.icon" :class="`${link.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
            <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-3">
      <span class="pl-6 uppercase text-gray-600 text-xs tracking-wide font-medium">library</span>
      <ul class="pt-2 pb-3 border-b border-gray-300 overflow-y-auto">
        <li v-for="(link, i) in links" :key="i" @click.prevent="setLink = link.title" >
          <a  href="#" class="flex items-center space-x-5 hover:bg-gray-300 py-2 transition ease-in-out duration-150">
            <span class="pl-6" v-html="link.icon" :class="`${link.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
            <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-3">
      <span class="pl-6 uppercase text-gray-600 text-xs tracking-wide font-medium">library</span>
      <ul class="pt-2 pb-3 border-b border-gray-300 overflow-y-auto">
        <li v-for="(link, i) in links" :key="i" @click.prevent="setLink = link.title" >
          <a  href="#" class="flex items-center space-x-5 hover:bg-gray-300 py-2 transition ease-in-out duration-150">
            <span class="pl-6" v-html="link.icon" :class="`${link.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
            <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-3">
      <span class="pl-6 uppercase text-gray-600 text-xs tracking-wide font-medium">library</span>
      <ul class="pt-2 pb-3 border-b border-gray-300 overflow-y-auto">
        <li v-for="(link, i) in links" :key="i" @click.prevent="setLink = link.title" >
          <a  href="#" class="flex items-center space-x-5 hover:bg-gray-300 py-2 transition ease-in-out duration-150">
            <span class="pl-6" v-html="link.icon" :class="`${link.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
            <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        links: [
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>',
            title: 'Home'
          },
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>',
            title: 'Trending'
          },
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm-2 4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>',
            title: 'Subscriptions'
          },
          {
            label: ''
          }
        ],
        setLink: 'Home'
      }
    }
  }
</script>