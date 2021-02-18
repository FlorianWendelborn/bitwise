import { Bits } from '../types'
import circularShiftRight from './circular-shift-right'

test('circularShiftRight with amount 1', () => {
	const testCases: Array<[Bits, Bits]> = [
		[
			[1, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 0, 0, 1, 1, 0],
		],
		[
			[0, 0, 0, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 1, 1, 1, 1],
		],
	]

	for (const [input, expectedResult] of testCases)
		expect(circularShiftRight(input, 1)).toEqual(expectedResult)
})

test('circularShiftRight with amount 2', () => {
	const testCases: Array<[Bits, Bits]> = [
		[
			[1, 0, 0, 0, 1, 1, 0, 1],
			[0, 1, 1, 0, 0, 0, 1, 1],
		],
		[
			[0, 0, 0, 1, 1, 1, 1, 1],
			[1, 1, 0, 0, 0, 1, 1, 1],
		],
	]

	for (const [input, expectedResult] of testCases)
		expect(circularShiftRight(input, 2)).toEqual(expectedResult)
})

test('circularShiftRight with amount 3', () => {
	const testCases: Array<[Bits, Bits]> = [
		[
			[1, 0, 0, 0, 1, 1, 0, 1],
			[1, 0, 1, 1, 0, 0, 0, 1],
		],
		[
			[0, 0, 0, 1, 1, 1, 1, 1],
			[1, 1, 1, 0, 0, 0, 1, 1],
		],
	]

	for (const [input, expectedResult] of testCases)
		expect(circularShiftRight(input, 3)).toEqual(expectedResult)
})

test('circularShiftRight throws when amount too large', () => {
	expect(() => circularShiftRight([0, 1], 3)).toThrow()
})
