<script  setup>

useHead({
  title: "Harry Redman | Aspiring Software Engineer",
  meta: [
      {
        name: 'description',
        content: 'Harry Redman - Aspiring Software Engineer based in Derby, UK. Looking for an entry level software engineering role based in either Derby, London or Essex. Explore my portfolio showcasing skills in Java, Python, SQL, Spring Boot, Vue, Nuxt, React, Linux and Javascript.'
      }
    ]
})

const links = [
{name: "Home", link: "/"},
{name: "Projects", link: "/projects"}, 
{name: "Trips", link: "/trips"}
]

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar class="sticky top-0 z-50" :links="links" />
    <NuxtLayout>
      <NuxtPage class="grow bg-neutral-100 dark:bg-neutral min-h-screen" />
    </NuxtLayout>
    <Footer />
  </div>
  </template>

<style scoped>
</style>

