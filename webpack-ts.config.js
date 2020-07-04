const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'eval' : 'source-map',
  entry: {
    app: './src/index.tsx',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new TerserPlugin({
      cache: true,
      parallel: true,
      terserOptions: {
        warnings: false,
        compress: {
          warnings: false,
          unused: true,
        },
        ecma: 6,
        mangle: true,
        unused: true,
      },
      sourceMap: true,
    }),
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
};

module.exports = config;
