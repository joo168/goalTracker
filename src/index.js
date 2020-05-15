import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer);

ReactDOM.render(
  // <Provider store={store} basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
