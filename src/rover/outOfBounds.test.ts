import { outOfBounds } from './outOfBounds';

const boundaries = {
  x: 5,
  y: 5,
};
it('should return true when x is lower than 0', () => {
  expect(outOfBounds(-1, 0, boundaries)).toBe(true);
});

it('should return true when y is lower than 0', () => {
  expect(outOfBounds(0, -1, boundaries)).toBe(true);
});

it('should return true when x is higher than boundary for x', () => {
  expect(outOfBounds(6, 0, boundaries)).toBe(true);
});

it('should return true when y is higher than boundary for y', () => {
  expect(outOfBounds(0, 6, boundaries)).toBe(true);
});

it('should return false when within boundaries', () => {
  expect(outOfBounds(2, 3, boundaries)).toBe(false);
});
