import { Bit, Bits } from '../types'

/**
 * Logical Shift Right
 * 
 * Shifts all given bits to right and returns the resulting bits
 *
 * @example
 * logicalShiftRight([1,0,1,1,0,1]) => [0,1,0,1,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [LSHIFTR bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    result[0] = (0 as Bit)
    for (let i: number = 0; i < bits.length - 1; i++) result[i + 1] = bits[i]

    return result
}
