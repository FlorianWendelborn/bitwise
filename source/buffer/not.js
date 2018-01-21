/**
 * Applies a bitwise NOT to the contents of a buffer. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.not(buffer) => Buffer(NOT buffer)
 *
 * @param {Buffer} buffer input data
 * @return {Buffer} Buffer(NOT buffer)
 */
export default buffer => {
	const result = new Buffer(buffer.length)
	result.fill(0x00)

	for (let i = 0; i < buffer.length; i++) result[i] = ~buffer[i]

	return result
}
