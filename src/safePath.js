const R = require('ramda')
const { fromNullable } = require('folktale/maybe')

const safePath = R.curry(R.compose(fromNullable, R.path))

module.exports = safePath
