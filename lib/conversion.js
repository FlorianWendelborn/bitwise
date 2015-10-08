/**
 *	Converts a string into an array of bits. Ignores all characters except 1 and 0.
 *
 *	@example
 *	toBits('10 10 12$%_.0') => [1,0,1,0,1,0]
 *
 *	@param string {String} the string to convert
 *	@return {Array}
 */
function toBits (string) {
	var arr = [];
	var index = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] === '1') {
			arr[index] = 1;
			index++;
		} else if (string[i] === '0') {
			arr[index] = 0;
			index++;
		}
	}

	return arr;
}

/**
 *	Converts a bit array to a string. If defined, inserts spacer every spacing characters, but never inserts it as the last substring.
 *
 *	@example
 *	toString([1,0,1,0,1,0], 2, '_') => '10_10_10'
 *
 *	@param bits {Array} the bits to convert
 *	@param spacing {Number} where to place the spacers
 *	@param spacer {Number} the string used as a spacer
 *	@return {String}
 */
function toString (bits, spacing, spacer) {
	var string;
	if (typeof spacing === 'undefined') {
		spacing = 0;
	}
	if (typeof spacer === 'undefined') {
		spacer = ' ';
	}
	if (spacing) {
		string = '';
		for (var i = 0; i < bits.length; i++) {
			string += bits[i] ? 1 : 0;
			if (i % spacing === spacing-1 && i !== bits.length-1) {
				string += spacer;
			}
		}
		return string;
	} else {
		return bits.join('');
	}
}

module.exports = {
	toString: toString,
	toBits: toBits
};
