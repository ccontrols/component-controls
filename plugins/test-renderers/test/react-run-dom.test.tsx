import React from 'react';
import { reactRunDOM } from '../src/react-run-dom';

const Test = () => (
  <div
    className="test"
    data-testid="test-component"
    style={{ backgroundColor: 'blue' }}
  >
    jazmine
  </div>
);

describe('reactRunDOM', () => {
  it('create node', async () => {
    const results = await reactRunDOM(<Test />, node => {
      return node.querySelector('.test').getAttribute('style');
    });
    expect(results).toBe('background-color: blue;');
  });
});
