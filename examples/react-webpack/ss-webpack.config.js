const {
  getBundleName,
  defaultCompileProps,
} = require('@component-controls/core');
const { compile, watch } = require('@component-controls/webpack-compile');

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const { StorePlugin } = require('@component-controls/store/plugin');

module.exports = async function(env, options) {
  /*   const buildOptions = {
    ...defaultCompileProps,
    configPath: '.config',
    ...env,
  };
  const run = process.env.NODE_ENV === 'development' ? watch : compile;
  await run(buildOptions);
 */ const config = {
    mode: options.mode,
    target: 'web',
    devServer: {
      contentBase: './public',
    },
    entry: {
      app: ['./src/App.tsx'],
      vendor: ['react', 'react-dom'],
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/[name].bundle.js',
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
      }),
    ],
  };
  return config;
};
