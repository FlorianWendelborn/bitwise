import { Bit, Bits } from '../types'

/**
 * Arithmetic Shift Right
 *
 * @example
 * arithmeticShiftRight([1,0,1,1,0,1]) => [1,1,0,1,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [ASHIFTR bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    result[0] = bits[0]
    for (let i: number = 0; i < bits.length - 1; i++) result[i + 1] = bits[i]

    return result
}