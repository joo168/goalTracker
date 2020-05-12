import { createAction, handleActions } from 'redux-actions';

const SET_USER = 'user/SET_USER';

export const setUser = createAction(SET_USER, username => username);

const initialState = {
  username: '',
};

export default handleActions(
  {
    [SET_USER]: (state, action) => ({
      ...state,
      username: action.payload,
    }),
  },
  initialState,
);
