export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
    head: {
      title: "Anish Kumar — Backend AI Engineering",
      meta: [
        {
          name: "description",
          content:
            "A focused portfolio of backend engineering and AI workflow projects by Anish Kumar."
        }
      ]
    }
  },
  nitro: {
    preset: "github_pages"
  }
});
