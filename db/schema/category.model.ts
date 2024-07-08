import { randomUUID } from "crypto";
import { content } from "./content.model";
import { relations, sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const category = sqliteTable("category", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  category_id: text("category_id")
    .$default(() => randomUUID().toString())
    .unique(),
  category: text("category", { length: 50 }).notNull().unique(),
  description: text("description", { length: 150 }),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const categoryRelations = relations(category, ({ many }) => ({
  posts: many(content),
}));
