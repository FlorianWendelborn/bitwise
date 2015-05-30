'use strict';

var p2 = [];
for (var i = 0; i < 32; i++) {
	p2[i] = Math.pow(2, i);
}

/**
 *	Returns an Array of length 8 containing the read bits.
 *
 *	@example
 *	readByte(42) → [0,0,1,0,1,0,1,0]
 *
 *	@param data {Number} one byte of data
 *	@return {Array, false}
 */
function readByte (data) {
	if (typeof data === 'number' && data < 256 && data >= 0 && Math.floor(data) === data) {
		for (var i = 7; i >= 0; i--) {
			if (data >= p2[i]) {
				data -= p2[i];
				readByteArray[7-i] = 1;
			} else {
				readByteArray[7-i] = 0;
			}
		}
		return readByteArray;
	} else {
		return false;
	}
}
var readByteArray = [0,0,0,0,0,0,0,0];

/**
 *	Returns a Byte (0-255) which equals the given bits.
 *
 *	@example
 *	writeByte([0,0,1,0,1,0,1,0]) → 42
 *
 *	@param bits {Array} 8 bits to represent an 8 bit number
 *	@return {Number, false}
 */
function writeByte (bits) {
	if (typeof bits === 'object' && bits.length === 8) {
		var data = 0x00;
		for (var i = 0; i < 8; i++) {
			data = data | (bits[i] ? p2[7-i] : 0);
		}
		return data;
	} else {
		return false;
	}
}

/**
 *	Returns an Array containing bitLength bits starting at bitOffset.
 *
 *	@example
 *	readBuffer(buffer, 2, 4) → [0,0,1,0]
 *
 *	@param buffer {Buffer} the buffer to read
 *	@param offset {Number} where to start (in bits)
 *	@param length {Number} how many bits to read
 *	@return {Array}
 */
function readBuffer (buffer, offset, length) {
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
		readBufferBits = readByte(buffer[start+i]);
		arr[i*8] = readBufferBits[0];
		arr[i*8+1] = readBufferBits[1];
		arr[i*8+2] = readBufferBits[2];
		arr[i*8+3] = readBufferBits[3];
		arr[i*8+4] = readBufferBits[4];
		arr[i*8+5] = readBufferBits[5];
		arr[i*8+6] = readBufferBits[6];
		arr[i*8+7] = readBufferBits[7];
		i++;
	}
	
	var subOffset = offset % 8;
	return arr.slice(subOffset, subOffset+length);
}
var readBufferBits = [0,0,0,0,0,0,0,0];

/**
 *	Modifies the buffer's bits to equal newBits starting at bitOffset.
 *
 *	@example
 *	modifyBuffer(buffer, [0,0,1,0], 0) → buffer was modified
 *
 *	@param buffer {Buffer} the buffer to modify
 *	@param bits {Array} the bits to insert
 *	@param offset {Number} where to start (in bits)
 *	@return undefined
 */
function modifyBuffer (buffer, bits, offset) {
	if (!offset) {
		offset = 0;
	}
	var start = Math.floor(offset/8);
	var end = Math.ceil((offset + bits.length) / 8);
	var subBuffer = buffer.slice(start, end);
	
	var byteData = readBuffer(subBuffer);
	
	var subOffset = offset % 8;
	
	for (var i = 0; i < bits.length; i++) {
		byteData[subOffset] = bits[i];
		subOffset++;
	}
	
	var length = end-start;
	for (i = 0; i < length; i++) {
		subBuffer[i] = writeByte(byteData.slice(i*8, (i+1)*8));
	}
}

/**
 *	Creates a new buffer and writes the given bits.
 *
 *	@example
 *	createBuffer([1,1,1,1, 0,0,0,1, 1,0,1,0]) → buffer with data 1111 0001 1010 0000
 *
 *	@param bits {Array} an array containing the bits to insert
 *	@return {Buffer}
 */
function createBuffer (bits) {
	var buffer = new Buffer(Math.ceil(bits.length/8));
	buffer.fill(0x00);

	for (var i = 0; i < buffer.length; i++) {
		for (var j = 0; j < 8; j++) {
			if (bits[i*8+j]) {
				createBufferArray[j] = bits[i*8+j];
			} else {
				createBufferArray[j] = 0;
			}
		}
		buffer[i] = writeByte(createBufferArray);
	}

	return buffer;
}
var createBufferArray = [0,0,0,0,0,0,0,0];

/**
 *	Converts a string into an array of bits. Ignores all characters except 1 and 0.
 *
 *	@example
 *	toBits('10 10 12$%_.0') → [1,0,1,0,1,0]
 *
 *	@param string {String} the string to convert
 *	@return {Array}
 */
