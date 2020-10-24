import { getWebpackConfig } from '../src/index';

describe('merge instrument and react-docgen-typescript', () => {
  it('get config', () => {
    expect(
      getWebpackConfig(['instrument', 'react-docgen-typescript'], {}),
    ).toMatchSnapshot();
  });
  it('merge options', () => {
    expect(
      getWebpackConfig(
        [
          'instrument',
          {
            name: 'react-docgen-typescript',
            config: {
              module: {
                rules: [
                  {
                    loader: '@component-controls/loader/loader',
                    options: {
                      //instrumentation options
                      prettier: {
                        tabWidth: 4,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
        {},
      ),
    ).toMatchSnapshot();
  });
});
