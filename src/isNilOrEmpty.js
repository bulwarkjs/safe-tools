const anyPass = require('ramda/src/anyPass')
const isNil = require('ramda/src/isNil')
const isEmpty = require('ramda/src/isEmpty')

const isNilOrEmpty = anyPass([isNil, isEmpty])

module.exports = isNilOrEmpty
