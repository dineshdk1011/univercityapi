const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const userSechma = new Sechma({
  campus: {
    type: String,
    default: null,
  },
});

const emolyee = mongoose.model("campus", userSechma);
module.exports = emolyee;
