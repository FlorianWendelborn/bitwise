import readUInt from './read-u-int'

/**
 * Converts a section of a buffer to a complementary integer.
 * A complementary integer is like an unsigned integer, but always represents negative numbers.
 *
 * @example
 * // buffer 11110110
 * readUInt(buffer, 3, 5) => -22
 *
 * @param {Buffer} buffer the buffer to extract information from
 * @param {Number} length the length of the signed integer (in bits)
 * @param {Number} offset where to start (in bits)
 * @return {Number}
 */
export default (buffer, offset, length) => 0 - readUInt(buffer, offset, length)
