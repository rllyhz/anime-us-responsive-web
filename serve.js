const express = require("express"),
  homeRouter = require("./app/router/homeRouter"),
  animeRouter = require("./app/router/animeRouter"),
  mangaRouter = require("./app/router/mangaRouter"),
  charactersRouter = require("./app/router/charactersRouter")

const app = express()
const PORT = 5000 | process.env.PORT

app.set("view engine", "ejs")
app.use(express.static("public"))

app.use("/", homeRouter)
app.use("/anime", animeRouter)
app.use("/manga", mangaRouter)
app.use("/characters", charactersRouter)

app.listen(PORT, console.log("Application is running on port http://localhost:" + PORT))