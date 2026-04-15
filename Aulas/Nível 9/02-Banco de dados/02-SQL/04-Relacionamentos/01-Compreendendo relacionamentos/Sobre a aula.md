## Relacionamentos em Banco de Dados Relacional

Relacionamentos são a base de um banco de dados relacional. Eles definem como diferentes tabelas se conectam e interagem.

---

## Conceito

Relacionamento = ligação entre entidades (tabelas)

### Exemplos do mundo real
- Pessoa → possui → carro  
- Restaurante → possui → pratos  

### No banco de dados
- Tabela `pessoas`
- Tabela `carros`
- Tabela `restaurantes`
- Tabela `pratos`

A conexão entre elas representa o relacionamento.

---

## Estrutura

Relacionamentos são feitos por meio de chaves:

### Chave Primária (PK)
- Identificador único de cada registro
- Existe dentro da própria tabela
- Ex: `id` de um usuário

### Chave Estrangeira (FK)
- Referência a uma chave primária de outra tabela
- Cria o vínculo entre tabelas
- Ex: `autor_id` em uma tabela de livros

---

## Exemplo prático

### Tabela `autores`
- `id` (PK)
- `nome`

### Tabela `livros`
- `id` (PK)
- `titulo`
- `autor_id` (FK)

### Relação
- Um autor pode ter vários livros  
- Cada livro pertence a um autor  

---

## Padrão comum

Nome da chave estrangeira:
