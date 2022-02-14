import { useQuery } from "h3"
import config from "#config"
import type { IncomingMessage, ServerResponse } from "http"
import { IsUserReplyBanned } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    // get screenName form query
    const query = useQuery(req)
    const restId = query.restId

    const data = await fetch(`${config.API_URL}/v1/reply_ban?restId=${restId}`, {
        method: "GET",
    })

    const json: IsUserReplyBanned = await data.json()

    return json
}
