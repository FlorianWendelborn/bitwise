import xor from './xor'

test('XOR', () => {
	const bits1 = [1, 0, 0, 0, 1, 1, 0, 1]
	const bits2 = [0, 1, 1, 0, 0, 1, 0, 0]
	const expected = [1, 1, 1, 0, 1, 0, 0, 1]
	expect(xor(bits1, bits2)).toEqual(expected)
})
