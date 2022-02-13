import { useQuery } from "h3"
import type { IncomingMessage, ServerResponse } from "http"
import { IsUserGhostBanned } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    // get screenName form query
    const query = useQuery(req)
    const restId = query.restId

    const data = await fetch(`https://shadowban.deno.dev/v1/ghost_ban?restId=${restId}`, {
        method: "GET",
    })

    const json: IsUserGhostBanned = await data.json()

    return json
}
