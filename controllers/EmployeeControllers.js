const Employee = require("../models/Employee.js")

async function homePage(req, res) {
    try {
        let data = await Employee.find()
        res.render("index", {
            data: data
        })

    } catch (error) {
        res.render("index", {
            data: []
        })
    }
}

function addPage(req, res) {
    res.render("add", {
        data: {},
        errorMessage: {
            name: "",
            email: "",
            phone: "",
            designation: "",
            salary: "",

        }
    })
}

async function storePage(req, res) {
    try {
        var data = new Employee(req.body)
        await data.save()
        res.redirect("/")

    } catch (error) {

        const errorMessage = {}

        error.errors?.name ? errorMessage.name = error.errors.name.message : ""
        error.errors?.email ? errorMessage.email = error.errors.email.message : ""
        error.errors?.phone ? errorMessage.phone = error.errors.phone.message : ""
        error.errors?.designation ? errorMessage.designation = error.errors.designation.message : ""
        error.errors?.salary ? errorMessage.salary = error.errors.salary.message : ""

        res.render("add", {
            data: data,
            errorMessage: errorMessage
        })
    }
}

async function deletePage(req, res) {
    try {
        await Employee.deleteOne({ _id: req.params._id })
        res.redirect("/")

    } catch (error) {
        res.redirect("/")
    }
}

async function editPage(req, res) {
    try {
        let data = await Employee.findOne({ _id: req.params._id })
        res.render("edit", {
            data: data
        })

    } catch (error) {
        res.redirect("/")
    }
}

async function updatePage(req, res) {
    let data;
    try {
        data = await Employee.findOne({ _id: req.params._id })

        data.name = req.body.name
        data.email = req.body.email
        data.phone = req.body.phone
        data.salary = req.body.salary
        data.designation = req.body.designation
        data.city = req.body.city
        data.state = req.body.state

        await data.save()

        res.redirect("/")

    } catch (error) {

        const errorMessage = {}
        error.errors?.name ? errorMessage.name = error.errors.name.message : ""
        error.errors?.email ? errorMessage.email = error.errors.email.message : ""
        error.errors?.phone ? errorMessage.phone = error.errors.phone.message : ""
        error.errors?.designation ? errorMessage.designation = error.errors.designation.message : ""
        error.errors?.salary ? errorMessage.salary = error.errors.salary.message : ""

        res.render("edit", {
            data: data,
            errorMessage: errorMessage
        })
    }

}


module.exports = {
    homePage: homePage,
    addPage: addPage,
    storePage: storePage,
    deletePage: deletePage,
    editPage: editPage,
    updatePage: updatePage
}