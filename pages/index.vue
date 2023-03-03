<template>
    <div>
        <PersonalHero />
        <div class="pb-16">
            <h1 class="text-2xl font-bold text-center lg:text-left  lg:ml-2">Experience</h1>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-evenly">
                <div class="text-center" v-for="experience in experiences" v-bind:key="experience">
                    <i class="text-7xl" :class="experience.icon "></i>
                    <p class="font-bold">{{ experience.name }}</p>
                </div>
            </div>
        </div>

        <Footer />
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
    android: {name:"Android Studio", icon:"devicon-androidstudio-plain colored"},
    github: {name:"Github", icon:"devicon-github-original colored"},
}

</script>

<style scoped>

</style>