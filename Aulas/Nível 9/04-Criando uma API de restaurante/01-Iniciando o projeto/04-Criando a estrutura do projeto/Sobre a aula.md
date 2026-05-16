# Sobre a Aula 04: Criando a Estrutura do Projeto

## Comparação com a Aula Anterior (03: Instalando Express e Configurando o Projeto)

Na aula anterior (03), o projeto foi configurado com Express e TypeScript, criando um servidor básico em `src/server.ts` que apenas inicializava o Express na porta 3333, com middleware para JSON, mas sem rotas ou lógica de negócio definida. O `tsconfig.json` incluía alias de caminho (`@/*`), mas a estrutura de código era minimalista, com apenas o arquivo principal do servidor.

Nesta aula (04), foram implementadas alterações estruturais para organizar o código de forma escalável, seguindo princípios de separação de responsabilidades e preparando a base para uma API REST robusta. As mudanças incluem criação de pastas, novos arquivos e atualização do servidor para integrar rotas.

### 1. Criação da Estrutura de Pastas
- **src/controllers/**: Pasta dedicada aos controladores, responsáveis pela lógica de negócio e manipulação de requisições/respostas.
- **src/routes/**: Pasta para definição de rotas, separando a configuração de endpoints da lógica do servidor principal.

Essas pastas não existiam na aula 03, onde todo o código estava centralizado em `server.ts`. A criação delas promove organização modular, facilitando manutenção e expansão conforme o projeto cresce.

### 2. Criação do Arquivo de Agregação de Rotas (`src/routes/index.ts`)
- Importa e agrega todas as rotas específicas (inicialmente `productsRoutes`).
- Usa o `Router` do Express para criar um roteador principal.
- Define prefixos para rotas (ex.: `/products` para rotas de produtos).
- Exporta o roteador para ser usado no `server.ts`.

Este arquivo centraliza a gestão de rotas, permitindo adicionar novos módulos de rotas facilmente sem modificar o servidor principal. Na aula 03, não havia separação de rotas, o que tornaria o código monolítico com o aumento de endpoints.

### 3. Criação das Rotas de Produtos (`src/routes/products-routes.ts`)
- Define rotas específicas para produtos usando um `Router` dedicado.
- Instancia o controlador de produtos.
- Mapeia métodos HTTP para ações do controlador (ex.: `GET /` chama `productController.index`).
- Usa alias de importação (`@/controllers/products-controller`) para caminhos relativos limpos.

Este arquivo separa a definição de URLs da lógica de execução, seguindo o padrão de roteamento do Express. Na aula 03, não havia rotas definidas, apenas o servidor básico.

### 4. Criação do Controlador de Produtos (`src/controllers/products-controller.ts`)
- Classe `ProductController` com métodos assíncronos para ações (ex.: `index` para listar produtos).
- Usa tipagem TypeScript para parâmetros (`Request`, `Response`, `NextFunction`).
- Implementa tratamento de erros com `try-catch` e `next(error)` para middleware de erro.
- Retorna respostas JSON (atualmente um placeholder `{message: "OK"}`).

O controlador isola a lógica de negócio, permitindo testes unitários e reutilização. Métodos assíncronos preparam para operações de banco de dados futuras. Na aula 03, não havia controladores, com toda lógica potencialmente no servidor.

### 5. Atualização do Servidor Principal (`src/server.ts`)
- Adicionado import das rotas agregadas (`import { routes } from "./routes"`).
- Incluído `app.use(routes)` para registrar todas as rotas no aplicativo Express.

Isso conecta a estrutura modular ao servidor, mantendo `server.ts` focado na configuração geral. Na aula 03, o servidor não usava rotas externas.

### Porquês das Alterações
- **Separação de Responsabilidades**: Rotas definem caminhos, controladores executam lógica, servidor configura o app. Isso segue padrões como MVC, facilitando colaboração e manutenção.
- **Escalabilidade**: Estrutura modular permite adicionar novos recursos (ex.: rotas de usuários, pedidos) sem alterar arquivos existentes, reduzindo riscos de bugs.
- **Organização**: Pastas e arquivos nomeados claramente tornam o código navegável, especialmente em projetos maiores.
- **Preparação para Banco de Dados**: Métodos assíncronos e tratamento de erros antecipam integrações futuras com BD, evitando refatorações custosas.
- **Boas Práticas do Express**: Uso de routers e middlewares segue documentação oficial, promovendo código idiomático e performático.
- **TypeScript**: Tipagem em controladores previne erros em tempo de desenvolvimento, crucial para APIs complexas.

Essas mudanças transformam o projeto de um servidor básico em uma arquitetura preparada para crescimento, contrastando com a simplicidade da aula 03, e estabelecem fundações sólidas para implementar CRUD completo de produtos e outros recursos nas próximas aulas.