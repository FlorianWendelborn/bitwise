/**
 * Toggles a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 0
 * @param	{Integer} number input number
 * @param {Integer} position bit's position
 * @returns {Integer} resulting number
 */
export default (number, position) => number ^ (1 << position)
