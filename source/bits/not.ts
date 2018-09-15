import { Bit, Bits } from '../types'

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
	const result: Bits = []

	for (let i: number = 0; i < bits.length; i++) result[i] = <Bit>(bits[i] ^ 1)

	return result
}
