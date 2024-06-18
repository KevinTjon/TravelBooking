// backend/src/controllers/UserController.js
const { User } = require('../models');

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    // Check if user with same email exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create new user
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser); // Respond with the created user data
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
