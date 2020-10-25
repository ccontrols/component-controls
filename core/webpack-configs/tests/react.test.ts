import { mergeWebpackConfig } from '../src';
describe('merge instrument and react-docgen-typescript', () => {
  it('get config', () => {
    expect(
      mergeWebpackConfig(undefined, ['react', 'react-docgen-typescript'], {}),
    ).toMatchSnapshot();
  });
  it('custom loader options', () => {
    const config = mergeWebpackConfig(
      undefined,
      ['react', 'react-docgen-typescript'],
      {
        loaders: {
          'css-loader': {
            modules: {
              localIdentName: '[name].[local].[hash]',
            },
          },
        },
      },
    );
    let cssLoader;
    for (const rule of config.module.rules) {
      if (Array.isArray(rule.use)) {
        const use = rule.use.find(
          use => typeof use === 'object' && use.loader === 'css-loader',
        );
        if (use) {
          cssLoader = use;
          break;
        }
      }
    }
    expect(cssLoader.options).toMatchObject({
      modules: { localIdentName: '[name].[local].[hash]' },
    });
  });
});
