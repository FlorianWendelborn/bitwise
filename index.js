'use strict';

var p2 = [1, 2, 4, 8, 16, 32, 64, 128];

var readByteArray = [0,0,0,0,0,0,0,0];
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

var readBufferBits = [0,0,0,0,0,0,0,0];
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

var createBufferArray = [0,0,0,0,0,0,0,0];
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

var toBitsArray = [];
var toBitsIndex = 0;
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

var toStringString;
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

module.exports = {
	readByte: readByte,
	writeByte: writeByte,
	readBuffer: readBuffer,
	modifyBuffer: modifyBuffer,
	createBuffer: createBuffer,
	toBits: toBits,
	toString: toString
};
