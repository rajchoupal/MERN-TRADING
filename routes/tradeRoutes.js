const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

// Route: POST /api/trades/execute
// Description: Execute a trade
router.post('/execute', tradeController.executeTrade);

module.exports = router;
