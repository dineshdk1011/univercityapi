const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const notesSechma = new Sechma({
    name: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    imgurl: {
        type: String,
        default: null
    },
    userid: {
        type: String,
        default: null
    },
    date:{
        type: String,
        default: null
    }
})

const emolyee = mongoose.model("notes", notesSechma)
module.exports = emolyee