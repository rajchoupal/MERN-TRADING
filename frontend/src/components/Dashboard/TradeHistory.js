import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TradeHistory = () => {
  const [trades, setTrades] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTradeHistory = async () => {
      try {
        const response = await axios.get('/api/trades/history'); // Assuming an endpoint to fetch trade history
        setTrades(response.data);
      } catch (error) {
        setError(error.response.data.message);
      }
    };

    fetchTradeHistory();
  }, []);

  return (
    <div>
      <h2>Trade History</h2>
      {error && <div className="error">{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade._id}>
              <td>{trade.symbol}</td>
              <td>{trade.quantity}</td>
              <td>{trade.type}</td>
              <td>${trade.price.toFixed(2)}</td>
              <td>{new Date(trade.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;
