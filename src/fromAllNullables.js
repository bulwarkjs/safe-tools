const { Just, Nothing } = require('folktale/maybe')
const R = require('ramda')

const fromAllNullables = arr => {
  if(arr.length && arr.every(item => R.isNil(item)))
  { return Just(arr) }
  return Nothing()
}

module.exports = fromAllNullables
