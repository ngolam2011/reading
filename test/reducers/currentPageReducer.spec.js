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
