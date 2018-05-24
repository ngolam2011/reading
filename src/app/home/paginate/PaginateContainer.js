import { connect } from 'react-redux'
import PaginateComponent from './PaginateComponent'
import { homeOperations } from '../duck'


const mapDispatchToProps = (dispatch) => {
  const previousPage = (e, currentPage) => {
    e.preventDefault()
    dispatch(homeOperations.nextPage(currentPage))
  }
  const nextPage = (e, currentPage) => {
    e.preventDefault()
    dispatch(homeOperations.previousPage(currentPage))
  }

  return {
    previousPage,
    nextPage
  }
}

const mapStateToProps = (state) => {
  const { currentPage } = state.home
  return {
    currentPage
  }
}

const PaginateContainer = connect(mapStateToProps, mapDispatchToProps)(PaginateComponent)

export default PaginateContainer
