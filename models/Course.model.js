const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const userSechma = new Sechma({
    coursename: {
        type: String,
        default: null
    },
    courselevel: {
        type: String,
        default: null
    },
    coursetype: {
        type: String,
        default: null
    },
    courseperiod: {
        type: String,
        default: null
    }
})

const emolyee = mongoose.model("course", userSechma)
module.exports = emolyee