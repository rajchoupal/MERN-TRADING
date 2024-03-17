import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/users/current'); // Assuming an endpoint to fetch current user details
        setUser(response.data);
      } catch (error) {
        setError(error.response.data.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h2>Portfolio</h2>
      {error && <div className="error">{error}</div>}
      {user && (
        <div>
          <h3>Username: {user.username}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Balance: {user.balance}</h3>
          <h3>Stocks:</h3>
          <ul>
            {Object.keys(user.stocks).map((symbol) => (
              <li key={symbol}>
                {symbol}: {user.stocks[symbol]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
