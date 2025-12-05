import { createAuthClient } from "better-auth/react"
import { getBaseURL } from "./get-base-url"
import { anonymousClient, inferAdditionalFields } from "better-auth/client/plugins"
import { nextCookies } from "better-auth/next-js";
import { X } from "lucide-react";
import { auth } from "./auth";

export const authClient = createAuthClient({
 
    baseURL: getBaseURL(),
    plugins: [anonymousClient(),nextCookies(),inferAdditionalFields<typeof auth>()],
})