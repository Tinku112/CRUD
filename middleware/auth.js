const bodyParser = require("body-parser")
const { model } = require("mongoose")
const encoder = new bodyParser.urlencoded()
module.exports = encoder