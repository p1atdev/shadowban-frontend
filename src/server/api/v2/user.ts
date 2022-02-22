import { useBody } from "h3"
import config from "#config"
import type { IncomingMessage, ServerResponse } from "http"
import { UserResponse } from "~~/src/types/twitter"

export default async (req: IncomingMessage): Promise<UserResponse> => {
    // get screenName form query
    const body = await useBody(req)
    const screenName = body.screenName
    const guestToken = body.guestToken
    const queries = body.queries

    const data = await fetch(`${config.API_URL}/v2/user`, {
        method: "POST",
        body: JSON.stringify({ screenName: screenName, guestToken: guestToken, queries: queries }),
    })

    const json: UserResponse = await data.json()

    return json
}
