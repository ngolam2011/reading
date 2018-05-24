import { connect } from 'react-redux'
import ArticleComponent from './ArticleComponent'
import { withRouter } from 'react-router-dom'
import { homeOperations } from '../duck'

const mapDispatchToProps = (dispatch) => {
  const redirectToReading = (_id, history) => {
    dispatch(homeOperations.redirectToReadingPage(_id, history))
  }

  return { redirectToReading }
}

const ArticleContainer = connect(
  null,
  mapDispatchToProps
)(ArticleComponent)

export default withRouter(ArticleContainer)
