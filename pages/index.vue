<template>
    <div class="bg-neutral">
        <PersonalHero />
        <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Technology Experience</h1>
        <p class="mt-4 text-center text-gray-500 dark:text-gray-300">
            A list of all the different langueages, technologies and frameworks I have experience using to build different software
        </p>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-evenly mt-10">
                <div class="text-center" v-for="experience in experiences" v-bind:key="experience">
                    <i class="text-7xl" :class="experience.icon "></i>
                    <p class="font-bold">{{ experience.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>



const experiences = {
    python: {name:"Python", icon:"devicon-python-plain colored"},
    java: {name:"Java", icon:"devicon-java-plain colored"},
    javascript: {name:"JavaScript", icon:"devicon-javascript-plain colored"},
    nuxt: {name:"Nuxt JS", icon:"devicon-nuxtjs-plain colored"},
    vue: {name:"Vue JS", icon:"devicon-vuejs-plain colored"},
    postgres: {name:"Postgres", icon:"devicon-postgresql-plain colored"},
    git: {name:"Git", icon:"devicon-git-plain colored"},
    html: {name:"HTML", icon:"devicon-html5-plain colored"},
    css: {name:"CSS", icon:"devicon-css3-plain colored"},
    tailwind: {name:"Tailwind CSS", icon:"devicon-tailwindcss-plain colored"},
    android: {name:"Spring Boot", icon:"devicon-spring-plain-wordmark colored"},
    github: {name:"Github", icon:"devicon-github-original colored"},
}

</script>

<style scoped>

</style>