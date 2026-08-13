import { z } from "zod"
import { knex } from "@/database/knex"
import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction, application } from "express";

class OrderProductsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        id_product : z.number({required_error: "Necessário informar ID"}),
        table_session_id : z.number({required_error: "Necessário informar ID da mesa"}),
        quantity : z.number({required_error: "Necessário informar a quantidade"})
      })

      const {id_product, table_session_id, quantity } = bodySchema.parse(request.body)

      const session = await knex<TablesSessionsRepository>("table_sessions").select().where(table_session_id).first()

      if (!session){
        throw new AppError("Sessão inexistente", 400)
      }

      if (session.closed_at){
        throw new AppError("Sessão já foi fechada", 400)
      }

      const product = await knex<ProductRepository>("products").select().where({id : id_product}).first()

      if (!product){
        throw new AppError("Produto não encontrado",400)
      }

      await knex<OrderRepository>("orders").insert({
        table_session_id,
        id_product,
        quantity,
        price: product.price  
      })

      return response.status(201).json(product)

    } catch (error) {
      next(error)
    }
  }

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { table_session_id } = request.params
      
      const session = knex<OrderRepository>("orders")
      .select(
        knex.raw("(orders.price * orders.quantity) AS total")
      )
      .join("products", "products.id","orders.id_product")
      .where({ table_session_id })

      return response.status(201).json(session)

    } catch (error) {
      next(error)
    }
  }

  async show(request : Request, response: Response, next: NextFunction){
    try {
      const { table_session_id } = request.params

      const order = await knex<OrderRepository>("orders").select(
        knex.raw("COALESCE(SUM(orders.quantity * orders.price AS total)),0"),
        knex.raw("COALESCE(SUM(orders.quantity AS quantity )),0")
      ).where(table_session_id)  

    } catch (error) {
      next(error)
    }
  }
}
export { OrderProductsController }