/**
 * Converts a bit array to a string. If defined, inserts spacer every spacing characters, but never inserts it as the last substring.
 *
 * @example
 * toString([1,0,1,0,1,0], 2, '_') => '10_10_10'
 *
 * @param {Array} bits the bits to convert
 * @param {Number} spacing where to place the spacers
 * @param {Number} spacer the string used as a spacer
 * @return {String}
 */
export default (bits, spacing = 0, spacer = ' ') => {
	if (!spacing) return bits.join('')

	let result = ''

	for (var i = 0; i < bits.length; i++) {
		result += `${bits[i]}`
		if (i % spacing === spacing - 1 && i !== bits.length - 1) result += spacer
	}

	return result
}
