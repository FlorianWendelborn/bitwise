import { Bits } from '../types'
import xnor from './xnor'

test('XNOR', () => {
	const bits1: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
	const bits2: Bits = [0, 1, 1, 0, 0, 1, 0, 0]
	const expected: Bits = [0, 0, 0, 1, 0, 1, 1, 0]
	expect(xnor(bits1, bits2)).toEqual(expected)
})
