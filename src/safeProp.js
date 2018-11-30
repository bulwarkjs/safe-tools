const R = require('ramda')
const { fromNullable } = require('folktale/maybe')

const safeProp = R.curry(R.compose(fromNullable, R.prop))

module.exports = safeProp
