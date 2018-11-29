const R = require('ramda');

const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);

module.exports = isNilOrEmpty;
