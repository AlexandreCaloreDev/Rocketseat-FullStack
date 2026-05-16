# Resumo da Aula 03: Criando a Migration de Produtos

## Contexto (A Ponte)

Na aula 02, habilitamos restrições de chave estrangeira no SQLite com `PRAGMA foreign_keys = ON`, preparando o ambiente para consistência referencial. Ainda não existia nenhuma tabela de dados no banco.

> Na aula 03, **avançamos para o módulo de schema**: criamos a migration que define a tabela `products` e seus campos, tornando o banco apto a armazenar produtos e suportar as operações CRUD futuras.

### 1. Criação da Migration `20260512180014_create-products.ts`
- O arquivo segue o padrão de nome do Knex: `TIMESTAMP_nome-da-migration.ts`
- Exporta as duas funções obrigatórias do Knex:
  - `up()`: aplica a alteração de esquema para criar a tabela `products`
  - `down()`: desfaz a alteração removendo a tabela `products`

### 2. Estrutura da Tabela de Produtos
- `id`: `increments().primary()` — chave primária auto-incremental
- `name`: `text().notNullable()` — campo obrigatório de texto para o nome do produto
- `price`: `decimal().notNullable()` — campo obrigatório de valor numérico
- `created_at`: `timestamp().defaultTo(knex.fn.now())` — data de criação padrão com timestamp atual
- `updated_at`: `timestamp().defaultTo(knex.fn.now())` — data de atualização padrão com timestamp atual

### 3. Novos elementos aplicados nesta aula
- `createTable()`: criação de tabela diretamente na migration
- `increments()` + `primary()`: definição de ID auto-incremental como chave primária
- `notNullable()`: obrigatoriedade de campos para evitar valores nulos
- `defaultTo(knex.fn.now())`: timestamps automáticos de criação e atualização
- `down()`: rollback explícito para reversão de esquema

### Por que isso importa
- **Versionamento de esquema**: o banco passa a ter histórico de alterações controlado por migrations
- **Rollback seguro**: permite desfazer a criação da tabela sem alterar outras partes do banco
- **Prontidão para CRUD**: a tabela `products` agora existe para suportar inserções, consultas e alterações
- **Separação de responsabilidades**: a migration trata apenas a definição do schema, mantendo a lógica de aplicação separada

Essa aula consolida a transição de configuração para definição de dados: o banco agora tem uma tabela `products` com campos validados e timestamps automáticos, pronto para ser consumido pela API.