const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const userSechma = new Sechma({
    departmentname: {
        type: String,
        default: null
    },
    division: {
        type: String,
        default: null
    }
})

const emolyee = mongoose.model("division", userSechma)
module.exports = emolyee