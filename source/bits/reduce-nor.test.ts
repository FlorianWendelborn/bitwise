import reduceNor from './reduce-nor'

test('valid inputs', () => {
	expect(reduceNor([1, 0, 0, 0, 1, 1, 0, 1])).toEqual(0)
	expect(reduceNor([1, 1])).toEqual(0)
	expect(reduceNor([0, 0])).toEqual(1)
	expect(reduceNor([1, 1, 1, 1, 1])).toEqual(0)
})

test('invalid inputs', () => {
	expect(() => reduceNor([1])).toThrow()
	expect(() => reduceNor([0])).toThrow()
})
