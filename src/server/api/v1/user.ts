import { useQuery } from "h3"
import config from "#config"
import type { IncomingMessage, ServerResponse } from "http"
import { UserResponse } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    // get screenName form query
    const query = useQuery(req)
    const screenName = query.screenName

    const data = await fetch(`${config.API_URL}/v1/user?screenName=${screenName}`, {
        method: "GET",
    })

    const json: UserResponse = await data.json()

    return json
}
