import { combineReducers } from 'redux';
import articleReducer from './articleReducer'
import currentPageReducer from './currentPageReducer'
import selectArticleReducer from './selectArticleReducer'

export default combineReducers({
  articles: articleReducer,
  currentPage: currentPageReducer,
  selectedArticle: selectArticleReducer
});
