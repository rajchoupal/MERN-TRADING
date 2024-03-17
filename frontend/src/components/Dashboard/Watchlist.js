import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get('/api/watchlist'); // Assuming an endpoint to fetch watchlist
        setWatchlist(response.data);
      } catch (error) {
        setError(error.response.data.message);
      }
    };

    fetchWatchlist();
  }, []);

  const removeFromWatchlist = async (symbol) => {
    try {
      await axios.delete(`/api/watchlist/${symbol}`); // Assuming an endpoint to remove symbol from watchlist
      setWatchlist(watchlist.filter(item => item.symbol !== symbol));
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Watchlist</h2>
      {error && <div className="error">{error}</div>}
      <ul>
        {watchlist.map((item) => (
          <li key={item.symbol}>
            {item.symbol} - {item.companyName}{' '}
            <button onClick={() => removeFromWatchlist(item.symbol)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;