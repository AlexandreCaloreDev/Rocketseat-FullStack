import {NextFunction, request, Request, Response} from "express"
import {number, transformer, z} from "zod"
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

  async index(request: Request, response : Response, next : NextFunction){
    try {
      const session = await knex<TablesSessionsRepository>("table_sessions").orderBy("created_at")

      return response.json({message:session}) 
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response : Response, next : NextFunction){
    try {
      const id = z.string().transform((value) => Number(value)).refine((value) => !isNaN(value), {message:"id precisa ser um número"}).parse(request.params.id)



     const session =  await knex<TablesSessionsRepository>("tables_session").select().orderBy("closed_at").where(id)

     if (!session) {
      throw new AppError("Sessão não encontrada", 404)
     }

     if (session.closed_at) {
      throw new AppError("Sessão já foi fechada", 400)
     }

     await knex<TablesSessionsRepository>("tables_session").update({closed_at: knex.fn.now()}).where(id)

    } catch (error) {
      next(error)
    }
  }
}
export { TablesSessionsController }