import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

describe('FullHeader', () => {
  it('should have the tag header when mount', () => {
    const wrapper = shallow(<FullHeader />);
    expect(wrapper.find('header')).to.have.length(1);
  });

  it('should have the tag h1 when title passed', () => {
    const wrapper = shallow(<FullHeader title="TDD" />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should not have the tag h1 when title is not passed', () => {
    const wrapper = shallow(<FullHeader />);
    expect(wrapper.find('h1')).to.have.length(0);
  });

  it('should have the correct content is title is passed', () => {
    const wrapper = shallow(<FullHeader title="TDD" />);
    expect(wrapper.find('h1').props().children).to.be.equal('TDD');
  });
});
