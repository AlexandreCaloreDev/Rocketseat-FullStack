// Arquivo de configuração do Knex para ambiente de desenvolvimento
// Aqui definimos cliente, conexão, diretórios de migrations e seeds.
export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db" // caminho para o arquivo SQLite local
  },
  useNullAsDefault: true,
  migrations: {
    extensions: "ts", // permite usar arquivos .ts nas migrations
    directory: "./src/database/migrations", // pasta onde ficam as migrations
  },
  seeds: {
    extensions: "ts", // permite usar arquivos .ts nos seeds
    directory: "./src/database/seeds", // pasta onde ficam os seeds
  }
}