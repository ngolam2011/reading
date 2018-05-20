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
    return (
      <div>
      { this.props.articles.map((article) => {
          return (
            <Article key={article._id} {...article}/>
          )
        })
      }
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

export default connect(mapStateToProps)(ArticleList)
