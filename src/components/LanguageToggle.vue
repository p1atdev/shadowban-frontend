<script lang="ts" setup>
import { useI18n } from "vue-i18n"
const i18n = useI18n()
const lang = useCookie("language", {
    default: () => {
        return "ja"
    },
    maxAge: 60 * 60 * 24 * 365,
})

const shouldOpen = ref(false)

const languageList = [
    {
        code: "ja",
        name: "日本語",
    },
    {
        code: "en",
        name: "English",
    },
]

const setLanguage = (code: string) => {
    lang.value = code
    i18n.locale.value = code

    shouldOpen.value = false
}
</script>

<template>
    <!-- languages selector dropdown list -->

    <div class="relative text-left">
        <div
            class="relative px-2 py-1 transition-all rounded-sm"
            hover="bg-slate-700 shadow"
            :class="shouldOpen ? 'bg-stone-800' : ''"
        >
            <button @click="shouldOpen = !shouldOpen">
                <div class="i-entypo-language"></div>
            </button>
        </div>
        <div :hidden="!shouldOpen" class="absolute" right-0 py-2 px-3 rounded-sm bg-stone-800>
            <div v-for="(language, index) in languageList" :key="index" class="first:mt-0 items-center">
                <div class="ml-1 py-2 text-base text-white active:bg-stone-800">
                    <button @click="setLanguage(language.code)">
                        {{ language.name }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
