const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  bail: !DEV,
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  target: 'node',
  entry: './src/serverRenderer.js',
  output: {
    path: path.resolve(__dirname, 'build/server'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(DEV ? 'development' : 'production'),
      },
    }), !DEV &&
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: true,
        screw_ie8: true,
      },
    }),
    DEV && new webpack.optimize.AggressiveMergingPlugin(),
  ].filter(Boolean),
  module: {
    rules: [{
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'react-svg-loader'
        }]
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
    ],
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
};