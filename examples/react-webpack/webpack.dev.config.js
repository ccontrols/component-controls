const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  withComponentControls,
} = require('@component-controls/react-router-integration/webpack-build');

const publicFolder = process.env.PUBLIC_PATH || 'public';
const publicPath = path.join(__dirname, publicFolder);
const distFolder = process.env.BUILD_PATH || 'build';
const distPath = path.join(__dirname, distFolder);

const config = {
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
    port: 9025,
    open: true,
    hot: true,
  },
};

module.exports = withComponentControls({
  config,
  development: true,
  options: { configPath: '.config', distFolder: publicPath },
});
