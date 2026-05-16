// Importa o controlador de produtos usando alias de caminho
import { ProductController } from "@/controllers/products-controller";

// Importa o Router do Express para definir rotas específicas de produtos
import {Router} from "express"

// Cria uma instância do Router para as rotas de produtos
const productsRoutes = Router()

// Instancia o controlador de produtos
const productController = new ProductController

/*
A gente já fez aqui o nosso products.routes, que chama o nosso product controller.
O products.routes fica responsável pelas rotas de produto, ou seja, os caminhos, e o que cada caminho vai executar.
E aí dentro de controller a gente tem então as funcionalidades, ou seja, o que esse controller pode fazer, cadastrar, inserir, pesquisar, e assim por diante.
*/

// Define a rota GET para "/" (listar produtos), chamando o método index do controlador
productsRoutes.get("/", productController.index)

// Exporta o roteador de produtos para ser usado no index.ts
export {productsRoutes}