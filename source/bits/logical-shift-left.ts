import { Bit, Bits } from '../types'

/**
 * Logical Shift Left
 * 
 * Shifts all given bits to left and returns the resulting bits
 *
 * @example
 * logicalShiftLeft([1,0,1,1,0,1]) => [0,1,1,0,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [LSHIFTL bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    for (let i: number = 0; i < bits.length - 1; i++) result[i] = bits[i + 1]
    result[bits.length - 1] = (0 as Bit)

    return result
}
