import { productsRoutes } from "./products-routes";
import { Router } from "express"
import { tablesRoutes } from "./table-routes";
import { tablesSessionsRouter } from "./tables-session-routes";
import {orderRoutes} from "@/routes/order-routes"

const routes = Router()
routes.use("/products", productsRoutes)
routes.use("/products", tablesRoutes)
routes.use("/table-sessions", tablesSessionsRouter)
routes.use("/order-products",orderRoutes)
export {routes}