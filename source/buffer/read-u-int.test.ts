import bitwise from '../'

type TestArray = Array<{ length?: number; offset: number; expected: number }>

const createTestBuffer = () =>
	bitwise.buffer.create(
		bitwise.string.toBits('11110110 11111110 10000110 11001000')
	)

test('2-7 bit', () => {
	const buffer: Buffer = createTestBuffer()
	const tests: TestArray = [
		{ length: 2, offset: 6, expected: 2 },
		{ length: 3, offset: 5, expected: 6 },
		{ length: 4, offset: 4, expected: 6 },
		{ length: 5, offset: 3, expected: 22 },
		{ length: 6, offset: 2, expected: 54 },
		{ length: 7, offset: 1, expected: 118 },
		{ length: 5, offset: 4, expected: 13 },
	]
	tests.forEach(test => {
		const result: number = bitwise.buffer.readUInt(
			buffer,
			test.offset,
			test.length
		)
		expect(result).toBe(test.expected)
	})
})

test('8-15 bit', () => {
	const buffer: Buffer = createTestBuffer()
	const tests: TestArray = [
		{ length: undefined, offset: 0, expected: 246 },
		{ length: 8, offset: 0, expected: 246 },
		{ length: 9, offset: 7, expected: 254 },
		{ length: 10, offset: 6, expected: 766 },
		{ length: 11, offset: 5, expected: 1790 },
		{ length: 12, offset: 4, expected: 1790 },
		{ length: 13, offset: 3, expected: 5886 },
		{ length: 14, offset: 2, expected: 14078 },
		{ length: 15, offset: 1, expected: 30462 },
		{ length: 13, offset: 13, expected: 6683 },
	]
	tests.forEach(test => {
		const number = bitwise.buffer.readUInt(buffer, test.offset, test.length)
		expect(number).toBe(test.expected)
	})
})

test('16-23 bit', () => {
	const buffer = createTestBuffer()
	const tests = [
		{ length: 16, offset: 0, expected: 63230 },
		{ length: 17, offset: 7, expected: 65158 },
		{ length: 18, offset: 6, expected: 196230 },
		{ length: 19, offset: 5, expected: 458374 },
		{ length: 20, offset: 4, expected: 458374 },
		{ length: 21, offset: 3, expected: 1506950 },
		{ length: 22, offset: 2, expected: 3604102 },
		{ length: 23, offset: 1, expected: 7798406 },
		{ length: 21, offset: 9, expected: 2073010 },
	]
	tests.forEach(test => {
		const result: number = bitwise.buffer.readUInt(
			buffer,
			test.offset,
			test.length
		)
		expect(result).toBe(test.expected)
	})
})

test('24-31 bit', () => {
	const buffer: Buffer = createTestBuffer()
	const tests: TestArray = [
		{ length: 24, offset: 0, expected: 16187014 },
		{ length: 25, offset: 7, expected: 16680648 },
		{ length: 26, offset: 6, expected: 50235080 },
		{ length: 27, offset: 5, expected: 117343944 },
		{ length: 28, offset: 4, expected: 117343944 },
		{ length: 29, offset: 3, expected: 385779400 },
		{ length: 30, offset: 2, expected: 922650312 },
		{ length: 31, offset: 1, expected: 1996392136 },
		{ length: 29, offset: 1, expected: 499098034 },
	]
	tests.forEach(test => {
		const result: number = bitwise.buffer.readUInt(
			buffer,
			test.offset,
			test.length
		)
		expect(result).toBe(test.expected)
	})
})

test('32 bit', () => {
	const buffer: Buffer = createTestBuffer()
	const result: number = bitwise.buffer.readUInt(buffer, 0, 32)
	expect(result).toBe(4143875784)
})
