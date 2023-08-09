const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const attendanceSechma = new Sechma({
  attendance: {
    type: String,
    default: null,
  },
  date: {
    type: String,
    default: null,
  },
  studentid: {
    type: String,
    default: null,
  },
  teacherid: {
    type: String,
    default: null,
  },
});

const emolyee = mongoose.model("attendance", attendanceSechma);
module.exports = emolyee;
