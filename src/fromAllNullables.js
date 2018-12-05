const { Just, Nothing } = require('folktale/maybe')
const isNil = require('ramda/src/isNil')

const fromAllNullables = arr => {
  if(arr.length && arr.every(item => !isNil(item))) { 
    return Just(arr) 
  }
  
  return Nothing()
}

module.exports = fromAllNullables
