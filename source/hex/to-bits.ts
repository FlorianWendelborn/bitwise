import { Bits, HexArray } from '../types'
import nibble from '../nibble'

/**
 * @description converts a UInt4 Array to Bits
 * @example bitwise.hex.toBits([15]) => [1, 1, 1, 1]
 */
export default (hex: HexArray): Bits => {
	const result: Bits = []

	for (let i = 0; i < hex.length; i++) {
		const bits = nibble.read(hex[i])
		result[4 * i] = bits[0]
		result[4 * i + 1] = bits[1]
		result[4 * i + 2] = bits[2]
		result[4 * i + 3] = bits[3]
	}

	return result
}
