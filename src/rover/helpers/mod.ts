/**
 * Mathematical implementation of modulo
 */
type Mod = (x: number, m: number) => number

export const mod: Mod = (x, m) => ((x % m) + m) % m;
