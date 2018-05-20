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
