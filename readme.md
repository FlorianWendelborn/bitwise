<h1 align="center">bitwise</h2>

<p align="center">
	JavaScript library to manipulate bits, nibbles, bytes, and buffers.
</p>

<p align="center">
	<a href="https://travis-ci.org/dodekeract/bitwise/"><img src="https://travis-ci.org/dodekeract/bitwise.svg?branch=master"/></a>
	<a href="https://codecov.io/gh/dodekeract/bitwise"><img src="https://img.shields.io/codecov/c/github/dodekeract/bitwise/master.svg"/></a>
	<a href="https://inch-ci.org/github/dodekeract/bitwise"><img src="https://inch-ci.org/github/dodekeract/bitwise.svg"/></a>
	<a href="https://codeclimate.com/github/dodekeract/bitwise/maintainability"><img src="https://api.codeclimate.com/v1/badges/5828648788cdc3b806ac/maintainability"/></a>
</p>

<p align="center">
	<a href="https://slack.dodekeract.com"><img src="https://slack.dodekeract.com/badge.svg"/></a>
	<a href="https://npmjs.com/package/bitwise"><img src="https://img.shields.io/npm/dm/bitwise.svg"/></a>
	<a href="https://npmjs.com/package/bitwise"><img src="https://david-dm.org/dodekeract/bitwise.svg"/></a>
</p>

## Example

```js
import bitwise from 'bitwise'

const bits = bitwise.byte.read(42)
// [0, 0, 1, 0, 1, 0, 1, 0]

bitwise.bits.toString(bits, 4)
// '0010 1010'

bitwise.byte.write(bits)
// 42

bitwise.bits.xor([0, 0, 1, 1], [0, 1, 0, 1])
// [0, 0, 0, 1]

bitwise.bits.xor([0, 0, 1, 1], [0, 1, 0, 1])
// [0, 1, 1, 0]

// cherry-pick parts of bitwise
import byte from 'bitwise/byte'
byte.read(42)
// [0, 0, 1, 0, 1, 0, 1, 0]
```

## Installation

<pre>
<a href="https://yarnpkg.com">yarn</a> add <a href="https://yarnpkg.com/en/package/bitwise">bitwise</a>
</pre>
or
<pre>
<a href="https://npmjs.com">npm</a> i <a href="https://npmjs.com/package/bitwise">bitwise</a>
</pre>

## Table of Contents

