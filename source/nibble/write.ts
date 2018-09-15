import { Bits } from '../types'

/**
 * Returns a Nibble (0-15) which equals the given bits.
 *
 * @example
 * byte.write([1,0,1,0]) => 10
 *
 * @param {Array} bits 4-bit unsigned integer
 * @return {Number}
 */
export default (bits: Bits): number => {
	if (!Array.isArray(bits) || bits.length !== 4)
		throw new RangeError('invalid array length')

	let nibble = 0

	for (let i = 0; i < 4; i++) if (bits[3 - i]) nibble |= 1 << i

	return nibble
}
