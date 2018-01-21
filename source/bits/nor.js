/**
 *	Applies the NOR operation, expects two arrays of the same size and returns a new one.
 *
 *	@example
 *	nor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,0,1,0]
 *
 *	@param bits {Array} the array containing the bits
 *	@param otherBits {Array} the array containing the other bits
 *	@return {Array}
 */
export default (bits1, bits2) => {
	const result = []

	for (let i = 0; i < bits1.length; i++) result[i] = (bits1[i] | bits2[i]) ^ 1

	return result
}
