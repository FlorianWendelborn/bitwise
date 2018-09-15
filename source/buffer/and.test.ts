import create from './create'
import and from './and'
import read from './read'
import toBits from '../string/to-bits'

describe('AND', () => {
	let buffer1, buffer2, buffer3
	beforeEach(() => {
		buffer1 = create(toBits('0110 1100 0110 1000 1110 0001 0010 1100'))
		buffer2 = create(toBits('1011 0101 1001 1110 0001 1011 0100 0011'))
		buffer3 = create(toBits('1010 1010'))
	})
	test('equal size', () => {
		expect(read(and(buffer1, buffer2)).join('')).toBe(
			'00100100000010000000000100000000'
		)
	})
	test('looping', () => {
		expect(read(and(buffer3, buffer1, true)).join('')).toBe(
			'00101000001010001010000000101000'
		)
	})
})
