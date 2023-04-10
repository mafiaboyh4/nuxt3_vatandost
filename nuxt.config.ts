// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true
      },
     
    css: [
        'primevue/resources/themes/lara-light-teal/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        '@/assets/styles/styles.scss',
    ],
    build: {
        transpile: ['primevue']
    },
   
})
