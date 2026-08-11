import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("orders", (table) => {
    table.increments("id_order").primary(),
    table.integer("table_session").references("table_id").inTable("tables_session").notNullable,
    table.integer("table_product").references("id").inTable("products").notNullable,
    table.integer("quantity").notNullable,
    table.decimal("price").notNullable,
    table.timestamp("created_at").defaultTo(knex.fn.now()),
    table.timestamp("updated_at").defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("orders")
}

