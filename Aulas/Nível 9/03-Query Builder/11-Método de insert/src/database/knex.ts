import { knex as knexConfig } from "knex"
import config from "../../knexfile"

//usaremos esse arquivo toda vez que quisermos acessar as configurações de conexão BDE
export const knex = knexConfig(config)