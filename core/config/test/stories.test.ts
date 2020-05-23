import { loadConfiguration, extractStories } from '../src/index';

describe('config-folder', () => {
  it('config file short option', () => {
    expect(
      extractStories(
        loadConfiguration(__dirname, undefined, [
          'file',
          'name',
          '-c',
          'fixtures',
        ]),
      ),
    ).toMatchSnapshot();
  });

  it('config file long option', () => {
    expect(
      extractStories(
        loadConfiguration(__dirname, undefined, [
          'file',
          'name',
          '--config',
          'fixtures',
        ]),
      ),
    ).toMatchSnapshot();
  });
});
