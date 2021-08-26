import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/core/redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from 'app/ui/utils/globalStyles';
import { SessionContextProvider } from 'app/ui/hooks/useSessionContext';
import { ConnectedRouter } from 'connected-react-router';
import history from 'app/ui/utils/history';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyles />
        <SessionContextProvider>
          <App />
        </SessionContextProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
