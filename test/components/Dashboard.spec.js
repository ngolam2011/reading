import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Dashboard from '../../src/components/Dashboard';

describe('<Dashboard />', () => {
  it('has <ArticleList /> component', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('ArticleList')).to.have.length(1);
  });
});
