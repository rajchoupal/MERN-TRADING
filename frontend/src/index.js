import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Portfolio from './components/Dashboard/Portfolio';
import Watchlist from './components/Dashboard/Watchlist';
import TradeHistory from './components/Dashboard/TradeHistory';
import Login from './components/Auth.js/Login';
import Register from './components/Auth.js/Register';
import Buy from './components/Trade/Buy';
import Sell from './components/Trade/Sell';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/trade-history" component={TradeHistory} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/buy" component={Buy} />
          <Route path="/sell" component={Sell} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


