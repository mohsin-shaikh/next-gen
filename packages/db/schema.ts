import { pgTable, integer, varchar } from 'drizzle-orm/pg-core';
 
export const countriesTable = pgTable('countries', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
  }
);

// Type Example:
export type NewCountry = typeof countriesTable.$inferInsert;
