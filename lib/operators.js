'use strict';

/**
 *	Flips all given bits and returns the flipped bits.	
 *
 *	@example
 *	not([1,0,1,1,0,1]) => [0,1,0,0,1,0]
 *
 *	@param bits {Array} the array containing the bits to flip
 *	@return {Array}	
 */
function not (bits) {
	return applyOperation('not', bits);
}

/**
 *	Applies the OR operation, expects two arrays of the same size and returns a new one.
 *
 *	@example
 *	or([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,1,0,1]
 *
 *	@param bits {Array} the array containing the bits
 *	@param otherBits {Array} the array containing the other bits
 *	@return {Array}
 */
function or (bits, otherBits) {
	return applyOperation('or', bits, otherBits);
}

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
function nor (bits, otherBits) {
	return applyOperation('nor', bits, otherBits);
}

/**
 *	Applies the exclusive or operation, expects two arrays of the same size and returns a new one.
 *
 *	@example
 *	xor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,0,0,1]
 *
 *	@param bits {Array} the array containing the bits
 *	@param otherBits {Array} the array containing the other bits
 *	@return {Array}
 */
function xor (bits, otherBits) {
	return applyOperation('xor', bits, otherBits);
}

/**
 *	Applies the exclusive NOR operation, expects two arrays of the same size and returns a new one.
 *
 *	@example
 *	xnor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,1,1,0]
 *
 *	@param bits {Array} the array containing the bits
 *	@param otherBits {Array} the array containing the other bits
 *	@return {Array}
 */
function xnor (bits, otherBits) {
	return applyOperation('xnor', bits, otherBits);
}

/**
 *	Applies the AND operation, expects two arrays of the same size and returns a new one.	
 *
 *	@example
 *	and([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,0,0,1,0,0]
 *
 *	@param bits {Array} the array containing the bits
 *	@param otherBits {Array} the array containing the other bits
 *	@return {Array}
 */
function and (bits, otherBits) {
	return applyOperation('and', bits, otherBits);
}

/**
 *	Applies the NAND operation, expects two arrays of the same size and returns a new one.	
 *
 *	@example
 *	nand([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,1,1,0,1,1]
 *
 *	@param bits {Array} the array containing the bits
 *	@param otherBits {Array} the array containing the other bits
 *	@return {Array}
 */
function nand (bits, otherBits) {
	return applyOperation('nand', bits, otherBits);	
}

/**
 *	Helper method, contains the logic for the bitwise operations in this script.
 *
 *	@example
 *	applyOperation('nand', bits, otherBits);
 *
 *	@param type {String} the type of the operation
 *	@param bits {Array} the array containing the bits
 *	@param otherBits {Array} the array containing the other bits
 *	@return {Array}
 */
function applyOperation (type, bits, otherBits) {
	var result = [];
	for (var i = 0; i < bits.length; i++) {
		switch (type) {
			case 'not':
				result[i] = bits[i] === 0 ? 1 : 0;
			break;
			case 'or':
				result[i] = bits[i] === 0 && bits[i] === otherBits[i] ? 0 : 1;
			break;
			case 'nor':
				result[i] = bits[i] === 0 && bits[i] === otherBits[i] ? 1 : 0;
			break;
			case 'xor':
				result[i] = bits[i] === otherBits[i] ? 0 : 1;
			break;
			case 'xnor':
				result[i] = bits[i] === otherBits[i] ? 1 : 0;
			break;
			case 'and':
				result[i] = bits[i] * otherBits[i];
			break;
			case 'nand':
				result[i] = bits[i] === 1 && bits[i] === otherBits[i] ? 0 : 1;
			break;
		}
	}
	return result;
}

module.exports = {
	not: not,
	or: or,
	nor: nor,
	xor: xor,
	xnor: xnor,
	and: and,
	nand: nand
};
