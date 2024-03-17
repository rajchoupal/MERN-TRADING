import React, { useState } from 'react';
import axios from 'axios';

const Sell = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSell = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/trades/execute', { symbol, quantity, type: 'sell' });
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Sell</h2>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSell}>
        <div>
          <label>Symbol:</label>
          <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <button type="submit">Sell</button>
      </form>
    </div>
  );
};

export default Sell;
