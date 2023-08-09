const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const userSechma = new Sechma({
  video: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
});

const emolyee = mongoose.model("video", userSechma);
module.exports = emolyee;
