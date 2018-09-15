import bitwise from '../'

test('with less than one byte', () => {
	const buffer: Buffer = bitwise.buffer.create(bitwise.string.toBits('10011'))
	expect(bitwise.buffer.read(buffer).join()).toBe(
		bitwise.string.toBits('1001 1000').join()
	)
})

test('with one byte', () => {
	const buffer: Buffer = bitwise.buffer.create(
		bitwise.string.toBits('0111 1100')
	)
	expect(bitwise.buffer.read(buffer).join()).toBe(
		bitwise.string.toBits('0111 1100').join()
	)
})

test('with more than one byte', () => {
	const buffer: Buffer = bitwise.buffer.create(
		bitwise.string.toBits('1111 0001 1010')
	)
	expect(bitwise.buffer.read(buffer).join()).toBe(
		bitwise.string.toBits('1111 0001 1010 0000').join()
	)
})

test('with multiple bytes', () => {
	const buffer: Buffer = bitwise.buffer.create(
		bitwise.string.toBits('10101101 11100101 01100011')
	)
	expect(bitwise.buffer.read(buffer).join()).toBe(
		bitwise.string.toBits('10101101 11100101 01100011').join()
	)
})
