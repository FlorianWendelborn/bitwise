import reduceXnor from './reduce-xnor'

test('valid inputs', () => {
	expect(reduceXnor([1, 0, 0, 0, 1, 1, 0, 1])).toEqual(1)
	expect(reduceXnor([1, 1])).toEqual(1)
	expect(reduceXnor([0, 0])).toEqual(1)
	expect(reduceXnor([1, 1, 1, 1, 1])).toEqual(1)
})

test('invalid inputs', () => {
	expect(() => reduceXnor([1])).toThrow()
	expect(() => reduceXnor([0])).toThrow()
})
