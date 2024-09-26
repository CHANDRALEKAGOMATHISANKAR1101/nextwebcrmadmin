const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

// Protected route for Admins only
router.get('/admin', [auth, adminAuth], (req, res) => {
  res.json({ msg: 'Welcome, Admin!' });
});

module.exports = router;
