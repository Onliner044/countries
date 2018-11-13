import { handleActions } from 'redux-actions';

import { RESPONSE_USERS, IS_USERS_LOADING } from 'constants';

const initialState = {
  users: [],
  isLoading: false
};

const reducer = handleActions({
  [RESPONSE_USERS]: (state, action) => {
    const { users } = action.payload;
    return {
      ...state,
      users
    };
  },
  [IS_USERS_LOADING]: (state, action) => {
    const { isLoading } = action.payload;
    return {
      ...state,
      isLoadingUsers: isLoading
    };
  }
}, initialState);

export default reducer;
