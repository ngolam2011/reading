import React, { Component } from 'react'
import Article from './Article'
import Paginate from './Paginate'
import { connect } from 'react-redux'
import { fetchArticles } from '../../src/actions'


class ArticleList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchArticles())
  }

  renderArticles() {
    return this.props.articles.map((article) => {
      return (
        <Article key={article._id} {...article}/>
      )
    })
  }

  render() {
    return (
      <div>
        { this.props.articles.length ? this.renderArticles() : <h3>Loading...</h3> }
        <Paginate />
      </div>
    )
  }
}

const mapStateToProps = ({ articles }) => {
  return {
    articles
  }
}

export default connect(mapStateToProps)(ArticleList)
