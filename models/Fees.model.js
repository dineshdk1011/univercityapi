const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const userSechma = new Sechma({
    amount: {
        type: String,
        default: null
    },
    total: {
        type: String,
        default: null
    },
    paid: {
        type: String,
        default: null
    },
    date: {
        type: String,
        default: null
    },
    userid: {
        type: String,
        default: null
    }
})

const emolyee = mongoose.model("feeshistory", userSechma)
module.exports = emolyee