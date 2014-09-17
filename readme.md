cls
===

Command line output made easy and readable wit the optional use of colors.

## Dependencies
* None

---

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