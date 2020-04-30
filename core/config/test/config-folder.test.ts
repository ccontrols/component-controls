import { getConfiguration } from '../src/index';

describe('config-folder', () => {
  it('config file short option', () => {
    expect(
      getConfiguration(__dirname, ['file', 'name', '-c', 'fixtures']),
    ).toMatchSnapshot();
  });
  it('config file long option', () => {
    expect(
      getConfiguration(__dirname, ['file', 'name', '--config', 'fixtures']),
    ).toMatchSnapshot();
  });
});
