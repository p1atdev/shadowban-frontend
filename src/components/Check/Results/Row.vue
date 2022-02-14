<script lang="ts" setup>
import VSwitch from "@lmiller1990/v-switch"
import { Icon } from "@iconify/vue"
import checkIcon from "@iconify-icons/akar-icons/check"
import crossIcon from "@iconify-icons/akar-icons/cross"
import questionIcon from "@iconify-icons/bi/question-lg"

type Props = {
    title: string
    okMessage: string
    badMessage: string
    description: string
    status: "None" | "Loading" | "Yes" | "No" | "Unknown"
    shouldBe: "Yes" | "No"
}

const { title, description, status, shouldBe } = defineProps<Props>()
</script>

<template>
    <div flex items-center p-4 class="text-2xl md:text-3xl">
        <div px-4>
            <v-switch :case="status">
                <template #None>
                    <div class="text-blue-500">
                        <Icon :icon="questionIcon" />
                    </div>
                </template>

                <template #Loading>
                    <div class="text-blue-500 animate-spin">
                        <Icon icon="ant-design:loading-3-quarters-outlined" />
                    </div>
                </template>

                <template #Unknown> Unknown </template>

                <template #default>
                    <div v-if="status == shouldBe">
                        <div class="text-sky-600">
                            <Icon :icon="checkIcon" />
                        </div>
                    </div>
                    <div v-else>
                        <div class="text-red-500">
                            <Icon icon="ant-design:exclamation-outlined" />
                        </div>
                    </div>
                </template>
            </v-switch>
        </div>
        <div>
            <v-switch :case="status">
                <template #None>
                    {{ title }}
                </template>

                <template #Loading>
                    {{ title }}
                </template>

                <template #Unknown> Unknown </template>

                <template #default>
                    <div v-if="status == shouldBe">
                        <div class="text-sky-600">
                            {{ okMessage }}
                        </div>
                    </div>
                    <div v-else>
                        <div class="text-red-500">
                            {{ badMessage }}
                        </div>
                    </div>
                </template>
            </v-switch>
        </div>
    </div>
</template>
