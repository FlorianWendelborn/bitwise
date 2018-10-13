import bits from '.'
import { Bits, HexArray } from '../types'

test('toHex', () => {
	const input: Bits = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
	const output: HexArray = [10, 10, 10]
	expect(bits.toHex(input)).toEqual(output)
})
