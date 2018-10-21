import ActionConstants from '../action-constants';
import apiHandler from './helpers/api-handler';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
} = ActionConstants;

export function login(email, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return apiHandler('user/login', 'post', { email, password })
      .then((data) => {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        return data;
      })
      .catch(() => {
        setTimeout(() => {
          dispatch({ type: LOGIN_FAILED, payload: 'Login Failed' });
        }, 200);
      });
  };
}

export function register(email, password) {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    const data = await apiHandler('user/login', 'post', { email, password });
    return dispatch({ type: REGISTER_SUCCESS, payload: data });
  };
}
