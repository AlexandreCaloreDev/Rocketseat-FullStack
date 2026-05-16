# Resumo da Aula 01: Criando a Conexão com o Banco de Dados

## Contexto (A Ponte)

Na aula 03, **definimos a estrutura do banco de dados** através da migration `20260512180014_create-products.ts`, criando a tabela `products` com os campos necessários. Porém, a aplicação Express não tinha nenhuma forma de se conectar a essa tabela ou expor operações sobre ela.

> Na aula 04, **construímos a camada de aplicação**: configuramos o servidor Express, estabelecemos a conexão efetiva com o banco de dados via Knex, criamos as rotas HTTP, os controladores para lógica de negócio, e implementamos tratamento centralizado de erros. Agora a API possui uma arquitetura completa e funcional.

---

## O Que Foi Feito (Execução)

### Estrutura e Configuração

- **Revisado** o arquivo `knexfile.ts` para **garantir** que:
  - O cliente SQLite aponta para `./src/database/database.db`
  - A conexão **habilita** `PRAGMA foreign_keys = ON` no pool de conexões via `afterCreate`
  - Migrations e seeds apontam para seus diretórios corretos (`./src/database/migrations` e `./src/database/seeds`)
  - A flag `useNullAsDefault: true` está ativada para evitar avisos do Knex

- **Criado** o arquivo `src/server.ts` para **inicializar** a aplicação Express:
  - Configura middleware de parsing JSON com `express.json()`
  - **Aplica** as rotas importadas de `./routes`
  - **Ativa** o middleware de tratamento de erros como última camada
  - **Inicia** o servidor na porta `3333`

### Camada de Roteamento

- **Criado** o arquivo `src/routes/products-routes.ts` para **definir** todas as rotas relacionadas a produtos:
  - Importa o controlador via alias de caminho `@/controllers/products-controller`
  - **Instancia** uma nova `ProductController`
  - **Define** a rota GET `/` que dispara o método `index` do controlador
  - Exporta o `productsRoutes` para reutilização

- **Criado** o arquivo `src/routes/index.ts` para **agregar** todas as rotas da aplicação:
  - **Importa** o `productsRoutes`
  - **Prefixar** as rotas de produtos com `/products`, resultando em endpoint `GET /products`
  - Exporta o objeto `routes` consolidado para uso no servidor

### Camada de Controladores

- **Criado** o arquivo `src/controllers/products-controller.ts` para **encapsular** a lógica de negócio:
  - Classe `ProductController` com método `index` (controlador genérico para listar produtos)
  - **Utiliza** as assinaturas de tipo `Request`, `Response` e `NextFunction` do Express
  - **Implementa** try-catch para **capturar** erros e **repassá-los** ao middleware de tratamento via `next(error)`
  - Retorna JSON com `{message: "OK"}` como resposta padrão

### Camada de Tratamento de Erros

- **Criado** o arquivo `src/utils/AppError.ts` para **padronizar** erros da aplicação:
  - Classe `AppError` com propriedades `message` (string) e `statusCode` (number)
  - **Permite** lançar erros tipados com código HTTP específico
  - **Facilita** distinção entre erros da aplicação e erros genéricos do sistema

- **Criado** o arquivo `src/middlewares/error-handling.ts` para **centralizar** tratamento de exceções:
  - Middleware de assinatura padrão do Express: `(error, request, response, next)`
  - **Verifica** se o erro é uma instância de `AppError`
  - **Retorna** resposta JSON com `statusCode` e `message` se for `AppError`
  - **Retorna** erro 500 genérico se for outra exceção
  - **Importa** `AppError` via alias de caminho `@/utils/AppError`

---

## Detalhes da Arquitetura

### Fluxo de uma Requisição HTTP

```
GET /products
    ↓
(Express Middleware: json())
    ↓
(routes/index.ts: "/products" → products-routes.ts)
    ↓
(products-routes.ts: GET "/" → ProductController.index)
    ↓
(ProductController.index: try { responde JSON } catch { next(error) })
    ↓
Se erro: (error-handling.ts: verifica AppError → responde com statusCode e message)
    ↓
Resposta HTTP
```

### Camadas da Aplicação

| Camada | Arquivo | Responsabilidade |
|--------|---------|------------------|
| Servidor | `server.ts` | Inicializar Express, registrar middlewares e rotas |
| Roteamento | `routes/index.ts` + `routes/products-routes.ts` | Mapear URLs para controladores |
| Negócio | `controllers/products-controller.ts` | Executar lógica de operações (CRUD) |
| Tratamento de Erro | `middlewares/error-handling.ts` | Capturar e padronizar respostas de erro |
| Utilitários | `utils/AppError.ts` | Definir classe de erro da aplicação |
| Configuração | `knexfile.ts` | Conectar Knex ao SQLite com restrições de FK |

---

## Por Que Isso Importa (Fundamentos)

- **Separação de Responsabilidades**: Cada camada (roteamento, negócio, middleware) possui uma função específica e é independente. Facilita testes, manutenção e escalabilidade.

- **Tratamento de Erros Centralizado**: Ao invés de tratar erros em cada rota, um middleware único **captura** e **padroniza** todas as respostas de erro, garantindo consistência na API.

- **Classe de Erro Personalizada (`AppError`)**: Diferencia erros esperados (validação, negócio) de erros inesperados (sistema). Permite retornar `statusCode` HTTP apropriado sem exposição de stack traces internos.

- **Alias de Caminhos (`@/`)**: Imports como `@/controllers/...` ao invés de `../../../` melhoram legibilidade, evitam erros de caminho relativo e facilitam refatorações.

- **Middleware em Ordem Correta**: JSON → rotas → erro garante que exceções em rotas sejam capturadas e tratadas de forma unificada, nunca escapando para o cliente.

- **Ponte entre Banco e API**: O `knexfile.ts` estabelece a conexão efetiva com `database.db`, enquanto `server.ts` inicia a API. Os controladores usarão Knex para executar queries na tabela `products` criada na aula anterior.

---

Essa aula marca a conclusão da arquitetura base: banco estruturado, aplicação funcional e tratamento de erros profissional. Próximas aulas estenderão a lógica dos controladores para CRUD completo.