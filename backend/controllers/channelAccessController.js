const ChannelAccess = require("../models/channelAccessModel");
const Channel = require("../models/channelModel");

const joinChannel = async (req, res) => {
  const { idUser, idChannel } = req.body;
  try {
    const channel = await ChannelAccess.create({ idUser, idChannel });
    res.status(200).json(channel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAccessibleChannels = async (req, res) => {
  const { idUser } = req.params;
  try {
    const channelAccess = await ChannelAccess.find({ idUser });
    const idChannel = channelAccess.map((channel) => channel.idChannel);
    try {
      const channels = await Channel.find({ _id: { $in: idChannel } });
      res.status(200).json(channels);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  joinChannel,
  getAccessibleChannels,
};
