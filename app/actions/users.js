import { createAction } from 'redux-actions';
import axios from 'axios';
import { RESPONSE_USERS, IS_USERS_LOADING } from 'constants';

const responseUsers = createAction(
  RESPONSE_USERS,
  (users) => ({ users })
);

const setUsersLoading = createAction(
  IS_USERS_LOADING,
  (isLoading) => ({ isLoading })
);

const requestUsers = () => {
  return (dispatch) => {
    dispatch(setUsersLoading(true));

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch(responseUsers(response.data));
        dispatch(setUsersLoading(false));
      })
      .catch(err => { dispatch(setUsersLoading(false)); throw err; });
  };
};

export { requestUsers, responseUsers, setUsersLoading };
