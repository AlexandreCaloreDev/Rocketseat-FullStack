# Tipos de Dados no SQLite

## Conceito
- Definem **qual tipo de valor cada coluna pode armazenar**.
- Garantem **consistência e organização dos dados**.

## Função
- Cada coluna possui um tipo específico.
- Impede armazenamento de valores incompatíveis.
- Define como os dados serão tratados internamente.

## Tipos de Dados no SQLite

### NULL
- Representa **ausência de valor**.
- Campo sem dado atribuído.

### INTEGER
- Números inteiros (positivos ou negativos).
- Ex: `1`, `-10`, `2000`.

### REAL
- Números com **casas decimais** (ponto flutuante).
- Ex: `9.8`, `10.50`.
- Usado em:
  - Valores monetários
  - Medições

### TEXT
- Sequência de caracteres.
- Ex: nomes, descrições, e-mails.

### BLOB (Binary Large Object)
- Dados binários.
- Usado para armazenar:
  - Imagens
  - Arquivos
  - Conteúdo bruto

## Aplicação na Tabela
- Cada coluna define seu tipo:
  - `id` → INTEGER
  - `name` → TEXT
  - `price` → REAL
  - `created_at` → INTEGER (timestamp)

## Observação
- Cada banco pode ter variações nos tipos.
- SQLite possui tipagem mais simples e flexível.

## Síntese
- Tipos de dados controlam o formato das informações.
- Base para integridade e validação dentro do banco.