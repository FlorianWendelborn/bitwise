import bitwise from '../'

test('with one bit of data', () => {
	const buffer = new Buffer(1)
	buffer.fill(0x00)

	bitwise.buffer.modify(buffer, bitwise.string.toBits('1'))

	expect(bitwise.buffer.read(buffer).join()).toBe(
		bitwise.string.toBits('1000 0000').join()
	)
})

test('without offset', () => {
	const buffer = new Buffer('FBA8', 'hex')

	bitwise.buffer.modify(buffer, bitwise.string.toBits('01010'))

	expect(bitwise.buffer.read(buffer).join()).toBe(
		bitwise.string.toBits('0101 0011 1010 1000').join()
	)
})

test('with offset', () => {
	const buffer = new Buffer('A43A', 'hex')

	bitwise.buffer.modify(buffer, bitwise.string.toBits('01001001'), 3)

	expect(bitwise.buffer.read(buffer).join()).toBe(
		bitwise.string.toBits('1010 1001 0011 1010').join()
	)
})

test('with one byte offset', () => {
	const buffer = new Buffer('AC14E974', 'hex')

	bitwise.buffer.modify(buffer, bitwise.string.toBits('01001001'), 8)

	expect(bitwise.buffer.read(buffer).join()).toBe(
		bitwise.string.toBits('1010 1100 0100 1001 1110 1001 0111 0100').join()
	)
})
