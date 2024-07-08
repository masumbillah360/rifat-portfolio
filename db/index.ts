import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "@/db/schema";
import { config } from "@/config";

const client = createClient({
  url: config.DB_URL,
  authToken: config.DB_TOKEN,
});

export const db = drizzle(client, {
  schema: schema,
  logger: true,
});
