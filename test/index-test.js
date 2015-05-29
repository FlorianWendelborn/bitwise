var expect = require('expect.js');
var bitwise = require('../');

console.log('\033c');

function bin (string) {
	var array = [];

	for (var i = 0; i < string.length; i++) {
		if (string[i] === '1') {
			array.push(1);
		} else if (string[i] === '0') {
			array.push(0);
		}
	}

	return array;
}

describe('byte manipulation', function () {
	describe('write data', function () {
		it('should write data', function () {
			expect(bitwise.writeByte([1,1,1,0,0,0,0,1])).to.be(0xE1);
			expect(bitwise.writeByte([0,0,1,0,1,0,1,0])).to.be(0x2A);
			expect(bitwise.writeByte([1,1,1,1,1,1,1,1])).to.be(0xFF);
			expect(bitwise.writeByte([0,0,0,0,0,0,0,0])).to.be(0x00);
		});
		it('should return false when the array is invalid', function () {
			expect(bitwise.writeByte([1,0,1,0])).to.not.be.ok();
			expect(bitwise.writeByte([1,0,1,0,1,0,1,0,1])).to.not.be.ok();
			expect(bitwise.writeByte([])).to.not.be.ok();
			expect(bitwise.writeByte('10101010')).to.not.be.ok();
		});
	});
	describe('read data', function () {
		it('should read data', function () {
			expect(bitwise.readByte(0xE1)).to.eql([1,1,1,0,0,0,0,1]);
			expect(bitwise.readByte(0x2A)).to.eql([0,0,1,0,1,0,1,0]);
			expect(bitwise.readByte(0xFF)).to.eql([1,1,1,1,1,1,1,1]);
			expect(bitwise.readByte(0x00)).to.eql([0,0,0,0,0,0,0,0]);
		});
		it('should return false when the array is invalid', function () {
			expect(bitwise.readByte()).to.not.be.ok();
			expect(bitwise.readByte(256)).to.not.be.ok();
			expect(bitwise.readByte(-1)).to.not.be.ok();
			expect(bitwise.readByte(0.01)).to.not.be.ok();
			expect(bitwise.readByte([0,1,0,1,0,1,0,1])).to.not.be.ok();
			expect(bitwise.readByte('FF')).to.not.be.ok();
		});
	});
});

describe('buffer manipulation', function () {
	describe('read buffers', function () {
		it('without length and offset', function () {
			var buffer = new Buffer('AE37', 'hex');
			expect(bitwise.readBuffer(buffer).join()).to.be(bin('1010 1110 0011 0111').join());
		});
		it('without length, but offset', function () {
			var buffer = new Buffer('950225B12B44E2B4C4A6', 'hex');
			expect(bitwise.readBuffer(buffer, 64).join()).to.be(bin('1100 0100 1010 0110').join());
		});
		it('without length, but offset (offset % 8 !== 0)', function () {
			var buffer = new Buffer('ED743E17', 'hex');
			expect(bitwise.readBuffer(buffer, 12).join()).to.be(bin('0100 0011 1110 0001 0111').join());
		});
		it('with offset and length', function () {
			var buffer = new Buffer('950225B12B44E2B4C4A6', 'hex');
			expect(bitwise.readBuffer(buffer, 32, 24).join()).to.be(bin('0010 1011 0100 0100 1110 0010').join());
		});
		it('with offset and length (length % 8 !== 0)', function () {
			var buffer = new Buffer('950225B12B44E2B4C4A6', 'hex');
			expect(bitwise.readBuffer(buffer, 32, 30).join()).to.be(bin('0010 1011 0100 0100 1110 0010 1011 01').join());
		});
		it('with offset and length (offset % 8 !== 0; length % 8 !== 0)', function () {
			var buffer = new Buffer('950225B12B44E2B4C4A6', 'hex');
			expect(bitwise.readBuffer(buffer, 34, 28).join()).to.be(bin('1010 1101 0001 0011 1000 1010 1101').join());
		});
	});

	describe('modify buffers', function () {
		it('with one bit of data', function () {
			var buffer = new Buffer(1);
			buffer.fill(0x00);

			bitwise.modifyBuffer(buffer, bin('1'));

			expect(bitwise.readBuffer(buffer).join()).to.be(bin('1000 0000').join());
		});
		it('without offset', function () {
			var buffer = new Buffer('FBA8', 'hex');

			bitwise.modifyBuffer(buffer, bin('01010'));

			expect(bitwise.readBuffer(buffer).join()).to.be(bin('0101 0011 1010 1000').join());
		});
		it('with offset', function () {
			var buffer = new Buffer('A43A', 'hex');

			bitwise.modifyBuffer(buffer, bin('01001001'), 3);
			
			expect(bitwise.readBuffer(buffer).join()).to.be(bin('1010 1001 0011 1010').join());
		});
		it('with one byte offset', function () {
			var buffer = new Buffer('AC14E974', 'hex');

			bitwise.modifyBuffer(buffer, bin('01001001'), 8);
			
			expect(bitwise.readBuffer(buffer).join()).to.be(bin('1010 1100 0100 1001 1110 1001 0111 0100').join());
		});
	});

	describe('create buffers', function () {
		it('with less than one byte', function () {
			var buffer = bitwise.createBuffer(bin('10011'));
			expect(bitwise.readBuffer(buffer).join()).to.be(bin('1001 1000').join());
		});
		it('with one byte', function () {
			var buffer = bitwise.createBuffer(bin('0111 1100'));
			expect(bitwise.readBuffer(buffer).join()).to.be(bin('0111 1100').join());
		});
		it('with more than one byte', function () {
			var buffer = bitwise.createBuffer(bin('1111 0001 1010'));
			expect(bitwise.readBuffer(buffer).join()).to.be(bin('1111 0001 1010 0000').join());
		});
		it('with multiple bytes', function () {
			var buffer = bitwise.createBuffer(bin('10101101 11100101 01100011'));
			expect(bitwise.readBuffer(buffer).join()).to.be(bin('10101101 11100101 01100011').join());
		});
	});
});
