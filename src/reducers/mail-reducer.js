import ActionConstants from '../action-constants';

const {
  SEND_MAIL_REQUEST,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILED,
} = ActionConstants;

export default function mailReducer(state = {}, action) {
  switch (action.type) {
    case SEND_MAIL_SUCCESS:
      return {
        inProgress: false,
        isSendMailSuccess: true,
      };
    case SEND_MAIL_FAILED:
      return {
        inProgress: false,
        isSendMailFailed: true,
      };
    case SEND_MAIL_REQUEST:
      return {
        inProgress: true,
      };
    default:
      return state;
  }
}
