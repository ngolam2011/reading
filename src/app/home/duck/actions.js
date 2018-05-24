import types from './types'

const getArticles = () => ( {
  type: types.GET_ARTICLES
} )

const receiveArticles = (articles) => ( {
  type: types.RECEIVE_ARTICLES,
  payload: articles
} )

const redirectToReading = (articleId) => ({
  type: types.REDIRECT_READING,
  articleId
})

const nextPage = () => ({
  type: types.NEXT_PAGE
})

const previousPage = () => ({
  type: types.PREVIOUS_PAGE
})


export default {
  getArticles,
  receiveArticles,
  redirectToReading,
  nextPage,
  previousPage
}
