const tap = require('ramda/src/tap')

const log = (prefix) =>
  tap((value) => console.log('%c%s: ', 'color: #C753B4; background: #E7FFE7; font-size: 24px;', prefix, value))

module.exports = log
