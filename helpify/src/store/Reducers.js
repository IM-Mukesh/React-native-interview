import {combineReducers} from 'redux';
import entry from './EntryReducer';
const appReducer = combineReducers({
  entry,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
