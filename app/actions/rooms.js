import { createAction } from 'redux-actions';
import {
  REQUEST_ROOMS,
  RESPONSE_ROOMS,
  RESPONSE_ROOMS_FAIL,
  SET_ROOMS_FILTER,
  SET_ROOMS_SORTER,
  MOCK_ROOMS
} from 'constants';

export const requestRooms = createAction(
  REQUEST_ROOMS,
  ({ filter, page, limit }) => ({ filter, page, limit })
);

export const responseRooms = createAction(
  RESPONSE_ROOMS,
  ({ currentPage, total, rooms }) => ({ currentPage, total, rooms })
);

export const responseRoomsFail = createAction(
  RESPONSE_ROOMS_FAIL,
  ({ error }) => ({ error })
);

export const setRoomsFilter = ({ filter }) => {
  return (dispatch) => {
    dispatch({ type: SET_ROOMS_FILTER, payload: { filter } });
  };
};

export const setRoomsSorter = ({ column, order }) => {
  return (dispatch) => {
    dispatch({ type: SET_ROOMS_SORTER, payload: { column, order } });
  };
};

export const getRooms = ({ filter, page, limit }) => {
  return (dispatch) => {
    dispatch(requestRooms({ filter, page, limit }));
    dispatch(responseRooms({
      currentPage: page,
      total: MOCK_ROOMS.length,
      rooms: MOCK_ROOMS
    }));
  };
};
