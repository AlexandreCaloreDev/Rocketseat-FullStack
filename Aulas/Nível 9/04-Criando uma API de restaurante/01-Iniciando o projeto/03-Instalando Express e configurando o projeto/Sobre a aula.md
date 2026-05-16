# Sobre a Aula 03: Instalando Express e Configurando o Projeto

## Comparação com a Aula Anterior (02: Criando o Projeto)

Na aula anterior (02), foi criado um projeto Node.js básico com apenas um `package.json` inicial, contendo metadados como nome, versão, descrição, autor e licença, mas sem dependências, scripts ou código fonte. O projeto estava em um estado embrionário, pronto para desenvolvimento.

Nesta aula (03), foram realizadas as seguintes alterações e inclusões para configurar o projeto com Express e TypeScript, preparando-o para o desenvolvimento de uma API REST:

### 1. Instalação de Dependências
- **Express**: Framework web para Node.js, essencial para criar servidores HTTP e APIs. Instalado como dependência de produção (`express: ^4.19.2`).
- **@types/express**: Tipos TypeScript para Express, permitindo tipagem estática e melhor desenvolvimento com TS. Instalado como dependência de desenvolvimento.
- **@types/node**: Tipos para Node.js, necessários para usar APIs do Node com TypeScript.
- **tsx**: Executor de TypeScript que permite rodar arquivos .ts diretamente, sem compilação prévia, facilitando o desenvolvimento.
- **typescript**: Compilador TypeScript, para transformar código TS em JS.

Essas dependências foram adicionadas ao `package.json`, diferenciando-se da aula 02 onde não havia nenhuma dependência.

### 2. Adição de Script de Desenvolvimento
- Incluído o script `"dev": "tsx watch src/server.ts"` no `package.json`. Esse script permite executar o servidor em modo de observação (watch), reiniciando automaticamente ao detectar mudanças no código, facilitando o desenvolvimento iterativo. Na aula 02, não havia scripts definidos.

### 3. Criação do Arquivo de Configuração TypeScript (`tsconfig.json`)
- Configurado com opções como `target: "ES2022"`, `lib: ["ES2023"]`, `module: "node16"`, `strict: true`, etc.
- Incluído `paths` para alias de importação (`@/*` mapeando para `./src/*`), melhorando a organização e legibilidade do código.
- Esse arquivo não existia na aula 02, pois o projeto ainda não estava configurado para TypeScript.

### 4. Criação da Estrutura de Código Fonte
- Criada a pasta `src/` e o arquivo `server.ts`.
- No `server.ts`, implementado um servidor básico com Express:
  - Importação do Express.
  - Definição da porta (3333).
  - Criação da instância do app.
  - Uso do middleware `express.json()` para parsing de JSON.
  - Inicialização do servidor com callback de log.
- Na aula 02, não havia código fonte; apenas o `package.json` vazio de conteúdo funcional.

### Porquês das Alterações
- **Express**: Necessário para construir a API REST do restaurante, permitindo definir rotas, middlewares e manipulação de requisições HTTP.
- **TypeScript**: Adicionado para tipagem estática, reduzindo erros em tempo de desenvolvimento e melhorando a manutenibilidade do código em um projeto de API.
- **Ferramentas de Dev (tsx, @types)**: Facilitam o desenvolvimento rápido e seguro, com recarga automática e suporte a tipos.
- **Estrutura Básica**: Estabelece a fundação para adicionar rotas, controladores e lógica de negócio nas próximas aulas.

Essas mudanças transformam o projeto de um esqueleto básico em um servidor funcional pronto para expansão, contrastando com o estado inicial da aula 02.