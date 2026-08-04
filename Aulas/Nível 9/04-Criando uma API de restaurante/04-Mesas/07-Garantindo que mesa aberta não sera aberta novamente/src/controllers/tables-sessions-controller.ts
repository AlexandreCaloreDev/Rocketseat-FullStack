import {NextFunction, request, Request, Response} from "express"
import {z} from "zod"
import { knex } from "@/database/knex"
import { AppError } from "@/utils/AppError";

class TablesSessionsController{
   async create(request : Request, response: Response, next: NextFunction){
    try {
       const bodySchema = z.object({
        table_id : z.number({required_error: "Precisa informar o ID da mesa"})
                .min(1)
      })

      const {table_id} = bodySchema.parse(request.body)

      const session = await knex<TablesSessionsRepository>("table_sessions").insert({
        table_id,
        created_at : Date.now(),
      })
      .where({table_id})
      .orderBy("created_at", "desc")
      .first()

      if (session && !session.closed_at) {
        throw new AppError('esta mesa já está aberta', 400)
      }
    } catch (error) {
      next(error)
    }
  }
}
export { TablesSessionsController }