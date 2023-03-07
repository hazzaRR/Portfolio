// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    app: {
      head: {
        title: 'Harry Redman',
        link: [
          {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'}
        ],
        script: [
          {
            src: "https://cdn.tailwindcss.com",
          },
        ],
      },
      baseURL: '/Portfolio/', // baseURL: '/<repository>/'
    },
    css: ['/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
})
