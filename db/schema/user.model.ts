import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  user_id: text("user_id")
    .$default(() => randomUUID().toString())
    .unique(),
  name: text("name", { length: 30 }).notNull(),
  email: text("email", { length: 30 }).notNull().unique(),
  password: text("password", { length: 16 }).notNull(),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
