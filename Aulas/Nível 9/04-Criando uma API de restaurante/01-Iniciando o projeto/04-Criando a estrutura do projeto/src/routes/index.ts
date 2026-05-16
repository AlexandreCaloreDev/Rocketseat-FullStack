// Esse index será responsável por agregar todas as rotas
// Importa as rotas de produtos do arquivo products-routes.ts
import { productsRoutes } from "./products-routes";

// Importa o Router do Express para criar o roteador principal
import { Router } from "express"

// Cria uma instância do Router para agrupar todas as rotas
const routes = Router()

// Define que todas as rotas de produtos estarão sob o prefixo "/products"
routes.use("/products", productsRoutes)

/*
A gente já tem aqui a nossa rota, que chama aqui o nosso products.routes, que chama aqui o nosso controller.
Agora a gente precisa fazer a conexão com esse nosso arquivo principal, que é o server.ts.
Então, para o nosso servidor conhecer todas as rotas disponíveis,
*/

// Exporta o roteador principal para ser usado no server.ts
export {routes}