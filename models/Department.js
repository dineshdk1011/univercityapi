const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const userSechma = new Sechma({
  course: {
    type: String,
    default: null,
  },
  departmentname: {
    type: String,
    default: null,
  },
});

const emolyee = mongoose.model("department", userSechma);
module.exports = emolyee;
