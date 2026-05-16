
import express, { json } from "express"

// Importa as rotas agregadas do arquivo routes/index.ts
import { routes } from "./routes"

const porta = 3333

const app = express()

app.use(express.json())

// Usa as rotas definidas no módulo routes
app.use(routes)


app.listen(porta, ()=>{`servidor está rodando na porta ${porta}`})