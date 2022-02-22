<script lang="ts" setup>
import { useShadowStore } from "~~/src/stores/shadow"

type Props = {
    onButtonClick: (value: string) => void
    initialScreenName?: string
}

const { onButtonClick, initialScreenName = "" } = defineProps<Props>()

const screenName = ref(initialScreenName)

const shadow = useShadowStore()
</script>

<template>
    <div class="py-12 grid place-items-center">
        <form flex class="items-center" @submit.prevent="onButtonClick(screenName)">
            <div select="none" class="text-blue-700 dark:text-blue-400 text-5xl">@</div>
            <div class="mx-3 w-50 md:w-70 lg:w-90">
                <input
                    type="text"
                    class="appearance-none w-full py-1 px-1.5 text-gray-700 disabled:text-gray-400 dark:disabled:text-gray-600 dark:text-gray-100 dark:placeholder:text-gray-500 text-2xl md:text-3xl lg:text-4xl border-b focus:outline-none border-b-3 border-gray-400 dark:border-gray-600 focus:border-sky-600 dark:focus:border-sky-300 dark:bg-transparent"
                    placeholder="twitter"
                    v-model="screenName"
                    :disabled="shadow.userStatus == 'Loading'"
                />
            </div>
            <button
                class="bg-blue-600 disabled:bg-gray-400 dark:disabled:bg-gray-700 text-white dark:disabled:text-gray-500 enabled:hover:shadow-md rounded-sm -py-4"
                type="submit"
                :disabled="screenName == '' || shadow.userStatus == 'Loading'"
            >
                <div class="text-4xl p-1">
                    <div class="i-akar-icons-chevron-right" />
                </div>
            </button>
        </form>
    </div>
</template>
