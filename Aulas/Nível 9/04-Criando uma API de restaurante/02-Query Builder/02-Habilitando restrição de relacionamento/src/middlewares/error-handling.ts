import { AppError } from "@/utils/AppError"
import { NextFunction, Request, Response } from "express"

// Middleware de tratamento centralizado de erros do Express
export function errorHandling(error: any, request: Request, response: Response, _: NextFunction) {
  // Se o erro for um AppError, retornamos o status e a mensagem definidos pelo próprio erro
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message })
  }

  // Para erros não previstos, retornamos 500 e a mensagem do erro
  return response.status(500).json({ message: error.message })
}