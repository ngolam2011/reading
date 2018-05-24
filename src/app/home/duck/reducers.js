import types from './types'


const INITIAL_STATE = {
  articles: [],
  isGetting: false,
  currentPage: 0
}

const homeReducer = (state = INITIAL_STATE, action) => {
  const { currentPage } = state
  switch(action.type) {
    case types.GET_ARTICLES:
      return { ...state, isGetting: true }
    case types.RECEIVE_ARTICLES:
      return { ...state, isGetting: false, articles: action.payload }
    case types.PREVIOUS_PAGE:
      const previousPage = currentPage > 0 ? ( currentPage - 1) : currentPage
      return { ...state, currentPage: previousPage }
    case types.NEXT_PAGE:
      return { ...state, currentPage: (currentPage + 1) }
    default:
      return state
  }
}


export default homeReducer
