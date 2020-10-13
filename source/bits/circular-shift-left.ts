import { Bits } from '../types'

/**
 * Circular Shift Left
 *
 * @example
 * circularShiftLeft([1,0,1,1,0,1]) => [0,1,1,0,1,1]
 *
 * @param {Array} bits input data
 * @return {Array} [CSHIFTL bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    for (let i: number = 1; i < bits.length; i++) result[i - 1] = bits[i]
    result[bits.length - 1] = bits[0]

    return result
}
