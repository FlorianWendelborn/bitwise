import bitwise from '../'

describe('buffer bitwise operations', () => {
	let bufferA, bufferB, bufferC
	beforeEach(() => {
		bufferA = bitwise.buffer.create(
			bitwise.string.toBits('0110 1100 0110 1000 1110 0001 0010 1100')
		)
		bufferB = bitwise.buffer.create(
			bitwise.string.toBits('1011 0101 1001 1110 0001 1011 0100 0011')
		)
		bufferC = bitwise.buffer.create(bitwise.string.toBits('1010 1010'))
	})
	test('NOT', () => {
		expect(bitwise.buffer.read(bitwise.buffer.not(bufferA)).join()).toBe(
			bitwise.string.toBits('1001 0011 1001 0111 0001 1110 1101 0011').join()
		)
	})
	describe('OR', () => {
		test('equal size', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.or(bufferA, bufferB)).join()
			).toBe(
				bitwise.string.toBits('1111 1101 1111 1110 1111 1011 0110 1111').join()
			)
		})
		test('looping', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.or(bufferC, bufferA, true)).join()
			).toBe(
				bitwise.string.toBits('1110 1110 1110 1010 1110 1011 1010 1110').join()
			)
		})
	})
	describe('NOR', () => {
		test('equal size', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.nor(bufferA, bufferB)).join()
			).toBe(
				bitwise.string.toBits('0000 0010 0000 0001 0000 0100 1001 0000').join()
			)
		})
		test('looping', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.nor(bufferC, bufferA, true)).join()
			).toBe(
				bitwise.string.toBits('0001 0001 0001 0101 0001 0100 0101 0001').join()
			)
		})
	})
	describe('XOR', () => {
		test('equal size', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.xor(bufferA, bufferB)).join()
			).toBe(
				bitwise.string.toBits('1101 1001 1111 0110 1111 1010 0110 1111').join()
			)
		})
		test('looping', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.xor(bufferC, bufferA, true)).join()
			).toBe(
				bitwise.string.toBits('1100 0110 1100 0010 0100 1011 1000 0110').join()
			)
		})
	})
	describe('XNOR', () => {
		test('equal size', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.xnor(bufferA, bufferB)).join()
			).toBe(
				bitwise.string.toBits('0010 0110 0000 1001 0000 0101 1001 0000').join()
			)
		})
		test('looping', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.xnor(bufferC, bufferA, true)).join()
			).toBe(
				bitwise.string.toBits('0011 1001 0011 1101 1011 0100 0111 1001').join()
			)
		})
	})
	describe('AND', () => {
		test('equal size', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.and(bufferA, bufferB)).join()
			).toBe(
				bitwise.string.toBits('0010 0100 0000 1000 0000 0001 0000 0000').join()
			)
		})
		test('looping', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.and(bufferC, bufferA, true)).join()
			).toBe(
				bitwise.string.toBits('0010 1000 0010 1000 1010 0000 0010 1000').join()
			)
		})
	})
	describe('NAND', () => {
		test('equal size', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.nand(bufferA, bufferB)).join()
			).toBe(
				bitwise.string.toBits('1101 1011 1111 0111 1111 1110 1111 1111').join()
			)
		})
		test('looping', () => {
			expect(
				bitwise.buffer.read(bitwise.buffer.nand(bufferC, bufferA, true)).join()
			).toBe(
				bitwise.string.toBits('1101 0111 1101 0111 0101 1111 1101 0111').join()
			)
		})
	})
})
