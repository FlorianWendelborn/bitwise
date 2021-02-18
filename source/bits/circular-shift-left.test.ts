import { Bits } from '../types'
import circularShiftLeft from './circular-shift-left'

test('circularShiftLeft with amount 1', () => {
	const testCases: Array<[Bits, Bits]> = [
		[
			[1, 0, 0, 0, 1, 1, 0, 1],
			[0, 0, 0, 1, 1, 0, 1, 1],
		],
		[
			[0, 0, 0, 1, 1, 1, 1, 1],
			[0, 0, 1, 1, 1, 1, 1, 0],
		],
	]

	for (const [input, expectedResult] of testCases)
		expect(circularShiftLeft(input, 1)).toEqual(expectedResult)
})

test('circularShiftLeft with amount 2', () => {
	const testCases: Array<[Bits, Bits]> = [
		[
			[1, 0, 0, 0, 1, 1, 0, 1],
			[0, 0, 1, 1, 0, 1, 1, 0],
		],
		[
			[0, 0, 0, 1, 1, 1, 1, 1],
			[0, 1, 1, 1, 1, 1, 0, 0],
		],
	]

	for (const [input, expectedResult] of testCases)
		expect(circularShiftLeft(input, 2)).toEqual(expectedResult)
})

test('circularShiftLeft with amount 3', () => {
	const testCases: Array<[Bits, Bits]> = [
		[
			[1, 0, 0, 0, 1, 1, 0, 1],
			[0, 1, 1, 0, 1, 1, 0, 0],
		],
		[
			[0, 0, 0, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 0, 0, 0],
		],
	]

	for (const [input, expectedResult] of testCases)
		expect(circularShiftLeft(input, 3)).toEqual(expectedResult)
})

test('circularShiftLeft throws when amount too large', () => {
	expect(() => circularShiftLeft([0, 1], 3)).toThrow()
})
