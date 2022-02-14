<script setup lang="ts">
import { onMounted } from "vue"
import { useShadowStore } from "~/stores/shadow"

const shadow = useShadowStore()
const route = useRoute()

if (typeof route.params.screenName !== "string") {
    const router = useRouter()
    router.push("/")
}

const screenName: string = route.params.screenName.toString()

const getIsExist = async (screenName: string): Promise<boolean> => {
    try {
        const { data } = await useFetch(`/api/v1/exist`, {
            method: "GET",
            params: {
                screenName: screenName,
            },
        })

        shadow.setRestId(data.value.restId)

        return data.value.exist
    } catch (e) {
        console.error(e)
        return false
    }
}

const getIsSuggestionBanned = async (screenName: string): Promise<boolean> => {
    try {
        const { data } = await useFetch(`/api/v1/suggestion_ban`, {
            method: "GET",
            params: {
                screenName: screenName,
            },
        })

        return data.value.suggestionBanned
    } catch (e) {
        console.error(e)
        return false
    }
}

const getIsReplyBanned = async (): Promise<{ ghostBan?: boolean; deboosting?: boolean }> => {
    try {
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
    } catch (e) {
        console.error(e)
        return {
            ghostBan: false,
            deboosting: false,
        }
    }
}

const startCheck = async (screenName: string) => {
    shadow.setIsExist("Loading")
    shadow.setAllLoading()

    shadow.setIsExist((await getIsExist(screenName)) ? "Yes" : "No")

    if (shadow.isExist == "Yes") {
        getIsSuggestionBanned(screenName).then((isSuggestionBanned) => {
            shadow.setIsSuggestionBanned(isSuggestionBanned ? "Yes" : "No")
            console.log(isSuggestionBanned)
        })
        getIsReplyBanned().then((isReplyBanned) => {
            shadow.setIsReplyBanned(isReplyBanned)
        })
    }
}

await startCheck(screenName)
</script>

<template>
    <BigTitle />
    <CheckInputBox
        :onButtonClick="
            (value) => {
                startCheck(value)
            }
        "
        :defaultScreenName="screenName"
    />
    <ClientOnly>
        <CheckResults />
    </ClientOnly>
</template>
