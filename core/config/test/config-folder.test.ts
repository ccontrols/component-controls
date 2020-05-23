import { loadConfiguration } from '../src/index';

describe('config-folder', () => {
  it('config file short option', () => {
    expect(
      loadConfiguration(__dirname, undefined, [
        'file',
        'name',
        '-c',
        'fixtures',
      ]),
    ).toMatchSnapshot();
  });
  it('config file long option', () => {
    expect(
      loadConfiguration(__dirname, undefined, [
        'file',
        'name',
        '--config',
        'fixtures',
      ]),
    ).toMatchSnapshot();
  });
});
