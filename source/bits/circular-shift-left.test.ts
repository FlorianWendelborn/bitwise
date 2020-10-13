import { Bits } from '../types'
import circularShiftLeft from './circular-shift-left'

test('CSHIFTL', () => {
	const bits1: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
	const expected1: Bits = [0, 0, 0, 1, 1, 0, 1, 1]
	expect(circularShiftLeft(bits1)).toEqual(expected1)

	const bits2: Bits = [0, 0, 0, 1, 1, 1, 1, 1]
	const expected2: Bits = [0, 0, 1, 1, 1, 1, 1, 0]
	expect(circularShiftLeft(bits2)).toEqual(expected2)
})
