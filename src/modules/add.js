import { createAction, handleActions } from 'redux-actions';

const CHANGE_COLOR = 'add/CHANGE_COLOR';
const CHANGE_ITEM = 'add/CHANGE_ITEM';
const SET_RESULTS = 'add/SET_RESULTS';
const TOGGLE = 'add/TOGGLE';
const REMOVE = 'add/REMOVE';

export const changeColor = createAction(CHANGE_COLOR, (color) => color);
export const changeItem = createAction(CHANGE_ITEM, (list) => list);
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

let id = 3;
export const setResults = createAction(SET_RESULTS, (name, color) => ({
  id: id++,
  name: name,
  checked: false,
  color: color,
}));

const initialState = {
  item: '',
  color: 'black',
  results: [
    {
      id: 1,
      name: '앱 만들기',
      color: 'black',
    },
    {
      id: 2,
      name: '영양제 챙겨먹기',
      color: 'black',
    },
  ],
};

const add = handleActions(
  {
    [SET_RESULTS]: (state, { payload: result }) => ({
      ...state,
      results: state.results.concat(result),
    }),
    [CHANGE_COLOR]: (state, action) => ({
      ...state,
      color: action.payload,
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      results: state.results.filter((result) => result.id !== id),
    }),
    [CHANGE_ITEM]: (state, action) => ({
      ...state,
      item: action.payload,
    }),
  },
  initialState,
);

export default add;
