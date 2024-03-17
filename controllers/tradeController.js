const Trade = require('../models/tradeModel');
const User = require('../models/userModel');

const executeTrade = async (req, res) => {
  try {
    const { userId, symbol, quantity, type } = req.body;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Calculate trade value based on symbol and quantity (assume for simplicity)
    const tradeValue = calculateTradeValue(symbol, quantity);

    // Check if user has enough balance for buying or enough stock for selling
    if ((type === 'buy' && user.balance < tradeValue) || (type === 'sell' && user.stocks[symbol] < quantity)) {
      return res.status(400).json({ message: 'Insufficient balance or stocks' });
    }

    // Update user balance and stocks
    if (type === 'buy') {
      user.balance -= tradeValue;
      user.stocks[symbol] = (user.stocks[symbol] || 0) + quantity;
    } else {
      user.balance += tradeValue;
      user.stocks[symbol] -= quantity;
    }

    await user.save();

    // Record the trade
    const trade = new Trade({
      userId,
      symbol,
      quantity,
      type,
      price: tradeValue / quantity,
      timestamp: new Date()
    });
    await trade.save();

    res.json({ message: 'Trade executed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Calculate trade value based on symbol and quantity (dummy implementation)
const calculateTradeValue = (symbol, quantity) => {
  // This is a placeholder function. You should replace it with actual logic to fetch real-time stock data and calculate trade value.
  // For simplicity, let's assume trade value is quantity * 100 for any symbol.
  return quantity * 100;
};

module.exports = {
  executeTrade
};
