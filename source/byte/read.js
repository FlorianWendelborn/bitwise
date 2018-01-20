/**
 *	Returns an Array of length 8 containing the read bits.
 *
 *	@example
 *	byte.read(42) => [0,0,1,0,1,0,1,0]
 *
 *	@param {Number} data one byte
 *	@return {Array}
 */
export default data => {
	if (data < 256 && data >= 0 && Math.floor(data) === data) {
		const result = [0, 0, 0, 0, 0, 0, 0, 0]

		for (let i = 0; i < 8; i++) result[7 - i] = (data >> i) & 1

		return result
	} else throw new RangeError('invalid array length')
}
