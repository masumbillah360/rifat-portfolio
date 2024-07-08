import type { Config } from "drizzle-kit";
import { config } from "./config";
export default {
  driver: "turso",
  schema: "./db/schema/index.ts",
  out: "./db/drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: config.DB_URL,
    authToken: config.DB_TOKEN,
  },
  strict: true,
  verbose: true,
} satisfies Config;
