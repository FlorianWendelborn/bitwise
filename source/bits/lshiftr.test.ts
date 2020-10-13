import { Bits } from '../types'
import lshiftr from './lshiftr'

test('LSHIFTR', () => {
    const bits1: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
    const expected1: Bits = [0, 1, 0, 0, 0, 1, 1, 0]
    expect(lshiftr(bits1)).toEqual(expected1)

    const bits2: Bits = [0, 0, 0, 1, 1, 1, 0, 0]
    const expected2: Bits = [0, 0, 0, 0, 1, 1, 1, 0]
    expect(lshiftr(bits2)).toEqual(expected2)
})

