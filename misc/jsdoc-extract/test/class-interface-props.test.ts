import path from 'path';
import { run } from '../src/index';

describe('class-interface-props', () => {
  it('class-interface-props', () => {
    const result = run(
      path.resolve(__dirname, './fixtures/class-interface-props.tsx'),
    );
    expect(result).toMatchObject({});
  });
});
