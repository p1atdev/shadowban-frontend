<script lang="ts" setup>
import { useShadowStore } from "~/stores/shadow"
import { UserResponse, SuggestionBanResponse, SearchBanResponse, ReplyBanResponse } from "../types/twitter"

const shadow = useShadowStore()

const getUser = async (screenName: string): Promise<UserResponse> => {
    const { data } = await useFetch(`/api/v1/user`, {
        method: "GET",
        params: {
            screenName: screenName,
        },
    })

    shadow.setRestId(data.value.restId)
    shadow.setIsProtected(data.value.protected)

    return data.value
}

const getSuggestionBan = async (screenName: string): Promise<SuggestionBanResponse> => {
    const { data } = await useFetch(`/api/v1/suggestion_ban`, {
        method: "GET",
        params: {
            screenName: screenName,
        },
    })

    return data.value
}

const getSearchBan = async (screenName: string): Promise<SearchBanResponse> => {
    const { data } = await useFetch(`/api/v1/search_ban`, {
        method: "GET",
        params: {
            screenName: screenName,
        },
    })

    return data.value
}

const getReplyBan = async (): Promise<ReplyBanResponse> => {
    const { data } = await useFetch(`/api/v1/reply_ban`, {
        method: "GET",
        params: {
            restId: shadow.restId,
        },
    })

    return data.value
}

const startCheck = async (screenName: string) => {
    shadow.setIsExist("Loading")
    shadow.setAll("Loading")

    const user = await getUser(screenName)
    shadow.setIsExist(user.exists ? "Yes" : "No")
    shadow.setIsProtected(user.protected ? "Yes" : "No")

    if (shadow.isExist == "Yes") {
        getSuggestionBan(screenName).then((isSuggestionBanned) => {
            shadow.setIsSuggestionBanned(isSuggestionBanned)
        })
        if (!user.protected) {
            getSearchBan(screenName).then((isSearchBanned) => {
                shadow.setIsSearchBanned(isSearchBanned)
            })
            getReplyBan().then((isReplyBanned) => {
                shadow.setIsReplyBanned(isReplyBanned)
            })
        }
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
