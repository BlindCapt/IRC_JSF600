const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const channelSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Channel", channelSchema);
