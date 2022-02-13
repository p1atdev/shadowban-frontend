<script lang="ts" setup>
type Props = {
    onButtonClick: (value: string) => void
}

const { onButtonClick } = defineProps<Props>()

const screenName = ref("")
</script>

<template>
    <div class="py-20 grid place-items-center">
        <form flex class="items-center" @submit.prevent="onButtonClick(screenName)">
            <div select="none" class="text-blue-700 text-5xl">@</div>
            <div class="mx-3 w-40 md:w-60 lg:w-80">
                <input
                    type="text"
                    class="w-full text-gray-700 text-3xl lg:text-5xl border-b focus:outline-none border-b-3 border-gray-400 focus:border-sky-600"
                    placeholder="twitter"
                    v-model="screenName"
                />
            </div>
            <button class="bg-blue-600 hover:shadow-md rounded-sm -py-4" type="submit">
                <div class="text-4xl text-white i-carbon-chevron-right"></div>
            </button>
        </form>
    </div>
</template>
