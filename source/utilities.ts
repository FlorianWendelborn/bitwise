// 32-bit powers of two wouldn't be possible with <<
export const p2: Array<number> = []
for (let i: number = 0; i < 32; i++) p2[i] = Math.pow(2, i)
