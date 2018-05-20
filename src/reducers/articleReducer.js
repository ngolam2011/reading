import { FETCH_ARTICLES, GETTING_ARTICLES } from '../actions/types'
export default (state = { isGetting: false, items: [] }, action) => {
  switch(action.type) {
    case FETCH_ARTICLES:
      return { ...state, items: action.payload, isGetting: false }
    case GETTING_ARTICLES:
      return { ...state, isGetting: true }
    default:
      return state
  }
}
