import bitwise from '../'
import operations from './operations'

const createBits = () => bitwise.string.toBits('1000 1101')
const createOtherBits = () => bitwise.string.toBits('0110 0100')

test('NOT', () => {
	const bits = createBits()
	const expected = bitwise.string.toBits('0111 0010')
	expect(operations.not(bits)).toEqual(expected)
})

test('OR', () => {
	const bits = createBits()
	const otherBits = createOtherBits()
	const expected = bitwise.string.toBits('1110 1101')
	expect(operations.or(bits, otherBits)).toEqual(expected)
})

test('XOR', () => {
	const bits = createBits()
	const otherBits = createOtherBits()
	const expected = bitwise.string.toBits('1110 1001')
	expect(operations.xor(bits, otherBits)).toEqual(expected)
})

test('NOR', () => {
	const bits = createBits()
	const otherBits = createOtherBits()
	const expected = bitwise.string.toBits('0001 0010')
	expect(operations.nor(bits, otherBits)).toEqual(expected)
})

test('XNOR', () => {
	const bits = createBits()
	const otherBits = createOtherBits()
	const expected = bitwise.string.toBits('0001 0110')
	expect(operations.xnor(bits, otherBits)).toEqual(expected)
})

test('AND', () => {
	const bits = createBits()
	const otherBits = createOtherBits()
	const expected = bitwise.string.toBits('0000 0100')
	expect(operations.and(bits, otherBits)).toEqual(expected)
})

test('NAND', () => {
	const bits = createBits()
	const otherBits = createOtherBits()
	const expected = bitwise.string.toBits('1111 1011')
	expect(operations.nand(bits, otherBits)).toEqual(expected)
})
