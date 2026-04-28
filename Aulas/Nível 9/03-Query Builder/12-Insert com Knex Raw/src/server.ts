import express, { Request, Response } from "express"
import knex from "./databse/knex"
const app = express()
app.use(express.json())

app.post("/courses", async (request: Request, response: Response) => 
{
  response.json({ message: "Hello World!" })

  await knex("courses").insert({ name})

  //Fazendo insert utilizando o própio código sql:
  // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name])
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
