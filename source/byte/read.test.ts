import read from './read'

test('read data', () => {
	expect(read(0xe1)).toEqual([1, 1, 1, 0, 0, 0, 0, 1])
	expect(read(0x2a)).toEqual([0, 0, 1, 0, 1, 0, 1, 0])
	expect(read(0xff)).toEqual([1, 1, 1, 1, 1, 1, 1, 1])
	expect(read(0x00)).toEqual([0, 0, 0, 0, 0, 0, 0, 0])
})

test('throw when the array is invalid', () => {
	expect(() => read()).toThrow()
	expect(() => read(256)).toThrow()
	expect(() => read(-1)).toThrow()
	expect(() => read(0.01)).toThrow()
	expect(() => read([0, 1, 0, 1, 0, 1, 0, 1])).toThrow()
	expect(() => read('FF')).toThrow()
})
