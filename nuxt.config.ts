// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts", "nuxt-swiper"],

  compatibilityDate: "2026-05-16",

  devtools: { enabled: true },
  // routeRules: {
  //   "/": { prerender: true },
  // },

  nitro: {
    preset: "netlify",
  },

  css: ["/assets/styles/main.scss"],
  runtimeConfig: {
    log: false,
    url: process.env.WEBSITE_URL || "http://localhost:3000",

    google: {
      mail: {
        name: process.env.GOOGLE_MAIL_NAME,
        user: process.env.GOOGLE_MAIL_USER,
        password: process.env.GOOGLE_MAIL_PASSWORD,
        // clientId: process.env.GOOGLE_MAIL_CLIENT_ID,
        // clientSecret: process.env.GOOGLE_MAIL_CLIENT_SECRET,
        // refreshToken: process.env.GOOGLE_MAIL_REFRESH_TOKEN,
      },
    },
  },
});
