<script lang="ts" setup>
import { Icon } from "@iconify/vue"

type Props = {
    onButtonClick: (value: string) => void
    defaultScreenName?: string
}

const { onButtonClick, defaultScreenName } = defineProps<Props>()

const screenName = ref(defaultScreenName)
</script>

<template>
    <div class="py-20 grid place-items-center">
        <form flex class="items-center" @submit.prevent="onButtonClick(screenName)">
            <div select="none" class="text-blue-700 text-5xl">@</div>
            <div class="mx-3 w-50 md:w-70 lg:w-90">
                <input
                    type="text"
                    class="appearance-none w-full text-gray-700 text-2xl md:text-3xl lg:text-4xl border-b focus:outline-none border-b-3 border-gray-400 focus:border-sky-600"
                    placeholder="twitter"
                    v-model="screenName"
                />
            </div>
            <button class="bg-blue-600 hover:shadow-md rounded-sm -py-4" type="submit">
                <div class="text-4xl text-white p-1">
                    <Icon icon="akar-icons:chevron-right" />
                </div>
            </button>
        </form>
    </div>
</template>
