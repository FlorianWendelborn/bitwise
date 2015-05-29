# bitwise

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://api.travis-ci.org/dodekeract/bitwise.svg)](https://travis-ci.org/dodekeract/bitwise/)
[![Code Climate](https://codeclimate.com/github/dodekeract/bitwise/badges/gpa.svg)](https://codeclimate.com/github/dodekeract/bitwise)
[![NPM Downloads](https://img.shields.io/npm/dm/bitwise.svg)](https://www.npmjs.com/package/bitwise)
![NPM Dependencies](https://david-dm.org/dodekeract/bitwise.png)

Node.js library to manipulate bits.

## installation
Just type ````npm install bitwise````.
If you want to save it as a dependency in ````package.json```` you should use ````npm install bitwise --save````.

## methods
### readByte (Int byte)
Returns an Array of length 8 with the read bytes.

Example: ````42 → [0,0,1,0,1,0,1,0]````.

### writeByte (Array bits)
Returns a Byte (0-255) which equals the given bits.

Example: ````[0,0,1,0,1,0,1,0] → 42````

### readBuffer (Buffer buffer, [Int bitOffset], [Int bitLength])
Returns an Array containing bitLength bits starting at bitOffset.

Example:
````javascript
var buffer = new Buffer('ED743E17', 'hex');
bitwise.readBuffer(buffer, 12);
// 0100 0011 1110 0001 0111
````

### modifyBuffer (Buffer buffer, Array newBits, [Int bitOffset])
Modifies the buffer's bits to equal newBits starting at bitOffset.

Example:
````javascript
var buffer = new Buffer('A43A', 'hex');
bitwise.modifyBuffer(buffer, [0,0,0,1, 0,0,1], 3);
// 1010 1001 0011 1010
````

### createBuffer (Array bits)
Creates a new buffer and writes the given bits.

Example:
````javascript
var buffer = bitwise.createBuffer([1,1,1,1, 0,0,0,1, 1,0,1,0]);
bitwise.readBuffer(buffer);
// 1111 0001 1010 0000
````

## contributors
- [Hubertus Weber](https://github.com/HubertusWeber)
