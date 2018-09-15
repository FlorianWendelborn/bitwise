import { Bit } from '../types'

/**
 * Gets the value of a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 1
 * @param {Integer} int32 input number
 * @param {Integer} position bit's position
 * @returns {Integer} bit's value
 */
export default (int32: number, position: number): Bit =>
	<Bit>((int32 >> position) & 1)
