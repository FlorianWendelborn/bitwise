import create from './create'
import not from './not'
import read from './read'
import toBits from '../string/to-bits'

test('NOT', () => {
	const buffer1 = create(toBits('0110 1100 0110 1000 1110 0001 0010 1100'))
	expect(read(not(buffer1)).join('')).toBe('10010011100101110001111011010011')
})
