import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import mailReducer from './mail-reducer';

export default combineReducers({
  authReducer,
  mailReducer,
});
