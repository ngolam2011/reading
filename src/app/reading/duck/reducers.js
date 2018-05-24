import types from './types'

const INITIAL_STATE = { selectedArticle : null }

const readingReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.REDIRECT_READING:
      return { ...state, selectedArticle: action.articleId }
    default:
      return state
  }
}

export default readingReducer
