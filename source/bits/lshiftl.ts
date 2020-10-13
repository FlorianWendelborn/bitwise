import { Bit, Bits } from '../types'

/**
 * Logiscal Shift Left
 * 
 * Shifts all given bits to left and returns the resulting bits
 *
 * @example
 * lshiftl([1,0,1,1,0,1]) => [0,1,1,0,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [LSHIFTL bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    for (let i: number = 0; i < bits.length - 1; i++) result.push(bits[i + 1])
    result.push(<Bit>0)

    return result
}