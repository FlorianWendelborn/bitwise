import { Bit, Bits } from '../types'

/**
 * Applies the AND operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceAnd([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} AND bits
 */
export default (bits: Bits): Bit => {
	if (bits.length < 2) throw new RangeError('Not enough bits.')

	let result: Bit = bits[0]

	for (let i: number = 1; i < bits.length; i++) result &= bits[i]

	return result
}
