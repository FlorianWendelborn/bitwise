/**
 * Sets the value of a specific bit.
 * @example bitwise.integer.set(128, 7, 0) => 0
 * @param	{Integer} number input number
 * @param {Integer} position bit's position
 * @returns {Integer} resulting number
 */
export default (number, position, value) =>
	value === 1 ? number | (1 << position) : number & ~(1 << position)
