<script lang="ts" setup>
import { useI18n } from "vue-i18n"

const baseURL = "https://shadowban.p1atdev.tk"

useMeta({
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
        { property: "og:site_name", content: "Am I being shadowbanned?" },
        { property: "twitter:card", content: "summary_large_image" },
        // { name: "twitter:site", content: "@" },
        { name: "twitter:title", content: "Am I being shadowbanned?" },
        {
            property: "twitter:description",
            content: "A twitter shadowban checker. Let's check whether you are shadowbanned.",
        },
        { property: "twitter:image", content: baseURL + "/images/ogp.png" },
    ],
})

const route = useRoute()

const i18n = useI18n()

// 多言語対応
if (route.query.lang) {
    i18n.locale.value = route.query.lang
}
</script>

<template>
    <main class="">
        <NuxtPage />
    </main>
</template>

<style>
@import "~/styles/main.css";
</style>
