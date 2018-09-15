import { Bit, UInt4, Nibble } from '../types'

/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * nibble.read(15) => [1,1,1,1]
 *
 * @param {Number} nibble one nibble
 * @return {Array}
 */
export default (nibble: UInt4): Nibble => {
	if (nibble < 16 && nibble >= 0 && Math.floor(nibble) === nibble) {
		const result: Nibble = [0, 0, 0, 0]

		for (let i = 0; i < 4; i++) result[3 - i] = <Bit>((nibble >> i) & 1)

		return result
	} else throw new RangeError('invalid array length')
}
