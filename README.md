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
Returns an Array of length 8 with the read bytes. Example: 42 -> [0,0,1,0,1,0,1,0].

### writeByte (Array bits)
Returns a Byte (0-255) which equals the given bits. Example [0,0,1,0,1,0,1,0] -> 42
