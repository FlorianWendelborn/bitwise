/**
 *	Flips all given bits and returns the flipped bits.
 *
 *	@example
 *	not([1,0,1,1,0,1]) => [0,1,0,0,1,0]
 *
 *	@param bits {Array} the array containing the bits to flip
 *	@return {Array}
 */
export default bits => {
	const result = []

	for (let i = 0; i < bits.length; i++) result[i] = bits[i] ^ 1

	return result
}
