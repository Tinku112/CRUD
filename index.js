const express = require("express")
const hbs = require("hbs")
const path = require("path")

const Router = require("./routes/Router")
const app = express()

app.set("view engine", "hbs")


require("../db-connect")

hbs.registerPartials(path.join(__dirname+"/views/partials"))

app.use("/",Router)

app.listen(8000, () => {
    console.log(`Server is Running at http://localhost:8000`)
})
