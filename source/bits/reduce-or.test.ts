import reduceOr from './reduce-or'

test('valid inputs', () => {
	expect(reduceOr([1, 0, 0, 0, 1, 1, 0, 1])).toEqual(1)
	expect(reduceOr([1, 1])).toEqual(1)
	expect(reduceOr([0, 0])).toEqual(0)
	expect(reduceOr([0, 0, 0, 0, 0])).toEqual(0)
})

test('invalid inputs', () => {
	expect(() => reduceOr([1])).toThrow()
	expect(() => reduceOr([0])).toThrow()
})
