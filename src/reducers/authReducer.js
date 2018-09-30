import { LOGIN_ACTION } from '../action-constants';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return action.payload.then(response => ({
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null,
        data: response,
      }));
    default:
      return state;
  }
};
