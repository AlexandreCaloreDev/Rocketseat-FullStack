class AppError {
  message: string
  statusCode: number

  constructor(message: string, statusCode: number) {
    this.message = message
    this.statusCode = statusCode
  }
}

// Classe para representar erros personalizados da aplicação

//devido estarmos trabalhando com camadas (controller, rotas) precisamos tratar esses erros enviando eles para ca
export { AppError }