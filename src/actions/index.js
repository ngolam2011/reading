import axios from 'axios'
import { FETCH_ARTICLES } from './types';

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const apiKey = '3b2984fef8a143f0a522a88a34c2dd3e'

export const fetchArticles = () => dispatch => {
  axios.get(url, { params: { 'api-key': apiKey } })
    .then(articles => {
      return dispatch({
        type: FETCH_ARTICLES,
        payload: handleData(articles)
      })
    })
}

const handleData = (data) => {
  return data.data.response.docs.map(article => {
    const { snippet, multimedia, pub_date, source, _id } = article
    return { snippet, multimedia, pub_date, source, _id }
  })
}
