<script lang="ts" setup>
import { useI18n } from "vue-i18n"

const baseURL = "https://shadowban.p1atdev.tk"

const i18n = useI18n()
const route = useRoute()
const lang = useCookie("language", {
    default: () => {
        return "ja"
    },
    maxAge: 60 * 60 * 24 * 365,
})

// 多言語対応
if (route.query.lang) {
    lang.value = route.query.lang.toString()
}

i18n.locale.value = lang.value

useMeta({
    meta: [
        { name: "title", content: i18n.t("common.title") },
        { property: "og:title", content: i18n.t("common.title") },
        {
            property: "og:description",
            content: i18n.t("common.description"),
        },
        { property: "og:image", content: baseURL + "/ogp/" + lang + ".png" },
        { property: "og:url", content: baseURL },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: i18n.t("common.title") },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:site", content: "@p1atdev" },
        { property: "twitter:creator", content: "@p1atdev" },
        { property: "twitter:title", content: i18n.t("common.title") },
        {
            property: "twitter:description",
            content: i18n.t("common.description"),
        },
        { property: "twitter:image", content: baseURL + "/ogp/" + lang + ".png" },
        { property: "twitter:url", content: baseURL },
    ],
})
</script>

<template>
    <NavBar />
    <main class="">
        <NuxtPage />
    </main>
    <Footer />
</template>

<style>
@import "~/styles/main.css";
</style>
