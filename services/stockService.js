const axios = require('axios');
const config = require('../config');

// Function to fetch real-time stock data for a given symbol
const getStockData = async (symbol) => {
  try {
    const response = await axios.get(`${config.stockAPIBaseUrl}/quote?symbol=${symbol}&token=${config.stockAPIToken}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error.response.data);
    throw new Error('Failed to fetch stock data');
  }
};

// Function to fetch historical stock data for a given symbol
const getHistoricalData = async (symbol, from, to) => {
  try {
    const response = await axios.get(`${config.stockAPIBaseUrl}/historical-data?symbol=${symbol}&from=${from}&to=${to}&token=${config.stockAPIToken}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching historical data:', error.response.data);
    throw new Error('Failed to fetch historical data');
  }
};

module.exports = {
  getStockData,
  getHistoricalData
};
