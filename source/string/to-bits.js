/**
 *	Converts a string into an array of bits. Ignores all characters except 1 and 0.
 *
 *	@example
 *	toBits('10 10 12$%_.0') => [1,0,1,0,1,0]
 *
 *	@param string {String} the string to convert
 *	@returns {Array} resulting array of bits
 */
export default string => {
	const result = []

	for (let i = 0; i < string.length; i++) {
		if (string[i] === '1') result.push(1)
		else if (string[i] === '0') result.push(0)
	}

	return result
}
