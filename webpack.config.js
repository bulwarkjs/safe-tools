const path = require('path')

module.exports = {
  mode: 'none',
  entry: './build/index.js',
  output: {
    filename: 'safe-tools.js',
    path: path.resolve(__dirname, 'build', 'dist'),
    library: 'safe-tools',
    libraryTarget: 'umd'
  }
}
