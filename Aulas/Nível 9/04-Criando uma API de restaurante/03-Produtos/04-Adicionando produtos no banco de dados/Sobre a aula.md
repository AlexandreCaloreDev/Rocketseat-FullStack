# Resumo da Aula 04: Adicionando produtos no banco de dados

## Contexto (A Ponte)

Na aula 03, o resto da API já estava validando dados com Zod e tratando erros de validação. Porém, o cadastro de produto ainda era apenas uma resposta simulada, sem persistência no banco.

> Na aula 04, **implementamos persistência real no banco de dados** usando Knex e criamos uma camada de conexão centralizada para suportar operações de `insert` tipadas.

---

## O Que Foi Feito (Execução)

- **Criado** `src/database/knex.ts` para instanciar o Knex com a configuração de `knexfile.ts`
- **Importado** `knex` em `src/controllers/products-controller.ts`
- **Inserido** os dados validados em `products` com `await knex<ProductRepository>("products").insert({name, price})`
- **Adicionado** o tipo `ProductRepository` em `src/database/types/product-repository.d.ts`
- **Mantida** a validação Zod antes da persistência

---

## Detalhes da Estrutura

- `src/database/knex.ts` centraliza a conexão com o banco, evitando espalhar a configuração
- `src/database/types/product-repository.d.ts` define o shape do registro:
  - `id: number`
  - `name: string`
  - `price: number`
  - `updated_at: number`
  - `created_at: number`
- `src/controllers/products-controller.ts` agora grava `name` e `price` na tabela `products`

---

## Correções e Refatorações

- Evolução de resposta estática para persistência real no banco de dados.
- Aplicação de tipagem `knex<ProductRepository>` para reforçar a consistência do insert.
- Separação da camada de conexão em `src/database/knex.ts` melhora a organização e facilita testes.

---

## Por Que Isso Importa (Fundamentos)

- **Persistência real**: torna o cadastro de produtos uma operação efetiva, não apenas um mock.
- **Segurança de tipos**: o tipo `ProductRepository` protege contra inserções com formato incorreto.
- **Organização da camada de dados**: separar a instância do Knex aumenta a clareza e manutenção do projeto.
- **Escalabilidade**: com conexão e tipos definidos, fica mais simples adicionar novas operações CRUD.
