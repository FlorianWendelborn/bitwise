import nand from './nand'

test('NAND', () => {
	const bits1 = [1, 0, 0, 0, 1, 1, 0, 1]
	const bits2 = [0, 1, 1, 0, 0, 1, 0, 0]
	const expected = [1, 1, 1, 1, 1, 0, 1, 1]
	expect(nand(bits1, bits2)).toEqual(expected)
})
