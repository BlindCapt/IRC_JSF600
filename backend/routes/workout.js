const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getWorkoutById,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getAllWorkouts);

// GET a workout by id
router.get("/:id", getWorkoutById);

// POST a new workout
router.post("/", createWorkout);

// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

// UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;
