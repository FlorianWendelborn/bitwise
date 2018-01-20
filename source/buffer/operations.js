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
 *	@param buffer {Buffer} first buffer
 *	@param otherBuffer {Buffer} second buffer
 *	@param loop {Boolean} loop through first buffer
 *	@return {Array}
 */
const applyOperation = (type, buffer, otherBuffer, loop) => {
	const length = loop ? otherBuffer.length : buffer.length

	const result = new Buffer(length)
	result.fill(0x00)

	for (let i = 0; i < length; i++) {
		const j = loop ? i % buffer.length : i
		switch (type) {
			case 'not':
				result[i] = ~buffer[i]
				break
			case 'or':
				result[i] = buffer[j] | otherBuffer[i]
				break
			case 'nor':
				result[i] = ~(buffer[j] | otherBuffer[i])
				break
			case 'xor':
				result[i] = buffer[j] ^ otherBuffer[i]
				break
			case 'xnor':
				result[i] = ~(buffer[j] ^ otherBuffer[i])
				break
			case 'and':
				result[i] = buffer[j] & otherBuffer[i]
				break
			case 'nand':
				result[i] = ~(buffer[j] & otherBuffer[i])
				break
		}
	}

	return result
}

export default { and, nand, nor, not, or, xnor, xor }
