import { Bits } from '../types'
import nand from './nand'

test('NAND', () => {
	const bits1: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
	const bits2: Bits = [0, 1, 1, 0, 0, 1, 0, 0]
	const expected: Bits = [1, 1, 1, 1, 1, 0, 1, 1]
	expect(nand(bits1, bits2)).toEqual(expected)
})
