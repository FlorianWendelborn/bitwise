import { Bits, BooleanBits } from '../types'

/**
 * Converts a bit array to a boolean array.
 *
 * @example toBoolean([0, 1]) => [false, true]
 * @param {Array} bits input data
 * @returns {Array} boolean bits
 */
export default (bits: Bits): BooleanBits => {
	const result: BooleanBits = []

	for (let i: number = 0; i < bits.length; i++) result[i] = bits[i] === 1

	return result
}
