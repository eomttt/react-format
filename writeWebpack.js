const fs = require('fs');

const contentBaseUrlKey = {
  '1.0.0': 'contentBase',
  '1.0.1': 'contentBase',
  '1.0.2': 'static'
}

const getWebpackConfig = (isTypeSciprt, version) => {
  const contentBaseUrl = version

  return `

  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const TerserPlugin = require('terser-webpack-plugin');
  const path = require('path');
  
  const isDev = process.env.NODE_ENV === 'development';
  
  const config = {
    mode: process.env.NODE_ENV,
    devtool: isDev ? 'eval' : 'source-map',
    entry: {
      app: './src/index.${isTypeSciprt ? 'tsx' : 'jsx'}',
    },
    resolve: {
      extensions: ${isTypeSciprt ? "['.jsx', '.js', '.tsx', '.ts']" : "['.jsx', '.js']"},
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      symlinks: false,
    },
    module: {
      rules: [
        {
          test: ${isTypeSciprt ? /\.(js|jsx|ts|tsx)$/ : /\.(js|jsx)$/},
          use: ['babel-loader'],
          exclude: [/node_modules/],
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
          },
          ecma: 6,
          mangle: true,
        },
      }),
    ],
    output: {
      filename: 'app.js',
      path: path.join(__dirname, 'build'),
    },
    devServer: {
      ${contentBaseUrlKey[version]}: path.join(__dirname, 'build'),
      historyApiFallback: true,
      compress: true,
      port: 9000,
    },
  };
  
  module.exports = config;
  `
};

module.exports.writeWebpack = function (projectName, isTypeSciprt, version) {
  fs.writeFileSync(`./${projectName}/webpack.config.js`, getWebpackConfig(isTypeSciprt, version), 'utf8');
}
