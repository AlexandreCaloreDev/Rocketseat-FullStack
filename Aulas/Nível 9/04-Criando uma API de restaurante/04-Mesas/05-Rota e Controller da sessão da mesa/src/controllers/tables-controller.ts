import {NextFunction, Request, Response} from "express"
import {z} from "zod"
import { knex } from "@/database/knex"
import { AppError } from "@/utils/AppError";

class TablesController {
  async index(request : Request, response: Response, next: NextFunction){
    try {

      const tables = await knex<TableRepository>("table").select().orderBy("table_number")
      
      return response.json({message:tables})
    } catch (error){
      next(error)
    }  
  }
}

export { TablesController }