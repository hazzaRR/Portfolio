<template>
    <div>
        <PersonalHero />
        <h1  class="text-2xl font-bold text-center lg:text-left">Projects</h1>

        <div v-for="project in projects" :key="project" class="card lg:card-side bg-gray-400 shadow-xl m-12">
            <figure><img :src="project.source" alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">{{project.title}}</h2>
                <p>{{ project.description }}</p>
                <div class="card-actions justify-end">

                    <a :href="project.link"><button class="btn btn-primary">Repository Url</button></a>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>


const projects = {

    exerciseClassification: {
        title: "Gym exercise classification using time series",
        source:"/carpark.png",
        description: "My third year project which was coded in python using the sktime library to classify and predict gym exercises",
        link: "https://github.com/hazzaRR/ExerciseClassification"
    },
    carParkSystem: {
        title: "Car park System",
        source:"/profile_photo_Edited.jpg",
        description: "My third year project which was coded in python using the sktime library to classify and predict gym exercises",
        link: "https://github.com/hazzaRR/ExerciseClassification"
    },


}

</script>

<style scoped>

</style>