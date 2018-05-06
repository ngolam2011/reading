import React, { Component } from 'react';
import Article from './Article';
import Paginate from './Paginate';


class ArticleList extends Component {

  renderArticles() {
    return this.props.articles.map((article) => {
      return (
        <Article {...article}/>
      )
    });
  }

  render() {
    return (
      <div>
        { this.renderArticles() }
        <Paginate />
      </div>
    );
  }
}

export default ArticleList;
