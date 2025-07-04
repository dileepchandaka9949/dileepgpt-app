const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create new user (after payment)
router.post('/register', async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = new User({ name, email, paymentStatus: true });
    await user.save();

    res.status(201).json({ message: 'User registered after payment' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all users (admin view)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

module.exports = router;
