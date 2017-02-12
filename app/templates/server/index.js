const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const port = process.env.PORT || 3000;

var config = process.env.NODE_ENV === 'production'
  ? config = require('../webpack.config.production')
  : require('../webpack.config');

const compiler = webpack(config);

var bundler = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true
});

bundler.listen(port);
