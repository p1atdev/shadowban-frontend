import { useQuery } from "h3"
import type { IncomingMessage, ServerResponse } from "http"
import { IsUserSuggestionBanned } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    // get screenName form query
    const query = useQuery(req)
    const screenName = query.screenName

    const data = await fetch(`https://shadowban.deno.dev/v1/suggestion_ban?screenName=${screenName}`, {
        method: "GET",
    })

    const json: IsUserSuggestionBanned = await data.json()

    return json
}
