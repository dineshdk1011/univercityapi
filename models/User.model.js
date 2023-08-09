const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const userSechma = new Sechma({
  name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  phone: {
    type: Number,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: "admin",
  },
  department: {
    type: String,
    default: null,
  },
  division: {
    type: String,
    default: null,
  },
});

const emolyee = mongoose.model("user", userSechma);
module.exports = emolyee;
