import ActionConstants from '../action-constants';
import apiHandler from './helpers/api-handler';

const {
  LOAD_MAILS_REQUEST,
  LOAD_MAILS_SUCCESS,
  LOAD_MAILS_FAILED,
  SEND_MAIL_REQUEST,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILED,
} = ActionConstants;

const config = {
  headers: {
    Authorization: localStorage.getItem('USER_AUTH_TOKEN'),
  },
};

export function loadMails() {
  return (dispatch) => {
    dispatch({ type: LOAD_MAILS_REQUEST });
    return apiHandler('mails', 'get', null, config)
      .then((data) => {
        dispatch({ type: LOAD_MAILS_SUCCESS, payload: data });
        return data;
      })
      .catch(() => {
        setTimeout(() => {
          dispatch({ type: LOAD_MAILS_FAILED, payload: 'Some Internal Error Occured' });
        }, 200);
      });
  };
}

export function sendMail(...params) {
  return (dispatch) => {
    dispatch({ type: SEND_MAIL_REQUEST });
    return apiHandler('mail/send', 'post', ...params, config)
      .then((data) => {
        dispatch({ type: SEND_MAIL_SUCCESS, payload: data });
        return data;
      })
      .catch(() => {
        setTimeout(() => {
          dispatch({ type: SEND_MAIL_FAILED, payload: 'Some Internal Error Occured' });
        }, 200);
      });
  };
}
