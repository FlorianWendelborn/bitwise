import bitwise from '../'

type TestArray = Array<{ length?: number; offset: number; expected: number }>

const createTestBuffer = (): Buffer =>
	bitwise.buffer.create(
		bitwise.string.toBits('11110110 11111110 10000110 11001000')
	)

test('2-7 bit', () => {
	const buffer: Buffer = createTestBuffer()
	const tests: TestArray = [
		{ length: 2, offset: 6, expected: -2 },
		{ length: 3, offset: 5, expected: -2 },
		{ length: 4, offset: 4, expected: 6 },
		{ length: 5, offset: 3, expected: -10 },
		{ length: 6, offset: 2, expected: -10 },
		{ length: 7, offset: 1, expected: -10 },
	]
	tests.forEach((test) => {
		const result: number = bitwise.buffer.readInt(
			buffer,
			test.offset,
			test.length
		)
		expect(result).toBe(test.expected)
	})
})

test('8-15 bit', () => {
	const buffer = createTestBuffer()
	const tests: TestArray = [
		{ length: undefined, offset: 0, expected: -10 },
		{ length: 8, offset: 0, expected: -10 },
		{ length: 9, offset: 7, expected: 254 },
		{ length: 10, offset: 6, expected: -258 },
		{ length: 11, offset: 5, expected: -258 },
		{ length: 12, offset: 4, expected: 1790 },
		{ length: 13, offset: 3, expected: -2306 },
		{ length: 14, offset: 2, expected: -2306 },
		{ length: 15, offset: 1, expected: -2306 },
	]
	tests.forEach((test) => {
		const result: number = bitwise.buffer.readInt(
			buffer,
			test.offset,
			test.length
		)
		expect(result).toBe(test.expected)
	})
})

test('16-23 bit', () => {
	const buffer = createTestBuffer()
	const tests: TestArray = [
		{ length: 16, offset: 0, expected: -2306 },
		{ length: 17, offset: 7, expected: 65158 },
		{ length: 18, offset: 6, expected: -65914 },
		{ length: 19, offset: 5, expected: -65914 },
		{ length: 20, offset: 4, expected: 458374 },
		{ length: 21, offset: 3, expected: -590202 },
		{ length: 22, offset: 2, expected: -590202 },
		{ length: 23, offset: 1, expected: -590202 },
	]
	tests.forEach((test) => {
		const result: number = bitwise.buffer.readInt(
			buffer,
			test.offset,
			test.length
		)
		expect(result).toBe(test.expected)
	})
})

test('24-31 bit', () => {
	const buffer = createTestBuffer()
	const tests: TestArray = [
		{ length: 24, offset: 0, expected: -590202 },
		{ length: 25, offset: 7, expected: 16680648 },
		{ length: 26, offset: 6, expected: -16873784 },
		{ length: 27, offset: 5, expected: -16873784 },
		{ length: 28, offset: 4, expected: 117343944 },
		{ length: 29, offset: 3, expected: -151091512 },
		{ length: 30, offset: 2, expected: -151091512 },
		{ length: 31, offset: 1, expected: -151091512 },
	]
	tests.forEach((test) => {
		const result: number = bitwise.buffer.readInt(
			buffer,
			test.offset,
			test.length
		)
		expect(result).toBe(test.expected)
	})
})

test('32 bit', () => {
	const buffer: Buffer = createTestBuffer()
	const result: number = bitwise.buffer.readInt(buffer, 0, 32)
	expect(result).toBe(-151091512)
})
