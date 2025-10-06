const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is Mandatory"]
    },

    email: {
        type: String,
        required: [true, "E-mail field is Mandatory"]
    },

    phone: {
        type: String,
        required: [true, "Phone Number field is Mandatory"]
    },

    designation: {
        type: String,
        required: [true, "Destination field is Mandatory"]
    },

    salary: {
        type: Number,
        required: [true, "Salary field is Mandatory"]
    },

    city: {
        type: String
    },

    state: {
        type: String
    }

})

const Employee = new mongoose.model("Employee",EmployeeSchema)

module.exports = Employee