import not from './not'

test('NOT', () => {
	const bits = [1, 0, 0, 0, 1, 1, 0, 1]
	const expected = [0, 1, 1, 1, 0, 0, 1, 0]
	expect(not(bits)).toEqual(expected)
})
