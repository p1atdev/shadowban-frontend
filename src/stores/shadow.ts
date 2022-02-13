import { acceptHMRUpdate, defineStore } from "pinia"

export const useShadowStore = defineStore("shadowban", () => {
    type IsSo = "None" | "Loading" | "Yes" | "No"

    const restId = ref("")

    const isExist = ref<IsSo>("None")
    const isSuggestionBanned = ref<IsSo>("None")
    const isGhostBanned = ref<IsSo>("None")

    function setRestId(id: string) {
        restId.value = id
    }

    function setIsExist(whether: IsSo) {
        isExist.value = whether
    }

    function setIsSuggestionBanned(whether: IsSo) {
        isSuggestionBanned.value = whether
    }

    function setIsGhostBanned(whether: IsSo) {
        isGhostBanned.value = whether
    }

    function setAllLoading() {
        isExist.value = "Loading"
        isSuggestionBanned.value = "Loading"
        isGhostBanned.value = "Loading"
    }

    return {
        restId,
        isExist,
        isSuggestionBanned,
        isGhostBanned,
        setRestId,
        setIsExist,
        setIsSuggestionBanned,
        setIsGhostBanned,
        setAllLoading,
    }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useShadowStore, import.meta.hot))
