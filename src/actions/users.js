import apiHandler from './helpers/api-handler';

const userActions = {
  login: (email, password) =>
    apiHandler.post(
      '/user/login',
      {
        user: { email, password },
      },
    ),
  register: (username, email, password) =>
    apiHandler.post(
      '/user/register',
      {
        user: { username, email, password },
      }
    ),
};

export default userActions;
