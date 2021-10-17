import { mod } from './mod';

describe('Mod', () => {
  it('should return absolute value', () => {
    expect(mod(-2, 5)).toBe(3);
  });

  it('should return 0 when mod by itself', () => {
    expect(mod(360, 360)).toBe(0);
  });
});
