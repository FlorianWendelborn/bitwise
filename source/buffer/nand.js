/**
 * Applies a bitwise NAND to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.nand(buffer1, buffer2, false) => Buffer(buffer1 NAND buffer2)
 *
 * @param {Buffer} buffer1 first buffer
 * @param {Buffer} buffer2 second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} buffer1 NAND buffer2
 */
export default (buffer1, buffer2, isLooping = false) => {
	const length = isLooping ? buffer2.length : buffer1.length

	const result = new Buffer(length)
	result.fill(0x00)

	for (let i = 0; i < length; i++) {
		const j = isLooping ? i % buffer1.length : i
		result[i] = ~(buffer1[j] & buffer2[i])
	}

	return result
}
