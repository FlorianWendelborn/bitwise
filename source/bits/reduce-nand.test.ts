import reduceNand from './reduce-nand'

test('reduceNand', () => {
	expect(reduceNand([1, 0, 0, 0, 1, 1, 0, 1])).toEqual(0)
	expect(reduceNand([1, 1])).toEqual(0)
	expect(reduceNand([1, 1, 1, 1, 1])).toEqual(1)
})

test('invalid inputs', () => {
	expect(() => reduceNand([1])).toThrow()
	expect(() => reduceNand([0])).toThrow()
})
