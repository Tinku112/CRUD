
const EmployeeRouter = require("express").Router()
const encoder = require("../middleware/auth")

const {
    homePage,
    addPage,
    storePage,
    deletePage,
    editPage,
    updatePage,
} = require("../controllers/EmployeeControllers")

EmployeeRouter.get("/", homePage)
EmployeeRouter.get("/add", addPage)
EmployeeRouter.post("/add", encoder, storePage)
EmployeeRouter.get("/delete/:_id", deletePage)
EmployeeRouter.get("/edit/:_id", editPage)
EmployeeRouter.post("/update/:_id", encoder,updatePage)

module.exports = EmployeeRouter 

