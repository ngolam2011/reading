import { SELECT_ARTICLE } from '../actions/types'
export default (state = null, action) => {
  switch(action.type) {
    case SELECT_ARTICLE:
      return action.selectArticleId
    default:
      return state
  }
}
