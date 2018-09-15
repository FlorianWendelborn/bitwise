import { Bit, Byte, UInt8 } from '../types'

/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * byte.read(42) => [0,0,1,0,1,0,1,0]
 *
 * @param {Number} byte one byte
 * @return {Array}
 */
export default (byte: UInt8): Byte => {
	if (byte > 255 || byte < 0 || ~~byte !== byte)
		throw new RangeError('invalid byte')

	const result: Byte = [0, 0, 0, 0, 0, 0, 0, 0]

	for (let i: number = 0; i < 8; i++) result[7 - i] = <Bit>((byte >> i) & 1)

	return result
}
