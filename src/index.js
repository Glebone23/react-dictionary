import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './app';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

ReactDOM.render(
  (
    <Provider store={store}>
      <App title="Dictionary" />
    </Provider>
  ),
  document.getElementById('root'),
);
