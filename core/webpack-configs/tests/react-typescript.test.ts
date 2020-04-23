import { getWebpackConfig } from '../src/index';

describe('react-docgen-typescript', () => {
  it('get config', () => {
    expect(getWebpackConfig(['react-docgen-typescript'])).toMatchSnapshot();
  });
  it('merge options', () => {
    expect(
      getWebpackConfig([
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
      ]),
    ).toMatchSnapshot();
  });
});
