# Backend Fundamentals — Consolidated Notes

## 1. Express

**Definition**
Framework minimalista e flexível para Node.js focado em requisições e respostas HTTP.

**Função**
Abstrai tarefas repetitivas do Node puro:
- Parsing de body (JSON)
- Manipulação de rotas
- Query params e route params
- Middleware

**Vantagens**
- Redução de código manual
- Organização da aplicação
- Criação rápida de APIs

---

## 2. Validação por Esquema

**Definição**
Validação baseada em regras pré-definidas (schema).

**Função**
Garantir que os dados recebidos:
- Tenham estrutura correta
- Possuam tipos válidos
- Respeitem restrições

**Exemplos**
- Email → string com formato válido
- Senha → mínimo de caracteres

**Resultado**
Dados inválidos são rejeitados antes de processar.

---

## 3. Banco de Dados

### Dado vs Informação
- **Dado**: valor bruto (ex: `2006`)
- **Informação**: dado com contexto (ex: "João nasceu em 2006")

### Objetivo
Armazenar dados de forma:
- Organizada
- Acessível
- Escalável
- Consistente

---

## 4. Banco de Dados Relacional

**Estrutura**
- Tabelas
- Linhas (registros)
- Colunas (atributos)

**Boas práticas**
- Cada tabela = um assunto
- Nome no plural (ex: `users`, `products`)

**Chaves**
- **Primary Key (PK)**: identifica registro único
- **Foreign Key (FK)**: conecta tabelas

---

## 5. SQLite

**Características**
- Arquivo único
- Sem servidor
- Leve e portátil

**Uso**
- Estudos
- Aplicações simples
- Mobile/web

---

## 6. SQL

**Definição**
Linguagem padrão para bancos relacionais.

**Funções**
- Criar dados (INSERT)
- Consultar (SELECT)
- Atualizar (UPDATE)
- Deletar (DELETE)

**Observação**
Pequenas variações entre bancos (Postgres, MySQL, SQLite).

---

## 7. Tipos de Dados (SQLite)

- `NULL` → ausência de valor  
- `INTEGER` → números inteiros  
- `REAL` → números decimais  
- `TEXT` → texto  
- `BLOB` → binário (imagens, arquivos)  

---

## 8. Relacionamentos

**Definição**
Conexão entre tabelas usando chaves.

**Objetivos**
- Evitar redundância
- Garantir integridade
- Organizar dados

**Exemplo**
- Pessoa → possui Carro
- Restaurante → possui Pratos

---

## 9. Tipos de Relacionamento

### 1:1 (Um para Um)
- Um registro ↔ um registro  
- Ex: Autor ↔ Endereço  

### 1:N (Um para Muitos)
- Um registro → vários  
- Ex: Post → Comentários  

### N:M (Muitos para Muitos)
- Muitos ↔ muitos  
- Ex: Livros ↔ Autores  

---

## 10. Query Builder

**Definição**
Abstração do SQL via código.

**Funcionamento**
- Usa métodos ao invés de SQL direto
- Gera SQL automaticamente

**Vantagens**
- Independente de banco
- Melhor legibilidade
- Menos erro manual

---

## 11. Migrations

**Definição**
Controle de versão do banco de dados.

**Funções**
- Criar tabelas
- Alterar estrutura
- Remover elementos

**Características**
- Linha do tempo de mudanças
- Permite rollback
- Facilita trabalho em equipe

**Equivalente**
Versionamento de código (Git), aplicado ao banco.

---

## 12. Seeds (Contexto)

**Função**
Popular banco com dados iniciais.

**Uso**
- Testes
- Dados padrão

---

## Estrutura Geral
