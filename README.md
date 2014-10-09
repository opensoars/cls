cls
===

[![Build Status](https://img.shields.io/travis/opensoars/cls.svg?style=flat)](https://travis-ci.org/opensoars/cls)
[![Coverage Status](https://img.shields.io/coveralls/opensoars/cls.svg?style=flat)](https://coveralls.io/r/opensoars/cls)
[![Dependency Status](https://david-dm.org/opensoars/cls.svg?style=flat)](https://david-dm.org/opensoars/cls)
[![Development Dependency Status](https://david-dm.org/opensoars/cls/dev-status.svg?style=flat)](https://david-dm.org/opensoars/cls#info=devDependencies&view=table)


Colorized command line logging made easy.

---

## Dependencies
* None


## Install
`npm install opensoars_cls`

### Use
```js
var cls = require('opensoars_cls');

var styledString =  cls(
  // Text to style
  'Hello world',        

  // Optional text color 
  'red',

  // Optional text style(s), can be a string or array with strings
  ['bold', 'underline']
)

console.log(styledString);
```
