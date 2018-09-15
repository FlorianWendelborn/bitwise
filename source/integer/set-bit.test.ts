import setBit from './set-bit'

test('sets bits', () => {
	expect(setBit(0b0, 7, 1)).toEqual(128)
	expect(setBit(0b11111111, 8, 1)).toEqual(511)
	expect(setBit(0b1000000000, 9, 0)).toEqual(0)
	expect(setBit(0, 31, 1)).toEqual(1 << 31)
})
