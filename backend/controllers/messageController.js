const Message = require("../models/messageModel");

// Post a message on a channel

const postMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(200).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get 500 last messages from a channel

const getMessages = async (req, res) => {
  const { channelId } = req.params;
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
