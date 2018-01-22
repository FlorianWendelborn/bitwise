import reduceXor from './reduce-xor'

test('valid inputs', () => {
	expect(reduceXor([1, 0, 0, 0, 1, 1, 0, 1])).toEqual(0)
	expect(reduceXor([1, 1])).toEqual(0)
	expect(reduceXor([1, 0])).toEqual(1)
	expect(reduceXor([0, 1])).toEqual(1)
	expect(reduceXor([0, 0])).toEqual(0)
	expect(reduceXor([1, 1, 1, 1, 1])).toEqual(1)
})

test('invalid inputs', () => {
	expect(() => reduceXor([1])).toThrow()
	expect(() => reduceXor([0])).toThrow()
})
