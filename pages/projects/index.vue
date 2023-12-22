<template>
    <div class="bg-neutral-100 dark:bg-neutral">
        <!-- <PersonalHero /> -->
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Projects</h1>

        <p class="mt-4 text-center text-gray-500 dark:text-gray-300">
            Check out a range of my personal projects which showcase a range of my different coding skills
        </p>


        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="(project, index) in data" :key="index">
                <img class="relative z-10 object-cover w-full rounded-md h-96" :src="project.images[0].url" :alt="project.images[0].alt">

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-800">
                    <router-link :to="'/projects/' + project.url" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        {{project.title}}
                    </router-link>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        {{ `${project.content.substring(0, 200)}...`}}
                    </p>

                    <p class="mt-3 text-md text-blue-500">{{project.technology}}</p>
                </div>
            </div>
        </div>
    </div>

    </div>
</template>

<script setup>

import data from '~/assets/projects.json'

</script>

<style lang="scss" scoped>

</style>