* [bits](#bits)
	* operations ([and](#bitsand), [nand](#bitsnand), [nor](#bitsnor), [not](#bitsnot), [or](#bitsor), [xnor](#bitsxnor), [xor](#bitsxor))
	* [toString](#bitstostring)
* [buffer](#buffer)
	* [create](#buffercreate)
	* [modify](#buffermodify)
	* operations ([and](#bufferand), [nand](#buffernand), [nor](#buffernor), [not](#buffernot), [or](#bufferor), [xnor](#bufferxnor), [xor](#bufferxor))
	* [read](#bufferread)
	* [readCInt](#bufferreadcint)
	* [readInt](#bufferreadint)
	* [readUInt](#bufferreaduint)
* [byte](#byte)
	* [read](#byteread)
	* [write](#bytewrite)
* [integer](#integer)
	* [getBit](#integergetbit)
	* [setBit](#integersetbit)
	* [toggleBit](#integertogglebit)
* [nibble](#nibble)
	* [read](#nibbleread)
	* [write](#nibblewrite)
* [string](#string)
	* [toBits](#stringtobits)

## bits

```js
// cherry-pick
import and from 'bitwise/bits/and'
import bits from 'bitwise/bits'
import toString from 'bitwise/bits/to-string'
```

### bits.and

```ts
(bits1: Array, bits2: Array)
```

Applies the `AND` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.and([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [0, 0, 0, 0, 0, 1, 0, 0]
```

### bits.nand

```ts
(bits1: Array, bits2: Array)
```

Applies the `NAND` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.nand([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 0, 0, 1]
```

### bits.nor

```ts
(bits1: Array, bits2: Array)
```

Applies the `NOR` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.nor([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 0, 0, 1]
```

### bits.not

```ts
(bits: Array)
```

Flips all given bits and returns the flipped bits.

```js
bitwise.bits.not([1, 0, 1, 1, 0, 1])
// [0, 1, 0, 0, 1, 0]
```

### bits.or

```ts
(bits1: Array, bits2: Array)
```

Applies the `OR` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.or([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 1, 0, 1]
```

### bits.xnor

```ts
(bits1: Array, bits2: Array)
```

Applies the exclusive `NOR` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.xnor([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 0, 0, 1]
```

### bits.xor

```ts
(bits1: Array, bits2: Array)
```

Applies the exclusive `OR` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.xor([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 0, 0, 1]
```

### bits.toString

```ts
(bits: Array, spacing = 0, spacer = ' ')
```

Converts a bit `Array` to a `String`. If defined, inserts `spacer` every `spacing` characters, but never inserts it as the last substring.

```js
bitwise.bits.toString([1, 0, 1, 0, 1, 0], 2, '_')
// '10_10_10'
```

## buffer

```js
// cherry-pick
import buffer from 'bitwise/buffer'
import create from 'bitwise/buffer/create'
import { and } from 'bitwise/buffer/operations'
```

### buffer.create

```ts
(bits: Array)
```

Creates a new buffer and writes the given bits.

```js
const buffer = bitwise.buffer.create([1,1,1,1, 0,0,0,1, 1,0,1,0]);
// Buffer(1111 0001 1010 0000)
```

### buffer.modify

```ts
(buffer: Buffer, newBits: Array, bitOffset = 0)
```

Modifies the buffer's bits to equal `newBits` starting at `bitOffset`.

```js
const buffer = new Buffer('A43A', 'hex');
bitwise.buffer.modify(buffer, [0, 0, 0, 1, 0, 0, 1], 3);
// Buffer(1010 1001 0011 1010)
```

### buffer.and

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false)
```

Applies a bitwise `AND` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.and(buffer1, buffer2, false)
// Buffer(buffer1 AND buffer2)
```

### buffer.nand

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false)
```

Applies a bitwise `NAND` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.nand(buffer1, buffer2, false)
// Buffer(buffer1 NAND buffer2)
```

### buffer.nor

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false)
```

Applies a bitwise `NOR` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.nor(buffer1, buffer2, false)
// Buffer(buffer1 NOR buffer2)
```

### buffer.not

```ts
(buffer: Buffer)
```

Flips all bits in the given buffer.

```js
bitwise.buffer.not(buffer, false)
// Buffer(NOT buffer)
```

### buffer.or

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false)
```

Applies a bitwise `OR` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.or(buffer1, buffer2, false)
// Buffer(buffer1 OR buffer2)
```

### buffer.xnor

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false)
```

Applies a bitwise `XNOR` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.xnor(buffer1, buffer2, false)
// Buffer(buffer1 XNOR buffer2)
```

### buffer.xor

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false)
```

Applies a bitwise `XOR` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.xor(buffer1, buffer2, false)
// Buffer(buffer1 XOR buffer2)
```

### buffer.read

```ts
(buffer: Buffer, bitOffset = 0, bitLength = 8)
```

Returns an Array containing `bitLength` bits starting at `bitOffset`.

```js
const buffer = new Buffer('ED743E17', 'hex')
bitwise.buffer.read(buffer, 12)
// [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1]
```

### buffer.readCInt

```ts
(buffer: Buffer, bitOffset = 0, bitLength = 8)
```

Converts a section of a buffer to a complementary integer.
A complementary integer is like an unsigned integer, but always represents negative numbers.

```js
// buffer 11110110
bitwise.buffer.readCInt(buffer, 3, 5)
// -22
```

### buffer.readInt

```ts
(buffer: Buffer, bitOffset = 0, bitLength = 8)
```

Converts a section of a buffer to a signed integer.

```js
// buffer 11110110
bitwise.buffer.readInt(buffer, 3, 5)
// -10
```

### buffer.readUInt

```ts
(buffer: Buffer, bitOffset = 0, bitLength = 8)
```

Converts a section of a buffer to an unsigned integer.

```js
// buffer 11110110
bitwise.buffer.readUInt(buffer, 3, 5)
// 22
```

## byte

```js
// cherry-pick
import byte from 'bitwise/byte'
import read from 'bitwise/byte/read'
```

### byte.read

```ts
(byte: Integer)
```

Returns an Array of length 8 containing the read bits.

```js
bitwise.byte.read(42)
// [0,0,1,0,1,0,1,0]
bitwise.byte.read(256)
// RangeError('invalid size')
```

### byte.write

```ts
(bits: Array)
```

Returns a Byte (0-255) which represents the given bits.

```js
bitwise.byte.write([0, 0, 1, 0, 1, 0, 1, 0])
// 42
bitwise.byte.write([0, 0, 1, 0, 1, 0, 1, 0, 0])
// RangeError('invalid array length')
```

## integer

```js
// cherry-pick
import integer from 'bitwise/integer'
```

### integer.getBit

```ts
(number: Integer, position: Integer)
```

Gets the value of a specific bit.

```js
bitwise.integer.getBit(128, 7)
// 1
```

### integer.setBit

```ts
(number: Integer, position: Integer, value: Integer)
```

Sets the value of a specific bit.

```js
bitwise.integer.setBit(128, 7, 0)
// 0
```

### integer.toggleBit

```ts
(number: Integer, position: Integer)
```

Toggles the value of a specific bit.

```js
bitwise.integer.toggleBit(128, 7)
// 0
```

## nibble

```js
// cherry-pick
import nibble from 'bitwise/nibble'
import read from 'bitwise/nibble/read'
```

### nibble.read

```ts
(nibble: Integer)
```

Returns an Array of length 4 containing the read bits.

```js
bitwise.nibble.read(15)
// [1, 1, 1, 1]
bitwise.nibble.read(42)
// RangeError('invalid size')
```

### nibble.write

```ts
(nibble: Array)
```

Returns a Nibble (`0-15`) which represents the given bits.

```js
bitwise.nibble.write([0, 0, 1, 0])
// 2
bitwise.nibble.write([0, 0, 1, 0, 1])
// RangeError('invalid array length')
```

## string

```js
// cherry-pick
import string from 'bitwise/string'
import toBits from 'bitwise/string/to-bits'
```

### string.toBits

```ts
(string: String)
```

Converts a string into an array of bits. Ignores all characters except `1` and `0`.

```js
bitwise.string.toBits('10 10 12$%_.0')
// [1, 0, 1, 0, 1, 0]
```

## History

### 1.1.0
- add `integer.getBit`
- add `integer.setBit`
- add `integer.toggleBit`

### 1.0.0
- rewrite in ES6
- improve utilization of bitwise operators
- improve API (**breaking change**)

### 0.2.0
- Added buffer bitwise operations

### 0.1.2
- Added nor, xnor, nand
- Fixed bitwise operations modifying original array

### 0.1.0
- **Re-ordered the arguments** in readInt, readCInt, readUInt
- Added not, and, or, xor
- Renamed flipBits to not
