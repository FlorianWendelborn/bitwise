'use strict';

// fix jslint being 2005
/*jslint bitwise: true */

function not (buffer) {
	return applyOperation('not', buffer, buffer, false);
}

function or (buffer, otherBuffer, loop) {
	return applyOperation('or', buffer, otherBuffer, loop);
}

function nor (buffer, otherBuffer, loop) {
	return applyOperation('nor', buffer, otherBuffer, loop);
}

function xor (buffer, otherBuffer, loop) {
	return applyOperation('xor', buffer, otherBuffer, loop);
}

function xnor (buffer, otherBuffer, loop) {
	return applyOperation('xnor', buffer, otherBuffer, loop);
}

function and (buffer, otherBuffer, loop) {
	return applyOperation('and', buffer, otherBuffer, loop);
}

function nand (buffer, otherBuffer, loop) {
	return applyOperation('nand', buffer, otherBuffer, loop);
}

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
function applyOperation (type, buffer, otherBuffer, loop) {
	var length = loop ? otherBuffer.length : buffer.length, j;

	var result = new Buffer(length);
	result.fill(0x00);

	for (var i = 0; i < length; i++) {
		j = loop ? i%buffer.length : i;
		switch (type) {
			case 'not':
				result[i] = ~buffer[i];
			break;
			case 'or':
				result[i] = buffer[j] | otherBuffer[i];
			break;
			case 'nor':
				result[i] = ~(buffer[j] | otherBuffer[i]);
			break;
			case 'xor':
				result[i] = buffer[j] ^ otherBuffer[i];
			break;
			case 'xnor':
				result[i] = ~(buffer[j] ^ otherBuffer[i]);
			break;
			case 'and':
				result[i] = buffer[j] & otherBuffer[i];
			break;
			case 'nand':
				result[i] = ~(buffer[j] & otherBuffer[i]);
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
	nand: nand,
};
