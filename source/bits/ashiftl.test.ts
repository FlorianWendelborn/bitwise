import { Bits } from '../types'
import ashiftl from './ashiftl'

test('ASHIFTL', () => {
    const bits1: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
    const expected1: Bits = [1, 1, 0, 0, 0, 1, 1, 0]
    expect(ashiftl(bits1)).toEqual(expected1)

    const bits2: Bits = [0, 0, 0, 0, 1, 1, 0, 1]
    const expected2: Bits = [0, 0, 0, 0, 0, 1, 1, 0]
    expect(ashiftl(bits2)).toEqual(expected2)
})
