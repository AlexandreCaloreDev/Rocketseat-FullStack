import { ProductController } from "@/controllers/products-controller"
import { OrderProductsController } from "@/controllers/order-products-controller";
import {Router} from "express"

const orderRoutes = Router()
const orderProductsController = new OrderProductsController

orderRoutes.post("/", orderProductsController.create)
orderRoutes.get("/session-table/:tables_session_id", orderProductsController.index)
export {orderRoutes}