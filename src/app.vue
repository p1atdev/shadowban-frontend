<script lang="ts" setup>
import { useI18n } from "vue-i18n"

const baseURL = "https://shadowban.p1atdev.tk"

const i18n = useI18n()
const route = useRoute()

let lang = "ja"

// 多言語対応
if (route.query.lang) {
    lang = route.query.lang.toString()
}

i18n.locale.value = lang

useMeta({
    meta: [
        { name: "title", content: i18n.t("common.title") },
        { property: "og:title", content: i18n.t("common.title") },
        {
            property: "og:description",
            content: "A twitter shadowban checker. Let's check whether you are shadowbanned.",
        },
        { property: "og:image", content: baseURL + "/ogp/" + lang + ".png" },
        { property: "og:url", content: baseURL },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: i18n.t("common.title") },
        { property: "twitter:card", content: "summary_large_image" },
        // { name: "twitter:site", content: "@" },
        { name: "twitter:title", content: i18n.t("common.title") },
        {
            property: "twitter:description",
            content: "A twitter shadowban checker. Let's check whether you are shadowbanned.",
        },
        { property: "twitter:image", content: baseURL + "/images/ogp.png" },
    ],
})
</script>

<template>
    <main class="">
        <NuxtPage />
    </main>
</template>

<style>
@import "~/styles/main.css";
</style>
