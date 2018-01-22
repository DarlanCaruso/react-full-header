import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

describe('FullHeader', () => {
  it('should have the tag header when mount', () => {
    const wrapper = shallow(<FullHeader />);
    expect(wrapper.find('header')).to.have.length(1);
  });
});
