import { Bit, Bits } from '../types'

/**
 * Logical Shift Right
 * 
 * Shifts all given bits to right and returns the resulting bits
 *
 * @example
 * lshiftr([1,0,1,1,0,1]) => [0,1,0,1,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [LSHIFTR bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    result.push(<Bit>0)
    for (let i: number = 0; i < bits.length - 1; i++) result.push(bits[i])

    return result
}
