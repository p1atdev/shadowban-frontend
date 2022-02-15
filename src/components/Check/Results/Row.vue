<script lang="ts" setup>
import { useShadowStore } from "../../../stores/shadow"
import VSwitch from "@lmiller1990/v-switch"
import { Icon } from "@iconify/vue"

type Props = {
    title: string
    okMessage: string
    badMessage: string
    description: string
    status: "None" | "Loading" | "Yes" | "No" | "Unknown"
    shouldBe: "Yes" | "No"
}

const { title, description, status, shouldBe } = defineProps<Props>()

const shadow = useShadowStore()

const isProtected = shadow.isProtected
</script>

<template>
    <div flex items-center p-4 class="text-2xl md:text-3xl">
        <div px-4>
            <v-switch :case="status">
                <template #None>
                    <div class="text-blue-500">
                        <Icon icon="bi:question-lg" />
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
                            <Icon icon="akar-icons:check" />
                        </div>
                    </div>
                    <div v-else>
                        <div class="text-red-500">
                            <Icon icon="ant-design:exclamation-outlined" />
                        </div>
                    </div>
                </template>
            </v-switch>
            <div v-if="isProtected == 'Yes'">
                <div class="text-yellow-500">
                    <Icon icon="bi:question-lg" />
                </div>
            </div>
        </div>
        <div>
            <v-switch :case="status">
                <template #None>
                    <div class="text-gray-700">
                        {{ title }}
                    </div>
                </template>

                <template #Loading>
                    <div class="text-gray-700">
                        {{ title }}
                    </div>
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
            <div v-if="isProtected == 'Yes'" class="text-yellow-500">
                {{ title }}
            </div>
        </div>
    </div>
</template>
