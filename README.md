# Safe Tools

Safe Tools is a list of functions to help you with nullcheck based on folktale.

**Table of Contents**

- [Installation](#installation)
- [Why safe-tools ?](#why-safe-tools)
- [Overview](#overview)
- [API](#API)
  - [removeNullables](#removeNullables)
  - [safePath](#safePath)
  - [safeProp](#safeProp)
  - [safeNumber](#safeNumber)
  - [tryCatch](#tryCatch)
  - [log](#log)
  - [isNilOrEmpty](#isNilOrEmpty)
- [License](#license)

## Installation

`safe-tools` is available from `npm`.

```
$ npm install @bulwarkjs/safe-tools -S
```

Importing
```javascript
import safeTools from '@bulwarkjs/safe-tools'
// or
import safeProp from '@bulwarkjs/safe-tools/safeProp'
// or
import { safePath } from '@bulwarkjs/safe-tools'
```

## Why safe-tools ?

TODO

## Overview

TODO

## API

### fromAllNullables
Similar to [fromNullable](https://folktale.origamitower.com/api/v2.3.0/en/folktale.maybe.fromnullable.html) from [folktale](https://folktale.origamitower.com) but receives an array of nullables

```javascript
const a = 1
const b = 2
const c = 3

const value = safeTools.fromAllNullables([ a, b, c ])
  .map(([ a, b, c ]) => [ a+1, b+2, c+3 ])
  .getOrElse([ 0, 0, 0 ])

console.log(value) //  [2, 4, 6];
```

Or

```javascript
const a = 1
const b = null
const c = 3

const value = safeTools.fromAllNullables([ a, b, c ])
  .map(([ a, b, c ]) => [ a+1, b+2, c+3 ])
  .getOrElse([ 0, 0, 0 ])

console.log(value) //  [0, 0, 0];
```

### removeNullables
Remove all nulls values recursively

```javascript
const nullables = [ 1, null, [ 3, null ], { foo: 4, bar: null } ]

const value = safeTools.removeNullables(nullables)

console.log(value) // [1, [ 3 ], { foo: 4 } ]
```

### safePath
Similar to [R.path](https://ramdajs.com/docs/#path) from ramda but it returns an Maybe monad from [folktale](https://folktale.origamitower.com/api/v2.3.0/en/folktale.maybe.html)

```javascript
const object = {
  foo: {
    bar: {
      baz: 1
    }
  }
}

const value = safeTools.safePath([ 'foo', 'bar', 'baz' ], object)
  .map(val => val+1)
  .getOrElse(0)

console.log(value) // 2
```

Or

```javascript
const object = {
  foo: {
    bar: null
  }
}

const value = safeTools.safePath([ 'foo', 'bar', 'baz' ], object)
  .map(val => val+1)
  .getOrElse(0)

console.log(value) // 0

```
### safeProp
Similar to [safePath](#safePath) but with only one level of nesting

```javascript
const object = {
  foo: 'bar'
}

const value = safeTools.safeProp('foo', object)
  .map(val => val.toUpperCase())
  .getOrElse('NOOP')

console.log(value) // BAR
```

Or

```javascript
const object = null

const value = safeTools.safeProp('foo', object)
  .map(val => val.toUpperCase())
  .getOrElse('NOOP')

console.log(value) // NOOP
```

### safeNumber
Similar to [safePath](#safePath) but with numbers

```javascript
const number = 1

const value = safeTools.safeNumber(number)
  .map(n => n * 10)
  .getOrElse(0)

console.log(value) // 10
```

Or

```javascript
const number = 'I am a number, trust me'

const value = safeTools.safeNumber(number)
  .map(n => n * 10)
  .getOrElse(0)

console.log(value) // 0
```

### tryCatch
Wrap up a function into a try/catch block and returns a [Result](https://folktale.origamitower.com/api/v2.3.0/en/folktale.result.html) monad from folktale

```javascript
const parseJson = () => {
  const jsonStr = '{"foo":"bar"}'
  const value = JSON.parse(jsonStr)
  return value
}

const value = safeTools.tryCatch(parseJson)
  .getOrElse({})

console.log(value) // { foo: 'bar' }
```

Or

```javascript
const parseJson = () => {
  const jsonStr = 'Invalid json'
  const value = JSON.parse(jsonStr)
  return value
}

const value = safeTools.tryCatch(parseJson)
  .getOrElse({})

console.log(value) // {}
```

### log
Useful function to debbug

```javascript
const str = 'Bulwark'
const value = safeTools.fromNullable(str)
  .map(str => str.toUpperCase())
  .map(log('Upppercase Str')) // log the value in console
  .map(str => `${str} - JS`)
  .map(log('Concat')) // log the value in console
  .getOrElse('')
```

### isNilOrEmpty
Null or empty checker

```javascript
safeTools.isNilOrEmpty('') // true

safeTools.isNilOrEmpty([]) // true

safeTools.isNilOrEmpty({}) // true

safeTools.isNilOrEmpty(null) // true

safeTools.isNilOrEmpty(undefined) // true

safeTools.isNilOrEmpty(0) // false

safeTools.isNilOrEmpty(true) // false
```

License
-------

The code is available under the [MIT License](LICENSE.md).
