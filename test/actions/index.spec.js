import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import moxios from 'moxios'
import { expect } from 'chai'
import { FETCH_ARTICLES } from '../../src/actions/types'
import * as actions from '../../src/actions'


describe('Actions', () => {
  const midddlewares = [thunk]
  const mockStore = configureMockStore(midddlewares)

  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.unistall
  });

  it('creates FETCH_ARTICLES when fetching articles has been done', () => {
    const expectedActions = { type: FETCH_ARTICLES, payload: payload }
    const store = mockStore({ ariticles: []})
    const payload = [
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
      })

    })
  });
});
