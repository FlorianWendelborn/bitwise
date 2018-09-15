import { Nibble, UInt4 } from '../types'

/**
 * Returns a Nibble (0-15) which equals the given bits.
 *
 * @example
 * byte.write([1,0,1,0]) => 10
 *
 * @param {Array} nibble 4-bit unsigned integer
 * @return {Number}
 */
export default (nibble: Nibble): UInt4 => {
	if (!Array.isArray(nibble) || nibble.length !== 4)
		throw new RangeError('invalid array length')

	let result: UInt4 = 0

	for (let i: number = 0; i < 4; i++) if (nibble[3 - i]) result |= 1 << i

	return <UInt4>result
}
