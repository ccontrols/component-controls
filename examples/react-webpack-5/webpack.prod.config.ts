import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { withComponentControls } from '@component-controls/react-router-integration/webpack-build';

const outFolder = process.env.BUILD_PATH || 'build';
const distFolder = path.join(__dirname, outFolder);

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
  ],
  performance: {
    maxEntrypointSize: 8000000,
    maxAssetSize: 8000000,
  },
};

module.exports = withComponentControls({
  config,
  development: false,
  options: { distFolder },
});
