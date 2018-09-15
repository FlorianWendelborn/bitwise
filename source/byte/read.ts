import { Bits, Byte } from '../types'

/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * byte.read(42) => [0,0,1,0,1,0,1,0]
 *
 * @param {Number} byte one byte
 * @return {Array}
 */
export default (byte: Byte): Bits => {
	if (byte > 255 || byte < 0 || ~~byte !== byte)
		throw new RangeError('invalid byte')

	const result = [0, 0, 0, 0, 0, 0, 0, 0]

	for (let i = 0; i < 8; i++) result[7 - i] = (byte >> i) & 1

	return result
}
