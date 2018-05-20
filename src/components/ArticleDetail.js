import React, { Component } from 'react'
import Article from './Article'
import Paginate from './Paginate'
import { connect } from 'react-redux'
import { fetchArticles } from '../../src/actions'


class ArticleDetail extends Component {

  render() {
    return (
      <div>
        <p>{ this.props.articleDetail.snippet }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {articles: { items: articles }, selectedArticle } = state
  const articleDetail = articles.find((ele) => ele._id === selectedArticle)

  return {
    articleDetail
  }
}

export default connect(mapStateToProps)(ArticleDetail)
