import path from 'path';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
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
    contentBase: publicPath,
    historyApiFallback: true,
    port: 9026,
    open: true,
    hot: true,
  },
};

export default withComponentControls({
  config,
  options: { configPath: '.config', distFolder: publicPath },
});
