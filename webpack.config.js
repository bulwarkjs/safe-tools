const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'none',
  entry: './build/index.js',
  output: {
    filename: 'safe-tools.js',
    path: path.resolve(__dirname, 'build', 'dist'),
    chunkFilename: '[name].chunkhash.bundle.js',
    library: 'safe-tools',
    libraryTarget: 'umd'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
    runtimeChunk: true
  }
}
