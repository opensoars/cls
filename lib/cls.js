/** StyleMap
 * @private
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
 * @public
 * @param t {string|object}     Text to style
 * @param c {string}       opt. Text color
 * @param s {string|array} opt. Text style(s)
 * @return str {string}  
 */
function cls(t, c, s){

	var str = '';

	if(!t && t !== 0) t = '';
	if(typeof c !== 'string') c = '';

	str = t;

	if(typeof str === 'object')
		str = JSON.stringify(str);

	if(sm.c[c])
		str = sm.c[c][0] + str + sm.c[c][1];

	if(s){
		if(s.constructor === Array)
			s.forEach(function (sType){
				if(sm.s[sType]) str = sm.s[sType][0] + str + sm.s[sType][1]
			});

		else if(typeof s === 'string')
			if(sm.s[s])
				str = sm.s[s][0] + str + sm.s[s][1];
	}

	return str;
}

module.exports = cls;