/**
 * Simple API
 *
 *	cls({
 *		t: '[prefix]',
 *		c: 'magenta',
 *		s: 'bold'
 *	});
 *
 */

/** StyleMap
 * @prop s {map}  style types
 * @prop c {map}  color types
 */
var sm = {

	s: {
		'bold': ['\x1B[1m', '\x1B[22m'],
		'italic': ['\x1B[3m', '\x1B[23m'],
		'underline': ['\x1B[4m', '\x1B[24m'],
		'inverse': ['\x1B[7m', '\x1B[27m'],
		'strikethrough': ['\x1B[9m', '\x1B[29m']
	},

	c: {
		'white'     : ['\x1B[37m', '\x1B[39m'],
		'grey'      : ['\x1B[90m', '\x1B[39m'],
		'black'     : ['\x1B[30m', '\x1B[39m'],
		'blue'      : ['\x1B[34m', '\x1B[39m'],
		'cyan'      : ['\x1B[36m', '\x1B[39m'],
		'green'     : ['\x1B[32m', '\x1B[39m'],
		'magenta'   : ['\x1B[35m', '\x1B[39m'],
		'red'       : ['\x1B[31m', '\x1B[39m'],
		'yellow'    : ['\x1B[33m', '\x1B[39m']
	}

};

/**
 * @o t {string}  text to style
 * @o c {string}  color
 * @o s {string}  style
 * @return str {string}  styled string
 */
function cls(o){
	o = o || {};

	if(!o.t) o.t = '';

	var str = o.t;

	if(o.c)
		if(sm.c[o.c])
			str = sm.c[o.c][0] + str + sm.c[o.c][1];

	if(o.s){

		if(typeof o.s === 'object')
			for(var i=0; i<o.s.length; i+=1)
				if(sm.s[o.s[i]])
					str = sm.s[o.s[i]][0] + str + sm.s[o.s[i]][1];

		if(typeof o.s === 'string')
			if(sm.s[o.s])
				str = sm.s[o.s][0] + str + sm.s[o.s][1];
	}

	return str;
}


module.exports = cls;