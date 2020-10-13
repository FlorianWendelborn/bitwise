import { Bits } from '../types'

/**
 * Arithmetic Shift Left
 *
 * @example
 * ashiftl([1,0,1,1,0,1]) => [1,1,0,1,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [ASHIFTL bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    result.push(bits[0])
    for (let i: number = 0; i < bits.length - 1; i++) result.push(bits[i])

    return result
}
