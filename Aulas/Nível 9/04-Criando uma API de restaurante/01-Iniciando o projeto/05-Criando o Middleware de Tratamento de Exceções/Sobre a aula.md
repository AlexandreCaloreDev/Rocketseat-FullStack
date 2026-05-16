# Sobre a Aula 05: Criando o Middleware de Tratamento de Exceções

## Comparação com a Aula Anterior (04: Criando a Estrutura do Projeto)

Na aula 04, a estrutura do projeto foi organizada com pastas de `controllers`, `routes` e um servidor principal que já registrava as rotas. O foco daquela aula foi separar responsabilidades e preparar o servidor para receber endpoints de forma modular.

Nesta aula 05, o foco mudou para o tratamento centralizado de erros. Em vez de cada controlador responder individualmente em caso de falha, criamos uma camada de middleware que captura erros lançados durante a execução e devolve respostas HTTP consistentes.

### 1. Criação do Middleware de Erros (`src/middlewares/error-handling.ts`)
- Importa `AppError` para diferenciar erros previstos dos inesperados.
- Recebe os parâmetros do Express na ordem correta: `error`, `request`, `response`, `next`.
- Verifica se o erro é uma instância de `AppError`.
- Se for um erro tratado, retorna o `statusCode` e a mensagem definida na aplicação.
- Se não for um erro previsto, retorna `500 Internal Server Error` com a mensagem do erro.

Esse middleware garante que todo erro lançado em controladores e rotas seja encaminhado para um único ponto de resposta.

### 2. Uso de `AppError` para erros previstos (`src/utils/AppError.ts`)
- A classe `AppError` encapsula uma mensagem e um código de status.
- Ela permite que erros esperados sejam lançados com informações de HTTP apropriadas.
- Isso evita que o servidor sempre retorne `500` para falhas que já sabemos tratar.

A aula 04 ainda não tinha essa camada de tratamento; os erros no servidor eram tratados apenas com `try-catch` isolados nos controladores.

### 3. Integração no Servidor Principal (`src/server.ts`)
- O middleware de tratamento de erros foi registrado após o roteamento: `app.use(errorHandling)`.
- A posição é importante: ele deve ser o último middleware, depois de todas as rotas.
- Assim, qualquer erro passado para `next(error)` será capturado aqui.

### Porquês das Alterações
- **Consistência**: Todas as falhas da API passam por um único ponto, tornando as respostas previsíveis.
- **Separação de responsabilidades**: Controladores ficam responsáveis pela lógica de negócio; o middleware fica responsável por traduzir falhas em respostas HTTP.
- **Escalabilidade**: Novos controladores podem usar o mesmo fluxo de erro sem duplicar lógica de resposta.
- **Clareza**: `AppError` força a aplicação a distinguir entre erros esperados e erros inesperados.
- **Melhor manutenção**: Mudanças na política de erro são feitas em um único arquivo, sem precisar alterar cada rota ou controlador.

Essa aula eleva a estrutura do projeto de um servidor modular para uma API com tratamento de exceções centralizado e preparada para lidar com erros de forma segura e previsível.