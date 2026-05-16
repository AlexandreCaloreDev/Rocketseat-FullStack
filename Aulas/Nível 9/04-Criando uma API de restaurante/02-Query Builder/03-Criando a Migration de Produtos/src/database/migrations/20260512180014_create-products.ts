import type { Knex } from "knex"

// Migration do módulo 03: cria a tabela `products` após habilitar o suporte a foreign keys.
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("products", (table) => {
    // ID numérico auto-incremental com restrição de chave primária
    table.increments("id").primary()

    // Coluna de nome do produto, texto obrigatório sem valor nulo
    table.text("name").notNullable()

    // Coluna de preço, decimal obrigatório e sem valor nulo
    table.decimal("price").notNullable()

    // Timestamp de criação com valor padrão definido no momento da inserção
    table.timestamp("created_at").defaultTo(knex.fn.now())

    // Timestamp de atualização com valor padrão definido no momento da inserção
    table.timestamp("updated_at").defaultTo(knex.fn.now())
  })
}

// Rollback da migration: remove a tabela `products` do esquema
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("products")
}

