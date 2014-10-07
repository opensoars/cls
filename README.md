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

console.log(
	cls({
		t: 'Hello world',
		c: 'red',
		s: ['bold', 'underline']
	})
);
```
