import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import { nanoid } from "nanoid";
import { getBaseURL } from "./get-base-url";

export const auth = betterAuth({
    baseURL: getBaseURL(),
    database: drizzleAdapter(db, {
        provider: "pg", 
        usePlural: true,
    }),
    advanced: {
        database: {
            generateId: () => nanoid(10),
        }
    }
});