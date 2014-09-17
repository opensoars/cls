cls
===

[![Build Status](http://img.shields.io/travis/opensoars/cls.svg?style=flat)](https://travis-ci.org/opensoars/cls)
[![Coverage Status](http://img.shields.io/coveralls/opensoars/cls.svg?style=flat)](https://coveralls.io/r/opensoars/cls)
[![Dependency Status](http://img.shields.io/gemnasium/opensoars/cls.svg?style=flat)](https://gemnasium.com/opensoars/cls)


Command line output made easy and readable wit the optional use of colors.

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