const Workout = require("../models/WorkoutModel");

// get all workouts

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// get a workout by id

const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// create a new workout

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// update a workoutkk

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findByIdAndUpdate(id, req.body);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
