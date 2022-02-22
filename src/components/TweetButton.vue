<script lang="ts" setup>
import { useClipboard } from "@vueuse/core"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

// const twitterURL = "https://twitter.com/intent/tweet?text="

const tweetContent = t("tweet.content")

const tweetURL = t("share.url")

// const hashtags = ["shadowban", "twitter", "shadowban_checker"]

const shareMessage = ref(`${tweetContent}\n${tweetURL}`)

const { text, copy, copied, isSupported } = useClipboard({ source: shareMessage })
</script>
<template>
    <div grid grid-col-1 place-items-center mb-12>
        <button py-3 px-4 bg-blue-500 rounded-sm text-3xl @click="copy()">
            <div flex items-center gap-x-3>
                <div :class="copied ? 'i-bi-clipboard-check' : 'i-bi-share-fill'"></div>
                <p>{{ copied ? t("message.copied") : t("share.button") }}</p>
            </div>
        </button>
    </div>
</template>
