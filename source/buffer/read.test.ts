import bitwise from '../'

test('without length and offset', () => {
	const input: Buffer = Buffer.from('AE37', 'hex')
	expect(bitwise.buffer.read(input).join()).toBe(
		bitwise.string.toBits('1010 1110 0011 0111').join()
	)
})

test('without length, but offset', () => {
	const input: Buffer = Buffer.from('950225B12B44E2B4C4A6', 'hex')
	expect(bitwise.buffer.read(input, 64).join()).toBe(
		bitwise.string.toBits('1100 0100 1010 0110').join()
	)
})

test('without length, but offset (odd start)', () => {
	const input: Buffer = Buffer.from('ED743E17', 'hex')
	expect(bitwise.buffer.read(input, 12).join()).toBe(
		bitwise.string.toBits('0100 0011 1110 0001 0111').join()
	)
})

test('with offset and length', () => {
	const input: Buffer = Buffer.from('950225B12B44E2B4C4A6', 'hex')
	expect(bitwise.buffer.read(input, 32, 24).join()).toBe(
		bitwise.string.toBits('0010 1011 0100 0100 1110 0010').join()
	)
})

test('with offset and length (odd end)', () => {
	const input: Buffer = Buffer.from('950225B12B44E2B4C4A6', 'hex')
	expect(bitwise.buffer.read(input, 32, 30).join()).toBe(
		bitwise.string.toBits('0010 1011 0100 0100 1110 0010 1011 01').join()
	)
})

test('with offset and length (odd start and end)', () => {
	const input: Buffer = Buffer.from('950225B12B44E2B4C4A6', 'hex')
	expect(bitwise.buffer.read(input, 34, 28).join()).toBe(
		bitwise.string.toBits('1010 1101 0001 0011 1000 1010 1101').join()
	)
})
