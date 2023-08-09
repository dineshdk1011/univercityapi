const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const assessmentSechma = new Sechma({
  name: {
    type: String,
    default: null,
  },
  startdate: {
    type: String,
    default: null,
  },
  department: {
    type: String,
    default: null,
  },
  division: {
    type: String,
    default: null,
  },
  enddate: {
    type: String,
    default: null,
  },
  imgurl: {
    type: String,
    default: null,
  },
  notes: {
    type: String,
    default: null,
  },
  department: {
    type: String,
    default: null,
  },
  division: {
    type: String,
    default: null,
  },
  year: {
    type: String,
    default: null,
  },
  semester: {
    type: String,
    default: null,
  },
});

const emolyee = mongoose.model("assessment", assessmentSechma);
module.exports = emolyee;
