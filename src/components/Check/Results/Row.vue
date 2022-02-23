<script lang="ts" setup>
import { useShadowStore, UserStatus, Status, Error } from "../../../stores/shadow"
import { useTransition, TransitionPresets } from "@vueuse/core"
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

const shouldExpand = ref(false)

const source = ref(0)

const output = useTransition(source, {
    duration: 500,
    transition: TransitionPresets.easeIn,
})
</script>

<template>
    <div flex flex-col overflow-hidden>
        <div
            flex
            items-center
            p-4
            text-2xl
            md="text-3xl"
            @click="
                () => {
                    shouldExpand = !shouldExpand
                    // source = shouldExpand ? 1 : 0
                }
            "
        >
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

            <button ml-auto py-2 px-4>
                <div
                    i-akar-icons-chevron-right
                    transition="all ease-in-out"
                    :style="{ transform: 'rotate(' + (shouldExpand ? '90deg' : '0deg') + ')' }"
                ></div>
            </button>
        </div>
        <div
            transition="all"
            class="duration-150 ease-in-out"
            max-w-lg
            lg="max-w-xl"
            :style="{
                'max-height': shouldExpand ? '1000px' : '0px',
            }"
        >
            <div my-4 mx-12>
                <ClientOnly>
                    <div my-1 text-2xl>{{ title }}</div>

                    <div whitespace-pre-line display="block" :innerHTML="description"></div>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>
