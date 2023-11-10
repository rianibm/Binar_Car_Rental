import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.decimal("price");
    table.string("size");
    table.string("image");
    table.string("created_at");
    table.string("updated_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}
