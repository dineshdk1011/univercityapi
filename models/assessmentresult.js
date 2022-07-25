const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const assessmentresultSechma = new Sechma({
    assessmentid: {
        type: String,
        default: null
    },
    userid: {
        type: String,
        default: null
    },
    file: {
        type: String,
        default: null
    },
    notes: {
        type: String,
        default: null
    },
    marks: {
        type: String,
        default: null
    },

})

const emolyee = mongoose.model("assessmentresult", assessmentresultSechma)
module.exports = emolyee