export interface IsUserExistResponse {
    message?: string
    screenName?: string
    restId?: string
    exist?: boolean
}

export interface IsUserSuggestionBanned {
    message?: string
    screenName?: string
    suggestionBanned?: boolean
}

export interface IsUserReplyBanned {
    message?: string
    restId: string
    ghostBanned?: boolean
    replyDeboosting?: boolean
}
