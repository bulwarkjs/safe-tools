const { Ok, Error } = require('folktale/result')

const tryCatch = f => {
  try {
    return Ok(f())
  } catch (e) {
    return Error(e)
  }
}

module.exports = tryCatch
