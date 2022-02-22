export interface UserResponse {
    message?: string
    screenName: string
    exists: boolean
    restId?: string
    protected?: boolean
    hasTweets?: boolean
    guestToken?: string
    queries?: Object
}

export interface SuggestionBanResponse {
    message?: string
    screenName?: string
    banned?: boolean
}

export interface SearchBanResponse {
    message?: string
    screenName?: string
    banned?: boolean
}

export interface ReplyBanResponse {
    message?: string
    restId: string
    ghostBanned?: boolean
    replyDeboosting?: boolean
}

export interface StatusResponse {
    message: string
    status: string
    available: boolean
}
