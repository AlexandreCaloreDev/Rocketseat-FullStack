## Tipos de Relacionamentos em Banco de Dados Relacional

Existem três tipos principais:

- 1:1 (um para um)  
- 1:N (um para muitos)  
- N:M (muitos para muitos)  

---

## 1:1 (Um para Um)

### Definição
Um registro de uma tabela está associado a **um único registro** de outra tabela.

### Exemplo
- Tabela `autor`
- Tabela `endereco`

Relação:
- Um autor possui um endereço  
- Um endereço pertence a um autor  

### Representação

1 : 1


---

## 1:N (Um para Muitos)

### Definição
Um registro de uma tabela pode estar associado a **vários registros** de outra tabela.

### Exemplo
- Tabela `posts`
- Tabela `comentarios`

Relação:
- Um post possui vários comentários  
- Um comentário pertence a um único post  

### Representação

1 : N


### Variações

1 : *
1 : M


---

## N:M (Muitos para Muitos)

### Definição
Vários registros de uma tabela podem se relacionar com **vários registros** de outra tabela.

### Exemplo
- Tabela `livros`
- Tabela `autores`

Relação:
- Um livro pode ter vários autores  
- Um autor pode ter vários livros  

### Representação

N : M


---

## Leitura dos Relacionamentos

- 1:1 → exclusividade nos dois lados  
- 1:N → expansão em um lado  
- N:M → expansão nos dois lados  

---

## Síntese

- 1:1 → vínculo único  
- 1:N → um controla vários  
- N:M → muitos conectados entre si  
- Estrutura define como os dados se relacionam e escalam