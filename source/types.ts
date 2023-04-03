type UnionRange<
	N extends number,
	Result extends Array<number> = [],
> =
(Result['length'] extends N
	? Result[number]
	: UnionRange<N, [...Result, Result['length']]>
)

export type Bit = 0 | 1
export type Bits = Array<Bit>
export type BooleanBits = Array<boolean>
export type Byte = [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
export type Nibble = [Bit, Bit, Bit, Bit]

export type UInt4 = UnionRange<16>
export type UInt8 = UnionRange<256>
