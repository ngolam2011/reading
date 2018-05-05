import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ArticleList from '../../src/components/ArticleList';

describe('Article List Component', () => {
  it('is existing', () => {
    const wrapper = shallow(<ArticleList />);
    
    expect(wrapper.contains("Article 1")).to.equal(true);

  });
});


