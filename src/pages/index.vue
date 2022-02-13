<script lang="ts" setup>
import CheckResults from "../components/CheckResults.vue"
import { useShadowStore } from "~/stores/shadow"

const shadow = useShadowStore()

const getIsExist = async (screenName: string): Promise<boolean> => {
    const { data } = await useFetch(`/api/v1/exist`, {
        method: "GET",
        params: {
            screenName: screenName,
        },
    })

    shadow.setRestId(data.value.restId)

    return data.value.exist
}

const getisSuggestionBanned = async (screenName: string): Promise<boolean> => {
    const { data } = await useFetch(`/api/v1/suggestion_ban`, {
        method: "GET",
        params: {
            screenName: screenName,
        },
    })

    return data.value.suggestionBanned
}

const getIsUserGhostBanned = async (screenName: string): Promise<boolean> => {
    const { data } = await useFetch(`/api/v1/ghost_ban`, {
        method: "GET",
        params: {
            restId: shadow.restId,
        },
    })

    return data.value.ghostBanned
}

const onNextButtonClick = async (value: string) => {
    shadow.setAllLoading()

    shadow.setIsExist((await getIsExist(value)) ? "Yes" : "No")

    if (shadow.isExist == "Yes") {
        shadow.setIsSuggestionBanned((await getisSuggestionBanned(value)) ? "Yes" : "No")
        shadow.setIsGhostBanned((await getIsUserGhostBanned(value)) ? "Yes" : "No")
    }
}
</script>

<template>
    <div class="">
        <BigTitle />
        <CheckInputBox :onButtonClick="onNextButtonClick" />

        <div class="grid place-items-center">
            <!-- <div>restId: {{ restId }}</div> -->
            <ClientOnly>
                <CheckResults />
            </ClientOnly>
        </div>
    </div>
</template>
