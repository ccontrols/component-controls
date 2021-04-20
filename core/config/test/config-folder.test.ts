import path from 'path';
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
    ).toMatchObject({
      config: {
        addons: [
          {
            name: '@component-controls/storybook',
            options: {
              webpack: ['instrument', 'react-docgen-typescript'],
            },
          },
        ],
        stories: [
          '../../../../ui/editors/src/**/*.stories.(js|jsx|tsx|mdx)',
          '../../../../ui/components/src/**/*.stories.(js|jsx|tsx|mdx)',
          '../../../../ui/blocks/src/**/*.stories.(js|jsx|tsx|mdx)',
          '../../../../examples/stories/src/**/*.stories.(js|jsx|tsx|mdx)',
        ],
      },
      configPath: path.resolve(__dirname, './fixtures'),
      optionsFilePath: undefined,
    });
  });
  it('config file long option', () => {
    expect(
      loadConfiguration(__dirname, undefined, [
        'file',
        'name',
        '--config',
        'fixtures',
      ]),
    ).toMatchObject({
      config: {
        addons: [
          {
            name: '@component-controls/storybook',
            options: {
              webpack: ['instrument', 'react-docgen-typescript'],
            },
          },
        ],
        stories: [
          '../../../../ui/editors/src/**/*.stories.(js|jsx|tsx|mdx)',
          '../../../../ui/components/src/**/*.stories.(js|jsx|tsx|mdx)',
          '../../../../ui/blocks/src/**/*.stories.(js|jsx|tsx|mdx)',
          '../../../../examples/stories/src/**/*.stories.(js|jsx|tsx|mdx)',
        ],
      },
      configPath: path.resolve(__dirname, './fixtures'),
      optionsFilePath: undefined,
    });
  });
});
