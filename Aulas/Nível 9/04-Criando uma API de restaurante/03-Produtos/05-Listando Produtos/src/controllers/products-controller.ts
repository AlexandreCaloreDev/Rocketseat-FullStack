import {NextFunction, Request, Response} from "express"
import {string, z} from "zod"
import { knex } from "@/database/knex"
class ProductController{

  async index(request : Request, response: Response, next: NextFunction){
    try {
      const bodySchema = z.object({
        name : z.string({required_error: "Precisa informar um nomte"})
                .trim()
                .min(3)
      })

      const {name} = bodySchema.parse(request.query)

      let query = knex<ProductRepository>("products")
      
      if (name) { 
        query = query.where("name", "like", `%${name}%`)}

      const products = await query.select().orderBy("name", "desc")

      return response.json({message:products})
    } catch (error){
      next(error)
    } 
  }

  async create(request : Request, response: Response, next: NextFunction){
    try {
      const bodySchema = z.object({
        name: z.string({ required_error: "precisa informar o nome!"})
              .trim()
              .min(6),
        price: z.number({required_error: "precisa informar o preço!"})
              .gt(0,{message : "o valor precisa ser maior que 0!"})
      })
      const {name, price} = bodySchema.parse(request.body)

      await knex<ProductRepository>("products").insert({name,price}) //vamos definir as tipagens para os inserts

      const mensagemRetorno : string = `OK seu produto foi criado, o nome é ${name} no valor de ${price}`
      
      return response.status(200).json({message: mensagemRetorno})
    } catch (error) {
      next(error)
    }
  }
}
export { ProductController }