const express = require("express");
const {
  getAllChannels,
  updateChannel,
  createChannel,
  deleteChannel,
} = require("../controllers/channelController");

const router = express.Router();

// GET user by id

// GET all user conected to the channel selected

// POST a new message

// POST a new channel
router.post("/", createChannel);

// DELETE a channel
router.delete("/:id", deleteChannel);

// DELETE: exit a channel

// UPDATE: join a channel

// UPDATE a channel
router.patch("/:id", updateChannel);

module.exports = router;
