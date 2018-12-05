const ifElse = require('ramda/src/ifElse')
const either = require('ramda/src/either')
const is = require('ramda/src/is')
const pipe = require('ramda/src/pipe')
const filter = require('ramda/src/filter')
const isNil = require('ramda/src/isNil')
const not = require('ramda/src/not')
const map = require('ramda/src/map')
const identity = require('ramda/src/identity')

const removeNullables = ifElse(
	either(is(Array), is(Object)),
	pipe(
		filter(pipe(isNil, not)),
		map(item => removeNullables(item))
	),
	identity
)

module.exports = removeNullables
