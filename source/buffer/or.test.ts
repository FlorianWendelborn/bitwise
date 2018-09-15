import create from './create'
import or from './or'
import read from './read'
import toBits from '../string/to-bits'

describe('OR', () => {
	let buffer1, buffer2, buffer3
	beforeEach(() => {
		buffer1 = create(toBits('0110 1100 0110 1000 1110 0001 0010 1100'))
		buffer2 = create(toBits('1011 0101 1001 1110 0001 1011 0100 0011'))
		buffer3 = create(toBits('1010 1010'))
	})
	test('equal size', () => {
		expect(read(or(buffer1, buffer2)).join('')).toBe(
			'11111101111111101111101101101111'
		)
	})
	test('looping', () => {
		expect(read(or(buffer3, buffer1, true)).join('')).toBe(
			'11101110111010101110101110101110'
		)
	})
})
