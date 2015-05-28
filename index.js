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

module.exports = {
	readByte: readByte,
	writeByte: writeByte
}
