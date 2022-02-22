<script lang="ts" setup>
import { useShadowStore, UserStatus, Status, Error } from "../../../stores/shadow"
import VSwitch from "@lmiller1990/v-switch"

type Props = {
    title: string
    okMessage: string
    badMessage: string
    protectedMessage?: string
    noTweetMessage?: string
    networkErrorMessage?: string
    unknownMessage?: string
    description: string
    status: Status | UserStatus
    shouldBe: Status | UserStatus
}

const { title, description, status, shouldBe } = defineProps<Props>()

const shadow = useShadowStore()
</script>

<template>
    <div flex items-center p-4 class="text-2xl md:text-3xl">
        <div px-4>
            <div v-if="shadow.error == 'NetworkError'">
                <div class="text-orange-500">
                    <div class="i-bi-question-lg" />
                </div>
            </div>
            <div v-else-if="shadow.userStatus == 'Protected' && protectedMessage">
                <div class="text-orange-500">
                    <div class="i-dashicons-lock" />
                </div>
            </div>
            <div v-else>
                <v-switch :case="status">
                    <template #None>
                        <div class="text-blue-500">
                            <div class="i-bi-question-lg" />
                        </div>
                    </template>

                    <template #Loading>
                        <div class="text-blue-500 animate-spin">
                            <div class="i-ant-design-loading-3-quarters-outlined" />
                        </div>
                    </template>

                    <template #Unknown>
                        <div class="text-orange-500">
                            <div class="i-bi-question-lg" />
                        </div>
                    </template>

                    <template #NoTweets>
                        <div class="text-orange-500">
                            <div class="i-charm-triangle" />
                        </div>
                    </template>

                    <template #default>
                        <div v-if="status == shouldBe">
                            <div class="text-sky-600">
                                <div class="i-akar-icons-check" />
                            </div>
                        </div>
                        <div v-else>
                            <div class="text-red-500">
                                <div class="i-ant-design-exclamation-outlined" />
                            </div>
                        </div>
                    </template>
                </v-switch>
            </div>
        </div>
        <div>
            <div v-if="shadow.error == 'NetworkError'" class="text-orange-500">
                {{ networkErrorMessage || title }}
            </div>
            <div v-else-if="shadow.userStatus == 'Protected' && protectedMessage" class="text-orange-500">
                {{ protectedMessage || title }}
            </div>
            <div v-else>
                <v-switch :case="status">
                    <template #None>
                        <div class="text-gray-700 dark:text-gray-200">
                            {{ title }}
                        </div>
                    </template>

                    <template #Loading>
                        <div class="text-gray-700 dark:text-gray-200">
                            {{ title }}
                        </div>
                    </template>

                    <template #Unknown>
                        <div class="text-orange-500">
                            {{ unknownMessage || title }}
                        </div>
                    </template>

                    <template #NoTweets>
                        <div class="text-orange-500">
                            {{ noTweetMessage || title }}
                        </div>
                    </template>

                    <template #default>
                        <div v-if="status == shouldBe">
                            <div class="text-sky-600 dark:text-sky-100">
                                {{ okMessage }}
                            </div>
                        </div>
                        <div v-else>
                            <div class="text-red-500 text-center">
                                {{ badMessage }}
                            </div>
                        </div>
                    </template>
                </v-switch>
            </div>
        </div>
    </div>
</template>
