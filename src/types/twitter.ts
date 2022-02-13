export interface IsUserExistResponse {
    message?: string
    screenName: string
    restId?: string
    exist: boolean
}

export interface IsUserSuggestionBanned {
    message?: string
    screenName: string
    suggestionBanned: boolean
}

export interface IsUserGhostBanned {
    message?: string
    restId: string
    ghostBanned: boolean
}
