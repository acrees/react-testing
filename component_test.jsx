import React from 'react';
import { mount } from 'enzyme';
import Chai from 'chai';
import Component from './component.jsx';

Chai.should();

class MockStore {
  constructor() {
    this.onClickActionWasDispatched = false;
    this.dispatch = this._dispatch.bind(this);
  }

  subscribe() {}
  getState() { return {}; }

  _dispatch({type}) {
    if (type === 'on-click') this.onClickActionWasDispatched = true;
  }

}

describe('Component', () => {
  it('Component renders text', () => {
    const mockStore = new MockStore();
    const sut = mount(<Component store={mockStore} />);

    sut.find('h1').text().should.equal('Test');
    sut.find('button').text().should.equal('Click me!');
  });
  it('Dispatches an on-click action when clicked', () => {
    const mockStore = new MockStore();
    const sut = mount(<Component store={mockStore} />);

    sut.find('button').simulate('click');

    mockStore.onClickActionWasDispatched.should.be.true;
  });
});
