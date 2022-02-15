export interface UserResponse {
    message?: string
    screenName: string
    exists: boolean
    restId?: string
    protected?: boolean
}

export interface SuggestionBanResponse {
    message?: string
    screenName?: string
    suggestionBanned?: boolean
}

export interface SearchBanResponse {
    message?: string
    screenName?: string
    searchBanned?: boolean
}

export interface ReplyBanResponse {
    message?: string
    restId: string
    ghostBanned?: boolean
    replyDeboosting?: boolean
}
