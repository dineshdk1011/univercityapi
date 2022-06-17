const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const userSechma = new Sechma({
    blocknumber: {
        type: String,
        default: null
    },
    totalcapacity: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        default: null,
    },
    totalroom: {
        type: String,
        default: null,
    },
    totalempolyee: {
        type: String,
        default: null,
    },
    wardenincharge: {
        type: String,
        default: null,
    },
})

const emolyee = mongoose.model("hostel", userSechma)
module.exports = emolyee