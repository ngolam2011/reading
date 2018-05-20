import { CHANGE_PAGE } from '../actions/types'
export default (state = 0,  action) => {
  switch(action.type) {
    case CHANGE_PAGE:
      return action.currentPage
    default:
      return state
  }
}
