const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  // Check for valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid user ID format' });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });

    if (!user) {
      return res.status(404).json({ error: 'User not found or underage' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
