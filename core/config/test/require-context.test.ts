import { loadConfiguration, configRequireContext } from '../src/index';

describe('require-context', () => {
  it('exact names', () => {
    expect(
      configRequireContext(
        loadConfiguration(__dirname, undefined, [
          'file',
          'name',
          '--config',
          'fixtures/exact-names',
        ]),
      ),
    ).toMatchSnapshot();
  });
});
