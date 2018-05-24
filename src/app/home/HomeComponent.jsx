import React, { Component } from 'react'
import ArticlesContainer from './articles/ArticlesContainer'
import PaginateContainer from './paginate/PaginateContainer'

class HomeComponent extends Component {

  componentDidMount() {
    this.props.getArticles()
  }


  render() {
    if (this.props.isGetting)
      return <h3>Loading...</h3>

    return (
      <div>
        <ArticlesContainer />
        <PaginateContainer />
      </div>
    )
  }

}

export default HomeComponent
