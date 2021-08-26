import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import { Counter } from './app/ui/counter/Counter';
import './App.css';
import Tracks from 'app/ui/pages/Tracks/TracksPage';
import CustomerLayout from 'app/ui/layout/CustomerLayout/CustomerLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />

              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <span>
                <span>Learn </span>
                <a
                  className="App-link"
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
                <span>, </span>
                <a
                  className="App-link"
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux
                </a>
                <span>, </span>
                <a
                  className="App-link"
                  href="https://redux-toolkit.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux Toolkit
                </a>
                ,<span> and </span>
                <a
                  className="App-link"
                  href="https://react-redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Redux
                </a>
              </span>
            </header>
          </div>
        </Route>
        <Route path="/customer">
          <CustomerLayout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
