const curry = require('ramda/src/curry')
const compose = require('ramda/src/compose')
const path = require('ramda/src/path')
const { fromNullable } = require('folktale/maybe')

const safePath = curry(compose(fromNullable, path))

module.exports = safePath
