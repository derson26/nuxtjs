// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    alias: {
        // '@': resolve(__dirname, '/'),
        assets: "/<rootDir>/assets"
    },
    css: [
        "~/assets/main.css",
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    modules: ['@pinia/nuxt'],
})
