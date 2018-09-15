import { Bits } from '../types'

/**
 * Converts a bit array to a boolean array.
 *
 * @example toBoolean([0, 1]) => [false, true]
 * @param {Array} bits input data
 * @returns {Array} boolean bits
 */
export default (bits: Bits): Array<Boolean> => {
	const result = []

	for (let i = 0; i < bits.length; i++) result[i] = !!bits[i]

	return result
}
