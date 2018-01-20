/**
 * Gets the value of a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 1
 * @param	{Integer} number input number
 * @param {Integer} position bit's position
 * @returns {Integer} bit's value
 */
export default (number, position) => (number >> position) & 1
