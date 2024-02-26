const Message = require("../models/messageModel");
const Channel = require("../models/channelModel");
const ChannelAccess = require("../models/channelAccessModel");

// Post a message on a channel

const postMessage = async (req, res) => {
  let message;
  try {
    message = req.body.message;
    const verifCommand = message.split(" ");
    if (verifCommand[0] === "/list") {
      const channels = await Channel.find({}).sort({
        createdAt: -1,
      });
      res.status(200).json(channels);
      console.log(channels);
    } else if (verifCommand[0] === "/create") {
      const name = verifCommand[1];
      const description = verifCommand.slice(2).join(" ");
      const channel = await Channel.create({ title: name, description });
      res.status(200).json({
        idUser: req.body.idUser,
        idChannel: channel._id,
        message: "channel created",
      });
    } else if (verifCommand[0] === "/delete") {
      const channel = await Channel.findOneAndDelete({
        name: verifCommand[1],
      });
      res.status(200).json({
        idUser: req.body.idUser,
        idChannel: "1",
        message: "channel deleted",
      });
      // } else if (verifCommand === '/update') {
      //     const channel = await Channel.findOneAndUpdate ({name: req.body.message})
      //     res.status(200).json(channel)
      //
    } else if (verifCommand[0] === "/join") {
      const channelTitle = verifCommand[1];
      try {
        //----------- check if channel exists -----------//
        const channel = await Channel.findOne({ title: channelTitle });
        if (channel) {
          //----------- check if user is already in channel -----------//
          try {
            const channelAccess = await ChannelAccess.findOne({
              idUser: req.body.idUser,
              idChannel: channel._id,
            });
            if (channelAccess) {
              res.status(400).json({ error: "User already in channel" });
            } else {
              //----------- create channelAccess -----------//
              try {
                const channelAccess = await ChannelAccess.create({
                  idChannel: channel._id,
                  idUser: req.body.idUser,
                });
                res.status(200).json(channelAccess);
              } catch (err) {
                res.status(400).json({ error: err.message });
              }
            }
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        } else {
          res.status(400).json({ error: "Channel not found" });
        }
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
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

// Get private messages
const getPrivateMessages = async (req, res) => {
  const { id } = req.params;
  try {
    // get all mp sent to or by the user
    let privateMessages = await Message.find({
      $or: [{ idUser: id }, { idMP: id }],
      idChannel: 1,
    }).sort({
      idMP: -1,
      createdAt: -1,
    });

    res.status(200).json(privateMessages);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  postMessage,
  getPrivateMessages,
  getMessages,
};
