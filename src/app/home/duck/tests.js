import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import moxios from 'moxios'
import { expect } from 'chai'
import { FETCH_ARTICLES, FETCH_ARTICLES_BY_PAGE, CHANGE_PAGE } from '../../src/actions/types'
import * as actions from '../../src/actions'


describe('Actions', () => {
  const midddlewares = [thunk]
  const mockStore = configureMockStore(midddlewares)
  let store, payload

  beforeEach(() => {
    moxios.install()
    store = mockStore({ ariticles: { items: [], isGetting: false }, currentPage: 0 })
    payload = [
      {
        snippet: 'LEAD: Textron Inc',
        source: 'The New York Times',
        multimedia: [],
        pub_date: '1990-10-19T00:00:00Z',
        _id: '4fd1b09a8eb7c8105d6d2100'
      },
      {
        snippet: 'LEAD: Pat Dye, the Auburn',
        source: 'The New York Times',
        multimedia: [],
        pub_date: '1990-10-01T00:00:00Z',
        _id: '4fd1b09a8eb7c8105d6d2108'
      }
    ]
  })

  afterEach(() => {
    moxios.unistall
  })

  it('creates FETCH_ARTICLES when fetching articles has been done', (done) => {
    const expectedActions = { type: FETCH_ARTICLES, payload: payload }
    store.dispatch(actions.fetchArticles())

    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: 
        { docs: [
          {
            snippet: 'LEAD: Textron Inc',
            source: 'The New York Times',
            multimedia: [],
            pub_date: '1990-10-19T00:00:00Z',
            _id: '4fd1b09a8eb7c8105d6d2100'
          },
          {
            snippet: 'LEAD: Pat Dye, the Auburn',
            source: 'The New York Times',
            multimedia: [],
            pub_date: '1990-10-01T00:00:00Z',
            _id: '4fd1b09a8eb7c8105d6d2108'
          }

        ] }

      }).then(function() {
        expect(store.getActions()[0]).to.eql(expectedActions)
        done()
      })
    })

    done()
  })

  it('create CHANGE_PAGE', (done) => {
    let expectedActions
    expectedActions = { type: CHANGE_PAGE, currentPage: 1 }
    store.dispatch(actions.selectNextPage(1))
    expect(store.getActions()[0]).to.eql(expectedActions)

    done()
  })


})



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



import reducer from '../../src/reducers'
import { expect } from 'chai'
import * as types from '../../src/actions/types'


describe('Current page reducer', () => {
  it('handle NEXT_PAGE', () => {
    expect(reducer([], {
      type: types.CHANGE_PAGE,
      currentPage: 2
    })).to.eql({
      articles: {
        items: [],
        isGetting: false
      },
      currentPage:2
    })
  })
})
