import { Bits, Byte } from '../types'

/**
 * Returns a Byte (0-255) which equals the given bits.
 *
 * @example
 * byte.write([0,0,1,0,1,0,1,0]) => 42
 *
 * @param {Array} bits 8-bit unsigned integer
 * @return {Number}
 */
export default (bits: Bits): Byte => {
	if (!Array.isArray(bits) || bits.length !== 8)
		throw new RangeError('invalid array length')

	let data = 0

	for (let i = 0; i < 8; i++) if (bits[7 - i]) data |= 1 << i

	return data
}
