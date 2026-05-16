// Importa tipos do Express para tipagem das funções do controlador
import {NextFunction, Request, Response} from "express"

// Define a classe do controlador de produtos
class ProductController{

  // Método assíncrono para listar produtos (index)
  async index(request : Request, response: Response, next: NextFunction){ // utilizaremos metodo assincrono para aguardar o bde processar a requisição

    // Trata exceções com try-catch
    try {
      // Retorna uma resposta JSON com mensagem de sucesso
      return response.json({message:"OK"})
    } catch (error){
      // Passa o erro para o próximo middleware de tratamento de erros
      next(error)
      
    }
    
  }
}

// Exporta a classe ProductController
export { ProductController }