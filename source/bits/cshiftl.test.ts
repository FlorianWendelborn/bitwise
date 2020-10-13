import { Bits } from '../types'
import cshiftl from './cshiftl'

test('CSHIFTL', () => {
    const bits1: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
    const expected1: Bits = [0, 0, 0, 1, 1, 0, 1, 1]
    expect(cshiftl(bits1)).toEqual(expected1)

    const bits2: Bits = [0, 0, 0, 1, 1, 1, 1, 1]
    const expected2: Bits = [0, 0, 1, 1, 1, 1, 1, 0]
    expect(cshiftl(bits2)).toEqual(expected2)
})
