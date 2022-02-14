import { acceptHMRUpdate, defineStore } from "pinia"

export const useShadowStore = defineStore("shadowban", () => {
    type IsSo = "None" | "Loading" | "Yes" | "No" | "Unknown"

    const restId = ref("")

    const isExist = ref<IsSo>("None")
    const isSuggestionBanned = ref<IsSo>("None")
    const isGhostBanned = ref<IsSo>("None")
    const isInReplyDeboosting = ref<IsSo>("None")

    function setRestId(id: string) {
        restId.value = id
    }

    function setIsExist(whether: IsSo) {
        isExist.value = whether
    }

    function setIsSuggestionBanned(whether: IsSo) {
        isSuggestionBanned.value = whether
    }

    function setIsReplyBanned(data: { ghostBan?: boolean; deboosting?: boolean }) {
        if (data.ghostBan !== undefined) {
            isGhostBanned.value = data.ghostBan ? "Yes" : "No"
        } else {
            isGhostBanned.value = "Unknown"
        }
        if (data.deboosting !== undefined) {
            isInReplyDeboosting.value = data.deboosting ? "Yes" : "No"
        } else {
            isInReplyDeboosting.value = "Unknown"
        }
    }

    function setAll(status: "Loading" | "Yes" | "No" | "Unknown") {
        isExist.value = status
        isSuggestionBanned.value = status
        isGhostBanned.value = status
        isInReplyDeboosting.value = status
    }

    return {
        restId,
        isExist,
        isSuggestionBanned,
        isGhostBanned,
        isInReplyDeboosting,
        setRestId,
        setIsExist,
        setIsSuggestionBanned,
        setIsReplyBanned,
        setAll,
    }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useShadowStore, import.meta.hot))
