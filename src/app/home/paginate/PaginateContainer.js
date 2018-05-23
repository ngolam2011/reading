import { connect } from 'react-redux'
import PaginateComponent from './PaginateComponent'


const mapDispatchToProps = (dispatch) => {
  const previousPage = () => {
    console.log('Previous Page')
  }
  const nextPage = () => {
    console.log('Next Page')
  }

  return {
    previousPage,
    nextPage
  }
}

const PaginateContainer = connect(null, mapDispatchToProps)(PaginateComponent)

export default PaginateContainer
