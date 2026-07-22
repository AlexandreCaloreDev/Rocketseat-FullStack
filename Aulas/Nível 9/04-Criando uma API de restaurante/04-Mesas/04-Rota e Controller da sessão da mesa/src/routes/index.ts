import { productsRoutes } from "./products-routes";
import { Router } from "express"
import { tablesRoutes } from "./table-routes";


const routes = Router()
routes.use("/products", productsRoutes)
routes.use("/products", tablesRoutes)
export {routes}