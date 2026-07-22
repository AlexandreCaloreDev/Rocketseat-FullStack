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

      await knex<TablesSessionsRepository>("table_sessions").insert({
        table_id,
        created_at : Date.now(),
        
      })


      return response.json({message: "Session created successfully"})
    } catch (error) {
      next(error)
    }
  }
}
export { TablesSessionsController }