import {NextFunction, Request, Response} from "express"
import {z} from "zod"
import { knex } from "@/database/knex"
import { AppError } from "@/utils/AppError";
class ProductController{

  async index(request : Request, response: Response, next: NextFunction){
    try {
      const bodySchema = z.object({
        name : z.string({required_error: "Precisa informar um nome"})
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

  async update(request : Request, response: Response, next: NextFunction){
    try {
      const bodySchema = z.object({
        id: z.string({ required_error: "precisa informar o ID!" })
        .trim()
        .min(1, { message: "ID é obrigatório" })
        .transform((value) => Number(value)),
        name: z.string({ required_error: "precisa informar o nome!"})
              .trim()
              .min(6),
        price: z.number({required_error: "precisa informar o preço!"})
              .gt(0,{message : "o valor precisa ser maior que 0!"})
      })
      const {id} = bodySchema.parse(request.params)
      const {name, price} = bodySchema.parse(request.body)
      const updated_at = Date.now()
      
      const product = await knex<ProductController>("products")
      .select()
      .where("name", "like", `${name}`)
      .first()

      if (!product) {
        throw new AppError("Produto não encontrado!", 404)
      }

      await knex<ProductRepository>("products").update({name,price,updated_at}).where("id", id)

      const mensagemRetorno : string = `OK seu produto foi atualizado corretamente, produto ${name} de id ${id} no valor de ${price}`
      
      return response.status(200).json({message: mensagemRetorno})
    } catch (error) {
      next(error)
    }
  }  

  async remove(request : Request, response: Response, next: NextFunction){
    try {
      const id = z
        .string({ required_error: "precisa informar o ID!" })
        .trim()
        .min(1, { message: "ID é obrigatório" })
        .transform((value) => Number(value))

      const product = await knex<ProductController>("products")
      .select()
      .where({id})
      .first()

      if (!product) {
        throw new AppError("Produto não encontrado!", 404)
      }
    } catch (error) {
      
    }
  }
}
export { ProductController }