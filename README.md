# bitwise

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://api.travis-ci.org/dodekeract/bitwise.svg)](https://travis-ci.org/dodekeract/bitwise/)
[![Code Climate](https://codeclimate.com/github/dodekeract/bitwise/badges/gpa.svg)](https://codeclimate.com/github/dodekeract/bitwise)
[![Coverage Status](https://coveralls.io/repos/dodekeract/bitwise/badge.svg?branch=master&service=github)](https://coveralls.io/github/dodekeract/bitwise?branch=master)
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

### readUInt (Buffer buffer, Int bitOffset = 0, Int bitLength = 8)

Converts a section of a buffer to an unsigned integer.

Example:
````
// buffer 11110110
bitwise.readUInt(buffer, 3, 5) → 22
````

### readInt (Buffer buffer, Int bitOffset = 0, Int bitLength = 8)

Converts a section of a buffer to a signed integer.

Example:
````
// buffer 11110110
bitwise.readUInt(buffer, 3, 5) → -10
````

### readCInt (Buffer buffer, Int bitOffset = 0, Int bitLength = 8)

Converts a section of a buffer to a complementary integer.
A complementary integer is like an unsigned integer, but always represents negative numbers.

Example:
````
// buffer 11110110
bitwise.readUInt(buffer, 3, 5) → -22
````

### not (Array bits)

Flips all given bits and returns the flipped bits.

Example:
````
bitwise.not([1,0,1,1,0,1]) → [0,1,0,0,1,0]
````

### and (Array bits1, Array bits2)

Applies the AND operation, expects two arrays of the same size and returns a new one.

Example:
````
bitwise.and([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) → [0,0,0,0,0,1,0,0]
````

### or (Array bits1, Array bits2)

Applies the OR operation, expects two arrays of the same size and returns a new one.

Example:
````
bitwise.or([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) → [1,1,1,0,1,1,0,1]
````

### xor (Array bits1, Array bits2)

Applies the exclusive or operation, expects two arrays of the same size and returns a new one.

Example:
````
bitwise.xor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) → [1,1,1,0,1,0,0,1]
````

### nor (Array bits1, Array bits2)

Applies the NOR operation, expects two arrays of the same size and returns a new one.

Example:
````
bitwise.nor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) → [1,1,1,0,1,0,0,1]
````

### xnor (Array bits1, Array bits2)

Applies the exclusive NOR operation, expects two arrays of the same size and returns a new one.

Example:
````
bitwise.xnor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) → [1,1,1,0,1,0,0,1]
````

### nand (Array bits1, Array bits2)

Applies the NAND operation, expects two arrays of the same size and returns a new one.

Example:
````
bitwise.nand([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) → [1,1,1,0,1,0,0,1]
````

## Buffer Operations

NOT, OR, NOR, XOR, XNOR, AND, NAND

Proper documentation will (proably) follow later, if you need to know more now, just look into the [unit test files](https://github.com/dodekeract/bitwise/blob/master/test/index-test.js).

Example:
````
var isLooping = true; // -> if first buffer is "empty", it will be read again from its start
var resultBuffer = bitwise.buffer.xor(bufferA, bufferB, isLooping);
````

## History
### 0.2.0
- Added buffer bitwise operations

### 0.1.2
- Added nor, xnor, nand
- Fixed bitwise operations modifying original array

### 0.1.0
- **Re-ordered the arguments** in readInt, readCInt, readUInt
- Added not, and, or, xor
- Renamed flipBits to not

## Contributors
- [Hubertus Weber](https://github.com/HubertusWeber) ([hw.gg](https://hw.gg))
