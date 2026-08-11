import { AppError } from "@/utils/AppError"
import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"

export function errorHandling(
  error: any, 
  request: Request, 
  response: Response, 
  _: NextFunction) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message })
  }

  if (error instanceof ZodError) {
    return response.status(400).json({message: "Erro de validação pelo ZOD", issues: error.format()}) //aqui eu verifico se o erro foi gerado pelo ZOD, se for, retorno status 400 e junto na mensagem o tipo de erro de formatação para mostrar o que não foi validado.
  }

  // Vamos trabalhar aqui com o tratamento de quando é uma exceção gerada pela não validação do ZOD

  return response.status(500).json({ message: error.message })
}