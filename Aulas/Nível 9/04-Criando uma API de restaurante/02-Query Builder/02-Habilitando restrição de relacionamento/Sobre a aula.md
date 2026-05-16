# Sobre a Aula 02: Habilitando Restrição de Relacionamento

## Comparação com a Aula Anterior (01: Instalando e Configurando Knex)

Na aula 01 do Query Builder, instalamos o Knex, configuramos o script `knex` para Windows e criamos o `knexfile.ts` com SQLite e os diretórios de migrations/seeds. O foco daquela aula foi preparar o projeto para usar o Knex com TypeScript de forma estável.

Na aula 02, o foco evolui para habilitar integridade referencial no SQLite. Isso significa garantir que as chaves estrangeiras sejam de fato respeitadas pelo banco, evitando registros órfãos e aumentando a consistência dos dados.

### 1. Configuração do Knex para SQLite com FK
- Adicionamos a opção `pool.afterCreate` no `knexfile.ts`.
- Dentro de `afterCreate`, executamos `PRAGMA foreign_keys = ON` em cada nova conexão.
- Isso habilita as restrições de chave estrangeira no SQLite, que são desligadas por padrão.
- A conexão é criada pelo Knex e o `done()` é chamado logo em seguida para continuar o fluxo.

### 2. Por que essa alteração é necessária
- No SQLite, a restrição de chave estrangeira não funciona automaticamente sem o `PRAGMA`.
- Sem isso, o banco poderia aceitar um `pedido` referenciando um `produto` inexistente.
- Habilitar o `foreign_keys` transforma a validação em comportamento do banco, não apenas em regra de aplicação.

### 3. Correções e melhorias feitas hoje
- Corrigimos a sintaxe do `knexfile.ts` para garantir que o objeto de configuração seja válido.
- Mantivemos apenas os comentários pertinentes à configuração de `foreign_keys` e ao funcionamento do `pool.afterCreate`.
- O script `knex` continua usando `tsx ./node_modules/knex/bin/cli.js`, para que o Knex carregue corretamente `knexfile.ts` em um ambiente Windows.

### Porquês das alterações
- **Integridade de dados**: A aplicação passa a confiar no banco para validar relacionamentos entre tabelas.
- **Segurança**: O SQLite bloqueia inserções inválidas em tabelas relacionadas automaticamente.
- **Melhor comportamento de erro**: Quando uma referência inválida é usada, o banco lança uma exceção imediatamente.
- **Preparação para migrations futuras**: Com as chaves estrangeiras habilitadas, as próximas migrations podem criar tabelas relacionadas com confiança.

Essa aula transforma a configuração do Knex em uma base realmente relacional no SQLite, não apenas em uma camada de consulta. O projeto agora está pronto para suportar chaves estrangeiras e garantir integridade referencial entre entidades.