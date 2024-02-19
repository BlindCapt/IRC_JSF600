const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const channelAccessSchema = new Schema(
  {
    channel: {
      type: String,
      required: true,
    },
    idUser: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Channel", channelSchema);
