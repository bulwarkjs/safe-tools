const { Just, Nothing } = require('folktale/maybe')

const safeNumber = (val) => isNaN(val) ? Nothing() : Just(val)

module.exports = safeNumber
