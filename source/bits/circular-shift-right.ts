import { Bits } from '../types'

/**
 * Circular Shift Right
 *
 * @example
 * circularShiftRight([1,0,1,1,0,1]) => [1,1,0,1,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [CHIFTR bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    result.push(bits[bits.length - 1])
    for (let i: number = 0; i < bits.length - 1; i++) result.push(bits[i])

    return result
}
