import { defineNuxtConfig } from "nuxt3"

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"

const baseURL = "https://shadowban-twitter.vercel.app"

export default defineNuxtConfig({
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        GTAG: process.env.GTAG,
    },
    meta: [
        { name: "title", content: "Am I being shadowbanned?" },
        { property: "og:title", content: "Am I being shadowbanned?" },
        {
            property: "og:description",
            content: "A twitter shadowban checker. Let's check whether you are shadowbanned.",
        },
        { property: "og:image", content: baseURL + "/images/ogp.png" },
        { property: "og:url", content: baseURL },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "site_name" },
        { property: "twitter:card", content: "summary_large_image" },
        // { name: "twitter:site", content: "@shadowban_twitter" },
        { name: "twitter:title", content: "Am I being shadowbanned?" },
        {
            property: "twitter:description",
            content: "A twitter shadowban checker. Let's check whether you are shadowbanned.",
        },
        { property: "twitter:image", content: baseURL + "/images/ogp.png" },
    ],
    buildModules: ["@vueuse/nuxt", "@unocss/nuxt", "@pinia/nuxt", "@intlify/nuxt3"],
    vueuse: {
        ssrHandlers: true,
    },
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        // icons: {
        // scale: 1.2,
        // },
        shortcuts: [],
    },
    srcDir: "src",
    intlify: {
        localeDir: "locales",
        defaultLocale: "ja",
        fallbackLocale: "en",
    },
})
