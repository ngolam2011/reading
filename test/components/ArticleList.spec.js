import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ArticleList from '../../src/components/ArticleList';
import Article from '../../src/components/Article';
import Paginate from '../../src/components/Paginate';

describe('Article List Component', () => {

  let articles, wrapper;

  beforeEach(() => {
    articles = [
      { 
        snippet: 'Snippet 1',
        multimedia: 'Multimedia 1',
        pub_date: 'Public Date 1',
        source: 'Source 1'
      },
      { 
        snippet: 'Snippet 2',
        multimedia: 'Multimedia 2',
        pub_date: 'Public Date 2',
        source: 'Source 2'
      },

    ];

    wrapper = shallow(<ArticleList articles={articles}/>);

  });


  it('use <Article/> to represent article passed into', () => {
    expect(wrapper.find(Article)).to.have.length(2);
  });

  it('has to pass each article to <Article />', () => {
    expect(wrapper.find(Article).first().props().snippet).to.equal('Snippet 1');
  });

  it('has the <Paginate />', () => {
    expect(wrapper.find(Paginate)).to.have.length(1);
  });

});


