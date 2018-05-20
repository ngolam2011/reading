import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Article from './Article'
import Paginate from './Paginate'
import { connect } from 'react-redux'
import { fetchArticles, selectArticle } from '../../src/actions'


class ArticleList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchArticles())
  }

  handleClickArticle(e, articleId) {
    e.preventDefault()
    this.props.dispatch(selectArticle(articleId))
    this.props.history.push('/detail')
  }

  renderArticles() {
    return (
      <div>
      { this.props.articles.map((article) => {
          return (
            <Article onClickHandle={ this.handleClickArticle.bind(this) } key={article._id} {...article}/>
          )
        }) }
        <Paginate />
      </div>
    )
  }

  render() {
    return (
      <div>
        { !this.props.isGetting ? this.renderArticles() : <h3>Loading...</h3> }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  const {items: articles, isGetting } = state.articles

  return {
    articles,
    isGetting
  }
}

export default connect(mapStateToProps)(withRouter(ArticleList))
