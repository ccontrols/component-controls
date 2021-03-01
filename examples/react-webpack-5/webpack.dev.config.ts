import path from 'path';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { withComponentControls } from '@component-controls/react-router-integration/webpack-build';

const publicFolder = path.join(__dirname, process.env.PUBLIC_PATH || 'public');

const config: webpack.Configuration & {
  devServer: webpackDevServer.Configuration;
} = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: './src/index.tsx',
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: publicFolder,
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

module.exports = withComponentControls({
  config,
  development: true,
  options: { distFolder: publicFolder },
});
