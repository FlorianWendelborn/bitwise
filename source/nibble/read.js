/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * nibble.read(15) => [1,1,1,1]
 *
 * @param {Number} data one nibble
 * @return {Array, false}
 */
export default data => {
	if (data < 16 && data >= 0 && Math.floor(data) === data) {
		const result = [0, 0, 0, 0]

		for (let i = 0; i < 4; i++) result[3 - i] = (data >> i) & 1

		return result
	} else throw new RangeError('invalid array length')
}
