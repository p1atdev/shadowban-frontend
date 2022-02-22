import { useBody } from "h3"
import config from "#config"
import type { IncomingMessage, ServerResponse } from "http"
import { SuggestionBanResponse } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    // get screenName form query
    const body = await useBody(req)
    const screenName = body.screenName
    const guestToken = body.guestToken
    const queries = body.queries

    const data = await fetch(`${config.API_URL}/v2/suggestion_ban`, {
        method: "POST",
        body: JSON.stringify({ screenName: screenName, guestToken: guestToken, queries: queries }),
    })

    const json: SuggestionBanResponse = await data.json()

    return json
}
