import { combineReducers } from 'redux';
import  homeReducer  from './app/home/duck'
import readingReducer from './app/reading/duck'

const rootReducer = combineReducers({
  home: homeReducer,
  reading: readingReducer
});

export default rootReducer;
