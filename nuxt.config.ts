// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // srcDir: 'src',
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts", "@nuxtjs/supabase", "nuxt-swiper"],
  devtools: { enabled: true },

  nitro: {
    preset: "netlify",
  },
  supabase: {
    url: process.env.NUXT_APP_SUPABASE_URL,
    key: process.env.NUXT_APP_SUPABASE_KEY,
    redirect: false,
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
