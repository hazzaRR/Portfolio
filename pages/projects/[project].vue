<template>
    <section class="bg-neutral-100 dark:bg-neutral">
    <div class="container px-6 py-4 mx-auto">

        <h1 class="block mt-4 text-2xl mx-auto md:w-1/2 w-full font-semibold text-gray-800 dark:text-white capitalize">{{project.title}}</h1>

        <div class="mt-8">
            <!-- <img class="object-cover md:w-1/2 w-full mx-auto rounded-xl h-72 lg:h-96 mb-6" :src="project.images[0].url" :alt="project.images[0].alt"> -->

            <ImageSlider class="object-cover md:w-1/2 w-full mx-auto rounded-xl h-72 lg:h-96" :images="project.images" :url="project.url"/>

            <div class="mt-6 mx-auto md:w-1/2 w-full">
                <p class="text-sm text-blue-500 uppercase">technologies & Frameworks</p>

                <div class="flex flex-wrap space-x-2 mt-2">
                    <div class="badge badge-primary my-1" v-for="(technology, index) in project.technologies" :key="index">
                        {{technology}}
                    </div>
                </div>
                <div>
                    <p class="my-4">{{ project.content }}</p>
                    <p v-if="project.reportLink">If you are interested in reading my project report check out the pdf: <a class="link link-primary" :href="project.reportLink">here</a></p>
                    <p v-if="project.websiteLink">To see a live preview of the website check it out with this link <a class="link link-primary" :href="project.websiteLink">here</a></p>
                </div>
                <div class="flex justify-end">
                    <a :href="project.githubRepoLink" class="px-6 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Github Repository link</a>
                </div>

            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import data from '~/assets/projects.json'

const route = useRoute()

const project = computed(() => {

  const projectRoute = route.params.project;
  return data.find(project => project.url === projectRoute);
});

</script>

<style lang="scss" scoped>

</style>