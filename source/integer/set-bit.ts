/**
 * Sets the value of a specific bit.
 * @example bitwise.integer.set(128, 7, 0) => 0
 * @param {Integer} int32 input number
 * @param {Integer} position bit’s position
 * @param {Integer} value bit’s new value
 * @returns {Integer} resulting number
 */
export default (int32: number, position: number, value: number): number =>
	value === 1 ? int32 | (1 << position) : int32 & ~(1 << position)
