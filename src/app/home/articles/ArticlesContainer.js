import { connect } from 'react-redux'
import ArticlesComponent from './ArticlesComponent'

const mapStateToProps = (state) => {
  const { articles } = state.home
  
  return {
    articles
  }
}

const ArticlesContainer = connect(mapStateToProps)(ArticlesComponent)

export default ArticlesContainer


