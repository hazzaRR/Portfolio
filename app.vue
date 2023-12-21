<script  setup>

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

