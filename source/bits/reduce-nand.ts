import { Bits } from '../types'

/**
 * Applies the NAND operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceNand([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} NAND bits
 */
export default (bits: Bits): number => {
	if (bits.length < 2) throw new RangeError('Not enough bits.')

	let result = bits[0]

	for (let i = 1; i < bits.length; i++) result = (result & bits[i]) ^ 1

	return result
}
