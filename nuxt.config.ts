import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    app: {
      head: {
        title: 'Harry Redman',
        link: [
          {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'}
        ],
      },
      baseURL: '/Portfolio/', // baseURL: '/<repository>/'
    },
    modules: [
      '@nuxtjs/tailwindcss'
    ]
})
