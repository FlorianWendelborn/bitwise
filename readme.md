<h1 align="center">bitwise</h1>

<p align="center">
	JavaScript/TypeScript library to manipulate bits, nibbles, bytes, and buffers.
</p>

<p align="center">
	<a href="https://github.com/FlorianWendelborn/bitwise/actions/"><img src="https://img.shields.io/github/actions/workflow/status/FlorianWendelborn/bitwise/pipeline.yml?branch=main&label=actions&logo=github"/></a>
	<a href="https://codecov.io/gh/FlorianWendelborn/bitwise"><img src="https://img.shields.io/codecov/c/github/FlorianWendelborn/bitwise/master.svg"/></a>
	<a href="https://npmjs.com/package/bitwise"><img src="https://img.shields.io/npm/dm/bitwise.svg"/></a>
	<a href="https://npmjs.com/package/bitwise"><img src="https://img.shields.io/npm/dt/bitwise.svg"/></a>
	<a href="https://bundlephobia.com/result?p=bitwise"><img src="https://img.shields.io/bundlephobia/minzip/bitwise.svg"/></a>
</p>

<p align="center">
	<a href="https://npmjs.com/package/bitwise"><img src="https://img.shields.io/badge/dependencies-none-success.svg"/></a>
	<a href="https://bundlephobia.com/result?p=bitwise"><img src="https://img.shields.io/badge/tree--shaking-ready-success.svg"/></a>
	<a href="https://bundlephobia.com/result?p=bitwise"><img src="https://img.shields.io/badge/side--effects-none-success.svg"/></a>
	<a href="https://openbase.com/js/bitwise?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge"><img src="https://badges.openbase.com/js/rating/bitwise.svg"/></a>
	<a href="https://kandi.openweaver.com/typescript/FlorianWendelborn/bitwise"><img src="https://kandi.openweaver.com/badges/xray.svg"/></a>
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

bitwise.bits.and([0, 0, 1, 1], [0, 1, 0, 1])
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
<a href="https://bun.sh">bun</a> add bitwise
</pre>

or

<pre>
<a href="https://yarnpkg.com">yarn</a> add bitwise
</pre>

or

<pre>
<a href="https://npmjs.com">npm</a> install --save bitwise
</pre>

## Table of Contents

