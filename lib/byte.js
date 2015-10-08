// generate powers of two
var p2 = [];
for (var i = 0; i < 32; i++) {
	p2[i] = Math.pow(2, i);
}

/**
 *	Returns an Array of length 8 containing the read bits.
 *
 *	@example
 *	byte.read(42) => [0,0,1,0,1,0,1,0]
 *
 *	@param data {Number} one byte of data
 *	@return {Array, false}
 */
function read (data) {
	var result = [0,0,0,0,0,0,0,0];
	if (typeof data === 'number' && data < 256 && data >= 0 && Math.floor(data) === data) {
		for (var i = 7; i >= 0; i--) {
			result[7-i] = data & p2[i] ? 1 : 0;
		}
		return result;
	} else {
		return false;
	}
}

/**
 *	Returns a Byte (0-255) which equals the given bits.
 *
 *	@example
 *	byte.write([0,0,1,0,1,0,1,0]) => 42
 *
 *	@param bits {Array} 8 bits to represent an 8 bit number
 *	@return {Number, false}
 */
function write (bits) {
	var data = 0x00;
	if (typeof bits === 'object' && bits.length === 8) {
		for (var i = 0; i < 8; i++) {
			data = data | (bits[i] ? p2[7-i] : 0);
		}
		return data;
	} else {
		return false;
	}
}

module.exports = {
	read: read,
	write: write
};
