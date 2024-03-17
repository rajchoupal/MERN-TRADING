const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const userRoutes = require('./routes/userRoutes');
const config = require('./config');
const { url } = require('url'); // Importing the url module

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set the strictQuery option to false
mongoose.set('strictQuery', false);

// MongoDB Connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('./authRoutes', authRoutes); // Corrected path
app.use('./tradeRoutes', tradeRoutes); // Corrected path
app.use('./userRoutes', userRoutes); // Corrected path

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
