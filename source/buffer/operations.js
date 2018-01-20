export const not = buffer => applyOperation('not', buffer, buffer, false)

export const or = (buffer, otherBuffer, loop) =>
	applyOperation('or', buffer, otherBuffer, loop)

export const nor = (buffer, otherBuffer, loop) =>
	applyOperation('nor', buffer, otherBuffer, loop)

export const xor = (buffer, otherBuffer, loop) =>
	applyOperation('xor', buffer, otherBuffer, loop)

export const xnor = (buffer, otherBuffer, loop) =>
	applyOperation('xnor', buffer, otherBuffer, loop)

export const and = (buffer, otherBuffer, loop) =>
	applyOperation('and', buffer, otherBuffer, loop)

export const nand = (buffer, otherBuffer, loop) =>
	applyOperation('nand', buffer, otherBuffer, loop)

/**
 *	Helper method, contains the logic for the bitwise buffer operations in this script.
 *
 *	@example
 *	applyOperation('nand', buffer, otherBuffer);
 *
 *	@param type {String} the type of the operation
 *	@param buffer1 {Buffer} first buffer
 *	@param buffer2 {Buffer} second buffer
 *	@param isLooping {Boolean} loop through first buffer
 *	@return {Array}
 */
const applyOperation = (type, buffer1, buffer2, isLooping = false) => {
	const length = isLooping ? buffer2.length : buffer1.length

	const result = new Buffer(length)
	result.fill(0x00)

	for (let i = 0; i < length; i++) {
		const j = isLooping ? i % buffer1.length : i
		switch (type) {
			case 'not':
				result[i] = ~buffer1[i]
				break
			case 'or':
				result[i] = buffer1[j] | buffer2[i]
				break
			case 'nor':
				result[i] = ~(buffer1[j] | buffer2[i])
				break
			case 'xor':
				result[i] = buffer1[j] ^ buffer2[i]
				break
			case 'xnor':
				result[i] = ~(buffer1[j] ^ buffer2[i])
				break
			case 'and':
				result[i] = buffer1[j] & buffer2[i]
				break
			case 'nand':
				result[i] = ~(buffer1[j] & buffer2[i])
				break
		}
	}

	return result
}

export default { and, nand, nor, not, or, xnor, xor }
