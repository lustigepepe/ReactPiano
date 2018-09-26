const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  bail: !DEV,
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  entry: './src/client/client.js',
  output: {
    path: path.resolve(__dirname, 'build/client'),
    filename: 'bundle.js',
    publicPath: '/',
  },  
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(DEV ? 'development' : 'production'),
      },
    }),
    !DEV &&
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
    rules: [
      {
        test: /\.css/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'react-svg-loader'
        }]
      },

      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  }
};
