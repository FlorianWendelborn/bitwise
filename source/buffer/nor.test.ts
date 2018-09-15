import create from './create'
import nor from './nor'
import read from './read'
import toBits from '../string/to-bits'

describe('NOR', () => {
	let buffer1: Buffer, buffer2: Buffer, buffer3: Buffer
	beforeEach(() => {
		buffer1 = create(toBits('0110 1100 0110 1000 1110 0001 0010 1100'))
		buffer2 = create(toBits('1011 0101 1001 1110 0001 1011 0100 0011'))
		buffer3 = create(toBits('1010 1010'))
	})
	test('equal size', () => {
		expect(read(nor(buffer1, buffer2)).join('')).toBe(
			'00000010000000010000010010010000'
		)
	})
	test('looping', () => {
		expect(read(nor(buffer3, buffer1, true)).join('')).toBe(
			'00010001000101010001010001010001'
		)
	})
})
