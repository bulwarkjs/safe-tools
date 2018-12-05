const curry = require('ramda/src/curry')
const compose = require('ramda/src/compose')
const prop = require('ramda/src/prop')
const { fromNullable } = require('folktale/maybe')

const safeProp = curry(compose(fromNullable, prop))

module.exports = safeProp
