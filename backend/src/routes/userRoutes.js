// backend/src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Adjust the path as per your project structure

// Route to handle user registration
router.post('/register', async (req, res) => {
  try {
    const newUser = await User.create(req.body); // Assuming req.body contains { username, email, password }
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
