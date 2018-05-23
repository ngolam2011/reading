import { connect } from 'react-redux'
import ArticleComponent from './ArticleComponent'

const mapDispatchToProps = (dispatch) => {
  const redirectToReading = (e, article) => {
    console.log("Redirecting in Article", e, article)
  }

  return { redirectToReading }
}

const ArticleContainer = connect(
  null,
  mapDispatchToProps
)(ArticleComponent)

export default ArticleContainer
