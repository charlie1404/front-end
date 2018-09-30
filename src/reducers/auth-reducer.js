import ActionConstants from '../action-constants';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} = ActionConstants;

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: action.payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        inProgress: true,
      };
    default:
      return state;
  }
};
