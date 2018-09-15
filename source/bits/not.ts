import { Bits } from '../types'

/**
 * Flips all given bits and returns the flipped bits.
 *
 * @example
 * not([1,0,1,1,0,1]) => [0,1,0,0,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [NOT bits]
 */
export default (bits: Bits): Bits => {
	const result = []

	for (let i = 0; i < bits.length; i++) result[i] = bits[i] ^ 1

	return result
}
