'use strict';

// require
var operator = require('./lib/operator');
var bufferOperator = require('./lib/buffer-operator');
var integer = require('./lib/integer');
var byte = require('./lib/byte');
var buffer = require('./lib/buffer');
var conversion = require('./lib/conversion');

module.exports = {
	// bytes
	readByte: byte.read,
	writeByte: byte.write,
	byte: byte,

	// buffers
	readBuffer: buffer.read,
	modifyBuffer: buffer.modify,
	createBuffer: buffer.create,

	// convert
	toBits: conversion.toBits,
	toString: conversion.toString,
	conversion: conversion,

	// types
	readUInt: integer.unsigned,
	readInt: integer.signed,
	readCInt: integer.complementary,
	integer: integer,

	// operators
	not: operator.not,
	or: operator.or,
	nor: operator.nor,
	xor: operator.xor,
	xnor: operator.xnor,
	and: operator.and,
	nand: operator.nand,
	operator: operator,

	// buffer operators
	buffer: bufferOperator
};
