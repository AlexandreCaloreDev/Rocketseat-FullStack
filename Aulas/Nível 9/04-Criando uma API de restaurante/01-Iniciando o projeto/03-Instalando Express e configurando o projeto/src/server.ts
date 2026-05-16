// Importa o Express e a função json para parsing de JSON
import express, { json } from "express"

// Define a porta do servidor
const porta = 3333

// Cria uma instância do aplicativo Express
const app = express()

// Middleware para parsear JSON no corpo das requisições
app.use(express.json())

// Inicia o servidor na porta definida e exibe mensagem no console
app.listen(porta, ()=>{`servidor está rodando na porta ${porta}`})