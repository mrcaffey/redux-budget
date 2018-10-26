const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    proxy: {
      '/api': 'http://localhost:3001',
      contentBase: './dist',
      historyApiFallback: true
    }
  },
  devtool: 'source-map'
})