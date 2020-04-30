import { getConfiguration, extractStories } from '../src/index';

describe('config-folder', () => {
  it('config file short option', () => {
    expect(
      extractStories(
        getConfiguration(__dirname, ['file', 'name', '-c', 'fixtures']),
      ),
    ).toMatchSnapshot();
  });

  it('config file long option', () => {
    expect(
      extractStories(
        getConfiguration(__dirname, ['file', 'name', '--config', 'fixtures']),
      ),
    ).toMatchSnapshot();
  });
});
