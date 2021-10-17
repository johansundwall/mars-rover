import { DirectionAsDegrees } from './helpers/DirectionAsDegrees';
import { move } from './move';

it('should increment y by one when direction is North', () => {
  expect(move({ direction: DirectionAsDegrees.N, x: 2, y: 2 })).toStrictEqual({
    direction: DirectionAsDegrees.N,
    x: 2,
    y: 3,
  });
});
it('should decrement y by one when direction is South', () => {
  expect(move({ direction: DirectionAsDegrees.S, x: 2, y: 2 })).toStrictEqual({
    direction: DirectionAsDegrees.S,
    x: 2,
    y: 1,
  });
});
it('should increment x by one when direction is East', () => {
  expect(move({ direction: DirectionAsDegrees.E, x: 2, y: 2 })).toStrictEqual({
    direction: DirectionAsDegrees.E,
    x: 3,
    y: 2,
  });
});
it('should decrement x by one when direction is West', () => {
  expect(move({ direction: DirectionAsDegrees.W, x: 2, y: 2 })).toStrictEqual({
    direction: DirectionAsDegrees.W,
    x: 1,
    y: 2,
  });
});

it('should throw in invalid input', () => {
  expect(() => move({ direction: 'NorthEast', x: 2, y: 2 })).toThrow();
});
