import create from './create'
import nand from './nand'
import read from './read'
import toBits from '../string/to-bits'

describe('NAND', () => {
	let buffer1: Buffer, buffer2: Buffer, buffer3: Buffer
	beforeEach(() => {
		buffer1 = create(toBits('0110 1100 0110 1000 1110 0001 0010 1100'))
		buffer2 = create(toBits('1011 0101 1001 1110 0001 1011 0100 0011'))
		buffer3 = create(toBits('1010 1010'))
	})
	test('equal size', () => {
		expect(read(nand(buffer1, buffer2)).join('')).toBe(
			'11011011111101111111111011111111'
		)
	})
	test('looping', () => {
		expect(read(nand(buffer3, buffer1, true)).join('')).toBe(
			'11010111110101110101111111010111'
		)
	})
})
