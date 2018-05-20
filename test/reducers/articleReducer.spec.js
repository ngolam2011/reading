import reducer from '../../src/reducers'
import { expect } from 'chai'
import * as types from '../../src/actions/types'


describe('Article reducer', () => {
  
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      articles: {
        items: [],
        isGetting: false
      },
      currentPage: 0
    })
  })

  it('handle FETCH_ARTICLES', () => {
    expect(reducer([], {
      type: types.FETCH_ARTICLES,
      payload: ['article-1', 'article-2']
    })).to.eql({
      articles: {
         items: ['article-1', 'article-2'],
        isGetting: false
      },
      currentPage: 0
    })
  })

  it('handle GETTING_ARTICLES', () => {
    expect(reducer([], {
      type: types.GETTING_ARTICLES
    })).to.eql({
      articles: {
        items: [],
        isGetting: true
      },
      currentPage:0
    })
  })
})
