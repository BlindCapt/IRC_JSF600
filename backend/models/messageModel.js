const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    idUser: {
      type: String,
      required: true,
    },
    idChannel: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    idMP: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
