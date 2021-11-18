import {combineReducers} from 'redux';
import search from './search';

const rootReducer = combineReducers({
  searchState: search,
});

export default rootReducer;
