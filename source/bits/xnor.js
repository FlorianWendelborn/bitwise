/**
 * Applies the exclusive NOR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * xnor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,1,1,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 XNOR bits2]
 */
export default (bits1, bits2) => {
	const result = []

	for (let i = 0; i < bits1.length; i++) result[i] = bits1[i] ^ bits2[i] ^ 1

	return result
}
