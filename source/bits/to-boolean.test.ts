import toBoolean from './to-boolean'

test('toBoolean', () => {
	expect(toBoolean([0, 1, 0, 1])).toEqual([false, true, false, true])
	expect(toBoolean([1])).toEqual([true])
	expect(toBoolean([0])).toEqual([false])
})
