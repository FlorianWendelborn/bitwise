import read from './read'

// 32-bit powers of two wouldn't be possible with <<
const p2: Array<number> = []
for (let i = 0; i < 32; i++) p2[i] = Math.pow(2, i)

/**
 * Converts a section of a buffer to an unsigned integer.
 *
 * @example
 * // buffer 11110110
 * readUInt(buffer, 3, 5) => 22
 *
 * @param {Buffer} buffer the buffer to extract information from
 * @param {Number} length the length of the unsigned integer (in bits)
 * @param {Number} offset where to start (in bits)
 * @returns {Number}
 */
export default (
	buffer: Buffer,
	offset: number = 0,
	length: number = 8
): number => {
	const arr = read(buffer, offset, length)

	let result = 0

	for (let i = 0; i < length; i++) result += arr[i] * p2[length - i - 1]

	return result
}
