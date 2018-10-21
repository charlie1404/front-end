import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { createLogger } from 'redux-logger';
import ActionConstants from './action-constants';

const {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} = ActionConstants;

export const history = createBrowserHistory();

const localStorageMiddleware = store => next => (action) => {
  if (action.type === LOGIN_SUCCESS && action.payload.data.token) {
    localStorage.setItem('USER_AUTH_TOKEN', action.payload.data.token);
  }
  if (action.type === LOGOUT_SUCCESS) {
    localStorage.setItem('USER_AUTH_TOKEN', '');
  }
  next(action);
};

function getMiddleware() {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(routerMiddleware(history), thunk, localStorageMiddleware);
  }
  // return applyMiddleware(routerMiddleware(history), thunk, createLogger());
  return applyMiddleware(routerMiddleware(history), thunk, localStorageMiddleware);
}

export const store = createStore(
  connectRouter(history)(rootReducer),
  undefined,
  composeWithDevTools(getMiddleware())
);
