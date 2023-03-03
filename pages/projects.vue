<template>
    <div>
        <PersonalHero />
        <h1  class="text-2xl font-bold text-center lg:text-left lg:ml-14">Projects</h1>

        <div v-for="project in projects" :key="project" class="card lg:card-side bg-neutral shadow-xl m-12">
            <figure><img :src="project.source" alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">{{project.title}}</h2>
                <p>{{ project.description }}</p>
                <div class="card-actions justify-end">

                    <a :href="project.link"><button class="btn btn-primary">Repository Url</button></a>
                </div>
            </div>
        </div>
        <Footer />

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
        source:"/carpark.png",
        description: "My software engineering group project that we built using vanilla Javascript, HTML and CSS",
        link: "https://github.com/hazzaRR/Parkarino"
    },
    appBookingSystem: {
        title: "Appointment Booking System",
        source:"/beautyroomcalendar.png",
        description: "An appointment booking system for a small local business that allows the owner to manage their appointments.",
        link: "https://github.com/hazzaRR/BeautyRoomBookings"
    },


}

</script>

<style scoped>

</style>