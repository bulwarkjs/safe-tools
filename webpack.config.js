const path = require('path');

module.exports = {
  mode: 'none',
  entry: './build/index.js',
  output: {
    filename: 'folk-tools.js',
    path: path.resolve(__dirname, 'build', 'dist'),
    library: 'folk-tools',
    libraryTarget: 'umd'
  }
}
