import { collided } from './collided';

it('should return true if x and y match an occupied position', () => {
  expect(collided(1, 1, [{ x: 1, y: 1 }])).toBe(true);
});

it('should return false if x match an occupied position but y does not', () => {
  expect(collided(1, 1, [{ x: 1, y: 2 }])).toBe(false);
});

it('should return false if y match an occupied position but x does not', () => {
  expect(collided(1, 1, [{ x: 2, y: 1 }])).toBe(false);
});

it('should return false if x and y does not match an occupied', () => {
  expect(collided(1, 1, [{ x: 2, y: 2 }])).toBe(false);
});
