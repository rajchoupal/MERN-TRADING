const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route: POST /api/auth/register
// Description: Register a new user
router.post('/register', authController.register);

// Route: POST /api/auth/login
// Description: Login user
router.post('/login', authController.login);

module.exports = router;
