const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route: GET /api/users/:id
// Description: Get user by ID
router.get('/:id', userController.getUserById);

// Route: GET /api/users
// Description: Get all users
router.get('/', userController.getUsers);

module.exports = router;
