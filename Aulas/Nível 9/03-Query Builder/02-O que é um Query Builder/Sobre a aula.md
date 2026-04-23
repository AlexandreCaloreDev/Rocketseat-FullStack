
---

## Exemplo

### Sem Query Builder
```sql
SELECT * FROM users;
``` id="sql_ex"

### Com Query Builder
```js
db.select('*').from('users')
``` id="qb_ex"

---

## Abstração

- Não é necessário saber o SQL exato
- O Query Builder cuida da compatibilidade
- Código fica independente do banco

---

## Operações via métodos

- `select()` → buscar dados  
- `insert()` → inserir dados  
- `update()` → atualizar dados  
- `delete()` → remover dados  

---

## Vantagens

### Independência de banco
- Mesmo código funciona em diferentes SGBDs

### Legibilidade
- Código mais limpo e expressivo

### Produtividade
- Menos código manual
- Menos erro de sintaxe

### Manutenção
- Código mais padronizado

---

## Síntese

- Query Builder abstrai SQL  
- Usa métodos para gerar queries  
- Adapta para qualquer banco  
- Reduz complexidade  
- Aumenta legibilidade e controle