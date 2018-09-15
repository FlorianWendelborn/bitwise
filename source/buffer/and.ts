/**
 * Applies a bitwise AND to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.and(buffer1, buffer2, false) => Buffer(buffer1 AND buffer2)
 *
 * @param {Buffer} buffer1 first buffer
 * @param {Buffer} buffer2 second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} buffer1 AND buffer2
 */
export default (
	buffer1: Buffer,
	buffer2: Buffer,
	isLooping: Boolean = false
): Buffer => {
	const length = isLooping ? buffer2.length : buffer1.length

	const result = Buffer.alloc(length)

	for (let i = 0; i < length; i++) {
		const j = isLooping ? i % buffer1.length : i
		result[i] = buffer1[j] & buffer2[i]
	}

	return result
}
