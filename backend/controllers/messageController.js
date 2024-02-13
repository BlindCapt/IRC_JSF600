const Message = require("../models/messageModel");
const Channel = require("../models/channelModel");

// Post a message on a channel

const postMessage = async (req, res) => {
  let message;
  try {
    message = req.body.message;
    const verifCommand = message.split(" ");
    if (verifCommand[0] === "/list") {
      const channels = await Channel.find({}).sort({ createdAt: -1 });
      res.status(200).json(channels);
      console.log(channels);
    } else if (verifCommand[0] === "/create") {
      const name = message[1];
      const description = verifCommand.slice(2).join(" ");
      const channel = await Channel.create({ title: name, description });
      res.status(200).json(channel);
    } else if (verifCommand === "/delete") {
      const channel = await Channel.findOneAndDelete({
        name: req.body.message,
      });
      res.status(200).json({ msg: "channel deleted" });
      // } else if (verifCommand === '/update') {
      //     const channel = await Channel.findOneAndUpdate ({name: req.body.message})
      //     res.status(200).json(channel)
      //
    } else if (verifCommand[0] === "/join") {
      // const channel = await Channel
    } else {
      const message = await Message.create(req.body);
      res.status(200).json(message);
      console.log(message[0]);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get 500 last messages from a channel

const getMessages = async (req, res) => {
  // const { channelId } = req.params;
  try {
    const messages = await Message.find(/*{ channelId: channelId }*/)
      .sort({ createdAt: -1 })
      .limit(500);
    res.status(200).json(messages);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  postMessage,
  getMessages,
};
