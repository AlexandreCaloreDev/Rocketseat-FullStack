import { knex as knexConfig } from 'knex'

import config from "../../knexfile"

export const knex = knexConfig(config) //Criamos esse arquivo para centralizar e configurar a conexão com o BDE