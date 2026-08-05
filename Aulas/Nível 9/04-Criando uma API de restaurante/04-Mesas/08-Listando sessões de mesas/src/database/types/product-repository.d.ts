type ProductRepository = {
  id: number,
  name: string,
  price: number,
  updated_at : number,
  created_at : number
} //definimos todos os inputs e seus tipos para garantir que não vamos inserir errado e também facilitar na hora de codar. Perceba também que, ao definirmos que o knex para insert dos dados dessa tabela, é do tupo productrepository, nao precisamos importar ele pois o mesmo se encontra no escopo global da aplicação.