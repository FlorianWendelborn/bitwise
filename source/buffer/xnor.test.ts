import create from './create'
import read from './read'
import toBits from '../string/to-bits'
import xnor from './xnor'

describe('XNOR', () => {
	let buffer1, buffer2, buffer3
	beforeEach(() => {
		buffer1 = create(toBits('0110 1100 0110 1000 1110 0001 0010 1100'))
		buffer2 = create(toBits('1011 0101 1001 1110 0001 1011 0100 0011'))
		buffer3 = create(toBits('1010 1010'))
	})
	test('equal size', () => {
		expect(read(xnor(buffer1, buffer2)).join('')).toBe(
			'00100110000010010000010110010000'
		)
	})
	test('looping', () => {
		expect(read(xnor(buffer3, buffer1, true)).join('')).toBe(
			'00111001001111011011010001111001'
		)
	})
})
