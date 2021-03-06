const webpackMerge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common.js')
const helpers = require('./helpers')

// See https://webpack.js.org/guides/development/
module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: '@source-map',
  output: {
    path: helpers.root('dist/nonmin'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new CleanWebpackPlugin() // Cleans directory before building
  ],

  devServer: {
    contentBase: helpers.root('.'),
    historyApiFallback: true,
    // stats: 'minimal',
    port: 8080
  }
})
