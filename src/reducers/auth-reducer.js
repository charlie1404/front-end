import ActionConstants from '../action-constants';
import { LOGIN_FAILED } from '../action-constants/users';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} = ActionConstants;

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        inProgress: false,
        isloginSuccess: true,
      };
    case LOGIN_FAILED:
      return {
        inProgress: false,
        isloginSuccess: false,
      };
    case LOGIN_REQUEST:
      return {
        inProgress: true,
      };
    default:
      return state;
  }
}
