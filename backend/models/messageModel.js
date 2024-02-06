const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageModel = new Schema(
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", workoutSchema);
