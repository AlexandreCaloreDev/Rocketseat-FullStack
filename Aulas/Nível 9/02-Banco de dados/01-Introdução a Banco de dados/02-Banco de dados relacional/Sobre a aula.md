# Banco de Dados Relacional

## Conceito Geral
- Organiza dados em **tabelas estruturadas (linhas e colunas)**.
- Modelo mais utilizado no mercado.
- Permite **relacionamento entre tabelas**.

## Estrutura

### Tabela
- Unidade principal de armazenamento.
- Cada tabela deve representar **um único assunto**.
- Boa prática: nome no plural (ex: `produtos`, `usuarios`).

### Linhas (Registros / Tuplas)
- Representam uma **instância completa de dados**.
- Cada linha = um item (ex: um produto, um usuário).

### Colunas (Campos / Atributos)
- Definem os **tipos de dados**.
- Cada coluna armazena **um tipo específico**:
  - Ex: inteiro, texto, decimal, data.

## Organização dos Dados
- Separação por responsabilidade:
  - `produtos` → dados de produtos
  - `usuarios` → dados de usuários
  - `categorias` → dados de categorias
- Evita mistura de contextos → melhora organização e manutenção.

## Tipagem
- Cada coluna possui um tipo definido:
  - Inteiro (ID)
  - Texto (nome, título)
  - Decimal (preço, nota)
- Garante **consistência dos dados**.

## Chave Primária (Primary Key)
- Identifica **unicamente cada registro**.
- Geralmente usada no campo `id`.
- Regras:
  - Não pode repetir
  - Não pode ser nula

### Função
- Permite:
  - Atualizar registros específicos
  - Deletar registros específicos
  - Diferenciar dados dentro da tabela

## Relacionamentos
- Tabelas podem se conectar entre si.
- Baseado em:
  - **Chave Primária (PK)**
  - **Chave Estrangeira (FK)**
- Permite modelar sistemas complexos.

## Estrutura Geral
- Banco de Dados → várias tabelas
- Tabela → colunas + registros
- Colunas → definem tipos
- Registros → dados armazenados

## Síntese
- Modelo estruturado, organizado e escalável.
- Baseado em separação de responsabilidades.
- Garante consistência, integridade e facilidade de acesso aos dados.