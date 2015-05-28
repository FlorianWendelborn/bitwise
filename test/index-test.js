var expect = require('expect.js');
var bitwise = require('../');

console.log('\033c');

describe('byte manipulation', function () {
	it('read data correctly', function () {
		expect(bitwise.readByte(0xE1)).to.eql([1,1,1,0,0,0,0,1]);
		expect(bitwise.readByte(0x2A)).to.eql([0,0,1,0,1,0,1,0]);
		expect(bitwise.readByte(0xFF)).to.eql([1,1,1,1,1,1,1,1]);
		expect(bitwise.readByte(0x00)).to.eql([0,0,0,0,0,0,0,0]);
	});
	it('write data correctly', function () {
		expect(bitwise.writeByte([1,1,1,0,0,0,0,1])).to.be(0xE1);
		expect(bitwise.writeByte([0,0,1,0,1,0,1,0])).to.be(0x2A);
		expect(bitwise.writeByte([1,1,1,1,1,1,1,1])).to.be(0xFF);
		expect(bitwise.writeByte([0,0,0,0,0,0,0,0])).to.be(0x00);
	});
});
