import axios from 'axios';
import ActionConstants from '../action-constants';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
} = ActionConstants;

const { API_END_POINT } = process.env;

export const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios.post(`${API_END_POINT}/user/login`, { email, password })
    .then(data => dispatch({ type: LOGIN_SUCCESS, payload: data }));
};

export const register = (email, password) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return axios.post(`${API_END_POINT}/user/REGISTER`, { email, password })
    .then(data => dispatch({ type: REGISTER_SUCCESS, payload: data }));
};
