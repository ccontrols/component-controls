import { mergeWebpackConfig } from '../src';
describe('merge instrument and react-docgen-typescript', () => {
  it('get config', () => {
    const config = mergeWebpackConfig(
      undefined,
      ['react', 'react-docgen-typescript'],
      {},
    );
    expect(config).toMatchObject({
      plugins: [
        {
          _sortedModulesCache: {},
          options: {
            filename: 'component-controls.css',
            ignoreOrder: false,
            experimentalUseImportModule: false,
            chunkFilename: '[id].component-controls.css',
          },
          runtimeOptions: {
            insert: undefined,
            linkType: 'text/css',
            attributes: undefined,
          },
        },
      ],
      optimization: {
        minimizer: [],
      },
      performance: {
        hints: false,
      },
      module: {
        rules: [
          {
            test: {},
            exclude: [{}],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        targets: {
                          browsers: ['last 5 versions', 'ie >= 9'],
                          node: 'current',
                        },
                        modules: 'commonjs',
                        useBuiltIns: 'usage',
                        corejs: 3,
                      },
                    ],
                    [
                      '@babel/preset-react',
                      {
                        runtime: 'classic',
                      },
                    ],
                  ],
                },
              },
            ],
          },
          {
            test: {},
            exclude: [{}],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      'react-app',
                      {
                        flow: false,
                        typescript: true,
                      },
                    ],
                  ],
                },
              },
            ],
          },
          {
            test: {},
            exclude: [{}],
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['last 5 versions', 'ie >= 9'],
                      node: 'current',
                    },
                    modules: 'commonjs',
                    bugfixes: true,
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
          {
            test: {},
            exclude: [{}],
            loader: 'url-loader',
            options: {
              limit: 24576,
              name: '[name].[ext]',
              publicPath: '/static',
              outputPath: '',
            },
          },
          {
            test: {},
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: '',
                },
              },
            ],
          },
          {
            test: {},
            use: [
              {
                options: {},
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
          {
            test: {},
            use: [
              {
                loader: 'raw-loader',
                options: {},
              },
            ],
          },
          {
            test: {},
            use: [
              {
                loader: 'raw-loader',
                options: {},
              },
            ],
          },
          {
            test: {},
            exclude: [{}, {}],
            loader: '@component-controls/loader/loader',
            enforce: 'pre',
            options: {
              propsLoaders: [
                {
                  name: '@component-controls/react-docgen-info',
                  test: {},
                },
                {
                  name: '@component-controls/react-docgen-typescript-info',
                  test: {},
                },
              ],
              mdx: {
                transformMDX: true,
              },
            },
          },
          {
            test: {},
            loader: '@component-controls/loader/loader',
            exclude: [{}, {}],
            enforce: 'pre',
            options: {
              propsLoaders: [
                {
                  name: '@component-controls/react-docgen-info',
                  test: {},
                },
                {
                  name: '@component-controls/react-docgen-typescript-info',
                  test: {},
                },
              ],
            },
          },
        ],
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    });
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
