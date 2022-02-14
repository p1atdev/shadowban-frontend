import { useQuery } from "h3"
import config from "#config"
import type { IncomingMessage, ServerResponse } from "http"
import { IsUserExistResponse } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    // get screenName form query
    const query = useQuery(req)
    const screenName = query.screenName

    const data = await fetch(`${config.API_URL}/v1/exist?screenName=${screenName}`, {
        method: "GET",
    })

    const json: IsUserExistResponse = await data.json()

    return json
}
