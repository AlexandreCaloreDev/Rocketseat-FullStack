
import express, { json } from "express"
import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling";

const porta = 3333

const app = express()

app.use(express.json())

app.use(routes)

app.use(errorHandling)

app.listen(porta, () => { console.log(`servidor está rodando na porta ${porta}`) })