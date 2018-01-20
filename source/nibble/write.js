/**
 *	Returns a Nibble (0-15) which equals the given bits.
 *
 *	@example
 *	byte.write([1,0,1,0]) => 10
 *
 *	@param {Array} bits 4-bit unsigned integer
 *	@return {Number}
 */
export default bits => {
	let data = 0

	if (Array.isArray(bits) && bits.length === 4) {
		for (var i = 0; i < 4; i++) if (bits[3 - i]) data |= 1 << i

		return data
	} else throw new RangeError('invalid array length')
}
