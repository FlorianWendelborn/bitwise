import read from './read'

// 32-bit powers of two wouldn't be possible with <<
const p2 = []
for (let i = 0; i < 32; i++) p2[i] = Math.pow(2, i)

/**
 *	Converts a section of a buffer to an unsigned integer.
 *
 *	@example
 *	// buffer 11110110
 *	readUInt(buffer, 3, 5) => 22
 *
 *	@param buffer {Buffer} the buffer to extract information from
 *	@param length {Number} the length of the unsigned integer (in bits)
 *	@param offset {Number} where to start (in bits)
 *	@returns {Number}
 */
export default (buffer, offset = 0, length = 8) => {
	const arr = read(buffer, offset, length)

	let result = 0

	for (let i = 0; i < length; i++) result += arr[i] * p2[length - i - 1]

	return result
}
