import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Dashboard from '../../src/components/Dashboard'
import configureStore from 'redux-mock-store'
import shallowWithStore from './renderContainer'
const mockStore = configureStore()

describe('<Dashboard />', () => {
  let wrapper, store
  beforeEach(() => {

    store = mockStore({ articles: []})
    wrapper =shallowWithStore(<Dashboard />, store)


  })
  it('has <ArticleList /> component', () => {
    expect(wrapper.dive().find('ArticleList')).to.have.length(1)
  })
})
