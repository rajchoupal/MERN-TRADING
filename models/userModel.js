const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  stocks: {
    type: Map,
    of: Number,
    default: {}
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
