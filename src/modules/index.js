import { combineReducers } from 'redux';
import user from './user';
import calendar from './calendar';
import add from './add';

const rootReducer = combineReducers({
  calendar,
  user,
  add,
});

export default rootReducer;
