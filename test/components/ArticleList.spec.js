import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ArticleList from '../../src/components/ArticleList';
import Paginate from '../../src/components/Paginate';

describe('Article List Component', () => {

  let articles, wrapper;

  beforeEach(() => {

    wrapper = shallow(<ArticleList />);

  });


  it('use <Article/> to represent article passed into', () => {
    expect(wrapper.find('Article')).to.have.length(1);
  });

  it('has to pass each article to <Article />', () => {
    expect(wrapper.find(Article).first().props().snippet).to.equal('Snippet 1');
  });

  it('has the <Paginate />', () => {
    expect(wrapper.find(Paginate)).to.have.length(1);
  });

});


