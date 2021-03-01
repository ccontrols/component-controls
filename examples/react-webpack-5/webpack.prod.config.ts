import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
const CopyPlugin = require('copy-webpack-plugin');

import { withComponentControls } from '@component-controls/react-router-integration/webpack-build';

const publicFolder = path.join(__dirname, process.env.PUBLIC_PATH || 'public');
const distFolder = path.join(__dirname, process.env.BUILD_PATH || 'dist');

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: distFolder,
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'dist' }],
    }),
    new CleanWebpackPlugin(),
  ],
  performance: {
    maxEntrypointSize: 8000000,
    maxAssetSize: 8000000,
  },
};

module.exports = withComponentControls({
  config,
  development: false,
  options: { distFolder: publicFolder },
});
