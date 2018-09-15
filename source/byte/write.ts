import { Byte, UInt8 } from '../types'

/**
 * Returns a UInt8 (0-255) which equals the given bits.
 *
 * @example
 * byte.write([0,0,1,0,1,0,1,0]) => 42
 *
 * @param {Array} byte 8 bits
 * @return {Number} 8-bit unsigned integer
 */
export default (byte: Byte): UInt8 => {
	if (!Array.isArray(byte) || byte.length !== 8)
		throw new RangeError('invalid array length')

	let data: UInt8 = 0

	for (let i: number = 0; i < 8; i++) if (byte[7 - i]) data |= 1 << i

	return <UInt8>data
}
