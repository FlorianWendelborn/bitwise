import toggleBit from './toggle-bit'

test('toggles bits', () => {
	expect(toggleBit(0, 7)).toEqual(128)
	expect(toggleBit(128, 7)).toEqual(0)
	expect(toggleBit(255, 8)).toEqual(511)
	expect(toggleBit(511, 8)).toEqual(255)
	expect(toggleBit(512, 9)).toEqual(0)
	expect(toggleBit(0, 9)).toEqual(512)
})
