import { connect } from 'react-redux'
import ReadingComponent from './ReadingComponent'


const mapStateToProps = (state) => {
  const {articles: { items: articles }, selectedArticle } = state
  const articleDetail = articles.find((ele) => ele._id === selectedArticle)

  return {
    articleDetail
  }
}

const ReadingContainer = connect(mapStateToProps)(ReadingComponent)

export default ReadingContainer
