export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2026-08-24",
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
        },
        {
          property: "og:title",
          content: "Anish Kumar — Backend AI Engineering"
        },
        {
          property: "og:description",
          content:
            "A focused portfolio of backend engineering and AI workflow projects by Anish Kumar."
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://iotserver24.github.io/flyrank-ai-fluency-portfolio/"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:title",
          content: "Anish Kumar — Backend AI Engineering"
        },
        {
          name: "twitter:description",
          content:
            "A focused portfolio of backend engineering and AI workflow projects by Anish Kumar."
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://iotserver24.github.io/flyrank-ai-fluency-portfolio/"
        }
      ]
    }
  },
  nitro: {
    preset: "github_pages"
  }
});
