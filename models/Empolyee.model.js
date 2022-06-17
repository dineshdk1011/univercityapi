const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const empolyeeSechma = new Sechma({
    profile: {
        type: String,
        default: null
    },
    signature: {
        type: String,
        default: null
    },
    campus: {
        type: String,
        default: null
    },
    institute: {
        type: String,
        default: null
    },
    resumeno: {
        type: Number,
        default: null
    },
    empolyeecode: {
        type: String,
        default: null,
    },
    salutation: {
        type: String,
        default: null,
    },
    empolyeename: {
        type: String,
        default: null
    },

    dateofbirth: {
        type: String,
        default: null
    },
    anniversary: {
        type: String,
        default: null
    },
    empolyeegroup: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        default: null
    },
    fathername: {
        type: String,
        default: null
    },
    mothername: {
        type: String,
        default: null
    },
    maritialstatus: {
        type: String,
        default: null
    },
    bodysign: {
        type: String,
        default: null
    },
    workinghours: {
        type: String,
        default: null
    },
    aictecode: {
        type: String,
        default: null
    },
    religion: {
        type: String,
        default: null
    },
    bloodgroup: {
        type: String,
        default: null
    },
    nationality: {
        type: String,
        default: null
    },
    caste: {
        type: String,
        default: null
    },
    appointmenttype: {
        type: String,
        default: null
    },
    from: {
        type: String,
        default: null
    },
    to: {
        type: String,
        default: null
    },
    jobstatus: {
        type: String,
        default: null
    },
    vechileno: {
        type: String,
        default: null
    },
    drivinglicense: {
        type: String,
        default: null
    },
    licenseexpireddate: {
        type: String,
        default: null
    },

    address: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    pincode: {
        type: Number,
        default: null
    },
    attendance: {
        type: String,
        default: null
    },
    date: {
        type: String,
        default: null
    },



})

const emolyee = mongoose.model("empolyee", empolyeeSechma)
module.exports = emolyee