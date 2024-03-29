import { acceptHMRUpdate, defineStore } from "pinia"
import {
    ReplyBanResponse,
    SearchBanResponse,
    SuggestionBanResponse,
    StatusResponse,
    UserResponse,
} from "../types/twitter"

export type UserStatus = "None" | "Loading" | "Public" | "DoesNotExist" | "Protected" | "NoTweets"
export type Status = "None" | "Loading" | "Yes" | "No" | "Unknown"

export type Error = "None" | "NetworkError"

export const useShadowStore = defineStore("shadowban", () => {
    const serverStatus = ref<StatusResponse>({ message: "", status: "", available: true })
    const error = ref<Error>("None")

    const user = ref<UserResponse>({ screenName: "twitter", exists: true })

    const isProtected = ref<Status>("None")

    const userStatus = ref<UserStatus>("None")
    const suggestionBanStatus = ref<Status>("None")
    const ghostBanStatus = ref<Status>("None")
    const replyDeboostStatus = ref<Status>("None")
    const searchBanStatus = ref<Status>("None")

    function setUserStatus(status: UserStatus) {
        userStatus.value = status
    }

    function setUserStatusFromUser() {
        if (!user.value.exists) {
            userStatus.value = "DoesNotExist"
        } else if (user.value.protected) {
            userStatus.value = "Protected"
        } else if (!user.value.hasTweets) {
            userStatus.value = "NoTweets"
        } else {
            userStatus.value = "Public"
        }
    }

    function setError(status: Error) {
        error.value = status
    }

    function setSuggestionBanStatus(data: SuggestionBanResponse) {
        if (data.banned !== undefined) {
            suggestionBanStatus.value = data.banned! ? "Yes" : "No"
        } else {
            suggestionBanStatus.value = "Unknown"
        }
    }

    function setSearchBanStatus(data: SearchBanResponse) {
        if (data.banned !== undefined) {
            searchBanStatus.value = data.banned! ? "Yes" : "No"
        } else {
            searchBanStatus.value = "Unknown"
        }
    }

    function setReplyBanStatus(data: ReplyBanResponse) {
        if (data.ghostBanned !== undefined) {
            ghostBanStatus.value = data.ghostBanned ? "Yes" : "No"
        } else {
            ghostBanStatus.value = "Unknown"
        }
        if (data.replyDeboosting !== undefined) {
            replyDeboostStatus.value = data.replyDeboosting ? "Yes" : "No"
        } else {
            replyDeboostStatus.value = "Unknown"
        }
    }

    function setAll(status: Status) {
        suggestionBanStatus.value = status
        searchBanStatus.value = status
        ghostBanStatus.value = status
        replyDeboostStatus.value = status
    }

    const getServerStatus = async () => {
        const { data } = await useFetch(`/api/v2/status`, {
            method: "GET",
        })

        serverStatus.value = data.value
    }

    const getUser = async (screenName: string) => {
        const { data } = await useFetch(`/api/v2/user`, {
            method: "POST",
            body: {
                screenName: screenName,
            },
        })

        user.value = data.value
    }

    const getSuggestionBan = async () => {
        const { data } = await useFetch(`/api/v2/suggestion_ban`, {
            method: "POST",
            body: {
                screenName: user.value.screenName,
                guestToken: user.value.guestToken,
                queries: user.value.queries,
            },
        })

        setSuggestionBanStatus(data.value)
    }

    const getSearchBan = async () => {
        const { data } = await useFetch(`/api/v2/search_ban`, {
            method: "POST",
            body: {
                screenName: user.value.screenName,
                guestToken: user.value.guestToken,
                queries: user.value.queries,
            },
        })

        setSearchBanStatus(data.value)
    }

    const getReplyBan = async () => {
        const { data } = await useFetch(`/api/v2/reply_ban`, {
            method: "POST",
            body: {
                restId: user.value.restId,
                guestToken: user.value.guestToken,
                queries: user.value.queries,
            },
        })

        setReplyBanStatus(data.value)
    }

    return {
        serverStatus,
        user,
        error,
        isProtected,
        userStatus,
        suggestionBanStatus,
        searchBanStatus,
        ghostBanStatus,
        replyDeboostStatus,
        setUserStatus,
        setUserStatusFromUser,
        setError,
        setSuggestionBanStatus,
        setSearchBanStatus,
        setReplyBanStatus,
        setAll,
        getUser,
        getServerStatus,
        getSuggestionBan,
        getSearchBan,
        getReplyBan,
    }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useShadowStore, import.meta.hot))
