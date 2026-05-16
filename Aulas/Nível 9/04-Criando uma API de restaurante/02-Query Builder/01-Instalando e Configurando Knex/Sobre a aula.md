# Sobre a Aula 01: Instalando e Configurando Knex

## Comparação com a aula anterior

Antes desta aula, o projeto já tinha configuração de API com Express e TypeScript, mas não havia integração com um query builder ou banco de dados estruturado. O foco anterior estava em organizar rotas, controladores e tratamento de erros, sem persistência real.

Nesta aula 01 do módulo Query Builder, adicionamos o Knex para criar uma camada de banco de dados mais robusta. Isso transforma o projeto de apenas um servidor de rotas para uma aplicação capaz de gerar migrations, seeds e conectar SQLite com configuração centralizada.

### 1. Ajuste no `package.json`
- Adicionamos o script `"knex": "tsx ./node_modules/knex/bin/cli.js"`.
- Esse comando evita usar o wrapper `.bin/knex` do Unix e permite rodar a CLI do Knex via `tsx` no Windows.
- Com isso, o Knex consegue carregar arquivos TypeScript como `knexfile.ts` sem erro de `Unexpected token 'export'.`

### 2. Criação do arquivo de configuração do Knex (`knexfile.ts`)
- Definimos `client: "sqlite3"` para usar SQLite como banco local.
- Configuramos `connection.filename` apontando para `./src/database/database.db`.
- Ativamos `useNullAsDefault: true`, importante para SQLite e evitação de warnings.
- Configuramos `migrations.extensions = "ts"` e `migrations.directory = "./src/database/migrations"`.
- Configuramos `seeds.extensions = "ts"` e `seeds.directory = "./src/database/seeds"`.

### Porquês das alterações
- **Compatibilidade Windows**: O script do Knex usa `tsx` em vez do executável shell `.bin/knex`, o que evita falhas no Windows.
- **Suporte TypeScript**: Ao rodar a CLI via `tsx`, o arquivo `knexfile.ts` pode ser importado diretamente sem precisar renomear para `.mjs`.
- **Organização do banco**: O `knexfile.ts` centraliza a configuração de migrations e seeds, deixando o projeto pronto para evoluir com esquema e dados iniciais.
- **Precisão de caminhos**: Corrigimos `./scr/database/database.db` para `./src/database/database.db` e `extensios` para `extensions`, evitando erros de path e propriedades.

Essas alterações transformam o projeto em uma base preparada para trabalhar com banco de dados a partir do Knex, abrindo caminho para criar migrations, seeds e executar operações de consulta seguras na próxima aula.