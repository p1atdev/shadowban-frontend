<script lang="ts" setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>

<template>
    <div
        class="text-center text-4xl sm:text-5xl md:text-6xl mt-16 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-blue-500 whitespace-pre-wrap"
    >
        {{ t("common.bigTitle") }}
    </div>
</template>
