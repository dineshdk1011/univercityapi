const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const userSechma = new Sechma({
    vechileno: {
        type: String,
        default: null
    },
    capacity: {
        type: String,
        default: null
    },
    drivername: {
        type: String,
        default: null
    },
    vechiletype: {
        type: String,
        default: null,
    },
    occupied: {
        type: String,
        default: null,
    },
    permitstartdate: {
        type: String,
        default: null,
    },
    permitenddate: {
        type: String,
        default: null,
    },
})

const emolyee = mongoose.model("transport", userSechma)
module.exports = emolyee