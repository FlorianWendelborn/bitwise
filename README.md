# bitwise

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://api.travis-ci.org/dodekeract/bitwise.svg)](https://travis-ci.org/dodekeract/bitwise/)
[![Code Climate](https://codeclimate.com/github/dodekeract/bitwise/badges/gpa.svg)](https://codeclimate.com/github/dodekeract/bitwise)
[![NPM Downloads](https://img.shields.io/npm/dm/bitwise.svg)](https://npmjs.com/package/bitwise)
[![NPM Dependencies](https://david-dm.org/dodekeract/bitwise.png)](https://npmjs.com/package/bitwise)
[![Code Documentation](https://inch-ci.org/github/dodekeract/bitwise.svg)](https://inch-ci.org/github/dodekeract/bitwise)

Node.js library to manipulate bits.

## Installation
**Basic**: ````npm install bitwise````

**As Dependency**: ````npm install bitwise --save````

**Require in Node**: ````var bitwise = require('bitwise');````

## Methods
### readByte (Int byte)
Returns an Array of length 8 containing the read bits.

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

### toBits (String string)
Converts a string into an array of bits. Ignores all characters except 1 and 0.

Example: ````'10 10 12$%_.0' → [1,0,1,0,1,0]````

### toString (Array bits, [Int spacing], [String spacer])
Converts a bit array to a string. If defined, inserts ````spacer```` every ````spacing```` characters, but never inserts it as the last substring.

Example: ````bitwise.toString([1,0,1,0,1,0], 2, '_') → '10_10_10'````

### readUInt (Buffer buffer, Int bitLength = 8, Int bitOffset = 0)

Converts a section of a buffer to an unsigned integer.

Example:
````
// buffer 11110110
bitwise.readUInt(buffer, 5, 3) → 22
````

### readInt (Buffer buffer, Int bitLength = 8, Int bitOffset = 0)

Converts a section of a buffer to a signed integer.

Example:
````
// buffer 11110110
bitwise.readUInt(buffer, 5, 3) → -10
````

### readCInt (Buffer buffer, Int bitLength = 8, Int bitOffset = 0)

Converts a section of a buffer to a complementary integer.
A complementary integer is like an unsigned integer, but always represents negative numbers.

Example:
````
// buffer 11110110
bitwise.readUInt(buffer, 5, 3) → -22
````

### flipBits (Array bits)

Flips all given bits and returns the flipped bits.

Example:
````
bitwise.flipBits([1,0,1,1,0,1]) → [0,1,0,0,1,0]
````

## Contributors
- [Hubertus Weber](https://github.com/HubertusWeber) ([hw.gg](https://hw.gg))
