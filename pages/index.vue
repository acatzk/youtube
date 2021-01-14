<template>
  <div class="flex-1 flex">
    <TheSideBar />
    
    <div class="flex-1 overflow-y-auto bg-gray-100">

      <!-- <div class=" w-auto px-12">
        <VueHorizontalList :items="tags">
          <template #nav-prev>
            <div>👈</div>
          </template>
          <template #default="{ item }" :options="options">
            <button class=" py-2 px-3 bg-gray-700 text-gray-100 rounded-full text-xs border truncate font-medium">{{ item }}</button>
          </template>
          <template #nav-next>
            <div>👉</div>
          </template>
        </VueHorizontalList> 
      </div> -->
      
      <div class="container mx-auto max-w-screen-xl w-full px-4 py-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mb-6 "> <!-- border-b -->
          <div v-for="(post, i) in posts" :key="i">
            <PostCard :post="post"/>
          </div>
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
    },
    data () {
      return {
        posts: [
          {
            thumbnailUrl: 'https://i.ytimg.com/vi/gGagPdT3L-s/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAiR7NDTL6cpZ-lMLCz6opGI4YN3Q',
            avatar: 'https://yt3.ggpht.com/a-/AOh14Gio4MyDJ8edH8qbyQt7Ii4w7fCIVQ0XtOeOvA=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'Bob Marley Greatest Hits Reggae Songs 2018 - Bob Marley Full Album',
            channel: 'Yuu Mii',
            isVerified: false,
            views: '6,855,043 views',
            created_at: '2 years ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/JHCKab2oS4s/mqdefault_6s.webp?du=3000&sqp=CLX7_v8F&rs=AOn4CLDBZCIjPDpjPRb3H6CcIsM2VkI_BA',
            avatar: 'https://yt3.ggpht.com/a-/AOh14Gj286c5gsHOdd8GjPlLu-NdKL79PGJjFhrtwQ=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'Final Touches & Deploying the Blog | Nuxt.js & Storyblok - Building a Complete Blog',
            channel: 'Academind',
            isVerified: true,
            views: '15,001 views',
            created_at: '2 years ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/rncY1tlWShM/mqdefault_6s.webp?du=3000&sqp=CKHT_v8F&rs=AOn4CLCJdjoWXuvO7VmpD94lGFlrl-xqzQ',
            avatar: 'https://yt3.ggpht.com/a-/AOh14Gj2IltSGzbRNN4N18hIhgLY6_cRMx0DVkjxmA=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'Intro to Vue 3 + Composition API: Builda Todo App',
            channel: 'Coding Garden',
            isVerified: false,
            views: '48k views',
            created_at: '3 months ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/5RluSnRPRbI/mqdefault_6s.webp?du=3000&sqp=CJrt_v8F&rs=AOn4CLCETAkk1X2t33Cpzep_wMyNqz4lwA',
            avatar: 'https://yt3.ggpht.com/a-/AOh14GixXc5ib6-B903882xRSj-Z3NoHMkj1OA-J8Q=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'UI Design Trends 2021',
            channel: 'DesignSense',
            isVerified: false,
            views: '110k views',
            created_at: '2 weeks ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/UG0-V95qmPg/mqdefault_6s.webp?du=3000&sqp=CJjp_v8F&rs=AOn4CLDxDBfiz115zwQXxzd3vNZUuJItUw',
            avatar: 'https://yt3.ggpht.com/a-/AOh14GiGo0Ncc6uH_M8VYvPZ690hjnnMZCIwN6WvzQ=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'Add Any Pattern to Clothes i Photoshop!',
            channel: 'PiXimperfect',
            isVerified: true,
            views: '110k views',
            created_at: '2 weeks ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/-_X6PhkjpzU/mqdefault_6s.webp?du=3000&sqp=CNnH_v8F&rs=AOn4CLCi5nnRE5QKMCixlDVeVB6MEDd0zw',
            avatar: 'https://yt3.ggpht.com/a-/AOh14GgRakJo9HGmRzwTAjdcYFMYBLCl1fP2Z4YgbA=s68-c-k-c0x00ffffff-no-rj-mo',
            title: '5 Front-end Development Skills to Land Your First Job',
            channel: 'Programming with Mosh',
            isVerified: true,
            views: '65k views',
            created_at: '6 days ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/aoQ6S1a32j8/mqdefault_6s.webp?du=3000&sqp=CPDp_v8F&rs=AOn4CLA81GUrPEAOH1YTwo2dID7Wwaxvdg',
            avatar: 'https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'How to Make a Landing Page using HTML, SCSS, and Javascript - FULL COURSE',
            channel: 'freeCodeCamp.org',
            isVerified: true,
            views: '27K views',
            created_at: '14 hours ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/j-3RwvWZoaU/mqdefault_6s.webp?du=3000&sqp=COz8_v8F&rs=AOn4CLAVV7oPDjrNfGd5gs5pOmOElVmz2g',
            avatar: 'https://yt3.ggpht.com/a-/AOh14GiclTRAzNjdjvYZFkQzK81ROHt7JxnPuK_wyA=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'Why You Should Learn Server Middleware with Nuxt.js! A step by step guide',
            channel: 'Program with Erik',
            isVerified: false,
            views: '34K views',
            created_at: '2 years ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/hGg8L7Xlrgc/mqdefault_6s.webp?du=3000&sqp=COH9_v8F&rs=AOn4CLBDCKO3I8H-hSdkJzN-j9kGzTl8yg',
            avatar: 'https://yt3.ggpht.com/a-/AOh14GhX1kTmCNgahq2-PG6cV6fW9V75FAi1ECaoDg=s68-c-k-c0x00ffffff-no-rj-mo',
            title: '10 annoying things about working at Google that irritated me',
            channel: 'TechLead',
            isVerified: true,
            views: '242K views',
            created_at: '2 years ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/B7J8Idx3hyY/mqdefault_6s.webp?du=3000&sqp=CKiB__8F&rs=AOn4CLAFFMTzYc4zXLC2pttuaKDF5Arhvw',
            avatar: 'https://yt3.ggpht.com/a-/AOh14GgHDvPH4HVnXEX892SE2H5gtdyjosxeaEeOHw=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'Biggest MISCONCEPTIONS about Becoming a Self-Taugh Programmer',
            channel: 'Andy Sterkowitz',
            isVerified: false,
            views: '24K views',
            created_at: '3 months ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/sslKTYxMl7c/mqdefault_6s.webp?du=3000&sqp=CNj0_v8F&rs=AOn4CLCqSINgoO59Ov7dg0sb6rRQkLxi8g',
            avatar: 'https://yt3.ggpht.com/a-/AOh14Gh91SDLonPENSz1NifM4j62B3YkPGZ9DI4mXw=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'FlipTop - Most "SAVAGE" moments P1',
            channel: 'Hiphop Heads TV',
            isVerified: false,
            views: '261K views',
            created_at: '2 weeks ago'
          },
          {
            thumbnailUrl: 'https://i.ytimg.com/an_webp/SNRFGw5Mb0g/mqdefault_6s.webp?du=3000&sqp=CMCM__8F&rs=AOn4CLDvJ2MIsJzHivILavH7wNxAI04tRw',
            avatar: 'https://yt3.ggpht.com/a-/AOh14GgWJLbSHT1NxPtwloxTowosulZRmALCIr1Abg=s68-c-k-c0x00ffffff-no-rj-mo',
            title: 'How To Build JavaScript Stuck',
            channel: 'Web Dev Simplified',
            isVerified: true,
            views: '17K views',
            created_at: '1 month ago'
          } 
        ],
        tags: [
          'All',
          'Air Supply',
          'Love Songs',
          'Lo-fi music',
          'NBA',
          'JavaScript',
          'Linux',
          'GraphQL',
          'Computer Science',
          'TV Patrol',
          'Anime',
          'Adobe Premiere Pro',
          'New-Age Music',
          'Adobe After Effects',
          'Computer programming',
          'Recently uploaded',
          'Live',
          'Mixes'
        ]
      }
    }
  }
</script>