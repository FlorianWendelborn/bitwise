import { Bits, UInt8 } from '../types'
import readByte from '../byte/read'

/**
 * Returns an Array containing bitLength bits starting at bitOffset.
 *
 * @example
 * readBuffer(buffer, 2, 4) => [0,0,1,0]
 *
 * @param {Buffer} buffer the buffer to read
 * @param {Number} offset where to start (in bits)
 * @param {Number} length how many bits to read
 * @returns {Array}
 */
export default (buffer: Buffer, offset: number = 0, length?: number): Bits => {
	if (!length) length = buffer.length * 8 - offset

	const start: number = Math.floor(offset / 8)
	const bytesToRead: number = Math.floor(length / 8) + 2

	const arr: Bits = []
	arr.length = bytesToRead * 8

	for (let i = 0; i < bytesToRead; i++) {
		const toRead: UInt8 = <UInt8>buffer[start + i]
		if (toRead === undefined) continue
		const bits = readByte(<UInt8>buffer[start + i])
		arr[i * 8] = bits[0]
		arr[i * 8 + 1] = bits[1]
		arr[i * 8 + 2] = bits[2]
		arr[i * 8 + 3] = bits[3]
		arr[i * 8 + 4] = bits[4]
		arr[i * 8 + 5] = bits[5]
		arr[i * 8 + 6] = bits[6]
		arr[i * 8 + 7] = bits[7]
	}

	const subOffset: number = offset % 8
	return arr.slice(subOffset, subOffset + length)
}
