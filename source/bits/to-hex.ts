import { Bits, HexArray, Nibble } from '../types'
import nibble from '../nibble'

/**
 * @description converts a Bit Array to a UInt4 Array
 * @example bitwise.hex.toBits([15]) => [1,1,1,1,]
 */
export default (bits: Bits): HexArray => {
	if (bits.length % 4 !== 0)
		throw new RangeError('Bits length not divisible by 4')

	const result: HexArray = []

	for (let i = 0; i < bits.length; i = i + 4) {
		const nibbleBits: Nibble = [bits[i], bits[i + 1], bits[i + 2], bits[i + 3]]
		result.push(nibble.write(nibbleBits))
	}

	return result
}
