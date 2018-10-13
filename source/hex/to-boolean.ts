import { HexArray, BooleanBits } from '../types'
import nibble from '../nibble'

/**
 * @description converts a UInt4 Array to boolean Bits
 * @example bitwise.hex.toBoolean([15]) => [true, true, true, true]
 */
export default (hex: HexArray): BooleanBits => {
	const result: BooleanBits = []

	for (let i = 0; i < hex.length; i++) {
		const bits = nibble.read(hex[i])
		result[4 * i] = bits[0] === 1
		result[4 * i + 1] = bits[1] === 1
		result[4 * i + 2] = bits[2] === 1
		result[4 * i + 3] = bits[3] === 1
	}

	return result
}
