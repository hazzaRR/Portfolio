<script  setup>

const links = [
{name: "Home", link: "/"},
{name: "Projects", link: "/projects"}
]

</script>

<template>
  <Navbar :links="links" />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Footer />
</template>

<style scoped>
</style>

