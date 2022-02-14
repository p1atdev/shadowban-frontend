<script lang="ts" setup>
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

const getIsSuggestionBanned = async (screenName: string): Promise<boolean> => {
    const { data } = await useFetch(`/api/v1/suggestion_ban`, {
        method: "GET",
        params: {
            screenName: screenName,
        },
    })

    return data.value.suggestionBanned
}

const getIsReplyBanned = async (): Promise<{ ghostBan?: boolean; deboosting?: boolean }> => {
    const { data } = await useFetch(`/api/v1/reply_ban`, {
        method: "GET",
        params: {
            restId: shadow.restId,
        },
    })

    return {
        ghostBan: data.value.ghostBanned,
        deboosting: data.value.replyDeboosting,
    }
}

const startCheck = async (screenName: string) => {
    shadow.setIsExist("Loading")
    shadow.setAll("Loading")

    shadow.setIsExist((await getIsExist(screenName)) ? "Yes" : "No")

    if (shadow.isExist == "Yes") {
        getIsSuggestionBanned(screenName).then((isSuggestionBanned) => {
            shadow.setIsSuggestionBanned(isSuggestionBanned ? "Yes" : "No")
        })
        getIsReplyBanned().then((isReplyBanned) => {
            shadow.setIsReplyBanned(isReplyBanned)
        })
    } else {
        shadow.setAll("None")
        shadow.setIsExist("No")
    }
}
</script>

<template>
    <div class="">
        <BigTitle />
        <CheckInputBox :onButtonClick="startCheck" />
        <div class="grid place-items-center">
            <!-- <div>restId: {{ restId }}</div> -->
            <CheckResults />
        </div>
    </div>
</template>
