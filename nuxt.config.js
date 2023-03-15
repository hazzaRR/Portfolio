import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    app: {
      head: {
        title: 'Harry Redman',
        link: [
          {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'},
          {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/daisyui@2.51.4/dist/full.css', type:'text/css'},
          {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css', type:'text/css'}

        ],
      },
      baseURL: '/Portfolio/', // baseURL: '/<repository>/'
    },
    modules: [
      '@nuxtjs/tailwindcss'
    ]
})
