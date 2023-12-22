<template>
      <div class="relative">
        <div class="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
          <span>{{ currentIndex }}</span>/<span>{{ props.images.length }}</span>
        </div>
  
        <button @click="previous" class="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
  
        <button @click="next" class="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
  
        <div class="">
          <template v-for="(image, index) in props.images" :key="index">
            <div v-show="currentIndex == index + 1" class="absolute top-0 left-0 w-full h-full transition transform duration-300" :class="{ 'opacity-0': currentIndex !== index + 1, 'opacity-100': currentIndex === index + 1 }">
              <img :src="`/images/${props.url}/${image.url}`" :alt="image.alt" class="object-cover w-full h-full rounded-xl" />
            </div>
          </template>
        </div>
      </div>
  </template>
  

<script setup>

const currentIndex = ref(1);

const props = defineProps(["images", "url"])


const previous = () => {
    if (currentIndex.value > 1) {
        currentIndex.value--;
    }
}

const next = () => {
    if (currentIndex.value < props.images.length) {
        currentIndex.value++;;
    }
}

</script>

<style lang="scss" scoped>

</style>