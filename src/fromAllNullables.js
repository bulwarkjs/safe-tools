const { Just, Nothing } = require('folktale/maybe')

const fromAllNullables = arr => {
  if(arr.every(item => item))
  { return Just(arr) }
  return Nothing()
}

module.exports = fromAllNullables
