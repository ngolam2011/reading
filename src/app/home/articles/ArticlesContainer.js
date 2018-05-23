import { connect } from 'react-redux'
import ArticlesComponent from './ArticlesComponent'

const mapStateToProps = (state) => {
  const {items: articles, isGetting } = state.articles

  return {
    articles
  }
}

const ArticlesContainer = connect(mapStateToProps)(ArticlesComponent)

export default ArticlesContainer


