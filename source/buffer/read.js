import byte from '../byte'

/**
 *	Returns an Array containing bitLength bits starting at bitOffset.
 *
 *	@example
 *	readBuffer(buffer, 2, 4) => [0,0,1,0]
 *
 *	@param buffer {Buffer} the buffer to read
 *	@param offset {Number} where to start (in bits)
 *	@param length {Number} how many bits to read
 *	@returns {Array}
 */
export default (buffer, offset = 0, length) => {
	if (!length) length = buffer.length * 8 - offset

	const start = Math.floor(offset / 8)
	const bytesToRead = Math.floor(length / 8) + 2

	const arr = []
	arr.length = bytesToRead * 8

	for (let i = 0; i < bytesToRead; i++) {
		const toRead = buffer[start + i]
		if (toRead === undefined) continue
		const bits = byte.read(buffer[start + i])
		arr[i * 8] = bits[0]
		arr[i * 8 + 1] = bits[1]
		arr[i * 8 + 2] = bits[2]
		arr[i * 8 + 3] = bits[3]
		arr[i * 8 + 4] = bits[4]
		arr[i * 8 + 5] = bits[5]
		arr[i * 8 + 6] = bits[6]
		arr[i * 8 + 7] = bits[7]
	}

	const subOffset = offset % 8
	return arr.slice(subOffset, subOffset + length)
}
