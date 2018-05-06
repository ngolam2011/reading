import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/components/App';
import ArticleList from '../../src/components/ArticleList';
import Dashboard from '../../src/components/Dashboard';

describe('Reading App', () => {
  it('has a dashboard', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Dashboard)).to.have.length(1);
  });

});
