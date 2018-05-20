import React from 'react'
import { expect } from 'chai'
import ArticleList from '../../src/components/ArticleList'
import Article from '../../src/components/Article'
import Paginate from '../../src/components/Paginate'
import configureStore from 'redux-mock-store'
import shallowWithStore from './renderContainer'
const mockStore = configureStore()

describe('Article List Component', () => {

  let articles, wrapper, store

  beforeEach(() => {
    const payload = { 
      items : [
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

      ],
      isGetting: false
    }
    store = mockStore({ articles: payload})
    wrapper =shallowWithStore(<ArticleList />, store)


  })


  it('use <Article/> to represent article passed into', () => {
    expect(wrapper).to.be.a('object')
  })

  it('has to pass each article to <Article />', () => {
    expect(wrapper.dive().find(Article).first().props().snippet).to.equal('LEAD: Textron Inc')
  })

  it('has the <Paginate />', () => {
    expect(wrapper.dive().find(Paginate)).to.have.length(1)
  })

})


