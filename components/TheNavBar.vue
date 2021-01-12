<template>
  <header>
    <div class="flex items-center justify-between bg-white shadow-sm px-3 sm:px-8 py-3">
      <div class="flex items-center space-x-5">
        <button>
          <svg class="w-6 h-6 text-gray-700 focus:outline-none" stroke="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <span class="flex items-center space-x-1">
          <svg class="w-6 h-6 text-red-600" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M21.6 0H2.4A2.41 2.41 0 000 2.4v19.2A2.41 2.41 0 002.4 24h19.2a2.41 2.41 0 002.4-2.4V2.4A2.41 2.41 0 0021.6 0zM7.045 14.465A2.11 2.11 0 009.84 13.42h1.66a3.69 3.69 0 110-1.75H9.84a2.11 2.11 0 10-2.795 2.795zm11.345.845a3.55 3.55 0 01-1.06.63 3.68 3.68 0 01-3.39-.38v.38h-1.51V5.37h1.5v4.11a3.74 3.74 0 011.8-.63H16a3.67 3.67 0 012.39 6.46zm-.223-2.766a2.104 2.104 0 11-4.207 0 2.104 2.104 0 014.207 0z"></path></svg>
          <span class="font-medium tracking-tighter text-gray-800">Youtube</span>
        </span>
      </div>
      <div class="hidden sm:block">
        <form class="flex">
          <input type="text" placeholder="Search" class="border border-gray-400 py-1 px-3 lg:w-128 rounded-l-sm focus:outline-none">
          <button @click.prevent class="border-t border-r border-b rounded-r-sm border-gray-400 py-1 px-6 bg-gray-100 text-sm hover:bg-gray-200 transition ease-in-out duration-150 focus:outline-none">
            <svg class="w-5 h-5 text-gray-500" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </button>
        </form>
      </div>
      <div class="flex items-center">
        <ul class="flex items-center space-x-1">
          <li class="block sm:hidden">
            <button class="focus:outline-none border border-transparent hover:border-gray-200 rounded-full p-1 hover:bg-gray-100 transition ease-in-out duration-150">
              <svg class="w-5 h-5 text-gray-500" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </button>
          </li>
          <li>
            <button class="focus:outline-none border border-transparent hover:border-gray-200 rounded-full p-1 hover:bg-gray-100 transition ease-in-out duration-150">
              <svg class="w-6 h-6 text-gray-500 rounded-full" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
            </button>
          </li>
          <li>
            <button class="focus:outline-none border border-transparent hover:border-gray-200 rounded-full p-1 hover:bg-gray-100 transition ease-in-out duration-150">
              <svg class="w-6 h-6 text-gray-500 rounded-full" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12.553 1.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
            </button>
          </li>
          <li>
            <button class="focus:outline-none border border-transparent hover:border-gray-200 rounded-full p-1 hover:bg-gray-100 transition ease-in-out duration-150">
              <svg class="w-6 h-6 text-gray-500 rounded-full" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" x="13029"><path xmlns="http://www.w3.org/2000/svg" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zm6-6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            </button>
          </li>
          <li>
            <button class="focus:outline-none border border-transparent hover:border-gray-200 rounded-full p-1 hover:bg-gray-100 transition ease-in-out duration-150">
              <svg class="w-6 h-6 text-gray-500 rounded-full" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" x="1329"><path xmlns="http://www.w3.org/2000/svg" d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
            </button>
          </li>
        </ul>
        <button class="ml-4 focus:outline-none flex-shrink-0">
          <img class="w-8 h-8 bg-gray-500 rounded-full object-cover border border-gray-200" src="@/assets/images/avatar.jpg" alt="">
        </button>
      </div>
    </div>
  </header>
</template>