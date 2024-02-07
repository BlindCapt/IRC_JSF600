const Channel = require("../models/channelModel");

// get all channels
const getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find({}).sort({ createdAt: -1 });
    res.status(200).json(channels);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// update a channel
const updateChannel = async (req, res) => {
  const { id } = req.params;

  try {
    const channel = await Channel.findByIdAndUpdate(id, req.body);
    res.status(200).json(channel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// create a new channel
const createChannel = async (req, res) => {
  const { title, description } = req.body;

  try {
    const channel = await Channel.create({ title, description });
    res.status(200).json(channel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a channel
const deleteChannel = async (req, res) => {
  const { id } = req.params;

  try {
    const channel = await Channel.findByIdAndDelete(id);
    res.status(200).json(channel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllChannels,
  createChannel,
  deleteChannel,
  updateChannel,
};
