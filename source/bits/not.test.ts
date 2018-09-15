import { Bits } from '../types'
import not from './not'

test('NOT', () => {
	const bits: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
	const expected: Bits = [0, 1, 1, 1, 0, 0, 1, 0]
	expect(not(bits)).toEqual(expected)
})
