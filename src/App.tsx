import CustomerLayout from 'app/ui/layout/CustomerLayout/CustomerLayout';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
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
  );
}

export default App;
