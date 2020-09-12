import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { withAuthentication } from 'react-aad-msal';
import { authProvider } from './authProvider';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authenticationReducer from './store/reducers/authentication';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

const loggerMiddleware = createLogger({ collapse: true });
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunkMiddleware));

const AppWithAuth = withAuthentication(App, {
  provider: authProvider,
  reduxStore: store
});

const app = (
  <Provider store={store}>
    <BrowserRouter basename="/">
      {/* <App /> */}
      <AppWithAuth />
    </BrowserRouter>
  </Provider >
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
