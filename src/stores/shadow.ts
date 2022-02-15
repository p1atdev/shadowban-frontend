import { acceptHMRUpdate, defineStore } from "pinia"
import { ReplyBanResponse, SearchBanResponse, SuggestionBanResponse } from "../types/twitter"

export const useShadowStore = defineStore("shadowban", () => {
    type IsSo = "None" | "Loading" | "Yes" | "No" | "Unknown"

    const restId = ref("")

    const isProtected = ref<IsSo>("None")

    const isExist = ref<IsSo>("None")
    const isSuggestionBanned = ref<IsSo>("None")
    const isGhostBanned = ref<IsSo>("None")
    const isReplyDeboosted = ref<IsSo>("None")
    const isSearchBanned = ref<IsSo>("None")

    function setRestId(id: string) {
        restId.value = id
    }

    function setIsProtected(whether: IsSo) {
        isProtected.value = whether
    }

    function setIsExist(whether: IsSo) {
        isExist.value = whether
    }

    function setIsSuggestionBanned(data: SuggestionBanResponse) {
        if (data.suggestionBanned !== undefined) {
            isSuggestionBanned.value = data.suggestionBanned! ? "Yes" : "No"
        } else {
            isSuggestionBanned.value = "Unknown"
        }
    }

    function setIsSearchBanned(data: SearchBanResponse) {
        console.log(data)
        if (data.searchBanned !== undefined) {
            isSearchBanned.value = data.searchBanned! ? "Yes" : "No"
        } else {
            isSearchBanned.value = "Unknown"
        }
    }

    function setIsReplyBanned(data: ReplyBanResponse) {
        if (data.ghostBanned !== undefined) {
            isGhostBanned.value = data.ghostBanned ? "Yes" : "No"
        } else {
            isGhostBanned.value = "Unknown"
        }
        if (data.replyDeboosting !== undefined) {
            isReplyDeboosted.value = data.replyDeboosting ? "Yes" : "No"
        } else {
            isReplyDeboosted.value = "Unknown"
        }
    }

    function setAll(status: "None" | "Loading" | "Yes" | "No" | "Unknown") {
        isExist.value = status
        isSuggestionBanned.value = status
        isSearchBanned.value = status
        isGhostBanned.value = status
        isReplyDeboosted.value = status
    }

    return {
        restId,
        isProtected,
        isExist,
        isSuggestionBanned,
        isSearchBanned,
        isGhostBanned,
        isReplyDeboosted,
        setRestId,
        setIsProtected,
        setIsExist,
        setIsSuggestionBanned,
        setIsSearchBanned,
        setIsReplyBanned,
        setAll,
    }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useShadowStore, import.meta.hot))
