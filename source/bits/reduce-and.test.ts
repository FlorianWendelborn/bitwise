import reduceAnd from './reduce-and'

test('valid inputs', () => {
	expect(reduceAnd([1, 0, 0, 0, 1, 1, 0, 1])).toEqual(0)
	expect(reduceAnd([1, 1])).toEqual(1)
	expect(reduceAnd([1, 1, 1, 1, 1])).toEqual(1)
})

test('invalid inputs', () => {
	expect(() => reduceAnd([1])).toThrow()
	expect(() => reduceAnd([0])).toThrow()
})
