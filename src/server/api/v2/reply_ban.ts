import { useBody } from "h3"
import config from "#config"
import type { IncomingMessage, ServerResponse } from "http"
import { ReplyBanResponse } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    // get screenName form query
    const body = await useBody(req)
    const restId = body.restId
    const guestToken = body.guestToken
    const queries = body.queries

    const data = await fetch(`${config.API_URL}/v2/reply_ban`, {
        method: "POST",
        body: JSON.stringify({ restId: restId, guestToken: guestToken, queries: queries }),
    })

    const json: ReplyBanResponse = await data.json()

    return json
}
