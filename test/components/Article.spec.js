import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Article from '../../src/components/Article';

describe('<Article/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Article />);
  });

  it('shows all properties of an article', () => {
    const article = { 
      snippet: 'Snippet 1',
      pub_date: 'Public Date',
      source: 'Source'
    };

    wrapper.setProps(article);

    expect(wrapper.contains('Snippet 1')).to.equal(true);
    expect(wrapper.contains('Public Date')).to.equal(true);
    expect(wrapper.contains('Source')).to.equal(true);
  });

});
