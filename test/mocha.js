var assert = require('assert');

var cls = require('../index.js');


describe('cls', function (){

	it('should return a string', function (){
		assert.equal('string', typeof cls({t: 'Hello Mocha'}));
	});

	it('should return an empty string when no options are given', function (){
		assert.equal(0, cls().length);
	});

	it('should not fail when nothing is supplied', function (){
		assert.doesNotThrow(cls);
	});

});