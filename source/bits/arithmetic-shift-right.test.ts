import { Bits } from '../types'
import arithmeticShiftRight from './arithmetic-shift-right'

test('ASHIFTR', () => {
    const bits1: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
    const expected1: Bits = [1, 1, 0, 0, 0, 1, 1, 0]
    expect(arithmeticShiftRight(bits1)).toEqual(expected1)

    const bits2: Bits = [0, 0, 0, 0, 1, 1, 0, 1]
    const expected2: Bits = [0, 0, 0, 0, 0, 1, 1, 0]
    expect(arithmeticShiftRight(bits2)).toEqual(expected2)
})
