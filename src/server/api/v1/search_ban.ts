import { useQuery } from "h3"
import config from "#config"
import type { IncomingMessage, ServerResponse } from "http"
import { SearchBanResponse } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    // get screenName form query
    const query = useQuery(req)
    const screenName = query.screenName

    const data = await fetch(`${config.API_URL}/v1/search_ban?screenName=${screenName}`, {
        method: "GET",
    })

    const json: SearchBanResponse = await data.json()

    return json
}
