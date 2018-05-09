import axios from 'axios'
import { FETCH_ARTICLES } from './types';

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const apiKey = '3b2984fef8a143f0a522a88a34c2dd3e'

export const fetchArticles = () => async dispatch => {
  const articles = await axios.get(url, { params: { 'api-key': apiKey } })
  return dispatch({
    type: FETCH_ARTICLES,
    payload: articles.response.docs
  })

  // return axios.get(url, {
  //   params: {
  //     'api-key': apiKey
  //   }
  //   })
  //   .then((data) => {
  //     const payload = data.data.response.docs.map(( { snippet, multimedia, pub_date, source, _id } ) => {
  //       return {
  //         snippet,
  //         multimedia,
  //         pub_date,
  //         source,
  //         _id
  //       }
  //     })

  //     dispatch({
  //       type: FETCH_ARTICLES,
  //       payload
  //     })
  //   })
}
