// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    modules: ['@nuxtjs/tailwindcss'],
    app: {
      head: {
        title: 'Harry Redman',
        link: [
          {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'}
        ]
      }
    }
    

})
