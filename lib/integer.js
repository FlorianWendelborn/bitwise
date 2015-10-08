'use strict';

var libBuffer = require('./buffer');
var not = require('./operator').not;

// generate powers of two
var p2 = [];
for (var i = 0; i < 32; i++) {
	p2[i] = Math.pow(2, i);
}

/**
 *	Converts a section of a buffer to an unsigned integer.
 *
 *	@example
 *	// buffer 11110110
 *	readUInt(buffer, 3, 5) => 22
 *
 *	@param buffer {Buffer} the buffer to extract information from
 *	@param length {Number} the length of the unsigned integer (in bits)
 *	@param offset {Number} where to start (in bits)
 *	@return {Number}
 */
function unsigned (buffer, offset, length) {
	var arr = [];
	var result = 0;

	if (!length) {
		length = 8;
	}
	if (!offset) {
		offset = 0;
	}
	arr = libBuffer.read(buffer, offset, length);
	result = 0;

	for (var i = 0; i < length; i++) {
		result += arr[i] * p2[length-i-1];
	}

	return result;
}

/**
 *	Converts a section of a buffer to a signed integer.
 *
 *	@example
 *	// buffer 11110110
 *	readUInt(buffer, 3, 5) => -10
 *
 *	@param buffer {Buffer} the buffer to extract information from
 *	@param length {Number} the length of the signed integer (in bits)
 *	@param offset {Number} where to start (in bits)
 *	@return {Number}
 */
function signed (buffer, offset, length) {
	var arr = [];
	var result = 0;
	if (!length) {
		length = 8;
	}
	if (!offset) {
		offset = 0;
	}
	arr = libBuffer.read(buffer, offset, length);

	var i = 0;
	if (arr[0] === 0) {
		result = 0;
		while (++i < length) {
			result += arr[i] * p2[length-i-1];
		}
	} else {
		result = -1;
		arr = not(arr);
		while (++i < length) {
			result -= arr[i] * p2[length-i-1];
		}
	}

	return result;
}

/**
 *	Converts a section of a buffer to a complementary integer.
 *	A complementary integer is like an unsigned integer, but always represents negative numbers.
 *
 *	@example
 *	// buffer 11110110
 *	readUInt(buffer, 3, 5) => -22
 *
 *	@param buffer {Buffer} the buffer to extract information from
 *	@param length {Number} the length of the signed integer (in bits)
 *	@param offset {Number} where to start (in bits)
 *	@return {Number}
 */
function complementary (buffer, offset, length) {
	return 0 - unsigned(buffer, offset, length);
}

module.exports = {
	complementary: complementary,
	signed: signed,
	unsigned: unsigned
};
