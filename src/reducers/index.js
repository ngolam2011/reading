import { combineReducers } from 'redux';
import articleReducer from './articleReducer'
import currentPageReducer from './currentPageReducer'

export default combineReducers({
  articles: articleReducer,
  currentPage: currentPageReducer
});
