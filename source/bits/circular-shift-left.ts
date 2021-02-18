import { Bits } from '../types'

/**
 * Circular Shift Left
 *
 * @example
 * circularShiftLeft([1,0,1,1,0,1]) => [0,1,1,0,1,1]
 *
 * @see {@link https://en.wikipedia.org/wiki/Circular_shift}
 *
 * @param {Array} bits input data
 * @param {number} amount how far should it be shifted
 * @return {Array} [ROL bits]
 */
export default (bits: Bits, amount: number): Bits => {
	const result: Bits = []

	if (amount > bits.length)
		throw new Error('shift amount can’t be larger than bits array length')

	for (let i = 0; i < bits.length; i++)
		result[(bits.length + i - amount) % bits.length] = bits[i]

	return result
}
