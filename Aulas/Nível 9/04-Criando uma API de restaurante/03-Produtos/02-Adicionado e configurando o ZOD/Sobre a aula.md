# Resumo da Aula 02: Adicionando e configurando o ZOD

## Contexto (A Ponte)

Na aula 01, a API já tinha servidor Express, rotas básicas e tratamento de erro genérico. A criação de produto ainda ocorria sem validação formal dos dados de entrada.

> Na aula 02, **integrar o Zod** permitiu estruturar a validação de payloads e ajustar o middleware de erros para distinguir falhas de validação das exceções genéricas.

---

## O Que Foi Feito (Execução)

- **Adicionado** o pacote `zod` em `package.json`
- **Importado** `ZodError` em `src/middlewares/error-handling.ts`
- **Configurado** o middleware para:
  - tratar `AppError`
  - tratar `ZodError`
  - retornar `400 Bad Request` com `message` e `issues`
- **Mantida** a rota `POST /products` em `src/routes/products-routes.ts`
- **Validado** o corpo da requisição em `ProductController.create` antes de processar o cadastro

---

## Detalhes da Estrutura

- `src/controllers/products-controller.ts` define o schema Zod:
  - `name`: `z.string().trim().min(6)` com mensagem de erro personalizada
  - `price`: `z.number().gt(0)` com mensagem de erro personalizada
- `src/middlewares/error-handling.ts` passou a tratar explicitamente `ZodError`
- A saída de erro de validação utiliza `error.format()` para expor falhas por campo

---

## Correções e Refatorações

- Separação entre erro de aplicação (`AppError`) e erro de validação (`ZodError`).
- Tratamento de validação elevado para antes do fallback genérico de `500`.
- Criação de produto deixou de aceitar payloads arbitrários e passou a exigir campos validados.

---

## Por Que Isso Importa (Fundamentos)

- **Validação antecipada**: previne execução de lógica com dados inválidos.
- **Respostas consistentes**: torna o comportamento de erro previsível para clientes.
- **Segurança de entrada**: reduz riscos de payloads malformados atingirem a camada de negócio.
- **Base para expansão**: Zod pode ser estendido com regras adicionais sem alterar o fluxo do controlador.
