import write from './write'

test('write data', () => {
	expect(write([1, 1, 1, 0, 0, 0, 0, 1])).toBe(0xe1)
	expect(write([0, 0, 1, 0, 1, 0, 1, 0])).toBe(0x2a)
	expect(write([1, 1, 1, 1, 1, 1, 1, 1])).toBe(0xff)
	expect(write([0, 0, 0, 0, 0, 0, 0, 0])).toBe(0x00)
})

test('throw when the array is invalid', () => {
	expect(() => write([1, 0, 1, 0])).toThrow()
	expect(() => write([1, 0, 1, 0, 1, 0, 1, 0, 1])).toThrow()
	expect(() => write([])).toThrow()
	expect(() => write('10101010')).toThrow()
})
