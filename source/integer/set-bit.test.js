import setBit from './set-bit'

test('sets bits', () => {
	expect(setBit(0, 7, 1)).toEqual(128)
	expect(setBit(255, 8, 1)).toEqual(511)
	expect(setBit(512, 9, 0)).toEqual(0)
})
