import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { createLogger } from 'redux-logger';

export const history = createBrowserHistory();

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(routerMiddleware(history), thunk);
  }
  // return applyMiddleware(routerMiddleware(history), thunk, createLogger());
  return applyMiddleware(routerMiddleware(history), thunk);
};

export const store = createStore(
  connectRouter(history)(rootReducer),
  undefined,
  composeWithDevTools(getMiddleware())
);
