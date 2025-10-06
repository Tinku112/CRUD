const Router = require("express").Router()

const EmployeeRouter = require("./EmployeeRoutes")
Router.use("/",EmployeeRouter)

module.exports = Router 