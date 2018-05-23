import ArticleContainer from './ArticleContainer'

function ArticlesComponent({
  articles
}) {
  return (
    articles.map(article => {
      return <ArticleComponent key={ article._id } { ...article } />
    })
  )
}

export default ArticlesComponent
