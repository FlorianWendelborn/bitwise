'use strict'

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
	var end = Math.ceil((offset + length) / 8);
	var subBuffer = buffer.slice(start, end);
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
	
	var sOff = offset % 8;
	return arr.slice(sOff, sOff+length);
}

function modifyBuffer (buffer, bits, offset) {
	if (!offset) {
		offset = 0;
	}
	var start = Math.floor(offset/8);
	var end = Math.ceil((offset + bits.length) / 8);
	var subBuffer = buffer.slice(start, end);
	var arr = readBuffer(subBuffer);
	var sOff = offset % 8;
	var i = 0;
	while (i < bits.length) {
		arr[sOff] = bits[i];
		sOff++;
		i++;
	}
	i = 0;
	while (i < end-start) {
		subBuffer[i] = writeByte(arr.slice(i*8, (i*8)+8));
		i++;
	}
}

var createBufferArray = [0,0,0,0,0,0,0,0];
function createBuffer (bits) {
	var buffer = new Buffer(Math.ceil(bits.length/8)).fill(0x00);

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

module.exports = {
	readByte: readByte,
	writeByte: writeByte,
	readBuffer: readBuffer,
	modifyBuffer: modifyBuffer,
	createBuffer: createBuffer
};
