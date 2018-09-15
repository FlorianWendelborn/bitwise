import write from './write'

test('write', () => {
	expect(write([0, 0, 0, 0])).toEqual(0x0)
	expect(write([0, 0, 0, 1])).toEqual(0x1)
	expect(write([0, 0, 1, 0])).toEqual(0x2)
	expect(write([0, 0, 1, 1])).toEqual(0x3)
	expect(write([0, 1, 0, 0])).toEqual(0x4)
	expect(write([0, 1, 0, 1])).toEqual(0x5)
	expect(write([0, 1, 1, 0])).toEqual(0x6)
	expect(write([0, 1, 1, 1])).toEqual(0x7)
	expect(write([1, 0, 0, 0])).toEqual(0x8)
	expect(write([1, 0, 0, 1])).toEqual(0x9)
	expect(write([1, 0, 1, 0])).toEqual(0xa)
	expect(write([1, 0, 1, 1])).toEqual(0xb)
	expect(write([1, 1, 0, 0])).toEqual(0xc)
	expect(write([1, 1, 0, 1])).toEqual(0xd)
	expect(write([1, 1, 1, 0])).toEqual(0xe)
	expect(write([1, 1, 1, 1])).toEqual(0xf)
})

test('throw when the array is invalid', () => {
	expect(() => write([1, 0, 1, 0, 1])).toThrow()
	expect(() => write([1, 0, 1])).toThrow()
	expect(() => write([])).toThrow()
	expect(() => write('1010')).toThrow()
	expect(() => write()).toThrow()
})
