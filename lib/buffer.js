'use strict';

var byte = require('./byte');

/**
 *	Returns an Array containing bitLength bits starting at bitOffset.
 *
 *	@example
 *	readBuffer(buffer, 2, 4) => [0,0,1,0]
 *
 *	@param buffer {Buffer} the buffer to read
 *	@param offset {Number} where to start (in bits)
 *	@param length {Number} how many bits to read
 *	@return {Array}
 */
function read (buffer, offset, length) {
	var bits = [0,0,0,0,0,0,0,0];
	if (!offset) {
		offset = 0;
	}
	if (!length) {
		length = buffer.length*8-offset;
	}
	var start = Math.floor(offset/8);
	var bytesToRead = Math.floor(length/8) + 2;

	var arr = [];
	arr.length = bytesToRead*8;
	var i = 0;
	while (i <= bytesToRead) {
		bits = byte.read(buffer[start+i]);
		arr[i*8] = bits[0];
		arr[i*8+1] = bits[1];
		arr[i*8+2] = bits[2];
		arr[i*8+3] = bits[3];
		arr[i*8+4] = bits[4];
		arr[i*8+5] = bits[5];
		arr[i*8+6] = bits[6];
		arr[i*8+7] = bits[7];
		i++;
	}

	var subOffset = offset % 8;
	return arr.slice(subOffset, subOffset+length);
}

/**
 *	Modifies the buffer's bits to equal newBits starting at bitOffset.
 *
 *	@example
 *	modifyBuffer(buffer, [0,0,1,0], 0) => buffer was modified
 *
 *	@param buffer {Buffer} the buffer to modify
 *	@param bits {Array} the bits to insert
 *	@param offset {Number} where to start (in bits)
 *	@return undefined
 */
function modify (buffer, bits, offset) {
	if (!offset) {
		offset = 0;
	}
	var start = Math.floor(offset/8);
	var end = Math.ceil((offset + bits.length) / 8);
	var subBuffer = buffer.slice(start, end);

	var byteData = read(subBuffer);

	var subOffset = offset % 8;

	for (var i = 0; i < bits.length; i++) {
		byteData[subOffset] = bits[i];
		subOffset++;
	}

	var length = end-start;
	for (i = 0; i < length; i++) {
		subBuffer[i] = byte.write(byteData.slice(i*8, (i+1)*8));
	}
}

/**
 *	Creates a new buffer and writes the given bits.
 *
 *	@example
 *	createBuffer([1,1,1,1, 0,0,0,1, 1,0,1,0]) => buffer with data 1111 0001 1010 0000
 *
 *	@param bits {Array} an array containing the bits to insert
 *	@return {Buffer}
 */
function create (bits) {
	var data = [0,0,0,0,0,0,0,0];
	var buffer = new Buffer(Math.ceil(bits.length/8));
	buffer.fill(0x00);

	for (var i = 0; i < buffer.length; i++) {
		for (var j = 0; j < 8; j++) {
			if (bits[i*8+j]) {
				data[j] = bits[i*8+j];
			} else {
				data[j] = 0;
			}
		}
		buffer[i] = byte.write(data);
	}

	return buffer;
}

module.exports = {
	read: read,
	modify: modify,
	create: create
};
