import create from './create'
import read from './read'
import toBits from '../string/to-bits'
import xor from './xor'

describe('XOR', () => {
	let buffer1: Buffer, buffer2: Buffer, buffer3: Buffer
	beforeEach(() => {
		buffer1 = create(toBits('0110 1100 0110 1000 1110 0001 0010 1100'))
		buffer2 = create(toBits('1011 0101 1001 1110 0001 1011 0100 0011'))
		buffer3 = create(toBits('1010 1010'))
	})
	test('equal size', () => {
		expect(read(xor(buffer1, buffer2)).join('')).toBe(
			'11011001111101101111101001101111'
		)
	})
	test('looping', () => {
		expect(read(xor(buffer3, buffer1, true)).join('')).toBe(
			'11000110110000100100101110000110'
		)
	})
})
