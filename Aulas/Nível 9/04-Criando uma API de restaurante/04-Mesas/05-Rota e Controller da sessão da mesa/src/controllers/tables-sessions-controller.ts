import {NextFunction, request, Request, Response} from "express"
import {z} from "zod"
import { knex } from "@/database/knex"
import { AppError } from "@/utils/AppError";

class TablesSessionsController{
   async create(request : Request, response: Response, next: NextFunction){
    try {

      return response.json({message: "Session created successfully"})
    } catch (error) {
      next(error)
    }
  }
}
export { TablesSessionsController }