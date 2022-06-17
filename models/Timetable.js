const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const userSechma = new Sechma({
    date: {
        type: String,
        default: null
    },
    subject: {
        type: String,
        default: null
    },
    fromtime: {
        type: String,
        default: null
    },
    totime: {
        type: String,
        default: null
    },
    staff: {
        type: String,
        default: null
    },
    userid: {
        type: String,
        default: null
    }
})

const emolyee = mongoose.model("timetable", userSechma)
module.exports = emolyee