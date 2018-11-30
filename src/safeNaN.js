const { Just, Nothing } = require('folktale/maybe')

const safeNaN = (val) => isNaN(val) ? Nothing() : Just(val)

module.exports = safeNaN
