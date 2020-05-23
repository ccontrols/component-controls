const { getWebpackConfig } = require('@component-controls/webpack-configs');
const LoaderPlugin = require('@component-controls/loader/plugin');
import { LoaderOptions } from './types';

const defaultRules = ['instrument', 'react-docgen-typescript'];

exports.onCreateWebpackConfig = ({ actions }: any, options: LoaderOptions) => {
  const webpackConfig = getWebpackConfig(options.webpack || defaultRules);
  console.log(webpackConfig);
  actions.setWebpackConfig({
    ...webpackConfig,
    plugins: [
      new LoaderPlugin({
        config: options.config,
      }),
    ],
  });
};
