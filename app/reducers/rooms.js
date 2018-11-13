import { handleActions } from 'redux-actions';
import {
  REQUEST_ROOMS,
  RESPONSE_ROOMS,
  RESPONSE_ROOMS_FAIL,
  SET_ROOMS_FILTER,
  SET_ROOMS_SORTER,
  ASC
} from 'constants';

const initialState = {
  data: [],
  isLoading: false,
  isLoaded: false,
  total: 0,
  filter: {},
  sorter: {
    order: ASC,
    column: 'id'
  },
  page: 0,
  limit: 0,
  error: null
};

const reducer = handleActions({
  [REQUEST_ROOMS]: (state, action) => {
    const { page, limit } = action.payload;

    return {
      ...state,
      data: [],
      isLoading: true,
      isLoaded: false,
      total: 0,
      page,
      limit,
      error: null
    };
  },
  [RESPONSE_ROOMS]: (state, action) => {
    const { total, rooms } = action.payload;

    return {
      ...state,
      data: rooms,
      isLoading: false,
      isLoaded: true,
      total,
      error: null
    };
  },
  [RESPONSE_ROOMS_FAIL]: (state, action) => {
    const { error } = action.payload;

    return {
      ...state,
      data: [],
      isLoading: false,
      isLoaded: true,
      total: 0,
      error
    };
  },
  [SET_ROOMS_FILTER]: (state, action) => {
    const { filter } = action.payload;

    return {
      ...state,
      filter
    };
  },
  [SET_ROOMS_SORTER]: (state, action) => {
    const { column, order } = action.payload;

    return {
      ...state,
      sorter: { column, order }
    };
  }
}, initialState);

export default reducer;
