import { ControlTypes } from './index';

describe('verify imports', () => {
  it('Should merge property value', () => {
    expect(ControlTypes.TEXT === 'text').toEqual(true);
  });
});
