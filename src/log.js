const R = require('ramda');

export const log = (prefix) =>
  R.tap((value) => console.log('%c%s: ', 'color: #C753B4; background: #E7FFE7; font-size: 24px;', prefix, value))

module.exports = log;