function toBits (string) {
	toBitsArray = [];
	toBitsIndex = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] === '1') {
			toBitsArray[toBitsIndex] = 1;
			toBitsIndex++;
		} else if (string[i] === '0') {
			toBitsArray[toBitsIndex] = 0;
			toBitsIndex++;
		}
	}

	return toBitsArray;
}
var toBitsArray = [];
var toBitsIndex = 0;

/**
 *	Converts a bit array to a string. If defined, inserts spacer every spacing characters, but never inserts it as the last substring.
 *
 *	@example
 *	toString([1,0,1,0,1,0], 2, '_') → '10_10_10'
 *
 *	@param bits {Array} the bits to convert
 *	@param spacing {Number} where to place the spacers
 *	@param spacer {Number} the string used as a spacer
 *	@return {String}
 */
function toString (bits, spacing, spacer) {
	if (typeof spacing === 'undefined') {
		spacing = 0;
	}
	if (typeof spacer === 'undefined') {
		spacer = ' ';
	}
	if (spacing) {
		toStringString = '';
		for (var i = 0; i < bits.length; i++) {
			toStringString += bits[i] ? 1 : 0;
			if (i % spacing === spacing-1 && i !== bits.length-1) {
				toStringString += spacer;
			}
		}
		return toStringString;
	} else {
		return bits.join('');
	}
}
var toStringString;

/**
 *	Converts a section of a buffer to an unsigned integer.
 *  
 *	@example
 *	// buffer 11110110
 *	readUInt(buffer, 5, 3) → 22
 *	
 *	@param buffer {Buffer} the buffer to extract information from
 *	@param length {Number} the length of the unsigned integer (in bits)
 *	@param offset {Number} where to start (in bits)
 *	@return {Number}
 */
function readUInt (buffer, length, offset) {
	if (!length) {
		length = 8;
	}
	if (!offset) {
		offset = 0;
	}
	readUIntArray = readBuffer(buffer, offset, length);
	readUIntResult = 0;

	for (var i = 0; i < length; i++) {
		readUIntResult += readUIntArray[i] * p2[length-i-1];
	}

	return readUIntResult;
}
var readUIntArray = [];
var readUIntResult = 0;

/**
 *	Converts a section of a buffer to an signed integer.
 *  
 *	@example
 *	// buffer 11110110
 *	readUInt(buffer, 5, 3) → -10
 *	
 *	@param buffer {Buffer} the buffer to extract information from
 *	@param length {Number} the length of the signed integer (in bits)
 *	@param offset {Number} where to start (in bits)
 *	@return {Number}
 */
function readInt (buffer, length, offset) {
	if (!length) {
		length = 8;
	}
	if (!offset) {
		offset = 0;
	}
	readIntArray = readBuffer(buffer, offset, length);
	
	if (readIntArray[0] === 0) {
		readIntResult = 0;
		for (var i = 1; i < length; i++) {
			readIntResult += readIntArray[i] * p2[length-i-1];
		}
	} else {
		readIntResult = -1;
		readIntArray = flipBits(readIntArray);
		for (var i = 1; i < length; i++) {
			readIntResult -= readIntArray[i] * p2[length-i-1];
		}
	}

	return readIntResult;
}
var readIntArray = [];
var readIntResult = 0;

/**
 *	Converts a section of a buffer to a complementary integer.
 *	A complementary integer is like a unsigned integer, but always represents negative numbers.
 *  
 *	@example
 *	// buffer 11110110
 *	readUInt(buffer, 5, 3) → -22
 *	
 *	@param buffer {Buffer} the buffer to extract information from
 *	@param length {Number} the length of the signed integer (in bits)
 *	@param offset {Number} where to start (in bits)
 *	@return {Number}
 */
function readCInt (buffer, length, offset) {
	return 0 - readUInt(buffer, length, offset);
}

/**
 *	Flips all given bits and returns the flipped bits.	
 *
 *	@example
 *	flipBits([1,0,1,1,0,1]) → [0,1,0,0,1,0]
 *
 *	@param bits {Array} the array containing the bits to flip
 *	@return {Array}	
 */
function flipBits (bits) {
	for (var i = 0; i < bits.length; i++) {
		bits[i] = bits[i] === 0 ? 1 : 0;
	}
	return bits;
}

module.exports = {
	readByte: readByte,
	writeByte: writeByte,
	readBuffer: readBuffer,
	modifyBuffer: modifyBuffer,
	createBuffer: createBuffer,
	toBits: toBits,
	toString: toString,
	readUInt: readUInt,
	readInt: readInt,
	readCInt: readCInt,
	flipBits: flipBits
};
