import path from 'path';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { withComponentControls } from '@component-controls/react-router-integration/webpack-build';

const publicFolder = process.env.PUBLIC_PATH || 'public';
const publicPath = path.join(__dirname, publicFolder);
const distFolder = process.env.BUILD_PATH || 'build';
const distPath = path.join(__dirname, distFolder);

const config: webpack.Configuration & {
  devServer: webpackDevServer.Configuration;
} = {
  mode: 'development',
  output: {
    path: distPath,
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
            plugins: [require.resolve('react-refresh/babel')],
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
    new ReactRefreshWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: publicPath,
    historyApiFallback: true,
    port: 9026,
    open: true,
  },
};

export default withComponentControls({
  config,
  options: { configPath: '.config', distFolder: publicPath },
});
