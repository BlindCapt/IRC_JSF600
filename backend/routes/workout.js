const express = require("express");
const Workout = require("../models/WorkoutModel");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get all workouts" });
});

// GET a workout by id
router.get("/:id", (req, res) => {
  res.json({ msg: "Get workout by id" });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  res.json({ msg: "Post a new workout" });
});

// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

// UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;
