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


import { CHANGE_PAGE } from '../actions/types'
export default (state = 0,  action) => {
  switch(action.type) {
    case CHANGE_PAGE:
      return action.currentPage
    default:
      return state
  }
}

import { SELECT_ARTICLE } from '../actions/types'
export default (state = null, action) => {
  switch(action.type) {
    case SELECT_ARTICLE:
      return action.selectArticleId
    default:
      return state
  }
}
