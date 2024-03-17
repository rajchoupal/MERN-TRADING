import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Portfolio from './components/Dashboard/Portfolio';
import TradeHistory from './components/Dashboard/TradeHistory';
import Watchlist from './components/Dashboard/Watchlist';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/trade-history" component={TradeHistory} />
          <Route path="/watchlist" component={Watchlist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
