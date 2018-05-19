import axios from 'axios'
import { FETCH_ARTICLES, FETCH_ARTICLES_BY_PAGE } from './types';

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const apiKey = '3b2984fef8a143f0a522a88a34c2dd3e'
const params = {
  'api-key': apiKey,
  q: 'singapore',
  fl: 'snippet, multimedia, pub_date, source, _id',
}

export const fetchArticles = () => dispatch => {
  axios.get(url, { params })
    .then(articles => {
      return dispatch({
        type: FETCH_ARTICLES,
        payload: articles.data.response.docs
      })
    })
}


export const fetchArticlesByPage = (page) => dispatch => {
  axios.get(url, { params: { ...params, page } })
    .then(articles => {
      return dispatch({
        type: FETCH_ARTICLES_BY_PAGE,
        payload: articles.data.response.docs
      })
    })

}

