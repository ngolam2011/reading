import React from 'react'
import ArticleContainer from './ArticleContainer'

function ArticlesComponent({
  articles
}) {
  return (
    articles.map(article => {
      return <ArticleContainer key={ article._id } { ...article } />
    })
  )
}

export default ArticlesComponent
