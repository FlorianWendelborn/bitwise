import bits from './'

test('without spacing', () => {
	expect(bits.toString([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])).toBe(
		'101010101010'
	)
})
test('with spacing', () => {
	expect(
		bits.toString(
			'10100011000100001011000001001101111100001101100100000100111000011110000100100100'
				.split('')
				.map((i) => parseInt(i, 10)),
			4
		)
	).toBe(
		'1010 0011 0001 0000 1011 0000 0100 1101 1111 0000 1101 1001 0000 0100 1110 0001 1110 0001 0010 0100'
	)
})
