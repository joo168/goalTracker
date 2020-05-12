import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';

const SET_SELECTED_DAY = 'calendar/SET_SELECTED_DAY';

export const setSelectedDay = createAction(SET_SELECTED_DAY, day => day);

const initialState = {
  selectedDay: moment(),
};

const calendar = handleActions(
  {
    [SET_SELECTED_DAY]: (state, action) => ({
      ...state,
      selectedDay: action.payload,
    }),
  },
  initialState,
);

export default calendar;
