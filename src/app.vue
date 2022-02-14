<script lang="ts" setup>
const baseURL = "https://shadowban-twitter.vercel.app"

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
        { property: "og:site_name", content: "site_name" },
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
</script>

<template>
    <main class="">
        <NuxtPage />
    </main>
</template>

<style>
@import "~/styles/main.css";
</style>
