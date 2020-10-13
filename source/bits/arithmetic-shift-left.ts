import { Bits } from '../types'

/**
 * Arithmetic Shift Left
 *
 * @example
 * arithmeticShiftLeft([1,0,1,1,0,1]) => [0,1,1,0,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [ASHIFTL bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    for (let i: number = 1; i < bits.length; i++) result[i - 1] = bits[i]
    result[bits.length - 1] = (0 as Bit)

    return result
}
