/**
 * Toggles a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 0
 * @param {Integer} int32 input number
 * @param {Integer} position bit’s position
 * @returns {Integer} updated number
 */
export default (int32: number, position: number) => int32 ^ (1 << position)
