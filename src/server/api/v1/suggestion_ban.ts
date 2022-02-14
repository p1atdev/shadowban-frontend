import { useQuery } from "h3"
import config from "#config"
import type { IncomingMessage, ServerResponse } from "http"
import { IsUserSuggestionBanned } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    // get screenName form query
    const query = useQuery(req)
    const screenName = query.screenName

    const data = await fetch(`${config.API_URL}/v1/suggestion_ban?screenName=${screenName}`, {
        method: "GET",
    })

    const json: IsUserSuggestionBanned = await data.json()

    return json
}
