## Query Builders

Query Builders são ferramentas que permitem manipular bancos de dados **sem escrever SQL diretamente**.

---

## Conceito

- Abstraem o SQL
- Geram comandos SQL automaticamente
- Utilizam métodos em vez de queries escritas manualmente

---

## Funcionamento

Em vez de escrever:

```sql
SELECT * FROM users;
``` id="sql1"

Usa-se:

```js
db.select('*').from('users')
``` id="qb1"

O Query Builder transforma isso em SQL internamente.

---

## Vantagens

### Legibilidade
- Código mais claro e organizado

### Produtividade
- Menos código manual
- Menos erro de sintaxe SQL

### Abstração
- Independe de detalhes específicos do banco

### Padronização
- Mesma forma de escrita para diferentes operações

---

## Operações comuns

- Inserir dados → `insert()`
- Buscar dados → `select()`
- Atualizar dados → `update()`
- Deletar dados → `delete()`

---

## Migrations

### Conceito
- Controle de versão do banco de dados

### Função
- Criar e alterar tabelas de forma controlada
- Manter histórico de mudanças

---

## Seeds

### Conceito
- Scripts para popular o banco

### Função
- Inserir dados iniciais
- Facilitar testes e desenvolvimento

---

## Síntese

- Query Builder → substitui SQL manual  
- Usa métodos → gera SQL automaticamente  
- Migrations → versionam estrutura  
- Seeds → populam dados  
- Resultado → desenvolvimento mais rápido, organizado e previsível