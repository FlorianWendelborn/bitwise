import { HexArray } from '../types'

/**
 * @description converts a UInt4 Array to a String
 * @example bitwise.hex.toString([15]) => 'F'
 */
export default (hex: HexArray): string => {
	let result: string = ''

	for (let i: number = 0; i < hex.length; i++) {
		result += i.toString(16)
	}

	return result
}
