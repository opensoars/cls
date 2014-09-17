var cls = require('../index.js');

/** Test case #1
 * Normal usage
 */
console.log(
	cls({
		t: '[prefix]',
		c: 'magenta',
		s: 'bold'
	})
);


/** Test case #2
 * Give cls nothing to work with
 */
console.log(
	cls()
);


/** Test case #3
 * Give wrong color type
 */
console.log(
	cls({
		t: 'Hello',
		c: 'wrongColor'
	})
);


/** Test case #4
 * Give a style array
 */
console.log(
	cls({
		s: ['bold', 'underline']
	})
);

/** Test case #4
 * Give a wrong style array
 */
console.log(
	cls({
		s: ['wrong', 'style']
	})
);

/** Test case #5
 * Give a wrong style string
 */
console.log(
	cls({
		s: 'wrongStyle'
	})
);