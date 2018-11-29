const R = require('ramda');

const removeNullables = R.ifElse(
	R.either(R.is(Array), R.is(Object)),
	R.pipe(
		R.filter(R.pipe(R.isNil, R.not)),
		R.map(item => removeNullables(item))
	),
	R.identity
)

module.exports = removeNullables
