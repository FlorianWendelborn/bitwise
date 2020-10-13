import { Bit, Bits } from '../types'

/**
 * Circular Shift Right
 *
 * @example
 * circularShiftRight([1,0,1,1,0,1]) => [1,1,0,1,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [CSHIFTR bits]
 */
export default (bits: Bits): Bits => {
	const result: Bits = []

	result[0] = bits.pop() as Bit
	for (let i: number = 0; i < bits.length; i++) result[i + 1] = bits[i]

	return result
}
