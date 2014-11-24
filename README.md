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


### Install
`npm install opensoars_cls`


### Use
```js
var cls = require('opensoars_cls');

var styled_string =  cls(
  // Text to style
  'Hello, world!',        

  // Optional text color 
  'red',

  // Optional text style(s), can be a string or an array with strings
  ['bold', 'underline']
);

console.log(styled_string);
```


### Options

9 Colors

1. white
2. grey
3. black
4. blue
5. cyan
6. green
7. magenta
8. red
9. yellow

5 Styles (if supported by your os its terminal)

1. bold
2. italic
3. underline
4. inverse
5. strikethrough
