import string from './'

describe('convert to bits', () => {
	test('without special characters', () => {
		expect(string.toBits('1001')).toEqual([1, 0, 0, 1])
	})

	test('with special characters', () => {
		expect(string.toBits('10$" -_,.\\/=01')).toEqual([1, 0, 0, 1])
	})

	test('with long strings', () => {
		expect(
			string.toBits(
				'1010 0011 0001 0000 1011 0000 0100 1101 1111 0000 1101 1001 0000 0100 1110 0001 1110 0001 0010 0100'
			)
		).toEqual(
			'10100011000100001011000001001101111100001101100100000100111000011110000100100100'
				.split('')
				.map(i => parseInt(i, 10))
		)
	})
})
