import React from 'react';
import { shallow } from 'enzyme';
import Chai from 'chai';
import Component from './component.jsx';

Chai.should();

describe('Component', () => {
  it('Component renders text', () => {
    const sut = shallow(<Component />);
    sut.find('div').text().should.equal('Test');
  });
});
