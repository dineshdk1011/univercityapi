const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const userSechma = new Sechma({
  image: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
});

const emolyee = mongoose.model("image", userSechma);
module.exports = emolyee;
