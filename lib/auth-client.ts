import { createAuthClient } from "better-auth/react"
import { getBaseURL } from "./get-base-url"

export const authClient = createAuthClient({
 
    baseURL: getBaseURL(),
})