const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const channelAccessSchema = new Schema(
  {
    idChannel: {
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

module.exports = mongoose.model("ChannelAccess", channelAccessSchema);
