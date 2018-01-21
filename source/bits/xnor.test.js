import xnor from './xnor'

test('XNOR', () => {
	const bits1 = [1, 0, 0, 0, 1, 1, 0, 1]
	const bits2 = [0, 1, 1, 0, 0, 1, 0, 0]
	const expected = [0, 0, 0, 1, 0, 1, 1, 0]
	expect(xnor(bits1, bits2)).toEqual(expected)
})
