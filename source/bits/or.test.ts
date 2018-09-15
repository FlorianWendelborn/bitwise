import { Bits } from '../types'
import or from './or'

test('OR', () => {
	const bits1: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
	const bits2: Bits = [0, 1, 1, 0, 0, 1, 0, 0]
	const expected: Bits = [1, 1, 1, 0, 1, 1, 0, 1]
	expect(or(bits1, bits2)).toEqual(expected)
})
