<template>
  <div class="w-16 md:w-56 flex-none border-r bg-gray-100 flex flex-col h-screen">
    <div class="overflow-y-auto">
      <div class="block md:hidden">
        <ul class="mt-3 text-gray-600">
          <li class="hover:bg-gray-200" v-for="(lgIcon, i) in lgLink" :key="i" @click.prevent="setLink = lgIcon.title">
            <button class="w-full flex items-center justify-center rounded-none focus:outline-none py-2 transition ease-in-out duration-150 ">
              <span v-html="lgIcon.icon" :class="`${lgIcon.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
            </button>
          </li>
        </ul>
      </div>
      <div class="hidden md:block">
        <ul class="py-3 border-b border-gray-200">
          <li v-for="(link, i) in links" :key="i" @click.prevent="setLink = link.title" >
            <a  href="#" class="flex items-center space-x-5 hover:bg-gray-200 py-2 transition ease-in-out duration-150">
              <span class="ml-6" v-html="link.icon" :class="`${link.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
              <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
            </a>
          </li>
        </ul>
        <div>
          <span class="text-xs font-medium uppercase tracking-wider text-gray-600 px-5">Library</span>
          <ul class="py-3 border-b border-gray-200">
            <li v-for="(link, i) in library" :key="i" @click.prevent="setLink = link.title" >
              <a  href="#" class="flex items-center space-x-5 hover:bg-gray-200 py-2 transition ease-in-out duration-150">
                <span class="ml-6" v-html="link.icon" :class="`${link.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
                <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span class="text-xs font-medium uppercase tracking-wider text-gray-600 px-5">Subscriptions</span>
          <ul class="py-3 border-b border-gray-200">
            <li v-for="(link, i) in subscriptions" :key="i" @click.prevent="setLink = link.title" >
              <a  href="#" class="flex items-center space-x-5 hover:bg-gray-200 py-2 transition ease-in-out duration-150 flex-shrink-0">
                <img class="ml-6 rounded-full object-cover w-6 h-6" :src="link.image" alt="">
                <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center space-x-5 hover:bg-gray-200 py-2 transition ease-in-out duration-150 flex-shrink-0">
                <span class="ml-6">
                  <svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </span>
                <span class="text-sm text-gray-600 font-medium">Show 50 more</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span class="text-xs font-medium uppercase tracking-wider text-gray-600 px-5">more from youtube</span>
          <ul class="py-3 border-b border-gray-200">
            <li @click.prevent="setLink = 'YouTube Movies'">
              <a  href="#" class="flex items-center space-x-5 hover:bg-gray-200 py-2 transition ease-in-out duration-150">
                <span class="ml-6">
                  <svg :class="`${'YouTube Movies' === setLink ? 'text-red-600' : 'text-gray-600'}`" class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clip-rule="evenodd"></path></svg>
                </span>
                <span class="text-sm text-gray-600 font-medium">YouTube Movies</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="border-b border-gray-200">
            <li v-for="(link, i) in more" :key="i" @click.prevent="setLink = link.title">
              <a  href="#" class="flex items-center space-x-5 hover:bg-gray-200 py-2 transition ease-in-out duration-150">
                <span class="ml-6" v-html="link.icon" :class="`${link.title === setLink ? 'text-red-600' : 'text-gray-600'}`"></span>
                <span class="text-sm text-gray-600 font-medium">{{ link.title }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="pb-16 px-5">
          <ul class="space-x-1 flex flex-wrap text-xs font-medium text-gray-500">
            <li v-for="(a, i) in about" :key="i" class="hover:text-gray-600">
              <a href="#">{{ a }}</a>
            </li>
          </ul>
          <ul class="mt-2 space-x-1 flex flex-wrap text-xs font-medium text-gray-500">
            <li v-for="(term, i) in terms" :key="i" class="hover:text-gray-600">
              <a href="#">{{ term }}</a>
            </li>
          </ul>
          <div class="mt-5">
            <span class="text-gray-500 text-xs font-medium">&copy; 2021 YouTube, LLC</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        setLink: 'Home',
        lgLink: [
          {
            icon: '<svg class="w-8 h-8" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>',
            title: 'Home'
          },
          {
            icon: '<svg class="w-8 h-8" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>',
            title: 'Trending'
          },
          {
            icon: '<svg class="w-8 h-8" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm-2 4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>',
            title: 'Subscriptions'
          },
          {
            icon: '<svg class="w-8 h-8" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>',
            title: 'History'
          },
          {
            icon: '<svg class="w-8 h-8" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>',
            title: 'Watch later'
          },
          {
            icon: '<svg class="w-8 h-8" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>',
            title: 'Purchases'
          },
          {
            icon: '<svg class="w-8 h-8" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h5a1 1 0 000-2H3zm0 4a1 1 0 100 2h4a1 1 0 100-2H3zm10 5a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"></path></svg>',
            title: 'Tailwindcss'
          },
          {
            icon: '<svg class="w-8 h-8" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zm4-.167v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>',
            title: 'Liked videos'
          }
        ],
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
          }
        ],
        library: [
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>',
            title: 'History'
          },
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>',
            title: 'Watch later'
          },
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>',
            title: 'Purchases'
          },
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h5a1 1 0 000-2H3zm0 4a1 1 0 100 2h4a1 1 0 100-2H3zm10 5a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"></path></svg>',
            title: 'Tailwindcss'
          },
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zm4-.167v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>',
            title: 'Liked videos'
          }
        ],
        subscriptions: [
          {
            image: require('@/assets/images/avatar.jpg'),
            title: 'freeCodeCamp'
          },
          {
            image: require('@/assets/images/avatar.jpg'),
            title: 'Academind'
          },
          {
            image: require('@/assets/images/avatar.jpg'),
            title: 'Adam Wathan'
          },
          {
            image: require('@/assets/images/avatar.jpg'),
            title: 'Adrian Stefan'
          },
          {
            image: require('@/assets/images/avatar.jpg'),
            title: 'Amitav Roy'
          },
        ],
        more: [
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>',
            title: 'Settings'
          },
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>',
            title: 'Help'
          },
          {
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>',
            title: 'Send feedback'
          }
        ],
        about: ['About', 'Press', 'Copyright', 'Creators', 'Advertise', 'Developers', '+YouTube'],
        terms: ['Terms', 'Policy', 'Policy & Safety', 'Test new features']
      }
    }
  }
</script>