- [bits](#bits)
  - operations ([and](#bitsand), [circularShiftLeft](#bitscircularshiftleft), [circularShiftRight](#bitscircularshiftright), [nand](#bitsnand), [nor](#bitsnor), [not](#bitsnot), [or](#bitsor), [xnor](#bitsxnor), [xor](#bitsxor))
  - reduce operations ([reduceAnd](#bitsreduceand), [reduceNand](#bitsreducenand), [reduceNor](#bitsreducenor), [reduceOr](#bitsreduceor), [reduceXnor](#bitsreducexnor), [reduceXor](#bitsreducexor))
  - [toString](#bitstostring)
- [buffer](#buffer)
  - [create](#buffercreate)
  - [modify](#buffermodify)
  - operations ([and](#bufferand), [nand](#buffernand), [nor](#buffernor), [not](#buffernot), [or](#bufferor), [xnor](#bufferxnor), [xor](#bufferxor))
  - [read](#bufferread)
  - [readInt](#bufferreadint)
  - [readUInt](#bufferreaduint)
- [byte](#byte)
  - [read](#byteread)
  - [write](#bytewrite)
- [integer](#integer)
  - [getBit](#integergetbit)
  - [setBit](#integersetbit)
  - [toggleBit](#integertogglebit)
- [nibble](#nibble)
  - [read](#nibbleread)
  - [write](#nibblewrite)
- [string](#string)
  - [toBits](#stringtobits)

## bits

```js
// cherry-pick
import and from 'bitwise/bits/and'
import bits from 'bitwise/bits'
import toString from 'bitwise/bits/to-string'
```

### bits.and

```ts
(bits1: Array<0|1>, bits2: Array<0|1>): Array<0|1>
```

Applies the bitwise `AND` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.and([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [0, 0, 0, 0, 0, 1, 0, 0]
```

### bits.circularShiftLeft

```ts
(bits: Array<0|1>, amount: number): Array<0|1>
```

Applies the bitwise `ROL` operation, expects two arrays of the same size and a shift amount and returns a new one.

```js
bitwise.bits.circularShiftLeft([0, 0, 0, 1, 1, 1, 1, 1], 1)
// [0, 0, 1, 1, 1, 1, 1, 0]
```

### bits.circularShiftRight

```ts
(bits: Array<0|1>, amount: number): Array<0|1>
```

Applies the bitwise `ROR` operation, expects two arrays of the same size and a shift amount and returns a new one.

```js
bitwise.bits.circularShiftRight([0, 0, 0, 1, 1, 1, 1, 1], 1)
// [1, 0, 0, 0, 1, 1, 1, 1]
```

### bits.nand

```ts
(bits1: Array<0|1>, bits2: Array<0|1>): Array<0|1>
```

Applies the bitwise `NAND` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.nand([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 0, 0, 1]
```

### bits.nor

```ts
(bits1: Array<0|1>, bits2: Array<0|1>): Array<0|1>
```

Applies the bitwise `NOR` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.nor([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 0, 0, 1]
```

### bits.not

```ts
(bits: Array<0|1>): Array<0|1>
```

Flips all given bits and returns the flipped bits.

```js
bitwise.bits.not([1, 0, 1, 1, 0, 1])
// [0, 1, 0, 0, 1, 0]
```

### bits.or

```ts
(bits1: Array<0|1>, bits2: Array<0|1>): Array<0|1>
```

Applies the bitwise `OR` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.or([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 1, 0, 1]
```

### bits.xnor

```ts
(bits1: Array<0|1>, bits2: Array<0|1>): Array<0|1>
```

Applies the bitwise exclusive `NOR` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.xnor([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 0, 0, 1]
```

### bits.xor

```ts
(bits1: Array<0|1>, bits2: Array<0|1>): Array<0|1>
```

Applies the bitwise exclusive `OR` operation, expects two arrays of the same size and returns a new one.

```js
bitwise.bits.xor([1, 0, 0, 0, 1, 1, 0, 1], [0, 1, 1, 0, 0, 1, 0, 0])
// [1, 1, 1, 0, 1, 0, 0, 1]
```

### bits.reduceAnd

```ts
(bits: Array<0|1>): 0|1
```

Applies the bitwise `AND` operation on the given bits. Returns one bit. Throws if less than 2 bits are given.

```js
bitwise.bits.reduceAnd([1, 0, 0, 0, 1, 1, 0, 1])
// 0
```

### bits.reduceNand

```ts
(bits: Array<0|1>): 0|1
```

Applies the `NAND` operation on the given bits. Returns one bit. Throws if less than 2 bits are given.

```js
bitwise.bits.reduceNand([1, 0, 0, 0, 1, 1, 0, 1])
// 0
```

### bits.reduceNor

```ts
(bits: Array<0|1>): 0|1
```

Applies the `NOR` operation on the given bits. Returns one bit. Throws if less than 2 bits are given.

```js
bitwise.bits.reduceNor([1, 0, 0, 0, 1, 1, 0, 1])
// 0
```

### bits.reduceOr

```ts
(bits: Array<0|1>): 0|1
```

Applies the `OR` operation on the given bits. Returns one bit.
Throws if less than 2 bits are given.

```js
bitwise.bits.reduceOr([1, 0, 0, 0, 1, 1, 0, 1])
// 1
```

### bits.reduceXnor

```ts
(bits: Array<0|1>): 0|1
```

Applies the `XNOR` operation on the given bits. Returns one bit. Throws if less than 2 bits are given.

```js
bitwise.bits.reduceXnor([1, 0, 0, 0, 1, 1, 0, 1])
// 1
```

### bits.reduceXor

```ts
(bits: Array<0|1>): 0|1
```

Applies the `XOR` operation on the given bits. Returns one bit.
Throws if less than 2 bits are given.

```js
bitwise.bits.reduceXor([1, 0, 0, 0, 1, 1, 0, 1])
// 0
```

### bits.toBoolean

```ts
(bits: Array<0|1>): Array<boolean>
```

Converts a bit array to a boolean array.

```js
bitwise.bits.toBoolean([0, 1])
// [false, true]
```

### bits.toString

```ts
(bits: Array<0|1>, spacing: number = 0, spacer: string = ' '): string
```

Converts a bit `Array` to a `String`. If defined, inserts `spacer` every `spacing` characters, but never inserts it as the last substring.

```js
bitwise.bits.toString([1, 0, 1, 0, 1, 0], 2, '_')
// '10_10_10'
```

## buffer

```js
// cherry-pick
import and from 'bitwise/buffer/and'
import buffer from 'bitwise/buffer'
import create from 'bitwise/buffer/create'
```

### buffer.create

```ts
(bits: Array<0|1>): Buffer
```

Creates a new buffer and writes the given bits.

```js
const buffer = bitwise.buffer.create([1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0])
// Buffer(1111 0001 1010 0000)
```

### buffer.modify

```ts
(buffer: Buffer, newBits: Array<0|1>, bitOffset: number = 0): void
```

Modifies the buffer's bits to equal `newBits` starting at `bitOffset`.

```js
const buffer = Buffer.from('A43A', 'hex')
bitwise.buffer.modify(buffer, [0, 0, 0, 1, 0, 0, 1], 3)
// Buffer(1010 1001 0011 1010)
```

### buffer.and

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false): Buffer
```

Applies a bitwise `AND` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.and(buffer1, buffer2, false)
// Buffer(buffer1 AND buffer2)
```

### buffer.nand

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false): Buffer
```

Applies a bitwise `NAND` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.nand(buffer1, buffer2, false)
// Buffer(buffer1 NAND buffer2)
```

### buffer.nor

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false): Buffer
```

Applies a bitwise `NOR` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.nor(buffer1, buffer2, false)
// Buffer(buffer1 NOR buffer2)
```

### buffer.not

```ts
(buffer: Buffer): Buffer
```

Flips all bits in the given buffer.

```js
bitwise.buffer.not(buffer, false)
// Buffer(NOT buffer)
```

### buffer.or

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false): Buffer
```

Applies a bitwise `OR` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.or(buffer1, buffer2, false)
// Buffer(buffer1 OR buffer2)
```

### buffer.xnor

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false): Buffer
```

Applies a bitwise `XNOR` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.xnor(buffer1, buffer2, false)
// Buffer(buffer1 XNOR buffer2)
```

### buffer.xor

```ts
(buffer1: Buffer, buffer2: Buffer, isLooping = false): Buffer
```

Applies a bitwise `XOR` with `buffer2` to every value in `buffer1`. Returns a new buffer. If `isLooping` is set, `buffer1` may be read multiple times in case it's shorter than `buffer2`.

```js
bitwise.buffer.xor(buffer1, buffer2, false)
// Buffer(buffer1 XOR buffer2)
```

### buffer.read

```ts
(buffer: Buffer, bitOffset: number = 0, bitLength?: number): Array<0|1>
```

Returns an Array containing `bitLength` bits starting at `bitOffset`. If no `bitLength` is given, it's assumed to be the rest of the buffer.

```js
const buffer = Buffer.from('ED743E17', 'hex')
bitwise.buffer.read(buffer, 12)
// [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1]
```

### buffer.readInt

```ts
(buffer: Buffer, bitOffset: number = 0, bitLength: number = 8): number
```

Converts a section of a buffer to a signed integer.

```js
// buffer 11110110
bitwise.buffer.readInt(buffer, 3, 5)
// -10
```

### buffer.readUInt

```ts
(buffer: Buffer, bitOffset: number = 0, bitLength: number = 8): number
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
(byte: UInt8): Array<0|1>
```

Returns an Array of length 8 containing the read bits.

```js
bitwise.byte.read(42)
// [0, 0, 1, 0, 1, 0, 1, 0]
bitwise.byte.read(256)
// RangeError('invalid size')
```

### byte.write

```ts
(bits: Array<0|1>): UInt8
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
(number: number, position: number): 0|1
```

Gets the value of a specific bit.

```js
bitwise.integer.getBit(128, 7)
// 1
```

### integer.setBit

```ts
(number: number, position: number, value: 0|1): Array<0|1>
```

Sets the value of a specific bit.

```js
bitwise.integer.setBit(128, 7, 0)
// 0
```

### integer.toggleBit

```ts
(number: number, position: number): Array<0|1>
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
(nibble: UInt4): Array<0|1>
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
(nibble: [<0|1>, <0|1>, <0|1>, <0|1>]): UInt4
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
(string: string): Array<0|1>
```

Converts a string into an array of bits. Ignores all characters except `1` and `0`.

```js
bitwise.string.toBits('10 10 12$%_.0')
// [1, 0, 1, 0, 1, 0]
```

### Development

`bitwise` uses [`bun`](https://bun.sh) instead of `node`

```sh
# install dependencies
bun install

# run tests
bun test

# build
bun run build
```

## History

### 2.2.1

- remove `typescript` from `dependencies` in favor of `devDependencies`
- (internal) update and apply prettier

### 2.2.0

- add npm provenance support to package
- (internal) add auto-publish from pipelines
- (internal) Switch to `bun`

### 2.1.0

- Add `bits.circularShiftLeft` (#44 / #49) via @0xflotus
- Add `bits.circularShiftRight` (#44 / #49) via @0xflotus

### 2.0.2–2.0.3

- Add Support for Tree Shaking

### 2.0.1

- Readme/package.json updates

### 2.0.0

- refactor to typescript
- remove `bitwise.buffer.readCInt()`

### 1.4.0

- improve `require()` support

### 1.3.0

- add `bits.toBoolean`

### 1.2.0

- add `bits.reduceAnd`
- add `bits.reduceNand`
- add `bits.reduceNor`
- add `bits.reduceOr`
- add `bits.reduceXnor`
- add `bits.reduceXor`

### 1.1.2

- split up `buffer.operations`

### 1.1.1

- split up `bits.operations`

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
