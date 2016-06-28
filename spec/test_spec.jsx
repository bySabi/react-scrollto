//import './setup';
//import React from 'react';
import test from 'tape';
//import { mount } from 'enzyme';

import { scrollInSpy } from '../src/index';

/*
test('<Foo /> adds two numbers', (assert) => {
  const wrapper = shallow(<Foo a={ 2 } b={ 2 } />)
  assert.equal(wrapper.text(), '4')

  assert.end()
})
*/
/*
test('<MediaQuery />', (assert) => {
  const mQuery = mount(<MediaQuery />);
  assert.equal(mQuery.text(), '4', 'is not equal');

  assert.end();
});

*/

test('test1', (assert) => {
  assert.plan(1);
  assert.equal(1, 1, 'is not equal');
});

test('test2', (assert) => {
  assert.equal(2, 0, 'is not equal');
  assert.fail('test it failed two');
  assert.end();
});
