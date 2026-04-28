import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("courses",(table) =>{
    table.increments("id").primary(), //adicionamos métodos para definir suas caracteristica
    table.text("name").notNullable,
    table.timestamp("created_at").defaultTo(knex.fn.now())
  })
} //Responsavel por enviar a função ao banco


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("courses")
} //Responsavel por desfazer alguma alteração do dbe

