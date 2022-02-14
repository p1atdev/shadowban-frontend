<script setup lang="ts">
import { useShadowStore } from "~/stores/shadow"

const shadow = useShadowStore()
const route = useRoute()

const screenName = route.params.screenName

const getIsExist = async (): Promise<boolean> => {
    const { data } = await useFetch(`/api/v1/exist`, {
        method: "GET",
        params: {
            screenName: screenName,
        },
    })

    shadow.setRestId(data.value.restId)

    return data.value.exist
}

const getIsSuggestionBanned = async (): Promise<boolean> => {
    const { data } = await useFetch(`/api/v1/suggestion_ban`, {
        method: "GET",
        params: {
            screenName: screenName,
        },
    })

    return data.value.suggestionBanned
}

const getIsGhostBanned = async (): Promise<boolean> => {
    const { data } = await useFetch(`/api/v1/ghost_ban`, {
        method: "GET",
        params: {
            restId: shadow.restId,
        },
    })

    return data.value.ghostBanned
}

shadow.setIsExist("Loading")
shadow.setAllLoading()

shadow.setIsExist((await getIsExist()) ? "Yes" : "No")

if (shadow.isExist) {
    shadow.setIsSuggestionBanned((await getIsSuggestionBanned()) ? "Yes" : "No")
    shadow.setIsGhostBanned((await getIsGhostBanned()) ? "Yes" : "No")
}
</script>

<template>
    <BigTitle />
    <CheckInputBox :onButtonClick="() => {}" />
    <Suspense>
        <!-- <div class="grid grid-items-center">
            <p>User: {{ screenName }}</p>
            <p>exist: {{ shadow.isExist }}</p>
            <p>suggestion ban: {{ shadow.isSuggestionBanned }}</p>
            <p>ghost ban: {{ shadow.isGhostBanned }}</p>
        </div> -->
        <CheckResults />
    </Suspense>
</template>
