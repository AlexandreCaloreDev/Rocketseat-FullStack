import type { Knex } from "knex";

// Função executada ao aplicar a migration
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("products", (table) => {
    table.increments("id").primary() // ID auto-incrementado como chave primária
    table.text("name").notNullable() // Nome do produto obrigatório
    table.decimal("price").notNullable() // Preço do produto obrigatório
    table.timestamp("created_at").defaultTo(knex.fn.now()) // Data de criação com valor padrão agora
    table.timestamp("updated_at").defaultTo(knex.fn.now()) // Data de atualização com valor padrão agora
  })
}

// Função executada ao desfazer a migration (rollback)
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("products") // Remove a tabela de produtos
}

