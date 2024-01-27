<script  setup>

useHead({
  title: "Harry Redman | Aspiring Software Engineer",
  meta: [
      { name: 'description', content: 'Harry Redman - Aspiring Software Engineer based in Derby, UK. Looking for an entry level software engineering role based in either Derby, London or Essex. Explore my portfolio showcasing skills in Java, Python, SQL, Spring Boot, Vue, Nuxt, React, Linux and Javascript.'},
      { property: 'og:title', content: 'Harry Redman | Aspiring Software Engineer' },
      { property: 'og:description', content: 'Harry Redman - Aspiring Software Engineer based in Derby, UK. Looking for an entry level software engineering role based in either Derby, London or Essex. Explore my portfolio showcasing skills in Java, Python, SQL, Spring Boot, Vue, Nuxt, React, Linux and Javascript.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.harryredman.com' },
      { property: 'og:locale', content: 'en_gb' },
      { property: 'og:image', content: '/images/profile_photo_Edited.jpg' },
      { name: "msapplication-TileColor", content: "#da532c"},
      { name: "theme-color", content: "#ffffff"}
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes:"32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes:"16x16", href:"/favicon-16x16.png" },
      { rel:"manifest", href:"/site.webmanifest" },
      { rel:"mask-icon", href: "/safari-pinned-tab.svg", color:"#5bbad5" }
    ],
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

