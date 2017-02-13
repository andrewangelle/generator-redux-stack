const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    hot: true,
    stats: {
      colors: true,
    },
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader'
        ]
      }
    ]
  },
};
