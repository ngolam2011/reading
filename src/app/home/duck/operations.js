import axios from 'axios'
import { GET_ARTICLES, RECEIVE_ARTICLES } from './types';
import Creators from './actions'


const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const apiKey = '3b2984fef8a143f0a522a88a34c2dd3e'
const params = {
  'api-key': apiKey,
  q: 'singapore',
  fl: 'snippet, multimedia, pub_date, source, _id',
}


const getArticlesAPI = (page) => {
  return axios.get(url, { params: { ...params, page: page || 0 } })
}


const fetchArticlesJson = (page) => dispatch => {
  dispatch(Creators.getArticles())

  getArticlesAPI()
    .then(articles => dispatch(Creators.receiveArticles(articles.data.response.docs))) 
}

const redirectToReadingPage = (articleId, history) => dispatch => {
  dispatch(Creators.redirectToReading(articleId))

  history.push('/reading')
}

const nextPage = (currentPage) => dispatch => {
  dispatch(Creators.getArticles())
  getArticlesAPI(currentPage + 1)
    .then(articles => dispatch(Creators.receiveArticles(articles.data.response.docs))) 
    .then(() => dispatch(Creators.nextPage()))
}

const previousPage = (currentPage) => dispatch => {
  dispatch(Creators.getArticles())
  getArticlesAPI(currentPage - 1)
    .then(articles => dispatch(Creators.receiveArticles(articles.data.response.docs))) 
    .then(() => dispatch(Creators.previousPage()))
}


export default {
  fetchArticlesJson,
  redirectToReadingPage,
  nextPage,
  previousPage
}

