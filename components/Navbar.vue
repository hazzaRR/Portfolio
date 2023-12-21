<template>
  
    <div class="navbar relative bg-white shadow dark:bg-gray-800">
    <div class="flex-1">
      <router-link to="/">
                      <h1 class="w-auto h-6 sm:h-7 text-base md:text-xl font-black hover:text-blue-500 dark:hover:text-blue-400">
                          Harry Redman
                      </h1>
                  </router-link>
    </div>
    <div class="flex-none">
      <ul class="menu-horizontal px-1">
      <li class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-2 lg:mx-4 md:my-0" v-for="(link, index) in links" :key="index"><NuxtLink :to="link.link">{{ link.name }}</NuxtLink></li>
      <li class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-2 lg:mx-4 md:my-0"><a href="https://blog.harryredman.com">Blog</a></li>
      </ul>
      <div class="dropdown dropdown-end">
      </div>
    </div>
  </div>
  
  </template>
  
  <script setup>
  const props = defineProps(['links']);
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>