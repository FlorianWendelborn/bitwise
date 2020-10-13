import { Bits } from '../types'

/**
 * Circular Shift Left
 *
 * @example
 * cshiftl([1,0,1,1,0,1]) => [0,1,1,0,1,1]
 *
 * @param {Array} bits input data
 * @return {Array} [CSHIFTL bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    for (let i: number = 1; i < bits.length; i++) result.push(bits[i])
    result.push(bits[0])

    return result
}
