const express = require("express");

// import controller functions
const {
  getAllChannels,
  updateChannel,
  createChannel,
  deleteChannel,
} = require("../controllers/channelController");
const {
  getMessages,
  getPrivateMessages,
  postMessage,
} = require("../controllers/messageController");
const {
  joinChannel,
  getAccessibleChannels,
} = require("../controllers/channelAccessController");

const router = express.Router();

// GET user by id

// GET all user conected to the channel selected

// GET all channels
router.get("/", getAllChannels);

// GET channel accessible by the user
router.get("/getChannels/:idUser", getAccessibleChannels);

// GET 500 last message from a chanel

// router.get("/getMessage/:channelId", getMessages);

// GET messages
router.get("/getMessage", getMessages);

// GET privates messages
router.get("/getPrivateMessage/:id", getPrivateMessages);

// POST a new message

router.post("/postMessage", postMessage);

// POST a new channel
router.post("/", createChannel);

// DELETE a channel
router.delete("/:id", deleteChannel);

// DELETE: exit a channel

// UPDATE: join a channel
router.post("/join", joinChannel);

// UPDATE a channel
router.patch("/:id", updateChannel);

module.exports = router;
