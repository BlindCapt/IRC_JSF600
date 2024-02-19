const express = require('express');

const router = express.Router();

// Controller functions
const {loginUser, singupUser} = require('../controllers/userController');

// Login route
router.post('/login', loginUser)

// Register route
router.post('/signup', singupUser )


module.exports = router