import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/components/App';
import ArticleList from '../../src/components/ArticleList';

describe('Reading App', () => {
  it('is existing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains("Reading News")).to.equal(true);
  });

  it('have a list of articles', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<ArticleList />)).to.equal(true);
  });
});
