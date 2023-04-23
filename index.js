import express from "express"
const app= express()

import projectRouter from "./routing/project.js"

app.use("/project",projectRouter)

const port = 1000
app.listen(port, console.log("server start"))
