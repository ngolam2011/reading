import axios from 'axios'
import { FETCH_ARTICLES, CHANGE_PAGE, GETTING_ARTICLES, SELECT_ARTICLE } from './types';

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const apiKey = '3b2984fef8a143f0a522a88a34c2dd3e'
const params = {
  'api-key': apiKey,
  q: 'singapore',
  fl: 'snippet, multimedia, pub_date, source, _id',
}

export const fetchArticles = (page) => dispatch => {
  dispatch({
    type: GETTING_ARTICLES
  })

  axios.get(url, {params: { ...params, page: page || 0 } })
    .then(articles => {
      return dispatch({
        type: FETCH_ARTICLES,
        payload: articles.data.response.docs,
      })
    })
}

export const selectNextPage = (nextPage) => dispatch => {
  dispatch({
    type: CHANGE_PAGE,
    currentPage: nextPage
  })
  dispatch(fetchArticles(nextPage))
}

export const selectPreviousPage = (previousPage) => dispatch => {
  previousPage = previousPage >= 0 ? previousPage : 0
  dispatch({
    type: CHANGE_PAGE,
    currentPage: previousPage
  })
  dispatch(fetchArticles(previousPage))
}



export const selectArticle = (articleId) => {
  return {
    type: SELECT_ARTICLE,
    selectArticleId: articleId
  }
}
