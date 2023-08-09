const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const userSechma = new Sechma({
  institute: {
    type: String,
    default: null,
  },
});

const emolyee = mongoose.model("institute", userSechma);
module.exports = emolyee;
