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

  return response.json(courses)
})

app.get("courses", async (request:Request, response:Response) => {
  // usando método raw: const courses = await knex.raw("SELECT * FROM courses")
  const courses = knex("courses").select().orderby("name","asc")

  return response.json(courses)
})

app.put("courses/:id", async (request:Request, response:Response) => {
  const { name } = request.body
  const { id } = request.params

  await knex("knex").update({name}).where({ id })

  return response.json(courses)
})

app.delete("courses/:id", async(request:Request, response:Response) => {
  const {id} = request.params

  await knex("courses").delete().where({ id })

  return response.json(courses)
})

app.post("/modules", async(request:Request,response:Response) =>{
  const {name, course_id} = request.body

  await knex("course_modules").insert({name,course_id})
  
  return response.status(201).json()
})

app.get("/modules", async(request:Request,response:Response) =>{
  const modules = await knex("course_modules").select()
  return response.json(modules)
})

app.get("courses/:id/modules", async(request:Request,response:Response) =>{
  const courses = await knex("courses").select("course_modules.id", "course_modules.name AS module", "course.name AS course").join("course_modules","course.id","course_modules.course_id")

  return response.json(courses)
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
