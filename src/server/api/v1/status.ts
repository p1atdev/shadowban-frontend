import { useQuery } from "h3"
import config from "#config"
import type { IncomingMessage, ServerResponse } from "http"
import { StatusResponse } from "~~/src/types/twitter"

export default async (req: IncomingMessage) => {
    const data = await fetch(`${config.API_URL}/status`, {
        method: "GET",
    })

    const json: StatusResponse = await data.json()

    return json
}
