import { createAction } from 'redux-actions';
import axios from 'axios';
import { RESPONSE_POSTS, IS_POSTS_LOADING } from 'constants';

const responsePosts = createAction(
  RESPONSE_POSTS,
  (users) => ({ users })
);

const setPostsLoading = createAction(
  IS_POSTS_LOADING,
  (isLoading) => ({ isLoading })
);

const requestPosts = () => {
  return dispatch => {
    dispatch(setPostsLoading(true));
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch(responsePosts(response.data));
        dispatch(setPostsLoading(false));
      })
      .catch(err => { dispatch(setPostsLoading(false)); throw err; });
  };
};

export { responsePosts, requestPosts, setPostsLoading };
