import { Bits } from '../types'
import not from '../bits/not'
import read from './read'

// 32-bit powers of two wouldn't be possible with <<
const p2: Array<number> = []
for (let i: number = 0; i < 32; i++) p2[i] = Math.pow(2, i)

/**
 * Converts a section of a buffer to a signed integer.
 *
 * @example
 * // buffer 11110110
 * readUInt(buffer, 3, 5) => -10
 *
 * @param {Buffer} buffer the buffer to extract information from
 * @param {Number} length the length of the signed integer (in bits)
 * @param {Number} offset where to start (in bits)
 * @return {Number}
 */
export default (
	buffer: Buffer,
	offset: number = 0,
	length: number = 8
): number => {
	const bits: Bits = read(buffer, offset, length)

	if (bits[0] === 0) {
		let result: number = 0

		for (let i: number = 0; i < length; i++)
			if (bits[i]) result += p2[length - i - 1]

		return result
	} else {
		let result: number = -1
		const inverted: Bits = not(bits)

		for (let i: number = 0; i < length; i++)
			if (inverted[i]) result -= p2[length - i - 1]

		return result
	}
}
