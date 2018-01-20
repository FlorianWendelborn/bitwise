import byte from '../byte'
import read from './read'

/**
 *	Modifies the buffer's bits to equal newBits starting at bitOffset.
 *
 *	@example
 *	modifyBuffer(buffer, [0,0,1,0], 0) => buffer was modified
 *
 *	@param buffer {Buffer} the buffer to modify
 *	@param bits {Array} the bits to insert
 *	@param offset {Number} where to start (in bits)
 *	@returns undefined
 */
export default (buffer, bits, offset = 0) => {
	const start = Math.floor(offset / 8)
	const end = Math.ceil((offset + bits.length) / 8)
	const subBuffer = buffer.slice(start, end)

	const byteData = read(subBuffer)

	let subOffset = offset % 8

	for (var i = 0; i < bits.length; i++) byteData[subOffset++] = bits[i]

	const length = end - start
	for (let i = 0; i < length; i++)
		subBuffer[i] = byte.write(byteData.slice(i * 8, (i + 1) * 8))
}
